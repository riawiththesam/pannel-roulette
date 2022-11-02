# パネルルーレット

Web 上で動作するパネルルーレットです。
[https://riawiththesam.github.io/pannel-roulette/]()

## GithubPages

デプロイ先は GithubPages で確保

- [https://riawiththesam.github.io/pannel-roulette/]()
- SPA をアップロードすると、パスに直接アクセスしたときに 404 になって ReactRouter に届かないので調整予定。
- リポジトリ名をパスとした URL になるので、`vite.config.ts`の base を設定している。

## ReactKonva

ルーレットのグラフィックを表現する Canvas エレメントの制御のために利用。
React の世界の中で Canvas を扱える。
軽く Canvas を使うくらいならこれで良いけど、最初から[Pixi.js]()や[Phaser]()を使ったほうが楽だったかも

## Vite

ビルドには Vite を利用。めちゃめちゃ楽。
本番ビルド、開発サーバとして使える。TypeScript/React の設定もぱぱっとやってくれる。

## 問題点

[TypeScript]() + [MUI]() + [ReactKonva]() の構成で開発中アニメーションを強化しようとして、
[ReactSpring]() を追加したところ、`ReactKonva`のコンポーネントが使えなくなった。
たぶん発生したのは[これ](https://github.com/pmndrs/react-spring/issues/1515)
すこし書いてある方法ではわたしは調整できず、ReactSpring を諦めた。
