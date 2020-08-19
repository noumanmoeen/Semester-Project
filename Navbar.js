import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components';
import {ButtonContainer} from './Button';
export default class Navbar extends Component
{
    render()
    {
        return(
           <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
               {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
               https://www.iconfinder.com/Makoto_msk */}
               <Link to='/'>
               <img src={logo} className='navbar-brand' />
                   </Link> 
                  <ul className='navbar-nav-align-items-center'>
                      <li className='nav-item ml-5' style={{'list-style':'none'}}>
                          <Link to='/' className='nav-link text-dark'>Products</Link>
                      </li>

                  </ul>
                  <Link to='/cart' className='ml-auto text-light'>
                  <ButtonContainer>
                      <span><i className='fas fa-cart-plus'></i></span>
                  mycart
                
                  </ButtonContainer>
                  </Link>
           </NavWrapper>
        )
    }
}

const NavWrapper=styled.nav
`
background:var(--mainBlue);
.nav-link
{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`
;
