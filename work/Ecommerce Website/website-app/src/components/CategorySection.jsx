import React from 'react'
import MenCategory from '../images/Men.png'
import WomenCategory from '../images/Women.png'
import KidsCategory from '../images/Kids.png'

const Categories = [
    {
        title:'Men',
        imageUrl: MenCategory,
    },
     {
        title:'Women',
        imageUrl: WomenCategory,
    },
     {
        title:'Kids',
        imageUrl: KidsCategory,
    }   
]
const CategorySection = () => {
  return (
    <>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 '>
            {Categories.map((category,index)=>(
                <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'> 
                    <img src={category.imageUrl} alt="" className='w-full h-full object-cover rounded-lg shadow-md' />
                    <div className='absolute top-20 left-12 '>
                        <p className='text-x1 font-bold'>{category.title}</p>
                        <p className='text-gray-600'>View All</p>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default CategorySection