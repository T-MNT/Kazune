import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Catalogue from './pages/Catalogue';
import routes from './config/routes';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setUser } from './redux/slices/userSlice';
import Profil from './pages/Profil';
import Subscribe from './pages/Subscribe';
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import { setUserToken } from './redux/slices/userTokenSlice';
import jwtDecode from 'jwt-decode';
import Tome from './pages/Tome';
import Manga from './pages/Manga';
import Test from './pages/Test';

function App() {
  const dispatch = useDispatch();
  const [theme, setThemeState] = useState('light');

  useEffect(() => {
    const theme_store = window.localStorage.getItem('theme');
    if (theme_store) {
      setTheme(theme_store);
    }

    let token = window.localStorage.getItem('token');

    if (token) {
      let userToken = jwtDecode(token);
      dispatch(setUserToken(userToken));

      axios
        .get(`https://127.0.0.1:8000/get/user_by_mail/${userToken.username}`)
        .then((res) => {
          dispatch(setUser(res.data[0]));
        });
    }
  }, []);

  let setTheme = (state) => {
    if (state === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setThemeState('dark');
    } else {
      setThemeState('light');
      window.localStorage.setItem('theme', 'light');
    }
  };
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route
          path={routes.HOME}
          element={<Home theme={theme} setTheme={setTheme} />}
        />
        <Route
          path={routes.AUTH}
          element={<Auth theme={theme} setTheme={setTheme} />}
        />
        <Route
          path={routes.CATALOGUE}
          element={<Catalogue theme={theme} setTheme={setTheme} />}
        />
        <Route
          path={routes.SUBSCRIBE}
          element={<Subscribe theme={theme} setTheme={setTheme} />}
        />
        <Route
          path={routes.PROFIL}
          element={<Profil theme={theme} setTheme={setTheme} />}
        />
        <Route
          path={routes.CONTACT}
          element={<Contact theme={theme} setTheme={setTheme} />}
        />
        <Route
          path={routes.MANGA}
          element={<Manga theme={theme} setTheme={setTheme} />}
        />
        <Route
          path={routes.TOME}
          element={<Tome theme={theme} setTheme={setTheme} />}
        />
        <Route
          path={routes.TEST}
          element={<Test theme={theme} setTheme={setTheme} />}
        />
      </Routes>
    </div>
  );
}

export default App;
