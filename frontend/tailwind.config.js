module.exports = {
content: [
"./index.{js,jsx,ts,tsx}",
"./App.{js,jsx,ts,tsx}",
"./src/**/*.{js,jsx,ts,tsx}",
],
presets: [require("nativewind/preset")],
theme: {
extend: {
colors: {
background: "#0B1220",
foreground: "#F8FAFC",
muted: "#94A3B8",
card: "#0F172A",
border: "#1E293B",
primary: {
DEFAULT: "#2563EB",
foreground: "#FFFFFF",
},
},
borderRadius: {
xl: "16px",
"2xl": "24px",
},
},
},
plugins: [],
};