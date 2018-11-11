import React from 'react';

const renderBox = (box, selected) => {
  if(selected) {
    switch (box) {
      case 0:
        return;
      case 1:
        return <p style={{color: 'red'}}>{box}</p>
      case 2:
        return <p style={{color: 'blue'}}>{box}</p>
      case 3:
        return <p style={{color: 'green'}}>{box}</p>
      case 4:
        return <p style={{color: 'yellow'}}>{box}</p>
      case 5:
        return <img src={require('../../assets/Demineur.jpg')} alt='' style={{width: 20, height: 20, alignSelf: 'center' }} />
      default:
        console.log({ box });
    }
  } else {
    return box;
  }
}

const Box = (props) => (
  <div
  onClick={props.onBoxClick}
  onContextMenu={props.onContext}
  style={getStyle(props.selected, props.flagged)}>
  {renderBox(props.el, props.selected)}
  </div>
)

const getStyle = (selected, flagged) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '12px',
    color: selected ? 'black' : 'transparent',
    backgroundSize: 'contain',
    backgroundImage: flagged ? `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxToaW_131t9EUcKnTGINiFIbJuySUf3vT_AD7DD7hXTeGzfKN')` : null,
    minWidth: '15px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: !selected ? '1px 3px 10px 2px black' : null
  }
}

export default Box;