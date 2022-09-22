import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Intrests from "./components/Intrests"

export default function App() {
  return (
    <div className="app-div">
      <Info />
      <About />
      <Intrests />
      <Footer />
    </div>
  )
}