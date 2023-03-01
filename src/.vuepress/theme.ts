import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar.js";
import { Sidebar } from "./sidebar.js";

export default hopeTheme({

  hostname: "https://taochenyue.zone",

  author: {
    name: "TaoChenyue",
    url: "https://github.com/TaoChenyue",
  },
  
  // iconAssets: "iconfont",
  iconAssets: "iconify",
  // iconAssets: "//at.alicdn.com/t/c/font_3868622_3zkbjynjawa.css",

  logo: "/logo.svg",

  repo: "TaoChenyue/TaoChenyue.github.io",

  darkmode:"disable",

  docsDir: "docs",

  blog: {
    description: "一个普通人",
    intro: "/about/",
    medias: {
      BiliBili: "https://space.bilibili.com/478989038",
      Gitee: "https://gitee.com/TaoChenyue",
      GitHub: "https://github.com/TaoChenyue",
      Qzone: "https://3038816978.qzone.qq.com/",
    },
  },

  navbar: Navbar,

  // sidebar
  sidebar: Sidebar,

  footer: "Powered by vuepress-theme-hope",

  displayFooter: true,

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  encrypt: {
    config: {
      // "/ai/": ["useless"],
    },
  },

  plugins: {
    blog: true,
    autoCatalog: true,

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "TaoChenyue/TaoChenyue.github.io",
      repoId: "R_kgDOIz1DFw",
      category: "Announcements",
      categoryId: "DIC_kwDOIz1DF84CT2Xz",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
