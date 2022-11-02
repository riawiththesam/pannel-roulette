import { useState, useEffect } from "react";
import { useTimer } from "use-timer";
import random from "just-random-integer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OnSubmitDataHandler } from "./components/layouts/ItemFormInput";
import { RouletteState } from "./components/layouts/RouletteCanvas";
import { SettingLayout } from "./components/layouts/SettingLayout";
import { FullScreenLayout } from "./components/layouts/FullScreenLayout";
import { css } from "@emotion/react";
import { useRef } from "react";

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
    stopped: false,
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(containerRef.current?.offsetWidth || 0);
  }, []);
  window.onresize = () => {
    setWindowWidth(containerRef.current?.offsetWidth || 0);
  };

  const onSubmit: OnSubmitDataHandler = (data) => {
    setRouletteData(data);
    setRouletteState({ ...rouletteState, stopped: false, showAll: true });
    pause();
  };

  const onClickStartStop = () => {
    if (status !== "RUNNING") {
      start();
      setRouletteState({ ...rouletteState, stopped: false, showAll: false });
    } else {
      pause();
      const next = [random(0, 11)];
      setRouletteState({
        stopped: true,
        showAll: false,
        lightingList: next,
      });
    }
  };

  const startStopButtonText = status !== "RUNNING" ? "Start" : "Stop";

  const onShowAllChanged = () => {
    const next = !rouletteState.showAll;
    setRouletteState({ ...rouletteState, showAll: next, stopped: false });
  };

  const settingLayout = (
    <SettingLayout
      rouletteData={rouletteData}
      rouletteState={rouletteState}
      startStopButtonText={startStopButtonText}
      onClickStartStop={onClickStartStop}
      onShowAllChanged={onShowAllChanged}
      onSubmit={onSubmit}
    />
  );

  const fullScreenLayout = (
    <FullScreenLayout
      rouletteData={rouletteData}
      rouletteState={rouletteState}
      windowWidth={windowWidth}
      onClick={onClickStartStop}
    />
  );

  const containerCss = css`
    width: 100%;
    height: 100%;
  `;

  return (
    <div css={containerCss} ref={containerRef}>
      <BrowserRouter basename="/pannel-roulette">
        <Routes>
          <Route path={`/`} element={settingLayout} />
          <Route path={`/full-screen`} element={fullScreenLayout} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
