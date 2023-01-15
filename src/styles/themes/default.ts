export const defaultTheme = {
  colors: {
    blue: '#3294f8',
    blueOpacity: '#14589c47',
    title: '#e7edf4',
    subtitle: '#c4d4e3',
    text: '#afc2d4',
    span: '#7b96b2',
    label: '#3a536b',
    border: '#1c2f41',
    post: '#112131',
    profile: '#0b1b2b',
    background: '#071422',
    input: '#040f1a',
  },
  typography: {
    size: {
      xSmall: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
      xLarge: '20px',
      xxLarge: '24px',
    },
    lineHeight: 1.6,
    weight: {
      regular: 400,
      bold: 700,
    },
    family: {
      default: `Nunito, sans-serif`,
    },
  },
} as const
