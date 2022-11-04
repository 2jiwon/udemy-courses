import './App.css';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Learn React!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  return (
    <div>
      <CourseGoalList items={courseGoals} />
    </div>
  );
}

export default App;
