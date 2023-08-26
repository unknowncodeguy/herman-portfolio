import React from 'react';
import { Button } from 'reactstrap';
import { socialLinks } from '../portfolio';

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.gmail && (
        <Button
          className="btn-icon-only rounded-circle"
          color="facebook"
          href={`mailto:${socialLinks.gmail}`}
          target="_blank"
          rel="noopener"
          aria-label="Gamil"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-google" />
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github" />
          </span>
        </Button>
      )}
      {socialLinks.skype && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          href={socialLinks.skype}
          rel="noopener"
          aria-label="Skype"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-skype" />
          </span>
        </Button>
      )}

    </div>
  );
};

export default SocialLinks;
