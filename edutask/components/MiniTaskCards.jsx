import React from 'react';
import TaskData from '@/data/TaskData';

const MiniTaskCards = () => {
  const { tasks } = TaskData();

  // Convert tasksIterable to an array using Array.from()
  const tasksArray = Array.from(tasks);

  // Selecting the last three tasks
  const lastThreeTasks = tasksArray.slice(-3);

  return (
    <>
      <section className='flex justify-center items-center flex-row'>
        {lastThreeTasks.map((task, index) => (
          <div key={index} className="border border-black w-96 h-60 text-center rounded-md p-20 bg-white mt-10 ml-14">
            <hr className="w-full"/>
            {/* Render chip for task type */}
            <div className="chip">{task.type === 'weekly' ? 'Weekly' : 'Daily'}</div>
            {/* Render other task details */}
            <p>{task.name}</p>
            {/* Add more task details as needed */}
          </div>
        ))}
      </section>
    </>
  );
}

export default MiniTaskCards;
