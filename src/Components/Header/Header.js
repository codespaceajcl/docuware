import React, { useRef } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap"
import MobileSidebar from './MobileSidebar';
import mainLogo from "../../images/ajcl_logo.png";
import userAvatar from "../../images/user_avatar.png";
import { GoHome } from "react-icons/go";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdOutlineGridView } from "react-icons/md";
import { MdOutlineShareLocation } from "react-icons/md";
import './Header.css';

const Header = () => {
    const navbarRef = useRef();
    const getEmail = localStorage.getItem("email")
    
    const NavHandler = () => {
        if (navbarRef.current.style.width === "100%")
            navbarRef.current.style.width = "0%";
        else navbarRef.current.style.width = "100%";
    };

    const dashboardSidebar = [
        {
            path: "/dashboard",
            icon: <GoHome />,
            title: "Dashboard",
        },
        {
            path: "/dashboard/add-document",
            icon: <MdOutlinePersonAddAlt />,
            title: "Add Document",
        },
        {
            path: "/dashboard/general-enquiry",
            icon: <MdOutlineGridView />,
            title: "General Enquiry",
        },
        {
            path: "/dashboard/document-department",
            icon: <MdOutlineShareLocation />,
            title: "Document Department",
        }
    ];

    return (
        <div>
            <MobileSidebar
                navbarRef={navbarRef}
                NavHandler={NavHandler}
                sideBarItems={dashboardSidebar}
            />
            <Navbar className="main_header" collapseOnSelect expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <div>
                            <img src={mainLogo} alt='' />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={NavHandler} />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <div className='user_detail'>
                                <div>
                                    <p>Greetings,</p>
                                    <h6>{getEmail?.split("@")[0]}</h6>
                                </div>
                                <div className='user_img'>
                                    <img src={userAvatar} alt='' />
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;