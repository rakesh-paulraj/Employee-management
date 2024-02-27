const  express=require("express"); 
const cors=require("cors");
const pool=require("./db");

const app = express(); 

app.use (express.json());
app.use(cors()); 

app.post("/employeedetails",async(req,res,next)=>{
    try{const{name,age,dept,hiredate,salary,martial_status}=req.body;
    if (!name || !age || !dept || !hiredate || !salary || !martial_status) {
        return  res.status(400).json({ message: "Please provide all required fields" });
      }
      console.log("Request Body:", req.body);
    const sql="INSERT INTO details(name,age,dept,hiredate,salary,martial_status) VALUES(?,?,?,?,?,?)";  
    const values=[name,age,dept,hiredate,salary,martial_status];
    const result=await pool.query(sql,values);
    res.status(200).json({
        message:"Employee details added successfully  "
    })}catch (error){
        console.log("error adding employee details",error);
        res.status(500).json({ message:"error adding employee details"});
}

})




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

