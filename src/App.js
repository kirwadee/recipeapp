import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from './components/detailsPage/DetailsPage';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
  <>
  <Navbar />

  <BrowserRouter>
   <Routes>
     <Route path='/' element={<Main />} />
     <Route path='/details' element={<DetailsPage />} />
   </Routes>
  </BrowserRouter>

  <Footer />
  </>
  );
}

export default App;
