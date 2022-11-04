import './App.css';
import { useState } from 'react';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Learn React!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  return (
    <div>

    </div>
  );
}

export default App;
