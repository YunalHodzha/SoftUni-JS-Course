import About from "./components/About"
import Class from "./components/Class"
import Contact from "./components/Contact"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import GetStarted from "./components/GetStarted"
import Modal from "./components/Modal"
import NavigationBar from "./components/NavigationBar"
import Schedule from "./components/Schedule"

function App() {
  return (
    <div>
      <>
        <NavigationBar />

        <GetStarted />

        <Feature />

        {/* ABOUT */}
        <About />

        {/* CLASS */}
        <Class />

        {/* SCHEDULE */}
        <Schedule />

        {/* CONTACT */}
        <Contact />

        {/* FOOTER */}
        <Footer />

        {/* Modal */}
        <Modal />
      </>

    </div>


  )
}



export default App
