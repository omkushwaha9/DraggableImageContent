import React, { useRef} from 'react'
import Box1 from "./boxes/Box1";
import Box2 from "./boxes/Box2";


function Foreground() {
    const ref = useRef(null);
    return (
        <div ref={ref} className=' fixed top-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10'>
        <Box1 reference={ref}/>
        <Box2 reference={ref}/>
         

    </div>
    )
}

export default Foreground