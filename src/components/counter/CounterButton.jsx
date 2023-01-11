import React , {useState} from "react";
import PropTypes from 'prop-types';
 export default function CounterButton({by ,incrementMethod,decrementMethod}) {

    const buttonStyle = {
        fontSize:"16px",
        backgroundColor:"#00a5ab",
        width:"100px",
        margin:"10px",
        color:"white",
        padding:"15px",
        borderRadius:"30px",
        borderColor:"black",
        borderwidth:"5px"
    };

    const countStyle={
        fontSize:"50px",
        padding:"20px"
    };

    const [count, setCount] = useState(0);

    function incrementCounterFunction(){
        setCount(count +by);
        incrementMethod(by)
    }
    function decrementCounterFunction(){
        setCount(count -by);
        decrementMethod(by)
    }


  return (
    <div className='counter'>
       
        <div>
        <button className='counterButton'
                 onClick={incrementCounterFunction}
                 style={buttonStyle}>+{by}</button>
        <button className='counterButton'
                 onClick={decrementCounterFunction}
                 style={buttonStyle}>-{by}</button>
        </div>
    </div>
  )
}

CounterButton.propTypes ={
    by: PropTypes.number
}

CounterButton.defaultProps ={
    by: 5
}