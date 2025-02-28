import React, { useEffect, useRef } from 'react';
import { useAnimation, motion } from 'etro';

const VideoP = () => {
  const animation = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    animation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    });
  }, []);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }}>
      {/* Your component content */}
      Hello
    </motion.div>
  );
};

export default VideoP;