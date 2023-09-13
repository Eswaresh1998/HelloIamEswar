import React from 'react';
import Logo_eswar from './Uiil/log_eswar.png';
import hash_node from './Uiil/hashnode.png';
import youtube from './Uiil/youtube.png';
import mail from './Uiil/mail.png';
import insta from './Uiil/insta.png';
import git from './Uiil/git.png';

const Header =()=>{
  return (
    <div className="HeaderContainer">
        <div className="LogoContainer">
            <img className='logo'src={Logo_eswar} alt="Eswaresh-Logo" />
        </div>
        <div className="ContactIcons">
              <ul>
                <li>
                    <a href="https://github.com/Eswaresh1998" target="_blank"><img id="icon" className='contact-icon' src={git} alt="Github logo" /></a>
                </li>
                <li>
                    <a href="mailto:eswaresh.karnati1998@gmail.com" target="_blank"><img id="icon" className='contact-icon' src={mail} alt="Gmail logo" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/eswareshkarnati/" target="_blank"><img id="insta" className='contact-icon' src={insta} alt="Instagram logo" /></a>
                </li>
                <li>
                    <a href="https://discusstechwitheswar.hashnode.dev/" target="_blank"><img id="icon" className='contact-icon'  src={hash_node} alt="HashNode logo" /></a>

                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UC2wwfqwLzHYSA5f17tE2HZA" target="_blank"><img className='contact-icon' src={youtube} alt="YouTube-Logo" /></a>
                </li>
              </ul>
        </div>
    </div>
  );
}

export default Header;