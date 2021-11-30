import './App.css';
import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import DataTable from './components/DataTable';

// creating global context in app component
export const globalContext = React.createContext();

function App() {

  const [employeeData, setEmployeeData] = useState([]);

  //Passing parameter(incomingData) to onSubmit function which will be used in EmployeeForm
  const onSubmit = (incomingData) => {
    setEmployeeData([...employeeData, incomingData])
    // console.log(employeeData);
    // console.log(incomingData);
  }

  return (
    <div>
      <globalContext.Provider value={{ onSave: onSubmit, data: employeeData }}>
            <EmployeeForm />
            <DataTable />
      </globalContext.Provider>
    </div>
  );
}

export default App;
