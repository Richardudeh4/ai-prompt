"use client";
import React from 'react'
import ShopSidebar from '@/components/Shop/shop-sidebar';
import UploadPrompt from '@/components/Shop/upload-prompt';
type Props = {}
const Page = (props: Props) => {
  return (
    <div className='flex w-full'>
    <div className='h-screen sticky top-0 left-0 z-[20] flex p-2 bg-[#111C42] md:w-[20%] 2xl:w-[17%]'>
        <ShopSidebar active={0}/>
    </div>
    <div className='md:w-[80%] 2xl:w-[83%]'>
<UploadPrompt/>
    </div>
    </div>
  )
}

export default Page