

const NavLinks = ({routerTable,Link}) => {
    const routeLinks = routerTable.slice(1);
    // console.log('routeLinks: ', routeLinks);
    routeLinks[0].display = 'Home';
    const Links = routeLinks.map(link => {
        // console.log('link: ', link);
        return (
            <li className="nav-item" key={'navlinks-' + link.route}>
                <Link href={link.route} >
                    <a className="nav-link" title={link.pageTitle}>{link.caption}</a>
                </Link>
            </li>
        )
    });
    return (
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 nav-links">
            {Links}
        </ul>
    )
}

export default NavLinks;