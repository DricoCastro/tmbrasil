import ImagesCarousel from "./components/carousel";
import {
  FifthScreenHolder,
  FifthScreenSubTitle,
  FifthScreenTitle,
} from "./styles";

export const FifthScreen = () => {
  return (
    <FifthScreenHolder>
      <FifthScreenTitle>
        Clube certo, descontos e benefícios para todo mundo aproveitar
      </FifthScreenTitle>
      <FifthScreenSubTitle>
        Aqui você tem descontos em mais de 600 mil produtos e serviços
      </FifthScreenSubTitle>
      <ImagesCarousel />
    </FifthScreenHolder>
  );
};
