const style = {
  display: 'flex',
  flex: 1,
  alignItem: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

const sstyle = {
  display: 'flex',
  flex: 1,
  alignItem: 'center',
  justifyContent: 'space-between',
  minHeight: '300px',
}

const rightStyle = {
  display: 'flex',
  alignItems: 'center',
  flex: 0.8,
  flexDirection: 'column',
}

const mainStyle = {
  maxWidth: '600px',
  padding: '10px',
  display: 'grid',
  gridTemplateColumns: 'repeat(30, 20px)',
}

export default {
  style,
  sstyle,
  rightStyle,
  mainStyle
}