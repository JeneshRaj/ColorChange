import React, {useState} from 'react'
import Callback from './Callback.jsx'
import './style.css'
//Parent
export default function App() {
  const [uicolor, setUicolor] = useState(null);


  //Callback Function 
  const getColor = (color) => {
    setUicolor(color);
  }

  return (
    <div className = 'App'>
      <div className='App-color-container border-8 w-40 h-96 m-4 p-4 items-center' 
      style = {{background: `${uicolor}`}}
      >        
      </div>
     
      <Callback getColor = {getColor} />
     
    </div>
  )
}
