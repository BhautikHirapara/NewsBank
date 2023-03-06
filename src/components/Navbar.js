import React from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () =>  {
  const location = useLocation();
    return (
      <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{fontSize:'25px'}}>NewsBank &nbsp; &nbsp;| &nbsp;</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="/general"  style={{ color: (location.pathname==="/general" || location.pathname==="/" ? "#f11946": "white"), fontSize: '19px'}}>General</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/business" style={{ color: (location.pathname==="/business" ? "#f11946": "white"), fontSize: '19px'}}>Business</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/entertainment"  style={{ color: (location.pathname==="/entertainment" ? "#f11946": "white"), fontSize: '19px'}}>Entertainment</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/health"  style={{ color: (location.pathname==="/health" ? "#f11946": "white"), fontSize: '19px'}}>Health</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/science"  style={{ color: (location.pathname==="/science" ? "#f11946": "white"), fontSize: '19px'}}>Science</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/sports"  style={{ color: (location.pathname==="/sports" ? "#f11946": "white"), fontSize: '19px'}}>Sports</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/technology"  style={{ color: (location.pathname==="/technology" ? "#f11946": "white"), fontSize: '19px'}}>Technology</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  
}

export default Navbar
