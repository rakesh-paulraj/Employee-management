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




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

