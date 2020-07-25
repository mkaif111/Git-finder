import React,{Component} from 'react';
import './App.css'
import Navbar from './Component/layout/Navbar'
import Useritem from './Component/user/Useritem'

import './App.css';
class App extends Component {
   
  render()
  {
   
    return(

    <div className="App">

      <Navbar/>

      <Useritem/>
    </div>

    );
    
  }
}

export default App;
