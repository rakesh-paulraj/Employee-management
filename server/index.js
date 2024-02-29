const  express=require("express"); 

const cors=require("cors");
require("dotenv").config(); 
const {Sequelize,DataTypes} = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    localhoost: 'localhost',
    dialect:'mysql',
});

const app = express(); 

app.use (express.json());
app.use(cors()); 
const Details = sequelize.define('details', {
    empId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dept: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    hiredate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    martial_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    timestamps: false, 
  });
  


app.post("/employeedetails", async (req, res, next) => {
    try {
      const {details} = req.body;
 
      if (!details.name || !details.age || !details.dept || !details.hiredate || !details.salary || !details.martial_status) {
        return res.status(400).json({ message: "Hey provide all required fields" });
      }
  
      const result = await Details.create(
        details
      );
  
      res.status(200).json({
        message: "Employee details added successfully",
      });
    } catch (error) {
      console.log("Error adding employee details", error);
      res.status(500).json({ message: "Error adding employee details" });
    }
  });
  
  
  app.get("/employeelist", async (req, res, next) => {

    try {
      const result = await Details.findAll();
      const page=parseInt(req.query.page);
      const limit=parseInt(req.query.limit);
      
      
      const startIndex=(page-1)*limit
      const lastIndex=(page)*limit
      

      const results={}
      results.totaluser=result.length;
      results.pagecount=Math.ceil(result.length/limit);
      if(lastIndex<result.length){
      results.next={page:page+1}}
      if (startIndex>0){
      results.previous={page:page-1}}

      results.result2=result.slice(startIndex,lastIndex)



      res.status(200).json({
      results
      });
    } catch (error) {
      console.log("Error fetching employee details", error);
      res.status(500).json({ message: "Error fetching employee details" });
    }
  });

  app.delete('/employeelist/:id', async (req, res) => {
    const employeeId = req.params.empId;
  
    try {
      const employeeId = req.params.id;
      if (!employeeId) {
        return res.status(400).json({ message: "Employee ID is required for deletion" });
      }
      const result = await Details.destroy({ where: { empId: employeeId } });
  
      if (result) {
        
        res.status(200).json({ message: "Employee deleted successfully" });
      } else {
        res.status(404).json({ message: "Employee not found for deletion" });
      }
    } catch (error) {
      console.error('Error deleting employee', error);
      res.status(500).json({ message: "Error deleting employee" });
    }
  });
  app.put('/employeelist/:id', async (req, res) => {
    const employeeId = req.params.id;
  
    try {
      if (!employeeId) {
        return res.status(400).json({ message: "Employee ID is required for editing" });
      }
      const { name, age, dept, hiredate, salary, martial_status } = req.body;
      if (!name || !age || !dept || !hiredate || !salary || !martial_status) {
        return res.status(400).json({ message: "Please provide all required fields" });
      }

      const result = await Details.update(
        {
          name,
          age,
          dept,
          hiredate,
          salary,
          martial_status,
        },
        { where: { empId: employeeId } }
      );
  
      if (result[0]) {
        
        res.status(200).json({ message: "Employee details updated successfully" });
      } else {
        res.status(404).json({ message: "Employee not found for editing" });
      }
    } catch (error) {
      console.error('Error updating  here employee details', error);
      res.status(500).json({ message: "Error updating here employee details" });
    }
  });
  app.get('/employeeone/:id', async (req, res) => {
    const employeeId = req.params.id;
    try {
      if (!employeeId) {
        return res.status(400).json({ message: "Employee ID is required for fetching details" });
      }
  
      
      const employeedetails = await Details.findOne({ where: { empId: employeeId } });
  
      if (employeedetails) {
        res.status(200).json({ employeedetails });
      } else {
        res.status(404).json({ message: "Employee details not found" });
      }
    } catch (error) {
      console.error('Error fetching employee details', error);
      res.status(500).json({ message: "Error fetching employee details" });
    }
  });





app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

