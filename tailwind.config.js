/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
  	theme: {
    extend: {
		colors: {
			'fav-color': '#00ccc2',
		  },
	},
	screens: {
		'xs': '100px',
		'lg': '1024px',
		'sm': '640px',
    	'md': '768px',
	  },
	},
	plugins: [],
}
