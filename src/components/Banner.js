/* eslint-disable jsx-a11y/img-redundant-alt */

// import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

import { useState, useEffect } from "react";

export const Banner = () => {

  const toRotate = [ 'Web Developer', 'Web Designer', 'UI/UX Designer' ]; // text to rotate
  const [ text, setText ] = useState(''); // empty text
  const [ loopNum, setLoopNum ] = useState(0); // loop number of times
  const [ isDeleting, setIsDeleting ] = useState(false); // deleting text
  const [ delta, setDelta ] = useState(300 - Math.random() * 100); // how fast the next letter is typed
  const period = 2000; // transition period between each word
  const [ index, setIndex ] = useState(1);

  useEffect(() => {
      // fucntion to take care of typing and/or deleting
      let ticker = setInterval(() => {
        tick(); // run tick() function
      }, delta); // how fast

      return () => { clearInterval(ticker) };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text] // when text has changed
  
  );

  const tick = () => {

    let i = loopNum % toRotate.length; // The remainder operator (%) returns the remainder left over
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }

  };
  

  return ( 

    <section className="banner" id="home">

      <Container> 
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            { ({isVisible}) => // isVisible destructure shortcut
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline"> Welcome to my portfolio </span>
                <h1> {`Hi I'm Larry, a `} <span className="wrap"> {text} </span> </h1>
                <p> This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. </p>
                <button onClick={ () => console.log('connect')}> Let's connect <ArrowRightCircle/> </button>
              </div>
            }
            </TrackVisibility>
          </Col> 
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header image" />
          </Col>
        </Row> 
      </Container>

    </section>

  )

}  

// export default banner