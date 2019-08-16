import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 100,
    marginBottom: 100
  },
  imageContainer: {
    borderRadius: "50%",
    backgroundColor: "#000",
    width: 400,
    height: 400,
    [theme.breakpoints.down("md")]: {
      width: 300,
      height: 300
    },
    [theme.breakpoints.down("sm")]: {
      width: 200,
      height: 200
    }
  },
  contentImage: {
    width: 600,
    height: 350
  },
  contentWording: {
    width: 500
  },
  heading: {
    fontWeight: 700,
    color: "#565e6b"
  },
  description: {
    marginTop: 20,
    color: "#565e6b",
    [theme.breakpoints.down("sm")]: {
      // marginLeft: 10,
      // marginRight: 10
    }
  },
  knowMoreHereLink: {
    textDecoration: "none",
    fontSize: 25,
    color: "rgb(220, 68, 51)"
  },
  knowMoreHereLinkContainer: {
    marginTop: 15
  },
}));

export default useStyles;
