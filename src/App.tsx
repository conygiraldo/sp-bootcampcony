import React, {useState, useEffect, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import { sp } from "@pnp/sp/presets/all";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getListItems = useCallback (async() => {
    try {
      const items: any = await sp.web.lists.getByTitle('BaseDatosPersonas').items.select('Title').get();
      setItems(items)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getListItems();
  }, [])

  if(loading){
    return <div>Cargando</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
