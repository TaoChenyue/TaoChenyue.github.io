import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,e as l,a as n,b as a,d as e,f as i}from"./app-9d5258c8.js";const u={},k=i(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 选择</span>
<span class="token keyword">select</span> 
<span class="token keyword">from</span> 
<span class="token comment">-- 别名</span>
<span class="token keyword">as</span>
<span class="token comment">-- 加减乘除 取平均值 连接文本</span>
<span class="token keyword">where</span>
<span class="token operator">&gt;</span> <span class="token operator">&lt;</span> <span class="token operator">!=</span> <span class="token operator">=</span><span class="token operator">=</span>
<span class="token operator">is</span> <span class="token boolean">null</span>
<span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span>
<span class="token comment">-- 模糊查询</span>
<span class="token operator">like</span>
<span class="token comment">-- 任意长度字符串</span>
<span class="token string">&quot;%&quot;</span>
<span class="token comment">-- 单个字符</span>
<span class="token string">&quot;_&quot;</span>
<span class="token comment">-- 逻辑运算</span>
<span class="token operator">and</span> 
<span class="token operator">or</span>
<span class="token operator">not</span>
<span class="token comment">-- 去重</span>
<span class="token keyword">distinct</span>
<span class="token comment">-- 排序</span>
<span class="token keyword">order</span> <span class="token keyword">by</span>
<span class="token comment">-- 升序</span>
<span class="token keyword">asc</span>
<span class="token comment">-- 降序</span>
<span class="token keyword">desc</span>
<span class="token comment">-- 截断</span>
<span class="token keyword">limit</span> 
<span class="token comment">-- 条件分支</span>
<span class="token keyword">case</span> <span class="token keyword">when</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">then</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">when</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">then</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">else</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">end</span> 
<span class="token comment">-- 时间函数</span>
<span class="token keyword">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">-- 字符串处理</span>
upper<span class="token punctuation">(</span><span class="token punctuation">)</span> lower<span class="token punctuation">(</span><span class="token punctuation">)</span> length<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">-- 列汇总计算</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">avg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">-- 分组</span>
<span class="token keyword">group</span> <span class="token keyword">by</span> 
<span class="token comment">-- 过滤</span>
<span class="token keyword">having</span>
<span class="token comment">-- 多表组合</span>
<span class="token keyword">cross</span> <span class="token keyword">join</span>
<span class="token comment">-- INNER JOIN</span>
<span class="token keyword">join</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">on</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">-- OUTTER JOIN</span>
<span class="token punctuation">(</span><span class="token keyword">left</span><span class="token operator">/</span><span class="token keyword">right</span><span class="token punctuation">)</span> <span class="token keyword">join</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">on</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">-- 子查询 即select的结果作为另一个select的输入</span>
<span class="token keyword">exists</span>
<span class="token operator">not</span> <span class="token keyword">exists</span>
<span class="token comment">-- 结果合并</span>
<span class="token keyword">union</span>
<span class="token keyword">union</span> <span class="token keyword">all</span>
<span class="token comment">-- 开窗函数</span>
<span class="token keyword">over</span><span class="token punctuation">(</span><span class="token keyword">partition</span> <span class="token keyword">by</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token comment">-- 累计开窗函数</span>
<span class="token keyword">over</span><span class="token punctuation">(</span><span class="token keyword">partition</span> <span class="token keyword">by</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token comment">-- 排名开窗函数</span>
rank<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">-- 连续排名开窗函数</span>
row_number<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">-- 前后行数据开窗函数</span>
lag<span class="token punctuation">(</span>column_name<span class="token punctuation">,</span><span class="token keyword">offset</span><span class="token punctuation">,</span>default_value<span class="token punctuation">)</span>
lead<span class="token punctuation">(</span>column_name<span class="token punctuation">,</span><span class="token keyword">offset</span><span class="token punctuation">,</span>default_value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,2),d={href:"https://dev.mysql.com/downloads/",target:"_blank",rel:"noopener noreferrer"},r={href:"http://sqlmother.yupi.icu",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const s=p("ExternalLinkIcon");return o(),c("div",null,[l(" more "),k,n("ul",null,[n("li",null,[n("a",d,[a("MySQL"),e(s)])]),n("li",null,[n("a",r,[a("鱼皮SQL闯关"),e(s)])])])])}const _=t(u,[["render",m],["__file","glance.html.vue"]]);export{_ as default};
