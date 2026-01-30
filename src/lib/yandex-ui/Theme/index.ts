import './Theme.scss';

// Default theme preset
export const theme = {
  color: {
    bg: {
      default: 'var(--color-bg-default)',
      secondary: 'var(--color-bg-secondary)',
      inverse: 'var(--color-bg-inverse)',
      border: 'var(--color-bg-border)',
    },
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      inverse: 'var(--color-text-inverse)',
      link: 'var(--color-text-link)',
    },
    status: {
      success: 'var(--color-status-success)',
      warning: 'var(--color-status-warning)',
      error: 'var(--color-status-error)',
    },
  },
  typography: {
    fontFamily: 'var(--font-family)',
    fontSize: {
      xs: 'var(--font-size-xs)',
      s: 'var(--font-size-s)',
      m: 'var(--font-size-m)',
      l: 'var(--font-size-l)',
      xl: 'var(--font-size-xl)',
      xxl: 'var(--font-size-xxl)',
    },
  },
  space: {
    xs: 'var(--space-xs)',
    s: 'var(--space-s)',
    m: 'var(--space-m)',
    l: 'var(--space-l)',
    xl: 'var(--space-xl)',
    xxl: 'var(--space-xxl)',
    '3xl': 'var(--space-3xl)',
  },
  borderRadius: {
    s: 'var(--border-radius-s)',
    m: 'var(--border-radius-m)',
    l: 'var(--border-radius-l)',
    xl: 'var(--border-radius-xl)',
  },
  shadow: {
    s: 'var(--shadow-s)',
    m: 'var(--shadow-m)',
    l: 'var(--shadow-l)',
  },
  transition: {
    fast: 'var(--transition-fast)',
    normal: 'var(--transition-normal)',
    slow: 'var(--transition-slow)',
  },
};

// Function to configure root theme
export const configureRootTheme = (config: { theme: any }) => {
  // Apply theme to document root
  const root = document.documentElement;

  // Apply theme variables
  if (config.theme) {
    // This is a simplified implementation
    // In real @yandex/ui, this would be more complex
    console.log('Theme configured:', config.theme);
  }
};