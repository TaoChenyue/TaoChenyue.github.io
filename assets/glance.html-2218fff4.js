import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as o,e as c,a as n,b as p,d as i,f as l}from"./app-9d5258c8.js";const r={},u=l(`<h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><ul><li>镜像(Image): 一个root文件系统，静态的，打包后的东西。</li><li>容器(Container): 在机器上运行后的Image实例，动态的，跑起来的东西。</li><li>仓库(Repository): 文件系统里的代码，承载真正的核心流程。</li></ul><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># see all commands</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="win11下docker-images-container-存储设置" tabindex="-1"><a class="header-anchor" href="#win11下docker-images-container-存储设置" aria-hidden="true">#</a> Win11下Docker Images/Container 存储设置</h2><p>docker容器越用越多，如果担心占满，可以把docker数据移动到别的盘。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># stop docker-desktop in windows and wsl</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,8),d={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"};function m(k,v){const a=e("ExternalLinkIcon");return t(),o("div",null,[c(" more "),u,n("ul",null,[n("li",null,[n("a",d,[p("Docker"),i(a)])])])])}const h=s(r,[["render",m],["__file","glance.html.vue"]]);export{h as default};
