document.body.innerHTML = '<h1>Hello from javaScript</h1>'
console.log('test2')

//this is forcast for today in kelvins
const kelvin = 0;
//celsius 273 degrees less than kelvin
let celsius = kelvin - 273;
//calculatin fahrenheit here
let fahrenheit = celsius * (9/5) + 32;
//rounding fahrenheit and reassigning it
fahrenheit = Math.floor(fahrenheit); 
//logging to console with string interpolation
console.log(`The temprature is ${fahrenheit} degrees Fahrenheit`);
//same idea here, formula is from wiki N=C*0.33
let newton = celsius * 33/100;
newton = Math.floor(newton);
console.log(`The temprature is ${newton} degrees Newton`);