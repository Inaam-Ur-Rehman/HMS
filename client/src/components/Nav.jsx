   import React,{useState} from 'react'
import {Menu,X} from "lucide-react"

const menu =[
    {
        name:"Home",
        link:"/"
    },
    {
        name:"Services",
        link:"/services"
    },
    {
        name:"Contact",
        link:"/contact"
    },
    {
        name:"About",
        link:"/about"
    }
]

export default function Nav() {
    const [isOpen,setOpen] = useState(false)
  return (
    <nav className="flex flex-col md:flex-row justify-between px-6 bg-blue-500 text-white gap-y-6 text-xl py-4">
      <div className="flex items-center justify-between">
        <a href="/">HMS</a>
        {
            isOpen ?<X className="cursor-pointer md:hidden" onClick={()=>{
                setOpen(false)
            }} />:<Menu className="cursor-pointer md:hidden" onClick={()=>{
                setOpen(true)
            }} />
        }
      </div>
      <div className="hidden md:flex flex-col md:flex-row gap-6 md:items-center">
        {
            menu?.map((item,i)=>(
                <a key={i} href={item?.link}>{item?.name}</a>
            ))
        }      
      </div>
      {
        isOpen === true && <div className="flex flex-col md:flex-row gap-6 md:hidden transition- duration-150">
        {
            menu?.map((item,i)=>(
                <a key={i} href={item?.link}>{item?.name}</a>
            ))
        } 
      </div> 
      }
    </nav>
  )
}
