import React from 'react';
import { FiArrowUp } from "react-icons/fi";

function ScrollButton({ scrollState }) {
  return (
    <div>
      {scrollState && (
				<div 
          style={{display: "block",right:0,left:"30px"}}
          className="back-to-top" 
          onClick={() => window.scrollTo(0, 0)}
        >
					<FiArrowUp  size={22} />	
				</div>
			)}
    </div>
  );
}

export default ScrollButton;