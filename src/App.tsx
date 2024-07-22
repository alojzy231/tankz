import { Container, Sprite, Stage, Text } from "@pixi/react";

import "./App.css";

export default function App() {
  const bunnyUrl = "https://pixijs.io/pixi-react/img/bunny.png";

  return (
    <Stage height={600} options={{ background: 0x10_99_bb }} width={800}>
      <Sprite image={bunnyUrl} x={300} y={150} />
      <Sprite image={bunnyUrl} x={500} y={150} />
      <Sprite image={bunnyUrl} x={400} y={200} />

      <Container x={200} y={200}>
        <Text anchor={0.5} text="Hello World" x={220} y={150} />
      </Container>
    </Stage>
  );
}
