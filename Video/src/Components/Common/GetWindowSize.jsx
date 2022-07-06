//https://zenn.dev/developanda/articles/daf34873fe4ef4

import React, {useState, useEffect} from "react"

export const GetWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        const handleResize = () => {
          setWindowSize({
            width:
             window.innerWidth,
            height: window.innerHeight,
          });
        };
  
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      } else {
        return;
      }
    }, []);
    return windowSize;
  };

  export default GetWindowSize