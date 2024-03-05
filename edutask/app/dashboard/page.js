"use client"
import DashboardLayout from './dashboardlayout' // Import DashboardLayout component
import TaskCounter from '@/components/TaskCounter'
import MiniTaskCards from '@/components/MiniTaskCards'
import TaskData from '@/data/TaskData'


const Dashboard = () => {
  const { tasks } = TaskData();
   
  return (
    <DashboardLayout>
    <TaskCounter/>
    <MiniTaskCards tasks={tasks}/>
    </DashboardLayout>
  )

}

export default Dashboard