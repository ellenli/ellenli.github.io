---
title: Publishing from Bear to Jekyll (pt 1)
date: 2017-03-07 22:56:41 +0000
tags: [ side, public, side/bear ]
uuid: F21A5C6B-0417-4E60-B3ED-D7452CD22230-1274-00003321522084F3
layout: default
category: blog
---
I love [Bear](http://bear-writer.com). The simplicity and approachability of the writing app has gotten me jotting more thoughts and ideas than ever before.

What if I could also use Bear to publish this writing?

For 2 reasons, I want the publishing process to be as passive and invisible as possible:

1. I don't want to deal with .md files, git or Jekyll
2. Lower barrier to publishing my writing -> more published writing

Ideally, when I want to publish a note, all I'd have to do from the Bear app is add `#public` to the note. Moments later, I'd see my note as a published post on my website. That'd be really cool.

At my time of writing this, I don't actually know how I'm gonna make this workflow dream come true. I did some preliminary research though.

Here's what I know:

- the Bear team said that [publishing isn't on their product roadmap](http://help.shinyfrog.net/discussions/bear/1500-couple-of-feature-requests-medium-and-zapier)
- [pybear](https://github.com/redspider/pybear) is a python library that accesses notes from Bear's database
- pybear has a `bear_to_jekyll` command but it's finicky
- the biggest challenge will be [working with CloudKit](https://www.reddit.com/r/bearapp/comments/5dgi8a/feature_request_zapier_ifttt_integration/)
- also, privacy and security

That's all I know. Here goes nothing.

Continued in <a href="{{ "Publishing from Bear to Jekyll (pt 2)" | replace: " ", "_" | remove: "(" | remove: ")" | remove: "~" | remove: "!" | remove: "@" | remove: "#" | remove: "$" | remove: "&" | remove: ":" | remove: ";" | remove: "?" | remove: "," | remove: "." | downcase }}">Publishing from Bear to Jekyll (pt 2)</a>.
