import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import {Table} from "react-bootstrap";

const StudentsItem = () => {
  const [isSelected, setIsSelected] = useState([])

  return (
    <div className="students-item">
      <Container>
        <Table bordered={true}>
          <thead>
          <tr>
            <th>#</th>
            <th>Checkbox</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
          </thead>
        </Table>
      </Container>
    </div>
  );
}

export default StudentsItem;