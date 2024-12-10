$(document).ready(function () {
  const rightArrow2024 = `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
      <g data-name="Componente 12 – 9" transform="translate(.5 .5)">
          <circle cx="16" cy="16" r="16" style="fill:#fff;stroke:#fff"/>
          <path data-name="Form 1 Kopie" d="m904.377 1264.108-5.191 5.229a.994.994 0 0 0 0 1.4.976.976 0 0 0 1.387 0l5.885-5.928a.993.993 0 0 0 0-1.4l-5.885-5.928a.976.976 0 0 0-1.387 0 .993.993 0 0 0 0 1.4z" transform="translate(-886.822 -1248.108)" style="fill:#21a605"/>
      </g>
  </svg>
  `;

  const leftArrow2024 = `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
      <g data-name="Componente 12 – 12" transform="rotate(180 16.25 16.25)">
          <circle cx="16" cy="16" r="16" style="fill:#fff;stroke:#fff"/>
          <path data-name="Form 1 Kopie" d="m904.377 1264.108-5.191 5.229a.994.994 0 0 0 0 1.4.976.976 0 0 0 1.387 0l5.885-5.928a.993.993 0 0 0 0-1.4l-5.885-5.928a.976.976 0 0 0-1.387 0 .993.993 0 0 0 0 1.4z" transform="translate(-886.822 -1248.108)" style="fill:#21a605"/>
      </g>
  </svg>
  `;

  $(".terminal-carousel").slick({
    slidesToShow: 3,
    prevArrow: `<button class="custom-arrow-2024 custom-left-arrow-2024">${leftArrow2024}</button>`,
    nextArrow: `<button class="custom-arrow-2024 custom-right-arrow-2024">${rightArrow2024}</button>`,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $(".card-ocensa-carousel").slick({
    slidesToShow: 1,
    dots: true,
    arrows: false
  });
});
