//Header of the website
import { Logo } from "../assets/SVGassets"

export const Header = () => {
  
  
  return (
    <header className="header-menu">
        <nav className="header-menu-nav">
          <a href="#a">ABOUT US</a>
          <a href="#s">SERVICES</a>
          <Logo />
          <a href="#j">JOIN US</a>
          <a href="#c">CONTACTS</a>
        </nav>
    </header>
  )
}
