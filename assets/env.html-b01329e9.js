import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c,e as l,a as n,b as t,d as r,f as o}from"./app-9d5258c8.js";const m={},d=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># scoop安装msys2</span>
scoop <span class="token function">install</span> msys2
<span class="token comment"># msys2初始化</span>
msys2
<span class="token comment"># 进入mingw64环境</span>
mingw64
<span class="token comment"># 更新包</span>
pacman <span class="token parameter variable">-Syu</span>
<span class="token comment"># 搜索gcc</span>
pacman <span class="token parameter variable">-Ss</span> gcc
<span class="token comment"># 把工具链装上</span>
pacman <span class="token parameter variable">-S</span> xxxx_toolchain
<span class="token comment"># 查看gcc版本</span>
gcc <span class="token parameter variable">-v</span>
<span class="token comment"># 安装Xmake</span>
pacman <span class="token parameter variable">-Ss</span> Xmake
pacman <span class="token parameter variable">-S</span> xxx_Xmake
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Xmake编译本地包遇到的问题</p><p>#include_next与-isystem冲突问题<br> add_requires(&quot;...&quot;,{external=false})</p></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,3),p={href:"https://scoop.sh/",target:"_blank",rel:"noopener noreferrer"};function v(u,b){const e=s("ExternalLinkIcon");return i(),c("div",null,[l(" more "),d,n("ul",null,[n("li",null,[n("a",p,[t("Scoop"),r(e)])])])])}const h=a(m,[["render",v],["__file","env.html.vue"]]);export{h as default};
