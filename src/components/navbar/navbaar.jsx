import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import Logo from "../../assets/logo.PNG";
import tool from "../../assets/tools.PNG";
import newa from "../../assets/new.PNG";

import style from './navbar.module.scss';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div className={style.navbar_border}>
      <Navbar color="white" light expand="md" className={style.navbarset}> 
        <NavbarBrand href="/"><img src={Logo} alt="website logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle  className={style.NavItem} nav caret>
              <img src={tool} alt='website logo'/> Tools
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className={style.NavItem}>
              <NavLink className={style.NavLink}  href="#">Compress</NavLink>
            </NavItem>
            <NavItem className={style.NavItem}>
              <NavLink className={style.NavLink}  href="#">Convert</NavLink>
            </NavItem>
            <NavItem className={style.NavItem}>
              <NavLink className={style.NavLink}  href="#">Merge</NavLink>
            </NavItem>
            <NavItem className={style.NavItem}>
              <NavLink className={style.NavLink}  href="#">Edit</NavLink>
            </NavItem>
            <NavItem className={style.NavItem}>
              <NavLink className={style.NavLink}  href="#">Sign</NavLink>
            </NavItem>
          </Nav>
          <Nav  navbar>
          <NavItem className={style.NavItem}>
              <NavLink className={style.NavLink}  href="#">Pricing</NavLink>
            </NavItem>
            <NavItem className={style.NavItem}>
              <NavLink className={style.NavLink}  href="#">
                Smallpdf for Business <img src={newa} alt='website logo'/>
                </NavLink>
            </NavItem>
            <span className={style.divider} /> 
            
            <NavItem className={style.NavItem}>
              <NavLink className={style.NavLink} href="#">Login</NavLink>
            </NavItem >
            <Button className={style.NavItem} color="primary">Free Trial</Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;