import './Footer.css';
import githubIcon from './assets/github.png'

function Footer () {
    return (
        <footer className="Footer">
            <div className="github">
            <a href='https://github.com/YamiHeike' target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="github" />
            </a>
            <p>Zuzanna K.</p>
            </div>
        </footer>
    )
}

export default Footer;