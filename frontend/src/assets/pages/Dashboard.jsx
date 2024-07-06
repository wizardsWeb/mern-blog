import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import DashSidebar from '../../components/DashSidebar';
import DashProfile from '../../components/DashProfile';
import DashPost from '../../components/DashPost';
import UserDash from '../../components/UserDash';
import DashComment from '../../components/DashComment';
import DashboardComp from '../../components/DashboardComp';



const Dashboard = () => {
  
  const location = useLocation();

  const [tab, setTab] = useState('')

  useEffect (() => {
    const urlParams = new URLSearchParams(location.search);
    const tabfromUrl = urlParams.get('tab')
    if (tabfromUrl) {
      setTab(tabfromUrl)
    }
  }), [ location.search ]

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">

        {/* Sidebar */}
        <div className="md:w-56">
          <DashSidebar />
        </div>

        {/* Profile... */}
          {tab === 'profile' && <DashProfile /> }
        {/* Posts */}
          {tab === 'posts' && <DashPost /> }
        {/* Users */}
          {tab === 'users' && <UserDash /> }
        {/* Comments */}
          {tab === 'comments' && <DashComment /> }
        {/* Dashboard */}
          {tab === 'dash' && <DashboardComp /> }
      </div>
    </>
  )
}

export default Dashboard
