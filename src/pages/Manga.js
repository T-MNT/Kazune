import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import routes from '../config/routes';
import CircleLoader from 'react-spinners/CircleLoader';

const Manga = (props) => {
  const manga = useParams();
  const navigate = useNavigate();

  const [collection, setCollection] = useState({});
  const [prediction, setPrediction] = useState([]);

  useEffect(() => {
    axios
      .get(routes.URL_BACK + `/manga/get/manga_by_name/${manga.mangaName}`)
      .then((res) => {
        let collection = res.data[0];
        collection.tomes = collection.tomes.reverse();
        setCollection(collection);
      });

    

  }, []);

  const tomesPreviewDisplayer = () => {
    if (collection.tomes) {
      return collection.tomes.map((tome, index) => (
        <li
          key={index}
          className="   cursor-pointer mb-20"
          onClick={() => navigate(`/manga/${manga.mangaName}/${tome.id}`)}
        >
          <p
            className={`text-4xl font-bold text-center tracking-wider ${
              props.theme === 'light' ? 'text-black' : 'text-white'
            }  font-jap`}
          >
            Tome {index + 1}
          </p>{' '}
          <div className="flex justify-center items-center">
            <img
              src={tome.img}
              alt="tome_cover"
              className="tome-preview h-[400px] rounded-xl m-0"
            />
          </div>
        </li>
      ));
    }
  };

  const optionsMapper = () => {
    if (collection.tomes) {
      return collection.tomes.map((tome, index) => (
        <option className="cursor-pointer" value={tome.id} key={index}>
          {index + 1}
        </option>
      ));
    }
  };
  return (
    <div
      className={`h-[100vh]  ${
        props.theme === 'light' ? 'bg-[#FFFEFE]' : 'bg-[#171717]'
      }   flex pt-8 items-center justify-center`}
    >
      <Navbar theme={props.theme} setTheme={props.setTheme} />
      {collection.tomes ? (
        <div className="w-8/12 h-[700px] grid grid-cols-[55%,1fr]  m-auto">
          <div className="h-full overflow-y-auto w-full scrollbar-hide rounded-xl  ">
            <ul className="h-full py-8  w-full  flex justify-around flex-wrap">
              {tomesPreviewDisplayer()}
            </ul>
          </div>
          <div className="backdrop-blur-2xl pl-8">
            <h4 className="font-jap text-9xl text-red-600">
              {collection.name}
            </h4>
            <p
              className={`text-4xl font-bold tracking-wider ${
                props.theme === 'light' ? 'text-black' : 'text-white'
              }  font-jap my-8`}
            >
              {collection.tomes ? collection.tomes[0].resume : null}
            </p>
            <p
              className={`text-4xl font-bold tracking-wider ${
                props.theme === 'light' ? 'text-black' : 'text-white'
              }  font-jap my-8`}
            >
              {collection.author ? collection.author : null}
            </p>
            <p
              className={`text-4xl font-bold tracking-wider ${
                props.theme === 'light' ? 'text-black' : 'text-white'
              }  font-jap mb-4`}
            >
              {collection.tomes ? collection.tomes.length : null} tomes
            </p>
            <div className="flex items-center my-8">
              <label
                className={`text-4xl font-bold tracking-wider ${
                  props.theme === 'light' ? 'text-black' : 'text-white'
                }  font-jap mr-8`}
              >
                Aller directement au tome :
              </label>
              <select
                className={`px-4 py-[4px] bg-transparent border-2  cursor-pointer ${
                  props.theme === 'light' ? 'border-black' : 'border-white'
                } rounded font-jap text-3xl  `}
                onChange={(e) =>
                  navigate(`/manga/${manga.mangaName}/${e.target.value}`)
                }
              >
                <option></option>
                {optionsMapper()}
              </select>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <CircleLoader color="#ff0000" size={300} speedMultiplier={0.5} />
        </div>
      )}
    </div>
  );
};

export default Manga;
