import './App.css';
import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import DataTable from './components/DataTable';
 
// creating global context in app component
// export const FormFillData = React.createContext();
// export const SaveFunction = React.createContext();

export const globalContext = React.createContext();

function App() {
    
  const [employeeData, setEmployeeData] = useState([]);

  // const [displayData, setDisplayData] = useState(false);
  
  //Passing parameter(incomingData) to onSubmit function which will be used in EmployeeForm
  const onSubmit = (incomingData) => {
    setEmployeeData([...employeeData, incomingData])
    console.log(employeeData);
    console.log(incomingData)

  }

  // console.log(employeeData);

  return (
    <div>

      {/* <SaveFunction.Provider value={onSubmit} >
          <EmployeeForm displayData= {setDisplayData}/>
      </SaveFunction.Provider>
      
      <FormFillData.Provider value={displayData}>
        <DataTable data= {employeeData}/>
      </FormFillData.Provider> */}

<globalContext.Provider value={{onSubmit: onSubmit, employeeData: employeeData}}>
    <EmployeeForm/>
    {/* <DataTable data= {employeeData}/> */}
    <DataTable/>
</globalContext.Provider>

    </div>
  );
}

export default App;
