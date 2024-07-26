import React from 'react'
import { SiPexels } from "react-icons/si";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion"
import BoxForeground from './BoxForeground';

function Box1({ reference }) {
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
        <img className= ' h-25 w-40 m-3 rounded-[5px]'
        src='https://images.pexels.com/photos/981908/pexels-photo-981908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
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
        <BoxForeground/>
        </motion.div>
        
    )
}

export default Box1