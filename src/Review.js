import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(3);
  const { name, job, image, text } = people[index];
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
          <FaChevronLeft onClick={() => setIndex(index + 1)} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={() => setIndex(index - 1)} />
        </button>
      </div>
      <button className="random-btn">surprise me</button>
    </article>
  );
};

export default Review;
