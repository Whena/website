import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    height: 520
  },
  leftLayout: {
    // backgroundImage: "url(/static/assets/boostplay/how_to_activate/phone_frame/asset-mockup)"
    backgroundImage: "url(/static/assets/boostplay/how_to_activate/asset-successactivation-boostcash@3x.png)",
    backgroundSize: "100% 100%",
    height: '100%'
  },
  phoneFrame: {
    // position: 'relative',
    height: '80%',
    marginLeft: 30,
    marginTop: 50
  },
  phoneDisplay: {
    position: 'relative',
    height: '20%',
    marginLeft: 100
  }
}));

export default useStyles;
