/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors:{
				'light-red':'#ff4141',
				'light-pink':'#fde1ff',
				'light-green':'#0e8b3322'
			}
		},
	},
	plugins: [],
};
