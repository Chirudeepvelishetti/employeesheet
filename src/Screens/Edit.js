import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
    const [data, setData] = useState({ name: '', role: '', company: '', image: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3030/posts/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.error('Error fetching data:', err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3030/posts/${id}`, data)
            .then(() => {
                navigate('/home');  // Redirect to home after successful update
            })
            .catch(err => console.error('Error updating data:', err));
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className='border border-light-5 p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2>UPDATE FORM</h2>
                    </div>
                    <div>
                        <label htmlFor='name'><strong>Name : </strong></label><br />
                        <input className='form-control' name='name' value={data.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='role'><strong>Role : </strong></label><br />
                        <input className='form-control' name='role' value={data.role} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='company'><strong>Company : </strong></label><br />
                        <input className='form-control' name='company' value={data.company} onChange={handleChange} />
                    </div>
                    <div className='p-2'>
                        <label><strong>Image : </strong></label><br />
                        <img src={data.image} alt={data.name} style={{ width: '10vw', height: 'auto' }} className='rounded-5 pt-2' />
                    </div>
                    <div className='d-flex'>
                        <div>
                            <button type='submit' className='btn btn-success me-5'>Submit</button>
                        </div>
                        <div>
                            <Link to='/home' className='btn btn-info'>Home</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
