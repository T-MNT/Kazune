import React from 'react';
import Navbar from '../components/layout/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Button from '../components/inputs/Button';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/slices/userSlice';
import { toast } from 'react-toastify';
import PopUp from '../components/PopUp';
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = (props) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const subscribeHandler = (duration) => {
    let durationFromNow = Number(Date.now()) + Number(duration);
    axios
      .get(`https://127.0.0.1:8000/subscribe/${user.id}/${durationFromNow}`)
      .then((res) => {
        if (res.status === 200) {
          toast.success('Abonnement réussi !', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          dispatch(setUser(res.data));
        } else {
          toast.error("L'abonnement a échoué, veuillez réessayer !", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      });
  };

  return (
    <div
      className={`h-[100vh] w-full flex items-center justify-center relative bg-cover ${
        props.theme === 'light' ? 'bg-subDayBg' : 'bg-subNightBg'
      }`}
    >
      <Navbar theme={props.theme} setTheme={props.setTheme} />
      {user && user.premium_till > Number(new Date()) ? (
        <PopUp theme="sub" data={user} />
      ) : (
        <div className="w-[1100px] pb-8 backdrop-blur-3xl rounded">
          <h4 className=" text-6xl bg-white rounded-t font-bold text-red-700  font-jap tracking-wider text-center py-4 mb-8 opacity-90 flex justify-between px-8 items-center ">
            <span className="text-5xl">契約</span>Abonnement
            <span className="text-5xl">契約</span>
          </h4>
          <ul className="flex justify-around h-fit my-auto ">
            <li className="h-[600px] w-80 flex flex-col text-black justify-around backdrop-blur-xl border-[1px] rounded-xl pt-4">
              <p className="font-jap text-7xl text-white text-center">1 mois</p>
              <ul className="h-[320px] flex flex-col justify-around px-6 mt-4">
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text   mr-10">
                    Ecoutes illimitées
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text  mr-10">
                    Téléchargement
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text  mr-10">
                    Créez vos playlists
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text  mr-10">
                    Ajoutez vos sons
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
              </ul>
              <div className="flex items-center justify-center ">
                <p className="text-4xl text-white  font-title">5</p>
                <p className="text-6xl text-white ">€</p>
              </div>
              <Button onClick={() => subscribeHandler(2629800000)}>
                Choisir
              </Button>
            </li>
            <li className="h-[600px] w-80 flex flex-col text-black justify-around backdrop-blur-xl border-[1px] rounded-xl pt-4">
              <p className="font-jap text-7xl text-white text-center">3 mois</p>
              <ul className="h-[320px] flex flex-col justify-around px-6 mt-4">
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text  mr-10">
                    Ecoutes illimitées
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text  mr-10">
                    Téléchargement
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text  mr-10">
                    Créez vos playlists
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text  mr-10">
                    Ajoutez vos sons
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
              </ul>
              <div className="flex items-center justify-center ">
                <p className="text-4xl text-white  font-title">13</p>
                <p className="text-6xl text-white ">€</p>
              </div>
              <Button onClick={() => subscribeHandler(7889400000)}>
                Choisir
              </Button>
            </li>
            <li className="h-[600px] w-80 flex flex-col text-black justify-around backdrop-blur-xl border-[1px] rounded-xl pt-4">
              <p className="font-jap text-7xl text-white text-center">6 mois</p>
              <ul className="h-[320px] flex flex-col justify-around px-6 mt-4">
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text  mr-10">
                    Ecoutes illimitées
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text  mr-10">
                    Téléchargement
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text  mr-10">
                    Créez vos playlists
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
                <li className="flex items-center justify-between mb-6">
                  <p className="text-2xl text-white font-text  mr-10">
                    Ajoutez vos sons
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#5df226' }}
                    className="h-8 w-8"
                  />
                </li>
              </ul>
              <div className="flex items-center justify-center ">
                <p className="text-4xl text-white  font-title">25</p>
                <p className="text-6xl text-white ">€</p>
              </div>

              <Button onClick={() => subscribeHandler(15778800000)}>
                Choisir
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
