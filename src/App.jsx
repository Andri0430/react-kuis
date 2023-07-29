import { createContext } from "react";
import { useState } from "react";

export const LanguageContext = createContext({
  language: null,
  setLanguage: null,
});

const string = {
  id: {
    home: "Beranda",
    contact: "Kontak",
    about: "Tentang",
    login: "Masuk",
    logout: "Keluar",
  },
  en: {
    home: "Home",
    contact: "Contact",
    about: "About",
    login: "Login",
    logout: "Logout",
  },
};

export default function App() {
  const [language, setLanguage] = useState("id");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="header">
        <select
          onChange={(e) => {
            e.preventDefault();
            setLanguage(e.target.value);
          }}
        >
          <option value="id">Bahasa</option>
          <option value="en">English</option>
        </select>
        <div className="nav">
          <a>{string[language].home}</a>
          <a>{string[language].contact}</a>
          <a>{string[language].about}</a>
          <a>{string[language].login}</a>
          <a>{string[language].logout}</a>
        </div>
      </div>
    </LanguageContext.Provider>
  );
}
