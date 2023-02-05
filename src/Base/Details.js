import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import React,{ useState } from 'react'
import Base from '../Base/Base'
import { DataOfStudents } from '../Components/Data'

const Details = () => {
//seting states
const [students,setstudent]= useState(DataOfStudents);
const[editId,seteditId]= useState("");
const[Id,setId]= useState("");
const[Name,setName]= useState("");
const[Age,setAge]= useState("");
const[Gender,setGender]= useState("");
const[Place,setPlace]= useState("");
const[Qualification,setQualification]= useState("");
const[show,setshow]=useState(true);


    //function for adding 
    const adddata=()=>{
      const newStudents={
        Id,
        Name,
        Age,
        Gender,
        Place,
        Qualification
          
      }
setstudent([...students,newStudents])
  }


  //function for deleting data
  const deletedata=(Id)=>{
    const removestud = students.filter((student)=>student.Id !== Id);
    setstudent(removestud);
       }

        //function for edit and updation
    const editdata=(Id)=>{
      //step 1 selection
      const selected= students.find((student)=>student.Id === Id);
      setshow(!show);
      seteditId(Id);
         setId(selected.Id);
         setName(selected.Name);
         setAge(selected.Age);
         setGender(selected.Gender);
         setPlace(selected.Place);
         setQualification(selected.Qualification);

} 
//updation
  const updatedata=()=>{
      setshow(!show);
 const editstud= students.findIndex((stud)=>stud.Id===editId)
const updated={
  Id,
  Name,
  Age,
  Gender,
  Place,
  Qualification

}
students[editstud]=updated;
setstudent([...students]);


  }





  return (
    <Base
    title = "Form"
    description= "Add student detail here">
<div className="input">
            <TextField fullWidth label="Enter the Id" id="fullWidth" onChange={(event)=>setId(event.target.value)} value={Id} />

            <TextField fullWidth label="Enter the Name" id="fullWidth" onChange={(event)=>setName(event.target.value)} value={Name} />

            <TextField fullWidth label="Enter the Age" id="fullWidth" onChange={(event)=>setAge(event.target.value)} value={Age} />

            <TextField fullWidth label="Enter the Gender" id="fullWidth" onChange={(event)=>setGender(event.target.value)} value={Gender}/>

            <TextField fullWidth label="Enter the Place" id="fullWidth" onChange={(event)=>setPlace(event.target.value)} value={Place} />

            <TextField fullWidth label="Enter the Qualification" id="fullWidth" onChange={(event)=>setQualification(event.target.value)} value={Qualification} />

          {show?<Button className="add-btn" onClick={()=>adddata()} variant="contained" color="success">ADD</Button>:
            <Button className="add-btn" onClick={()=>updatedata()} variant="contained" color="primary">UPDATE</Button>}  
          
            </div>
<Base
  title = "Details"
  description= "Veiw Details Here"
  >
<div className="card-container"> 
            {students.map((stud,index)=>(
                     <Card sx={{ maxWidth: 345 }} key ={stud.Id} className="card">
                     <CardContent className="card-comp">

                       <Typography gutterBottom variant="h5" component="div">
                       Name : {stud.Name}
                       </Typography>

                       <Typography variant="body2" color="text.secondary">
                       Age : {stud.Age}
                       </Typography>

                       <Typography variant="body2" color="text.secondary">
                       Gender : {stud.Gender}
                       </Typography>

                       <Typography variant="body2" color="text.secondary">
                       PLace : {stud.Place}
                       </Typography>

                       <Typography variant="body2" color="text.secondary">
                       Qualification : {stud.Qualification}
                       </Typography>

                     </CardContent>
                     <CardActions className="Cardactions">
                     <Button onClick={()=>editdata(stud.Id)} variant="contained" color="secondary">EDIT</Button>
                     <Button onClick={()=>deletedata(stud.Id)}  variant="contained" color="error">DELETE</Button>
                     </CardActions>
                   </Card>
            ))}
      </div>

</Base>


    </Base>
  )
}

export default Details
