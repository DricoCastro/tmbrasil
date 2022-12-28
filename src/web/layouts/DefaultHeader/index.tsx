import Image from "next/image";
import { PrimaryIcon } from "../../components/PrimaryIcon";
import { IconsEnum } from "../../components/PrimaryIcon/enum/icons";
import { COLORS } from "../../../../utils/colors";
import { useState } from "react";
import { Divider, IconButton, Menu } from "@mui/material";
import {
  HeaderContainer,
  HolderLogoHeader,
  HolderMenuIcon,
  HolderTitleIcon,
  HolderTitlesHeader,
  HomeHeaderHolder,
  MenuItemStyledComponent,
  TitleHeaderMoney,
  TitleMenuDrawer,
  TitlesHeader,
} from "./styles";
import { useRouter } from "next/router";

const logo = require("../../../../public/images/logo-tm-brasil.jpeg");

export const DefaultHeader = () => {
  const [drawer, setDrawer] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const openDrawer = drawer !== null;

  const handleClose = () => {
    setDrawer(null);
  };

  function openUserMenu(event: React.MouseEvent<HTMLElement>) {
    setDrawer(event.currentTarget);
  }

  function onTapHomePage() {
    router.push("/");
  }

  function onTapPdfPage() {
    window.open(
      "https://drive.google.com/file/d/1Cfhz0XXINzNMHDjgznJpn5uewp9cT1lx/view?usp=sharing"
    );
  }

  function onTapCluberCerto() {
    window.open("https://clubecerto.com.br/");
  }
  function onTapUser() {
    window.open("https://orion.hinova.com.br/sga/sgav4_tm_brasil/v5/login.php");
  }

  return (
    <HomeHeaderHolder>
      <HeaderContainer>
        <HolderLogoHeader>
          <Image
            onClick={onTapHomePage}
            style={{ cursor: "pointer" }}
            src={logo}
            alt="logoHeader"
            width={140}
            height={60}
          />
        </HolderLogoHeader>
        <HolderTitlesHeader>
          <HolderTitleIcon onClick={onTapHomePage}>
            <PrimaryIcon
              size={"16px"}
              icon={IconsEnum.HOME_ICON}
              fill={COLORS.scooter}
            />
            <TitlesHeader>HOME</TitlesHeader>
          </HolderTitleIcon>

          <HolderTitleIcon onClick={onTapPdfPage}>
            <PrimaryIcon
              size={"16px"}
              icon={IconsEnum.BOOK_ICON}
              fill={COLORS.scooter}
            />
            <TitlesHeader>Regulamento</TitlesHeader>
          </HolderTitleIcon>

          <HolderTitleIcon onClick={() => {}}>
            <PrimaryIcon
              size={"20px"}
              icon={IconsEnum.TMBRASIL_ICON}
              fill={COLORS.scooter}
            />
            <TitlesHeader>TM BRASIL</TitlesHeader>
          </HolderTitleIcon>

          <HolderTitleIcon onClick={() => {}}>
            <PrimaryIcon
              size={"16px"}
              icon={IconsEnum.BENEFITS_ICON}
              fill={COLORS.scooter}
            />
            <TitlesHeader>Benefícios</TitlesHeader>
          </HolderTitleIcon>

          <HolderTitleIcon onClick={onTapCluberCerto}>
            <PrimaryIcon
              size={"16px"}
              icon={IconsEnum.RIGHT_CLUB_ICON}
              stroke={COLORS.scooter}
              fill={COLORS.scooter}
            />
            <TitleHeaderMoney>Clube Certo</TitleHeaderMoney>
          </HolderTitleIcon>

          <HolderTitleIcon onClick={onTapUser}>
            <PrimaryIcon
              size={"16px"}
              icon={IconsEnum.USER_ICON}
              fill={COLORS.scooter}
            />
            <TitlesHeader>Associado</TitlesHeader>
          </HolderTitleIcon>
        </HolderTitlesHeader>
        <HolderMenuIcon>
          <IconButton
            onClick={openUserMenu}
            size="small"
            sx={{ ml: 0 }}
            aria-controls={openDrawer ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openDrawer ? "true" : undefined}
          >
            <PrimaryIcon
              size={"25px"}
              icon={IconsEnum.MENU_ICON}
              fill={COLORS.scooter}
            />
          </IconButton>
        </HolderMenuIcon>
        <Menu
          anchorEl={drawer}
          id="account-menu"
          open={openDrawer}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 6px var(--parsley))",
              borderRadius: "10px",
              width: "230px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 1.5,
              "@media (min-width: 1250px)": {
                display: "none",
              },
              "&:before": {
                // eslint-disable-next-line quotes
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 10,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div>
            <MenuItemStyledComponent onClick={onTapHomePage}>
              <PrimaryIcon
                size={"18px"}
                icon={IconsEnum.HOME_ICON}
                fill={COLORS.scooter}
              />
              <TitleMenuDrawer>Home</TitleMenuDrawer>
            </MenuItemStyledComponent>
            <Divider style={{ width: "230px" }} />
            <MenuItemStyledComponent onClick={() => {}}>
              <PrimaryIcon
                size={"18px"}
                icon={IconsEnum.BOOK_ICON}
                fill={COLORS.scooter}
              />
              <TitleMenuDrawer>Regulamento</TitleMenuDrawer>
            </MenuItemStyledComponent>

            <Divider />

            <MenuItemStyledComponent onClick={() => {}}>
              <PrimaryIcon
                size={"18px"}
                icon={IconsEnum.TMBRASIL_ICON}
                fill={COLORS.scooter}
              />
              <TitleMenuDrawer>TM Brasil</TitleMenuDrawer>
            </MenuItemStyledComponent>

            <Divider />

            <MenuItemStyledComponent onClick={() => {}}>
              <PrimaryIcon
                size={"18px"}
                icon={IconsEnum.BENEFITS_ICON}
                fill={COLORS.scooter}
              />
              <TitleMenuDrawer>Benefícios</TitleMenuDrawer>
            </MenuItemStyledComponent>

            <Divider />

            <MenuItemStyledComponent onClick={onTapCluberCerto}>
              <PrimaryIcon
                size={"18px"}
                icon={IconsEnum.RIGHT_CLUB_ICON}
                fill={COLORS.scooter}
              />
              <TitleMenuDrawer>Clube Certo</TitleMenuDrawer>
            </MenuItemStyledComponent>

            <Divider />

            <MenuItemStyledComponent onClick={onTapUser}>
              <PrimaryIcon
                size={"18px"}
                icon={IconsEnum.USER_ICON}
                fill={COLORS.scooter}
              />
              <TitleMenuDrawer>Associado</TitleMenuDrawer>
            </MenuItemStyledComponent>
          </div>
        </Menu>
      </HeaderContainer>
    </HomeHeaderHolder>
  );
};
