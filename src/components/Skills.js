import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import java from "../assets/img/java-icon.svg"
import aws from "../assets/img/amazon_aws-icon.svg"
import nodejs from "../assets/img/nodejs-icon.svg"
import reactjs from "../assets/img/reactjs-icon.svg"
import express from "../assets/img/expressjs-icon.svg"
import mongo from "../assets/img/mongodb-icon.svg"
import tensorflow from "../assets/img/tensorflow-icon.svg"
import python from "../assets/img/python-icon.svg"
import mysql from "../assets/img/mysql-icon.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Being passionate towards the advancing technology, I wish to attain knowledge in evey domain of Computer Science. Domains explored till now includes the following.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={mongo} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={reactjs} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={aws} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={tensorflow} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
