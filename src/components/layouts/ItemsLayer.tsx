import split from "just-split";
import range from "just-range";
import { ItemsRow } from "./ItemsRow";

export type ItemsLayerProps = {
  textFrame: HTMLImageElement;
  items: Array<string>;
  row: number;
  col: number;
  width: number;
  height: number;
};

export const ItemsLayer: React.FC<ItemsLayerProps> = (props) => {
  const { textFrame, items, row, col, width, height } = props;
  const rowHeight = height / row;

  const itemsWithPadding = range(0, row * col).map((index) => {
    return items[index] || "";
  });

  const splited = split(itemsWithPadding, 4);

  return (
    <>
      {splited.map((items, index) => {
        const y = rowHeight * index;

        return (
          <ItemsRow
            key={index}
            image={textFrame}
            items={items}
            y={y}
            width={width}
            height={rowHeight}
          />
        );
      })}
    </>
  );
};
