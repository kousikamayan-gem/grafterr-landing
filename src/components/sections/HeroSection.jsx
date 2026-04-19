import React, { useEffect } from 'react'
import '../styles/global.css'
import GradiantText from '../ui/GradiantText'
import GradiantButton from '../ui/GradiantButton'
// import content from '../../../content/content.json'
import useContent from '../hooks/useContent'
import Skeleton from '../ui/PageSkeleton'

const HeroSection = () => {
  const {content, error} = useContent();
  if (error) return <p>{error}</p>
  if (!content) return <Skeleton/>
  return (
    <div className='hero'>
        <p className='hero-heading'>{content?.hero?.headlinePrefix}</p>
        <GradiantText headlineGradient = {content?.hero?.headlineGradient}/>
        <p className='subheadline'>{content?.hero?.subheadline}</p>
        <GradiantButton label = {content?.hero?.cta?.label}/>


    </div>
  )
}

export default HeroSection