import React, { useMemo, useState, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { resizeUrlButterImage, getYoutubeId } from '../../utils/helpers';
import Link from '../Link';
import { ReactComponent as YoutubeIcon } from '../../static/assets/youtube.svg';
import ImageLazyLoad from '../../components/Reusable/ImageLazyLoad';

const useStyles = makeStyles((theme) => ({
  container: {},
  reverseContent: {
    flexDirection: 'row-reverse'
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: theme.spacing(2),
    fontFamily: 'Raleway'
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
    // background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(220,68,51,0.4) 2%)",
    // backgroundPosition: "0 100%",
    // backgroundRepeat: "repeat-x",
    // backgroundSize: "2px 2px",
    textDecoration: "none",
    maxWidth: "fit-content",
    // transition: [
    //   "background-size .3s",
    //   "color .3s"
    // ],
    color: '#ee3124',
    letterSpacing: 'normal',
    fontFamily: 'Raleway',
    fontSize: '20px',
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    paddingBottom: "5px",
    '&:hover': {
      // backgroundSize: "4px 50px",
      color: '#cf1c10'
    }
  },
  ytButton: {
    display: 'flex',
    height: '300px',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    justifyContent: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundColor: '#000',
    '& svg': {
      cursor: 'pointer',
      width: 50
    }
  }
}));

const resizeImage = (url, height) => {
  return resizeUrlButterImage(url, {
    compress: true,
    resize: {
      h: height //255
    },
    auto_image: true
  });
};

const MediaContent = React.memo(
  ({ imageUrl, videoUrl, alt, className, height, offsetLoader, ...props }) => {
    const classes = useStyles();
    const resizeUrl = useMemo(() => resizeImage(imageUrl, height), [
      imageUrl,
      height
    ]);
    const videoId = useMemo(() => getYoutubeId(videoUrl), [videoUrl]);
    
    return (
      <Grid
        container
        justify="center"
        item
        xs={12}
        md={5}
        className={clsx(classes.mediaContainer, className)}
      >
        {resizeUrl && (
          // <img src={resizeUrl} alt={alt} {...props} height="255px" className={classes.image} />
          <ImageLazyLoad
            height={height}
            imageUrl={imageUrl}
            caption={alt}
            placeHolderHeight={50}
            imageStyle={classes.image}
            placeHolderStyles={classes.image}
            showedImageHeight={255}
            offset={offsetLoader}
          />
        )}
        {videoId && <YoutubeComponent videoId={videoId} />}
      </Grid>
    );
  }
);

const YoutubeComponent = React.memo(function({ videoId }) {
  const classes = useStyles();
  const [play, setPlay] = useState(false);

  const handlePlay = useCallback(() => {
    setPlay(true);
  }, []);

  if (play) {
    return (
      <iframe
        title="Boost Indonesia"
        width="500"
        height="300"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${videoId}/mqdefault.jpg)`
      }}
      className={classes.ytButton}
    >
      <YoutubeIcon onClick={handlePlay} />
    </div>
  );
});

function MiniInformationItem({
  rightContent = false,
  imageUrl,
  videoUrl,
  title,
  actionUrl,
  actionLabel,
  description,
  height,
  offsetLoader,
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
      <MediaContent
        imageUrl={imageUrl}
        videoUrl={videoUrl}
        alt={title}
        height={height}
        className={propClasses.mediaContent}
        offsetLoader={offsetLoader}
      />
      <Grid item xs={12} md={7}>
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
          <Typography variant="h5" className={classes.linkText}>
            <Link href={actionUrl}>
              {actionLabel} ->
            </Link>
          </Typography>
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
