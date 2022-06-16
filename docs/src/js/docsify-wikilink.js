'use strict';

// Docsify plugin functions
function plugin(hook, vm) {
  hook.beforeEach(function (content) {
    return content
  });
  hook.afterEach(function (html, next) {
    // 解析成 html 后调用。
    // beforeEach 和 afterEach 支持处理异步逻辑
    var mdDom = document.createElement(
      'div');
    mdDom.innerHTML=html;
    var index = location.hash.lastIndexOf('/');
    var relativePath = location.hash.substring(0, index + 1);
    const list = [];
    list.push(...mdDom.getElementsByTagName('p'));
    list.push(...mdDom.getElementsByTagName('li'));

    for (var i=0; i < list.length; i++) {
      var para = list[i].innerHTML;
      const eachParaRes = para.replace(/\[\[([^\[\]]+)\]\]/g, function (content) {
        const innerContent = content.replace('[[', '').replace(']]', '');
        const linkAliasSps = innerContent.split('|'); // [link, alias]
        // [[link|showtext]] = 创建一个链接，指向内部的wiki页面'Link', 链接文字是'click here'.
        const link = linkAliasSps.length === 2 ? `${linkAliasSps[0].trim()}` : innerContent;
        var hashPath = link;
        var topic = '';
        var showText = innerContent;
        if (link.indexOf('#') != -1) {
          const linkTopicSps = link.split('#'); // link, topic
          hashPath = linkTopicSps[0];
          topic = `?id=${linkTopicSps[1]}`;
          showText = `${linkAliasSps[1].trim()}`;
        }
        if (hashPath.indexOf('/') === 0) {
          //absolute path
          return `<a href="#${hashPath}${topic}">${showText}</a>`
        } else {
          return `<a href="${relativePath}${hashPath}${topic}">${showText}</a>`
        }
      });
      list[i].innerHTML = eachParaRes;
    }

    next(mdDom.innerHTML);
  });
}

if (!window.$docsify) {
  console.error(' 这是一个 docsify 插件，请先引用 docsify 库！');
} else {
  window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
}
