import React, { useEffect, useState } from 'react'

const useCarousel = () => {
    const [itemsPerView, setItemsPerView] = useState(3);
    

  // ✅ Responsive handling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return itemsPerView;
}

export default useCarousel