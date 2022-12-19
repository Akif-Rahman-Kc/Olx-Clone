import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
function Header() {
  const history = useHistory()
  const { user } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {/* <span>{user ? user.displayName : 'login'}</span> */}
          <div class="dropdown">
            <button style={{color:'black',backgroundColor:'transparent',border:0}} class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {user ? user.displayName : 'Create Account'}
            </button>
            <ul class="dropdown-menu">
              <li>{!user && <span onClick={()=>{history.push('/login')}} class="dropdown-item">Login</span>}</li>
              <li>{!user && <span onClick={()=>{history.push('/signup')}} class="dropdown-item">Register</span>}</li>
              <li>{user && <span onClick={()=>{
                firebase.auth().signOut();
                history.push('/')
              }} class="dropdown-item">Logout</span>}</li>
            </ul>
          </div>
          <hr />
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{history.push('/create')}}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
