import { Image, Group, Text } from "react-konva";

export type ItemsRowProps = {
  image: HTMLImageElement;
  items: Array<string>;
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
          <Group key={index} x={x}>
            <Image image={image} width={itemWidth} height={height} />
            <Text
              text={item}
              width={itemWidth}
              height={height}
              fill="black"
              align="center"
              verticalAlign="middle"
              fontSize={50}
              fontFamily="Roboto"
            />
          </Group>
        );
      })}
    </Group>
  );
};
