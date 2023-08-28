import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Link to={'/'} className="footerLink">
            <p>Blog</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Telegram</p>
            <p>Youtube</p>
            <p>TikTok</p>
            <p>Twitch</p>
            </Link>
        </footer>
    )
}

export default Footer;