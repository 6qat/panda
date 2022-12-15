import type { Tokens, SemanticTokens } from '@pandacss/types'

export const semanticTokens: SemanticTokens = {
  colors: {
    primary: { value: { base: '{colors.red.500}', _dark: '{colors.red.400}' } },
    secondary: { value: { base: '{colors.red.800}', _dark: '{colors.red.700}' } },
    complex: { value: { base: '{colors.red.800}', _dark: { _hiConstrast: '{colors.red.700}' } } },
    surface: {
      value: {
        _materialTheme: { base: '#m-b', _dark: '#m-d' },
        _pastelTheme: { base: '#p-b', _dark: { md: '#p-d' } },
      },
    },
    button: {
      thick: {
        value: { base: '#fff', _dark: '#000' },
      },
      card: {
        body: {
          value: { base: '#fff', _dark: '#000' },
        },
        heading: {
          value: { base: '#fff', _dark: '#000' },
        },
      },
    },
  },
  spacing: {
    gutter: { value: { base: '{spacing.4}', lg: '{spacing.5}' } },
  },
}

export const tokens: Tokens = {
  fonts: {
    heading: { value: '-apple-system, BlinkMacSystemFont' },
    body: { value: 'Helvetica, Arial, sans-serif' },
    mono: { value: 'SFMono-Regular, Menlo, Monaco' },
  },
  colors: {
    current: { value: 'currentColor' },
    gray: {
      '50': { value: '#FAFAFA' },
      '100': { value: '#F5F5F5' },
      '200': { value: '#E5E5E5' },
      '300': { value: '#D4D4D4' },
      '400': { value: '#A3A3A3' },
      '500': { value: '#737373' },
      '600': { value: '#525252' },
      '700': { value: '#333333' },
      '800': { value: '#121212' },
      '900': { value: '#0A0A0A' },
      deep: {
        test: {
          yam: {
            value: '%555',
          },
          pool: {
            poller: {
              value: '#fff',
            },
            tall: {
              value: '$dfdf',
            },
          },
        },
      },
    },
    green: {
      '50': { value: '#F0FFF4' },
      '100': { value: '#C6F6D5' },
      '200': { value: '#9AE6B4' },
      '300': { value: '#68D391' },
      '400': { value: '#48BB78' },
      '500': { value: '#38A169' },
      '600': { value: '#2F855A' },
      '700': { value: '#276749' },
      '800': { value: '#22543D' },
      '900': { value: '#1C4532' },
    },
    red: {
      '50': { value: '#FEF2F2' },
      '100': { value: '#FEE2E2' },
      '200': { value: '#FECACA' },
      '300': { value: '#FCA5A5' },
      '400': { value: '#F87171' },
      '500': { value: '#EF4444' },
      '600': { value: '#DC2626' },
      '700': { value: '#B91C1C' },
      '800': { value: '#991B1B' },
      '900': { value: '#7F1D1D' },
    },
  },
  fontSizes: {
    sm: { value: '0.5rem' },
    xs: { value: '0.75rem' },
    md: { value: '0.875rem' },
    lg: { value: '1.125rem' },
    xl: { value: '1.25rem' },
  },
  lineHeights: {
    normal: { value: 'normal' },
    none: { value: '1' },
    shorter: { value: '1.25' },
    short: { value: '1.375' },
    base: { value: '1.5' },
    tall: { value: '1.625' },
    taller: { value: '2' },
  },
  fontWeights: {
    normal: { value: '400' },
    medium: { value: '500' },
    semibold: { value: '600' },
    bold: { value: '700' },
  },
  letterSpacings: {
    tighter: { value: '-0.05em' },
    tight: { value: '-0.025em' },
    normal: { value: '0' },
    wide: { value: '0.025em' },
    wider: { value: '0.05em' },
    widest: { value: '0.1em' },
  },
  radii: {
    none: { value: '0' },
    sm: { value: '0.125rem' },
    base: { value: '0.25rem' },
    md: { value: '0.375rem' },
    lg: { value: '0.5rem' },
    xl: { value: '0.75rem' },
    '2xl': { value: '1rem' },
    '3xl': { value: '1.5rem' },
    full: { value: '9999px' },
  },
  shadows: {
    xs: { value: '0 0 0 1px rgba(0, 0, 0, 0.05)' },
    sm: { value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
    base: { value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' },
    md: { value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
  },
  // dropShadows: {
  //   sm: { value: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))' },
  //   md: { value: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))' },
  // },
  spacing: {
    0.5: { value: '0.125rem' },
    1: { value: '0.25rem' },
    1.5: { value: '0.375rem' },
    2: { value: '0.5rem' },
    2.5: { value: '0.625rem' },
    3: { value: '0.75rem' },
    3.5: { value: '0.875rem' },
    4: { value: '1rem' },
    5: { value: '1.25rem' },
    6: { value: '1.5rem' },
  },
  sizes: {
    0.5: { value: '0.125rem' },
    1: { value: '0.25rem' },
    1.5: { value: '0.375rem' },
    2: { value: '0.5rem' },
    2.5: { value: '0.625rem' },
    3: { value: '0.75rem' },
    3.5: { value: '0.875rem' },
    4: { value: '1rem' },
    5: { value: '1.25rem' },
    6: { value: '1.5rem' },
    xs: { value: '20rem' },
    sm: { value: '24rem' },
    md: { value: '28rem' },
    lg: { value: '32rem' },
    xl: { value: '36rem' },
  },
  animations: {
    none: { value: 'none' },
    spin: { value: 'spin 1s linear infinite' },
    ping: { value: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' },
    pulse: { value: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
    bounce: { value: 'bounce 1s infinite' },
  },
  easings: {
    'ease-in': { value: [0.4, 0, 1, 1] },
    'ease-out': { value: [0, 0, 0.2, 1] },
    'ease-in-out': { value: [0.4, 0, 0.2, 1] },
  },
  durations: {
    '75': { value: '75ms' },
    '100': { value: '100ms' },
    '150': { value: '150ms' },
  },
}
