import React, { useContext } from 'react'
// import { FormFillData } from '../App'
import { globalContext } from '../App'

const DataTable = () => {
 
    // Using useContext to pass intial state (employeeData) as a prop from App.js
    let {data} = useContext(globalContext)

    return (
        <>

            {/* true && expression always evaluates to expression,
             and false && expression always evaluates to false.
             Here, condition is true, the element right after && will appear in the output.
              */}

            { /* {displayData && */}

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>PhoneNo</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value) =>
                                <tr key={value.phoneNo}>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phoneNo}</td>
                                    <td>{value.city}</td>
                                </tr>
                            )}
                    </tbody>
                </table>

        </>
    )
}

export default DataTable
