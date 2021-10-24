import React from 'react';
import { Link } from 'components';

export const LogoVector = ({ width = 26, height = 40, fill = 'black', ...rest }) => (
  <svg width={height} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <g clipPath="url(#clip0_407:2)">
      <path d="M24.484 19.1125H23.297V20.4197L24.128 24.2238L21.1104 33.632H6.93256L5.62671 34.9392H22.0629L25.4728 24.3058L24.484 19.1125Z" fill={fill} />
      <path d="M8.04528 15.3282H9.35113V3.49697L8.28377 0.0010376H3.49497L2.33398 3.48877V17.942H3.63915V3.7006L4.43592 1.30757H7.31753L8.04528 3.6924V15.3282Z" fill={fill} />
      <path d="M18.7551 19.711H19.8832V6.52752L20.5085 4.64904H22.4833L23.291 6.77284V19.711H24.5969V6.53367L23.384 3.34183H19.5675L18.5774 6.31569V20.7702H18.7551V19.711Z" fill={fill} />
      <path d="M12.8046 11.4762H9.66945L8.04517 12.6536V15.1649H9.35102V13.3212L10.0924 12.7828H12.4253L13.3116 13.3465V21.7707L12.4971 23.1968H10.3084L9.42345 22.0802H8.04517V22.4444L9.67765 24.5033H13.2549L14.6168 22.1178V12.6276L12.8046 11.4762Z" fill={fill} />
      <path d="M15.5463 21.8896H17.7869L18.5775 20.6623V13.3465L17.6913 12.7828H15.359L14.6169 13.3212V20.8734L15.5463 21.8896ZM18.4976 23.1968H14.9716L13.3118 21.3812V12.6536L14.9361 11.4762H18.0705L19.8834 12.6276V21.047L18.4976 23.1968Z" fill={fill} />
      <path d="M20.9341 38.6821V35.0495H6.93256V38.6821H20.9341ZM22.2399 39.9893H5.62671V33.7423H22.2399V39.9893Z" fill={fill} />
      <path d="M12.1363 34.9392H5.98625L0.0241699 28.2254V18.4551L10.3036 13.4681L13.3854 16.1393L11.8827 20.1552L9.02914 22.5667L12.5804 25.8761L11.6914 26.8328L7.06182 22.5189L10.7798 19.3769L11.8445 16.5322L10.0992 15.0193L1.33002 19.2744V27.7286L6.57255 33.6319H12.1363V34.9392Z" fill={fill} />
    </g>

    <defs>
      <clipPath id="clip0_407:2">
        <rect width={width} height={height} fill="none"/>
      </clipPath>
    </defs>
  </svg>
);

const Logo = () => (
  <div className="flex justify-start lg:w-0 lg:flex-1">
    <Link to="/tailwind/">
      <span className="sr-only">Workflow</span>
      <LogoVector />
    </Link>
  </div>
);


export default Logo;
