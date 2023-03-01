import{_ as c,W as l,X as p,Y as a,Z as n,$ as s,a1 as r,a0 as e,D as i}from"./framework-9199a8c2.js";const d={},u=e('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><strong>Docker</strong>本意<strong>集装箱</strong>，我的理解就是把系统打包装箱进一个地方。能够很好的隔离同一机器上的不同系统，同时不影响硬件使用。</p><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><ul><li>镜像(Image): 一个root文件系统，静态的，打包后的东西。</li><li>容器(Container): 在机器上运行后的Image实例，动态的，跑起来的东西。</li><li>仓库(Repository): 文件系统里的代码，承载真正的核心流程。</li></ul><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h2>',5),m={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},k=e(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># see all commands</span>
<span class="token function">docker</span>
<span class="token comment"># see help info of command</span>
<span class="token function">docker</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span> <span class="token parameter variable">--help</span>
<span class="token comment"># Image</span>
<span class="token comment"># list all images</span>
<span class="token function">docker</span> images
<span class="token comment"># get image from remote</span>
<span class="token function">docker</span> pull <span class="token punctuation">[</span>image-name<span class="token punctuation">]</span>
<span class="token comment"># build image from .dockerfile</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span>:<span class="token punctuation">[</span>version<span class="token punctuation">]</span> <span class="token punctuation">[</span>project-dir<span class="token punctuation">]</span> <span class="token parameter variable">-f</span> <span class="token punctuation">[</span>dockerfile-path<span class="token punctuation">]</span>
<span class="token comment"># remove image</span>
<span class="token function">docker</span> rmi <span class="token punctuation">[</span>image-name<span class="token punctuation">]</span>
<span class="token comment"># Container</span>
<span class="token comment"># list all containers</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
<span class="token comment"># run image as a container</span>
<span class="token function">docker</span> run <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>image-name<span class="token punctuation">]</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span> <span class="token parameter variable">--name</span> <span class="token punctuation">[</span>container-name<span class="token punctuation">]</span>
<span class="token comment"># rename a container</span>
<span class="token function">docker</span> <span class="token function">rename</span> <span class="token punctuation">[</span>container-name-old<span class="token punctuation">]</span> <span class="token punctuation">[</span>container-name-new<span class="token punctuation">]</span>
<span class="token comment"># update image from a container</span>
<span class="token function">docker</span> commit <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&quot;commit-message&quot;</span> <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">&quot;author&quot;</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token punctuation">[</span>target-image:tag<span class="token punctuation">]</span>
<span class="token comment"># start/stop/restart container</span>
<span class="token function">docker</span> start/stop/restart <span class="token punctuation">[</span>container<span class="token punctuation">]</span>
<span class="token comment"># export container</span>
<span class="token function">docker</span> <span class="token builtin class-name">export</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span>target-file<span class="token punctuation">]</span>
<span class="token comment"># import container</span>
<span class="token function">docker</span> <span class="token function">import</span> <span class="token punctuation">[</span>url/path<span class="token punctuation">]</span> <span class="token punctuation">[</span>container-name:tag<span class="token punctuation">]</span>
<span class="token comment"># remove container</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token punctuation">[</span>container<span class="token punctuation">]</span>
<span class="token comment"># retag container</span>
<span class="token function">docker</span> tag <span class="token punctuation">[</span><span class="token punctuation">(</span>container-name:tag<span class="token punctuation">)</span>_old<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>container-name<span class="token punctuation">)</span>:tag_new<span class="token punctuation">]</span>
<span class="token comment"># Repository</span>
<span class="token comment"># login/logout docker hub</span>
<span class="token function">docker</span> login/logout
<span class="token comment"># push to hub</span>
<span class="token function">docker</span> push <span class="token punctuation">[</span>container<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile文件-build-image" tabindex="-1"><a class="header-anchor" href="#dockerfile文件-build-image" aria-hidden="true">#</a> dockerfile文件(build Image)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM
RUN
ENTRYPOINT
CMD

COPY
ADD

ENV
ARG
LABEL

VOLUME
EXPOSE

<span class="token environment constant">USER</span>
WORKDIR

ONBUILD
HEALTHCHECK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指令格式<code>INSTRUCTION arguments</code>，推荐指令大写参数小写以便于理解。 文件必须以<code>FROM</code>指令开始，<code>#</code>用于注释</p><h2 id="win11下docker-images-container-存储设置" tabindex="-1"><a class="header-anchor" href="#win11下docker-images-container-存储设置" aria-hidden="true">#</a> Win11下Docker Images/Container 存储设置</h2><p>docker容器越用越多，如果担心占满，可以把docker数据移动到别的盘。</p>`,7),v={href:"https://blog.csdn.net/u013948858/article/details/111464534#:~:text=%E3%80%90Docker%E3%80%91win10%E4%B8%8A%E4%BF%AE%E6%94%B9docker%E7%9A%84%E9%95%9C%E5%83%8F%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E4%BD%8D%E7%BD%AE%EF%BC%88%E4%B9%9D%EF%BC%89-%20%E9%80%9A%E8%BF%87WSL2%E4%BF%AE%E6%94%B9%201%201.%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF%20window%2010%20v1909%20%E5%B0%8F%E7%89%88%E6%9C%AC%E5%8F%B7,%E4%BF%AE%E6%94%B9%E5%89%8D%E8%AE%B0%E5%BD%95%20C%3A%5CUsers%5Cjayzhen%5CAppData%5CLocal%5CDocker%5Cwsl%20%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F%EF%BC%88%E5%A4%A7%E4%BA%8E2G%EF%BC%89%20...%205%205.%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99%20%E4%BB%80%E4%B9%88%E6%98%AFLinux%E7%9A%84Windows%E5%AD%90%E7%B3%BB%E7%BB%9F%EF%BC%9F%20",target:"_blank",rel:"noopener noreferrer"},b=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># stop docker-desktop in windows and wsl</span>
wsl <span class="token parameter variable">-t</span> docker-desktop
wsl <span class="token parameter variable">-t</span> docker-desktop-data
<span class="token comment"># export data</span>
wsl <span class="token parameter variable">--export</span> docker-desktop-data <span class="token punctuation">[</span>target-file<span class="token punctuation">]</span>
<span class="token comment"># unregister old data</span>
wsl <span class="token parameter variable">--unregister</span> docker-desktop-data
<span class="token comment"># import data</span>
wsl <span class="token parameter variable">--import</span> docker-desktop-data <span class="token punctuation">[</span>mount-dir<span class="token punctuation">]</span> <span class="token punctuation">[</span>target-file<span class="token punctuation">]</span> <span class="token parameter variable">--version</span> <span class="token number">2</span>
<span class="token comment"># restart docker-desktop in windows</span>
<span class="token comment"># if everything is ok, you can delete the target-file you created</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(h,g){const t=i("ExternalLinkIcon"),o=i("RouterLink");return l(),p("div",null,[u,a("p",null,[a("a",m,[n("官方文档"),s(t)]),n(" 桌面版、服务器版都可。 Windows系统安装需要先准备Linux内核（"),s(o,{to:"/tools/develop/wsl.html"},{default:r(()=>[n("WSL")]),_:1}),n("）。")]),k,a("p",null,[a("a",v,[n("参考文章"),s(t)])]),b])}const B=c(d,[["render",E],["__file","docker.html.vue"]]);export{B as default};
