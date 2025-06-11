// src/components/icons/People.tsx
import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface PeopleIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const XIcon: React.FC<PeopleIconProps> = ({
  width = 24,
  height = 24,
  color = "black",
}) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path
          d="M18 6L6 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6 6L18 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default XIcon;
