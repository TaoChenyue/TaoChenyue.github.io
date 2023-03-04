import{_ as p,W as o,X as l,Y as n,Z as s,$ as e,a0 as t,D as c}from"./framework-9199a8c2.js";const i={},u={href:"https://www.runoob.com/django/django-intro.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="快速启动一个demo" tabindex="-1"><a class="header-anchor" href="#快速启动一个demo" aria-hidden="true">#</a> 快速启动一个Demo</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
pip <span class="token function">install</span> django
<span class="token comment"># 创建项目，比如backend</span>
django-admin startproject backend
<span class="token builtin class-name">cd</span> backend
<span class="token comment"># settings.py 管理模板、权限、时区、应用等</span>
<span class="token comment"># urls.py 管理路由</span>
<span class="token comment"># 移植数据库</span>
python manage.py migrate
<span class="token comment"># 启动服务</span>
python manage.py runserver <span class="token number">8081</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个view" tabindex="-1"><a class="header-anchor" href="#创建一个view" aria-hidden="true">#</a> 创建一个view</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个项目，比如temp</span>
django-admin startproject temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 在views.py创建一个处理函数</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> JsonResponse
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> JsonResponse<span class="token punctuation">(</span>data<span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;Hello world&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># 在temp下创建urls.py</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path
<span class="token keyword">from</span> <span class="token punctuation">.</span> <span class="token keyword">import</span> views

urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span>
    path<span class="token punctuation">(</span><span class="token string">&#39;hello/&#39;</span><span class="token punctuation">,</span>views<span class="token punctuation">.</span>hello<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token comment"># 在backend下的urls.py包含路径</span>
path<span class="token punctuation">(</span><span class="token string">&#39;temp/&#39;</span><span class="token punctuation">,</span>include<span class="token punctuation">(</span><span class="token string">&#39;temp.urls&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 再次启动服务即可在 temp/hello/ 看到信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r={href:"http://views.py",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>Methods: + GET 不给数据直接看 + POST 给数据完看返回值 + DELETE 删除一个对象 + PUSH 更新一个对象，需要对象的全部信息 + PATCH 更新一个对象，需要对象的部分信息</p><h2 id="创建一个model" tabindex="-1"><a class="header-anchor" href="#创建一个model" aria-hidden="true">#</a> 创建一个model</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 在models.py 中添加</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> models
<span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment"># 在settings.py 中的INSTALL_APPS 中添加 &#39;temp&#39;</span>
<span class="token comment"># 移植以后，数据库就会认得这个Test表</span>
python manage<span class="token punctuation">.</span>py makemigrations temp
python manage<span class="token punctuation">.</span>py migrate temp
<span class="token comment"># 增: 实例化一个Test对象，修改属性后，save即可</span>
a<span class="token operator">=</span>Test<span class="token punctuation">(</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">&quot;a&quot;</span>
a<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 查：filter，get</span>
obj<span class="token operator">=</span>Test<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 返回列表</span>
obj<span class="token operator">=</span>Test<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 返回个体，找不到会报错</span>
<span class="token comment"># 删：获取Test对象后，delete即可</span>
obj<span class="token punctuation">.</span>delete<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 改：获取Test对象后，修改属性后save</span>
obj<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">&quot;b&quot;</span>
obj<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">### </span>

<span class="token comment">## Django Rest Framework</span>
<span class="token comment">### </span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(v,b){const a=c("ExternalLinkIcon");return o(),l("div",null,[n("blockquote",null,[n("p",null,[n("a",u,[s("Django 是一个由 Python 编写的一个开放源代码的 Web 应用框架。"),e(a)])])]),d,n("p",null,[n("a",r,[s("views.py"),e(a)]),s(" 中的每个函数的输入都是 django.http.HttpRequest对象，包含name,head,body,method等方法。")]),m])}const g=p(i,[["render",k],["__file","Django.html.vue"]]);export{g as default};
