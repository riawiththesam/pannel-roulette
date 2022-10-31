import { Layer, Stage, Image } from "react-konva";
import { RouletteData } from "../../App";
import { ItemsLayer } from "./ItemsLayer";

type Props = {
  rouletteData: RouletteData;
};

export const RouletteCanvas: React.FC<Props> = (props) => {
  const { itemList, backgroundImage, row, col } = props.rouletteData;
  const imageElement = new window.Image();
  if (backgroundImage != null) {
    imageElement.src = window.URL.createObjectURL(backgroundImage);
  }

  const width = 960;
  const height = 540;

  const textFrame = new window.Image();
  textFrame.src = "http://localhost:5173/text-frame.jpg";

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Image image={imageElement} width={width} height={height} />
      </Layer>
      <Layer>
        <ItemsLayer
          textFrame={textFrame}
          items={itemList}
          row={row}
          col={col}
          width={width}
          height={height}
        />
      </Layer>
    </Stage>
  );
};
