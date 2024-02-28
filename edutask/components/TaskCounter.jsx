import React from 'react';
import TaskData from '@/data/TaskData';
import Image from 'next/image';

const TaskCounter = () => {
  const { tasks } = TaskData();
  return (
    <section className='flex justify-center items-center m-6 relative'>
      <div className='border border-black w-11/12 text-center rounded-md p-20 ml-8 bg-white mt-10'>
        <p className='text-4xl'>This week you have {tasks.length} tasks.</p>
        <button className="bg-purple-two w-auto p-2 rounded-lg border border-black text-xl text-white">See More</button>
      </div>
      <div className="absolute right-0 top-0 -mt-10 mr-10">
        <Image 
          src={'https://img.freepik.com/free-vector/eco-education-concept-illustration_114360-6347.jpg?t=st=1709142306~exp=1709145906~hmac=bcc9b681d0787095a180d0a6dd02e1716e6f1f44ab2b2c1eb35f058cc8b8dfc5&w=1060'} 
          alt="teacher illustration" 
          width={300} 
          height={100}
          className='rounded-full border border-black mt-8 ml-10'
        />
      </div>
    </section>
  );
}

export default TaskCounter;
