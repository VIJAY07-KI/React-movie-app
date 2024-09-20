import { useState, useEffect} from 'react'

function FunctionalComponent(props) {          // functional component
    const [count, setCount] = useState(0);     // usestate

    useEffect(() => {
        console.log("Api call we can do------>> Count")
    },[props, count])

    function incrementCount(){
        setCount(count + 1);  // increment count
    };

    function decrementCount(){
        if (count > 0) {
            setCount(count - 1);  // decrement only if count is greater than 0
        }
    };

    return(
        <div>
            <p>Increment By {count} times</p>
            <button onClick={incrementCount}> Increment</button>   <br /> 
            <button onClick={decrementCount}> Decrement</button>   <br /> 
        </div>
    );  
}

export default FunctionalComponent