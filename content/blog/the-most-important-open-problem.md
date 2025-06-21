---
title: 'The Most Important Open Problem'
date: '2022-12-13'
description: 'A million-dollar equation.'
image: images/circuit.jpg
caption: 'Photo by Alexandre Debiève on Unsplash'
draft: false
category: essay
---

I often get asked which open problem in science I think is the most important.[^1] I always respond, “does P = NP?”[^2]

A mathematically-inclined (and perhaps jocular) reader at this point will think “yes, when N=1." A reader with a background in computer science (but is not, say, a theoretical computer science professor) will gaze in the foreground, trying to remember the contours of this problem from their algorithms class. A reader who is struggling to understand the footnotes will also probably not understand how the prose got to this point, along with the reader who was skimming these words (and is daydreaming by now).[^3] The rest will hope that I elaborate on what “P = NP” is very soon. Well, here it is reader:

The _P vs NP_ problem is the most famous open question in computer science.[^4] In a few words, the problem is: “if we can check a solution quickly, does that mean we can could have found that solution quickly?”[^5] Here, _P_ refers to the problems that can be solved quickly, and _NP_ refers to the problems that can be verified quickly.[^6] Thus, “P = NP” means that if a solution to a problem can be verified quickly, then the solution itself can be found quickly.

The canonical example of this is Sudoku. For this game, we can write a program to check whether or not a solution is valid quickly; however, as Sudoku grids grow larger, the time to solve it grows exponentially; thus, there is no known program which can start with a blank grid and fill in all the squares quickly. Computer scientists (and Sudoku lovers) are asking: “will we ever find a better program?”[^7] In many cases, a problem seemed slow until someone found a quick program for it, but others, like Sudoku and and the [Traveling Salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem), remain "slow."

Most computer scientists believe that P != NP, but no one has found a proof yet.[^8] I personally hope that P = NP because this is the chaotic evil scenario, as this would break our existing cryptography systems and probably everything else we hold near and dear. (In the words of one computer scientist: "If P = NP then public-key cryptography is impossible").[^9]

Solving this problem either way would have massive implications for the world. The _P vs NP_ problem is one of the Clay Institute Millennium Problems, a “Most Wanted” list of open problems in math and physics where a solution holds a 1 million dollar bounty. I think _P vs NP_ is the most important problem because it is like a key to unlocking the rest of the universe’s mysteries.

[^1]: This is a lie; no one asks me this question.

[^2]: This is also a lie; I never get asked the question, so I never respond.

[^3]: Of course, you (the reader who was skimming these words, then daydreaming) is now at-attention at my callout, much like the teacher who calls on the pupil who fell asleep in the back of class.

[^4]: I suppose this depends on what one’s definition of “famous” is. If one were to collect a room-full of software engineers, computer science professors and students, I have no doubt that the room would agree that P vs NP is the most famous question in computer science. However, if one were to collect a representative sample of Americans, the consensus would be different. Through various conversations I’ve had, I have come to believe a significant fraction (perhaps even a majority) of Americans do not have a vague idea of what computer science is, and likely confuse it with information technology or electrical engineering. Thus, I believe that a room of “average” (that is, a representative sample) of Americans would converge on “what is computer science?” when asked what is the most famous open question in computer science.

[^5]: "Quickly" means in polynomial time; that is, if we have a problem with an input size _x_, the time _t_ to solve the problem can be expressed as a sum of polynomial terms (e.g., $t = x^2 + 3x + 6$).

[^6]: _P_ is technically the set of all polynomial-time problems and _NP_ is the set of nondeterministic polynomial problems.

[^7]: "Program" here is shorthand for algorithm, a list of instructions to solve a problem.

[^8]: [Gasarch, "SIGACT News Complexity Theory Column 36"](https://www.cs.umd.edu/~gasarch/papers/poll.pdf)

[^9]: [Fortnow, "The Status of the P versus NP Problem"](https://people.cs.uchicago.edu/~fortnow/papers/pnp-cacm.pdf)
