import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer,toast,Bounce } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';



const Employeedetails = () => {
  const[name, setName] = useState("");  
  const[dept, setDept] = useState("");
  const[hiredate, setHiredate] = useState("");
  const[age, setAge] = useState("");
  const[martial_status, setMartial_status] = useState("");
  const[salary, setSalary] = useState("");


  return (
    <>
      <div className="flex items-start justify-between mx-3">
        <h1 className="mb-8 text-xl">Employee details </h1>
      </div>

      <div className="">
        <h1 className="mx-3 mt-1 text-xl">Please Provide the following details</h1>
      </div>

      <section className="mx-auto w-full px-4 py-4">
        <form>
          

          <div className="mb-4">
            <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">
              Employee Name:
            </label>
            <input
              type="text"
              id="employeeName"
              name="employeeName"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter Employee Name"
              onChange={e=>{setName(e.target.value);}}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">
              Department:
            </label>
            <input
              type="text"
              id="department"
              name="department"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter Department"
              onChange={e=>{setDept(e.target.value);}}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="hireDate" className="block text-sm font-medium text-gray-700">
              Hire Date:
            </label>
            <input
              type="date"
              id="hireDate"
              name="hireDate"
              className="mt-1 p-2 border rounded-md w-full"
              onChange={e=>{setHiredate(e.target.value);}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age:
            </label>
            <input
              type="text"
              id="age"
              name="age"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter Age"
              onChange={e=>{setAge(e.target.value);}}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
              Salary:
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter Salary"
              onChange={e=>{setSalary(e.target.value);}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
              Martial status:
            </label>
            <input
              type="text"
              id="martial_status"
              name="martial_status"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Married/Unmarried"
              onChange={e=>{setMartial_status(e.target.value);}}
            />
          </div>

          
        </form>
      </section>
      <button onClick={async()=>{
          try {
        const response= await axios.post("http://localhost:3000/employeedetails",{
          name,
          age,
          dept,
          hiredate,
          salary,
          martial_status
           })
        
        toast.info(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
        } catch (error) {
          
          toast.error("Error adding employee details", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
      }} type="button" class="w-full text-black bg-orange-400 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Add Employee </button>
      <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  transition={Bounce}  
/>
    </>
  );
};

export default Employeedetails;
