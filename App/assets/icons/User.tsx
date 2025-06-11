// src/components/icons/People.tsx
import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface PeopleIconProps {
  isFocused?: boolean;
  width?: number;
  height?: number;
}

const Settings: React.FC<PeopleIconProps> = ({
  isFocused = false,
  width = 21,
  height = 18,
}) => {
  const fillColor = isFocused ? "#203C87" : "transparent";
  const strokeColor = !isFocused ? "#203C87" : "#203C87";

  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 24 24" fill={fillColor}>
        <Path
          d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21"
          stroke="#203C87"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
          stroke="#203C87"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Settings;
