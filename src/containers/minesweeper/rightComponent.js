import React from 'react';
// components
import LargeText from '../../components/ui/largeText';
import Timer from '../../components/timer';

const RightComponent = (props) => (
  <div style={props.style}>
    <div style={style}>
      <img src={require('../../assets/mine.png')} alt='' style={imageStyle} />
      <LargeText text={props.mines} />
    </div>
    <Timer time={props.time}/>
  </div>
)

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around'
}

const imageStyle = {
  width: 50,
  height: 50
}

export default RightComponent;