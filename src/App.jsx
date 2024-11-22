import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Signin } from "./pages/signin"
import { Signup } from "./pages/signup"
import { Otp } from "./pages/otp"
import { Home } from "./pages/landingpage"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
