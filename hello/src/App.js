import { Component } from "react"; 
import MyComponent from "./MyComponent.js";
import Counter from "./Counter2.js";
import Say from "./Say.js"
import EventPractice from "./EventPractice.js"
import Login from "./Login.js"



const App = () =>{
  return(
    <>
      <Counter/>
      <br/>
      <MyComponent name="이름" age={40}>11111</MyComponent>
      <br/>
      <Say/>
      <br/>
      <EventPractice/>
      <br/>
      <Login/>
    </>
  ) 

}

export default App;


