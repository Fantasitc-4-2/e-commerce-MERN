import React from 'react'

export default function SectionName({section,title}) {
  return (
    <>
    <div className='flex my-5 items-center'>
      <div className='h-10 w-4 rounded-sm mx-2 bg-[#DB4444]'></div>
      <div className='text-[#DB4444] font-semibold text-md mx-2'>{section}</div>
    </div>
    {title&&<h2 className='mx-4 font-bold text-3xl'>{title}</h2>}
    </>
  )
}
