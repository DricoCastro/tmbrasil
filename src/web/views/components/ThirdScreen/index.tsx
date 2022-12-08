import Image from "next/image";
import {
  CardDescription,
  Card,
  HolderCards,
  HolderTexts,
  TextSubTitle,
  TextTitle,
  ThirdScreenHolder,
  CardTitle,
} from "./styles";

const theft = require("../../../../../public/images/roubo.svg");
const colision = require("../../../../../public/images/colisao.png");
const colisionThird = require("../../../../../public/images/dano.png");
const broken = require("../../../../../public/images/broken.png");

export const ThirdScreen = () => {
  return (
    <ThirdScreenHolder>
      <HolderTexts>
        <TextTitle>Proteção Veicular de verdade</TextTitle>
        <TextSubTitle>
          A TM Brasil é um clube associativo lider no mercado quando o assunto é
          protecao veicular
        </TextSubTitle>
      </HolderTexts>
      <HolderCards>
        <Card>
          <Image src={theft} alt={"carTheft"} height={100} width={100} />
          <CardTitle>Roubo e Furto</CardTitle>
          <CardDescription>
            Proteção contra roubo (assalto sobe ameaças por parte do ladrão) ou
            furto (o veículo é roubado sem uso de violência e longe da presença
            do dono), com indenização de 100% da tabela Fipe
          </CardDescription>
        </Card>

        <Card>
          <Image src={colision} alt={"carTheft"} height={100} width={100} />
          <CardTitle>Colisão</CardTitle>
          <CardDescription>
            Cobertura contra colisão di veículo envolvendo o associado e
            teceiros em território nacional. Uma cobertura completa para você e
            seu veículo ficarem protegidos
          </CardDescription>
        </Card>

        <Card>
          <Image
            src={colisionThird}
            alt={"carTheft"}
            height={100}
            width={100}
          />
          <CardTitle>Danos a Terceiros</CardTitle>
          <CardDescription>
            Proteção para danos materiais causados a veículos terceiros por
            culpa do associado. O ressarcimento é feito mediante a apresentação
            do Boletim de ocorrência
          </CardDescription>
        </Card>

        <Card>
          <Image src={broken} alt={"carTheft"} height={100} width={100} />
          <CardTitle>Perda Total</CardTitle>
          <CardDescription>
            Proteção em 100% sobre a tabela FIPE para eventos em que o veículo
            protegido não existe mais condições de reparo
            <br />
            <br />
          </CardDescription>
        </Card>
      </HolderCards>
    </ThirdScreenHolder>
  );
};
