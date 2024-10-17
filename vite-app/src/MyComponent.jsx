import React, { useState } from "react";

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

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    // setFoods([...foods, newFood]) //works but using updater function(previous state) is good practice
    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index)); // _ = element, but when _ is used it means it's been ignored parameter
  }
  return (
    <div>
      <h2>List of Food</h2>
      <ol>
        {foods.map((food, index) => (
          <li key={index} onDoubleClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ol>
      <input type="text" id="foodInput" placeholder="Enter Food Name" />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}

export default MyComponent;
