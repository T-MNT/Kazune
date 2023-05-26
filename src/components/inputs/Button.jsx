import React from 'react';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`px-4 py-1 bg-transparent h-[50px] bg-white shadow-xl  rounded text-4xl font-bold  font-jap tracking-wider  m-auto cursor-pointer hover:bg-red-700 hover:text-white`}
    >
      {props.children}
    </button>
  );
};

export default Button;
