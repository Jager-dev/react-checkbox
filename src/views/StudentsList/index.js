import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import axios from "axios";
import {Container} from "@material-ui/core";

const StudentsList = () => {
  const [students, setStudents] = useState([])
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    axios("https://6115f1058f38520017a38640.mockapi.io/checkbox")
      .then(({data}) => setStudents(data))
  }, [])

  const handleSelect = (e) => {

  }

  return (
    <div className="students">
      <Container>
        <div>
          <p>Select all</p>
          <input type="checkbox"/>
        </div>
        <Table bordered>
          <thead>
          <tr>
            <th>#</th>
            <th>Checkbox</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
          </thead>
          <tbody>
          {
              students.map((item, idx) =>
                <tr key={item.id}>
                  <td>{idx + 1}</td>
                  <td><input
                    type="checkbox" checked={isChecked} onChange={handleSelect}/></td>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.age}</td>
                </tr>
              )
          }
          </tbody>
        </Table>
        <StudentsList />
      </Container>
    </div>
  );
}

export default StudentsList;