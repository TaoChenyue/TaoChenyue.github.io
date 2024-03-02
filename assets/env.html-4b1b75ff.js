import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as t,e as o,a as n,b as e,d as s,f as d}from"./app-9d5258c8.js";const r={},p=n("p",null,"Python由荷兰国家数学与计算机科学研究中心的吉多·范罗苏姆于1990年代初设计，提供了高效的高级数据结构，还能简单有效地面向对象编程，已被逐渐广泛应用于系统管理任务的处理和Web编程。",-1),v=d(`<h2 id="conda" tabindex="-1"><a class="header-anchor" href="#conda" aria-hidden="true">#</a> Conda</h2><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># version</span>
conda <span class="token parameter variable">--version</span>
<span class="token comment"># update </span>
conda update conda
<span class="token comment"># config</span>
conda config <span class="token parameter variable">--show</span>
<span class="token comment"># mirrors</span>
conda config <span class="token parameter variable">--add</span> channels your-url
<span class="token comment"># show channels</span>
conda config <span class="token parameter variable">--set</span> show_channel_urls <span class="token function">yes</span>
<span class="token comment"># clean useless cache (packages,tar)</span>
conda clean <span class="token parameter variable">-p</span>
conda clean <span class="token parameter variable">-t</span>
<span class="token comment"># clean all</span>
conda clean <span class="token parameter variable">--all</span> <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境管理" tabindex="-1"><a class="header-anchor" href="#环境管理" aria-hidden="true">#</a> 环境管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># show environments</span>
conda <span class="token function">env</span> list
conda info <span class="token parameter variable">-e</span> 
conda info <span class="token parameter variable">--envs</span>
<span class="token comment"># create environment</span>
conda create <span class="token parameter variable">-n</span> env-name <span class="token assign-left variable">python</span><span class="token operator">=</span>py-version
<span class="token comment"># activate environment</span>
conda activate env-name
<span class="token comment"># deactivate</span>
conda deactivate
<span class="token comment"># export and import environment</span>
conda <span class="token function">env</span> <span class="token builtin class-name">export</span> <span class="token parameter variable">--name</span> env_name <span class="token operator">&gt;</span> env.yml
conda <span class="token function">env</span> create <span class="token parameter variable">-f</span> env.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python版本管理" tabindex="-1"><a class="header-anchor" href="#python版本管理" aria-hidden="true">#</a> Python版本管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># exact version</span>
conda <span class="token function">install</span> <span class="token assign-left variable">python</span><span class="token operator">=</span>py-version
<span class="token comment"># latest version</span>
conda update python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="conda包管理" tabindex="-1"><a class="header-anchor" href="#conda包管理" aria-hidden="true">#</a> Conda包管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># see all packages</span>
conda list
<span class="token comment"># search package</span>
conda search package
<span class="token comment"># install package (with exact channel)</span>
conda <span class="token function">install</span> package <span class="token parameter variable">-c</span> channel_url
<span class="token comment"># update package</span>
conda update package
<span class="token comment"># uninstall package will uninstall dependencies too </span>
<span class="token comment">#--force command is not recommend, won&#39;t uninstall dependencies</span>
conda uninstall package <span class="token punctuation">(</span>--force<span class="token punctuation">)</span>
<span class="token comment"># remove some packages</span>
conda remove <span class="token parameter variable">--name</span> env_name package_name
<span class="token comment"># remove all packages and environment</span>
conda remove <span class="token parameter variable">--name</span> env_name <span class="token parameter variable">--all</span> <span class="token punctuation">(</span>-y<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遇到的特殊情况" tabindex="-1"><a class="header-anchor" href="#遇到的特殊情况" aria-hidden="true">#</a> 遇到的特殊情况</h3><p>conda包管理和pip包管理并不相同，在导出的env.yml中会列出pip中含有的包。<br> pip使用的--extra-index-url 并不会在env.yml中体现，需要手动添加。<br> eg:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> xx
<span class="token key atrule">channels</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> defaults
<span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">...</span>.
  <span class="token punctuation">-</span> <span class="token key atrule">pip</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>extra<span class="token punctuation">-</span>index<span class="token punctuation">-</span>url https<span class="token punctuation">:</span>//download.pytorch.org/whl/cu117
      <span class="token punctuation">-</span> torch==1.13.1+cu117
      <span class="token punctuation">-</span> torchaudio==0.13.1+cu117
      <span class="token punctuation">-</span> torchvision==0.14.1+cu117
      <span class="token punctuation">-</span> <span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,13),m={href:"https://repo.anaconda.com/archive/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://repo.anaconda.com/miniconda/",target:"_blank",rel:"noopener noreferrer"};function b(k,h){const a=c("ExternalLinkIcon");return l(),t("div",null,[p,o(" more "),v,n("ul",null,[n("li",null,[n("a",m,[e("AnaConda"),s(a)])]),n("li",null,[n("a",u,[e("MiniConda"),s(a)])])])])}const _=i(r,[["render",b],["__file","env.html.vue"]]);export{_ as default};
