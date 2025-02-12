//
//export default {
// content: [
//    "./index.html",
//    "./src/**/*.{js,ts,jsx,tsx}",
//    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
//  "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
// ],
// theme: {
//   extend: {},
// },
//plugins: [require("flowbite/plugin")],
// };

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {},
};
