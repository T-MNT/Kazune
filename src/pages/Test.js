import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Button from '../components/inputs/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Test = (props) => {
  const [testStarted, setTestStarted] = useState(false);
  const [testOver, setTestOver] = useState(false);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [times, setTimes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let timerInterval = null;

    if (testStarted) {
      console.log('lol');
      timerInterval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [testStarted]);

  useEffect(() => {
    if (times.length === 10) {
      axios.post(
        'https://naruto-data-default-rtdb.europe-west1.firebasedatabase.app/times.json',
        times
      );
    }
  }, [times]);

  let timeHandler = () => {
    if (index === 9) {
      setTimes([...times, timer]);
      setTestOver(true);
    } else {
      setTimes([...times, timer]);
      setTimer(0);
      setIndex(index + 1);
    }
  };

  let contentDisplayer = () => {
    if (testStarted && testOver === false) {
      return (
        <div className="h-[100%] w-full  rounded flex items-center justify-around">
          <p className="text-white   text-4xl font-jap">
            Cliquez sur la page pour passer à la suivante
          </p>
          <div className="h-[100%] overflow-y-auto">
            <img
              src={require(`../assets/pages/page-${index}.JPG`)}
              onClick={() => timeHandler()}
              className=" cursor-pointer"
            />
          </div>
          <p className="text-white text-4xl font-jap">
            Vous pouvez défiler chaque page verticalement
          </p>
        </div>
      );
    }
    if (testStarted === false && testOver === false) {
      return (
        <div>
          <h3
            className={`h-[15vh] text-8xl text-center ${
              props.theme === 'light' ? 'text-black' : 'text-white'
            }  font-jap mb-8`}
          >
            Calibrage de{' '}
            <span className="text-red-600 ">l'intelligence artificielle</span>{' '}
          </h3>
          <div className="flex flex-col justify-center items-center">
            <p
              className={`text-5xl text-center ${
                props.theme === 'light' ? 'text-black' : 'text-white'
              }  font-jap mb-20 w-[60%] mx-auto tracking-wider`}
            >
              Le but de ce test est d'estimer votre vitesse de lecture afin
              d'affiner nos modèles de prédiction et d'améliorer votre
              experience. Ce test consiste à lire une dizaine de pages avec plus
              ou moins de texte et d'enregistrer votre temps. Afin d'avoir les
              meilleurs résultats possibles, gardez votre vitesse de lecture
              habituelle. Pour passer à la page suivante, cliquez simplement sur
              celle-ci. Cliquez sur commencer pour lancer le test.
            </p>
            <Button onClick={() => setTestStarted(true)}>Commencer</Button>
          </div>
        </div>
      );
    }
    if (testStarted && testOver) {
      return (
        <div className="flex flex-col justify-center">
          <p
            className={`text-6xl text-center ${
              props.theme === 'light' ? 'text-black' : 'text-white'
            }  font-jap mb-20 w-[60%] mx-auto tracking-wider`}
          >
            Le test est maintenant terminé, merci d'avoir participé !
          </p>
          <Button onClick={() => navigate('/')}>Retour à l'accueil</Button>
        </div>
      );
    }
  };
  return (
    <div
      className={` h-[100vh] relative flex justify-center items-center ${
        props.theme === 'light' ? 'bg-[#FFFEFE]' : 'bg-[#171717]'
      }  pt-32 pb-8 w-full `}
    >
      <Navbar theme={props.theme} setTheme={props.setTheme} />

      {contentDisplayer()}
    </div>
  );
};

export default Test;
