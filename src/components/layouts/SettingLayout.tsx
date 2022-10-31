import {
  FormControlLabel,
  Button,
  Container,
  Stack,
  Switch,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RouletteData } from "../../App";
import { ItemFormInput, OnSubmitDataHandler } from "./ItemFormInput";
import { RouletteCanvas, RouletteState } from "./RouletteCanvas";

export type SettingLayoutProps = {
  rouletteData: RouletteData;
  rouletteState: RouletteState;
  startStopButtonText: string;
  onClickStartStop: () => void;
  onShowAllChanged: () => void;
  onSubmit: OnSubmitDataHandler;
};

export const SettingLayout: React.FC<SettingLayoutProps> = (props) => {
  const {
    rouletteData,
    rouletteState,
    startStopButtonText,
    onClickStartStop,
    onShowAllChanged,
    onSubmit,
  } = props;

  const navigate = useNavigate();

  const onClickSettingToFullScreen = () => {
    navigate("/full-screen");
  };

  return (
    <Container>
      <Stack spacing={3}>
        <RouletteCanvas
          rouletteData={rouletteData}
          state={rouletteState}
          onClick={onClickSettingToFullScreen}
        />
        <Button color="primary" variant="contained" onClick={onClickStartStop}>
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
  );
};
