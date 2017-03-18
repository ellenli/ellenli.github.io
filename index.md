---
layout: default
title: Ellen Li
subtitle: me@ellen.li
js:
- lastfm
- strava
- greeting
---

<span id="hey">Hey,</span> I'm Ellen. I'm a Toronto-based product designer. I work at [Shopify](https://shopify.com). I also [sell posters](https://enty.co) for fun.

Outside of work, I like playing ultimate frisbee, working on my side projects and running around the city. I ran <span id="lastRun"></span> <a href="" id="lastRunDetails"><time class="timeago" datetime=""></time></a>.

Lately, I've been [experimenting with web integrations](https://github.com/ellenli/ellenli.github.io). I'm currently building one with [Bear](http://www.bear-writer.com). Stay tuned!

<img src="/assets/img/equalizer.gif"> I'm listening to <span id="nowPlaying"></span>.

# Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
