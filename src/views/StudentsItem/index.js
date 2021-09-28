import React, {useEffect, useState} from 'react';
import './index.css'

const StudentsItem = ({student, idx, isCheckedAll, type, students,checkedStudent,setCheckedStudent, setIsCheckedAll, setType}) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (students.length !== checkedStudent.length){
      setType("all")
      setIsChecked(isCheckedAll)
    }else{
      setType("one")
      setIsCheckedAll(false)
    }
  },[students.length, checkedStudent.length, setIsCheckedAll, setType])

  useEffect(() => {
    if (type === "all"){
      setIsChecked(isCheckedAll)
    }
  },[isCheckedAll, type])

  const handleChange = (e) => {
    setIsChecked(e.target.checked)
    if (e.target.checked){
      setCheckedStudent([...checkedStudent, student])
    }else{
      setCheckedStudent(checkedStudent.filter(item => item !== student.id))
    }
  }

  return (
    <tr key={student.id}>
      <td>{idx + 1}</td>
      <td><input
        type="checkbox" checked={isChecked} onChange={handleChange}/></td>
      <td>{student.name}</td>
      <td>{student.surname}</td>
      <td>{student.age}</td>
    </tr>
  );
};

export default StudentsItem;