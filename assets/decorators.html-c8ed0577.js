import{_ as n,W as a,X as s,a0 as t}from"./framework-9199a8c2.js";const e={},p=t(`<p>本质是对函数的封装，还是Callable。</p><h2 id="函数修饰符" tabindex="-1"><a class="header-anchor" href="#函数修饰符" aria-hidden="true">#</a> 函数修饰符</h2><p>修饰函数或类中的方法，对于类中方法来说，修饰符在类内和类外不影响。</p><h3 id="修饰符无参数" tabindex="-1"><a class="header-anchor" href="#修饰符无参数" aria-hidden="true">#</a> 修饰符无参数</h3><pre><code>  1. 被修饰无参数

    \`\`\`python
    def decorator(func):
        def wraper():
            print(&quot;before&quot;)
            func()
        return wraper

    @decorator
    def func():
        print(&quot;a&quot;)
        
    func()
    \`\`\`
    可以看出还是函数的函数，修饰符的参数为函数名func，用另一个函数wrapper对func进行封装，返回封装的函数wraper。实际上运行的是wraper(). 所以其实没有固定格式。写外边也行。

    \`\`\`python
    from typing import *
    def outside_wraper(func:Callable[[],None]):
        print(&quot;before&quot;)
        return func
        
    def decorator(func):
        return outside_wraper(func)

    @decorator
    def func():
        print(&quot;a&quot;)
        
    func()
    \`\`\`

  2. 被修饰有参数

    \`\`\`python
    from typing import *
        
    def decorator(func):
        def wraper(*args,**kwargs):
            print(&quot;before&quot;)
            func(*args,**kwargs)
        return wraper

    @decorator
    def func(a):
        print(a)
        
    func(1)
    \`\`\`
</code></pre><ol start="2"><li>修饰符有参数(不过是外套一层分析参数的函数)</li></ol><pre><code>\`\`\`python
from typing import *
    
def decorator(text):
    def parse(func):
        def wraper(*args,**kwargs):
            print(&quot;before&quot;)
            func(*args,**kwargs)
            print(text)
        return wraper
    return parse

@decorator(&quot;after&quot;)
def func(a):
    print(a)
    
func(1)
\`\`\`
</code></pre><h2 id="类修饰符" tabindex="-1"><a class="header-anchor" href="#类修饰符" aria-hidden="true">#</a> 类修饰符</h2><p>把 <strong>init</strong> 理解为最外层就好</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> typing <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">class</span> <span class="token class-name">Decorator</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>mode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>mode<span class="token operator">=</span>mode
    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Any<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">wrap</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">:</span> Any<span class="token punctuation">,</span> <span class="token operator">**</span>kwds<span class="token punctuation">:</span> Any<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwds<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;before&quot;</span><span class="token punctuation">)</span>
            ret<span class="token operator">=</span>func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kwds<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>mode<span class="token punctuation">)</span>
            <span class="token keyword">return</span> ret
        <span class="token keyword">return</span> wrap
    
    
<span class="token decorator annotation punctuation">@Decorator</span><span class="token punctuation">(</span><span class="token string">&quot;after&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    
test<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function r(c,u){return a(),s("div",null,o)}const l=n(e,[["render",r],["__file","decorators.html.vue"]]);export{l as default};
