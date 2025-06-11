// src/components/icons/People.tsx
import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface PeopleIconProps {
  isFocused?: boolean;
  width?: number;
  height?: number;
}

const Mail: React.FC<PeopleIconProps> = ({
  isFocused = false,
  width = 21,
  height = 18,
}) => {
  const fillColor = isFocused ? "#203C87" : "transparent";
  const strokeColor = isFocused ? "white" : "#203C87";

  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 21 18" fill="none">
        <Path
          d="M1.21436 15.4283V2.57115C1.21436 1.78218 1.85395 1.14258 2.64293 1.14258H18.3572C19.1462 1.14258 19.7858 1.78216 19.7858 2.57115V15.4283C19.7858 16.2173 19.1462 16.8569 18.3572 16.8569H2.64293C1.85395 16.8569 1.21436 16.2173 1.21436 15.4283Z"
          fill={fillColor}
          stroke="#203C87"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.21436 4.71387L9.68691 10.5795C10.1761 10.9182 10.824 10.9182 11.3132 10.5795L19.7858 4.71387"
          fill={fillColor}
        />
        <Path
          d="M1.21436 4.71387L9.68691 10.5795C10.1761 10.9182 10.824 10.9182 11.3132 10.5795L19.7858 4.71387"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Mail;
