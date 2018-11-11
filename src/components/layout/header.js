import React from 'react';
import Title from '../ui/title';

const style = {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#7FFFD4'
}

const Header = ({ title }) => (
  <div style={style}>
   <Title title={title}/>
  </div>
)

export default Header;