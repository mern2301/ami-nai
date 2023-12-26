import Banner from "./COMPONENTS/Banner/Banner"
import Bllog from "./COMPONENTS/Bllog/Bllog"
import Company from "./COMPONENTS/Company/Company"
import Fotter from "./COMPONENTS/Fotter/Fotter"
import Header from "./COMPONENTS/Header/Header"
import Logo from "./COMPONENTS/Logo/Logo"
import Map from "./COMPONENTS/Map/Map"
import Navbar from "./COMPONENTS/Navbar/Navbar"
import Services from "./COMPONENTS/Services/Services"
import Supplier from "./COMPONENTS/Supplier/Supplier"


function App() {

  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <Banner></Banner>
    <Supplier></Supplier>
    <Services></Services>
    <Company></Company>
    <Logo></Logo>
    <Bllog></Bllog>
    <Map></Map>
    <Fotter></Fotter>
    </>
    
  )
}

export default App
