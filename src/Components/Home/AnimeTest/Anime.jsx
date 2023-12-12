import React, { useEffect } from 'react';

const Anime = () => {
  useEffect(() => {
    const path = document.querySelector('.name-path');

    if (!path) {
      console.error("Path element not found.");
      return;
    }

    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const drawAnimation = () => {
      path.style.strokeDashoffset = 0;
    };

    // Delay the animation for 500 milliseconds
    const animationTimeout = setTimeout(drawAnimation, 500);

    // Cleanup function
    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div>
      <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <path
          className="name-path"
          d="M 10 40 Q 100 0 200 40"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default Anime;
