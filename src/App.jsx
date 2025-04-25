import React from 'react';
 
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Porthfolio from './components/Porthfolio/Porthfolio';
import Aboutus from './components/Aboutus/Aboutus';


const App = () => {
  return (
     
     <div>
      <Navbar/>
      <Home/>
      <Aboutus/>
      <Services/>
      <Porthfolio/>
      
     
      
     </div>
  );
};

export default App;
