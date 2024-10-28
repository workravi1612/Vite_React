import React, { useState, useEffect } from "react";

// useState example
// function MyComponent(){

//     const [name, setName] = useState("Guest");
//     const [age, setAge] = useState(0);
//     const [isEmployed, setIsEmployed] = useState(false);

//     const updateName = () => {
//         setName("Spongebob")
//     }

//     const incrementAge = () => {
//         setAge(age+1)
//     }

//     const toggleEmployeeStatus = () => {
//         setIsEmployed(!isEmployed)
//     }

//     return(
//         <div>
//             <p>Name : {name}</p>
//             <button onClick={updateName}>Set Name</button>

//             <p>Age : {age}</p>
//             <button onClick={incrementAge}>Increment Age</button>

//             <p>Is employed : {isEmployed ? "Yes" : "No"}</p>
//             <button onClick={toggleEmployeeStatus}>Toggle Status</button>
//         </div>
//     )
// }

//onChange Example

// function MyComponent() {
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState(0);
//   const [comment, setComment] = useState("");
//   const [payment, setPayment] = useState("");
//   const [shipping, setShipping] = useState("");

//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   function handleQuantityChange(event) {
//     setQuantity(event.target.value);
//   }

//   function handleCommentChange(event) {
//     setComment(event.target.value);
//   }

//   function handlePaymentChange(event) {
//     setPayment(event.target.value);
//   }

//   function handleShippingChange(event) {
//     setShipping(event.target.value);
//   }
//   return (
//     <div>
//       <input value={name} onChange={handleNameChange} />
//       <p>Name: {name}</p>
//       <input type="number" value={quantity} onChange={handleQuantityChange} />
//       <p>Quantity: {quantity}</p>

//       <textarea
//         value={comment}
//         onChange={handleCommentChange}
//         placeholder="Enter delivary instructions"
//       />
//       <p>Comment: {comment}</p>

//       <select value={payment} onChange={handlePaymentChange}>
//         <option value="">Select an option</option>
//         <option value="Visa">Visa</option>
//         <option value="Mastercard">Mastercard</option>
//         <option value="Giftcard">Giftcard</option>
//       </select>
//       <p>Payment: {payment}</p>

//       <label>
//         <input
//           type="radio"
//           value="Pick Up"
//           checked={shipping === "Pick Up"}
//           onChange={handleShippingChange}
//         />
//         Pick Up
//       </label>
//         <br />
//       <label>
//         <input
//           type="radio"
//           value="Delivery"
//           checked={shipping === "Delivery"}
//           onChange={handleShippingChange}
//         />
//         Delivery
//       </label>
//       <p>Shipping: {shipping}</p>
//     </div>
//   );
// }

// export default MyComponent;

//Objects in state

// function MyComponent() {
//   const [car, setCar] = useState({
//     year: 2024,
//     make: "Ford",
//     model: "Mustang",
//   });

//   function handleYearChange(event){
//     setCar(c => ({...c, year: event.target.value})) //...car helps to remain previous values and just update required one..
//     //Using c rather than car where c is refrence of car which helps safe updates
//   }
//   function handleMakeChange(event){
//     setCar(c => ({...c, make: event.target.value}))

//   }
//   function handleModelChange(event){
//     setCar(c => ({...c, model: event.target.value}))

//   }

//   return (
//     <div>
//       <p>
//         Your favourite car is: {car.year} {car.make} {car.model}
//       </p>

//       <input type="number" value={car.year} onChange={handleYearChange}/>
//       <br />
//       <input type="text" value={car.make} onChange={handleMakeChange}/>
//       <br />
//       <input type="text" value={car.model} onChange={handleModelChange}/>
//       <br />
//     </div>
//   );
// }

// export default MyComponent;

// Update Arrays in state

// function MyComponent() {
//   const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

//   function handleAddFood() {
//     const newFood = document.getElementById("foodInput").value;
//     document.getElementById("foodInput").value = "";

