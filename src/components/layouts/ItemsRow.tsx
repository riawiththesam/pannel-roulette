import { Image, Group, Text } from "react-konva";

export type ItemType = {
  text: string;
  lighting: boolean;
};

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
          <Group key={index} x={x} visible={item.lighting}>
            <Image image={image} width={itemWidth} height={height} />
            <Text
              text={item.text}
              width={itemWidth}
              height={height}
              fill="black"
              align="center"
              verticalAlign="middle"
              fontSize={40}
              fontFamily="Roboto"
            />
          </Group>
        );
      })}
    </Group>
  );
};
