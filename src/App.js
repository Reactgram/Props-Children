import React from "react";
import Hello from "./Components/Hello";
import CounterApp from "./Components/CounterApp";

const App = () => {
    return (
        <div>
            <Hello>
                 <h1> Abhishek </h1>
                 <p> Heyyyy </p>
            </Hello>

            <Hello> 
                <CounterApp />
            </Hello>
        </div>
    );
}


export default App;