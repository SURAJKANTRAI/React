import React from 'react'
import './style.scss'
function Productpage() {
  return (
    <div>
          <header className="header">
        <nav className="navbar">
            <div className="navber__logo">
                <span>MY COMPANY.COM</span>
            </div>
            <div className="navbar__menu">
                <ul>
                    <li><a href="#">The Edit</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Designers</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">bags</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Jewelry</a></li>
                    <li><a href="#">beauty</a></li>
                    <li><a href="#">home</a></li>
                </ul>
            </div>
            <div className="navbar__icon">
                <i className="fa fa-search"></i>
                <i  className="fa fa-user"></i>
                <i className="fa fa-shopping-cart"></i>

            </div>

        </nav>

        <main>
            <section className="hero-section">
                <div className="left">
                    <ul className="left__nav">
                        <li><a href="">details</a></li>
                        <li><a href="">delivery</a></li>
                        <li><a href="">fit</a></li>
                        <li><a href="">share</a></li>
                    </ul>
                    <p>
                        The Forte Lurex Linen Viscose Jacket in Mother o
                        f Pearl features lunar lavishness by night and by
                        day: a blazer in a linen blend shot with lurex for
                        a shimmering surface that shines like a star in the sk
                        y. it has a straight fit with well defined shoulders a
                        nd a shawl collar culminating in a button and has been
                        flawlessly finished with three jet pockets with a sartorial feel.
                    </p>

                    <div><a href="#">See the EDITOR’S NOTE</a></div>
                    <div> <a href="#">Learn about the DESIGNER</a></div>
                </div>
                <div className="middle">
                    <img src="images/girl-img1.svg" alt=""/>
                </div>
                <div className="right">
                    <h1>JONATHAN SIMKHAI</h1>
                    <p>Lurex Linen Viscose Jacket in Conchiglia</p>
                    <h3>$225</h3>
                    <h2>Color Conchiglia</h2>
                    <img src="images/girl-img1.svg" alt="" width="60px"/>
                    <img src="images/girl-img1.svg" alt="" width="40px"/>
                    <div className="size">
                        <h3>size L</h3>
                        <h3>size guide</h3>
                    </div>
                    <div className="size-list">
                        <a href="#">XS</a>
                        <a href="#">S</a>
                        <a href="#">M</a>
                        <a href="#">L</a>
                        <a href="#">XL</a>
                    </div>
                    <a href="#" className="add-to-bag">ADD TO BAG <span><img src="images/arrow.svg" alt=""/></span></a>
                    <p>Get 4 interest-free payments of $196.25 with Klarna <a href="#">learn more</a></p>
                </div>
            </section>
            <section className="img-section1">
                <div><img src="images/girl-img2.svg" alt=""/></div>
                <div><img src="images/girl-img3.svg" alt=""/></div>

            </section>
            <section className="img-section2">
                <div><img src="images/dress-img.svg" alt=""/></div>

            </section>
            <section className="img-section3">
                <div><img src="images/girl-img4.svg" alt=""/></div>

            </section>
            <ul className="item-link">
                <li><a href="">Jonathan Simkhai</a></li>
                <li><a href="">Blazers</a></li>
                <li><a href="">Viscose</a></li>

            </ul>
            <section className="bottom-content">
                <div>
                    <h3>A note from the editor</h3>
                    <p>The Forte Lurex Linen Viscose Jacket in Mother of Pearl fea
                        tures lunar lavishness by night and by day: a blazer in a lin
                        en blend shot with lurex for a shimmering surface that shines like a star
                        in the sky. </p>

                    <h5>By MINNA SHIM, Fashion Editor</h5>
                </div>

            </section>
        </main>


    </header>

    </div>
  )
}

export default Productpage