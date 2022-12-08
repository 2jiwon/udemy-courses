import './App.css';
import { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Micheal', age: '20' },
    { id: 2, name: 'Santa', age: '60' }
  ]);

  /**
   * User 추가
   * @param {} enteredValue 
   */
  const addUserHandler = enteredValue => {
    setUsers([...users, {
      id: Math.floor(Math.random() * 1000),
      name: enteredValue.name,
      age: enteredValue.age
    }]);
  }
  /**
   * User 삭제
   */
  const deleteUserHandler = userId => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    });
  }
  /**
   * User 목록
   */
  let content = (
    <p style={{ textAlign: 'center' }}>No Users.</p>
  );

  if (users.length > 0) {
    content = (
      <UsersList list={users} onDeleteUser={deleteUserHandler}></UsersList>
    )
  }

  return (
    <div>
      <section id="user-form">
        <UserInput onAddUser={addUserHandler}></UserInput>
      </section>
      <section id="users">
        {content}
      </section>
    </div>
  );
}

export default App;
