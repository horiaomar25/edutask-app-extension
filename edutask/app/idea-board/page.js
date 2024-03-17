"use client"
import IdeaBoardLayout from './ideaboardlayout'
import Image from 'next/image'
import ActivityBoard from '@/components/ActivityBoard'
const page = () => {
  return (
    <IdeaBoardLayout>
      <section className='flex justify-center items-center flex-col'>
        <div className="flex justify-center items-center mt-12">
          <Image src={'https://static.vecteezy.com/system/resources/previews/009/408/676/non_2x/light-bulb-transparent-free-png.png'} width={150} height={100} alt="lightbulbpicture"/>
        </div>
        <h2 className='text-2xl '>Activity Board</h2>
      </section>
      <ActivityBoard/>

    </IdeaBoardLayout>
  )
}

export default page
