import React from 'react'
import { Link } from 'react-router'

export default function ProductCard({img,title,description}) {
  return (
    <div className='w-full max-w-sm border border-gray-200 rounded-lg'>
      <Link to='#'>
            <img className='p-8 rounded-t-lg' src={img} alt={title} />
      </Link>
      <Link>
            <h5 className='text-xl font-semibold tracking-tight'>{title}</h5>
      </Link>
        <p>{description}</p>
    </div>
  )
}
