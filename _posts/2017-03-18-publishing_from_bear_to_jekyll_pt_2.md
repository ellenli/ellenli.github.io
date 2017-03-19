---
title: Publishing from Bear to Jekyll (pt 2)
date: 2017-03-18 17:23:28 +0000
tags: [ side, public, side/bear ]
uuid: 87CB36F2-78CB-46C0-A00B-47C510331FDD-1329-00004B58E21B2FEB
layout: default
category: blog
---
In <a href="{{ "Publishing from Bear to Jekyll (pt 1)" | replace: " ", "_" | remove: "(" | remove: ")" | remove: "~" | remove: "!" | remove: "@" | remove: "#" | remove: "$" | remove: "&" | remove: ":" | remove: ";" | remove: "?" | remove: "," | remove: "." | downcase }}">Publishing from Bear to Jekyll (pt 1)</a> I wrote about the workflow I want to build. Now... to start building. 🙌

As far as I know, here's what I need to do:

1. Find raw posts from Bear (stored in iCloud)
2. Get the posts specifically tagged `#public`
3. Copy those posts to my website's repo and convert them to markdown files
4. Clean up the formatting
5. Commit/push to publish them
6. Detect when I add `#public` to a note in Bear; publish it to my site
7. Detect when I remove `#public` from a note; remove it from my site
8. Automate everything

I mentioned [pybear](https://github.com/redspider/pybear) in my last post. It was built to handle tasks 1 to 3 and once you have [python3](https://www.macobserver.com/tmo/article/how-to-upgrade-your-mac-to-python-3), it works great.

![](assets/posts/9217CC4C-9EF4-4BF0-A67C-74936AD6CE45-1329-00004DA099027B8E/FE5411FD-2C93-47AE-B122-1E70CC101164.png)
*Markdown files!*

Running `jekyll serve` doesn't render these as new pages though. My post files have to follow this format: `YYYY-MM-DD-post-title.md`. I fixed this (and other formatting issues) in [my own fork of pybear](https://github.com/ellenli/pybear).
