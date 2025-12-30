
const Glasses = () => {
  return <>  
<svg viewBox="0 0 400 400" width="500px" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" 
      style={{
        stopColor: "#e8f4f8",
        stopOpacity: 0.4,
      }
      }     
      
      />
      <stop offset="50%" 
      style={{
        stopColor: "#ffffff",
        stopOpacity: 0.6,
      }}

      />
      <stop offset="100%" 
      style={{
        stopColor: "#c9e4ec",
        stopOpacity: 0.4,
      }}
      />
    </linearGradient>
    
    <linearGradient id="beerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" 
      style={{
        stopColor: "#f5a623",
        stopOpacity: 0.9,
      }}

      />
      <stop offset="100%" 
        style={{
          stopColor: "#d68910",
          stopOpacity: 0.95,
        }}

      />
    </linearGradient>
    
    <linearGradient id="foamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"    
        style={{
          stopColor: "#ffffff",
          stopOpacity: 1,
        }}
      />
      <stop offset="100%" 
        style={{
          stopColor: "#f5f5dc",
          stopOpacity: 0.95,
        }}
      />
    </linearGradient>
  </defs>
  
  <g id="leftMug">
    <rect x="85" y="160" width="70" height="110" rx="5" ry="5"
          fill="url(#glassGradient)" 
          stroke="#5fa8d3" 
          stroke-width="3"/>
    
    <rect x="88" y="190" width="64" height="77" rx="3" ry="3"
          fill="url(#beerGradient)"/>
    
    <ellipse cx="120" cy="190" rx="32" ry="12" 
             fill="url(#foamGradient)"/>
    <ellipse cx="110" cy="183" rx="18" ry="10" 
             fill="url(#foamGradient)" opacity="0.8"/>
    <ellipse cx="130" cy="185" rx="15" ry="8" 
             fill="url(#foamGradient)" opacity="0.8"/>
    <ellipse cx="120" cy="178" rx="12" ry="7" 
             fill="url(#foamGradient)" opacity="0.9"/>
    
    <path d="M 85 180 Q 65 180 65 210 Q 65 240 85 240" 
          fill="none" 
          stroke="#5fa8d3" 
          stroke-width="8"
          opacity="0.5"/>
    <path d="M 85 180 Q 65 180 65 210 Q 65 240 85 240" 
          fill="none" 
          stroke="#ffffff" 
          stroke-width="3"
          opacity="0.3"/>
    
    <rect x="92" y="170" width="8" height="80" rx="2"
          fill="white" 
          opacity="0.4"/>
    
    <circle cx="100" cy="220" r="2" fill="white" opacity="0.6">
      <animate attributeName="cy" values="250;195;250" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="110" cy="235" r="1.5" fill="white" opacity="0.6">
      <animate attributeName="cy" values="260;200;260" dur="3.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="135" cy="225" r="2" fill="white" opacity="0.6">
      <animate attributeName="cy" values="255;195;255" dur="2.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite"/>
    </circle>
    
    <animateTransform
      attributeName="transform"
      type="rotate"
      values="0 120 270; -20 120 270; 5 120 270; 0 120 270"
      dur="2s"
      repeatCount="indefinite"/>
    <animateTransform
      attributeName="transform"
      type="translate"
      values="0 0; 40 -30; 0 0"
      dur="2s"
      repeatCount="indefinite"
      additive="sum"/>
  </g>
  
  <g id="rightMug">
    <rect x="245" y="160" width="70" height="110" rx="5" ry="5"
          fill="url(#glassGradient)" 
          stroke="#5fa8d3" 
          stroke-width="3"/>
    
    <rect x="248" y="190" width="64" height="77" rx="3" ry="3"
          fill="url(#beerGradient)"/>
    
    <ellipse cx="280" cy="190" rx="32" ry="12" 
             fill="url(#foamGradient)"/>
    <ellipse cx="270" cy="183" rx="18" ry="10" 
             fill="url(#foamGradient)" opacity="0.8"/>
    <ellipse cx="290" cy="185" rx="15" ry="8" 
             fill="url(#foamGradient)" opacity="0.8"/>
    <ellipse cx="280" cy="178" rx="12" ry="7" 
             fill="url(#foamGradient)" opacity="0.9"/>
    
    <path d="M 315 180 Q 335 180 335 210 Q 335 240 315 240" 
          fill="none" 
          stroke="#5fa8d3" 
          stroke-width="8"
          opacity="0.5"/>
    <path d="M 315 180 Q 335 180 335 210 Q 335 240 315 240" 
          fill="none" 
          stroke="#ffffff" 
          stroke-width="3"
          opacity="0.3"/>
    
    <rect x="252" y="170" width="8" height="80" rx="2"
          fill="white" 
          opacity="0.4"/>
    
    <circle cx="260" cy="220" r="2" fill="white" opacity="0.6">
      <animate attributeName="cy" values="250;195;250" dur="3.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="270" cy="235" r="1.5" fill="white" opacity="0.6">
      <animate attributeName="cy" values="260;200;260" dur="3.7s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.7s" repeatCount="indefinite"/>
    </circle>
    <circle cx="295" cy="225" r="2" fill="white" opacity="0.6">
      <animate attributeName="cy" values="255;195;255" dur="3.3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.3s" repeatCount="indefinite"/>
    </circle>
    
    <animateTransform
      attributeName="transform"
      type="rotate"
      values="0 280 270; 20 280 270; -5 280 270; 0 280 270"
      dur="2s"
      repeatCount="indefinite"/>
    <animateTransform
      attributeName="transform"
      type="translate"
      values="0 0; -40 -30; 0 0"
      dur="2s"
      repeatCount="indefinite"
      additive="sum"/>
  </g>
  
  <g id="sparkles">
    <circle cx="200" cy="130" r="3" fill="#ffd700">
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="r" values="0;5;0" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="185" cy="125" r="2" fill="#ffd700">
      <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.1s" repeatCount="indefinite"/>
      <animate attributeName="r" values="0;4;0" dur="2s" begin="0.1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="215" cy="125" r="2" fill="#ffd700">
      <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.15s" repeatCount="indefinite"/>
      <animate attributeName="r" values="0;4;0" dur="2s" begin="0.15s" repeatCount="indefinite"/>
    </circle>
    <circle cx="190" cy="135" r="2" fill="#ffed4e">
      <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.2s" repeatCount="indefinite"/>
      <animate attributeName="r" values="0;3;0" dur="2s" begin="0.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="210" cy="135" r="2" fill="#ffed4e">
      <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.25s" repeatCount="indefinite"/>
      <animate attributeName="r" values="0;3;0" dur="2s" begin="0.25s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="120" r="2" fill="#ffffff">
      <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.3s" repeatCount="indefinite"/>
      <animate attributeName="r" values="0;3;0" dur="2s" begin="0.3s" repeatCount="indefinite"/>
    </circle>
  </g>
</svg>
  </>
};

export default Glasses;