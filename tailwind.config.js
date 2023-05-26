/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Shenttpuro', 'serif'],
        jap: ['Hogback', 'serif'],
        text: ['Roboto', 'serif'],
      },
      translate: {
        50: '-50%',
      },
      color: {
        lightBG: '#F9FBE7',
        darkBG: '#171717',
      },
      backgroundImage: {
        homeDayBg: "url('../src/assets/img/background/day/home_day_bg.jpg')",
        homeNightBg:
          "url('../src/assets/img/background/night/home_night_bg.jpg')",
        authDayBg: "url('../src/assets/img/background/day/auth_day_bg.jpg')",
        authNightBg:
          "url('../src/assets/img/background/night/auth_night_bg.jpg')",
        subDayBg: "url('../src/assets/img/background/day/sub_day_bg.jpg')",
        subNightBg:
          "url('../src/assets/img/background/night/sub_night_bg.jpg')",
        cataDayBg:
          "url('../src/assets/img/background/day/catalogue_day_bg.jpg')",
        cataNightBg:
          "url('../src/assets/img/background/night/catalogue_night_bg.jpg')",
        contactDayBg:
          "url('../src/assets/img/background/day/contact_day_bg.jpg')",
        contactNightBg:
          "url('../src/assets/img/background/night/contact_night_bg.jpg')",
        profilDayBg:
          "url('../src/assets/img/background/day/profil_day_bg2.jpg')",
        profilNightBg:
          "url('../src/assets/img/background/night/profil_night_bg2.jpg')",
        profilBg: "url('../src/assets/img/background/day/profil_bg.jpg')",
        userProfil: "url('../src/assets/img/user_profil_bg.jpg')",
        userPic: "url('../src/assets/img/user_profil_pic.jpg')",
        albumCover: "url('../src/assets/img/album/album_cover.jpg')",
        albumCover2: "url('../src/assets/img/album/album_cover2.jpg')",
        albumCover3: "url('../src/assets/img/album/album_cover3.jpg')",
        albumCover4: "url('../src/assets/img/album/album_cover4.jpg')",
        albumCover5: "url('../src/assets/img/album/album_cover5.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
