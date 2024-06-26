
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ImageSlider = () => {
  const options = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <img src="path/to/image1.jpg" alt="Image 1" />
      </div>
      <div className="item">
        <img src="path/to/image2.jpg" alt="Image 2" />
      </div>
    </OwlCarousel>
  );
};

export default ImageSlider;
