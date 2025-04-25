import React from 'react';
 
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Porthfolio from './components/Porthfolio/Porthfolio';
import Aboutus from './components/Aboutus/Aboutus';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
     
     <div>
      <Navbar/>
      <Home/>
      <Aboutus/>
      <Services/>
      <Porthfolio/>
      <Footer/>
      
     
      
     </div>
  );
};

export default App;
