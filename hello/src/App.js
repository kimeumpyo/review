import { Component } from "react"; 
import MyComponent from "./MyComponent";


class App extends Component () {
  
  render(){
    const name = 'REACT';
    return(
      <>
      <MyComponent name="이름" age={40}/>
        <div className="react">{name}</div>
        <h1>반갑습니다.</h1>
      </>
    )
  }
}

export default App;


