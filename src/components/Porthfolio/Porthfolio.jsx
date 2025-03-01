import React from 'react';
import a from '../../assets/a.png';
import b from '../../assets/b.png';
import c from '../../assets/c.png';
import d from '../../assets/d.png';
import e from '../../assets/e.png';
import f from '../../assets/f.png';
import wa from '../../assets/wa.png';
import h from '../../assets/h.png';
// import wa from '../../assets/wa.png';
// import image from '../../assets/image.png';
import './Porthfolio.css';

const Portfolio = () => {
  return (
    <div id="porthfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>

        <h2 className="sub-title2">Web Development</h2>
        <div className="work-list">
          <div className="work">
            <img src={wa} alt="Music App" />
            <div className="layer">
              <h3>My Portfolio Website</h3><p>I Developed this website using React.</p>
              <a href="https://awanthiy.github.io/Myportfolio/" target="_blank" rel="noopener noreferrer">
                Click to visit
              </a>
            </div>
          </div>
          <div className="work">
            <img src={h} alt="AI Photo Generator" />
            <div className="layer">
              <h3>Pet Care Website</h3><p>I Developed This website using MERN development.Mongo DB,Express JS ,React and Node JS.</p>
              <a href="https://github.com/Awanthiy/PetCareCenter-MERN" target="_blank" rel="noopener noreferrer">
                Click to visit
              </a>
            </div>
          </div>
          <div className="work">
            <img src={a} alt="Webtoon App" />
            <div className="layer">
              <h3>Simple GYM website</h3><p>This website also developed using MERN Developmebt</p>
              <a href="https://github.com/Awanthiy/GYM-Website-MERN" target="_blank" rel="noopener noreferrer">
                Click to visit
              </a>
            </div>
          </div>
        </div>

        <h2 className="sub-title2">UI Designs</h2>
        <div className="work-list">
          <h2><ul>
            <li><a href="https://www.behance.net/gallery/220424951/ToonWeb-A-Modern-Webtoon-Watch-App-UI-">Webtoon app design</a></li>
            <li><a href="https://www.behance.net/gallery/220425907/Miraculous-Dash-A-Mobile-Game-UI-">Kids Game design - Lady Bug Running game</a></li>
            <li><a href="https://www.behance.net/gallery/220377093/OrderUp-Online-Food-Ordering-App-UI-Design">Onlinefood order app</a></li>
            <li><a href="https://www.behance.net/awym">Gihibi Movie Doenload website</a></li>
            <li><a href="https://www.behance.net/awym">Anime movie download App Design</a></li>
            <li><a href="https://www.behance.net/awym">AI Image Genarator App Design</a></li>
            <li><a href="https://www.behance.net/awym">Online Book Order WEbsite Design</a></li>
            <li><a href="https://www.behance.net/awym">Genshin Impact Game Website for Beginers</a></li>
            
            </ul></h2>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;