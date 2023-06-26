import express from "express";
import { addComplaint,deleteComplaint,detailsComplaint,getAllComplaints } from "../controllers/complaint.js";

const Complaintrouter = express.Router();

Complaintrouter.get("/", getAllComplaints);
Complaintrouter.post("/addComplaint", addComplaint);

Complaintrouter.delete('/delete/:complaintId', (req, res ,next)=>{
    deleteComplaint.delete(req, res, next)
    });

    Complaintrouter.get('/:complaintId',(req, res, next)=>{
        detailsComplaint.findOne(req, res, next)
    });

export default Complaintrouter;
