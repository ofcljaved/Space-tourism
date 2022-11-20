import React, { useContext } from 'react'
import { SpaceContext } from './context'

const technology = () => {
  const {techNav,loadTech,currTechnology} = useContext(SpaceContext);
  const tech = currTechnology[0];
  return (
    <section id='technology'>
      <h1><span>03</span>space launch 101</h1>
      <div className='techContainer'>
        <div className='techDesc'>
          <div className='technNav'>
            {techNav.map((name, id)=>(
              name === tech.name ? 
              <button key={id} onClick={()=>loadTech(id)} style = {{background: 'white', color: '#0B0D17'}}>{id + 1}</button> : <button key={id} onClick={()=>loadTech(id)}>{id + 1}</button>
            ))}
          </div>
          <div className='techContent'>
            <h2>The terminology...</h2>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        </div>
        <picture>
          <source media="(min-width:770px)"  srcSet={require(`${tech.images.portrait}`)}/>
          <img src= {require(`${tech.images.landscape}`)} alt={tech.name}/>
        </picture>
      </div>
    </section>
  )
}
export default technology