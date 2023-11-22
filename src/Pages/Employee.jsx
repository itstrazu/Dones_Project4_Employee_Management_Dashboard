function Employee({employeeID,lastname,firstname,middlename,suffix,gender
    ,birthday,email,phonenumber,address1,address2,street,barangay,city,province,
    postal,title,department,dateofhire,active,salary,status,yearsofcontract,wfh,
    leave,emergencyName,emergencyStreet,emergencyBarangay,emergencyCity,emergencyProvince,
    emergencyPostal,emergencyCell,emergencyRelationship,account,updateemployee}){
    
    const testClick = () => {
        alert("Hello")
    }
    
    return(
        <>
            <tr className="text-center" hover style={{cursor:'pointer'}} onClick={()=>updateemployee(employeeID,lastname,firstname,middlename,suffix,gender
        ,birthday,email,phonenumber,address1,address2,street,barangay,city,province,
        postal,title,department,dateofhire,active,salary,status,yearsofcontract,wfh,
        leave,emergencyName,emergencyStreet,emergencyBarangay,emergencyCity,emergencyProvince,
        emergencyPostal,emergencyCell,emergencyRelationship,account,updateemployee)}>
                <td>
                    {lastname}
                </td>
                <td>
                    {firstname}
                </td>
                <td>
                    {middlename}
                </td>
                <td>
                    {phonenumber}
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {title}
                </td>
                <td>
                    {department}
                </td>
                <td>
                    {status}
                </td>
                <td>
                    {salary}
                </td>
                <td>
                    {leave}
                </td>
                <td>
                    {account}
                </td>
            </tr>
        </>
    )
}

export default Employee