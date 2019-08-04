const Footer = () => {
    return(
    <footer>
        <style jsx>{`
            footer{
                position: relative;
            }
            footer div{
                position: relative;
            }
            footer h3{
                font-family: Audiowide;
            }
            footer h5{
                font-family: Orbitron;
            }
            .footer-section-one{
                min-height: 15vh;
                background: var(--gray);
                color: white;
                padding: 5vh;
            }
            .footer-section-one span{
                margin: 0 5px 0 5px;
            }
            .footer-section-one a{
                color: white;
            }
            .footer-section-one a:hover{
                color: var(--primary);
            }
            .footer-section-two{
                min-height: 10vh;
                background: var(--gray-dark);
                padding: 10vh;
            }
            .footer-section-two h3, .footer-section-two h5{
                color: white;
            }
        `}</style>
        <div className="footer-section-one text-center">
            <h5>Infinity Arc Policies portal</h5>
            <a className="text-decoration-none" href="mailto:info@infinityarc.co.za">info@infinityarc.net</a>
            <span>|</span>
            <a className="text-decoration-none" href="www.infinityarc.co.za">www.infinityarc.net</a>
        </div>
        <div className="footer-section-two text-center">
        <img className="rounded" src="https://ia-own-webassets.now.sh/IA_shortlogo_white_blackbg-033x.png" alt="Infinity Arc Logo"/>
        <hr/>
        <h3>INFINITY ARC</h3>
        <h5>Creative | Quality | Solutions</h5>
        </div>

    </footer>
    )
}

export default Footer;