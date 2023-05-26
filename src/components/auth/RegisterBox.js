import axios from 'axios';
import { Form, Formik } from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../inputs/Input';

const RegisterBox = (props) => {
  const createUser = (values) => {
    let newUser = {
      email: values.email,
      password: values.password,
      nom: values.nom,
      prenom: values.prenom,
    };
    console.log(newUser);
    axios.post('https://127.0.0.1:8000/api/users', newUser).then((res) => {
      if (res.status === 201) {
        console.log(res);
        props.setState('Login');
      }
    });
  };

  return (
    <div className=" w-[450px] backdrop-blur-2xl rounded-xl flex flex-col pb-8 translate-y-8 ">
      <h4 className=" text-6xl bg-white rounded-t font-bold text-red-700 font-jap tracking-wider text-center py-4 mb-4 flex justify-between items-center px-4 ">
        <span className="text-4xl">登録</span>
        Inscription
        <span className="text-4xl">登録</span>
      </h4>
      <Formik
        initialValues={{
          email: '',
          password: '',
          nom: '',
          prenom: '',
        }}
        onSubmit={(values) => createUser(values)}
      >
        <Form
          className={` flex flex-col justify-between ${
            props.theme === 'light' ? 'text-slate-800' : 'text-white'
          } `}
        >
          <div className="text-center">
            <label className="block  text-2xl mb-3">Adresse mail</label>
            <Input name="email" type="text" as="" theme={props.theme} />
          </div>
          <div className="text-center">
            <label className="block  text-2xl my-3">Mot de passe</label>
            <Input name="password" type="password" as="" theme={props.theme} />
          </div>
          <div className="text-center">
            <label className="block text-2xl my-3">
              Confirmer mot de passe
            </label>
            <Input
              name="passwordConfirm"
              type="password"
              as=""
              theme={props.theme}
            />
          </div>
          <div className="text-center">
            <label className="block  text-2xl my-3">Nom</label>
            <Input name="nom" type="text" as="" theme={props.theme} />
          </div>
          <div className="text-center">
            <label className="block  text-2xl my-3">Prenom</label>
            <Input name="prenom" type="text" as="" theme={props.theme} />
          </div>
          <input
            type="submit"
            value="Valider"
            className="w-2/3 py-1 bg-transparent bg-white  border-slate-800 rounded text-4xl font-bold text-red-700 font-jap tracking-wider my-8 mx-auto cursor-pointer hover:bg-red-700 hover:text-white "
          />
        </Form>
      </Formik>

      <p
        className={`w-2/3 text-center  ${
          props.theme === 'light' ? 'text-slate-800' : 'text-white'
        }  font-bold mx-auto cursor-pointer text-lr hover:scale-105 `}
        onClick={() => props.setState('Login')}
      >
        Vous possédez déjà un compte ? Cliquez ici pour vous connecter
      </p>
    </div>
  );
};

export default RegisterBox;
