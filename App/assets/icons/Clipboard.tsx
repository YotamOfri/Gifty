// src/components/icons/People.tsx
import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface PeopleIconProps {
  isFocused?: boolean;
  width?: number;
  height?: number;
}

const Clipboard: React.FC<PeopleIconProps> = ({
  isFocused = false,
  width = 21,
  height = 18,
}) => {
  const fillColor = isFocused ? "#203C87" : "transparent";
  const strokeColor = isFocused ? "white" : "#203C87";

  return (
    <Svg width={width} height={height} viewBox="0 0 18 20" fill="none">
      <Path
        d="M13.2261 2.14258H15.7618C16.5508 2.14258 17.1904 2.78218 17.1904 3.57115V17.8569C17.1904 18.6459 16.5508 19.2854 15.7618 19.2854H2.90465C2.11567 19.2854 1.47607 18.6459 1.47607 17.8569V3.57115C1.47607 2.78218 2.11566 2.14258 2.90465 2.14258H5.44036"
        stroke="#203C87"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
      />
      <Path
        d="M11.4762 4.2853H7.1905C6.20427 4.2853 5.40479 3.48581 5.40479 2.49958C5.40479 1.51335 6.20427 0.713867 7.1905 0.713867H11.4762C12.4624 0.713867 13.2619 1.51335 13.2619 2.49958C13.2619 3.48581 12.4624 4.2853 11.4762 4.2853Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
      />
      <Path
        d="M6.47607 12.4996L8.61893 13.9282L12.9046 8.21387"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Clipboard;
