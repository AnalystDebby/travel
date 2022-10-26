export const Nav = () => (
  <div className="nav">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#FFFFFF"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="#FFFFFF"
        stroke-miterlimit="10"
        stroke-width="16"
      ></circle>
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        stroke="#FFFFFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></line>
      <ellipse
        cx="128"
        cy="128"
        rx="40"
        ry="93.4"
        fill="none"
        stroke="#ffffff"
        stroke-miterlimit="10"
        stroke-width="16"
      ></ellipse>
    </svg>
    <p className="nav-text">my travel journal.</p>
  </div>
);
