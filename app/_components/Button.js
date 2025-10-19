"use client";
import React from "react";

export default function Button({
  text,
  Icon, // React component for the icon
  iconPosition = "left", // 'left' or 'right'
  iconProps = {},
  size = "medium", // 'small' | 'medium' | 'large'
  variant = "primary", // 'primary' | 'secondary' | 'danger' | 'outline' | 'noBorder' | 'white' | 'whiteWithBorder'
  fontWeight = "font-normal", // Tailwind font weight
  fullWidth = false, // true for w-full
  disabled = false, // true for disabled state
  rounded = false, // true for rounded
  className = "", // extra Tailwind classes
  ...props
}) {
  // Size classes based on size prop
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Check if a custom text color is passed via className
  const hasCustomTextColor = className
    .split(" ")
    .some((c) => c.startsWith("text-"));

  // Variant classes based on variant prop
  const variantClasses = {
    secondary: "bg-accent-500 text-white hover:bg-accent-600",
    primary: "bg-primary-700 text-white hover:bg-primary-500",
    danger: "bg-red-600 text-white hover:bg-red-700",
    white: "bg-white text-primary-600 hover:bg-gray-100",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-[#ddd4ff]",
    // Only apply the default text color if no custom color is passed
    noBorder: `bg-transparent ${hasCustomTextColor ? "" : "text-accent-400"}`,
    whiteWithBorder:
      "bg-white text-primary-600 hover:bg-gray-100 border border-primary-600",
    blueBackground: "bg-blue-500 text-white hover:bg-blue-600",
    blueOutline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
  };

  const baseClasses = `
    flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fontWeight}
    ${fullWidth ? "w-full" : "w-auto"}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${rounded ? "rounded-lg" : ""}
    ${className}
  `;

  return (
    <button
      type="button"
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="w-5 h-5" {...iconProps} />
      )}
      {text}
      {Icon && iconPosition === "right" && (
        <Icon className="w-5 h-5" {...iconProps} />
      )}
    </button>
  );
}
