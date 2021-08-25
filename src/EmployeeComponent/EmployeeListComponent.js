import { Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useRef } from 'react';
import { EmployeeDataComponent } from "./EmployeeDataComponent";

export const EmployeeListComponent = () => {

    const [employeeData, setEmployeeData] = React.useState([
        {
            firstName : 'Chirag',
            lastName : 'Arora',
            dob : '15th April',
            designation : 'Senior Associate',
            profile_link : 'https://www.google.com/search?q=google+images&safe=active&rlz=1C1GCEA_enPK948PK948&sxsrf=ALeKk03Bk951zHMwZh9A-dRvegSVCCkZSA:1629892332541&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwjPtoKMjszyAhUUrpUCHVbsCY4Q_AUoAXoECAEQAw&biw=1536&bih=754#imgrc=Hb99VlEqJnsWuM',
            experience : '2',
            delFlag : false
        }
    ])
    
    const refFirstName = useRef(null);
    const refLastName = useRef(null);
    const refDOB = useRef(null);
    const refDesignation = useRef(null);
    const refProfile = useRef(null);
    const refExperience = useRef(null);

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const addEmployee = (e) => {
        e.preventDefault();
        const currObj  = {
            firstName : refFirstName.current.value,
            lastName : refLastName.current.value,
            dob : refDOB.current.value,
            designation : refDesignation.current.value,
            profile_link : refProfile.current.value,
            experience : refExperience.current.value,
            delFlag : false
        }
        setEmployeeData([...employeeData, currObj]);
    }

    const delEmployee = (e) => {
        e.preventDefault();
        setEmployeeData(employeeData.filter(item => item.delFlag))
    }
    
    return (
        <div>
            <Button onClick = {() => {setIsModalVisible(true)}}>Add Employee</Button>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                    <th>Designation</th>
                    <th>Profile Image</th>
                    <th>Experience</th>
                </tr>

                {employeeData.map(employee => {
                    return (
                        <EmployeeDataComponent employee = {employee} />
                    )
                })}
                
            </table>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={addEmployee} onCancel={() => setIsModalVisible(false)}>
                <form>
                    <input name = 'firstName' placeholder = 'First Name' ref = {refFirstName} />
                    <input name = 'lastName' placeholder = 'Last Name' ref = {refLastName} />
                    <input name = 'dob' placeholder = 'DOB' ref = {refDOB}/>
                    <input name = 'designation' placeholder = 'Designation' ref = {refDesignation}/>
                    <input name = 'profle' placeholder = 'Profile' ref = {refProfile}/>
                    <input name = 'experience' placeholder = 'Experience' ref = {refExperience}/>
                </form>
            </Modal>
        </div>
    );
}