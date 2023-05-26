import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/layout/Navbar';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profil = (props) => {
  let songsArray = [
    {
      title: 'Lonely',
      artist: 'Kurozawa Shinju',
      manga: 'Naruto Shippuden',
      tome: '28',
      cover: 'bg-albumCover',
    },
    {
      title: 'Forgotten home',
      artist: 'Chris Stanfen',
      manga: 'Naruto Shippuden',
      tome: '28',
      cover: 'bg-albumCover2',
    },
    {
      title: 'Nine tails',
      artist: 'Ana Siz',
      manga: 'Naruto Shippuden',
      tome: '28',
      cover: 'bg-albumCover3',
    },
    {
      title: 'When everything fall',
      artist: 'Aori',
      manga: 'Naruto Shippuden',
      tome: '28',
      cover: 'bg-albumCover4',
    },
    {
      title: 'Cursed',
      artist: 'Kurozawa Shinju',
      manga: 'Naruto Shippuden',
      tome: '28',
      cover: 'bg-albumCover5',
    },
  ];

  const songsDisplayer = () => {
    return songsArray.map((song, index) => (
      <li className="flex items-center h-16 mb-4 px-4 relative" key={index}>
        <div
          className={`w-16 h-16 ${song.cover}  bg-center bg-cover cursor-pointer rounded hover:scale-110`}
        />
        <div className="flex items-center justify-between text-left text-xl w-[80%] h-full relative text-white pl-4">
          <div className="h-full">
            <p className="mb-1 cursor-pointer">{song.title}</p>
            <p className="cursor-pointer">{song.artist}</p>
          </div>

          <FontAwesomeIcon
            icon={faPlay}
            className={`h-8 cursor-pointer hover:scale-110 text-white'
            }`}
          />
        </div>
      </li>
    ));
  };
  return (
    <div
      className={`h-[100vh] w-full flex items-center justify-center relative  ${
        props.theme === 'light' ? 'bg-profilDayBg' : 'bg-profilNightBg'
      }`}
    >
      <Navbar theme={props.theme} setTheme={props.setTheme} />
      <div className="w-96 h-[700px] backdrop-blur-2xl m-auto rounded">
        <div className="h-44 bg-userProfil   flex items-center justify-center rounded-t">
          <div className="h-32 w-32 rounded-full bg-blue-700 bg-userPic bg-cover bg-center " />
        </div>
        <div className="text-center">
          <p
            className={`block  text-6xl  my-6 font-jap ${
              props.theme === 'light' ? null : 'text-white'
            }`}
          >
            Théo Minet
          </p>
          <div className="h-full">
            <ul>{songsDisplayer()}</ul>
          </div>
        </div>
      </div>
      <p>profil</p>
    </div>
  );
};

export default Profil;
