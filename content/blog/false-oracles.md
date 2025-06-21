---
title: "False Oracles"
date: "2023-02-25"
description: 'Do not trust oracles which do not understand your questions.'
image: images/mountain-blue.jpg
draft: false
tags: ["technology"]
category: essay
caption: Photo by Rohit Tandon on Unsplash
---


I. 

Suppose you need help answering a question of great importance — say, what you should dedicate your life to. Thankfully, you hear of a wise man who is great at giving advice; an “oracle,” some might say. Naturally, he lives on top of a nearby mountain, and you decide to make the trek to see him. 

After a day of hiking, you finally see him on top of this mountain. He does not look like an oracle, though: he does not have a long, wispy beard, nor is he meditating. Undeterred, you ask him the question that’s on top of mind, “what is my life purpose?” The oracle nods his head, then turns to a stack of thick books next to him. He hands you a thick, dusty book and points to a line in it. The line is:

_The answer lies within yourself._

With that, he points to the door. Despite being confused, disappointed, and tired, you thank him and leave.    

II. 

After returning from the mountain, someone explains what happened. While the oracle cannot speak English, he understands the sounds of the language; for example, he knows that the sound *pərpəs* is written as “purpose,” but he does not know that this means “the reason for which something is done or created or for which something exists.”

Over time, as people have asked him questions, he has learned which lines of the books to give based on their reactions. If someone seems satisfied with his answer, he will associate this question with that line. If they are not, he will find another line to give. Because people revere the books which these answers are drawn from, they believe the answers to be truthful. 

III.

While not located on a mountain, there have been (digital) oracles that have garnered tremendous interest recently: ChatGPT and LaMDA, AI programs for generating text. These programs could be used for a lot of language tasks, but I’ll focus on recent announcements by [Google](https://blog.google/technology/ai/bard-google-ai-search-updates/) and [Microsoft](https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/) that they would be used for search.

In this application, I am deeply skeptical; I view them as essentially like the man on the mountain: it is an agent can provide answers which satisfy the asker, but the agent has no underlying model of “truthiness.” They are false oracles; an oracle that does not understand your question is not actually an oracle. Yes, the richness and variety of the responses which large-language models (LLM) like ChatGPT can provide are amazing, but I am not interested in this when I query something. I am ultimately concerned with the truth, and this is something which GPT-3 has struggled with.

We’ve seen ChatGPT fabricate basic facts, such as a [Tesla earnings report](https://www.fastcompany.com/90819887/how-to-trick-openai-chat-gpt) or a fictional world-record for crossing the [English channel on foot](https://akhinoz.medium.com/the-hidden-dangers-of-chatgpt-and-how-to-prevent-artificial-hallucinations-206861105d0f). The term for this is “hallucinate,” but I think this is generous; when someone hallucinates, we generally mean it is a temporary break from reality. But hallucinations seem to me a feature, rather than a bug for LLMs; if we want a model to be able to write amusing prose in the [style of the King James Bible](https://twitter.com/tqbf/status/1598513757805858820?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1598513757805858820%7Ctwgr%5Ebeaf4ec9a2da61f297f133299ffb151fa4a96f45%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.theatlantic.com%2Ftechnology%2Farchive%2F2022%2F12%2Fopenai-chatgpt-chatbot-messages%2F672411%2F), allowing for artistic liberties is probably necessary.[^1]

OpenAI admits that hallucinations are a limitation of ChatGPT, and that reducing these errors will be “challenging” due to a number of reasons, including the fact that the correct answer is constrained by the model’s knowledge, not the human’s. The naive fix for this would be to provide training data, but [Scott Alexander](https://astralcodexten.substack.com/p/elk-and-the-problem-of-truthful-ai) wrote an excellent example of why this is naive, using questions about broken mirrors.

Suppose we ask a chatbot, “what happens when you break a mirror?” A dumb chatbot might say, “It is broken.” This is probably correct, but not useful. A chatbot trained on more data might respond, “You get seven years of bad luck.” This is also correct, in that *some* people believe this, and that this is indeed a superstition that exists. However, most empiricists would disagree (including myself). If we train the chatbot on even more data, it might respond, “No, that’s just a superstition,” to our question.

There is more prompt engineering we can provide to align our expectations with the responses, but overall, the lesson is clear: more training data and feedback does not necessarily improve the “truthiness” of responses. As Alexander writes,


> If this were a human, we’d describe them as “knowing” that the mirror superstition is false. So what was the original AI’s error? Trick question: the AI didn’t err. Your error was expecting the AI to say true things. Its actual goal is to predict how text strings end. If there was a text string about breaking a mirror in its corpus, the string probably did end with something about seven years of bad luck.

There will always be a delta between the model’s knowledge and the human’s — ChatGPT is mostly unaware of all events that occurred after 2021, for example — and so generating “correct” responses is an intractable problem. But more generally, generating text based on statistical patterns in a language is not a way to reveal the truth. And this, ultimately, is the flaw that makes LLMs not useful in search.

Predictions are hard, especially about the future, but I am willing to make one in this domain: ChatGPT will not revolutionize search, nor any LLM. The science-fiction writer [Ted Chiang](https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web) wrote that ChatGPT is a “blurry JPEG of the web,” since it contains much of the information on the web, but due to the compression process (that is, training on the web’s text), it contains artifacts (hallucinations). This blurriness, Chiang writes, is “good for content mills” but “not good for people searching for information.” While it remains to be seen if it’s possible to separate the good blurriness from the bad, I am skeptical that it will be.

I am not a luddite, though. I do believe that AI will transform search — definitely through AGI, perhaps even before then — but it will not be done through LLMs, at least not yet. The oracles will be coming in the future; until they come, I will not be making the trek to any mountains. I will instead rely on myself to analyze information online. Thus, the answer really does lie in yourself. 


[^1]:
     One expert estimates that the hallucination rate for [ChatGPT is between 15-20%](https://www.datanami.com/2023/01/17/hallucinations-plagiarism-and-chatgpt/), an improvement over past models.
