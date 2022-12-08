import { SVGProps } from "react";
import { IconsEnum } from "./enum/icons";
import UserIcon from "./Icons/user_icon";
import RightClub from "./Icons/right_club_icon";
import FacebookIcon from "./Icons/facebook_icon";
import HomeIcon from "./Icons/home_icon";
import InstagramIcon from "./Icons/instagram_icon";
import MenuIcon from "./Icons/menu_icon";
import BenefitsIcon from "./Icons/benefits_icon";
import TmBrasilIcon from "./Icons/tmbrasil_icon";
import WhatsappIcon from "./Icons/whatsapp_icon";
import { PrimaryIconContainer } from "./styles";
import BookIcon from "./Icons/book_icon";

interface IconFromEnum extends SVGProps<SVGSVGElement> {
  icon_enum: IconsEnum;
}
const IconFromEnum = (props: IconFromEnum) => {
  switch (props.icon_enum) {
    case IconsEnum.FACEBOOK_ICON:
      return <FacebookIcon {...props} />;

    case IconsEnum.INSTAGRAM_ICON:
      return <InstagramIcon {...props} />;

    case IconsEnum.WHATSAPP_ICON:
      return <WhatsappIcon {...props} />;

    case IconsEnum.MENU_ICON:
      return <MenuIcon {...props} />;

    case IconsEnum.HOME_ICON:
      return <HomeIcon {...props} />;

    case IconsEnum.USER_ICON:
      return <UserIcon {...props} />;

    case IconsEnum.RIGHT_CLUB_ICON:
      return <RightClub {...props} />;

    case IconsEnum.TMBRASIL_ICON:
      return <TmBrasilIcon {...props} />;

    case IconsEnum.BENEFITS_ICON:
      return <BenefitsIcon {...props} />;

    case IconsEnum.BOOK_ICON:
      return <BookIcon {...props} />;
  }
};

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconsEnum;
  size?: string;
  alt?: string;
}
export const PrimaryIcon = (props: IconProps) => {
  const iconSize = props.size ?? "clamp(0.45rem, 1.15vw, 1.38rem)";

  return (
    <PrimaryIconContainer size={iconSize}>
      <IconFromEnum icon_enum={props.icon} {...props} />
    </PrimaryIconContainer>
  );
};
