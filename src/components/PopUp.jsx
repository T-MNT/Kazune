import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopUp = (props) => {
  const navigate = useNavigate();

  const contentDisplayer = () => {
    if (props.theme === 'sub') {
      return (
        <p className="text-2xl text-white font-text mb-8">
          Vous êtes déjà abonné(e) jusqu'au{' '}
          {new Date(Number(props.data.premium_till)).toLocaleDateString()}
        </p>
      );
    }
  };
  return (
    <div className="backdrop-blur-2xl  p-8 flex flex-col justify-center">
      {contentDisplayer()}
      <button
        onClick={() => navigate('/')}
        className="w-48 py-1 bg-transparent mx-auto  bg-white shadow-xl  rounded text-2xl font-bold  font-jap tracking-wider  cursor-pointer hover:bg-red-700 hover:text-white "
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default PopUp;
