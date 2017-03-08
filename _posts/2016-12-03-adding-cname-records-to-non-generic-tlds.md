---
layout: default
title: Adding A/CNAME records to non-generic TLDs
category: blog
---

I rehauled the innards of my website from a static HTML/CSS page (managed by cPanel and FTP, no SSH access, no git, lol idk) to a Jekyll-powered blog hosted on GitHub Pages. It was straightforward. The [documentation](https://pages.github.com/) out there is good.

Directing my domain `ellen.li` to GitHub Pages was confusing though. GitHub requires that domain names use A records to point to GitHub Pages, yet my domain name provider does not support custom CNAME records.

This will not be an issue for you if you have a generic top-level domain (TLD) such as .com, .org, .net, but if you have a non-generic TLD such as .li or .to, A/CNAME record customization options are limited/non-existent.

I couldn't find a solution online, so I came up with my own. If you're facing this issue, here's my workaround. First, we need:

1. **A hosting plan that is bundled with cPanel access.** We will use [cPanel](https://en.wikipedia.org/wiki/CPanel) to middleman-manage our A/CNAME records. [ByetHost](https://byet.host/free-hosting) and [x10](https://x10hosting.com/) are a couple good free webhosts that come with cPanel.

2. **A domain name and access to name server modifications.** From your domain registrar's settings, point your domain name to your cPanel-enabled webhost. These settings are usually labeled 'Name Servers' or 'DNS Settings'. Your webhost will provide you with name servers, e.g. `ns1.webhost.com`.

3. **A/CNAME record(s) to add.** If you're setting up GitHub Pages, the [A records](https://help.github.com/articles/setting-up-an-apex-domain/#configuring-a-records-with-your-dns-provider) are `192.30.252.153` and `192.30.252.154`.

Now comes the A/CNAME records.

1. **Log into cPanel and open up the Advanced Zone Editor.**
{% include image.html name="advanced-zone-editor.png" caption="The Advanced Zone Editor in cPanel looks like this." %}

4. **Select your domain and enter the CNAME record you'd like to add.** In the 'Name' field, enter your domain followed by `.`, e.g. `ellen.li.`. I left the 'TTL' field with the default, which was `14400` but it might be different for you. For 'Type', it's an `A` record in my case, but CNAME is an option in the drowndown.

{% include image.html name="cname-record-details.png" caption="This is what you enter." width="495" %}
