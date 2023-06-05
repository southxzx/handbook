import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

const md: any = new MarkdownIt({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return `<pre><code class="hljs ${lang}">${
        hljs.highlight(lang, code).value
      }</code></pre>`;
    }
    return `<pre><code class="hljs">${md.utils.escapeHtml(code)}</code></pre>`;
  },
});

const markDownToHtml = async (markdown: string) => {
  const result = await md.render(markdown);
  return result.toString();
};

export default markDownToHtml;
