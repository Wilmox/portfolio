---
title: 'Energy Transition Challenge'
type: 'International Research Project'
description: 'International variation of the PXL Digital Research Project, in collaboration with Fontys Hogeschool in the Netherlands and Belgium Campus University in South Africa.'
duration: "7 months"
teamSize: 6
headerImg: '/assets/img/project-openremote.jpg'
slug: 'openremote-energy-transition-challenge'
labelText: ['Research', "Machine learning"]
labelIcons: ['🔍', '🤖']
---

# Introduction & Challenge

International variation of the PXL Digital Research Project, in collaboration with Fontys Hogeschool in the Netherlands and Belgium Campus University in South Africa.
Together we are working on the OpenRemote Energy Transition Challenge.

Eco-friendly houses that run on green energy are becoming more popular every day. The challenge with green energy is consistency. The weather changes often and the locations where these differences are adapted are vastly different. As a result, energy production occurs every day, in every place differently. There is therefore a need for a solution to view the energy production and use of off-grid (not connected to the electricity grid) houses (eg through IoT devices).

Our job is to work with homes and/or properties equipped with off-grid (not connected to the powergrid) infrastructure such as solar panels, wind turbines, energy storage batteries and IoT devices that monitor the system for power production, power consumption, etc. The system needs power and an internet connection.

The ultimate goal is to ensure that energy consumption is predicted by a machine learning model. And based on that, decide how the house or building should receive power (via battery or directly via green energy).
The purpose of using green energy is to move away from traditional fossil fuels that cause pollution and deplete our Earth's resources.
The use of green energy is important for two reasons: first, it does not cause pollution or damage to the environment and second, it is an unlimited resource.

# Research Team

## [Jakobus Badenhorst](https://www.linkedin.com/in/jj-badenhorst/) - Belgium Campus
_Front-end_<br/>
Design, setup and development of ReactJS front-end + API development

## [Stephanus de Beer]() - Belgium Campus
_Front-end_<br/>
Set up + development of ReactJS front-end

## [Wondimu Woldeaarggiye](https://www.linkedin.com/in/wondimu-gebre-woldeaarggiye-a74a63100/) - Fontys
_Back-end, Security_<br/>
Setting up Java Springboot back-end + security implementation

## [Matthijs Kotterink](https://www.linkedin.com/in/matthijs-kotterink-8a52051a3/) - Fontys
_Data Management, Security_<br/>
Setting up MongoDB, back-end API + security implementation

## [Anouk Min](https://www.linkedin.com/in/anouk-min-101543178/) - Fontys
_AI & Machine learning_<br/>
Data exploration + prediction model implementation

## [Simon Wilmots](https://www.linkedin.com/in/simonwilmots/) - PXL 
_AI & Machine learning_<br/>
Data exploration, data cleaning + prediction model implementation

# Technology
_Een korte beschrijving van de technologie die gebruikt wordt voor de oplossing_

## Development
During the development of the research project, Microsoft's Visual Studio Code and JetBrains' IntelliJ were used. These IDEs were specifically chosen because many programming languages ​​are supported and can be used for front-end, back-end and machine learning.
Github is used as source control and file management medium. This contains all the code for each part of the project, so that everyone's version is always up-to-date.

## Front end
We decided to use the Javascript library **ReactJS** for the application's front-end or graphical user interface. In this library, the MaterialUI component library is implemented for a more stable and better layout. 

We also implemented our own front-end API.

## Backend
For the back-end or the part that the user does not see (Database, Hosting, APIs, ...), we chose the Java framework **Spring**. A MongoDB is linked to the Java back-end. The data from this database can also be requested by a custom back-end API.

## Machine Learning
The implementation of the machine learning model is mainly done with **Jupyter Notebook**. Jupyter is a free open-source, interactive web tool mainly used to make calculations directly in a notebook. In this notebook, you can combine software code and plain text. This way you have all the documentation in one document.

In these notebooks we have used two libraries in the **Python** programming language, namely: **Pandas** and **FastAI**. The machine learning model will first extract the training data from our API. The data is then cleaned up via Pandas and it is ensured that everything is formatted correctly, so that the model will make the most accurate predictions possible.

## Communication
As a communication medium, we decided to use Discord. In addition, Microsoft Teams and WhatsApp were also used. The Discord server was mainly used between the researchers. Here are several text channels for information exchange, meeting summaries and conversation options.

In Microsoft Teams, each research group had been given its own channel. Our meetings with our coach(es) and OpenRemote were mainly held here. The division of the groups was also done via Teams.
The research project was hardly mentioned in the WhatsApp group. This was intended more as a recreational platform.

# Technical Implementation
_The technical solution with a deeper understanding of machine learning_<br />

## Front-end
The front-end consists of a web application made in the Javascript framework ReactJS. The app provides a visual representation of all predictions made in the machine learning model. <br />

