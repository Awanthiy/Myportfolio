import React from 'react';
import './Services.css';

const Services = () => {
  return (
     
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <i className="fa-solid fa-crop"></i>
            <br />
            <h2>UI Design</h2>
            <br />
            <p>
            Check out my latest UI designs on Behance!  I've been exploring various concepts 
            See the full projects.
            </p>
            <a href="https://www.behance.net/awym">Go to Behance</a>
          </div>
          <div>
            <i className="fa-solid fa-code"></i>
            <br />
            <h2>Web-Development</h2>
            <br />
            <p>
              I am creating websites using MERN Development.
            </p>
            <a href="#porthfolio">See more</a>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Services;
