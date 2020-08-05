import React,{Component} from 'react';
import './App.css'
import Navbar from './Component/layout/Navbar'
import User from './Component/user/User'
import axios from 'axios'

import './App.css';
class App extends Component {
  state = {
    user: [],
    loading : false
  }

  async componentDidMount(){
    this.setState({loading:true});
    const res = await axios.get("https://api.github.com/users");
    this.setState({user:res.data , loading:false});
    console.log(res.data);
  }
   
  render()
  {
   
    return(

    <div className="App">

      <Navbar/>
      <div className="container">
      <User loading={this.state.loading} users={this.state.user} />
      </div>
      
    </div>

    );
    
  }
}

export default App;
