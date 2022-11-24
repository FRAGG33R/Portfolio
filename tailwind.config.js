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
	},
	plugins: [],
}
