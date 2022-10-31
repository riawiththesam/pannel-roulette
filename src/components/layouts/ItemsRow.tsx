import { Group } from "react-konva";
import { ItemType, RouletteItem } from "./RouletteItem";

export type ItemsRowProps = {
  image: HTMLImageElement;
  items: Array<ItemType>;
  y: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
};

export const ItemsRow: React.FC<ItemsRowProps> = (props) => {
  const { image, items, y, width, height, centerX, centerY } = props;
  const itemWidth = width / items.length;

  return (
    <Group>
      {items.map((item, index) => {
        const x = index * itemWidth;

        return (
          <RouletteItem
            key={index}
            image={image}
            item={item}
            x={x}
            y={y}
            itemWidth={itemWidth}
            itemHeight={height}
            centerX={centerX}
            centerY={centerY}
          />
        );
      })}
    </Group>
  );
};
