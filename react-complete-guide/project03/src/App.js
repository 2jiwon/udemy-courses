import './App.css';
import { useState } from 'react';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Micheal', age: '20' },
    { id: 2, name: 'Santa', age: '60' }
  ]);

  return (
    <div>
      <section id="user-form"></section>
      <section id="users">
        <UsersList list={users}></UsersList>
      </section>
    </div>
  );
}

export default App;
