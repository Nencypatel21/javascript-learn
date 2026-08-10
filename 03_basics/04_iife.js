// Immediately Invoked Function Expressions (IIFE)

// ()()

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
    
})(); 


( (name) =>{
    console.log(`DB connected Two ${name}`);
    
})("hitesh");

//Normal function: creates a scope and gives the function a reusable identity/name.

//IIFE: creates a scope and immediately executes the code, usually without leaving a reusable function name behind.