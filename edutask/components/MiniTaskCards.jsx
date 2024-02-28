import React from 'react'
import TaskData from '@/data/TaskData'

const MiniTaskCards = () => {
  const {tasks} = TaskData();
  return (
    <>
    <section className='flex justify-center items-center flex-row'>
    <div className="border border-black w-96 h-60 text-center rounded-md p-20  bg-white mt-10 ml-14">
    <hr className="w-full"/>
    </div>

<div className="border border-black w-96 h-60 text-center rounded-md p-20  bg-white mt-10 ml-24">

</div>

<div className="border border-black w-96 h-60 text-center rounded-md p-20  bg-white mt-10 ml-24">

</div>
</section>
</>
  )
}

export default MiniTaskCards