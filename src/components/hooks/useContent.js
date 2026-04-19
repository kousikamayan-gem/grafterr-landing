import React, { useEffect, useState } from 'react'
// import data from '../../../public/data'

const useContent = () => {

  const [content, setContents] = useState(null);
  const [error, setError] = useState(null)

  const fetchContent = async() => {
    try {
      const res = await fetch("/data/content.json");
      const json = await res.json();
      setContents(json)
    }
    catch(err) {
      setError(err.message)
    }
  }

  useEffect(()=> {
    setTimeout(()=> {fetchContent();},1000)
    
  },[])

  return {content, error};
}

export default useContent