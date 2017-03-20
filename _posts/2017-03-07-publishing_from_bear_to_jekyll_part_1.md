---
title: Publishing from Bear to Jekyll (part 1)
date: 2017-03-07 22:56:41 +0000
tags: [ side, public, side/bear ]
uuid: F21A5C6B-0417-4E60-B3ED-D7452CD22230-1274-00003321522084F3
layout: default
category: blog
---
I love [Bear](http://bear-writer.com). The simplicity and approachability of the writing app has gotten me jotting more thoughts and ideas than ever before.

What if I could also use Bear to publish these notes?

For 2 reasons, I want the publishing process to be as passive and invisible as possible:

1. I have content (in Bear) to share
2. I don't want to deal with .md files, git or Jekyll to publish my notes
3. Lower barrier to publishing → more published notes!

Ideally, when I want to publish a note, all I'd have to do from the Bear app is add `#public` to the note to see it as a published post on my website right after. That'd be really cool.

At my time of writing this, I don't actually know how I'm gonna make this workflow dream come true. I did some googling though. 😅

Here's what I know:

- the Bear team said that [publishing isn't on their product roadmap](http://help.shinyfrog.net/discussions/bear/1500-couple-of-feature-requests-medium-and-zapier)
- [pybear](https://github.com/redspider/pybear) is a python library that accesses notes from Bear's database
- pybear has a `bear_to_jekyll` command which could be very useful
- privacy and security will make automation hard

That's all. Here goes nothing.

Continued in <a href="{{ "Publishing from Bear to Jekyll (part 2)" | replace: " ", "_" | remove: "(" | remove: ")" | remove: "~" | remove: "!" | remove: "@" | remove: "#" | remove: "$" | remove: "&" | remove: ":" | remove: ";" | remove: "?" | remove: "," | remove: "." | downcase }}">Publishing from Bear to Jekyll (part 2)</a>.
