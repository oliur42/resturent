import Link from 'next/link'
import React from 'react'

function Benner() {
    return (
        <div className=''>
            <div className='w-[1300px] mx-auto py-10'>
                <div className='flex gap-4'>
                    <div>
                        <p className='text-orange-400'>Discover your tested</p>
                        <h1 className='text-[55px] font-bold'>We belive good food offer great smile </h1>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae deserunt assumenda atque quisquam, impedit dolores minima alias,
                        <Link href="/" className='bg-orange-400 text-white px-10 mt-20 py-5 rounded-[5px]'>Resurvation</Link>
                    </div>
                    <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem id quibusdam adipisci vel quis, minus itaque provident et harum vitae ea reiciendis voluptatum pariatur veritatis necessitatibus! Quidem asperiores aliquam ipsam?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benner
