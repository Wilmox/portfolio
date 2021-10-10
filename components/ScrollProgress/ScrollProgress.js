import { useEffect, useState } from "react";

const ScrollProgress = () => {

    useEffect(() => {
        const handleScroll = () => {
            const progressbar = document.querySelector("progress");
            const div = document.getElementById("top");
            
            progressbar.value = (window.scrollY / (div.offsetHeight - window.innerHeight)) * 100;
          };
      
          handleScroll();
      
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
      
  }, []);

    

    return (
        <progress id="scrollProgress" min="0" max="100" value="0"></progress>
    );
}

export default ScrollProgress;