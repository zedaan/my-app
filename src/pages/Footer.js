import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// import logo from './logo.svg';
class Footer extends Component {
  render() {
    return (
     <footer className="footer">
         <div className="container">
           <div className="row">
               <div className="col-md-8 col-md-offset-2 text-center">
                  <ul>
                    <li className="footer-list"><a href="#">Footer Goes Here</a></li>
                  </ul>
               </div>
            </div>
         </div>
     </footer>

    );
  }
}

export default Footer;