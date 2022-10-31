import { TextareaAutosize, Button, Stack } from "@mui/material";
import { ChangeEventHandler, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RouletteData } from "../../App";

type FormInputType = {
  itemListText: string;
};

export type OnSubmitDataHandler = (data: RouletteData) => void;

export type Props = {
  onSubmit: OnSubmitDataHandler;
};

export const ItemFormInput: React.FC<Props> = (props) => {
  const { register, handleSubmit } = useForm<FormInputType>();
  const [backgroundFile, setBackgroundFile] = useState<File | null>(null);

  const _onSubmit: SubmitHandler<FormInputType> = (data) => {
    const textList = data.itemListText.split("\n");

    const imageElement = new window.Image();
    if (backgroundFile != null) {
      imageElement.src = window.URL.createObjectURL(backgroundFile);
    }

    props.onSubmit({
      itemList: textList,
      backgroundImage: imageElement,
      row: 3,
      col: 4,
    });
  };
  const onBackgroundInputChanged: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const files = event.currentTarget.files;
    if (!files || files?.length === 0) return;
    const file = files[0];
    setBackgroundFile(file);
  };

  const defaultText = [
    "オタチ",
    "ホーホー",
    "メリープ",
    "ハネッコ",
    "トゲピー",
    "ウパー",
    "イトマル",
    "ストライク",
    "アリゲイツ",
    "クヌギダマ",
    "ヘラクロス",
    "エイパム",
  ].join("\n");

  return (
    <Stack spacing={1}>
      <TextareaAutosize
        defaultValue={defaultText}
        minRows={10}
        {...register("itemListText")}
      />
      <input
        type="file"
        name="example"
        accept="image/*"
        onChange={onBackgroundInputChanged}
      />
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={handleSubmit(_onSubmit)}
      >
        作成
      </Button>
    </Stack>
  );
};
