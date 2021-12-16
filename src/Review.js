import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(3);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      number = 0;
    }
    if (number < 0) {
      number = people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h2 className="author">{name}</h2>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn">surprise me</button>
    </article>
  );
};

export default Review;
