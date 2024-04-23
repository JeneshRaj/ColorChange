import React, {useState} from "react";

//child 
const Callback = ({getColor}) => {
    const [activeColor, setActiveColor] = useState('')

    const handleChange = (e)=> {
        const {value } = e.target;
        setActiveColor(value);
        getColor(value);
    };

    return (
        <>
        <input className="text-box" type = "text" id ="input" arial-label = "input" onChange={handleChange} value = {activeColor}  placeholder="Enter your fav color here"/>
        </>
    )
}


export default Callback;
