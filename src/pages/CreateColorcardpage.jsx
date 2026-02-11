import React, { useState } from 'react'
import GradientGenerator from '../components/GradientGenerator'
import RadialCard from '../components/RadialCard'
import GradientCard from '../components/GradientCard'

function CreateColorcardpage() {
  const [colors, set_colors] = useState({
    color1: "#84FAB0",
    color2: "#22E8F9"
  })


  const [config, setConfig] = useState({
      startColor: '#84FAB0',
      endColor: '#8FD3F4',
      type: 'linear',
      angle: 120,
    });

  

  return (
    <div className='flex flex-row items-center justify-center my-20'>
      <div className='flex-1'><GradientGenerator config={config} setConfig={setConfig}/></div>
      <div className='flex-1 flex flex-row gap-5'>
        <RadialCard color1={config.startColor} color2={config.endColor} />
        <GradientCard color1={config.startColor} color2={config.endColor} />
      </div>

    </div>
  )
}

export default CreateColorcardpage
