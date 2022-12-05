const Project = require('../model/model')



//   api/project : GET
const getAllProject = async (req,res)=>{
    try {
        const projects = await Project.find()
        console.log(projects)
    res.status(200).json(projects);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
}
//   api/project : GET
const getProjectDetails = async (req,res)=>{
    try {
      const findOneProject = await Project.findOne({_id:req.params.id})
      res.status(200).json(findOneProject);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

//   post/project : GET
// const postAllProject = async (req,res)=>{
//     try {
//         const data = req.body;
//         const result =  await Project.insertMany(data);
//     res.status(200).json(result);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
    
// }


module.exports = {
    getAllProject,
    getProjectDetails
    // postAllProject
   
};