import type { CSSProperties } from "vue";

export interface HtmlItem {
  id: number;
  tag: string;
  description: string;
  example: string;
  mdn?: string;
  color?: string;
  style?: CSSProperties;
  class?: string[]
}

export const items: HtmlItem[] = [
  // 元数据和脚本
  {
    id: 1,
    tag: "html",
    description: "定义 HTML 文档",
    example: '<html lang="en">...</html>',
  },
  { 
    id: 19,
    tag: "head",
    description: "定义关于文档的信息",
    example: "<head></head>",
  },
  {
    id: 37,
    tag: "title",
    description: "为文档定义一个标题",
    example: "<title>My Blog</title>",
  },
  {
    id: 55,
    tag: "meta",
    description: "定义关于 HTML 文档的元信息",
    example: '<meta name="keywords" content="Blog" />',
  },
  {
    id: 73,
    tag: "base",
    description: "定义页面中所有链接的默认地址或默认目标",
    example: '<base url="https://example.com/blog/" />',
  },
  {
    id: 91,
    tag: "link",
    description: "定义文档与外部资源的关系",
    example: '<link href="/blog.css" rel="stylesheet" />',
  },
  {
    id: 109,
    tag: "style",
    description: "定义文档的样式信息",
    example: "<style>.title { color: red; }</style>",
  },
  {
    id: 56,
    tag: "template",
    description: "定义模板信息",
    example: '<template id="msg">Hi <b class="name" />.</template>',
  },
  {
    id: 74,
    tag: "slot",
    description: "定义操作，用于填充",
    example: '<slot name="count">0 comments</slot>',
  },
  {
    id: 92,
    tag: "noscript",
    description: "定义针对不支持客户端脚本的用户的替代内容",
    example: "<noscript><p>No JS.</p></noscript>",
  },
  {
    id: 110,
    tag: "script",
    description: "定义客户端脚本",
    example: "<script>alert(1)</script>",
  },

  // 文本语义
  {
    id: 20,
    tag: "span",
    description: "一个通用的行级容器，本身不具备特殊含义。",
    example: '<span class="name">Text</span>',
  },
  {
    id: 38,
    tag: "a",
    description: "定义一个链接",
    example: '<a href="#">Home</a>',
  },
  {
    id: 39,
    tag: "sub",
    description: "	定义下标文本",
    example: "H<sub>2</sub>O is the symbol for water.",
  },
  {
    id: 57,
    tag: "sup",
    description: "定义上标文本",
    example: "10<sup>2</sup> is 100.",
  },
  {
    id: 75,
    tag: "bdi",
    description: "允许您设置一段文本，使其脱离其父元素的文本方向设置",
    example: '<p dir="ltr">Include some <bdi>شوكولاتة</bdi></p>',
  },
  {
    id: 93,
    tag: "bdo",
    description: "定义文本的方向",
    example: '<bdo dir="rtl">Right to left</bdo>',
  },
  {
    id: 40,
    tag: "time",
    description: "定义一个日期/时间",
    example: '<time datetime="2017-01-01">2 天前</time>.',
  },
  {
    id: 58,
    tag: "data",
    description: "提供内容的机器可读和人类可读的值",
    example: '<p>Color: <data value="#f00">red</data>.</p>',
  },
  {
    id: 76,
    tag: "code",
    description: "定义计算机代码文本",
    example: "<p>Call <code>Date.now()</code>.</p>",
  },
  {
    id: 94,
    tag: "var",
    description: "定义文本的变量部分",
    example: "<var>x</var> = <var>y</var> - 10",
  },
  {
    id: 112,
    tag: "samp",
    description: "定义计算机代码样本",
    example: "<samp>Scan complete</samp> will be printed.",
  },
  {
    id: 41,
    tag: "abbr",
    description: "定义一个缩写",
    example: 'This is <abbr title="Hypertext...">HTML</abbr>.',
  },
  {
    id: 62,
    tag: "em",
    description: "定义强调文本",
    example: "<p>You <em>must</em> do it!</p>",
  },
  {
    id: 44,
    tag: "strong",
    description: "定义语气更为强烈的强调文本",
    example: "<p><strong>Warning:</strong> do not...</p>",
  },
  {
    id: 95,
    tag: "small",
    description: "定义小号文本",
    example: "<small>Copright, 2019</small>",
  },
  {
    id: 77,
    tag: "cite",
    description: "定义引用(citation)",
    example: "<q>Quoted text</q> <cite>— Author Name</cite>",
  },
  {
    id: 115,
    tag: "s",
    description: "定义加删除线的文本",
    example: "<p>Price: <s>$10.00</s> $5.00</p>",
  },
  {
    id: 79,
    tag: "q",
    description: "定义一个短的引用",
    example: 'She said <q cite="https://...">quotation.</q>',
  },
  {
    id: 111,
    tag: "kbd",
    description: "定义键盘文本",
    example: "Type <kbd>ls -l</kbd> to list files.",
  },
  {
    id: 61,
    tag: "i",
    description: "定义斜体文本",
    example: "<p>The term <i>déjà vu</i> means...</p>",
  },
  {
    id: 43,
    tag: "b",
    description: "定义粗体文本",
    example: "<p>Stack uses <b>HTML</b> and <b>CSS</b>.",
  },
  {
    id: 59,
    tag: "mark",
    description: "定义带有记号的文本",
    example: "Text with <mark>noteworthy phrase</mark>.",
  },
  {
    id: 42,
    tag: "ruby",
    description: "定义 ruby 注释（中文注音或字符）",
    example: "<ruby><rb>♥</rb><rt>Heart</rt></ruby>",
  },
  {
    id: 60,
    tag: "rb",
    description: "注音标识对象",
    example: "<ruby><rb>♥</rb><rt>Heart</rt></ruby>",
  },
  {
    id: 78,
    tag: "rt",
    description: "定义字符（中文注音或字符）的解释或发音",
    example: "<ruby><rb>♥</rb><rt>Heart</rt></ruby>",
  },
  {
    id: 96,
    tag: "rtc",
    description: "包含文字的语义注解，在 <rb> 元素中展示。",
    example: "<ruby>♥<rtc><rt>Heart</rt></rtc></ruby>",
  },
  {
    id: 114,
    tag: "rp",
    description: "定义不支持 ruby 元素的浏览器所显示的内容",
    example: "<ruby>♥<rp>(</rp><rt>Heart</rt><rp>)</rp></ruby>",
  },
  {
    id: 80,
    tag: "dfn",
    description: "定义定义项目",
    example: '<p><dfn id="def-html">HTML</dfn> is a standard for...</p>',
  },
  {
    id: 97,
    tag: "u",
    description: "定义下划线文本",
    example: 'Text with a <u class="error">mistaek</u>.',
  },
  {
    id: 98,
    tag: "ins",
    description: "定义被插入文本",
    example: "They <ins>should</ins> not do that.",
  },
  {
    id: 116,
    tag: "del",
    description: "定义被删除文本",
    example: "They <del>should</del> not do that.",
  },
  {
    id: 113,
    tag: "wbr",
    description: "规定在文本中的何处适合添加换行符",
    example: "1800-<wbr />123<wbr />456",
  },

  // 内容分组
  {
    id: 45,
    tag: "div",
    description: "定义文档中的节",
    example: "<div>...</div>",
  },
  {
    id: 46,
    tag: "hr",
    description: "定义水平线",
    example: "<p>Text</p><hr /><p>Text</p>",
  },
  {
    id: 47,
    tag: "br",
    description: "定义简单的折行",
    example: "<p>Name<br />Main Street<br />Cityville</p>",
  },
  {
    id: 64,
    tag: "p",
    description: "定义一个段落",
    example: "<p>Once upon a time...</p>",
  },
  {
    id: 65,
    tag: "pre",
    description: "定义预格式文本",
    example: "<pre>some.code()</pre>",
  },
  {
    id: 82,
    tag: "figcaption",
    description: "定义一个 caption for a <figure> element",
    example: "<figcaption>Caption for image.</figcaption>",
  },
  {
    id: 83,
    tag: "figure",
    description: "figure 标签用于对元素进行组合",
    example: "<figure><img /><figcaption /></figure>",
  },
  {
    id: 99,
    tag: "ol",
    description: "定义一个有序列表",
    example: "<ol><li>Item</li><li>Item</li></ol>",
  },
  {
    id: 100,
    tag: "ul",
    description: "定义一个无序列表",
    example: "<ul><li>Item</li><li>Item</li></ul>",
  },
  {
    id: 101,
    tag: "li",
    description: "定义一个列表项",
    example: "<li>Item</li>",
  },
  {
    id: 119,
    tag: "dd",
    description: "定义定义列表中项目的描述",
    example: "<dl><dt>Term</dt><dd>Definition...</dd></dl>",
  },
  {
    id: 117,
    tag: "dl",
    description: "定义一个定义列表",
    example: "<dl><dt>Term</dt><dd>Definition...</dd></dl>",
  },
  {
    id: 118,
    tag: "dt",
    description: "定义一个定义定义列表中的项目",
    example: "<dl><dt>Term</dt><dd>Definition...</dd></dl>",
  },
  {
    id: 63,
    tag: "blockquote",
    description: "定义块引用",
    example: "<blockquote>Quoted content.</blockquote>",
  },
  {
    id: 81,
    tag: "dialog",
    description: "定义一个对话框或者窗口",
    example: "<dialog><p>Please subscribe.</p></dialog>",
  },

  // 表单
  {
    id: 48,
    tag: "form",
    description: "定义一个 HTML 表单，用于用户输入",
    example: '<form action="/submit" method="post">...</form>',
  },
  {
    id: 49,
    tag: "fieldset",
    description: "定义围绕表单中元素的边框",
    example: "<fieldset><legend>Address</legend>...</fieldset>",
  },
  {
    id: 50,
    tag: "legend",
    description: "定义 fieldset 元素的标题",
    example: "<fieldset><legend>Name</legend>...</fieldset>",
  },
  {
    id: 121,
    tag: "meter",
    description: "定义度量衡。仅用于已知最大和最小值的度量",
    example: '<meter min="10" max="20" value="15">15 points</meter>',
  },
  {
    id: 66,
    tag: "select",
    description: "定义选择列表（下拉列表）",
    example: '<select name="currency"><option ... /><option ... /></select>',
  },
  {
    id: 67,
    tag: "optgroup",
    description: "定义选择列表中相关选项的组合",
    example: '<optgroup label="Countries"><option ... /></optgroup>',
  },
  {
    id: 68,
    tag: "option",
    description: "定义选择列表中的选项",
    example: '<option value="AU">Australia</option>',
  },
  {
    id: 102,
    tag: "input",
    description: "定义一个输入控件",
    example: '<input type="text" id="name" />',
  },
  {
    id: 103,
    tag: "label",
    description: "定义 input 元素的标注",
    example: '<label for="name">Name</label>',
  },
  {
    id: 104,
    tag: "datalist",
    description: "规定了 input 元素可能的选项列表",
    example: '<datalist id="tech"><option ... /></datalist>',
  },
  {
    id: 120,
    tag: "output",
    description: "定义一个计算的结果",
    example: '<output name="result">10</output>',
  },
  {
    id: 86,
    tag: "button",
    description: "定义按钮",
    example: '<button type="button">OK</button>',
  },
  {
    id: 84,
    tag: "textarea",
    description: "定义多行的文本输入控件",
    example: '<textarea name="msg">Content...</textarea>',
  },
  {
    id: 85,
    tag: "keygen",
    description: "规定用于表单的密钥对生成器字段",
    example: '加密: <keygen name="security">',
  },
  {
    id: 122,
    tag: "progress",
    description: "定义运行中的任务进度（进程）",
    example: '<progress value="60" total="100">60%</progress>',
  },

  // 交互
  {
    id: 29,
    tag: "command",
    description: "定义用户可能调用的命令（比如单选按钮、复选框或按钮）",
    example: '<command type="command">Save</command>',
  },
  {
    id: 30,
    tag: "summary",
    description: "定义一个可见的标题。 当用户点击标题时会显示出详细信息",
    example: "<details><summary>...</summary>...</details>",
  },
  {
    id: 31,
    tag: "details",
    description: "定义了用户可见的或者隐藏的需求的补充细节",
    example: "<details><p>...</p></details>",
  },
  {
    id: 32,
    tag: "menu",
    description: "定义菜单列表",
    example: "<menu><li>...</li></menu>",
  },

  // 文档语义
  {
    id: 33,
    tag: "h1",
    description: "定义 HTML 标题",
    example: "<h1>My Blog</h1>",
  },
  {
    id: 51,
    tag: "h2",
    description: "定义 HTML 标题",
    example: "<h2>Heading</h2>",
  },
  {
    id: 69,
    tag: "h3",
    description: "定义 HTML 标题",
    example: "<h3>Heading</h3>",
  },
  {
    id: 87,
    tag: "h4",
    description: "定义 HTML 标题",
    example: "<h4>Heading</h4>",
  },
  {
    id: 105,
    tag: "h5",
    description: "定义 HTML 标题",
    example: "<h5>Heading</h5>",
  },
  {
    id: 123,
    tag: "h6",
    description: "定义 HTML 标题",
    example: "<h6>Heading</h6>",
  },
  {
    id: 34,
    tag: "body",
    description: "定义文档的主体",
    example: "<body><h1>Welcome</h1>...</body>",
  },
  {
    id: 52,
    tag: "section",
    description: "定义了文档的某个区域",
    example: "<section><h1>Chapter 1</h1>...</section>",
  },
  {
    id: 70,
    tag: "nav",
    description: "定义导航链接",
    example: '<nav><a href="/">Home</a>...</nav>',
  },
  {
    id: 88,
    tag: "header",
    description: "定义一个文档头部部分",
    example: "<header><h1>Title</h1>Posted 1m ago</header>",
  },
  {
    id: 106,
    tag: "main",
    description: "定义文档的主要内容",
    example: "main><h1>About Me</h1>...</main>",
  },
  {
    id: 124,
    tag: "footer",
    description: "定义一个文档底部",
    example: "<footer>Copyright 2019</footer>",
  },
  {
    id: 35,
    tag: "article",
    description: "定义一个文章内容",
    example: "<article><h1>Blog Post</h1>...</article>",
  },
  {
    id: 53,
    tag: "aside",
    description: "定义其所处内容之外的内容",
    example: "<aside><h1>Related Links</h1>...</aside>",
  },
  {
    id: 71,
    tag: "address",
    description: "定义文档作者或拥有者的联系信息",
    example: '<address>Email us at <a href="..." /></address>',
  },

  // 表格
  {
    id: 18,
    tag: "table",
    description: "定义表格",
    example: "<table><tr><td>Cell</td></tr></table>",
  },
  {
    id: 36,
    tag: "caption",
    description: "定义表格标题",
    example: "<table><caption>Sales</caption>...</table>",
  },
  {
    id: 54,
    tag: "col",
    description: "定义表格中一个或多个列的属性值",
    example: '<colgroup><col /><col span="2" /></colgroup>',
  },
  {
    id: 72,
    tag: "colgroup",
    description: "定义表格中供格式化的列组",
    example: '<colgroup><col /><col span="2" /></colgroup>',
  },
  {
    id: 89,
    tag: "thead",
    description: "定义表格中的表头内容",
    example: "<thead>...</thead><tbody>...</tbody>",
  },
  {
    id: 107,
    tag: "tbody",
    description: "定义表格中的主体内容",
    example: "<table><tbody>...</tbody></table>",
  },
  {
    id: 125,
    tag: "tfoot",
    description: "定义表格中的表注内容（脚注）",
    example: "<thead>...</thead><tbody>...</tbody>",
  },
  {
    id: 90,
    tag: "tr",
    description: "定义表格中的行",
    example: "<tr><td>One</td><td>Two</td></tr>",
  },
  {
    id: 108,
    tag: "th",
    description: "定义表格中的表头单元格",
    example: "<tr><th>One</th><th>Two</th></tr>",
  },
  {
    id: 126,
    tag: "td",
    description: "定义表格中包含数据的单元格，它可以用作 <tr> 元素的子元素。",
    example: "<tr><td>One</td><td>Two</td></tr>",
  },

  // 嵌入内容
  {
    id: 145,
    tag: "img",
    description: "定义图像",
    example: '<img src="boat.png" alt="Sailing boat" />',
  },
  {
    id: 146,
    tag: "map",
    description: "定义图像映射",
    example: '<map name="hero"><area .../><area .../></map>',
  },
  {
    id: 147,
    tag: "area",
    description: "定义图像地图内部的区域",
    example: '<area shape="circle" href="/home" coords="..." />',
  },
  {
    id: 148,
    tag: "picture",
    description:
      "包含零或多个 <source> 元素和一个 <img> 元素来为不同场景提供图像",
    example: '<picture><source srcset="..." /></picture>',
  },
  {
    id: 149,
    tag: "canvas",
    description:
      "通过脚本（通常是 JavaScript）来绘制图形（比如图表和其他图像）",
    example: '<canvas id="display"></canvas>',
  },
  {
    id: 150,
    tag: "embed",
    description: "定义了一个容器，用来嵌入外部应用或者互动程序（插件）",
    example: '<embed type="..." src="movie.mov" />',
  },
  {
    id: 151,
    tag: "iframe",
    description: "定义内联框架",
    example: '<iframe src="https://..."></iframe>',
  },
  {
    id: 152,
    tag: "object",
    description: "定义嵌入的对象",
    example: '<object data="movie.swf" type="..."></object>',
  },
  {
    id: 153,
    tag: "param",
    description: "定义对象的参数",
    example: '<param name="something" value="..." />',
  },
  {
    id: 154,
    tag: "video",
    description: "定义一个音频或者视频",
    example: '<video controls src="m.mp4" poster="p.png" />',
  },
  {
    id: 155,
    tag: "audio",
    description: "定义声音，比如音乐或其他音频流",
    example: '<audio src="m.mp3" autoplay controls />',
  },
  {
    id: 156,
    tag: "source",
    description: "定义media元素 (<video> 和 <audio>)的媒体资源",
    example: '<source src="audio.ogg" type="video/ogg" />',
  },
  {
    id: 157,
    tag: "track",
    description: "track",
    example: '<track kind="subtitles" src="/captions.vtt" />',
  },
];

