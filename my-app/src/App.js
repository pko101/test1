import logo from './logo.svg';
import './App.css';
import { Component1 } from './component1/component1';
import { AccessibleName } from './AccessibleByName/AccessibleElement';
import { IconButtons } from './AccessibleByName/AccessibleElement';
import { Example1 } from './3.GetQueryFind/Example1';
import DataForm from './5.OtherQueries/DataForm';
function App() {
  return (
    <div className="App">
      <Example1></Example1>
      <DataForm onSubmit={(data) => console.log(data)}></DataForm>
      <AccessibleName></AccessibleName>
      {/* <IconButtons/>  */}
    </div>
  );
}

export default App;
