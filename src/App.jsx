import { Route, Routes } from "react-router-dom"
import MainHeader from "./components/MainHeader"
import Shop from "./pages/shop"

function App() {

  return (
    <>
      <MainHeader />
      <Routes>
        <Route index element={<Shop />}></Route>
        <Route path="/men" element={<Shop />}></Route>
        <Route path="/women" element={<Shop />}></Route>
        <Route path="/kids" element={<Shop />}></Route>
      </Routes>
    </>
  )
}

export default App
