import {Stage, Sprite, Container} from '@inlet/react-pixi';
import './App.css';

const App = () => {
  const Test = () => {
    return (
      <Sprite
        image="https://pbs.twimg.com/profile_images/1467752817/terriermon1_400x400.png"
        position={[100, 100]}
      />
    )
  }
  return (
    <Stage width={1200} height={1200} options={{ backgroundAlpha: 0 }}>
      <Container>
        <Test/>
      </Container>
    </Stage>
  )
}

export default App;
