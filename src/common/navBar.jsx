import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand text-white">Students</a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light text-white" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar