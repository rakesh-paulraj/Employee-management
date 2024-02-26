import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Employeedetails = () => {
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
            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">
              Employee ID:
            </label>
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Enter Employee ID"
            />
          </div>

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
            />
          </div>

          
        </form>
      </section>
    </>
  );
};

export default Employeedetails;
