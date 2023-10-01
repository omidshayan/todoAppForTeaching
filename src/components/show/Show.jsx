import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillSkipEndFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import './show.css';


function Show() {
    const [work, setWork] = useState([]);

    const [workId, setWorkId] = useState('');
    const [getWork, setGetWork] = useState(false);

    const [modalShow, setModalShow] = React.useState(false);
    const [modalEditShow, setModalEditShow] = React.useState(false);

    const [workEdit, setWorkEdit] = useState('');


    useEffect(() => {
        fetch('https://todo-fbe77-default-rtdb.firebaseio.com/works.json').then(
            res => res.json()).then(data => {
                setWork(Object.entries(data))
            }) 
    },[getWork]);

    const removeHandler =async () => {
      await fetch(`https://todo-fbe77-default-rtdb.firebaseio.com/works/${workId}.json`,{
        method: 'DELETE'
      }).then(res => console.log(res))
      setGetWork(prev => !prev)
      setModalShow(false)
    }

    const editHandler =async () =>{
      let newWork = {
        work: workEdit
      }
      await fetch(`https://todo-fbe77-default-rtdb.firebaseio.com/works/${workId}.json`, {
        method: 'PUT',
        body: JSON.stringify(newWork)
      }).then(res => console.log(res))
      setGetWork(prev => !prev)
      setModalEditShow(false)
    }
    
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
            work.map((work, index) => {
                return(
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{work[1].work}</td>
                    <td>عادی</td>
                    <td className='icons'>
                      <AiFillEdit className='edit' onClick={() => {
                        setModalEditShow(true)
                        setWorkId(work[0])
                      }}/>
                      <BsFillSkipEndFill className='end'/>
                      <AiFillDelete onClick={() => {
                        setModalShow(true)
                        setWorkId(work[0])
                      }} className='delete'/>
                    </td>
                  </tr>
                )
            })
        }
      </tbody>
    </Table>

        {/* update modal */}
      <Modal show={modalEditShow} aria-labelledby="contained-modal-title-vcenter"
      centered >
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>عنوان کار</Form.Label>
              <Form.Control
                type="text"
                placeholder="عنوان کامل کار..."
                autoFocus
                onChange={(e) => setWorkEdit(e.target.value)}
                
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalEditShow(false)}>
            بستن
          </Button>
          <Button variant="primary" onClick={editHandler}>
            ویرایش
          </Button>
        </Modal.Footer>
      </Modal>


        {/* delete modal */}
    <Modal
      show={modalShow}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>آیا برای حذف کار مطمئن هستید؟</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>کنسل</Button>
        <Button onClick={removeHandler}>حذف</Button>
      </Modal.Footer>
    </Modal>
    </div>
    </>
  )
}

export default Show