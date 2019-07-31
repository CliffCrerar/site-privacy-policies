import {useState} from 'react';
import Head from 'next/head';
import Link from 'layout'
import 'static/bootstrap.min.css';

const AppHead = () => (
    <Head>
        <title>Infinity Arc terms and policies</title>
        <link rel="icon" type="image/png" href={require('static/urls').favicon}></link>
    </Head>
)

const Layout = (props) => {
    const [home, goToHome] = useState(true);
    const [privacy, goToPrivacy] = useState(true);
    const SrOnly = () => <span className="sr-only">(current)</span>
    return (
        <React.Fragment>
            <AppHead/>
            <style jsx>{`
                .navbar-brand.ext {
                    font-size: 1.5em;
                }
            `}
            </style>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand ext" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home <SrOnly /></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/privacy">
                                <a className="nav-link">Privacy Policy</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/terms">
                                <a className="nav-link">Terms of Use</a>
                            </Link>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
                </div>
            </nav>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;