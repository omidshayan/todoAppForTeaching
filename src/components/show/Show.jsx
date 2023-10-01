import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillSkipEndFill } from 'react-icons/bs';

import './show.css';


function Show() {
    const [work, setWork] = useState([]);
    const [workDelete, setWorkDelete] = useState('');

    useEffect(() => {
        fetch('https://todo-fbe77-default-rtdb.firebaseio.com/works.json').then(
            res => res.json()).then(data => {
                setWork(Object.entries(data))
            }) 
    },[]);


  return (
    <>
    <div className="show">
        <h4>نمایش کارها</h4>
        <hr />
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>عنوان</th>
          <th>اولویت</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        {
            work.map(index => {
                return(
                    <tr key={index}>
                    <td>1</td>
                    <td>{index[1].work}</td>
                    <td>عادی</td>
                    <td className='icons'>
                      <AiFillEdit className='edit'/>
                      <BsFillSkipEndFill className='end'/>
                      <AiFillDelete onClick={() => setWorkDelete(index[0])} className='delete'/>
                    </td>
                  </tr>
                )
            })
        }
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Show