import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: "首页",
        icon: "material-symbols:home",
        link: "/"
    },
    {
        text: "计算机科学",
        icon: "material-symbols-light:computer-outline",
        prefix: "/posts/computer_science/",
        children: [
            {
                text: "硬件",
                icon: "eos-icons:hardware-circuit",
                prefix: "hardware/",
                children: [

                ]
            },
            {
                text: "系统",
                icon: "fluent-mdl2:file-system",
                prefix: "system/",
                children: [
                    "architecture/",
                    "embedded/",
                ]
            },
            {
                text: "网络",
                icon: "iconoir:network",
                prefix: "network/",
                children: [
                    
                ]
            },
            {
                text: "计算理论",
                icon: "iconoir:network",
                prefix: "computing_theory/",
                children: [
                    "algorithm/",
                ]
            },
            {
                text: "计算方法",
                icon: "iconoir:network",
                prefix: "computing_method/",
                children: [
                    "computer_graphics/",
                    "artificial_intelligence/",
                ]
            },
            {
                text: "软件",
                icon: "eos-icons:software-outlined",
                prefix: "software/",
                children: [
                    "operating_system/",
                    "program_languages/",
                    "database/",
                    "applications/",
                ]
            },
        ]
    },
]);
