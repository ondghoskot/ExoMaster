export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Exo Master",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/main.scss"],
  //router:{
    //middleware: 'authentication'
  //},
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/vco", mode: "client" },
  ],
  axios: {
    baseURL: "http://localhost:3001",
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/style-resources",
    //"cookie-universal-nuxt"
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios"], //"@nuxtjs/auth"],

  build: {},
};
