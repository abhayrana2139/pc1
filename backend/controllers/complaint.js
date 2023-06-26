import Complaint from "../model/Complaint.js";
import { userService } from "../services/complaint.js";

export const getAllComplaints = async (req, res, next) => {
    let complaints;
    try {
      complaints = await Complaint.find();
    } catch (err) {
      console.log(err);
    }
    if (!complaints) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ complaints });
  };

  export const addComplaint = async (req, res, next) => {
    const { name, email, title , description,image,FaultyName } = req.body;
 
  
   
  
    const complaint = new Complaint({
      name,
      email,
      title , 
      description,
      image,
      FaultyName,
    });
  
    try {
      await complaint.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({ complaint });
  }










export const deleteComplaint =
{
   async delete(req, res, next) {
     try {
        if (req.params && req.params.complaintId) {
            const result = await userService.delete(req.params.complaintId)
            res.send(result)

        }

        else {
            req.status(400).send("user id is req")
        }
     } catch (error) {
        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
     }

   }
  }


    
    export const detailsComplaint =
    {
    async findOne(req, res, next) {


      try {
         if (req.params && req.params.complaintId) {
             const result = await userService.findOne(req.params.complaintId)
             res.send(result)
         }
         else {
             res.status(400).send("category id is reqired")
         }
         
      } catch (error) {
 
 
         console.log("error",error)
         res.status(500).send("internal Sever Error")
         
         
      }

    }
  }


    