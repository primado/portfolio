import type { Config } from 'tailwindcss'



const config: Config =  ({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        "c-red": "#ff4d00",
        "txt-gray": "#6b7280"
      },

      screens: {
        'sm-320': {'max': '323px'},
        'sm-425': {"max": '428px'},
        'sm-430': {'max': '435px'},
        'md-768': {'max': '769px'},
        'lg-1024': {'max': '1028px'},
      }
    },
  },
  plugins: [],
});
export default config
