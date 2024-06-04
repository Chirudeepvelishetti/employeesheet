import axios from 'axios'
import React from 'react'
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  const [data , setData]=useState([]);
  const fetch=()=>{
    axios.get('http://localhost:3030/posts')
    .then(res=> setData(res.data)).catch(err => console.error(err))
  }
  useEffect(()=>{
    fetch();
  },[])
  const deleteItem = (id) => {
    axios.delete(`http://localhost:3030/posts/${id}`)
      .then(res => {
        setData(prevData => prevData.filter(item => item.id !== id));
      })
      .catch(err => console.error(err));
  };
  return (
    <div>
    <div className='sticky-top bg-secondary p-2'>
    <div className='position-relative'>
    <div>
    <h1 className='text-center'>Employee Sheet</h1>
    </div>
    <div style={{paddingLeft:'90%', position:'absolute' , top:10}}>
    <Link to='/add' className='btn btn-primary'>Add</Link>
    </div>
    </div>
    </div>
      {
        data.map((post, index) => (
          <div className='p-3'>
          
          <div key={index} className=' p-3 border border-dark border-2 rounded ' >
          <div className='d-flex justify-content-around'>
          <div>
          <p><strong>Employee ID :{post.id}</strong></p>
            <p><strong>Name : {post.name} </strong></p>
            <p><strong>Role : {post.role}</strong></p>
            <p><strong>Company : {post.company} </strong></p>
          </div>
          <div>
          <p><strong>Company : {post.company} </strong></p>
         <img src={post.image} alt={`${post.name}`} style={{ width: '10vw', height: 'auto'}} className='rounded-5'/>
          </div>
          <div>
            <div className='d-flex'>
                <div> 
                <button className='btn btn-danger me-3' onClick={() => deleteItem(post.id)}>Delete</button>
                </div>
                <div> 
                <Link to={`/read/${post.id}`} className='btn btn-info me-3'>Read</Link>
                </div>
                <div> 
                <Link to={`/edit/${post.id}`} className='btn btn-secondary'>Edit</Link>
                </div>
            </div>
          </div>
          </div>
          </div>
          </div>
        ))
      }

    </div>
  )
}
