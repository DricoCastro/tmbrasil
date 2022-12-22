import { PrimaryButton } from "../../../components/PrimaryButton";
import Image from "next/image";
import {
  FourthScreenHolder,
  HolderCar,
  HolderLeftSide,
  HolderRightSide,
  HolderTexts,
  TextTitle,
} from "./styles";
import { useRouter } from "next/router";

const imgSixthScreen = require("../../../../../public/images/sixth-screen-img.jpeg");
const Car = require("../../../../../public/images/carTwo.png");

export const SixthScreen = () => {
  const brokeLine: string = "%0A";
  const router = useRouter();
  function wppText() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531994738807&text=😀 Olá,${brokeLine}Olá, vim pelo site e gostaria de solicitar um *Orçamento* para meu veículo.`
    );
  }
  return (
    <FourthScreenHolder>
      <HolderRightSide>
        <HolderTexts>
          <TextTitle>A proteção completa para seu veículo</TextTitle>
          <TextTitle>Solicite uma Cotação já</TextTitle>
        </HolderTexts>

        <PrimaryButton text="Fazer Simulação Grátis !" onClick={wppText} />
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
