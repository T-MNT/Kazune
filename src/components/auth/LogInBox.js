import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { setUserToken } from '../../redux/slices/userTokenSlice';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';

const LogInBox = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let loginHandler = (userLogs) => {
    console.log(userLogs);
    axios.post('https://127.0.0.1:8000/api/login', userLogs).then((res) => {
      if (res.status === 200) {
        window.localStorage.setItem('token', res.data.token);
        let userToken = jwtDecode(res.data.token);
        dispatch(setUserToken(userToken));

        axios
          .get(`https://127.0.0.1:8000/get/user_by_mail/${userToken.username}`)
          .then((res) => {
            dispatch(setUser(res.data[0]));
          });
        navigate('/');
      }
    });
  };
  return (
    <div className=" w-[450px] backdrop-blur-2xl rounded-xl flex flex-col pb-8 translate-y-8 ">
      <h4 className=" text-6xl bg-white rounded-t font-bold text-red-700 font-jap tracking-wider text-center py-4 mb-4 flex justify-between items-center px-4 ">
        <span className="text-4xl">接続</span>
        Connexion
        <span className="text-4xl">接続</span>
      </h4>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => loginHandler(values)}
      >
        <Form className=" flex flex-col justify-between text-slate-800">
          <div className="text-center">
            <label className="block  text-2xl my-3">Adresse mail</label>
            <Field
              type="text"
              className="w-2/3 h-[40px] bg-transparent border-[2px] border-slate-800 rounded pl-3  focus:outline-none"
              name="email"
            />
          </div>
          <div className="text-center">
            <label className="block  text-2xl my-3">Mot de passe</label>
            <Field
              type="password"
              className="w-2/3 h-[40px] bg-transparent border-[2px] border-slate-800 rounded pl-3  focus:outline-none"
              name="password"
            />
          </div>

          <input
            type="submit"
            value="Valider"
            className="w-2/3 py-1 bg-transparent bg-white border-[2px] border-slate-800 rounded text-4xl font-bold text-red-700 font-jap tracking-wider my-8 mx-auto cursor-pointer hover:bg-red-700 hover:text-white "
          />
        </Form>
      </Formik>

      <p
        className="w-2/3 text-center text-slate-800  font-bold mx-auto cursor-pointer hover:text-red-700"
        onClick={() => props.setState('Register')}
      >
        Vous n'avez pas encore de compte ? Cliquez ici pour vous inscrire
      </p>
    </div>
  );
};

export default LogInBox;
