import BoardCard from "./BoardCard";

const ActivityBoard = () => {
  return (
    <section className='flex justify-start items-start flex-row h-full m-8 p-8'>
      <div className="flex flex-row m-8">
      <button className='bg-purple p-20 border-none w-40 rounded-md text-white text-center flex items-center justify-center'>Add Idea</button>
      <div className="ml-8">
  <BoardCard/>
  </div>
      </div>
    </section>
  )
}

export default ActivityBoard
