import React from 'react';
import Navbar from '../components/layout/Navbar';
import punchBg from '../assets/img/opunch_bg.jpg';
import reversePunchBg from '../assets/img/opunch_bg_reverse.jpg';
import {
  faAnglesDown,
  faPlay,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import narutoPreview from '../assets/img/naruto_preview.png';
import OnePic from '../assets/img/onePiece_pic.png';
import slayer from '../assets/img/user_profil_bg.jpg';
import punch from '../assets/img/opunch_bg.jpg';
import '../style/home.css';

const Home = (props) => {
  return (
    <div>
      <div
        className={`h-[100vh] w-full relative bg-cover ${
          props.theme === 'light' ? 'bg-homeDayBg' : 'bg-homeNightBg'
        }`}
      >
        <Navbar theme={props.theme} setTheme={props.setTheme} />
        <div className="absolute top-[50%] left-[50%] translate-x-50 translate-y-50">
          <h1
            className={`text-9xl select-none tracking-[10px]  text-white
              font-title mb-44`}
          >
            KA<span className="text-red-600 ">ZU</span>NE
          </h1>

          <div className="w-fit mx-auto">
            <FontAwesomeIcon
              icon={faAnglesDown}
              beat
              style={{ color: '#fafafa' }}
              className="h-20 cursor-pointer "
            />
          </div>
        </div>
      </div>
      <div
        className={` h-[100vh] relative ${
          props.theme === 'light' ? 'bg-[#FFFEFE]' : 'bg-[#171717]'
        }  py-8 w-full `}
        id={`${
          props.theme === 'light' ? 'container-1-light' : 'container-1-dark'
        }`}
      >
        {' '}
        <h3
          className={`h-[15vh] text-9xl text-center ${
            props.theme === 'light' ? 'text-black' : 'text-white'
          }  font-jap mb-8`}
        >
          Les <span className="text-red-600 ">nouveautés</span>{' '}
        </h3>
        <div
          className={`h-[600px] w-[55%]  ${
            props.theme === 'light'
              ? 'text-black bg-[#FAF8F1]'
              : 'text-white border-[1px]'
          } mx-auto  grid grid-cols-[400px,1fr] rounded   py-4`}
        >
          <div
            className={`w-full h-[550px] ${
              props.theme === 'light'
                ? 'border-r-[#454545] border-r-[2px]'
                : 'border-r-[1px]'
            }   px-6`}
          >
            <div className="h-[550px]">
              <h4
                className={`text-6xl h-[100px] font-jap ${
                  props.theme === 'light' ? 'text-black' : 'text-white'
                }`}
              >
                Les <span className="text-red-600 ">news</span>
              </h4>
              <ul className="h-[450px] overflow-y-auto scrollbar-hide">
                <li className="mb-8 cursor-pointer">
                  <h5 className="mb-4 text-xl  font-text">
                    One piece : Lorem, ipsum
                  </h5>
                  <div className="flex items-center ">
                    <img src={OnePic} className="w-24 h-24 rounded mr-4" />
                    <p className="h-24 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda perferendis provident odio eos, ipsam ?
                    </p>
                  </div>
                </li>
                <li className="mb-8 cursor-pointer">
                  <h5 className="mb-4 text-xl  font-text">
                    One piece : Lorem, ipsum
                  </h5>
                  <div className="flex items-center ">
                    <img src={OnePic} className="w-24 h-24 rounded mr-4" />
                    <p className="h-24 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda perferendis provident odio eos, ipsam ?
                    </p>
                  </div>
                </li>
                <li className="mb-8 cursor-pointer">
                  <h5 className="mb-4 text-xl  font-text">
                    One piece : Lorem, ipsum
                  </h5>
                  <div className="flex items-center ">
                    <img src={OnePic} className="w-24 h-24 rounded mr-4" />
                    <p className="h-24 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda perferendis provident odio eos, ipsam ?
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className=" h-full w-full px-6">
            <h4 className="text-6xl h-[100px]    font-jap">
              Les <span className="text-red-600 "> sorties</span>
            </h4>
            <div className="h-[450px] mb-8 overflow-y-auto scrollbar-hide">
              <div className="flex mb-[30px] relative">
                <img
                  src={narutoPreview}
                  className=" cursor-pointer hover:duration-150 hover:scale-105 rounded h-36 mr-4"
                />
                <div className="h-36">
                  {' '}
                  <h4 className="text-3xl   font-jap mb-4">
                    Naruto shippuden : The last Ninja
                  </h4>
                  <p className="text-lg font-text ">
                    Les tomes 60,61,62 et 63 sont désormais disponibles !
                  </p>
                </div>
              </div>
              <div className="flex mb-[30px] relative">
                <div className="h-36">
                  {' '}
                  <h4 className="text-3xl  font-jap mb-4">
                    Demon Slayer : Le train de l'infini
                  </h4>
                  <p className="text-lg font-text ">
                    Les tomes 12 et 13 sont désormais disponibles !
                  </p>
                </div>
                <img
                  src={slayer}
                  className=" cursor-pointer hover:duration-150 hover:scale-105 rounded h-36 mr-4"
                />
              </div>
              <div className="flex mb-[30px] relative">
                {' '}
                <img
                  src={punch}
                  className=" cursor-pointer hover:duration-150 hover:scale-105 rounded h-36 mr-4"
                />
                <div className="h-36">
                  {' '}
                  <h4 className="text-3xl   font-jap mb-4">One punch man</h4>
                  <p className="text-lg font-text ">
                    La série complète est maintenant disponible !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-[100vh] "
        id={`${
          props.theme === 'light' ? 'container-3-light' : 'container-3-dark'
        }`}
      >
        <div className="h-[50vh] w-full grid grid-cols-[1fr,40%] ">
          <div
            className={`h-[50vh] flex items-center justify-center ${
              props.theme === 'light'
                ? 'text-black bg-[#FAF8F1]'
                : 'text-white bg-[#171717] '
            } px-64 py-8 border-r-2`}
          >
            <div>
              <h2 className="  font-jap text-6xl text-center  ">
                <span className="text-red-700">Kazune</span> vous accompagne
                pendant la lecture de vos mangas{' '}
                <span className="text-red-700">préférés !</span>
              </h2>

              <div className="flex flex-col ">
                <FontAwesomeIcon
                  icon={faRobot}
                  bounce
                  style={{ color: '#B91C1C' }}
                  className="h-20 my-8"
                />
                <p className="font-text font-bold text-xl text-center leading-loose">
                  Profitez d'une expérience immersive unique grâce à notre
                  système alimenté par une I.A. Il suit pas à pas votre lecture
                  et vous propose des musiques en parfaite harmonie avec
                  l'action se déroulant sous vos yeux.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={reversePunchBg} className="h-[50vh]" />
          </div>
        </div>
        <div
          className={`h-[50vh] grid grid-cols-[40%,1fr] w-full ${
            props.theme === 'light'
              ? 'text-black bg-[#FAF8F1] border-slate-700'
              : 'text-white bg-[#171717]  '
          } border-t-2`}
        >
          <div>
            <img src={punchBg} className="h-[50vh]" />
          </div>
          <div
            className={`h-[50vh] flex items-center justify-center ${
              props.theme === 'light'
                ? 'text-black bg-[#FAF8F1]'
                : 'text-white '
            } px-64 py-8 border-r-2`}
          >
            <div>
              <h2 className="  font-jap text-6xl text-center">
                Les meilleurs
                <span className="text-red-700"> mangas</span> méritent les
                meilleures
                <span className="text-red-700"> musiques !</span>
              </h2>

              <div className="flex flex-col">
                <FontAwesomeIcon
                  icon={faPlay}
                  bounce
                  style={{ color: '#B91C1C' }}
                  className="h-20 my-8"
                />
                <p className="font-text font-bold text-xl  text-center leading-loose">
                  Avec un catalogue de plus de 30 mangas entièrement couverts
                  dont Naruto, One Piece, Dragon Ball Z ou Demon Slayer. Notre
                  service vous propose plus de 120 musiques différentes qui
                  sauront sublimer vos moments favoris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
