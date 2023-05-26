import React from 'react';

const ButtonSmall = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`w-36 h-10  bg-transparent text-black  bg-white shadow-xl  rounded text-3xl font-bold  font-jap tracking-wider  m-auto cursor-pointer  hover:text-red-600`}
    >
      {props.children}
    </button>
  );
};

export default ButtonSmall;
