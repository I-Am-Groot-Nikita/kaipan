// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React, { Component } from 'react';
import { useState } from 'react' ;
// import App from './App';
import './index.css';
import ReactDOM from 'react-dom/client';



// --------------------------------------
// render examples
// --------------------------------------
// --------------------------------------
//myElement is th element which will render inside index.html
// const myElement = React.createElement('h1', {}, 'I do not use JSX!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement); 

// --------------------------------------
//myelement is th element which will render inside index.html
// const myelement = (
//   <table className="table">
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);
// --------------------------------------


//myElement is th element which will render inside index.html
//With JSX you can write expressions inside curly braces { }.
// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement); 
// --------------------------------------
// //myElement is th element which will render inside index.html
// const x = 0 ;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }
// // or
// // const x = 5;
// // const myelement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
// const myelement = <h1>{text}</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement); 


// --------------------------------------
// Component examples
// --------------------------------------
// --------------------------------------
// function Car() {
//   return <h2>I am a Car!</h2>;
// }
// function Garage() {
//   return (
//     <>
//       <h1>Who lives in my Garage?</h1>
//       <Car />
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);
// --------------------------------------


// --------------------------------------
// Class  Component examples
// --------------------------------------
// --------------------------------------
// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);
// --------------------------------------


// --------------------------------------
// Constructor Component examples
// --------------------------------------
// --------------------------------------
// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "red",name: "nikita's"};
//   }
//   render() {
//     return <h2>I am a {this.state.name+" "+this.state.color} Car!</h2>;
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);
// --------------------------------------


// --------------------------------------
// props render
// --------------------------------------
// --------------------------------------
// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.name+" "+this.props.color} Car!</h2>;
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car name="nikita's" color="red"/>);
// --------------------------------------


// --------------------------------------
// props wirh constructor render
// --------------------------------------
// --------------------------------------
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h2>I am a {this.props.model}!</h2>;
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car model="Mustang"/>);
// --------------------------------------


// --------------------------------------
// state Object
// --------------------------------------
// --------------------------------------
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   changeColor = () => {
//     if(this.state.color == "red"){
//       this.setState({color: "blue"});
//     }
//     if(this.state.color == "blue"){
//       this.setState({color: "red"});
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color+" "} 
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button
//           type="button"
//           onClick={this.changeColor}
//         >Change color</button>
//       </div>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />); 
// --------------------------------------


// --------------------------------------
//mounting :- getDerivedStateFromProps
// --------------------------------------
// --------------------------------------
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   static getDerivedStateFromProps(props, state) {
//     console.log(props.favcol);
//     console.log(state.favoritecolor);
//     if(props.favcol == "" || props.favcol == null ){
//       return {favoritecolor: state.favoritecolor };
//     }
//     else{
//         return {favoritecolor: props.favcol };
//       }

//   }
//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header favcol="blue"/>);
// --------------------------------------


// --------------------------------------
// EVENT HANDLING
// --------------------------------------
// --------------------------------------
// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button onClick={shoot}>Take the shot!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);
// --------------------------------------


// --------------------------------------
// pass an argument to an event handler
// --------------------------------------
// --------------------------------------
// function Football() {
//   const shoot = (a) => {
//     alert(a);
//   }
//   return (
//     <button onClick={() => shoot("Goal!")}>Take the shot!</button>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);
// --------------------------------------


// --------------------------------------
// React Lists map without key
// --------------------------------------
// --------------------------------------
// function Car(props) {
//   return <li>I am a { props.brand }</li>;
// }

// function Garage() {
//   const cars = ['Ford', 'BMW', 'Audi'];
//   console.log(cars);
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car) => <Car brand={car} />)}
//       </ul>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);
// --------------------------------------


// --------------------------------------
// React Lists map with key
// --------------------------------------
// --------------------------------------
// function Car(props) {
//   return <li>I am a { props.brand }</li>;
// }

// function Garage() {
//   const cars = [
//     {id: 1, brand: 'Ford'},
//     {id: 2, brand: 'BMW'},
//     {id: 3, brand: 'Audi'}
//   ];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
//       </ul>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);
// --------------------------------------



// --------------------------------------
// Handling Forms
// --------------------------------------
// --------------------------------------
// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function MyForm() {
//   const [name, setName] = useState("");

//   return (
//     <form>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
// --------------------------------------



// --------------------------------------
// Submitting Forms
// --------------------------------------
// --------------------------------------
// function MyForm() {
//   const [name, setName] = useState("ryfgncb");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`The name you entered was: ${name}`);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
//       </label>
//       <input type="submit" />
//     </form>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
// // --------------------------------------

// --------------------------------------
// Multiple Input Fields
// --------------------------------------
// --------------------------------------
// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//     // To access the fields in the event handler use the event.target.name and event.target.value syntax.
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
// --------------------------------------




//this will fetch an id where we have to render the element
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);                        
// root.render(myElement);


