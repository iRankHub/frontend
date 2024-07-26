import SidebarStudent from '@/components/layout/admin/sidebar'
import TopBarStudents from '@/components/layout/admin/topbar-students'
import React from 'react'

function page({ children }: React.ReactNode) {
  return (
    <div className="min-h-screen bg-[#FAF9F9]">
      <SidebarStudent />
      <TopBarStudents />
      <main className="min-h-screen h-full max-w-[calc(100vw-20rem)] ml-80 mt-20">{children}</main>
    </div>
  )
}

export default page
