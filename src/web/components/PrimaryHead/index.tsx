import HeadNext from "next/head";

interface PrimaryHeadProps {
  title?: string;
  icon?: string;
  aditional?: any;
}

export const PrimaryHead = ({ aditional, title, icon }: PrimaryHeadProps) => {
  const localTitle = title ? `${title} | TM Brasil` : " TM Brasil";
  const localIcon = icon ?? "/favicon.ico";

  return (
    <HeadNext>
      <title>{localTitle}</title>
      <meta name="Description" content="TmBrasil" />
      <meta name="keywords" content="TM Brasil" />
      <link rel="icon" href={localIcon} />
      {aditional}
    </HeadNext>
  );
};
