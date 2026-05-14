import ColorHarmonizer from './components/ColorHarmonizer.tsx';
import ContrastChecker from './components/ContrastChecker.tsx';
import HueSliderColors from './components/HueSliderColors.tsx';
import RandomColorBox from './components/RandomColorBox.tsx';

function App() {
  return (
    <div className="App">
      <h1> Clase de teoria del color con React</h1>
      <ColorHarmonizer />
      <hr />
      <ContrastChecker />
      <hr />
      <HueSliderColors />
      <hr />
      <RandomColorBox />
    </div>
  )
}

export default App;