import React from 'react';
export const EmployeeDataComponent = ({employee}) => {
    return (
        <tr>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.dob}</td>
            <td>{employee.designation}</td>
            <td><img src = {employee.profile} alt ="" /></td>
            <td>{employee.experience}</td>
            {/* <td>Delete Employee</td> */}
        </tr>
        
    );
}