import React, { useState, useEffect } from 'react';

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const [results, setResults] = useState([]);
  let recognition = null;

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.onresult = (event) => {
        const lastResult = event.results[event.results.length - 1];
        setTranscript(lastResult[0].transcript);
      };
      recognition.onend = () => {
        if (transcript) {
          setResults([...results, transcript]);
        }
      };
    } else {
      console.log('Speech recognition not supported in this browser.');
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setTranscript(''); // Clear previous transcript
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div>
      <h1 className='text-center pt-5'>Practice your Accent!</h1>
      <div className="container-fluid text-center p-3">
      <button onClick={startListening} className='btn btn-primary m-4'>Start Speaking</button>
      <button onClick={stopListening} className='btn btn-danger'>Stop Speaking</button>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col">
      <p className=''>Transcript: {transcript}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <h2>Results:</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpeechToText;
