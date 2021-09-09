import { useState } from 'react';
import './App.css';
import { CardPersona as Persona } from './components/CardPersona'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [showLogo, setShowLogo] = useState(false)
  const handleDarkMode = () => {
    if (darkMode === true) {
      setDarkMode(false)
    } else {
      setDarkMode(true)
    }
  }
  const mostrarLogo = () => {
    setShowLogo(!showLogo)
  }
  return (
    <div className="container">
      {
        showLogo &&
        <img src="https://elevatecnologia.com/wp-content/uploads/2020/11/%C2%BFComo-es-beneficioso-ReactJS.jpg" alt="img"
          style={{width: '200px'}}
        />
      }
      <button className="btn btn-info" onClick={handleDarkMode}>{darkMode ? 'light' : 'dark'}</button>
      <Persona nombre='Luciano' edad={26} headerClass={darkMode ? 'card-header-dark' : 'card-header'} mostrarLogo={mostrarLogo}/>
    </div>
  );
}

export default App;