The first API has also been developed in the front-end. Thanks to this API, OpenRemote data is available in every part of the project. The API is set up in an Ubuntu and Nginx docker container on a **VPS(*)** at the cloud computing specialist: **OVHcloud**. The VPS belongs to a member of the group and this person has given full permission to use it during this project. On the nginx, HTTPS is used, i.e. there is secure communication between the sender and receiver of the information.
<br/>
In HTTPS, the communication protocol is encrypted using Transport Layer Security or, previously, Secure Sockets Layer.
The front-end itself also makes calls to a third-party API with weather information to display any possible warnings.<br/>

## Back end
The back-end mainly consists of the Spring framework for the Java platform in combination with a MongoDB database. The core features of the framework can be used by any Java application, but there are extensions for building web backends on top of the Java EE (Enterprise Edition).
<br/>
The back-end also has its own API. With this API, new or previous predictions from the machine learning model can be requested.
<br />
Secure HTTPS communication has also been used here in combination with API call logging. I.e. that with every API call, information about the requester is noted in a log file. This API also cannot be accessed without authentication. So there are several layers of security in the back-end. This ensures that any intruders cannot get in. This is also known as multifactorial authentication.
<br/>

## Machine Learning - Setup
The machine learning model was developed in **Anaconda's Jupyter Notebook**. This is an open document format based on a JSON file. This makes it very easy to put documentation and code in one file. This notebook can also be found on the OpenRemote Energy Transition Challenge Github. It uses the Python libraries Pandas, pyarrow and some functions of FastAI.
<br/>
Before a model can make predictions, a few things have to happen. The data must be correct and must be cleaned up. This is also known as data cleaning.
<br/>

## Machine learning - Data cleaning
The correct electricity usage data was provided by OpenRemote. But the UV data on which the predictions are based have yet to be retrieved. This is done via the request library in python and the OpenUV API. This API returns UV values ​​at a given date, latitude and longitude.
<br/>

After reading the given data from OpenRemote, we will put in each row of the data the UV value that corresponds to the time of the data.
The columns that are of little or no use will only cause an **overfitting(*)** of the prediction model. Therefore, this and all empty columns are removed from the data. As a final clean-up, the dates in the model are put in the correct time zone. On the right is an example of what the data currently looks like.
<br/>

When the data has been cleaned up, one more step needs to be done before predictions can be made. Namely the pre-processing or pre-processing of the data. 

## Machine learning - Pre-processing
This is an important step in the machine learning process. The phrase **"garbage in, garbage out"** applies especially to machine learning projects. Data collection methods are often loosely checked, resulting in out-of-range values, impossible data combinations and missing values, etc. Analyzing data that has not been carefully screened for such issues can produce misleading results.
<br/>

Often data preprocessing is the most important stage of a machine learning project.

Machine learning models, _and computers in general_, only understand **numerical values** ​​at the end of the day. This means that if data contains categorical elements, they must be coded to numbers before a model can make a prediction. This pre-processing step is called **encoding**. For example; the name of a building, _“Tamar building”_ or _“Humber building”_, is converted to a number (_1_ or _2_). For dates, we don't want an entire date-string (eg _“2021-02-11 04:10:22.926000+01:00”_) to be converted to a number. Therefore, each part of the date is broken down by column. I.e. that the hour, minutes, day, month, and year are put in separate columns.
Now the data is finally ready to use in the prediction model.

<br/>

## Machine learning - Prediction model
We have chosen a “**Random Forest**” model.
As the name suggests, “Random Forest” is an algorithm that contains a number of **decision trees(*)** for different subsets of the given dataset and averages it to improve the predictive accuracy of that dataset.
<br/>
Instead of relying on one decision tree, the random forest takes the prediction from each tree and based on the majority "votes" of the predictions, it predicts the final output.
<br />
The greater number of trees in the forest leads to higher accuracy and avoids the problem of overfitting.
After implementing, training and testing this model, it is possible to make the most accurate decisions.<br />

# Conclusion & Reflection
_The ultimate goal is to ensure that energy consumption is predicted on the basis of machine learning. And based on that, decide how the house or building should receive power (via battery or directly via green energy)._<br />

The goal that OpenRemote had in mind has certainly been achieved on most points. There is a working, accurate prediction model based on the UV values and the data from OpenRemote. These predictions can be shown on a user-friendly dashboard with comparisons and warnings in the form of graphs and tables. The data is neatly stored in the database and can be retrieved again using the custom APIs. Integration with existing OpenRemote systems was not part of this research project.

<br />

---

<br />

_**(*)**_<br/>
**VPS**: _Een Virtual Private Server, is een virtuele machine die als een service wordt verkocht door een internethostingservice._ 

<br/>

**Overfitting**: _de productie van een analyse die te nauw of precies overeenkomt met een bepaalde reeks gegevens, en daarom mogelijk geen aanvullende gegevens past of toekomstige waarnemingen betrouwbaar voorspelt._

<br/>

**Decision tree**: _is een beslissingsondersteunende tool die gebruik maakt van een boomachtig model van beslissingen en hun mogelijke gevolgen, inclusief toevallige uitkomsten, resourcekosten en het nut._
<br/>