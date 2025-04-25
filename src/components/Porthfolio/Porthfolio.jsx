import React from 'react';
import './Porthfolio.css';

const Portfolio = () => {
  return (
    <div id="porthfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>

        <h2 className="sub-title2">Web Development</h2>
        <div className="work-list">
          <div className="work">
            <h4>My Portfolio Website</h4>
            <p>I developed this website using React.</p>
            <a href="https://github.com/Awanthiy/Myportfolio" target="_blank" rel="noopener noreferrer">
              Check here
            </a>
          </div>
          <div className="work">
            <h4>Pet Care Website</h4>
            <p>This website was developed using the MERN stack: MongoDB, Express.js, React, and Node.js.</p>
            <a href="https://github.com/Awanthiy/PetCareCenter-React" target="_blank" rel="noopener noreferrer">
              Check here
            </a>
          </div>
          <div className="work">
            <h4>Simple GYM Website</h4>
            <p>This is a basic GYM website built using MERN stack technologies.</p>
            <a href="https://github.com/Awanthiy/GYM-Website-MERN" target="_blank" rel="noopener noreferrer">
              Check here
            </a>
          </div>
        </div>

        <h2 className="sub-title2">UI Designs</h2>
        <div className="work-list">
          <ul>
            <li>
              <h4>Webtoon App Design</h4>
              <a href="https://www.behance.net/gallery/220424951/ToonWeb-A-Modern-Webtoon-Watch-App-UI-" target="_blank" rel="noopener noreferrer">
                Check here
              </a>
            </li>
            <li>
              <h4>Kids Game Design - Lady Bug Running Game</h4>
              <a href="https://www.behance.net/gallery/220425907/Miraculous-Dash-A-Mobile-Game-UI-" target="_blank" rel="noopener noreferrer">
                Check here
              </a>
            </li>
            <li>
              <h4>Online Food Order App</h4>
              <a href="https://www.behance.net/gallery/220377093/OrderUp-Online-Food-Ordering-App-UI-Design" target="_blank" rel="noopener noreferrer">
                Check here
              </a>
            </li>
            <li>
              <h4>Ghibli Movie Download Website</h4>
              <a href="https://www.behance.net/awym" target="_blank" rel="noopener noreferrer">
                Check here
              </a>
            </li>
            <li>
              <h4>Anime Movie Download App Design</h4>
              <a href="https://www.behance.net/awym" target="_blank" rel="noopener noreferrer">
                Check here
              </a>
            </li>
            <li>
              <h4>AI Image Generator App Design</h4>
              <a href="https://www.behance.net/awym" target="_blank" rel="noopener noreferrer">
                Check here
              </a>
            </li>
            <li>
              <h4>Online Book Order Website Design</h4>
              <a href="https://www.behance.net/awym" target="_blank" rel="noopener noreferrer">
                Check here
              </a>
            </li>
            <li>
              <h4>Genshin Impact Game Website for Beginners</h4>
              <a href="https://www.behance.net/awym" target="_blank" rel="noopener noreferrer">
                Check here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
