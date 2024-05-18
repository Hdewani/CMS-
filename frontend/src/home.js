import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/")
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error, "Error"));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/users/` + id);
            window.location.reload();
        } catch (error) {
            console.log(error, "Error");
        }
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='w-50 bg-black rounded p-3'>
                <Link to="/add" className='btn mb-2 btn-primary'>ADD +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, i) => (
                            <tr key={i}>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>{item.DOB}</td>
                                <td>{item.Number}</td>
                                <td>
                                    <Link to={`update/${item.ID}`} className='btn btn-success m-1'>Update</Link>
                                    <button className='btn btn-danger m-1 ' onClick={e => handleDelete(item.ID)}> Delete </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
