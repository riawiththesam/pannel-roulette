import { Layer, Stage, Image } from "react-konva";
import { RouletteData } from "../../App";
import { ItemsLayer } from "./ItemsLayer";
import { ItemType } from "./ItemsRow";

export type RouletteState = {
  lightingList: Array<number>;
};

export type Props = {
  rouletteData: RouletteData;
  state: RouletteState;
};

export const RouletteCanvas: React.FC<Props> = (props) => {
  const { itemList, backgroundImage, row, col } = props.rouletteData;
  const { lightingList } = props.state;

  const itemWithStateList = itemList.map<ItemType>((item, index) => {
    const lighting = lightingList.some((l) => l === index);

    return {
      text: item,
      lighting: lighting,
    };
  });

  const width = 960;
  const height = 540;

  const textFrame = new window.Image();
  textFrame.src = "http://localhost:5173/text-frame.jpg";

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Image image={backgroundImage} width={width} height={height} />
      </Layer>
      <Layer>
        <ItemsLayer
          textFrame={textFrame}
          items={itemWithStateList}
          row={row}
          col={col}
          width={width}
          height={height}
        />
      </Layer>
    </Stage>
  );
};
