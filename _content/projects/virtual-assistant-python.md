---
title: 'Intelligent Virtual Assistant'
type: 'Personal project'
description: 'Creating a intelligent virtual assistant like J.A.R.V.I.S. using GPT-3 in Python.'
duration: "1 day"
teamSize: 1
headerImg: '/assets/img/projects/virtual-assistant-python/virtual-assistant-python.jpg'
slug: 'virtual-assistant-python'
labelText: ['GPT-3', "Voice Recognition", "Learning"]
labelIcons: ['🤖', '🗣️', '📚']
---

# Intelligent Virtual Assistants (IVA)
Intelligent Virtual Assistants are AI-powered agents that can produce customised responses by pulling information from different contexts. An IVA uses voice inquiries and natural language processing (NLP) to execute a variety of helpful tasks.

Some popular virtual assistants you might be familiar with:
* Google Assistant
* Siri
* Amazon Alexa
* Cortana
* J.A.R.V.I.S. (Iron Man)
* Skynet (Terminator)
* HAL 9000 (2001: A Space Odyssey)
* ...

# J.A.R.V.I.S. clone
My inspiration to experiment with virtual assistants came, in addition to having a keen interest in AI, from the AI assistants in famous movies like Iron Man and Blade Runner 2049. So I tried to make a version of J.A.R.V.I.S. from Iron Man with a female voice.

# Technologies used

Virtual assistants that may be accessible through online chat in a specialised way are frequently referred to as "chatbots." But this is more than a chatbot. It implements the OpenAI API model called **text-davinci-002**. This is the most capable **GPT-3** model that can understand and generate natural language.

* **[OpenAI API](https://beta.openai.com/docs/api-reference/introduction?lang=python)** + payment plan setup
* **[GPT-3](https://beta.openai.com/docs/models/overview)**: text-davinci-002 (understand and generate natural language)
* **[Speech Recognition](https://github.com/Uberi/speech_recognition)**: Python library that implements the Google Speech Recognition API
* **[Offline Text2Speech pyttsx3](https://github.com/nateshmbhat/pyttsx3)**: male/female Text2Speech voice(s)

# Example outputs

*Some examples of the voice recognition with the OpenAI response*  

Unfortunately, I can only display the input and output of the GPT-3 speech recognition. Because GPT-3 is a paid NLP model, I would like to avoid exploits (and the emptying of my bank account) by implementing a working example on here. **BUT** you can always clone or fork [my version from Github](https://github.com/Wilmox/virtual-assistant-python) and try it out with your own API key (first 3 months you get $18 in free credit).

When provided a prompt, the OpenAI API will answer almost instantaneously with a relevant response.

<img src='/assets/img/projects/virtual-assistant-python/who-are-you.png' /> <br />

<img src='/assets/img/projects/virtual-assistant-python/meaning-of-life.png' /> <br />

It can even give you a little bit of history... 

<img src='/assets/img/projects/virtual-assistant-python/philosophy.png' /> <br />

...or work out a math problem.  
<img src='/assets/img/projects/virtual-assistant-python/math.png' />