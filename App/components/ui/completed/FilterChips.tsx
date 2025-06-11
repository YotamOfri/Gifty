import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { Check } from "lucide-react-native";
import { Department } from "@/types/api/departments.types";
import i18n from "@/i18n";

// Define a color palette you like
const colorPalette = [
  "#2563eb", // blue
  "#16a34a", // green
  "#d97706", // amber
  "#dc2626", // red
  "#9333ea", // purple
  "#0d9488", // teal
  "#f43f5e", // pink
  "#7c3aed", // violet
  "#ca8a04", // yellow
  "#0891b2", // cyan
];

interface DepartmentChipsProps {
  departments: Department[];
  selectedDepartment: Department | null;
  onSelect: (dept: Department | null) => void;
}

const DepartmentChips: React.FC<DepartmentChipsProps> = ({
  departments,
  selectedDepartment,
  onSelect,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 8,
        paddingHorizontal: 2,
      }}
    >
      {(departments || []).map((dept, index) => {
        const isSelected = selectedDepartment?.id === dept.id;
        const color = colorPalette[index % colorPalette.length];

        return (
          <TouchableOpacity
            key={dept.id}
            onPress={() => (isSelected ? onSelect(null) : onSelect(dept))}
            style={{
              backgroundColor: isSelected ? color : "white",
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderRadius: 16,
              marginRight: index === departments.length - 1 ? 0 : 12,
              shadowColor: isSelected ? color : "#000",
              shadowOpacity: isSelected ? 0.15 : 0.05,
              shadowOffset: { width: 0, height: isSelected ? 4 : 2 },
              shadowRadius: isSelected ? 6 : 3,
              elevation: isSelected ? 4 : 1,
              borderWidth: isSelected ? 0 : 1.2,
              borderColor: isSelected ? "transparent" : "#E5E7EB",
              minWidth: 120,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            activeOpacity={0.85}
          >
            {/* Department Name */}
            <Text
              style={{
                color: isSelected ? "#fff" : "#334155",
                fontWeight: "700",
                fontSize: 14,
              }}
            >
              {dept.name[i18n.language as "he" | "en" | "ar"]}
            </Text>

            {/* Count badge (optional) */}
            <View
              style={{
                marginLeft: 8,
                backgroundColor: isSelected
                  ? "rgba(255,255,255,0.3)"
                  : "#f1f5f9",
                paddingHorizontal: 6,
                paddingVertical: 2,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: isSelected ? "#fff" : "#475569",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                {dept._count.OrganizationRole}
              </Text>
            </View>

            {/* Check icon if selected */}
            {isSelected && (
              <View
                style={{
                  marginLeft: 6,
                  backgroundColor: "rgba(255,255,255,0.3)",
                  padding: 2,
                  borderRadius: 999,
                }}
              >
                <Check size={12} color="#fff" />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default DepartmentChips;
