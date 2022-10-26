export const Main = ({
  title,
  alt,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) => (
  <div className="main">
    <img src={imageUrl} alt={alt} className="main-img" />

    <div className="main-card">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10px"
          height="9.55px"
          fill="#f55a5a"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <circle
            cx="128"
            cy="104"
            r="32"
            fill="none"
            stroke="#f55a5a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></circle>
          <path
            d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z"
            fill="none"
            stroke="#f55a5a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
        </svg>
        <span className="main-country">{location}</span>
        <span href={googleMapsUrl} className="main-map">
          View on Google Maps
        </span>
      </p>
      <h2 className="main-title">{title}</h2>
      <p className="main-date">
        {startDate} - {endDate}
      </p>
      <p className="main-description">{description}</p>
    </div>
  </div>
);

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg
