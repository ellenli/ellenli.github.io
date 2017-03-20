---
title: Publishing from Bear to Jekyll (part 2)
date: 2017-03-18 17:23:28 +0000
tags: [ side, public, side/bear ]
uuid: 87CB36F2-78CB-46C0-A00B-47C510331FDD-1329-00004B58E21B2FEB
layout: default
category: blog
---
In <a href="{{ "Publishing from Bear to Jekyll (part 1)" | replace: " ", "_" | remove: "(" | remove: ")" | remove: "~" | remove: "!" | remove: "@" | remove: "#" | remove: "$" | remove: "&" | remove: ":" | remove: ";" | remove: "?" | remove: "," | remove: "." | downcase }}">Publishing from Bear to Jekyll (part 1)</a> I wrote about the workflow I want to build. Now to build. 🙌

As far as I know, here are my implementation tasks:

1. Find notes from Bear (stored in iCloud) tagged `#public`
2. Copy those posts to my website's repo and convert them to markdown files
3. Clean up the formatting
4. Commit/push to publish them
5. Automatic publishing for all new `#public` notes
6. Automatic deletion when  `#public` is removed from any note

I mentioned [pybear](https://github.com/redspider/pybear) in my last post. Setup was finicky but only because I didn't know to upgrade to Python 3. Pro-tip: [get Python 3](https://www.python.org/downloads/mac-osx/).

Good news: pybear handles implementation tasks 1 and 2! Behold: files!

![](assets/posts/9217CC4C-9EF4-4BF0-A67C-74936AD6CE45-1329-00004DA099027B8E/FE5411FD-2C93-47AE-B122-1E70CC101164.png)
*Woohoo!*

But Jekyll wasn't publishing them because the file names don't follow the format I'm using: `YYYY-MM-DD-post-title.md`. So I tweaked file name formatting and a slew of other formatting things (headings, images, links and tags) in [my fork of pybear](https://github.com/ellenli/pybear).

The tweaking was non-trivial. It's tricky using regex to handle formatting. Check out my [bear_to_jekyll.py](https://github.com/ellenli/pybear/blob/master/bear_to_jekyll.py) if you're curious. So many special characters...

Anyway, I'm happy to say that after a lot of trial and error, implementation tasks 3 and 4 are done! ✌️

A heads up for anyone interested in using pybear: I adjusted it to fit *my* Jekyll workflow. Out of the box, it probably won't fit yours so get ready for some fun regex.

Next up is building automation.

Here's what I know:

- after a folder/file is changed, [inotifywait](http://stackoverflow.com/questions/420143/making-git-auto-commit) triggers system actions
- [gitwatch](https://github.com/nevik/gitwatch) automatically commits changed files to a Github repo
- Zapier (a workflow automator) has an [integration with Github](https://zapier.com/zapbook/github/)

These leads are strong. Still, I feel clueless. Iunno how I'm gonna go about testing, privacy or security (and they're all *super* important).

The fun continues in <a href="{{ "Publishing from Bear to Jekyll (part 3)" | replace: " ", "_" | remove: "(" | remove: ")" | remove: "~" | remove: "!" | remove: "@" | remove: "#" | remove: "$" | remove: "&" | remove: ":" | remove: ";" | remove: "?" | remove: "," | remove: "." | downcase }}">Publishing from Bear to Jekyll (part 3)</a>! ... which might be a broken link because at my time of writing this, part 3 is an empty Bear note. Heh.

I'm working on it! Part 3 will be published ~~automagically~~ automatically once automation works. Stay tuned! ✨
