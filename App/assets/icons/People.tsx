// src/components/icons/People.tsx
import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface PeopleIconProps {
  isFocused?: boolean;
  width?: number;
  height?: number;
}

const People: React.FC<PeopleIconProps> = ({
  isFocused = false,
  width = 21,
  height = 18,
}) => {
  const fillColor = isFocused ? "#203C87" : "transparent";
  const strokeColor = "#203C87";

  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 21 18" fill="none">
        <Path
          d="M17.095 16.8565H19.9521V16.1423C19.9521 13.0829 17.815 10.5227 14.9521 9.87305"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={fillColor}
        />
        <Path
          d="M12.8096 1.23259C13.0379 1.17384 13.2772 1.14258 13.5239 1.14258C15.1019 1.14258 16.381 2.42176 16.381 3.99972C16.381 5.57768 15.1019 6.85686 13.5239 6.85686C13.2772 6.85686 13.0379 6.82561 12.8096 6.76685"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={fillColor}
        />
        <Path
          d="M7.80943 9.71387C4.25903 9.71387 1.38086 12.592 1.38086 16.1424V16.8567H14.238V16.1424C14.238 12.592 11.3598 9.71387 7.80943 9.71387Z"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={fillColor}
        />
        <Path
          d="M7.80929 6.85686C9.38725 6.85686 10.6664 5.57768 10.6664 3.99972C10.6664 2.42176 9.38725 1.14258 7.80929 1.14258C6.23133 1.14258 4.95215 2.42176 4.95215 3.99972C4.95215 5.57768 6.23133 6.85686 7.80929 6.85686Z"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={fillColor}
        />
      </Svg>
    </View>
  );
};

export default People;
