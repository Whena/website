import React from 'react';

function Carousel() {

  const images = [
    "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
    "https://images.unsplash.com/photo-1557389352-e721da78ad9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 4) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  const onNextClick = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const onPrevClick = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  const sliderStyle = {
    transform: `translateX(${index * -100}%)`, 
    transition: '0.1s',
  };

  const ArrowRight = () => (
    <svg
      style={{
        marginLeft: "2px",
        marginTop: "2px"
      }}
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onNextClick}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
  
  const ArrowLeft = () => (
    <svg
      style={{
        marginRight: "2px",
        marginTop: "2px"
      }}
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onPrevClick}
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );

  return (
    <div className={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className={{
        height: '100%',
        width: '80%',
        // transition: 'background-image .3s ease-in-out'
        ...sliderStyle
      }}
      key={index}
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '75vh',
        // ...sliderStyle
      }}></div>
      <ArrowLeft />
      <ArrowRight />
    </div>
  );

}

export default Carousel;