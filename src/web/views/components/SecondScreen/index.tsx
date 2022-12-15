import { PrimaryButton } from "../../../components/PrimaryButton";
import Image from "next/image";
import {
  SecondScreenHolder,
  TextTitle,
  FirstParagraph,
  SecondParagraph,
  BenefictsList,
  HolderTexts,
  HolderRightSide,
  HolderLeftSide,
  BenefictsListItems,
} from "./styles";
import { useRouter } from "next/router";

const imgSecondScreen = require("../../../../../public/images/second-screen-img.jpeg");

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
          <TextTitle>Porque a TM Brasil ?</TextTitle>
          <FirstParagraph>
            A TM Brasil já nasceu de maneira sólida, com o propósito de cuidar
            dos veículos dos seus clientes, garantindo assim tranquilidade a
            todos os associados, atendendo suas solicitações de maneira ágil e
            transparente.
          </FirstParagraph>
          <SecondParagraph>
            Somos uma associação pensada para ser diferente. Mudamos o conceito
            de clube de benefícios e proteção veicular,nosso intuito é oferecer
            aos assciados TM Brasil um Atendimento e toda assistencia através de
            uma cobertura 24 horas por dia, 7 dias por semana em todo o
            territorio nacional, não importa onde você esteja. Temos uma equipe
            preparada para te atneder e resolver tudo de forma fácil e rapida,
            visando a solução de problemas e a minimização dos riscos,
            garantindo um ATENDIMENTO de qualidade,personalizado e diferenciado
            quando você mais precisa. Aqui prezamos sempre por :
          </SecondParagraph>
          <BenefictsList>
            <BenefictsListItems>Comportamento Ético</BenefictsListItems>
            <BenefictsListItems>
              Defesa dos Interesses dos Associados
            </BenefictsListItems>
            <BenefictsListItems>
              Atitudes Criativas e Inovadoras
            </BenefictsListItems>
            <BenefictsListItems>Comunicação Eficiente</BenefictsListItems>
          </BenefictsList>
        </HolderTexts>
        <PrimaryButton text="Faça uma cotação agora!" onClick={wppText} />
      </HolderRightSide>
    </SecondScreenHolder>
  );
};
