import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="Aboutme-content">
            <div className="container">

                <div className="card">
                    <i className="fa fa-html5" aria-hidden="true"></i>
                    <h3 className="title">HTML</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle className="stroke" cx="60" cy="60" r="50"/>
                        </svg>
                    </div>
                </div>

                <div className="card">
                    <i className="fa fa-css3" aria-hidden="true"></i>
                    <h3 className="title">CSS</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle className="stroke" cx="60" cy="60" r="50"/>
                        </svg>
                    </div>
                </div>

                <div className="card">
                    <i className="fa fa-github" aria-hidden="true"></i>
                    <h3 className="title">Git</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle className="stroke" cx="60" cy="60" r="50"/>
                        </svg>
                    </div>
                </div>

                <div className="card">
                    <i className="fa fa-react" aria-hidden="true"></i>
                    <h3 className="title">React</h3>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
                    </div>
                    <div className="circle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <circle className="stroke" cx="60" cy="60" r="50"/>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutMe;
