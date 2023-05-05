import { memo } from "react";

interface IconType {
  src: string;
}

const Icon = memo(({ src }: IconType) => {
  return <img alt="" src={`../../../assets/icons/${src}.svg`} />;
});

export default Icon;
