"use client"


export default function Home() {
  return (
    <>
    <section className="flex flex-col justify-center items-center h-screen ">
      {/* This div is the container that is holding the input and the button*/}
      <div className=" border-2 border-black flex flex-col justify-center items-center rounded-lg p-10 m-10 w-11/12 .h-2/5 md:w-1/2 lg:w-1/2 sm:w-1/2">
         <input type="text" placeholder="Email" className="bg-white border-2 border-black rounded-lg p-2 w-11/12"/>
         <input type="password" placeholder="Password" className="bg-white border-2 border-black rounded-lg p-2 w-11/12 mt-6"/>
         <button className="bg-purple-500 text-white rounded-lg p-2 w-1/2 mt-6 border-2 border-black">Login</button>
       
      </div>

    </section>
  
    </>
  );
}
