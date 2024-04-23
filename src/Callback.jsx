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
        <input className="text-box border-emerald-500 border-4 text-center font-bold text-blue-700 text m-4 p-4 items-center " type = "text" id ="input" arial-label = "input" onChange={handleChange} value = {activeColor}  placeholder="Enter your fav color here"/>
        </>
    )
}


export default Callback;
