/* 

    REACT EVENTS
    REACT STATE
    useState 
    useContext
    useReducer
    useEffect 
    'use' in react is a hook which is a function() 

*/

import {useState} from 'react'

function Counter(props){
    const [count, setCount] = useState(12)



    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(count+1)}>increment</button>
        </div>
        
    )
}

export default Counter