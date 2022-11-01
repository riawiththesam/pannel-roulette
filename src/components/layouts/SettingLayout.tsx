import {
  FormControlLabel,
  Button,
  Container,
  Stack,
  Switch,
  Typography,
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
          label="すべて表示"
        />
        <ItemFormInput onSubmit={onSubmit} />

        <Typography variant="body1">
          これは、アイテムをランダムに決定するためのルーレットのオンラインツールです。
        </Typography>

        <Typography variant="body1">
          1.テキストエリア内に、アイテム名を改行で区切って入力してください。
          <br />
          2.作成ボタンをクリックしてください。
          <br />
          3.STARTボタンをクリックしてください。
          <br />
          4.STOPボタンをクリックしてすると、アイテムが1つ選ばれます。
        </Typography>

        <Typography variant="body1">
          ・ルーレット画面を直接クリックすると、レスポンシブモードになります。
          <br />
          ・レスポンシブモードでルーレット画面をクリックすると、ルーレットを回すことができます。
          <br />
          ・ブラウザバックでレスポンシブモードを終了します。
        </Typography>

        <Typography variant="body1">
          ・作成ボタンのクリックの前に背景画像のファイルを選択ボタンに画像をドロップすると、背景を設定できます。
        </Typography>

        <Typography variant="body1">
          ・すべて表示のスイッチを有効化すると、すべてのアイテムを表示します
        </Typography>

        <Typography variant="body1">
          ・4x3以外のレイアウトに対応予定。
          <br />
          ・4x3以外のレイアウト対応時に、アイテム数変更に対応予定。
          <br />
          ・アイテム枠線変更に対応予定。
          <br />
          ・キーボードでの操作に対応予定。
        </Typography>
      </Stack>
    </Container>
  );
};
