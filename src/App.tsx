import { useState } from "react";
import { Button, Container, Stack } from "@mui/material";
import { useTimer } from "use-timer";
import random from "just-random-integer";
import {
  ItemFormInput,
  OnSubmitDataHandler,
} from "./components/layouts/ItemFormInput";
import {
  RouletteCanvas,
  RouletteState,
} from "./components/layouts/RouletteCanvas";

export type RouletteData = {
  itemList: Array<string>;
  backgroundImage: HTMLImageElement | undefined;
  row: number;
  col: number;
};

export function App() {
  const [rouletteData, setRouletteData] = useState<RouletteData>({
    itemList: [],
    backgroundImage: undefined,
    row: 3,
    col: 4,
  });
  const [rouletteState, setRouletteState] = useState<RouletteState>({
    lightingList: [],
  });
  const { time, start, reset, status } = useTimer({
    interval: 100,
    onTimeUpdate: (time) => {
      const next = [random(0, 11), random(0, 11)];
      setRouletteState({ ...rouletteState, lightingList: next });
    },
  });

  const onSubmit: OnSubmitDataHandler = (data) => {
    setRouletteData(data);
  };

  const onClickStart = () => {
    start();
  };

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <RouletteCanvas rouletteData={rouletteData} state={rouletteState} />
          <Button color="primary" variant="contained" onClick={onClickStart}>
            Start
          </Button>
          <ItemFormInput onSubmit={onSubmit} />
        </Stack>
      </Container>
    </div>
  );
}
