import React , {useState} from 'react';
import {PropTypes} from 'prop-types';
import CounterButton from './CounterButton';

export default function Counter(){

    const [count, setCount] = useState(0);

    function incrementCounterParentFunction(by){
       setCount(count + by)
    }
    function decrementCounterParentFunction(by){
        setCount(count - by)
     }
     function resetCounter(by){
        setCount(0)
     }

    return(
        <>
        <div className='total_count'
        style={
            {
                fontSize:"130px",
                padding:"20px",
                color:"#00a5ab"
            }}
        >{count}
        </div>
        <CounterButton by={1} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}/>
        <CounterButton by={2} 
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}/>
        <CounterButton by={5} 
                incrementMethod={incrementCounterParentFunction}
                decrementMethod={decrementCounterParentFunction}/>
        <button className='counterButton'
                 onClick={resetCounter}
                 style={{
                    fontSize:"16px",
                    backgroundColor:"purple",
                    width:"150px",
                    margin:"10px",
                    color:"white",
                    padding:"15px",
                    borderRadius:"30px",
                    borderColor:"black",
                    borderwidth:"5px"
                 }}
                >Reset</button>
        </>
    )
}
