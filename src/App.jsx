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
      <div className='App-color-container   border-emerald-500 border-4 w-auto h-96 m-4 p-4 items-center' 
      style = {{background: `${uicolor}`}}
      >        
      </div>
     
      <Callback getColor = {getColor} />
     
    </div>
  )
}
