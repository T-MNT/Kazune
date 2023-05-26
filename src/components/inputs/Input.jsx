import { Field } from 'formik';
import React from 'react';

const Input = (props) => {
  let inputDIsplayer = () => {
    if (props.setObject) {
      return (
        <Field
          type={props.type}
          className={`w-2/3 bg-transparent border-[2px] break-word ${
            props.theme === 'light' ? 'border-slate-800' : 'border-white'
          } ${props.height ? props.height : 'h-[40px]'} ${
            props.py ? props.py : null
          } ${props.resize ? props.resize : null} ${
            props.py ? props.py : null
          }    rounded px-3 focus:outline-none`}
          name={props.name}
          as={props.as}
          onChange={(e) => props.setObject(e.target.value)}
          value={props.object}
          maxLength={255}
        >
          {props.children ? props.children : null}
        </Field>
      );
    } else {
      return (
        <Field
          type={props.type}
          className={`w-2/3 bg-transparent border-[2px] ${
            props.theme === 'light' ? 'border-slate-800' : 'border-white'
          } ${props.height ? props.height : 'h-[40px]'} ${
            props.py ? props.py : null
          } ${props.resize ? props.resize : null} ${
            props.py ? props.py : null
          }    rounded pl-3 focus:outline-none`}
          name={props.name}
          as={props.as}
          maxLength={255}
        >
          {props.children}
        </Field>
      );
    }
  };
  return inputDIsplayer();
};

export default Input;
