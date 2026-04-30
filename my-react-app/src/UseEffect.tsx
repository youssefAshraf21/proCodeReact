import React, { useState, useEffect } from 'react';

function UseEffect() {

const [width , setWidth] = useState(window.innerWidth);
const [height , setHeight] = useState(window.innerHeight);

function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}

useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
},[]);  

useEffect(() => {
    document.title = `${width} x ${height}`;
}, [width, height]);

    return(<>
    
        <p>the hight of page is : {height} px</p>
        <p>the width of page is : {width} px</p>
        </>
    )
}

export default UseEffect