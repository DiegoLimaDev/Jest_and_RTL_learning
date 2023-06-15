import React, { useEffect, useState } from 'react'

type skillsType = {
  skills: string[];
}

export const Skills = (props: skillsType) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1001);
  },[])
  return (
    <>
      <ul>
        {props.skills.map((e) => {
          return <li key={e}>{e}</li>
        })}
      </ul>
      {isLoggedIn ? (<button>Start</button>): (<button onClick={()=>setIsLoggedIn(true)}>Login</button>)}
    </>
  )
}
