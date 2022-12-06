import { PrimaryButtonContainer, PrimaryButtonText } from "./styles";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

export const PrimaryButton = ({ text, onClick }: PrimaryButtonProps) => {
  return (
    <PrimaryButtonContainer onClick={onClick}>
      <PrimaryButtonText>{text}</PrimaryButtonText>
    </PrimaryButtonContainer>
  );
};
