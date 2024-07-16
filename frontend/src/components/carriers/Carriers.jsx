import axios from'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./carriers.css";
const bachelorFields = [
    "Engineering and Technology",
    "Medicine and Healthcare",
    "Computer Science and Information Technology",
    "Science and Mathematics",
    "Business and Management",
    "Arts and Humanities",
    "Fine Arts and Design",
    "Social Sciences",
    "Education",
    "Law",
    "Agriculture",
    "Veterinary Science",
    "Forestry",
    "Fisheries",
    "Dairy Technology",
    "Home Science",
    "Hotel Management and Catering Technology",
    "Sports and Physical Education",
    "Pharmacy",
    "Paramedical Sciences",
    "Aviation",
    "Event Management",
    "Fashion Technology",
    "Animation and Multimedia",
    "Film and Television Production",
    "Music and Performing Arts",
    "Allied Health Sciences"
  ];
function Carriers(){
    let{ courseCarriers }=useParams();
    console.log(courseCarriers);
    let course=courseCarriers || "None";
    console.log(course);
    if(course!="None"){
        course=course.split(' ')[0];
    }
const [selectedCourse,setCourse]=useState(course);
const [posts, setPosts] = useState([]);
const handleCourseChange=(event)=>{
    setCourse(event.target.value);
}

async function getData(){
    let response=await axios.post(`http://localhost:5000/getRole/${selectedCourse}`);
    console.log(response.data);
    if(response.data.msg!="Error"){
    setPosts(response.data);
    }
}

useEffect(()=>{
    getData();
},[selectedCourse]);
    return(
        <>
        <div className='carriers' style={{marginTop:130}}>
        <h1>This is the carrier page</h1>
        <div id="filterRole">
            <span>Select Course:</span>
            <select value={selectedCourse} onChange={handleCourseChange}>
                <option value="None" key='-1'>None</option>
                {bachelorFields.map((val,i)=>{
               return <option value={val.split(' ')[0]} key={i}>{val}</option>})} 
            </select>
        </div>
        <div className='showRole'>
            
            {posts.map((value,i)=>{
                
               return <div className="card green">
               <p key={i} className="tip">{value}</p>
               </div>;
            })}
            
        </div>
        </div>
        </>
    )

}
export default Carriers;