import logo from './logo.svg';
import React from 'react';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
      </div>
      <Routes>
        <Route exact path= "/" element= {<ItemListContainer/>} />
        <Route  path= "/item/:cosa" element={<ItemDetailContainer/>} />
        <Route  path= "/categoria/:categoria" element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
