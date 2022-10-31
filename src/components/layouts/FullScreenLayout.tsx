import { RouletteData } from "../../App";
import { RouletteCanvas, RouletteState } from "./RouletteCanvas";

export type FullScreenLayoutProps = {
  rouletteData: RouletteData;
  rouletteState: RouletteState;
  windowWidth: number;
  onClick: () => void;
};

export const FullScreenLayout: React.FC<FullScreenLayoutProps> = (props) => {
  const { rouletteData, rouletteState, windowWidth, onClick } = props;
  return (
    <RouletteCanvas
      rouletteData={rouletteData}
      state={rouletteState}
      windowWidth={windowWidth}
      onClick={onClick}
    />
  );
};
