export default function NavigationBar() {
    return (<nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <a className="navbar-brand" href="index.html">
                Gymso Fitness
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-lg-auto">
                    <li className="nav-item">
                        <a href="#home" className="nav-link smoothScroll">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link smoothScroll">
                            About Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#class" className="nav-link smoothScroll">
                            Classes
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#schedule" className="nav-link smoothScroll">
                            Schedules
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link smoothScroll">
                            Contact
                        </a>
                    </li>
                </ul>
                <ul className="social-icon ml-lg-3">
                    <li>
                        <a href="https://fb.com/tooplate" className="fa fa-facebook" />
                    </li>
                    <li>
                        <a href="#" className="fa fa-twitter" />
                    </li>
                    <li>
                        <a href="#" className="fa fa-instagram" />
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}