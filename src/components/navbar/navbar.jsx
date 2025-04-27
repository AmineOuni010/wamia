import React from 'react'
import style from './style.module.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <nav className={`navbar d-none d-md-block ${style.navbar} p-0`}>
            <div className='d-flex justify-content-between align-items-center py-3'>
                <img className='navbar-brand' src={logo} />
                <div className='input-group bg-white rounded-pill p-1' style={{ maxWidth: '770px' }}>
                    <select name="" className='form-select border-0 rounded-pill' id="" style={{ maxWidth: '140px', fontSize: '13px' }}>
                        <option value="">Toutes les cat...</option>
                    </select>
                    <input type="text" className='form-control border-0 border-start border-secondary' placeholder='Rechercher...' />
                    <button className='btn rounded-circle' type='button' style={{ backgroundColor: '#ed6f26' }}>
                        <i className="fa-solid fa-magnifying-glass" style={{ color: 'white' }} ></i>
                    </button>
                </div>
                <div className='d-flex p-2'>
                    <button className='btn btn-outline-secondary border-0 rounded me-2' type='button'>
                        <i className="fa-thin fa-heart fa-2xl" style={{ color: 'white' }}  ></i> <p className='d-none d-lg-block mb-0' style={{ color: "#666", fontSize: "12px", marginTop: "10px", textTransform: "capitalize", fontWeight: "700" }}> Liste D'envies</p>
                    </button>
                    <button className='btn btn-outline-secondary border-0 rounded me-2' type='button'>
                        <i className="fa-thin fa-circle-user fa-2xl" style={{ color: 'white' }} ></i><p className='d-none d-lg-block mb-0' style={{ color: "#666", fontSize: "12px", marginTop: "10px", textTransform: "capitalize", fontWeight: "700" }}> Votre Compte</p>
                    </button>

                    <button className='btn btn-outline-secondary rounded'>
                        <i className="fa-thin fa-bag-shopping fa-2xl" style={{ color: 'white' }} ></i> <p className='d-none d-lg-block mb-0' style={{ color: "#666", fontSize: "12px", marginTop: "10px", textTransform: "capitalize", fontWeight: "700" }}>Panier</p>
                    </button>
                </div>
            </div>
            <div className={style.navbar__bottom}>
                <a className={style.navbar__bottom_link}>
                    <i className="fa-solid fa-bars me-2"></i>
                    nos catégorie
                </a>
                <a className={style.navbar__bottom_link}>
                    <i className="fa-solid fa-heart-pulse me-2"></i>
                    tout à 20 dt
                </a>
                <a className={style.navbar__bottom_link}>
                    <i className="fa-solid fa-rocket me-2"></i>
                    nouveauté
                </a>
                <a className={style.navbar__bottom_link}>
                    <i className="fa-solid fa-hourglass-half me-2"></i>
                    promo
                </a>
                <a className={style.navbar__bottom_link}>
                    <i className="fa-solid fa-truck fa-flip-horizontal me-2"></i>
                    livraison gratuite
                </a>
            </div>
        </nav>
    )
}

export default Navbar
