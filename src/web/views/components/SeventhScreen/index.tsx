import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoData from "./components/carousel/data";
import styles from "./StylesArrow.module.css";
import clsx from "clsx";
import {
  HolderCarousel,
  PageHolder,
  HolderCard,
} from "./components/carousel/styles";
import Image from "next/image";

export default function ImagesCarousel() {
  const logoCarousel = logoData.map((logo, i) => (
    <HolderCard key={i}>
      <Image width={150} height={100} src={logo.image} alt="logo" />
    </HolderCard>
  ));

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    const thisClassName = clsx(className, styles.arrows);
    return <div className={thisClassName} style={style} onClick={onClick} />;
  }

  function PreviousArrow(props: any) {
    const { className, style, onClick } = props;
    const thisClassName = clsx(className, styles.arrows);
    return <div className={thisClassName} style={style} onClick={onClick} />;
  }

  function Carousel() {
    const configCarousel = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 2500,
      cssEase: "linear",
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PreviousArrow />,
      responsive: [
        {
          breakpoint: 650,
          settings: {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 2500,
            autoplaySpeed: 2500,
            cssEase: "linear",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 499,
          settings: {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 2500,
            autoplaySpeed: 2500,
            cssEase: "linear",
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <HolderCarousel>
        <Slider {...configCarousel}>{logoCarousel}</Slider>
      </HolderCarousel>
    );
  }

  return (
    <PageHolder>
      <Carousel />
    </PageHolder>
  );
}
