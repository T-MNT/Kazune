import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Howler } from 'howler';
import ReactHowler from 'react-howler';
import React, { useState, useEffect } from 'react';

const Lecteur = (props) => {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [index, setIndex] = useState(0);

  let structure = [3, 10, 14];

  let prediction = props.prediction[0];

  let musicHandler = () => {
    if (time === Math.round(prediction[structure[index]].time)) {
      setIndex(index + 1);
    }
    if (index > 0) {
      switch (time) {
        case Math.round(prediction[structure[index - 1]].time) + 10:
          Howler.volume(1);
          break;
        case Math.round(prediction[structure[index - 1]].time) + 9:
          Howler.volume(0.9);
          break;
        case Math.round(prediction[structure[index - 1]].time) + 8:
          Howler.volume(0.8);
          break;
        case Math.round(prediction[structure[index - 1]].time) + 7:
          Howler.volume(0.7);
          break;
        case Math.round(prediction[structure[index - 1]].time) + 6:
          Howler.volume(0.6);
          break;
        case Math.round(prediction[structure[index - 1]].time) + 5:
          Howler.volume(0.5);
          break;
        case Math.round(prediction[structure[index - 1]].time) + 4:
          Howler.volume(0.4);
          break;
        case Math.round(prediction[structure[index - 1]].time) + 3:
          Howler.volume(0.3);
          break;
        case Math.round(prediction[structure[index - 1]].time) + 2:
          Howler.volume(0.2);
          break;
        case Math.round(prediction[structure[index - 1]].time) + 1:
          console.log('test');
          Howler.volume(0.1);
          break;
      }
    }
    switch (time) {
      case Math.round(prediction[structure[index]].time) - 10:
        Howler.volume(0.9);
        break;
      case Math.round(prediction[structure[index]].time) - 9:
        Howler.volume(0.8);
        break;
      case Math.round(prediction[structure[index]].time) - 8:
        Howler.volume(0.7);
        break;
      case Math.round(prediction[structure[index]].time) - 7:
        Howler.volume(0.6);
        break;
      case Math.round(prediction[structure[index]].time) - 6:
        Howler.volume(0.5);
        break;
      case Math.round(prediction[structure[index]].time) - 5:
        Howler.volume(0.4);
        break;
      case Math.round(prediction[structure[index]].time) - 4:
        Howler.volume(0.3);
        break;
      case Math.round(prediction[structure[index]].time) - 3:
        Howler.volume(0.2);
        break;
      case Math.round(prediction[structure[index]].time) - 2:
        Howler.volume(0.1);
        break;
      case Math.round(prediction[structure[index]].time) - 1:
        Howler.volume(0.0);
        break;
    }
  };
  musicHandler();

  useEffect(() => {
    let timerInterval = null;

    if (timerRunning) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [timerRunning]);

  let formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0')
    );
  };

  return (
    <div className="absolute bottom-[0px] left-[0px] h-[80px] w-full bg-[#FAF8F1]">
      <ReactHowler
        playing={timerRunning}
        src={require(`../../assets/music/naruto-${index}.mp3`)}
      />
      <div className="w-[35%] mx-auto h-full flex justify-between items-center">
        <div className="flex items-center h-full">
          {timerRunning ? (
            <FontAwesomeIcon
              icon={faPause}
              style={{ color: '#252627' }}
              className="h-[40px] cursor-pointer"
              onClick={() => setTimerRunning(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlay}
              className="h-[40px] cursor-pointer"
              style={{ color: '#252627' }}
              onClick={() => setTimerRunning(true)}
            />
          )}
        </div>
        <div className="h-[4px]  rounded-2xl w-[400px] bg-slate-700"></div>
        <p
          className="timer font-jap text-3xl font-bold tracking-[4px]"
          id="timer"
        >
          {formatTime(time)}
        </p>
      </div>
    </div>
  );
};

export default Lecteur;
