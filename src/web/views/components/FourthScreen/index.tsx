import { Divider } from "@mui/material";
import Image from "next/image";
import { COLORS } from "../../../../../utils/colors";
import {
  Card,
  CardDescription,
  FourthScreenHolder,
  HolderCards,
  HolderLeftSide,
  HolderRightSide,
  HolderTop,
  Title,
} from "./styles";

const imgFourthScreen = require("../../../../../public/images/fourth-screen-img.jpeg");
const userIcon = require("../../../../../public/icons/user-icon.svg");
const carIcon = require("../../../../../public/icons/cars-icon.svg");
const cardNameIcon = require("../../../../../public/icons/address-card-icon.svg");
const searchCarIcon = require("../../../../../public/icons/car-inspection-icon.svg");
const justiceIcon = require("../../../../../public/icons/scale-icon.svg");

export const FourthScreen = () => {
  return (
    <FourthScreenHolder>
      <HolderTop>
        <HolderLeftSide>
          <Title>
            A TM Brasil oferece a confiança que você precisa para seguir em
            frente
          </Title>
        </HolderLeftSide>
        <HolderRightSide>
          <Image
            src={imgFourthScreen}
            alt="imgFourthScreen"
            style={{ width: "100%", height: "40%" }}
          />
        </HolderRightSide>
      </HolderTop>
      <HolderCards>
        <Card>
          <Image width={50} src={userIcon} alt="userIcon" />
          <CardDescription>Sem análise de perfil</CardDescription>
        </Card>
        <Card>
          <Image width={110} src={carIcon} alt="carIcon" />
          <CardDescription>Carro reserva</CardDescription>
        </Card>

        <Card>
          <Image width={80} src={cardNameIcon} alt="cardNameIcon" />
          <CardDescription>Sem consulta ao SPC </CardDescription>
        </Card>
        <Card>
          <Image width={70} src={searchCarIcon} alt="searchCarIcon" />
          <CardDescription>Rastreador para veículos</CardDescription>
        </Card>
        <Card>
          <Image width={60} src={justiceIcon} alt="searchCarIcon" />
          <CardDescription>Assistência jurídica</CardDescription>
        </Card>
      </HolderCards>
    </FourthScreenHolder>
  );
};
