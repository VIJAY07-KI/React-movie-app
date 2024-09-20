import { useState, useEffect} from 'react'

function FunctionalComponent1(props) {          // functional component
    const [count, setCount] = useState(0);
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        console.log("Api call we can do------>> Count")
    },[props, count])

    useEffect(() => {
        console.log("Api call we can do------>> Clicks")
    },[props, clicks])

    return(
        <div>
            <p>Increment By {count} times</p>
            <button onClick={() => setCount(count + 1)}> Increment By</button>   <br></br>
            <p>Increment By {clicks} times</p>
            <button onClick={() => setClicks(count + 1)}> Increment By</button>
        </div>
    );
}

export default FunctionalComponent1