import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bot from "./bot.gif";
import Animatetext from './Animatetext';
import { NavLink } from 'react-router-dom';
import SpeechToText from './Speechtotext';

function Test(props) {
  const [text, setText] = useState(['harsh', 'abhay', "shyam"]);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  let [count, setCount] = useState(0);
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text[count]);
    utterance.lang = selectedLanguage;
    window.speechSynthesis.speak(utterance);
  };

  return (

    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6   order-2 order-lg-1 mt-lg-5 ">
                  <h1 style={{ fontSize: '80px' }}>
                    Hello! <strong className="brand-name">Learner</strong>
                  </h1>
                  <p className="my-3" style={{ fontSize: "20px" }}>
                    <div className="textanimate"><Animatetext /></div>
                    Below select your Language and start Practicing!<br />
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className='form-select'
                    >
                      <option value="en-US">English (US)</option>
                      <option value="es-ES">Spanish (Spain)</option>
                      <option value="fr-FR">French (France)</option>
                      <option value="de-DE">German (Germany)</option>
                      <option value="ja-JP">Japanese (Japan)</option>
                      {/* Add more language options here */}
                    </select>
                  </p>
                  <div className="row">
                    <div className="col">
                      <button type="button" class="btn btn-secondary btn-lg" onClick={()=>{
                        setCount(count--);
                        handleSpeak();
                      }}> {`<- Prev Quesion`}</button>
                    </div>
                    <div className="col">
                      <button type="button" class="btn btn-primary btn-lg" onClick={()=>{
                        setCount(count++);
                        handleSpeak();
                      }}>{`Next Quesion->`} </button>
                    </div>
                  </div>
                  <div className="mt-3 ">
                    <br />
                    <NavLink onClick={handleSpeak} className="btn-get-started">
                      Let's Hear
                    </NavLink>
                    <div className="row">
                      <br />
                      <br />
                      <NavLink to="/speechtotext"><button className='btn btn-primary d-block' >Practice</button></NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={bot} className="img-fluid animated" alt=" home img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  );
}

Test.propTypes = {
  text: PropTypes.string,
  selectedLanguage: PropTypes.string,
};

export default Test;
