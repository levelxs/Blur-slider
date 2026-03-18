import HeadingText from "./components/HeadingText";
import ProductSlider from "./components/ProductSlider";
import useLenis from "./lib/lenis";
import '../src/App.css'
function App() {
  useLenis()
  return (
    <div className="container">
      {/* <HeadingText /> */}
      <ProductSlider />

    </div>
  )
}

export default App;