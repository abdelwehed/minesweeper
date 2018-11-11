import React, { Component } from 'react';
import { connect } from 'react-redux';
import surroundingsBoxes, { putMinesRandomly } from '../../../lib/utils';
import Box from '../../../components/box';
import NumberFormat from '../../../lib/numberFormat';
// styles
import styles from './styles';
// redux
import * as playerActions from '../../../store/actions/index';

const format = new NumberFormat();

class Main extends Component {
  state = {
    table: [],
    flaggedBoxes: [],
    indexes: [],
    mines: [],
    seconds: 0,
    minutes: 0,
    first: false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.table!==prevState.table){
      const t = putMinesRandomly(nextProps.mines, nextProps.table);
      for(let i = 0; i < t.length ; i++) {
        if(t[i] === undefined) t[i] = 0
      }
     return { table: t, indexes: [], flaggedBoxes: [] };
    }
    else return null;
  }

  HandleDisplayBoxes = (box, i, e) => {
    const { indexes, table, flaggedBoxes } = this.state;
    const { setResult, mines, addMine, removeMine } = this.props;
   
    if (e.nativeEvent.which === 3) {
      e.preventDefault();

      if (flaggedBoxes.includes(i)) {
        const indexToRemove = flaggedBoxes.indexOf(flaggedBoxes[i]);
        flaggedBoxes.splice(indexToRemove, 1);
        addMine(mines);

      } else if(!indexes.includes(i)) {
        flaggedBoxes.push(i);
        removeMine(mines);
      }
      this.setState({ flaggedBoxes })

    } else {
      let surroundings = []
      if(box === 5) setResult({ gameResult : 'lost' });
      if(box === 0) surroundings = surroundingsBoxes(i).filter(el => table[el] !== 5);
      else surroundings.push(i);
  
      let newIndexes = indexes.concat(surroundings);
      this.setState({ indexes: newIndexes });
    }
  }

  start = () => {
    const { seconds, minutes } = this.state;
    const { setResult } = this.props;

    this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
    if(seconds === 59) this.setState(prevState => ({ seconds: 0, minutes: prevState.minutes + 1 }));
    setResult({ time: `${format.format(minutes)}:${format.format(seconds)}` })
  }

  startCounter = () => {
    setInterval(() => {
      this.start();
    }, 1000);
  }

  render() {
    const { style } = this.props;
    const { table, indexes } = this.state;

    return(
      <div style={styles.style}>
        <div style={style}>
          {table.map((el, i) => {
            const selected = indexes.length > 0 && indexes.indexOf(i) !== -1;
            return (
              <div style={styles.boxStyle} key={i}>
                <Box
                el={el}
                selected={selected}
                onBoxClick={(e) => {
                  !this.state.flaggedBoxes.includes(i) &&
                  this.HandleDisplayBoxes(el, i, e)
                }}
                onContext={(e) => this.HandleDisplayBoxes(el, i, e)}
                flagged={this.state.flaggedBoxes.includes(i)}
                />
              </div>
            )}
          )}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMine: (mines) => dispatch(playerActions.addMine(mines)),
    removeMine: (mines) => dispatch(playerActions.removeMine(mines))
  }
}

export default connect(null, mapDispatchToProps)(Main);