
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Complaint from './complaint'
import { Grid } from '@mui/material'
import SComplaints from './SComplaints'
const Complaints = () => {
    const [complaints, setcomplaint] = useState()
    const sendRequest = async () => {
     const res =  await  axios.get("http://localhost:5000/api/complaint").catch(err=> console.log(err));
        const data = await res.data;
        return data ;
    }
    useEffect(() => {
      sendRequest().then(data => setcomplaint(data.complaints));
    
      return () => {
        
      }
    }, [])
    console.log(complaints)
    
  return (

    <div className=' bg-gray-700 w-[90%] h-[400px]  overflow-scroll m-auto '>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>  
       { complaints && complaints.map((complaint,index) => (
         <Grid item xs={2} sm={4} md={4} key={index}>
         <Complaint name = {complaint.name}  description={complaint.description} title={complaint.title} imageURL={complaint.image} FaultyName={complaint.FaultyName} id={complaint._id} />
     
    </Grid>

       ))}
    </Grid>


    </div>
)
}

export default Complaints