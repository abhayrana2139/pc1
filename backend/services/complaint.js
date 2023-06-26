import Complaint from "../model/Complaint.js"

export const userService = {



async delete(complaintId) {
    const deleteuser = await Complaint.findByIdAndRemove(complaintId)
    return deleteuser
 },


 async findOne(complaintId){
    const singleBlog= await Complaint.findById(complaintId).lean()
    return singleBlog
 },

}