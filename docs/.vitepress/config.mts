import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CatScript",
  description: "An automation framework designed for the iOS platform",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.ico",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/quick-start" },
      { text: "Modules", link: "/dev/mod" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Guide",
        collapsed: false,
        items: [
          { text: "Introducation", link: "/guide/introduction" },
          { text: "Installation", link: "/guide/installation" },
          { text: "Quick Start", link: "/guide/quick-start" },
        ],
      },
      {
        text: "Development",
        collapsed: false,
        items: [
          { text: "Programming Language", link: "/dev/lang" },
          { text: "Developer Tools", link: "/dev/developer-tools" },
          { text: "Code Structure", link: "/dev/code-structure" },
          { text: "Script Config", link: "/dev/script-config" },
          {
            text: "CatScript Modules",
            link: "/dev/mod",
            collapsed: false,
            items: [
              { text: "app", link: "/dev/mod/app" },
              { text: "device", link: "/dev/mod/device" },
              { text: "key", link: "/dev/mod/key" },
              { text: "screen", link: "/dev/mod/screen" },
              { text: "script", link: "/dev/mod/script" },
              { text: "sys", link: "/dev/mod/sys" },
              { text: "touch", link: "/dev/mod/touch" },
            ],
          },
          {
            text: "Python Standard Library",
            link: "/dev/std",
            collapsed: false,
            items: [
              { text: "json", link: "/dev/std/json" },
              { text: "math", link: "/dev/std/math" },
              { text: "pickle", link: "/dev/std/pickle" },
              { text: "threading", link: "/dev/std/threading" },
              { text: "urllib", link: "/dev/std/urllib" },
              {
                text: "More",
                link: "https://docs.python.org/3.10/library/index.html",
              },
            ],
          },
          {
            text: "API Reference",
            link: "/dev/api",
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: {
          svg: '<svg width="272px" height="285px" viewBox="0 0 272 285" fill="#2CB1BE"><g transform="translate(-64.000000, -58.000000)"><g transform="translate(64.000000, 24.000000)"><path class="path" d="M117.130767,39.1629993 C128.770147,32.2790002 143.229853,32.2790002 154.869233,39.1629993 L253.778324,97.6618279 C265.07147,104.34105 272,116.493859 272,129.623085 L272,223.376915 C272,236.506141 265.07147,248.65895 253.778324,255.338172 L154.869233,313.837001 C143.229853,320.721 128.770147,320.721 117.130767,313.837001 L18.2216764,255.338172 C6.92853043,248.65895 0,236.506141 0,223.376915 L0,129.623085 C0,116.493859 6.92853043,104.34105 18.2216764,97.6618279 L117.130767,39.1629993 Z M243.567944,222.888672 L243.567944,210.376905 C243.567944,209.185275 242.612015,208.219269 241.432817,208.219269 C241.049524,208.219269 240.673299,208.323536 240.343629,208.521125 L154.350686,260.061503 C152.081296,261.421675 150.689895,263.890394 150.689895,266.556732 L150.689895,278.96861 C150.689895,280.160239 151.645825,281.126246 152.825023,281.126246 C153.207699,281.126246 153.583342,281.022314 153.912648,280.825326 L239.901684,229.387176 C242.17417,228.027788 243.567944,225.557301 243.567944,222.888672 Z M202.815331,206.971659 L202.815331,194.307377 C202.815331,193.100937 201.862786,192.122924 200.687762,192.122924 C200.305413,192.122924 199.930129,192.228715 199.601383,192.42917 L154.33406,220.031194 C152.07478,221.408804 150.689895,223.907003 150.689895,226.604919 L150.689895,239.174351 C150.689895,240.380791 151.64244,241.358804 152.817464,241.358804 C153.198723,241.358804 153.572977,241.253615 153.90108,241.05424 L199.161494,213.551272 C201.426249,212.17507 202.815331,209.673694 202.815331,206.971659 Z M69.8376405,195.94766 L38.3616758,177.67005 C35.3718241,175.933889 31.524116,176.922091 29.7675793,179.877261 C29.2011107,180.830278 28.902439,181.91554 28.902439,183.020858 L28.902439,217.375332 C28.902439,223.976426 32.4388686,230.083979 38.1972027,233.427755 L69.6731674,251.705365 C72.6630191,253.441526 76.5107272,252.453324 78.2672639,249.498155 C78.8337325,248.545137 79.1324042,247.459875 79.1324042,246.354557 L79.1324042,212.000083 C79.1324042,205.398989 75.5959746,199.291436 69.8376405,195.94766 Z" id="Combined-Shape"></path></g></g></svg>',
        },
        link: "https://havoc.app/package/catscript",
      },
      {
        icon: "discord",
        link: "https://discord.gg/rbsPgs9DCt",
      },
    ],
  },
});
