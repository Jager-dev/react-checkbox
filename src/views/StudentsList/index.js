import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import axios from "axios";
import {Container} from "@material-ui/core";
import StudentsItem from "../StudentsItem";

const StudentsList = () => {
  const [students, setStudents] = useState([])
  const [isCheckedAll, setIsCheckedAll] = useState(false)
  const [checkedStudent, setCheckedStudent] = useState([])
  const [type, setType] = useState("all")

  useEffect(() => {
    axios("https://6115f1058f38520017a38640.mockapi.io/checkbox")
      .then(({data}) => setStudents(data))
  }, [])

  const handleAllChange = (e) => {
    setIsCheckedAll(e.target.checked)
    setType("one")
  }


  return (
    <div className="students">
      <Container>
        <div>
          <p>Select all</p>
          <input type="checkbox"
          onChange={handleAllChange}
          />
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
              students.map((student, idx) =>
                <StudentsItem
                  student={student}
                  key={student.id} idx={idx}
                  isCheckedAll={isCheckedAll}
                  type={type} students={students}
                  setIsCheckedAll={setIsCheckedAll}
                  setType={setType}
                  checkedStudent={checkedStudent}
                  setCheckedStudent={setCheckedStudent}
                />
              )
          }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default StudentsList;