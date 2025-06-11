import * as React from "react";
import {
  TextInput,
  View,
  Text,
  I18nManager,
  type TextInputProps,
} from "react-native";
import { cn } from "@/lib/utils";

interface RNInputProps extends TextInputProps {
  icon?: React.ReactNode;
  iconEnd?: React.ReactNode;
  label?: string | React.ReactNode;
  className?: string;
  placeholderClassName?: string;
}

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  RNInputProps
>(
  (
    {
      className,
      placeholderClassName,
      icon,
      iconEnd,
      label,
      placeholder,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const isRTL = true;
    const [isFocused, setIsFocused] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(
      value || defaultValue || ""
    );

    // Handle controlled/uncontrolled input
    const currentValue = value !== undefined ? value : inputValue;
    const hasValue = currentValue && currentValue.length > 0;

    const handleChangeText = (text: string) => {
      if (value === undefined) {
        setInputValue(text);
      }
      props.onChangeText?.(text);
    };

    return (
      <View className={cn("w-full", className)}>
        {label && (
          <Text
            className={cn(
              "mb-1 px-1 text-base text-primary-foreground font-medium",
              isRTL ? "text-right" : "text-left"
            )}
          >
            {label}
          </Text>
        )}
        <View className="relative">
          {icon && (
            <View
              className={cn(
                "absolute top-0 z-20 h-12 justify-center",
                isRTL ? "right-3" : "left-3"
              )}
            >
              {icon}
            </View>
          )}
          {iconEnd && (
            <View
              className={cn(
                "absolute top-0 z-20 h-12 justify-center",
                isRTL ? "left-3" : "right-3"
              )}
            >
              {iconEnd}
            </View>
          )}

          {/* Custom placeholder overlay for Android fix */}
          {!hasValue && placeholder && (
            <Text
              className={cn(
                "absolute top-0 left-3 text-base opacity-50 z-10 h-12 leading-12",
                icon && (isRTL ? "right-10" : "left-10"),
                iconEnd && (isRTL ? "left-10" : "right-10"),
                isRTL && "right-3 left-auto text-right",
                placeholderClassName
              )}
              style={{ lineHeight: 48 }} // 48px = h-12 (12 * 4px)
              pointerEvents="none"
            >
              {placeholder}
            </Text>
          )}

          <TextInput
            ref={ref}
            value={currentValue}
            onChangeText={handleChangeText}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            // Remove placeholder from TextInput to prevent Android issues
            placeholder=""
            placeholderTextColor="transparent"
            className={cn(
              "h-12 native:bg-light rounded-md border border-border bg-primary-light px-3 text-lg",
              "web:flex web:w-full web:py-2 lg:text-sm native:leading-[1.25]",
              "web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
              props.editable === false && "opacity-50 web:cursor-not-allowed",
              icon && (isRTL ? "pr-10" : "pl-10"),
              iconEnd && (isRTL ? "pl-10" : "pr-10"),
              isRTL && "text-right",
              className
            )}
            {...props}
          />
        </View>
      </View>
    );
  }
);

Input.displayName = "Input";

export { Input };
