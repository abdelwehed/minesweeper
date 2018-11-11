import React from 'react';
import MediumText from '../ui/mediumText';

const style = {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000',
  color: '#FFFFFF',
  paddingVertical: '60px'
}

const Footer = ({ text }) => (
  <div style={style}>
   <MediumText text={text}/>
  </div>
)

export default Footer;