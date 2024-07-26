import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {
    return (
        <motion.div
        className=' relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-7 py-7 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 leading-tight font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
        <div className='  flex items-center justify-between mb-1 px-5 py-3'>
          <h5>.4mb</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
          <LuDownload size=".7em" color='#fff' />
          </span>
        </div>
        <div className='tag w-full py-4 bg-green-500'>
         <h3 className='text-md flex justify-center font-semibold'> Download Now </h3>
        </div>
        </div>
      
        </motion.div>
    )
}

export default Card