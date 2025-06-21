---
title: 'The Failure of Remote Work'
date: "2021-09-13"
description: 'Another perspective on remote work, using some computer science.'
caption: 'Photo credit to Unsplash'
image: images/remote-work-effects.jpg
draft: false
category: opinion
tags: ['remote work', 'computer science']
---

When you are able to reach anyone in your remote organization instantly through Slack or email, shouldn't barriers across teams and locations disappear? Shouldn't information sharing increase and ideas be generated more easily? One would think so — is this not a benefit of working in a virtual environment?

Whether or not knowledge workers will return back to the office is hotly debated right now. Major companies like Apple and Google have delayed their plans to return back to office, and regardless of the ultimate outcome, our relationship to where we work has fundamentally been changed. A common argument in favor of remote work is that since workers can be just as productive at home, why pay the time and expense of working from a cubicle?

A [recent study by Microsoft](https://www.nature.com/articles/s41562-021-01196-4) has complicated such claims. Researchers analyzed communication data of Microsoft employees, such as time spent in meetings and emails sent, before and after the pandemic lockdowns in March of 2020. In short, they found that the groups of people who worked together became "more static and siloed" and that this may impede information-sharing across the company. To make sense of this result, we will turn to a foundation of computer science: graphs.

In computer science, a graph is a data structure represented by nodes (circles) and edges (lines). These graphs can model a wide range of entities: cities and roads, people and friendships, computers and ethernet cables. In the below graph, we have "Tech-R-Us," a hypothetical tech company. Each node (circle) represents an employee and each edge (line) represents a personal relationship — two people who meet about increasing conversions, for instance.

![Graph ](/images/tech-r-us-ideal.png)

In the above scenario, everyone knows everyone else, or at least knows someone who knows that other person. (Of course, in a company with 180,000 employees like Microsoft, this would be impossible). If someone on the mobile development team needs to understand why a server has a certain bug, it will not take them long to find someone on the server team who knows why.

According to the Microsoft study, when the remote work revolution happened, Tech-R-Us would look more like this:

![Graph in remote work environment](/images/tech-r-us-remote.png)

In other words, each team is interacting less with the other teams. And when workers do interact, it tends to be over asynchronous methods, like email. With these observations, they make the conclusion information sharing will be impeded. Why does information sharing matter? Knowledge work is all about information sharing and the generation of ideas.

Without a doubt, remote workers can be very productive. But this is not so clear over the long term. There is research which shows that the consolidation of [inventors into superstar cities like San Francisco](https://eml.berkeley.edu/~moretti/clusters.pdf?utm_source=npr_newsletter&utm_medium=email&utm_content=20210713&utm_term=5565069&utm_campaign=money&utm_id=47783854&orgid=&utm_att1=money)
has boosted the number of patents created, compared to the case when inventors are spread evenly across the country. It seems to me that this is a phenomenon which is more powerful than the ping of a Slack message.

## Remotely Alone

The remote work revolution has implications beyond our economy as well. In the ground-breaking book, "Bowling Alone", the political scientist Robert Putnam describes the disintegration of traditional social ties such as the church and — as the title would suggest — bowling leagues. This trend has worsened and [loneliness is now described as an "epidemic"](https://mcc.gse.harvard.edu/reports/loneliness-in-america).

In a society where we are "bowling alone" we should not also "work alone." Yes, there are times when remote work is necessary — during a pandemic or when childcare is unavailable, for example. But when the number of ties in our social networks (not on Facebook, but real life) is decreasing, we need to focus on our in-person relationships, not virtual ones.

Remote work has been touted by some as the triumph of the employee over the employer. The freedom to work from home has been framed as a way to spend less time in traffic and more time with family. In many cases this true. But in other cases, it is patently wrong. In the fight between labor and capital, we must not forget who we are fighting against, but who we are fighting _with_: our coworkers.
