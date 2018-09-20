import React, { Component } from 'react';
import logo from './../images/kmit-logo-2366d0058f.svg';
const jQuery = window.jQuery;
class Header extends Component{
  componentDidMount() {
      jQuery(document).foundation();
  }
  render(){
    return(
<div>
<div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
		<button id="nav-toggle" className="menu-icon" type="button" data-toggle=""></button>
		<div className="title-bar-title"></div>
</div>

<div className="top-bar" id="example-menu">
		<div className="top-bar-right">
				<ul className="menu">
						<li className=""><img className="header-menu__nav--logo" src={logo} alt="bar logo"/></li>
				</ul>
		</div>
		<div className="top-bar-left anima">
				<ul className=" medium-horizontal vertical dropdown menu" data-responsive-menu="accordion medium-dropdown">

							<li><a href="#nagra-av-vara-kunder">Våra kunder</a></li>
							<li><a href="#gdpr">GDPR</a></li>
							<li><a href="#om-oss">Om oss</a></li>
						  <li><a href="#filosofi">Filosofi</a></li>
						  <li><a href="#karriar">Karriär</a></li>
						  <li><a href="#kvalitet-och-miljo">Kvalitet och miljö</a></li>
						  <li><a href="#hosting">Hosting</a></li>
						  <li><a href="#Aktuellt">Aktuellt</a></li>
						  <li><a href="#kontakt">Kontakta oss</a></li>
				</ul>
		</div>
</div>
</div>

    );
  }
}
export default Header;
