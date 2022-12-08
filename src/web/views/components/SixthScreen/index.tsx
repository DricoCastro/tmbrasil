import { PrimaryButton } from "../../../components/PrimaryButton";
import Image from "next/image";
import {
  FourthScreenHolder,
  HolderLeftSide,
  HolderRightSide,
  HolderTexts,
  TextTitle,
} from "./styles";

const imgSixthScreen = require("../../../../../public/images/sixth-screen-img.jpeg");

export const SixthScreen = () => {
  return (
    <FourthScreenHolder>
      <HolderRightSide>
        <HolderTexts>
          <TextTitle>A proteção completa para seu veículo</TextTitle>
          <TextTitle>Solicite uma Cotação já</TextTitle>
        </HolderTexts>
        <PrimaryButton text="Fazer Simulação Grátis !" onClick={() => {}} />
      </HolderRightSide>
      <HolderLeftSide>
        <Image
          src={imgSixthScreen}
          alt="imgSecondScreen"
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "80%",
          }}
        />
      </HolderLeftSide>
    </FourthScreenHolder>
  );
};
