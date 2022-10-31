import { useState } from "react";
import { Container } from "@mui/material";
import {
  ItemFormInput,
  OnSubmitDataHandler,
} from "./components/layouts/ItemFormInput";
import { RouletteCanvas } from "./components/layouts/RouletteCanvas";

export type RouletteData = {
  itemList: Array<string>;
  backgroundImage: File | null;
  row: number;
  col: number;
};

export function App() {
  const [rouletteData, setRouletteData] = useState<RouletteData>({
    itemList: [],
    backgroundImage: null,
    row: 3,
    col: 4,
  });

  const onSubmit: OnSubmitDataHandler = (data) => {
    setRouletteData(data);
  };

  return (
    <div className="App">
      <Container maxWidth="lg">
        <RouletteCanvas rouletteData={rouletteData} />
        <ItemFormInput onSubmit={onSubmit} />
      </Container>
    </div>
  );
}
