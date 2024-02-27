"use client"
import DashboardLayout from './dashboardlayout' // Import DashboardLayout component
import TaskCounter from '@/components/TaskCounter'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <TaskCounter/>
    </DashboardLayout>
  )

}

export default Dashboard