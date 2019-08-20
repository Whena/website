import React, { useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { resizeUrlButterImage, getYoutubeId } from '../../utils/helpers';
import Link from '../Link';

const useStyles = makeStyles((theme) => ({
  container: {},
  reverseContent: {
    flexDirection: 'row-reverse'
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: theme.spacing(2)
  },
  image: {
    maxHeight: 300,
    maxWidth: '100%'
  },
  mediaContainer: {
    overflow: 'hidden'
  },
  description: {
    lineHeight: 1.56,
    fontSize: 18,
    fontStyle: 'normal',
    fontStretch: 'normal',
    fontWeight: 500,
    letterSpacing: 'normal',
    marginBottom: theme.spacing(2)
  },
  linkText: {
    color: '#ee3124',
    letterSpacing: 'normal',
    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal'
  }
}));

const resizeImage = (url, height) => {
  return resizeUrlButterImage(url, {
    compress: true,
    resize: {
      h: height//255
    }
  });
};

const MediaContent = React.memo(
  ({ imageUrl, videoUrl, alt, className, height, ...props }) => {
    const classes = useStyles();
    const resizeUrl = useMemo(() => resizeImage(imageUrl, height), [imageUrl, height]);
    const videoId = useMemo(() => getYoutubeId(videoUrl), [videoUrl]);

    return (
      <Grid
        container
        justify="center"
        item
        xs={12}
        sm={5}
        className={clsx(classes.mediaContainer, className)}
      >
        {resizeUrl && (
          <img
            src={resizeUrl}
            alt={alt}
            {...props}
            className={classes.image}
          />
        )}
        {videoId && (
          <iframe
            title="Boost Indonesia"
            width="500"
            height="300"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </Grid>
    );
  }
);

function MiniInformationItem({
  rightContent = false,
  imageUrl,
  videoUrl,
  title,
  actionUrl,
  actionLabel,
  description,
  height,
  classes: propClasses = {}
}) {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={12}
      spacing={3}
      alignItems="center"
      className={clsx(classes.container, propClasses.container, {
        [classes.reverseContent]: rightContent
      })}
    >
      <MediaContent imageUrl={imageUrl} videoUrl={videoUrl} alt={title} height={height} className={propClasses.mediaContent} />
      <Grid item xs={12} sm={7}>
        <Typography
          variant="h1"
          color="inherit"
          display="block"
          gutterBottom
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="inherit"
          display="block"
          gutterBottom
          className={classes.description}
        >
          {description}
        </Typography>
        {actionUrl && (
          <Link href={actionUrl} className={classes.link}>
            <Typography variant="h5" className={classes.linkText}>
              {actionLabel} ->
            </Typography>
          </Link>
        )}
      </Grid>
    </Grid>
  );
}

MiniInformationItem.propTypes = {
  left: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  actionUrl: PropTypes.string,
  actionLabel: PropTypes.string,
  imageUrl: PropTypes.string,
  videoUrl: PropTypes.string
};

export default MiniInformationItem;
