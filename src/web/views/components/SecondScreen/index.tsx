import { PrimaryButton } from "../../../components/PrimaryButton";
import Image from "next/image";
import {
  SecondScreenHolder,
  TextTitle,
  FirstParagraph,
  HolderTexts,
  HolderRightSide,
  HolderLeftSide,
} from "./styles";
import { useRouter } from "next/router";

const imgSecondScreen = require("../../../../../public/images/second-screen-img.jpeg");
const Car = require("../../../../../public/images/carOne.png");

export const SecondScreen = () => {
  const brokeLine: string = "%0A";
  const router = useRouter();
  function wppText() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531994738807&text=😀 Olá,${brokeLine}Olá, vim pelo site e gostaria de solicitar um *Orçamento* para meu veículo.`
    );
  }
  return (
    <SecondScreenHolder>
      <HolderLeftSide>
        <Image
          src={imgSecondScreen}
          alt="imgSecondScreen"
          style={{
            borderRadius: "10px",
            width: "90%",
            height: "80%",
            boxShadow:
              " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        />
      </HolderLeftSide>
      <HolderRightSide>
        <HolderTexts>
          <TextTitle>Por que a TM Brasil ?</TextTitle>
          <FirstParagraph>
            A TM Brasil já nasceu de maneira sólida, com o propósito de cuidar
            de todos os veículos e frotas de nossos associados, garantindo assim
            tranquilidade, atendendo suas solicitações de forma eficaz. Somos
            uma associação fundada para ser diferente! O nosso intuito é
            oferecer aos associados TM Brasil uma garantia de excelência no
            atendimento. Disponibilizamos a nossa assistência através de uma
            cobertura 24h por dia, 7 dias por semana, em todo o território
            nacional! Temos uma equipe preparada para lhe atender e resolver de
            forma precisa, visando a solução dos problemas, garantindo um
            atendimento de qualidade, personalizado e diferenciado quando você
            mais precisa!
          </FirstParagraph>
        </HolderTexts>
        <Image
          src={Car}
          alt="imgSecondScreen"
          width={300}
          style={{
            marginBottom: "30px",
            marginTop: "30px",
          }}
        />
        <PrimaryButton text="Faça uma cotação agora!" onClick={wppText} />
      </HolderRightSide>
    </SecondScreenHolder>
  );
};
