import React, {useEffect, useState} from 'react';

const StudentsItem = ({student, idx, isCheckedAll, setIsCheckedAll, type, students,checkedStudent,setCheckedStudent, setType}) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (students.length === checkedStudent.length){
      setType("all")
      setIsCheckedAll(true)
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

  const handleCheck = (e) => {
    setIsChecked(e.target.checked)
    if (e.target.checked){
      setCheckedStudent([...checkedStudent, student])
    }else{
      setCheckedStudent(checkedStudent.filter(item => item.id !== student.id))
    }
  }

  return (
    <tr key={student.id}>
      <td>{idx + 1}</td>
      <td><input
        type="checkbox" checked={isChecked} onChange={handleCheck}/></td>
      <td>{student.name}</td>
      <td>{student.surname}</td>
      <td>{student.age}</td>
    </tr>
  );
};

export default StudentsItem;