import { FifthScreen } from "../components/FifthScreen";
import { FirstScreen } from "../components/FirstScreen";
import { FourthScreen } from "../components/FourthScreen";
import { SecondScreen } from "../components/SecondScreen";
import { ThirdScreen } from "../components/ThirdScreen";
import { HomeHolder } from "./styles";

export const HomePage = () => {
  return (
    <HomeHolder>
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <FifthScreen />
    </HomeHolder>
  );
};