export const categories = [
  {
    id: 1,
    title: "元数据和脚本",
    color: "#08f",
    ids: [1, 19, 37, 55, 73, 91, 109, 56, 74, 92, 110],
  },
  {
    id: 2,
    title: "文本语义",
    color: "#66f",
    ids: [
      20, 38, 39, 40, 41, 42, 43, 44, 57, 58, 59, 60, 61, 62, 75, 76, 77, 78,
      79, 80, 93, 94, 95, 96, 97, 98, 111, 112, 113, 114, 115, 116,
    ],
  },
  {
    id: 3,
    title: "内容分组",
    color: "#f66",
    ids: [45, 46, 47, 63, 64, 65, 81, 82, 83, 99, 100, 101, 117, 118, 119],
  },
  {
    id: 4,
    title: "表单",
    color: "#3a9",
    ids: [68, 86, 104, 122, 48, 49, 50, 66, 67, 84, 85, 102, 103, 120, 121],
  },
  {
    id: 5,
    title: "互动",
    color: "#f90",
    ids: [29, 30, 31, 32],
  },
  {
    id: 6,
    title: "文档语义",
    color: "#a5a",
    ids: [33, 34, 51, 52, 69, 70, 87, 88, 105, 106, 123, 124, 35, 53, 71],
  },
  {
    id: 7,
    title: "表格",
    color: "#85a",
    ids: [18, 36, 54, 72, 90, 108, 126, 89, 107, 125],
  },
  {
    id: 8,
    title: "嵌入内容",
    color: "#b53",
    ids: [145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157],
  },
];
