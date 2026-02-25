import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./home/page"
import ExploreEvents from "./explore/page"
import Profile from "./Profile/page"
import Signup from "./Signup/page"
import Signin from "./signin/page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/explore' element = {<ExploreEvents/>}/>
        <Route path = '/profile' element = {<Profile/>}/>
        <Route path = '/signup' element = {<Signup/>}/>
        <Route path="/signin" element = {<Signin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
