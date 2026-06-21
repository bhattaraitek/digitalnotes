---
title: Connecting .np domain to github pages
date: 2026-06-20
draft: true
tags:
    - website
    - github
    - .np domain
---

I was trying connect my .np domain with the github page I created. Directly updating github custom domain did not work. 
Bascially, we need to manually set DNS **A** records pointing to Github IP address and CNAMEmaliased to github pages site *githubusername.github.io*.


We need to go to Cloudfare website and login to our account to do this process. Detail step in [this article](https://www.bidhansthapit.com.np/blog/post-npdomain-cloudflare-githubpages/) by Bishan Sthapit.

- 185.199.111.153
- 185.199.110.153
- 185.199.109.153
- 185.199.108.153
