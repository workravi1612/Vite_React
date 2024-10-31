// import Header from'./Header.jsx'
// import Footer from'./Footer.jsx'
// import Food from'./Food.jsx'
// import Card from'./Card.jsx'
// import Button from'./Button.jsx'
// import Student from'./Student.jsx'
// import UserGreeting from'./UserGreeting.jsx'
// import List from "./List.jsx";
// import ProfilePicture from "./ProfilePicture.jsx";
// import MyComponent from "./MyComponent.jsx";
// import Counter from "./Counter.jsx";
// import ColorPicker from "./ColorPicker.jsx";


// function App() {
  
  // const fruits = [
  //   { id: 1, name: "apple", calories: 95 },
  //   { id: 2, name: "orange", calories: 45 },
  //   { id: 3, name: "banana", calories: 105 },
  //   { id: 4, name: "coconut", calories: 159 },
  //   { id: 5, name: "pineapple", calories: 37 },
  // ];

  // const vegitables = [
  //   { id: 6, name: "potatoes", calories: 110 },
  //   { id: 7, name: "celery", calories: 15 },
  //   { id: 8, name: "carrots", calories: 25 },
  //   { id: 9, name: "corn", calories: 63 },
  //   { id: 10, name: "broccoli", calories: 50 },
  // ];
  // return (
    <>
      <>
        {/* <Header/>
    <Food/>
    <Footer/> 
    <Card />
    <Card />
    <Card />
    <Card />
    <Button />
    <Student name="Spongebob" age={30} isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}/>
    <Student name="Squidward" age={50} isStudent={false}/>
    <Student name="Sandy" age={27} isStudent={true}/>
    <Student />
    <UserGreeting isLoggedIn={true} username="Ravi"/> */}
      </>
      <>
      {/* //conditonal rendering Examples 
      {/* {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegitables.length > 0 ? <List items={vegitables} category="Vegitables" /> : null} */}

      {/* //conditonal rendering Examples **and short circuiting**  */}
      {/* {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegitables.length > 0 && <List items={vegitables} category="Vegitables" />}  */}
      </>
      <>
      {/* <Button /> 
      <ProfilePicture />
      <ColorPicker />
      <Counter />
      <MyComponent />*/}
      </>
    </>
  // );
// }

// export default App;


// useContext Hook
// useContext() = React hook that allows to share values between multiple levels of components without passing props through each level

// PROVIDER COMPONENT
// 1. import { createContext } from "react";
// 2. export const MyContext = createContext()
// 3. <MyContext.Provider value={value}>
//     <Child />
//    </MyContext.provider>

// CONSUMER COMPONENT
// 1. import React, { useContext } from "react";
//    import { MyContext } from "./ComponentA";
// 2. const value = useContext(MyContext);


import React from "react";
import ComponentA from "./ComponentA.jsx";

function App(){
  return(<ComponentA />);
}

export default App