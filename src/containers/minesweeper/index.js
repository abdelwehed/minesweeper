import React, { Component } from "react";
import { connect } from 'react-redux';
// components
import List from './list';
import RightComponent from './rightComponent';
import Main from './main/main';
import Restart from './restart';
// style
import styles from './styles';
// redux
import * as playerActions from '../../store/actions/index';

// this export is for tests
export class Minesweeper extends Component {
  state = {
    gameResult: null,
    time: '00:00'
  }

  componentDidMount = () => {
    this.props.getPlayers();
    this.props.initGame();
  }

  handleLost = () => {
    this.setState({ gameResult: null });
    this.props.initGame();
  }

  handleChanges = value => {
    this.setState(value);
  };

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.mines!==prevState.mines){
      if(nextProps.mines === 0) {
        return {
          gameResult: 'win'
        };
      }
      else return null
    }
    else return null;
  }
 
  render() {
    const { list, mines, table } = this.props;
    const { gameResult, time } = this.state;

    return (
      <div style={styles.style}>
        {gameResult && <Restart
          backgroundColor={gameResult === 'win' ? 'pink' : '#FFD700'}
          restartGame={this.handleLost}
        />}
        <div style={styles.sstyle}>
         <List
          playersList={list}
          style={{flex: 1.5, maxHeight: '350px', overflow: 'scroll'}}
          />
          <Main
          style={styles.mainStyle}
          setResult={this.handleChanges}
          mines={mines}
          table={table}
          />
          <RightComponent
          style={styles.rightStyle}
          mines={mines}
          time={time}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    list: state.player.playersList,
    mines: state.main.mines,
    table: state.main.table
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPlayers: () => dispatch(playerActions.getPlayers()),
    initGame: () => dispatch(playerActions.initGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Minesweeper);