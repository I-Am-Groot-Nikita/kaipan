// //class
// class Car {
//     //constructor 
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     //method
//     age() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//       }

// }

//  var name = "hello"
//  var year = 2014
// // let Car1 = new Car("Ford", 2014);
// let Car1 = new Car( name, year);
// // console.log(Car1);
// let Car2 = new Car("Audi", 2019);
// // console.log(Car2);

// document.getElementById("demo").innerHTML = Car1.name + " " + Car1.year + "My car is " + Car1.age() + " years old.";
// //cari.age is method call
// document.getElementById("demo1").innerHTML = Car2.name + " " + Car2.year  + "My car is " + Car2.age() + " years old.";



// //inheritance
// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
// //   Use the "extends" keyword to inherit all methods from another class.
// // Use the "super" method to call the parent's constructor function.
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }

//   let myCar = new Model("Ford", "Mustang");
//   document.getElementById("demo").innerHTML = myCar.show();


// // getter and setter
// class Car {
//     constructor(brand,year) {
//       this.carname = brand;
//       this.age= year
//     }
//     get cnam() {
//       return this.carname;
//     }
//     set cnam(x) {
//       this.carname = x;
//     }
//     set year(x){
//         this.age = x;
//     }
//     get year(){
//         return this.age;
//     }
//   }

//   let Car1 = new Car( "ford",2014);
//   let Car2 = new Car("Audi", 2019);
//   document.getElementById("demo").innerHTML = Car1.cnam +" , "+ Car1.year; 
//   document.getElementById("demo1").innerHTML = Car2.cnam +" , "+ Car2.year; 


// If you want to use the myCar object inside the static method, you can send it as a parameter:


//modules 
// you have to import and export modules 

//example import 
// import message from "./message.js";
// import { name, age } from "./person.js";
//export 
// export default message;
// export {name, age};


// //Throw, and Try...Catch...Finally
// function myFunction() {
//     const message = document.getElementById("p01");
//     message.innerHTML = "";
//     let x = document.getElementById("demo").value;
//     try { 
//       if(x.trim() == "")  throw "empty";
//       if(isNaN(x)) throw "not a number";
//       x = Number(x);
//       if(x < 5)  throw "too low";
//       if(x > 10)   throw "too high";
//     }
//     catch(err) {
//       message.innerHTML = "Input is " + err;
//     }
//     finally{
//         console.log("you are in finaly");
//     }
//   }


//types of error
//   EvalError	An error has occurred in the eval() function
// RangeError	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	A syntax error has occurred
// TypeError	A type error has occurred
// URIError	An error in encodeURI() has occurred



// //callbacks
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }

//   myCalculator(5, 5, myDisplayer);
// //In the example above, myDisplayer is a called a callback function.
// // It is passed to myCalculator() as an argument.

//setTimeout(), you can specify a callback function to be executed on time-out:
//setInterval(), you can specify a callback function to be executed for each interval:


// const x = document.getElementById("demo");

// function getLocation() {
//   try {
//     navigator.geolocation.getCurrentPosition(showPosition);
// } catch {
//     x.innerHTML = err;
// }
// }

// function showPosition(position) {
//     let latlon = position.coords.latitude + "," + position.coords.longitude;

//     let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

//     document.getElementById("demo1").innerHTML = "<img src='"+img_url+"'>";
//   }
// function showPosition(position) {
//     // position :    GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1676969227231}
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }


// checkValidity()	Returns true if an input element contains valid data.
// setCustomValidity()	Sets the validationMessage property of an input element.
// validity	Contains boolean properties related to the validity of an input element.
// validationMessage	Contains the message a browser will display when the validity is false.
// willValidate	Indicates if an input element will be validated.

// customError	Set to true, if a custom validity message is set.
// patternMismatch	Set to true, if an element's value does not match its pattern attribute.
// rangeOverflow	Set to true, if an element's value is greater than its max attribute.
// rangeUnderflow	Set to true, if an element's value is less than its min attribute.
// stepMismatch	Set to true, if an element's value is invalid per its step attribute.
// tooLong	Set to true, if an element's value exceeds its maxLength attribute.
// typeMismatch	Set to true, if an element's value is invalid per its type attribute.
// valueMissing	Set to true, if an element (with a required attribute) has no value.
// valid	Set to true, if an element's value is valid.



// // The localStorage Object
// localStorage.setItem("name", "John Doe");
// localStorage.getItem("name");

// //The sessionStorage Object
// sessionStorage.getItem("name");
// sessionStorage.setItem("name", "John Doe");


//key(n)	Returns the name of the nth key in the storage
// length	Returns the number of data items stored in the Storage object
// getItem(keyname)	Returns the value of the specified key name
// setItem(keyname, value)	Adds a key to the storage, or updates a key value (if it already exists)
// removeItem(keyname)	Removes that key from the storage
// clear()	Empty all key out of the storage





setCookie = () => {
  var user = document.cookie;
          // console.log(user);
          if (user != "") {
            var user2 = user.split("="); 
            alert("Welcome again " + user2[1] );
          } else {
            user1 = prompt("Please enter your name:","");
            if (user1 != "" && user1 != null) {
              document.cookie= "username = "+user1;
     }
    }
  }
    getCookie = () => {
      var arr = document.cookie.split(";");
      // var arr2 = arr[0].split("=")
      // console.log(arr2[0] + " " + arr2[1]);
      // console.log(arr);
      return arr[0];
    }
    deleteCookie = () => {
      var name = getCookie();
      // console.log(name);
      if (name)
        document.cookie = name + ";max-age=0";
      else
        alert("no");
      // console.log(document.cookie);
    }