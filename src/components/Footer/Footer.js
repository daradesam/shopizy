import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <a href="#">
                <h2>Shopizy</h2>
            </a>
            <div className="social-media-links-wrapper">
                <a href="#">
                    <img src="twitter.svg" alt="twitter" />
                </a>
                <a href="#">
                    <img src="facebook.svg" alt="facebook" />
                </a>
                <a href="#">
                    <img src="instagram.svg" alt="instagram" />
                </a>
            </div>
        </div>
    )
}