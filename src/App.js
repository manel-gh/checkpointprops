import React,{Component} from 'react';
import Prof from './profile/Profilecomponent';
import './App.css';
import P from "./assets/photo.jpg"

class App extends Component {

   render() {
    const HandleAlert=(name)=>{
      alert(`Hello ${name}`)
    }
    return (
    <div className="App">
      <Prof name=" my Fullname" bio="this is my bio" profession="i'm a web developer" HandleAlert={HandleAlert()}/>
      <img src={P} alt="img" />
    
    </div>
    );
  }
}


export default App;
