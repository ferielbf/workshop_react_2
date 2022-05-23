
import './App.css';
import NavBar from './components/NavBar';
import Form from './components/Form'
import Table from './components/Table'
import {data} from './data'


function App() {
  return (
    <div className="App">
      
      <NavBar/> 
      <Form/>
      <Table user="user1" CustomData ={data}/>
      

    </div>
  );
}

export default App;
