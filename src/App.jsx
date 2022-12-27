import  React,{ useState } from 'react'
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"
import Intro from "../src/components/Intro"
import PortFolio from "../src/components/Portfolio"
import Timeline from "../src/components/Timeline"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Intro />
<PortFolio />
<Timeline />
<Contact />
<Footer />

    </div>
  )
}

export default App
