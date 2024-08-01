import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/alex-shi7/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>inspired by Yuji</p>
    </footer>
  );
}

export default Footer;