 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
			 let area = 3.141 * radius * radius;
			 let result = area.toFixed(2);
			 alert(`The area of the circle with radius ${radius} is ${result}`)
           
}
calculateArea();
