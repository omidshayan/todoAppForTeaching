import Form from "react-bootstrap/Form";

import "./insert.css";
import { useEffect, useState } from "react";

function Insert() {
  const [work, setWork] = useState('');
  const finish = 0;

  const handelSubmit = async (event) =>{
    event.preventDefault();
    let insertData = {
      work,
      finish
    }
    await fetch('https://todo-fbe77-default-rtdb.firebaseio.com/works.json', {
      method: 'POST',
      body: JSON.stringify(insertData)
    }).then(res => console.log(res));
  }

  return (
    <>
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> وارد کردن کار</Form.Label>
            <Form.Control
              type="text"
              name="work"
              placeholder="کار خود را وارد نمایید..."
              onChange={(e) => setWork(e.target.value)}
            />
          </Form.Group>
          <Form.Select name="priority" style={{ direction: "ltr" }}>
            <option>انتخاب اولویت کار</option>
            <option value="1">معمولی</option>
            <option value="2">ضروری</option>
            <option value="3">خیلی ضروری</option>
          </Form.Select>
          <input type="submit" className="myBtn" value={'ثبت کار جدید'}/>
        </Form>
    </>
  );
}

export default Insert;
