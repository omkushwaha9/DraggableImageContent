import React from 'react'

function Background() {
    return (
        <>
            <div className=' fixed z-[2] w-full h-screen '>
                <div className=' absolute w-full py-10  top-[5%] flex justify-center font-semibold text-zinc-600 text-xl '> Gallery.</div>
                <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[14vw] leading-none  font-semibold text-zinc-900'  >Gallery.</h1>
            </div>

        </>
    )
}

export default Background