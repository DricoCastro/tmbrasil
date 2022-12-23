import { PrimaryButton } from "../../../components/PrimaryButton";
import {
  BackgroundContainerSobBlur,
  Background,
  FirstScreenHolder,
  HolderLeftSide,
  HolderTexts,
  TextSubtitle,
  TextTitle,
  CallNumber,
} from "./styles";
import { useRouter } from "next/router";
export const FirstScreen = () => {
  const brokeLine: string = "%0A";
  const router = useRouter();

  function wppText() {
    router.push(
      `https://api.whatsapp.com/send?phone=5531994738807&text=😀 Olá,${brokeLine}Olá, vim pelo site e gostaria de solicitar um Orçamento para meu veículo.`
    );
  }
  return (
    <FirstScreenHolder>
      <Background>
        <BackgroundContainerSobBlur>
          <HolderLeftSide>
            <HolderTexts>
              <CallNumber>
                Nossa Assistência 24h:{" "}
                <a href="tel:08000420635">0800 042 0635</a>
              </CallNumber>
              <TextTitle>
                Pensou em Proteção Veicular? <br /> <br /> Fale com a{" "}
                <a href="">TM BRASIL CLUBE DE BENEFÍCIOS!</a>
              </TextTitle>
              <TextSubtitle>
                Se você busca tranquilidade de ter a cobertura do seu veículo ou
                de sua frota 24h por dia, atendimento de qualidade, praticidade
                no monitoramento dos seus veículos, e muito mais,{" "}
                <a>CONTE CONOSCO!</a>
              </TextSubtitle>
            </HolderTexts>
            <PrimaryButton text="Fazer Simulação" onClick={wppText} />
          </HolderLeftSide>
        </BackgroundContainerSobBlur>
      </Background>
    </FirstScreenHolder>
  );
};
