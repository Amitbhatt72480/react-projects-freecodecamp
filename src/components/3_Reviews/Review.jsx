import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const suprise = ()=>{
      let rand = Math.floor(Math.random() * people.length)
      setIndex(rand);
  }

  const checkNum = (num) =>{
    if(num > people.length-1){
      return 0;
    }
    else if(num < 0){
      return people.length-1;
    }
    return num
  }

  const nextPerson = ()=>{
    setIndex((prev)=>{
      
      let newIndex = prev + 1;
      return checkNum(newIndex)
    })
  }

  const prevPerson = ()=>{
    setIndex((prev)=>{
      let newIndex = prev - 1;
      return checkNum(newIndex)
    })
  }


  return <>
  <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button>
    </div>
    <button onClick={suprise} className='random-btn'>Suprise Me</button>
  </article>
  </>
};

export default Review;
