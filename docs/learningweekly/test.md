之前在无数地方见过别人推荐这款markdown工具，但因为我一直使用自己搭建的[mindoc](http://www.eryajf.net/1614.html)作为在线的markdown工具，因此一直没有尝试过，直到最近，当我打算好好整理一下以前在[mybase](http://www.eryajf.net/1040.html)写过的一两百篇文档的时候，我打算找一个趁手好用的Windows本地markdown工具。

于是，在将近一周的时间里，我几乎尝试了市场上主流推荐的几款工具，尝试记录大概如下：

- [VNote](https://tamlok.github.io/vnote/zh_cn/)
- [Yu Writer](https://ivarptr.github.io/yu-writer.site/)
- [YNote](http://note.youdao.com/)
- [Yosoro](https://yosoro.coolecho.net/)
- [cmd_markdown](https://www.zybuluo.com/mdeditor)
- [马克飞象](https://maxiang.io/)
- [Tea](https://haocha.co/?ref=appinn#hero)
- [boosnote](https://boostnote.io/cn/)
- [Typora](https://www.typora.io/)

如上笔记工具（均可以点击跳转官网下载体验）可以说各有千秋，各有各的特色，但是从上到下，基本上都一一被我给pass掉了，有的一些是因为收费才能获得更好的体验，有的是因为在整体设计使用上不喜欢，有的则是因为书写文档的时候，不够方便简洁的策略，让我不够喜欢，而这一点，正是我选择一款笔记工具所看重的地方。

当然，最终没有使用如上其他的笔记工具，并不代表他们不好，也许只是因为他的好我还没有花时间去领略，`但是世界就是如此，有趣的灵魂成千上万，却只能够用一生的时间去读懂一个人`，当我花了相当一部分时间去了解了`Typora`之后，就深深的坠入了她的怀抱当中。

今日，我要特别为爱歌唱。

![f983c6b68e6eae00](/Users/liqilong/龙盘虎踞/Typora/typora-pic/f983c6b68e6eae00.jpg)

## 1，折腾主题。

安装一个工具之后，她的外貌总是能够决定我们的驻留与否，于是，安装了Typora之后的第一件事，就是折腾主题。因为默认的几个主题都不够称心好看。

官方提供了一个主题发布地：<http://theme.typora.io/>

这里可以看到不少好看的主题，另外我还在少数派那里寻觅到了两款主题，[Han](https://github.com/typora/typora-theme-gallery/blob/gh-pages/media/theme/han/han.css)和[少数派经典](https://cdn.sspai.com/minja/sspai.css.zip)，体验下来似乎不够称心如意。

其他地方还找到一些主题，不过因为都被我给重命名了，因此也不知道原本名称叫什么了，大家有兴趣想尝试不一样的，可以下载尝试。

- [个人整理几个主题包](https://github.com/eryajf/shellabout/blob/master/Typora%E4%B8%BB%E9%A2%98%E5%8C%85.zip)。

主题的更改非常简单：`文件`--->`偏好设置`--->`打开主题文件夹`--->`将新主题对应的css文件拷贝进来`--->`重启Typora`--->即可在主题当中看到对应添加的了。

我自己最终选择的御用主题是[VUE](http://theme.typora.io/theme/Vue/)，尝试体验了其他的主题，有一些要么是对代码块展示不友好，要么是对行内代码展示不友好，或者就是太过艳丽，反而不好看，基于这些考量，我最后选择了VUE这个符合个人使用习惯与审美的主题。

## 2，折腾快捷键。

事实上一开始我在选择工具的时候并没有特别青睐Typora，因为在段时间的体验中（了解不够深入）我发现，有不少我个人常用的快捷键，要么定义与之前习惯不同，要么就是压根儿没有，这让日常书写超爱使用快捷键的我，实在爱不起来。

不过随着时间的推移，我慢慢了解到，原来Typora她早已经提供了用户自定义快捷键的功能，多处了解之后，简单在下边说明一下自定义快捷键的方法。

`文件`--->`偏好设置`--->`打开高级设置`--->`编辑conf.user.json`

参考：[http://support.typora.io/Shortcut-Keys/#macos](http://support.typora.io/Shortcut-Keys/#macos)，注意文档中不同系统之间设置方法略有不同。

在如下区域进行自定义：

```json
 // Custom key binding, which will override the default ones.
  "keyBinding": {
    // for example: 
    // "Always on Top": "Ctrl+Shift+P"
	"代码块":"Shift+Alt+C",
	"代码":"Shift+Ctrl+C",
    "任务列表":"Shift+Alt+R",
	"无序列表":"Shift+Alt+W"
  },
```

如果你使用的Typora已经在偏好设置中将语言设置为了中文，那么这个地方是可以直接支持中文描述与快捷键对应的，我这里添加了三个自己经常使用的快捷键，你可以根据自己的需求进行自定义。

同样，添加保存之后，需要重启Typora生效。如果重启之后没有生效，大概有如下两个原因：

- 1，配置写入的时候需要注意全程英文，尤其注意双引号，冒号这些标点。
- 2，中文描述写的与系统不一致，此时可以跳回主界面，通过查看`段落`，`格式`，`视图`中的表述，来进行对应。

## 3，其他注意点。

在使用过程中，我还留意到其他一些值得注意的地方，这里分享一下我的心得。

- 1，以文件夹管理所有。

  在系统当中创建一个总文件夹，然后所有文档都在此文件夹之下，可以通过一些其他手段对这个文件夹进行云备份，当然，即便不备份，以后换了电脑，直接拷贝这个文件夹，打包带走，拎包入住，要的就是这个效果。

- 2，图片的管理。

  我注意到此工具在书写的时候，能够很方便的将图片引用进来，无论是直接复制，或者拖拽进来，都是非常方便的，不过还有一个可以注意的地方，那就是在`文件`--->`偏好设置`--->`图片插入`当中，可以定义图片的本地持久化策略，这一点，简直非常嗨皮，非常舒服了。

- 3，自动保存等。

  我们可以在`文件`--->`偏好设置`--->`系统`的配置当中，选中自动保存，以及打开软件后自动加载上次打开的目录，这样，就不用每次打开软件之后再重新找到原来的目录打开了。

## 4，关于语法。

markdown的语法在网上随便一百度就是一大堆，我也不特别介绍了，这里只记录整理一下，以方便需要的时候来查阅。

### 1，常用。

- 无序列表：Shift+Alt+W
- 有序列表：Ctrl+Shift+[
- 任务列表：-空格[空格]空格 文字或者Shift+Alt+R
- 标题：Ctrl+数字
- 表格：Ctrl+t
- 生成目录：[TOC]按回车
- 选中一整行：Ctrl+l
- 选中单词：Ctrl+d
- 选中相同格式的文字：Ctrl+e
- 跳转到文章开头：Ctrl+home
- 跳转到文章结尾：Ctrl+end
- 搜索：Ctrl+f
- 替换：Ctrl+h
- 引用：输入>之后输入空格或者Ctrl+Shift+q
- 代码块：Shift+Alt+C
- 加粗：Ctrl+b
- 倾斜：Ctrl+i
- 下划线：Ctrl+u
- 删除线：Alt+shift+5
- 插入图片：直接拖动到指定位置即可或者Ctrl+Shift+i
- 插入链接：Ctrl + k
- 增大列表缩进：Ctrl + [
- 减小列表缩进：Ctrl + ]
- 分隔线：三个小横杠然后回车

### 2，其他。

1. 下标

   `H~2~O` 和`X~long\ text~` 显示为 H~2~O 和X~long text~ 。

2. 上标

   `X^2^` 显示为 X^2^ 。

3. 表情

   首先输入一个 `:`然后输入关键词会进行扩展。:couple_with_heart_woman_man:

4. 注释

   也就是文内跳转的功能，在其他地方看到过，但是还没有找到对应的表达方法，知道的小伙伴可以告知我一下。

## 5，参考地址

- http://t.cn/AiCYoAlx
- http://t.cn/AiCYob2f
- http://t.cn/AiCYofT5
- http://t.cn/RnFpUiq