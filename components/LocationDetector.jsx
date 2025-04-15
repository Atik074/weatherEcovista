"use client"
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import React, { useEffect, useState } from 'react'

export default function LocationDetector() {
    const [loading , setLoading] = useState(false)
    const seachParams = useSearchParams()
    const pathName = usePathname()
    const router = useRouter()

    useEffect(()=>{
          setLoading(true)
          const params = new URLSearchParams(seachParams)

          if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                console.log(position)
                params.set("latitude",position.coords.latitude)
                params.set("longitude" ,position.coords.longitude)
                setLoading(false)
                router.push(`/current?${params.toString()}`)
            })
          }

         
    },[pathName,seachParams])

  return (
    <div className='flex flex-col justify-center items-center text-white h-screen bg-slate-700'>
        {
            loading && (
                <>
                  <Image 
                  src='/network.png' 
                  alt='loadin-img...' 
              width={500} 
              height={500}
            className='border rounded my-4'/>
            <div className="text-4xl text-center"></div>
                </>
            )
        }
    </div>
  )
}
