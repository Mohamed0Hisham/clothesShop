import { Route, Routes } from "react-router-dom"
import MainHeader from "./components/MainHeader"
import Shop from "./pages/shop"

function App() {

  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/men"></Route>
        <Route path="/women"></Route>
        <Route path="/kids"></Route>
      </Routes>
    </>
  )
}

export default App
