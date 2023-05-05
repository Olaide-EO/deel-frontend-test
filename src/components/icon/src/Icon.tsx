type IconType = {
  src: string;
};

const Icon = ({ src }: IconType) => {
  return <img alt="" src={`../../../assets/icons/${src}.svg`} />;
};

export default Icon;
