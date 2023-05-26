import React from 'react';
import Navbar from '../components/layout/Navbar';
import {
  faAnglesDown,
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import narutoPreview from '../assets/img/naruto_preview.png';
import OnePic from '../assets/img/onePiece_pic.png';
import slayer from '../assets/img/user_profil_bg.jpg';
import punch from '../assets/img/opunch_bg.jpg';
import Button from '../components/inputs/ButtonSmall';
import '../style/catalogue.css';
import { useNavigate } from 'react-router-dom';

const Catalogue = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className={`h-[100vh] flex items-center justify-center relative bg-cover ${
          props.theme === 'light' ? 'bg-cataDayBg' : 'bg-cataNightBg'
        }`}
      >
        <Navbar theme={props.theme} setTheme={props.setTheme} />
        <div>
          <div className=" py-8 text-center backdrop-blur-xl p-12">
            <h1 className="font-jap font-bold mx-auto text-7xl text-white tracking-wider text-center mb-10">
              <span className="text-white">Découvrez</span>
              <span className="text-red-600 ml-6">notre catalogue!</span>
            </h1>
            <input
              type="text"
              className="w-[100%] border-[2px] font-light pl-2 font-text text-2xl text-white h-[60px] mx-auto rounded bg-transparent focus:outline-0"
              placeholder="Recherche"
            />
          </div>
          <div className="w-fit mx-auto">
            <FontAwesomeIcon
              icon={faAnglesDown}
              beat
              style={{ color: '#fafafa' }}
              className="h-20 cursor-pointer mt-20 "
            />
          </div>
        </div>
      </div>

      <div
        className={` h-[100vh] flex items-center relative ${
          props.theme === 'light' ? 'bg-[#FFFEFE]' : 'bg-[#171717]'
        } `}
        id={`${
          props.theme === 'light' ? 'container-2-light' : 'container-2-dark'
        }`}
      >
        <div className="w-[90%] h-full mx-auto flex items-center">
          <div className="w-full">
            <div className="h-[60vh] flex items-center justify-around mb-8">
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                beatFade
                style={{
                  color: props.theme === 'light' ? '#B91C1C' : '#ffffff',
                }}
                className="h-32 cursor-pointer "
              />
              <img
                src={narutoPreview}
                className="mx-auto cursor-pointer hover:duration-150 hover:scale-105 rounded h-full"
                onClick={() => navigate('/manga/naruto')}
              />
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                beatFade
                style={{
                  color: props.theme === 'light' ? '#B91C1C' : '#ffffff',
                }}
                className="h-32 cursor-pointer "
              />
            </div>
            <h4
              className={`text-7xl text-center font-jap ${
                props.theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              Naruto shippuden : The last Ninja
            </h4>
          </div>
        </div>
      </div>
      <div
        className={` h-[100vh] relative ${
          props.theme === 'light' ? 'bg-[#FFFEFE]' : 'bg-[#171717]'
        }  py-8 w-full `}
        id={`${
          props.theme === 'light' ? 'container-2-light' : 'container-2-dark'
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
        className={` h-[100vh] relative py-8 ${
          props.theme === 'light' ? 'bg-[#FFFEFE]' : 'bg-[#171717]'
        }  w-full `}
      >
        {' '}
        <h3
          className={`h-[15vh] text-9xl text-center mb-8 ${
            props.theme === 'light' ? 'text-black' : 'text-white'
          }  font-jap `}
        >
          Les plus <span className="text-red-600 ">populaires</span>{' '}
        </h3>
        <div className="">
          <ul
            className={`h-[600px] w-[55%]  ${
              props.theme === 'light'
                ? 'text-black bg-[#FAF8F1]'
                : 'text-white border-[1px]'
            } mx-auto  grid grid-cols-2 grid-row-3 rounded   py-4`}
          >
            <li className=" flex items-center  rounded  ">
              <p className="text-4xl  font-title text-right w-20">1</p>
              <div className="flex items-center justify-center fit ml-12 ">
                <img src={OnePic} className="w-24 h-24 rounded" />
                <div className="">
                  <div className=" ml-8 ">
                    <h2 className="text-3xl mb-2   font-text">Blue Lock</h2>{' '}
                    <Button>
                      <p>En voir plus</p>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className=" flex items-center  rounded  ">
              <p className="text-4xl  font-title text-right w-20">1</p>
              <div className="flex items-center justify-center fit ml-12 ">
                <img src={OnePic} className="w-24 h-24 rounded" />
                <div className="">
                  <div className=" ml-8 ">
                    <h2 className="text-3xl mb-2   font-text">Blue Lock</h2>{' '}
                    <Button>
                      <p>En voir plus</p>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className=" flex items-center  rounded  ">
              <p className="text-4xl  font-title text-right w-20">1</p>
              <div className="flex items-center justify-center fit ml-12 ">
                <img src={OnePic} className="w-24 h-24 rounded" />
                <div className="">
                  <div className=" ml-8 ">
                    <h2 className="text-3xl mb-2   font-text">Blue Lock</h2>{' '}
                    <Button>
                      <p>En voir plus</p>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className=" flex items-center  rounded  ">
              <p className="text-4xl  font-title text-right w-20">1</p>
              <div className="flex items-center justify-center fit ml-12 ">
                <img src={OnePic} className="w-24 h-24 rounded" />
                <div className="">
                  <div className=" ml-8 ">
                    <h2 className="text-3xl mb-2   font-text">Blue Lock</h2>{' '}
                    <Button>
                      <p>En voir plus</p>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className=" flex items-center  rounded  ">
              <p className="text-4xl  font-title text-right w-20">1</p>
              <div className="flex items-center justify-center fit ml-12 ">
                <img src={OnePic} className="w-24 h-24 rounded" />
                <div className="">
                  <div className=" ml-8 ">
                    <h2 className="text-3xl mb-2   font-text">Blue Lock</h2>{' '}
                    <Button>
                      <p>En voir plus</p>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
            <li className=" flex items-center  rounded  ">
              <p className="text-4xl  font-title text-right w-20">1</p>
              <div className="flex items-center justify-center fit ml-12 ">
                <img src={OnePic} className="w-24 h-24 rounded" />
                <div className="">
                  <div className=" ml-8 ">
                    <h2 className="text-3xl mb-2   font-text">Blue Lock</h2>{' '}
                    <Button>
                      <p>En voir plus</p>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
