
import './components/styles/global.css'
import HeroSection from './components/sections/HeroSection'
import FeatureSection from './components/sections/FeatureSection'
import { useEffect } from 'react'

function App() {

  

  return (
    <div className='container'>
      <HeroSection/>
      <FeatureSection/>
    </div>
  )
}

export default App
