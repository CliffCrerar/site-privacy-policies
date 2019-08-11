// import React, { Children } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router'
import NavLinks from './navlinks';
import Footer from './footer';
import routerTable from 'static/routingtable';
import AppHead from './appHead';

const Layout = (props) => {
    const SrOnly = () => <span className="sr-only">(current)</span>
    return (
        <React.Fragment>
            <AppHead />
            <style jsx>{`
                .navbar-brand.ext {
                    font-size: 2.0em;
                }
                .page-title h1{
                        color: var(--white);
                    }
            `}
            </style>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <Link href="/">
                    <a className="navbar-brand ext">INFINITY ARC</a>
                </Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <NavLinks routerTable={routerTable} Link={Link}/>
                </div>
            </nav>
            {/* <nav className="navbar"><a className="navbar-brand ext">INFINITY ARC</a></nav> */}
            <div className="page-title">
                <div className="w-100 p-5 mt-5">
                    <h1 style={{color:'black'}} className="display-2 text-center">
                    {routerTable.filter(row => row.route === useRouter().route)[0].pageTitle}
                    </h1>
                    <div className="text-center">
                        <h6 hidden={(useRouter().route === '' || useRouter().route === '/')}>Last updated:</h6>
                        <h6>
                        {routerTable.filter(row => row.route === useRouter().route)[0].updated}
                        </h6>
                    </div>
                </div>
            </div>
            <main className="container p-5">
                <div>
                    {props.children}
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;