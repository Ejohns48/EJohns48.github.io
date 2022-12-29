import React from "react";
import "../css/Homepage.css";
import ej4 from '../media/images/ej.jpg';
import ej3 from '../media/images/ej.jp2';
import ej2 from '../media/images/ej.jxr';
import ej1 from '../media/images/ej.webp';
import github from '../media/images/githubwhite.png';
import linkedin from '../media/images/linkedin.png';
import ImgNextGen from "./ImgNextGen";

const Home = () => {
  return (
    <main>
      <div id='greeting'>
        <ul id='letterContainer'>
          <li className="letter">W</li>
          <li className="letter">e</li>
          <li className="letter">l</li>
          <li className="letter">c</li>
          <li className="letter">o</li>
          <li className="letter">m</li>
          <li className="letter">e</li>
        </ul>
      </div>
      <section id="grid-container">
        <section id="main-top">
          <p id='intro'>
          Hi, I'm Eric, a full stack web developer that builds responsive UI/UX designs with scalability in mind.
          I graduated <em><i>cum laude</i></em> with an Associates Degree in Computer Technology.
          Together we can bring your website designs to life.
          </p>
        </section>

        <section id='main-left-aside'>
          <div id='socials'>        
          <a href="https://github.com/Ejohns48/" target='_blank' rel='noreferrer'><img src={github} alt="" width='25px' height='25px' /></a>
          <a href="https://www.linkedin.com/in/Ejohns48/" target='_blank' rel='noreferrer'><img src={linkedin} alt="" width='25px' height='25px' /></a>
          </div>
        </section>

        <section id="main-left-top">
        <div id='img'>
            <ImgNextGen
            id='me'
            srcWebp={ej1}
            srcJxr={ej2} 
            srcJp2={ej3} 
            fallback={ej4}
            alt="Photo of Eric Johnson."
            width="200px"
            height="200px"
            />
          </div>
          <h1>Eric Johnson</h1><br />
          <p><a id='phone' href='tel:8635103476'>(863) 510-3476</a></p><br />
          <p><a id='email' href='mailto:Ejohnsmedia@Gmail.com' target='_blank' rel='noreferrer'>Ejohnsmedia@Gmail.com</a></p>          
        </section>
        
        <section id="main-right">
          <div id='cardboxheadercontainer'>
            <h1 id='card-box-header'>Helpful Articles</h1>
          </div>          
          <div className='card-box-container'>
            <a className="card-box-link" href='https://dev.to/jeroendedauw/advice-for-junior-developers-30am' target='_blank' rel="noreferrer">
              <div className="card-box card-box-1">
                <h1 className="card-box-title card-box-1-title">Advice For Junior Developers</h1>
              </div>
            </a>
          </div>

          <div className='card-box-container'>
            <a href='https://www.freecodecamp.org/news/react-helmet-examples/' target='_blank' rel="noreferrer">
              <div className="card-box card-box-2">
                <h1 className="card-box-title card-box-2-title">Handling Metadata in Single Page Apps</h1>
              </div>
            </a>
          </div>
          <div className='card-box-container'>
            <a href='https://www.codementor.io/learn-programming/steve-klabniks-9-words-advice-programming-beginners' target='_blank' rel="noreferrer">
              <div className="card-box card-box-3">
                <h1 className="card-box-title card-box-3-title">Tips For Beginners</h1>
              </div>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
