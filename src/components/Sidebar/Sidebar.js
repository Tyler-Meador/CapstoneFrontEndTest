import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { connect } from 'react-redux'
import { fetchUser } from '../../redux/User/UserActions';


const Nav = styled.div`
    background: #15171c;
    height: 60px;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;



const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    
    margin-top: 420px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;



const SidebarWrap = styled.div`
    width: 100%;
`;






const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(0, 255, 229);
`;



const Sidebar = ({fetchUser, token}) => {

    const [sidebar, setSidebar] = useState(false);

    // TRUE / FALSE
    const showSidebar = () => setSidebar(!sidebar);

    // showcases the hamburger bar menu
    const [click, setClick] = useState(false)

    // shows buttons
    const [button, setButton] = useState(true);

    //displays the hamburger contents on click - toggles to X
    const handleClick = () => setClick(!click)

    // closes the mobile menu when clicked
    const closeMobileMenu = () => setClick(false)


    return (
        <>  
            <Nav>
                <NavIcon >
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>



                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className="nav-item">
                        <Link to='/dashboard' className="nav-links2" onClick={closeMobileMenu, fetchUser(token)}>
                            DASHBOARD
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/transfermoney' className="nav-links2" onClick={closeMobileMenu, window.scrollTo(0,0)}>
                            TRANSFER MONEY
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link to='/createaccount' className="nav-links2" onClick={closeMobileMenu}>
                            CREATE NEW ACCOUNT
                        </Link>
                    </li>


                </ul>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon >
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}







                </SidebarWrap>



            </SidebarNav>




        </>
    );
};
const mapStateToProps = state => {
    return {
        token: state.Login.token
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchUser: token => dispatch(fetchUser(token))
  
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);