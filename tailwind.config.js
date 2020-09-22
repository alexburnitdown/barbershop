module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        nav: {
          100: '#826550'
        },
        burger: {
          100: '#6a4d38'
        },
        popup_bg: {
          100: '#f8f5f2'
        },
      },
      spacing: {
        '11': '2.25rem',
        '13': '3.5rem',
        '18': '4.5rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '28': '6.5rem',
        '30': '7rem',
        '31': '7.5rem',
        '34': '8rem',
        '36': '8.5rem',
        '37': '9rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '43': '11rem',
        '44': '11.5rem',
        '50': '12.5rem',
        '51': '13rem',
        '52': '13.5rem',
        '58': '14.5rem',
        '59': '15rem',
        '60': '15.5rem',
        '65': '17rem',
        '66': '18rem',
        '67': '19rem',
        '68': '19.5rem',
        '69': '20rem',
        '70': '20.5rem',
        '71': '21rem',
        '72': '21.5rem',
        '73': '22rem',
        '74': '22.5rem',
        '75': '23rem',
        '76': '23.5rem',
        '77': '24rem',
        '78': '24.5rem',
        '79': '25rem',
        '80': '25.5rem',
        '81': '26rem',
        '82': '26.5rem',
        '83': '27rem',
        '84': '30rem',
        '85': '33rem',
        '86': '36rem',
        '87': '39rem',
        '88': '42rem',
        '90': '50rem',
        '91': '51rem',
        '92': '52rem',
        '93': '53rem',
        '94': '54rem',
        '95': '55rem',
        '105': '58rem',
      }
    },
    lineHeight: {
      '11': '3rem',
      '12': '3.5rem',
      '13': '4rem',
      '14': '4.5rem',
      '15': '5rem',
    },
    triangles: { // defaults to {}
      'left': {
        direction: 'left',      // one of 'left', 'right', 'up', 'down', 'left-up', 'left-down', 'right-up', and 'right-down'
        size: '1em',            // defaults to defaultSize
        height: '0.5em',        // defaults to half the size; has no effect on the diagonal directions (e.g. 'left-up')
        color: 'currentColor',  // defaults to defaultColor
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    triangles: ['responsive'] // defaults to []
  },
  plugins: [
    require('tailwindcss-triangles')({
      componentPrefix: 'c-',        // defaults to 'c-'
      defaultSize: '1em',           // defaults to '1em'
      defaultColor: 'currentColor', // defaults to 'currentColor'
    }),
  ],
}
