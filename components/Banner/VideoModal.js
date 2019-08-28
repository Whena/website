import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import { getYoutubeId } from '../../utils/helpers';

function VideoModal({ videoUrl, open = false, onClose, ...props }) {
  const classes = useStyles();
  const videoId = useMemo(() => getYoutubeId(videoUrl), [videoUrl]);

  return (
    <Dialog
      open={open}
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      fullWidth
      classes={{ paper: classes.paper }}
      maxWidth="md"
      onClose={onClose}
      {...props}
    >
      <iframe
        title="Boost Indonesia"
        className={classes.iframe}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Dialog>
  );
}

const useStyles = makeStyles((theme) => ({
  iframe: {
    width: '100%',
    height: 'calc(100% + 65px)',
    marginTop: -65,
    display: 'block'
  },
  paper: {
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 400,
      margin: 0,
      width: '100%',
      maxWidth: '100%'
    }
  }
}));

VideoModal.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  open: PropTypes.bool
};

export default VideoModal;
