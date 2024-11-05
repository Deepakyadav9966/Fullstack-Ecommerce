import {Route, BrowserRouter, Routes} from "react-router-dom"

const App = () =>(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>
)

export default App