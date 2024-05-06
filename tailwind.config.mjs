/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				gradient1: "#db03e0",
				gradient2: "#7b25be",
				gradient3: "#1d459d",
			  },
			  fontFamily: {
				monteserrat: ["Montserrat", "sans-serif"],
				archivo: ["Archivo" , "sans-serif"],
				
			  },
			  screens: {
        
                sm:"250px",
				//320px
				md: "764px",
				// => @media (min-width: 768px) { ... }

				lg: "1026px",
		  
			   
				
			  },
		},
	},
	plugins: [],
}
