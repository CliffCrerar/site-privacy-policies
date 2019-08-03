import React, { Children } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from './footer';
import router, { withRouter, useRouter } from 'next/router'
console.log('Router: ', router);
//import 'static/bootstrap.min.css';
import routerTable from 'static/routingtable'

// const routerTable = [
//     {route: '', display: 'Polcies, terms and agreements'},
//     {route: '/', display: 'Jou ma'},
//     {route: 'privacy', display: 'Privacy Policy'},
//     {route: 'terms', display: 'Terms of Use'},
//     {route: 'confidentiality', display: 'Confidentiality'}
//     // route: 'Online Privacy', display
// ]
console.log('routerTable: ', JSON.stringify(routerTable));
const AppHead = () => (
    <Head>
        <title>Infinity Arc terms and policies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" type="image/png" href={require('static/urls').favicon} />
        <link rel="stylesheet" href="static/bootstrap.min.css" />
        <link rel="stylesheet" href="static/css/global.css" />
        <style jsx global>{`
            
            `}
        </style>
    </Head>
)

// import { withRouter } from 'next/router';
//import Link from 'next/link';


const ActiveLink = ({ router, children, ...props }) => {
    const child = Children.only(children);

    let className = child.props.className || '';
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }

    delete props.activeClassName;

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};


const NavLinks = () => {
    const Links = routerTable.map(link => {
        return (
            <li className="nav-item" key={'navlinks-' + link.route}>
                <Link href={link.route} >
                    <a className="nav-link" title={link.display}>{link.display}</a>
                </Link>
            </li>
        )
    });
    return (
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {Links}
        </ul>
    )
}


const Layout = (props) => {
    console.log('props: ', props);

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
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link href="/">
                    <a className="navbar-brand ext">Infinity Arc</a>
                </Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    {NavLinks}
                </div>
            </nav>
            <div className="page-title">
                <div className="w-100 p-5 bg-secondary">
                    <h1>{routerTable.filter(row => row.route === useRouter().route)[0].display}</h1>

                </div>
            </div>
            <main className="container p-5">
                <div className="m-5">
                    {props.children}
                </div>
            </main>
            <Footer />

        </React.Fragment>
    )
}

export default Layout;