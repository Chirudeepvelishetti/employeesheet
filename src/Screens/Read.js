
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams ,Link} from 'react-router-dom';

export default function Read() {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3030/posts/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.error('Error fetching data:', err));
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='d-flex  justify-content-center'>
        <div className='align-items-center border border-light-5 rounded-5 p-5 mt-5 ' >
        <div className='pb-5'>
        <h2>EMPLOYEE DETAILS</h2>
        </div>
            <div>
                <p><strong>Name: {data.name}</strong></p>
            </div>
            <div>
                <p><strong>Role: {data.role}</strong></p>
            </div>
            <div>
                <p><strong>Company: {data.company}</strong></p>
            </div>
            <div>
                <img 
                    src={data.image} 
                    alt={`${data.name}`} 
                    style={{ width: '10vw', height: 'auto' }} 
                    className='rounded-5' 
                />
            </div>
            <div className='d-flex p-2 justify-content-center'>
                <div className='me-2 '>
                    <Link to={`/edit/${id}`} className='btn btn-success'>update</Link>
                </div>
                <div>
                    <Link to='/home' className='btn btn-info'>home</Link>
                </div>
            </div>
        </div>
        </div>
    );
}
