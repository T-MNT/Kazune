import React, { useEffect, useState } from 'react';
import axios from 'axios';
import routes from '../config/routes';
import '../style/manga.css';
import Navbar from '../components/layout/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import CircleLoader from 'react-spinners/CircleLoader';
import Lecteur from '../components/layout/Lecteur';
import { useParams } from 'react-router-dom';

const Tome = (props) => {
  const [tome, setTome] = useState({});
  const [lecture, setLecture] = useState(false);
  const [prediction, setPrediction] = useState([]);
  const id = useParams();

  useEffect(() => {
    axios
      .get(routes.URL_BACK + `/api/tomes/${id.id}`)
      .then((res) => setTome(res.data));

    axios.get(routes.URL_IA + `/prediction`).then((res) => {
      setPrediction(res.data.predictions);
    });
  }, []);
  return (
    <div
      className={`h-[100vh] py-24 flex flex-col items-center justify-center  relative ${
        props.theme === 'light' ? 'bg-[#FFFEFE]' : 'bg-[#171717]'
      }`}
    >
      <h1
        className={`text-8xl text-center font-jap ${
          props.theme === 'light' ? 'text-black' : 'text-white'
        }`}
      >
        {tome.title}
      </h1>
      <div className="flex items-center h-full justify-center">
        <Navbar theme={props.theme} setTheme={props.setTheme} />
        {tome.img ? (
          <div className="grid grid-cols-[500px,600px] w-[1100px] m-auto">
            <div className="w-full flex justify-center items-center">
              <img
                src={tome.img}
                alt="tome_cover"
                className="tome h-[600px] rounded-xl m-0"
              />
            </div>
            <div className="w-full  my-auto">
              <ul>
                <li
                  className={`text-4xl font-bold tracking-widest ${
                    props.theme === 'light' ? 'text-black' : 'text-white'
                  }  font-jap mb-4`}
                >
                  {tome.resume}
                </li>
                <li
                  className={`text-4xl font-bold tracking-wider ${
                    props.theme === 'light' ? 'text-black' : 'text-white'
                  }  font-jap mb-4`}
                >
                  Masashi kishimoto
                </li>
                <li
                  className={`text-4xl font-bold tracking-wider ${
                    props.theme === 'light' ? 'text-black' : 'text-white'
                  }  font-jap mb-4`}
                >
                  {tome.duration} min en moyenne
                </li>
                <li
                  className={`rounded-full border-4 mt-8 cursor-pointer ${
                    props.theme === 'light' ? 'border-black' : 'border-white'
                  }   h-20 w-20 flex items-center justify-center hover:scale-110`}
                  onClick={() => setLecture(true)}
                >
                  <FontAwesomeIcon
                    icon={faPlay}
                    className={`h-10   m-auto ${
                      props.theme === 'light' ? 'text-black' : 'text-white'
                    }`}
                  />
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <CircleLoader color="#ff0000" size={300} speedMultiplier={0.5} />
          </div>
        )}
      </div>
      {lecture ? <Lecteur prediction={prediction} tome={tome} /> : null}
    </div>
  );
};

export default Tome;
