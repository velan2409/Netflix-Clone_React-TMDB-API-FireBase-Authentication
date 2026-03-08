import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_logo from '../../assets/search_icon.svg'
import bell_logo from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const Navbar = () => {

  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className={`navbar ${isScrolled ? 'nav-dark' : ''}`}>
      <div className='navbar-left'>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <div className={`search-box ${showSearch ? 'active' : ''}`}>
          <img src={search_logo} alt="Search" className='icons' onClick={handleSearchClick} />
          {showSearch && (
            <input
              type="text"
              placeholder="Search movies, TV shows..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="search-input"
            />
          )}
        </div>
        <p onClick={() => alert("Children profile feature coming soon!")}>Children</p>
        <img src={bell_logo} alt="" className='icons' />
        <div className='navbar-profile'>
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={() => navigate('/login')}>Sign Out of NetFlix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar