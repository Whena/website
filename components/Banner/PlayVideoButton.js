import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';
import VideoModal from './VideoModal';

function PlayVideoButton({ videoUrl, videoButtonText = 'Play Video' }) {
  const classes = useStyles();
  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideoModal = useCallback(() => setOpenVideo(true), []);
  const handleCloseVideoModal = useCallback(() => setOpenVideo(false), []);

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        onClick={handleOpenVideoModal}
        className={classes.buttonSeeVideo}
      >
        <PlayCircleFilled className={classes.playIcon} />
        {videoButtonText}
      </Button>
      <VideoModal
        videoUrl={videoUrl}
        open={openVideo}
        onClose={handleCloseVideoModal}
      />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  buttonSeeVideo: {
    color: '#FFF',
    borderRadius: '4px',
    fontSize: 20,
    whiteSpace: 'nowrap',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(7, 7, 7, 0.25)',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(7, 7, 7, 0.4)'
    }
  },
  playIcon: {
    marginRight: 10,
    fontSize: 34,
    color: 'white'
  }
}));

export default PlayVideoButton;
