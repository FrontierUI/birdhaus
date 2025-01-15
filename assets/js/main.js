// Navbar

var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

//
// Number Counter

$('.count').each(function () {
  $(this)
    .prop('Counter', 0)
    .animate(
      { Counter: $(this).text() },
      {
        duration: 2500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
          $(this).text(
            $(this)
              .text()
              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
          );
        },
      }
    );
});

$('.bhPortfolio').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});

$('.bhBlogs').slick({
  autoplay: true,
  arrows: false,
  autoplaySpeed: 0,
  speed: 8000,
  swipe: false,
  slidesToShow: 3,
  cssEase: 'linear',
  pauseOnFocus: false,
  pauseOnHover: false,
  ltr: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
    },
    {
      breakpoint: 575,
      settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
    },
  ],
});

//

// let device_width = window.innerWidth;

// if (device_width > 576) {
//   const blogImgItem = document.querySelectorAll('.serviceThumbnail');

//   function followImageCursor(event, blogImgItem) {
//     const contentBox = blogImgItem.getBoundingClientRect();
//     const dx = event.clientX - contentBox.x;
//     const dy = event.clientY - contentBox.y;
//     blogImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px)`;
//   }
//   blogImgItem.forEach((item, i) => {
//     item.addEventListener('mousemove', (event) => {
//       setInterval(followImageCursor(event, item), 1000);
//     });
//   });
// }
