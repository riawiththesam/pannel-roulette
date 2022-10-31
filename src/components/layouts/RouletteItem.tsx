import Konva from "konva";
import { Image, Group, Text } from "react-konva";
import { useRef } from "react";

export type ItemType = {
  text: string;
  lighting: boolean;
  stopped: boolean;
};

export type RouletteItemProps = {
  image: HTMLImageElement;
  item: ItemType;
  x: number;
  y: number;
  itemWidth: number;
  itemHeight: number;
  centerX: number;
  centerY: number;
};

export const RouletteItem: React.FC<RouletteItemProps> = (props) => {
  const groupRef = useRef<Konva.Group>(null);
  const current = groupRef.current;

  if (props.item.lighting && props.item.stopped) {
    current?.to({
      x: props.centerX,
      y: props.centerY,
      scaleX: 2,
      scaleY: 2,
      duration: 0.2,
    });
  } else {
    current?.to({
      x: props.x + props.itemWidth / 2,
      y: props.y + props.itemHeight / 2,
      scaleX: 1,
      scaleY: 1,
      duration: 0.01,
    });
  }

  return (
    <Group
      x={props.x + props.itemWidth / 2}
      offsetX={props.itemWidth / 2}
      y={props.y + props.itemHeight / 2}
      offsetY={props.itemHeight / 2}
      ref={groupRef}
      visible={props.item.lighting}
    >
      <Image
        image={props.image}
        width={props.itemWidth}
        height={props.itemHeight}
      />
      <Text
        text={props.item.text}
        width={props.itemWidth}
        height={props.itemHeight}
        fill="black"
        align="center"
        verticalAlign="middle"
        fontSize={40}
        fontFamily="Roboto"
      />
    </Group>
  );
};
