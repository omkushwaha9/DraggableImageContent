import React, { useRef, useState } from 'react'
import Box1 from "./Box1";


function Foreground() {
    const ref = useRef(null);
    return (
        <div ref={ref} className=' fixed top-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10'>
        <Box1 reference={ref}/>

    </div>
    )
}

export default Foreground