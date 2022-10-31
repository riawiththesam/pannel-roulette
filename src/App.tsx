import { useState, ChangeEventHandler } from "react";
import {
  FormControlLabel,
  Button,
  Container,
  Stack,
  Switch,
} from "@mui/material";
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
    showAll: true,
    lightingList: [],
  });
  const { start, status, pause } = useTimer({
    interval: 100,
    onTimeUpdate: () => {
      const next = [random(0, 11), random(0, 11)];
      setRouletteState({ ...rouletteState, lightingList: next });
    },
  });

  const onSubmit: OnSubmitDataHandler = (data) => {
    setRouletteData(data);
  };

  const onClickStartStop = () => {
    if (status !== "RUNNING") {
      start();
      setRouletteState({ ...rouletteState, showAll: false });
    } else {
      pause();
      const next = [random(0, 11)];
      setRouletteState({
        ...rouletteState,
        showAll: false,
        lightingList: next,
      });
    }
  };

  const startStopButtonText = status !== "RUNNING" ? "Start" : "Stop";

  const onShowAllChanged = () => {
    const next = !rouletteState.showAll;
    setRouletteState({ ...rouletteState, showAll: next });
  };

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <RouletteCanvas rouletteData={rouletteData} state={rouletteState} />
          <Button
            color="primary"
            variant="contained"
            onClick={onClickStartStop}
          >
            {startStopButtonText}
          </Button>
          <FormControlLabel
            control={
              <Switch
                checked={rouletteState.showAll}
                onChange={onShowAllChanged}
              />
            }
            label="ShowAll"
          />
          <ItemFormInput onSubmit={onSubmit} />
        </Stack>
      </Container>
    </div>
  );
}
