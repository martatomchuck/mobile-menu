import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
require('../css/style.css')

const MobileMenu = () => {

  const [open, setOpen] = useState(true)

  return (
    <section className="mobile">
      <header className="mobile-menu">
	  
        <a onClick={e => setOpen(!open)} href="#" className="open-menu"></a>

        <nav className={open && "hide"}>
          <ul>
            <li><a href="#">O nas</a></li>
            <li><a href="#">Zespół</a></li>
            <li><a href="#">Produkty</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>

          <a onClick={e => setOpen(!open)} href="#" className="close-menu">Zamknij menu</a>

        </nav>
      </header>
    </section>
  )
}


ReactDOM.render(<MobileMenu />, document.getElementById("app"));
