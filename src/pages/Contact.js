import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import { Formik, Form } from 'formik';
import Input from '../components/inputs/Input';
import { useSelector } from 'react-redux';
import axios from 'axios';
import routes from '../config/routes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Contact(props) {
  const [categorie, setCategorie] = useState('support');
  const user = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  return (
    <div
      className={`h-[100vh] flex items-center justify-center relative bg-cover ${
        props.theme === 'light' ? 'bg-contactDayBg' : 'bg-contactNightBg'
      }`}
    >
      <Navbar theme={props.theme} setTheme={props.setTheme} />

      <div className=" w-[700px] backdrop-blur-2xl rounded-xl flex flex-col  translate-y-8 ">
        <h4 className=" text-6xl bg-white rounded-t font-bold text-red-700 font-jap tracking-wider text-center py-4  flex justify-between items-center px-4 ">
          <span className="text-3xl">コンタクト</span>
          Contact
          <span className="text-3xl">コンタクト</span>
        </h4>
        <Formik
          initialValues={{
            categorie: '',
            objet: '',
            page: '',
            message: '',
          }}
          onSubmit={(values) => {
            let contact = {
              categorie: categorie,
              objet: values.objet === '' ? null : values.objet,
              page: values.page === '' ? null : values.page,
              message: values.message,
              date: new Date().toLocaleDateString().replaceAll('/', '-'),
              user: `/api/users/${user.id}`,
            };
            axios
              .post(routes.URL_BACK + '/api/contacts', contact)
              .then((res) => {
                if (res.status === 201 || res.status === 200) {
                  toast.success('Envoi confirmé', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                  navigate('/');
                } else {
                  toast.error("L'envoi a échoue veuillez réessayer", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                }
              });
          }}
        >
          <Form
            className={` flex flex-col justify-between py-12 ${
              props.theme === 'light' ? 'text-slate-800' : 'text-white'
            } `}
          >
            <div className="text-center">
              <label className="block  text-2xl  mb-4">Catégorie</label>
              <Input
                name="categorie"
                as="select"
                theme={props.theme}
                object={categorie}
                setObject={setCategorie}
                onChange={(e) => setCategorie(e.target.value)}
              >
                <option value="support">Contacter le support</option>
                <option value="probleme">Signaler un bug ou un problème</option>
              </Input>
            </div>
            {categorie === 'support' ? (
              <div>
                <div className="text-center">
                  <label className="block  text-2xl mt-10 mb-4">Objet</label>
                  <Input name="objet" type="text" as="" theme={props.theme} />
                </div>
                <div className="text-center">
                  <label className="block text-2xl mt-10 mb-4">Message</label>
                  <Input
                    name="message"
                    as="textarea"
                    height="h-40"
                    py="py-2"
                    resize="resize-none"
                    theme={props.theme}
                  />
                </div>
              </div>
            ) : null}
            {categorie === 'probleme' ? (
              <div>
                {' '}
                <div className="text-center">
                  <label className="block  text-2xl  mt-10 mb-4">
                    Sur quelle page avez-vous rencontré un problème ?
                  </label>
                  <Input name="page" as="select" theme={props.theme}>
                    <option value=""></option>
                    <option value="Accueil">Accueil</option>
                    <option value="Catalogue">Catalogue</option>
                    <option value="Forum">Forum</option>
                    <option value="S'abonner">S'abonner</option>
                    <option value="Profil">Profil</option>
                    <option value="Contact">Contact</option>
                  </Input>
                </div>
                <div className="text-center">
                  <label className="block  text-2xl mt-10 mb-4">
                    Description du problème
                  </label>
                  <Input
                    name="message"
                    as="textarea"
                    theme={props.theme}
                    height="h-40"
                    py="py-2"
                    resize="resize-none"
                  />
                </div>
              </div>
            ) : null}

            <input
              type="submit"
              value="Valider"
              className="w-2/3 py-1 bg-transparent bg-white  border-slate-800 rounded text-4xl font-bold text-red-700 font-jap tracking-wider mt-8 mx-auto cursor-pointer hover:bg-red-700 hover:text-white "
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Contact;
