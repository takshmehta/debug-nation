import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
// import slide1 from "../images/slid1.jpg";
// import slide2 from "../images/slid2.jpg";
// import slide3 from "../images/slid3.jpg";

const items = [
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/debug-nation.appspot.com/o/slid1.jpg?alt=media&token=d4440ad2-702b-44b8-b014-df8363f30661",
    altText: "Slide 1",
    caption:
      "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”",
    caption2: " Martin Fowler",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/debug-nation.appspot.com/o/slid2.jpg?alt=media&token=0466ce46-a032-40dc-9bc0-c6454feed092",
    altText: "Slide 2",
    caption: "“ Code is like humor. When you have to explain it, it’s bad.”",
    caption2: "Cory House",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/debug-nation.appspot.com/o/slid3.jpg?alt=media&token=dc134d8d-a843-4fdb-b626-c522a9515497",
    altText: "Slide 3",
    caption:
      "“If you control the code, you control the world. This is the future that awaits us.”",
    caption2: "Marc Goodman",
  },
];

const Carousel1 = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          className="img-fluid"
          style={{
            width: "100%",
            maxHeight: 640,
            marginTop: "8px",
          }}
          src={item.src}
          alt={item.altText}
        />
        <CarouselCaption
          captionText={item.caption2}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className="mt-5"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Carousel1;
