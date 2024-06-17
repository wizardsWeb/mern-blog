import React, { useEffect, useState } from 'react'
import { Sidebar } from 'flowbite-react';
import { HiUser, HiArrowSmRight } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom';

export default function DashSidebar() {

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
        <Sidebar className='w-full md:w-56 '>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to='/dashBoard?tab=profile'>
                    <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={'user'} labelColor='dark' >
                        Profile
                    </Sidebar.Item>
                    </Link>
                    <Sidebar.Item icon={HiArrowSmRight} >
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    </>
  )
}
