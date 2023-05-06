import React from 'react'

type skillsType = {
  skills: string[];
}

export const Skills = (props: skillsType) => {
  return (
    <>
      <ul>
        {props.skills.map((e) => {
          return <li key={e}>{e}</li>
        })}
      </ul>
    </>
  )
}