//     // setFoods([...foods, newFood]) //works but using updater function(previous state) is good practice
//     setFoods((f) => [...f, newFood]);
//   }
//   function handleRemoveFood(index) {
//     setFoods(foods.filter((_, i) => i !== index)); // _ = element, but when _ is used it means it's been ignored parameter
//   }
//   return (
//     <div>
//       <h2>List of Food</h2>
//       <ol>
//         {foods.map((food, index) => (
//           <li key={index} onDoubleClick={() => handleRemoveFood(index)}>
//             {food}
//           </li>
//         ))}
//       </ol>
//       <input type="text" id="foodInput" placeholder="Enter Food Name" />
//       <button onClick={handleAddFood}>Add food</button>
//     </div>
//   );
// }

// export default MyComponent;

//Update ARRAY of OBJECTS in state

// function MyComponent() {
//   const [cars, setCars] = useState([]);
//   const [carYear, setCarYear] = useState(new Date().getFullYear());
//   const [carMake, setCarMake] = useState("");
//   const [carModel, setCarModel] = useState("");

//   function handleAddCar() {
//     const newCar = { year: carYear, make: carMake, model: carModel };
//    setCars(c => [...c, newCar])

//    setCarYear(new Date().getFullYear())
//    setCarMake("")
//    setCarModel("")

//   }
//   function handleRemoveCar(index) {
//     setCars(c => c.filter((_, i) => i !== index))
//   }
//   function handleYearChange(event) {
//     setCarYear(event.target.value);
//   }
//   function handleMakeChange(event) {
//     setCarMake(event.target.value);
//   }
//   function handleModelChange(event) {
//     setCarModel(event.target.value);
//   }

//   return (
//     <div>
//       <h2>List of car Objects</h2>
//       <ul>
//         {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
//       </ul>
//       <input type="number" value={carYear} onChange={handleYearChange} /> <br />
//       <input
//         type="text"
//         value={carMake}
//         onChange={handleMakeChange}
//         placeholder="Enter car make"
//       />{" "}
//       <br />
//       <input
//         type="text"
//         value={carModel}
//         onChange={handleModelChange}
//         placeholder="Enter car model"
//       />{" "}
//       <br />
//       <button onClick={handleAddCar}> Add Car</button>
//     </div>
//   );
// }

// export default MyComponent;

// useEffect() : React hook that tells React DO SOME CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              aThe state of the value

//useEffect(function, [dependencies])

// 1. useEffect(() => {})                        Runs after every re-render
// 2. useEffect(() => {}, [])                    Runs only on the mount
// 3. useEffect(() => {}, [value])               Runs on mount + when value changes

//USES
// 1) Event listeners
// 2) DOM manipulation
// 3) Subscriptions (real-time updates)
// 4) Fetching Data from an API
// 5) Clean up when component unmounts

// function MyComponent() {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("green");

//   useEffect(() => {
//     document.title = `Count: ${count} ${color}`;

      // return() => {
      //   //cleanup 
      // }
//   }, [count, color]);

//   function addCount() {
//     setCount(c => c + 1);
//   }
//   function subtractCount() {
//     setCount(c => c - 1);
//   }
//   function changeColor() {
//     setColor(c => c ==="green" ? "red" : "green")
//   }
//   return (
//     <>
//       <p style={{color: color}}>Count: {count}</p>
//       <button onClick={addCount}>Add</button>
//       <button onClick={subtractCount}>Subtract</button>
//       <br />
//       <button onClick={changeColor}>Change Color</button>
//     </>
//   );
// }
function MyComponent() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // without useEffect()
  // window.addEventListener("resize", handleResize)

// with useEffect()
useEffect(() => {
  window.addEventListener("resize", handleResize)
  console.log("Event Listener Added")

  return () => {
    window.removeEventListener("resize", handleResize)
  console.log("Event Listener Removed")
  }
}, [])

  useEffect(() => {
    document.title = `Height: ${height} & Width: ${width}`;
  }, [width , height])
  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  
  return(<>
  <p>Window Width: {width}px</p>
  <p>Window Height: {height}px</p>
  </>);
}
export default MyComponent;