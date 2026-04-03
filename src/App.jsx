
import ProductSlider from "./components/ProductSlider";
import useLenis from "./lib/lenis";
import '../src/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  useLenis()
  return (
    < >
      <Router>
        <Routes>
          <Route path="/blur-slider" element={<ProductSlider />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;