import React  from 'react'
export default function Task({txt,delf,modifierTache,done}) {

    
  return (
    <div>
      
      <input type="text"  style={done ? {background:"blue" , border:"0.5px solid black" ,borderRadius:"5px",width:"550px"} : {background:"white" , border:"0.5px solid black" ,borderRadius:"5px",width:"550px"} }  readOnly value={txt} /> &nbsp;&nbsp;
      <input type="button"  onClick={delf} className='btn btn-outline-danger' value="DELETE" />&nbsp;&nbsp;
      <input type="button" className='btn btn-outline-success'  onClick={modifierTache}   value="DONE" />

    </div>
  )
}