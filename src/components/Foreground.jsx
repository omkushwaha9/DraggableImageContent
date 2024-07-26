import React, { useRef, useState } from 'react'
import Box1 from "./Box1";


function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "This Draggable menu is Very imp as This can make the WebPage more Beautiful With draggable menue's.",
            filesize: ".4mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download now", tagColor: "green" },
        },
        {
            desc: "This Draggable menu is Very imp as This can make the WebPage more Beautiful With draggable menue's.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download now", tagColor: "blue" },
        },
        {
            desc: "This Draggable menu is Very imp as This can make the WebPage more Beautiful With draggable menue's.",
            filesize: ".7mb",
            close: false,
            tag: { isOpen: true, tagTitle: "upload", tagColor: "green" },
        },
    ];

    return (
        <div ref={ref} className=' fixed top-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10'>
            {data.map((item, index) =>
            <Box1 data={item} reference={ref} />
                
            )}

        </div>
    )
}

export default Foreground