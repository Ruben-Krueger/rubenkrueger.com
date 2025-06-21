---
title: 'How I Made This'
date: "2021-09-02"
description: 'A short explanation on how I made this website.'
image: images/laptop-code.jpg
draft: false
category: tutorial
tags: ['tutorial', 'tech', 'web']
---

_Image credit: James Harrison / Unsplash_

There are no shortage of front-end frameworks, no-code website builders, and website templates available. Each has their strengths and weaknesses, and I've used almost all of them: Wix, Squarespace, React, Vue, Bootstrap, to name a few. On my previous personal websites, I would use a template like [this](https://github.com/tailwindtoolbox/Profile-Card) and customize it.

However, this approach does not lend itself to making a blog, where content needs to be served dynamically. Moreover, I wanted an easy method of automated deployments from a git repo. Thus, a couple weeks ago I decided to try something new.

## Building the site: Hugo

Before this site, there was one major website development tool that I had never used: [static site generators](https://www.cloudflare.com/learning/performance/static-site-generator/). Static site generators are tools that build websites from templates and user-created data (generally Markdown). Static site generators are a common way of making blogs, API documentation, and more. There are a large number of static site generators out there, but [Jekyll](https://jekyllrb.com/) and [Hugo](https://gohugo.io/) are among the most popular. I was too busy (read: lazy) to [fix my Ruby environment](https://stackify.com/install-ruby-on-your-mac-everything-you-need-to-get-going/) on my Mac, so I went with Hugo, which is powered by Go.

To get started with Hugo, follow these [instructions](https://gohugo.io/getting-started/quick-start/). Once you have created a Hugo website, you will be presented with this folder structure:

![Hugo default folder structure](/images/hugo-default.png)

Files like images will be stored in `/static` and `/content` is where you write markdown, which is styled according to your template. Next, you will need to add a theme. I use the [Winston](https://github.com/zerostaticthemes/hugo-winston-theme) theme, but there are a lot of other great options. The final generated HTML and other resources gets put into `/public`, which will ultimately be served to the client. After you do run `hugo`, the deployment-ready site is available there.

> The themes available will make or break your website. When deciding on a static site generator, first pick one with a template that you like.

## Deploying

I used [Netlify](https://www.netlify.com/) to host this website, as there is a great free tier and easy deployments using Github. Once you have it deployed, it will be available at a url like https://pensive-gates-f6191a.netlify.app. While pensive-gates-f6191a.netlify.app is a great name, it's not the easiest to remember. Thus, you can follow [these steps](https://docs.netlify.com/domains-https/custom-domains/) to add a custom domain.

## Conclusion

Building websites can be confusing and frustrating, which has led to the profileration of no-code sites like Webflow and Wix. Overall, I have found Hugo to be an excellent static site generator and will be using it for more projects.
