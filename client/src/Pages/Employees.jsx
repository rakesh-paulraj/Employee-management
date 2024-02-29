import ReactPaginate from 'react-paginate';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import axios from 'axios';



const Employees = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState({
    name: '',
    age: '',
    dept: '',
    hiredate: '',
    salary: '',
    martial_status: '',
  });

  const currentpage = useRef();
  const [limit, setLimit] = useState(2);
  const [pageCount, setPageCount] = useState([]);

  useEffect(() => {
    currentpage.current = 1;
    getPaginatedUsers();
  }, []);

  function handlePageChange(e) {
    currentpage.current = e.selected + 1;
    getPaginatedUsers();
  }

  const handleEdit = async (employeeId) => {
    try {
      if (!employeeId) {
        console.error("Employee ID is required for fetching details");
        return;
      }
      console.log("Fetching employee details for ID:", employeeId);
  
      const response = await axios.get(`http://localhost:3000/employeeone/${employeeId}`);
  
      if (response.status === 200) {
        const data = response.data; 
        setEditedEmployee(data.employeedetails);
        setIsModalOpen(true);
      } else {
        console.error("Error fetching employee details. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching employee details:", error.message);
    }
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlesave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/employeelist/${editedEmployee.empId}`,
        editedEmployee
      );
      
        toast.info(response.data.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
        closeModal();
        getPaginatedUsers();
      
      
    } catch (error) {
      toast.error(response.data.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  function changeLimit() {
    getPaginatedUsers();
  }

  const handleDelete = async (employeeId) => {
   
      if (employeeId === undefined) {
        console.error('Employee ID is undefined');
        return;
      }

      const response = await axios.delete(`http://localhost:3000/employeelist/${employeeId}`);
      if (response.status === 200) {
        toast.info(response.data.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
      } else {
        toast.error('Failed to delete employee', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
      }
    
  };

  function getPaginatedUsers() {
    axios
      .get(`http://localhost:3000/employeelist?page=${currentpage.current}&limit=${limit}`)
      .then((response) => {
        console.log(response.data);
        setPageCount(parseInt(response.data.results.pagecount, 10) || 1);
        setData(response.data.results.result2);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

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
            {data.map((i) => (
              <tr key={i.empId}>
                {i.id}
                <td className="py-2">{i.empId}</td>
                <td className="py-2">{i.name}</td>
                <td className="py-2">{i.age}</td>
                <td className="py-2">{i.dept}</td>
                <td className="py-2">{i.salary}</td>
                <td className="py-2">{i.hiredate}</td>
                <td className="py-2">{i.martial_status}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleEdit(i.empId)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i.empId)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageChange}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="flex items-center justify-center space-x-2 mt-4"
          pageClassName="px-3 py-2 border rounded hover:bg-orange-200"
          pageLinkClassName="text-black-500"
          previousClassName="px-3 py-2 border rounded hover:bg-orange-300"
          previousLinkClassName="text-black-500"
          nextClassName="px-3 py-2 border rounded hover:bg-orange-300"
          nextLinkClassName="text-black-500"
          activeClassName="bg-orange-500 text-white"
        />
        <input
          className="px-3 py-2 border rounded mt-4"
          type="text"
          placeholder="Limit"
          onChange={(e) => setLimit(e.target.value)}
        />
        <button className="px-3 py-2 bg-orange-500 text-white rounded mt-2" onClick={changeLimit}>
          Change limit
        </button>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Edit Employee Modal"
       
       style={{
         overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0.5)',
         },
         content: {
           position: 'absolute',
           top: 0,
           right: 'auto',
           bottom: 0,
           left: 0,
           marginLeft: '20%', 
           width: '80%',
           maxHeight: '100%',
           overflow: 'auto', 
         },
       }}>
          <div className="flex justify-center items-center">
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={editedEmployee.name}
                className="mt-1 p-2 border rounded-md w-full"
                onChange={(e) => setEditedEmployee({ ...editedEmployee, name: e.target.value })}
              />
              <label>Age:</label>
              <input
                type="text"
                value={editedEmployee.age}
                className="mt-1 p-2 border rounded-md w-full"
                onChange={(e) => setEditedEmployee({ ...editedEmployee, age: e.target.value })}
              />
              <label>Department:</label>
              <input
                type="text"
                value={editedEmployee.dept}
                className="mt-1 p-2 border rounded-md w-full"
                onChange={(e) => setEditedEmployee({ ...editedEmployee, dept: e.target.value })}
              />
              <label>Hire Date:</label>
              <input
                type="text"
                value={editedEmployee.hiredate}
                className="mt-1 p-2 border rounded-md w-full"
                onChange={(e) => setEditedEmployee({ ...editedEmployee, hiredate: e.target.value })}
              />
              <label>Salary:</label>
              <input
                type="text"
                value={editedEmployee.salary}
                className="mt-1 p-2 border rounded-md w-full"
                onChange={(e) => setEditedEmployee({ ...editedEmployee, salary: e.target.value })}
              />
              <label>Marital Status:</label>
              <input
                type="text"
                value={editedEmployee.martial_status}
                className="mt-1 p-2 border rounded-md w-full"
                onChange={(e) => setEditedEmployee({ ...editedEmployee, martial_status: e.target.value })}
              />
            </div>
          </div>
          <button onClick={handlesave}
          className="px-3 py-2 bg-orange-500 text-white rounded mt-2">Save</button>
          <button onClick={closeModal}className="px-3 py-2 bg-orange-500 text-white rounded mt-2">Close</button>
        </Modal>
      </section>

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
"Error updating employee details"

export default Employees;
