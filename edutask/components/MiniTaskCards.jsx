import React from 'react';

const MiniTaskCards = ({ tasks }) => {
  const dailyTasks = tasks.filter((task) => task.task_type === "Daily").slice(0, 3);

  return (
    <section className='flex justify-center items-center flex-row'>
      {dailyTasks.map((task, index) => (
        <div key={index} className="border border-black w-96 h-60  rounded-md p-4 bg-white  ml-14">
          <p className='text-2xl '>{task.task_name}</p>
          <hr className="w-full bg-black"/>
          {/* Task Description */}
          <p className='mt-auto'>{task.task_type}</p>
          {/* Task Type */}
         
        </div>
      ))}
    </section>
  );
}

export default MiniTaskCards;
