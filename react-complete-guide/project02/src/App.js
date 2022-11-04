import './App.css';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import CourseGoalInput from './components/CourseGoalInput';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Learn React!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  /**
   * Goal 목록 표시
   */
  let content = (
    <p style={{ textAlign: 'center' }}>No Goals found.</p>
  )
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} />
    )
  }

  /**
   * Goal 추가
   */
  const addGoalHandler = enteredText => {
    console.log(enteredText);
    setCourseGoals([...courseGoals, {
      text: enteredText,
      id: Math.random().toString()
    }]);
  }

  return (
    <div>
      <section id="goal-form">
        <CourseGoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
