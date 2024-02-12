"use client"
import React from 'react'
import TaskCounter from './TaskCounter' // Import TaskCounter component
import DashboardLayout from './dashboardlayout' // Import DashboardLayout component

const Dashboard = () => {
  return (
    <DashboardLayout>
      <TaskCounter/>
    </DashboardLayout>
  )

}

export default Dashboard