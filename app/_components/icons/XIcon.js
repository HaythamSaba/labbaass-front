function XIcon({ onClick }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M8.23207 8.43439L11.7676 11.9699M8.23207 11.9699L11.7676 8.43439M18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 5.39759 5.39746 1.66663 9.99984 1.66663C14.6022 1.66663 18.3332 5.39759 18.3332 9.99996Z"
        stroke="#FF4D4D"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default XIcon;
