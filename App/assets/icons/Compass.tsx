import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

interface PeopleIconProps {
  isFocused?: boolean;
  width?: number;
  height?: number;
}

const Compass: React.FC<PeopleIconProps> = ({
  isFocused = false,
  width = 21,
  height = 18,
}) => {
  const fillColor = isFocused ? "#203C87" : "transparent";
  const strokeColor = isFocused ? "white" : "#203C87";

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={fillColor}>
      <Rect width="24" height="24" rx="12" fill="white" />
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#203C87"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.24 7.75977L14.12 14.1198L7.76001 16.2398L9.88001 9.87977L16.24 7.75977Z"
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Compass;
