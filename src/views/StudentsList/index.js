import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import axios from "axios";
import {Container} from "@material-ui/core";
import StudentsItem from "../StudentsItem";

const StudentsList = () => {
  const [students, setStudents] = useState([])
  const [checkedStudent, setCheckedStudent] = useState([])
  const [isCheckedAll, setIsCheckedAll] = useState(false)
  const [type, setType] = useState("all")
  const [className, setClassName] = useState("checked")

  useEffect(() => {
    axios("https://6115f1058f38520017a38640.mockapi.io/checkbox")
      .then(({data}) => setStudents(data))
  }, [setStudents])

  const handleCheckAll = (e) => {
    setIsCheckedAll(e.target.checked)
    setType("all")
    if (e.target.checked){
      setCheckedStudent(students)
    }else{
      setCheckedStudent([])
    }
  }

  return (
    <div className="students">
      <Container>
        <div className="d-flex align-items-center">
          <h5>Select all</h5>
          <input type="checkbox"
                 checked={isCheckedAll}
          onChange={handleCheckAll}
                 className="ms-3"
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
                  key={student.id}
                  idx={idx}
                  isCheckedAll={isCheckedAll}
                  setCheckedStudent={setCheckedStudent}
                  type={type}
                  students={students}
                  setIsCheckedAll={setIsCheckedAll}
                  setType={setType}
                  checkedStudent={checkedStudent}
                />
              )
          }
          </tbody>
        </Table>
        <h5 className="mt-5">Selected Students</h5>
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
            checkedStudent.map((item, idx) =>
              <tr key={item.id}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.age}</td>
              </tr>
            )
          }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default StudentsList;