"use client"
import DashboardLayout from './dashboardlayout' // Import DashboardLayout component
import TaskCounter from '@/components/TaskCounter'
import MiniTaskCards from '@/components/MiniTaskCards'


const Dashboard = () => {
  return (
    <DashboardLayout>
    <TaskCounter/>
    <MiniTaskCards/>
    </DashboardLayout>
  )

}

export default Dashboard