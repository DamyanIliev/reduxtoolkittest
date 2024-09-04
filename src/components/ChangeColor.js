import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../redux/themeSlice';

const ChangeColor = () => {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
  return (
    <div>
        <input tupe="text" onChange={(event)=>{setColor(event.target.value)}}></input>
      <button onClick={()=>dispatch(changeColor(color))}>ChangeColor</button>
    </div>
  )
}

export default ChangeColor
