import './App.css';
import { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Micheal', age: '20' },
    { id: 2, name: 'Santa', age: '60' }
  ]);

  const addUserHandler = enteredValue => {
    setUsers([...users, {
      id: Math.random(),
      name: enteredValue.name,
      age: enteredValue.age
    }]);
  }

  return (
    <div>
      <section id="user-form">
        <UserInput onAddUser={addUserHandler}></UserInput>
      </section>
      <section id="users">
        <UsersList list={users}></UsersList>
      </section>
    </div>
  );
}

export default App;
