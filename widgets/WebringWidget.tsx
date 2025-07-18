import React from 'react';
import Image from 'next/image';
import { WebringWidgetProps, webringThemes } from './types';
import styles from './WebringWidget.module.css';

const WebringWidget: React.FC<WebringWidgetProps> = ({
  title = 'Webring',
  webringUrl = 'https://meshring.netlify.app',
  theme = 'default',
  size = 'medium',
  showImage = true,
  className = '',
  showDescription = true
}) => {
  const currentTheme = webringThemes[theme] || webringThemes.default;
  
  const getSizeClass = () => {
    switch (size) {
      case 'small': return styles.sizeSmall;
      case 'large': return styles.sizeLarge;
      default: return styles.sizeMedium;
    }
  };

  const themeStyles = {
    '--webring-bg': currentTheme.colors.background,
    '--webring-border': currentTheme.colors.border,
    '--webring-text': currentTheme.colors.text,
    '--webring-accent': currentTheme.colors.accent,
    '--webring-link': currentTheme.colors.linkColor,
    '--webring-link-hover': currentTheme.colors.linkHover,
    '--webring-button-bg': currentTheme.colors.buttonBackground,
    '--webring-button-text': currentTheme.colors.buttonText,
    '--webring-button-hover': currentTheme.colors.buttonHover,
  } as React.CSSProperties;

  return (
    <div 
      className={`widget ${styles.webringWidget} ${getSizeClass()} ${styles[`theme-${theme}`]} ${className}`}
      style={themeStyles}
    >
      <h3 className={styles.widgetTitle}>{title}</h3>
      <div className={styles.webringContent}>
        {showImage && (
          <div className={styles.surferImageContainer}>
            <Image
              src="https://meshring.netlify.app/assets/images/surfer.jpg"
              alt="Surfer"
              width={size === 'small' ? 40 : size === 'large' ? 80 : 60}
              height={size === 'small' ? 40 : size === 'large' ? 80 : 60}
              className={styles.surferImage}
            />
          </div>
        )}
        <div className={styles.webringText}>
          <p className={styles.webringIntro}>Member of the</p>
          <h4 className={styles.webringName}>
            <a href={webringUrl}>MuizenMesh Webring</a>
          </h4>
          {showDescription && (
            <p className={styles.webringMembers}>A community of independent websites</p>
          )}
        </div>
        
        <a 
          href="https://en.wikipedia.org/wiki/Webring"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.webringInfo}
          data-tooltip="Learn more about webrings on Wikipedia"
          aria-label="Learn more about webrings on Wikipedia"
        >
          ?
        </a>
      </div>
      <div className={styles.webringNavigation}>
        <a href={`${webringUrl}/prev`} className={styles.webringLink}>
          &larr; Previous
        </a>
        <a href={`${webringUrl}/random`} className={styles.webringLink}>
          Random
        </a>
        <a href={`${webringUrl}/next`} className={styles.webringLink}>
          Next &rarr;
        </a>
      </div>
    </div>
  );
};

export default WebringWidget;