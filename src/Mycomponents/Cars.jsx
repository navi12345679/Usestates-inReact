import React, { useState } from 'react'
import './Mycomponents.css'


function Cars() {

      const [cars, setCars] = useState([]);
      const [carYear,setCarYear] = useState(new Date().getFullYear());
      const [carMake,setCarMake] = useState("");
      const [carModel,setCarModel] = useState("");

    function  handleAddcar(){
      const newCar={
            year: carYear,
            make:carMake,
            model: carModel
      };
      setCars(c => [...c,newCar]);

       setCarYear(new Date().getFullYear());
       setCarMake(" ");
       setCarModel(" ");
      }
          function handleAddYear(event){
            setCarYear(event.target.value);
          }
          function handleAddMake(event){
           setCarMake(event.target.value);
          }
          function handleAddModel(event){
             setCarModel(event.target.value);
          }
   function   handleRemovecar(index){
      setCars (cars.filter((_ , i) => i !== index));
      }

  return (
    <div>
      <div className='cars'> 
    <h1>List of car Objects</h1>
    <ul> 
      {cars.map((car,index) => <li key={index} onClick={ () => handleRemovecar(index)}>
        {car.year} {car.make} {car.model}</li>)}
      </ul>
    <input type='number' name="year"  id="1" value={carYear} onChange={handleAddYear}/> <br/>
    <input type="text" name="make" id="2" value={carMake}  onChange={handleAddMake}  placeholder="Enter car make" /> <br/>
    <input type="text"  name="model" id="3" value={carModel} onChange={handleAddModel} placeholder="Enter car model" />
    <button onClick={handleAddcar}>Add Car</button>
</div>
 
</div>
  );
}

export default Cars
