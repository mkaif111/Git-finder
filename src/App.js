import React,{Component} from 'react';
import './App.css'
import Navbar from './Component/layout/Navbar'
import User from './Component/user/User'

import './App.css';
class App extends Component {
   
  render()
  {
   
    return(

    <div className="App">

      <Navbar/>
      <div className="container">
      <User/>
      </div>
      
    </div>

    );
    
  }
}

export default App;
