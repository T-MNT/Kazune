import {
  faMoon,
  faRightFromBracket,
  faSun,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearUser } from '../../redux/slices/userSlice';
import { clearUserToken } from '../../redux/slices/userTokenSlice';

const Navbar = (props) => {
  const user = useSelector((state) => state.userReducer);
  const url = window.location.href;
  const dispatch = useDispatch();
  return (
    <div className="h-[8vh]  font-jap font-bold text-red-600  w-full absolute top-0 left-0 backdrop-blur select-none">
      <div className="w-[95%] h-full flex justify-between items-center mx-auto ">
        <ul className="h-full text-4xl tracking-wider flex justify-around items-center w-[65%]">
          <NavLink to="/">
            <li
              className={`${
                (url.includes('manga') || url.includes('test')) &&
                props.theme === 'light'
                  ? 'text-black'
                  : 'text-white'
              }  cursor-pointer hover:duration-150 hover:scale-125`}
            >
              Accueil
            </li>
          </NavLink>
          <NavLink to="/catalogue">
            <li className="cursor-pointer hover:duration-150 hover:scale-125">
              Catalogue
            </li>
          </NavLink>
          <NavLink to="/test">
            <li
              className={`${
                (url.includes('manga') || url.includes('test')) &&
                props.theme === 'light'
                  ? 'text-black'
                  : 'text-white'
              }  cursor-pointer hover:duration-150 hover:scale-125`}
            >
              Test
            </li>
          </NavLink>

          <NavLink to="/subscribe">
            <li className="cursor-pointer hover:duration-150 hover:scale-125">
              S'abonner
            </li>
          </NavLink>

          {user && user.prenom ? (
            <NavLink to="/profil">
              <li
                className={`${
                  (url.includes('manga') || url.includes('test')) &&
                  props.theme === 'light'
                    ? 'text-black'
                    : 'text-white'
                }  cursor-pointer hover:duration-150 hover:scale-125`}
              >
                Profil
              </li>
            </NavLink>
          ) : null}
          {user && user.prenom ? (
            <NavLink to="/contact">
              <li className="text-red-600 cursor-pointer hover:duration-150 hover:scale-125">
                Contact
              </li>
            </NavLink>
          ) : null}
        </ul>
        <input
          type="text"
          className="w-[20%] border-[2px] font-light pl-2 font-text font-bold text-xl text-white h-1/2 rounded bg-transparent outline-none"
          placeholder="Recherche"
        />
        {user && user.prenom ? (
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              style={{ color: '#e9e8e8' }}
              className="h-8 cursor-pointer mr-8"
              onClick={() => {
                dispatch(clearUser(), clearUserToken());
                window.localStorage.removeItem('token');
              }}
            />
          </div>
        ) : (
          <NavLink to="/auth" className={'h-1/2 text-center'}>
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: '#DC2626' }}
              className="h-full cursor-pointer mx-auto hover:duration-150 hover:scale-125"
            />
          </NavLink>
        )}
        {props.theme === 'light' ? (
          <FontAwesomeIcon
            onClick={() => props.setTheme(props.theme)}
            icon={faMoon}
            className={`
 text-black

              cursor-pointer h-10 w-10`}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => props.setTheme(props.theme)}
            icon={faSun}
            className={`

    text-white
             cursor-pointer h-10 w-10`}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
