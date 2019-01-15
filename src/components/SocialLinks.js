import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

class SocialLinks extends React.Component {
  render() {
    return (
      <div>
        <SocialIcon url="https://www.linkedin.com/in/ana-g-521b45175/" />
        <SocialIcon url="https://www.facebook.com/profile.php?id=1180745077&ref=bookmarks" />
        <SocialIcon url="https://www.instagram.com/anamgonzalezart/" />
        <SocialIcon url="https://github.com/anamgonzalez" />
      </div>
  )
}
}

export default SocialLinks
