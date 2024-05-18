import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()
        console.log(name, email, phone, dob)
        axios.post("http://localhost:8080/add",
            { name: name, email: email, phone: phone, dob: dob })
            .then(res => {
                console.log(res);
                navigate('/')
            }).catch(err => console.error(err));
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 rounded p-3 bg-black'>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-warning'>Add User</h2>
                    <div className='mb-2'>
                        <label htmlFor='name' className='text-white'>Name</label>
                        <input type='text' className='form-control'
                            id='name' placeholder='Enter Name' onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email' className='text-white'>Email</label>
                        <input type='email' className='form-control'
                            id='email' placeholder='Enter Email' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='PhoneNumber' className='text-white'>PhoneNumber</label>
                        <input type='number' className='form-control'
                            id='PhoneNumber' placeholder='Enter Phone Number' onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='Date-of-birth' className='text-white'>Date of Birth</label>
                        <input type='date' className='form-control' id='dob' placeholder='Enter Date of Birth' onChange={e => setDob(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser
