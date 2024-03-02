import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as o,e as c,a as n,b as a,d as e,f as i}from"./app-9d5258c8.js";const d={},p=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="on-linux-macos" tabindex="-1"><a class="header-anchor" href="#on-linux-macos" aria-hidden="true">#</a> On Linux/macOS</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--proto</span> <span class="token string">&#39;=https&#39;</span> <span class="token parameter variable">--tlsv1.2</span> https://sh.rustup.rs <span class="token parameter variable">-sSf</span> <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Rust依赖GCC/Clang,如果是Ubuntu可以装build-essential</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> build-essential
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="on-windows" tabindex="-1"><a class="header-anchor" href="#on-windows" aria-hidden="true">#</a> On Windows</h3>`,6),u={href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="rust操作" tabindex="-1"><a class="header-anchor" href="#rust操作" aria-hidden="true">#</a> Rust操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看版本</span>
rustc <span class="token parameter variable">--version</span>
<span class="token comment">#更新版本</span>
rustup update
<span class="token comment">#卸载</span>
rustup self uninstall
<span class="token comment">#查看API文档</span>
rustup doc
<span class="token comment">#编译文件</span>
rustc <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cargo-项目管理工具-操作" tabindex="-1"><a class="header-anchor" href="#cargo-项目管理工具-操作" aria-hidden="true">#</a> Cargo(项目管理工具)操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建项目</span>
<span class="token function">cargo</span> new <span class="token operator">&lt;</span>project-name<span class="token operator">&gt;</span> 
<span class="token comment">#检查错误</span>
<span class="token function">cargo</span> check
<span class="token comment">#编译项目,默认debug模式</span>
<span class="token function">cargo</span> build
<span class="token comment">#编译项目,指定release模式</span>
<span class="token function">cargo</span> build <span class="token parameter variable">--release</span>
<span class="token comment">#编译+运行项目</span>
<span class="token function">cargo</span> run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cargo.toml跟pyproject.toml类似，是项目配置文件，可以配置编译参数，依赖库等。</p><h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h2><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">// main.rs</span>
<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,8),v={href:"https://kaisery.github.io/trpl-zh-cn/",target:"_blank",rel:"noopener noreferrer"};function h(b,k){const s=t("ExternalLinkIcon");return r(),o("div",null,[c(" more "),p,n("p",null,[a("对WSL来说，和Linux安装一样。也可以去"),n("a",u,[a("官网"),e(s)]),a("下32/64位可执行程序。")]),m,n("ul",null,[n("li",null,[n("a",v,[a("Rust程序语言"),e(s)])])])])}const _=l(d,[["render",h],["__file","glance.html.vue"]]);export{_ as default};
