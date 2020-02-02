import createStyles from '@material-ui/core/styles/createStyles';

export default createStyles({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 99999,
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
