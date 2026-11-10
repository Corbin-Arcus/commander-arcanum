import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CreateCardPage from './components/CreateCardPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const [currentCard, setCurrentCard] = useState({});

  // if(!loaded) {
  //   return null;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cards/find' exact={true} element={<CreateCardPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
