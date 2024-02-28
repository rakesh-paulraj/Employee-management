import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Employees = () => {
  // Assuming you have an array of employees
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", age: 30, dept: "IT", salary: 50000, hireDate: "2022-01-01", maritalStatus: "Single" },
    { id: 2, name: "Jane Doe", age: 25, dept: "HR", salary: 60000, hireDate: "2021-12-15", maritalStatus: "Married" },
    // Add more employees as needed
  ]);

  const handleEdit = (employeeId) => {
    // Implement your edit logic here
    console.log(`Edit employee with ID ${employeeId}`);
  };

  const handleDelete = (employeeId) => {
    // Implement your delete logic here
    console.log(`Delete employee with ID ${employeeId}`);
  };

  return (
    <>
      <div className="flex items-start justify-between mx-3">
        <h1 className="mb-8 text-xl">Employees</h1>
      </div>

      <section className="mx-auto w-full px-4 py-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Age</th>
              <th className="py-2">Department</th>
              <th className="py-2">Salary</th>
              <th className="py-2">Hire Date</th>
              <th className="py-2">Marital Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="py-2">{employee.id}</td>
                <td className="py-2">{employee.name}</td>
                <td className="py-2">{employee.age}</td>
                <td className="py-2">{employee.dept}</td>
                <td className="py-2">{employee.salary}</td>
                <td className="py-2">{employee.hireDate}</td>
                <td className="py-2">{employee.maritalStatus}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 flex items-center justify-center">
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 mr-10 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <IoIosArrowBack className="h-4 w-4" />
            <span>Previous</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 ml-10 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <span>Next</span>
            <IoIosArrowForward className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Employees;
