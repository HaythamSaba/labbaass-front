function EmailIcon({ iconColor }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.3057 6.5C22.3057 5.4 21.4057 4.5 20.3057 4.5H4.30566C3.20566 4.5 2.30566 5.4 2.30566 6.5V18.5C2.30566 19.6 3.20566 20.5 4.30566 20.5H20.3057C21.4057 20.5 22.3057 19.6 22.3057 18.5V6.5ZM20.3057 6.5L12.3057 11.49L4.30566 6.5H20.3057ZM20.3057 18.5H4.30566V8.5L12.3057 13.5L20.3057 8.5V18.5Z"
        fill={iconColor || "#414141"}
      />
    </svg>
  );
}

export default EmailIcon;
