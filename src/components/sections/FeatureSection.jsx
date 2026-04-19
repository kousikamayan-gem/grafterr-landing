import React from 'react'
import Carousel from '../ui/Carousel'
import useContent from '../hooks/useContent'
import Skeleton from '../ui/Skeleton';

const FeatureSection = () => {

  const {content, error} = useContent();
  if (error) return <p>{error}</p>
  if (!content) return <Skeleton/>
  return (
   content && <div className='featuresSection'>
        <p className='shape2'></p>
        <p className='shape1'></p>
        <p className='title'>{content?.featuresSection?.title + content?.featuresSection?.titleAccent}</p>
        
        <p className='subtitle'>{content?.featuresSection?.subtitle}</p>
        <div className='headline'>

        </div>
        <div className='subline1'></div>
        <Carousel products={content?.featuresSection?.products}/>
      
    </div>
  )
}

export default FeatureSection