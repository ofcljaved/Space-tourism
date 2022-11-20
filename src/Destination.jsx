import React, { useContext } from 'react'
import { SpaceContext } from './context'

const destination = () => {
  const {dstntionNav,loadDestination,currDestination} = useContext(SpaceContext);
  const place = currDestination[0];
  return (
    <section id='destination'>
      <h1><span>01</span>pick your destination</h1>
      <div className='destnContainer'>
        <picture>
          <source srcSet={require(`${place.images.webp}`)}/>
          <img src= {require(`${place.images.png}`)} alt={place.name}/>
        </picture>
        <div className='destnDesc'>
          <div className='destnNav'>
            {dstntionNav.map((name, id)=>(
              name !== place.name ?
              <button key={id} onClick={()=>loadDestination(name)} >{name}</button> :
              <button key={id} onClick={()=>loadDestination(name)} style = {{borderBottom:'.3rem solid #FFFFFF'}}>{name}</button>
            ))}
          </div>
          <div className='destnContent'>
            <h2>{place.name}</h2>
            <p>{place.description}</p>
            <hr/>
            <div className='info'>
              <div className='distance'>avg. distance<span>{place.distance}</span></div>
              <div className='time'>est. time travel<span>{place.travel}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default destination;