import React, { useEffect, useState } from 'react';
// import { Form, Container, Button } from 'react-bootstrap';
// import { useReactToPrint } from 'react-to-print';
//from '../actions/appointmentActions';
import food1 from "./food1.jpg";
const CreatePriscriptionScreen = () => {
//   const a_id = match.params.id;
  const [medicines, setMedicines] = useState([]);
  const [medicine, setMedicine] = useState('');
  const [dosage, setDosage] = useState();
  const [carbohydrates,setCarbohydrates] = useState();
  const [fats,setFats] = useState();
  const [calories,setCalories] = useState();
  // const [isadmin,setAdmin] = useState();
//   const dispatch = useDispatch();
//   const { success } = appointmentCompleted;

//   useEffect(() => {
//     dispatch(listAppointmentDetails(a_id));
//     if (success) {
//       history.push(`/appointment/${a_id}`);
//     }
//   }, [doctorInfo, history, dispatch, a_id, success]);

//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

  const addMed = () => {
    setMedicines((prev) => {
      return [...prev, { med: medicine, dosage: dosage,carbohydrates:carbohydrates,fats:fats,calories:calories }];
    });
    setMedicine('');
    setDosage('');
    setCarbohydrates('');
    setFats('');
    setCalories('');
  };

  function deleteNote(id) {
    var arr = medicines;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (i !== id) {
        newArr.push(arr[i]);
      }
    }

    // setMedicines((prev) => {
    //   prev.filter((item) => {
    //     return item.id !== id;
    //   });
    // });
    setMedicines(newArr);
  }
     function her(){
      // document.getElementById("yash1").style.display = "inline-flex";
       document.getElementById("newdish").style.display = "inline-flex";
       document.getElementById("rambo1").style.display = "inline-flex";
       document.getElementById("rambo2").style.display = "inline-flex";
    // }
  }
   function her2(){
  // document.getElementById("newdish").style.display = "none";
  document.getElementById("newdish").style.display = "none";
  document.getElementById("rambo1").style.display = "none";
  document.getElementById("rambo2").style.display = "none";
  // }
}
  //  function random1(this.id){
        function handlechange(){

        }
        function handlesubmit(e){
//console.log(e.target.value);
        }
   
  return (
    <div className="yash2">
    <div className="jmd">
    <div className="jumbotron2">
    <h1 className="py-5">Conti As</h1>
    <button className="btn btn-dark" onClick={her}>Admin</button> <t></t><t></t><t></t>
<button className="btn btn-dark" onClick={her2}>User</button>
  
</div>
      <form className="d-flex justify-content-center" onSubmit={handlesubmit}>
      <input type="text" placeholder="Search for a dish" className="rams1" onChange={handlechange}></input>
      <button className="btn btn-dark">Search</button>
      </form>
       <h1 className="text-center py-3" id="yash1">Enjoy a Dish</h1> 
      <div className="row shadow-lg p-3 mb-5 bg-black rounded" id="newdish">
      
        <div className="col-2">
          <input
            type="text"
            placeholder="Enter Dish Name"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          ></input>
        </div>
        <div className="col-2">
          <input
            type="text"
            placeholder="Proteins"
            value={carbohydrates}
            onChange={(e) => setCarbohydrates(e.target.value)}
          ></input>
        </div>
        <div className="col-2">
          <input
            type="text"
            placeholder="Carbohydrates"
            value={fats}
            onChange={(e) => setFats(e.target.value)}
          ></input>
        </div>
        <div className="col-2">
          <input
            type="text"
            placeholder="Fats"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          ></input>
        </div>
        <div className="col-2">
          <input
            type="text"
            placeholder="Enter Calories"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          ></input>
        </div>
        <div className="col-2">
          <div className="">
            <button className="btn btn-secondary" onClick={addMed}>
              Add to the list
            </button>
          </div>
        </div>
      </div>
      <div className="mt-1 mb-5">
      
        {medicines.map((medic, index) => (
          <div
            key={index}
            id={index}
            className="x1"
          >
          {/* <div className="jmd2">
            <img src="https://www.pexels.com/photo/pepperoni-pizza-with-basil-leaves-1260968/"></img>
            </div> */}
              <img src={food1} className="img1"></img>
              <div className="jmd3 p-3 rounded d-flex justify-content-around align-items-center">
            <div>Dish Name</div>
            <div>Proteins</div>
            <div>Carbohydrates</div>
            <div>Fats</div>
            <div>Calories</div>
            <div id="rambo2">More</div>


            </div> 
            <div className="line1 shadow-lg p-3 mb-2 rounded d-flex justify-content-around align-items-center">
            <div>{medic.med}</div>
            <div>{medic.carbohydrates}</div>
            <div>{medic.fats}</div>
            <div>{medic.calories}</div>
            <div>{medic.dosage}</div>

            <button
              className="btn btn-secondary"
              onClick={() => deleteNote(index)} 
              id="rambo1"
            >
              Delete
            </button>
            </div>
          </div>
        ))}
      </div>
      {medicines.length > 0 && (
        <div className="d-md-flex justify-content-center align-items-center">
        </div>
      )}
    </div>
    </div>
  );
};

export default CreatePriscriptionScreen;