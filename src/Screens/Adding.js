import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Adding() {
    const navigate = useNavigate();
    const [details ,setDetails]=useState([{
        name:'',
        role:'',
        company:'',
        image:null
    }])



    const Handlesubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3030/posts', details).then(res=> {navigate('/home');}).catch(err=> console.error(err));
        console.log(details);
    }
  return (

    
    <div>
        <div className='d-flex justify-content-center p-5'>
        <div>
            <h1>Add Employee</h1>
            <div>
                <form onSubmit={Handlesubmit}>
                <div>
                    <label><strong>Name :</strong></label><br></br>
                    <input type='text' className='form-control' onChange={e=>setDetails({...details, name : e.target.value})}></input>
                </div>
                <div>
                    <label><strong>Role :</strong></label><br></br>
                    <input type='text' className='form-control' onChange={e => setDetails({...details , role : e.target.value})}></input>
                </div>
                <div>
                    <label><strong>Company :</strong></label><br></br>
                    <input type='text' className='form-control' onChange={e => setDetails({...details , company : e.target.value})}></input>
                </div>
                <div>
                    <label><strong>Image :</strong></label><br></br>
                    <input type='file' name='image' accept='image/*' className='form-control' onChange={e => setDetails({...details , image : e.target.files[0]})}></input>
                </div><br></br>
                <button className='btn btn-success me-5'>submit</button>
                <Link to="/home" className='btn btn-primary'>Back</Link>

                </form>
            </div>
        </div>
        </div>
    </div>
  )
}
