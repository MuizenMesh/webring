// TypeScript type definitions for MuizenMesh Webring Widget

export interface WebringWidgetProps {
  /** Custom title for the widget */
  title?: string;
  /** URL of the webring site */
  webringUrl?: string;
  /** Theme variant for the widget */
  theme?: 'default' | 'minimal' | 'ocean' | 'sunset' | 'dark';
  /** Size variant for the widget */
  size?: 'small' | 'medium' | 'large';
  /** Whether to show the surfer image */
  showImage?: boolean;
  /** Custom CSS class name */
  className?: string;
  /** Whether to show the description text */
  showDescription?: boolean;
}

export interface WebringTheme {
  name: string;
  colors: {
    background: string;
    border: string;
    text: string;
    accent: string;
    linkColor: string;
    linkHover: string;
    buttonBackground: string;
    buttonText: string;
    buttonHover: string;
  };
}

export const webringThemes: Record<string, WebringTheme> = {
  default: {
    name: 'Default',
    colors: {
      background: '#f8f9fa',
      border: '#dee2e6',
      text: '#495057',
      accent: '#0d6efd',
      linkColor: '#0d6efd',
      linkHover: '#0b5ed7',
      buttonBackground: '#ffffff',
      buttonText: '#0d6efd',
      buttonHover: '#0d6efd',
    },
  },
  minimal: {
    name: 'Minimal',
    colors: {
      background: '#ffffff',
      border: '#e9ecef',
      text: '#6c757d',
      accent: '#343a40',
      linkColor: '#343a40',
      linkHover: '#495057',
      buttonBackground: '#f8f9fa',
      buttonText: '#343a40',
      buttonHover: '#343a40',
    },
  },
  ocean: {
    name: 'Ocean',
    colors: {
      background: '#e3f2fd',
      border: '#90caf9',
      text: '#0d47a1',
      accent: '#1976d2',
      linkColor: '#1976d2',
      linkHover: '#1565c0',
      buttonBackground: '#ffffff',
      buttonText: '#1976d2',
      buttonHover: '#1976d2',
    },
  },
  sunset: {
    name: 'Sunset',
    colors: {
      background: '#fff3e0',
      border: '#ffcc02',
      text: '#e65100',
      accent: '#ff9800',
      linkColor: '#ff9800',
      linkHover: '#f57c00',
      buttonBackground: '#ffffff',
      buttonText: '#ff9800',
      buttonHover: '#ff9800',
    },
  },
  dark: {
    name: 'Dark',
    colors: {
      background: '#212529',
      border: '#495057',
      text: '#f8f9fa',
      accent: '#0dcaf0',
      linkColor: '#0dcaf0',
      linkHover: '#3dd5f3',
      buttonBackground: '#343a40',
      buttonText: '#0dcaf0',
      buttonHover: '#0dcaf0',
    },
  },
};