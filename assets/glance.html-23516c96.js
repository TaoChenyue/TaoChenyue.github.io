import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as l,e as o,a as n,b as s,d as a,f as d}from"./app-9d5258c8.js";const c={},u=d(`<h2 id="安装termux" tabindex="-1"><a class="header-anchor" href="#安装termux" aria-hidden="true">#</a> 安装Termux</h2><ol><li>在Android机安装Fdroid</li><li>用Fdroid安装Termux</li><li>准备一个VNC软件，Fdroid里面就有，比如AVNC</li></ol><h2 id="termux上的可视化界面" tabindex="-1"><a class="header-anchor" href="#termux上的可视化界面" aria-hidden="true">#</a> Termux上的可视化界面</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 更换一个好的镜像,添加仓库地址</span>
termux-change-repo
pkg <span class="token function">install</span> root-repo x11-repo
<span class="token comment">## 准备git，并关闭sslverify验证</span>
pkg <span class="token function">install</span> <span class="token function">git</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.sslverify <span class="token boolean">false</span>
<span class="token comment">## clone Github上的仓库</span>
<span class="token function">git</span> clone https://github.com/Yisus7u7/termux-desktop-xfce.git <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment">## 网络不好的话,用github镜像地址,kgithub,ghproxy都行</span>
<span class="token builtin class-name">cd</span> termux-desktop-xfce
<span class="token function">nano</span> boostrap.sh
./boostrap.sh
./startdesktop.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用linux发行版" tabindex="-1"><a class="header-anchor" href="#使用linux发行版" aria-hidden="true">#</a> 使用Linux发行版</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> proot-distro
<span class="token comment">## 这里可能要镜像，可以在android里面开个代理，比如clash for android</span>
proot-distro <span class="token function">install</span> ubuntu
proot-distro login ubuntu
<span class="token comment">## enjoy</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,7),p={href:"https://f-droid.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://termux.dev/cn/",target:"_blank",rel:"noopener noreferrer"};function h(v,b){const e=r("ExternalLinkIcon");return t(),l("div",null,[o(" more "),u,n("ul",null,[n("li",null,[n("a",p,[s("F-Droid开源应用商店"),a(e)])]),n("li",null,[n("a",m,[s("Termux终端模拟器"),a(e)])])])])}const x=i(c,[["render",h],["__file","glance.html.vue"]]);export{x as default};
