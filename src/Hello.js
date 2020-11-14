import React from 'react'
import './proj.css'
function Hello({fname}){
return(
<div className="myname">Hello from another component, <strong>{fname}</strong></div>
)
};
export default Hello;