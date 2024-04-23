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
      <div className='App-color-container'
      style = {{background: `${uicolor}`}}
      >        
      </div>
     
      <Callback getColor = {getColor} />
     
    </div>
  )
}
