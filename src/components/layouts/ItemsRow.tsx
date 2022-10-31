import { Group } from "react-konva";
import { ItemType, RouletteItem } from "./RouletteItem";

export type ItemsRowProps = {
  image: HTMLImageElement;
  items: Array<ItemType>;
  y: number;
  width: number;
  height: number;
};

export const ItemsRow: React.FC<ItemsRowProps> = (props) => {
  const { image, items, y, width, height } = props;
  const itemWidth = width / items.length;

  return (
    <Group y={y}>
      {items.map((item, index) => {
        const x = index * itemWidth;

        return (
          <RouletteItem
            key={index}
            image={image}
            item={item}
            x={x}
            itemWidth={itemWidth}
            itemHeight={height}
          />
        );
      })}
    </Group>
  );
};
