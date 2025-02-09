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

$('.brandsLogoMarquee').slick({
  autoplay: true,
  arrows: false,
  autoplaySpeed: 0,
  speed: 8000,
  swipe: false,
  slidesToShow: 4,
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
      settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
    },
  ],
});

$('.servicesSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
    },
    { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});

// Services //

// var btn = document.querySelectorAll('a.modal-services');
// var modals = document.querySelectorAll('.modal');
// var spans = document.getElementsByClassName('close');

// for (var i = 0; i < btn.length; i++) {
//   btn[i].onclick = function (e) {
//     e.preventDefault();
//     modal = document.querySelector(e.target.getAttribute('href'));
//     modal.style.display = 'block';
//   };
// }

// for (var i = 0; i < spans.length; i++) {
//   spans[i].onclick = function () {
//     for (var index in modals) {
//       if (typeof modals[index].style !== 'undefined')
//         modals[index].style.display = 'none';
//     }
//   };
// }

// window.onclick = function (event) {
//   if (event.target.classList.contains('modal')) {
//     for (var index in modals) {
//       if (typeof modals[index].style !== 'undefined')
//         modals[index].style.display = 'none';
//     }
//   }
// };
