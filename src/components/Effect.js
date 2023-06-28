import React, { useEffect, useState } from 'react'

export const Effect = ({text, t2}) => {
  
  if(text === "Nasif"){
    setTimeout(() => {
        alert("Hi");
    }, 5000);
  }
  
  

//   useEffect(() => {
//     if(text === "Nasif"){
//         setTimeout(() => {
//             alert("Hi");
//         }, 5000);
        
//       }
//   }, [text])
  

  return (<>
    <div>{text}</div>
    <div>{t2}</div>
    </>
  )
}
