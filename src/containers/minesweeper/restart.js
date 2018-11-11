import React from 'react';

const Restart = (props) => (
  <div style={getStyle(props.backgroundColor)}>
    {props.backgroundColor === 'pink' && <p>Félicitations</p>}
    <button onClick={() => props.restartGame()}>Restart</button>
  </div>
)

const getStyle = (backgroundColor) => {
  return {
    width: '100%',
    height: '60px',
    color: 'black',
    display: 'flex',
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default Restart;