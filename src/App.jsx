import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchMultiplePokemonById } from './RTK/thunk';
import { useSelector } from 'react-redux';

function App() {
  const ditpatch = useDispatch();
  useSelector((state) => state.pokemon);
  useEffect(() => {
    ditpatch(fetchMultiplePokemonById());
  }, []);

  return;
  <></>;
}

export default App;
