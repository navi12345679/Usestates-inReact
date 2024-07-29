import React, { useState } from 'react'
import './Mycomponents.css'


function Mycomponent() {
 const [foods,setFoods] = useState(["Apple", "Orange",  "Coconut"]);

function handleAddfood(){
    const newFood = document.getElementById("inputfood").value;
    document.getElementById("inputfood").value=" ";
    setFoods(foods => [...foods,newFood]);
}

function handleRemovefood(index){
  setFoods(foods.filter((_ , i) => i !== index));
}


 

  return (
    <div>
    <div className='Foods'> 
      <h1>Arrays and objects state change examples</h1>
        <h1>list of food</h1>
        <ul> 
          {foods.map((food , index) => <li key={index} onClick={ () => handleRemovefood(index)}>{food}</li>)}
          </ul>
        <input type='text' id='inputfood' placeholder='Enter food name'/>
        <button onClick={handleAddfood}>Add Food</button>
    </div>
 
</div>
  );
}

export default Mycomponent
