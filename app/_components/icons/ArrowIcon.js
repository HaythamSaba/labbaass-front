import React from "react"; 

const ArrowIcon = ({ direction = "up", className = "" }) => {
  // Determine the Tailwind CSS class for rotation based on the direction prop
  const rotationClasses = {
    up: "rotate-0",
    right: "rotate-90",
    down: "rotate-180",
    left: "-rotate-90",
  };

  return (
    <svg
      className={`${rotationClasses[direction]} ${className}`}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.2946 15.5003C16.9053 15.8896 16.2743 15.8899 15.8846 15.5011L12.7063 12.3297C12.316 11.9402 11.684 11.9402 11.2937 12.3297L8.11538 15.5011C7.72569 15.8899 7.09466 15.8896 6.70538 15.5003C6.31581 15.1107 6.31581 14.4791 6.70538 14.0895L11.2929 9.50203C11.6834 9.1115 12.3166 9.1115 12.7071 9.50203L17.2946 14.0895C17.6842 14.4791 17.6842 15.1107 17.2946 15.5003Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowIcon;
