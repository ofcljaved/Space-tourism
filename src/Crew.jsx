import React, { useContext } from 'react'
import { SpaceContext } from './context'

const crew = () => {
  const {crewNav,loadCrew,currCrew} = useContext(SpaceContext);
  const member = currCrew[0];
  return (
    <section id='crew'>
      
      <div className='crewContainer'>
        <h1><span>02</span>meet your crew</h1>
        <div className='crewDesc'>
          <div className='crewContent'>
            <h2>{member.role}</h2>
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
          </div>
          <div className='crewNav'>
            {crewNav.map((name, id)=>(
              name === member.name ?
              <button key={id} onClick={()=>loadCrew(id)} style={{background:'#FFFFFF'}}></button> : <button key={id} onClick={()=>loadCrew(id)}></button>
            ))}
          </div>
        </div>
        <picture>
          <source srcSet={require(`${member.images.webp}`)}/>
          <img src= {require(`${member.images.png}`)} alt={member.name}/>
        </picture>
      </div>
    </section>
  )
}

export default crew