/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,liquid}"],
  safelist: [
    'border-t-green',
    'border-t-light-blue',
    'border-t-purple',
    'border-t-orange'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'red': {
          '50': '#fef3f2',
          '100': '#fde4e3',
          '200': '#fdcdcb',
          '300': '#faaba7',
          '400': '#f57a74',
          '500': '#eb5048',
          DEFAULT: '#db433b',
          '700': '#b52720',
          '800': '#96241e',
          '900': '#7d241f',
          '950': '#440e0b',
        },
        'orange': {
          '50': '#fef7ee',
          '100': '#fdeed7',
          '200': '#fad9ae',
          '300': '#f7bd7a',
          DEFAULT: '#f39745',
          '500': '#ef7920',
          '600': '#e15f15',
          '700': '#ba4714',
          '800': '#943a18',
          '900': '#783116',
          '950': '#40160a',
        },
        'blue': {
          '50': '#eff8ff',
          '100': '#daeeff',
          '200': '#bde3ff',
          '300': '#90d2ff',
          '400': '#5cb8fe',
          DEFAULT: '#3d9cfb',
          '600': '#207af0',
          '700': '#1864dd',
          '800': '#1a50b3',
          '900': '#1b478d',
          '950': '#152c56',
        },
        'light-blue': {
          '50': '#f0f8ff',
          '100': '#e0f0fe',
          '200': '#bbe2fc',
          DEFAULT: '#5fbffa',
          '400': '#3ab1f6',
          '500': '#1098e7',
          '600': '#0478c5',
          '700': '#0460a0',
          '800': '#085284',
          '900': '#0d446d',
          '950': '#092b48',
        },
        'purple': {
          '50': '#fbf8fc',
          '100': '#f5eff8',
          '200': '#eee1f3',
          '300': '#e0cae8',
          '400': '#cca7d9',
          DEFAULT: '#b989c9',
          '600': '#a269b4',
          '700': '#8b559b',
          '800': '#744980',
          '900': '#5e3c67',
          '950': '#412249',
        },
        'green': {
          '50': '#f2f9ec',
          '100': '#e2f1d6',
          '200': '#c8e5b1',
          '300': '#a6d284',
          '400': '#84bf5c',
          DEFAULT: '#64a03d',
          '600': '#4d822e',
          '700': '#3d6427',
          '800': '#345024',
          '900': '#2e4522',
          '950': '#15250e',
        },
        'yellow': {
          '50': '#fcf8ea',
          '100': '#f8efc9',
          '200': '#f2dd96',
          DEFAULT: '#e7bb43',
          '400': '#e2aa2d',
          '500': '#d29420',
          '600': '#b57219',
          '700': '#915217',
          '800': '#79421a',
          '900': '#67381c',
          '950': '#3c1c0c',
        },
        'social': {
          'bluesky': '#1185fe',
          'facebook': '#0866ff',
          'instagram': '#ff0069',
          'linkedin': '#2d64bc',
          'twitter': '#4a99e9',
          'github': '#7041c0',
          'mastodon': '#6364FF',
        }
      },
      fontSize: {
        '5xl': ['3rem', 1.1]
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography')
  ],
}
