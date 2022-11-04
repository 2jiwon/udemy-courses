import './App.css';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import CourseGoalInput from './components/CourseGoalInput';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Learn React!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  return (
    <div>
      <section id="goal-form">
        <CourseGoalInput />
      </section>
      <section id="goals">
        <CourseGoalList items={courseGoals} />
      </section>
    </div>
  );
}

export default App;
