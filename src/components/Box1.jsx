import React from 'react'
import { SiPexels } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ reference }) {
    return (
        <motion.div
        drag
            dragConstraints={reference}
            whileDrag={{ scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }}
        className=' relative  flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-7 py-7 overflow-hidden'>
        <SiPexels />
        <img className= 'p-2 mt-2 '
        src='https://images.pexels.com/photos/18609055/pexels-photo-18609055/free-photo-of-a-house-with-wires-and-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' />
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