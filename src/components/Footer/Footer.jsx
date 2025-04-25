
// Add this JSX where appropriate (e.g., at the bottom of your Contact component or App component)
import './Footer.css';  // Import the footer styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/awanthi-malawanage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://github.com/Awanthiy?tab=overview&from=2024-07-01&to=2024-07-02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://discord.com/invite/awym"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
  );
}

export default Footer;
