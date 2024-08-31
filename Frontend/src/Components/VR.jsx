import React, { useState, useEffect } from 'react';

const VR = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loading screen after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);
  
  

  return (
    <div className="relative w-[1280px] h-[720px]">
      {/* Loading screen */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black text-white z-50">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
            <p className="mt-4 text-lg">Loading...</p>
          </div>
        </div>
      )}

      {/* VR iframe */}
      <iframe
        src="https://www.spatial.io/embed/HEAVEN-SHOPPING-MALL-2-636c9205c9db410001ae5d34?share=7586527662699707201"
        width="1280px"
        height="720px"
        allow="camera; fullscreen; autoplay; display-capture; microphone; clipboard-write"
        className={`${loading ? 'invisible' : 'visible'} absolute inset-0 w-full h-full`}
      ></iframe>
    </div>
  );
};

export default VR;
