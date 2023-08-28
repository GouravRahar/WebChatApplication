# SENTIMENT ANALYSIS IN CHAT APPLICATION
Sentiment Analysis, as its name implies, involves discerning the sentiment or emotion underlying a given situation. This process entails analyzing and uncovering the emotional tone or intention conveyed within text, speech, or any form of communication. In the context of chat applications, copious amounts of data are generated daily, as users exchange numerous text-based messages across networks. The proposed sentiment analysis system harnesses this data to learn and forecast a user's sentiment or mood during a particular interaction.

While humans can adeptly infer a user's mood by reading their chat messages, an analogous capability must be imbued into a machine system. This requires transforming the textual data into machine-understandable features. Once features are identified, system classifiers are trained using a designated training set. In the subsequent phase, the recently assessed sentiment of a specific user necessitates updates in two realms: the application server and all mobile devices linked to the user's contacts or messaging list. For the latter, PUSH technology is employed, offering distinct advantages over the more prevalent PULL technology. Application logic dictates the refreshment of specific user contact lists, triggering a PUSH action towards the respective device. The device's running application processes the incoming message, prompting the renewal of status and sentiment indicators.

The primary tasks stem from the five components of the quintuple framework. The first component concerns entities, entailing their extraction. This task mirrors the concept of Named Entity Recognition (NER) in information extraction. Consequently, entity extraction itself presents a challenge. After extraction, entities must be categorized. In natural language text, identical entities are often expressed differently. For instance, "Motorola" may appear as "Mot," "Moto," and "Motorola." Recognizing these variations as referring to the same entity is crucial.


## IMPLEMENTATION
In Machine Learning models, the initial step involves categorizing uploaded text into three categories: positive, negative, and neutral. This categorization is performed using TextBlob. Subsequently, the dataset is grouped based on these categories.

DATA CLEANING: This step encompasses the removal of stopwords, punctuation, and other special characters that are unnecessary for emotion prediction.

KEYWORD EXTRACTION: The goal here is to identify the most common words for each emotion type, including Joy, Fear, Anger, Disgust, Shame, Guilt, and Sadness.

The dataset is then split, allocating 30% for testing and the remainder for training the model.

Below is the code for the Emotion Prediction Function:

```python
def predict_emotion(text, model):
    myvect = cv.transform(text).toarray()
    prediction = model.predict(myvect)
    pred_proba = model.predict_proba(myvect)
    pred_percentage_for_all = dict(zip(model.classes_, pred_proba[0]))
    print("Prediction: {}, Prediction Score: {}".format(prediction[0], np.max(pred_proba)))
    return pred_percentage_for_all
```

This function returns an object containing emotions as keys and their corresponding probabilities as values. The emotion with the highest probability is considered the predicted emotion.

The next step involves saving the model using the Python `pickle` module. When a user sends a message, the frontend sends a POST request to the Flask-based Python server. The server uses the saved model to predict the emotion, responds with the predicted emotion, appends it to the message, displays it on the UI, and saves it to the database.

Database structure is a crucial aspect of database-dependent applications. Design considerations vary based on factors like read vs. write operations and frequently requested values. MongoDB, a complex and data-rich data storage, is our focus. The database will store Users, Messages, and Chatroom entities.

Two key pages make up the application:
1. Home Page
2. Chat Page

The Home Page features Signup and Login components. Users must register with an ID and password, which are then used for login. User details are stored in MongoDB during signup and matched during login to allow access.

On the Chat Page, three components exist:
1. Heading with a search button
2. Chat display
3. User history

The search button in the first component facilitates user search based on name or email. The right side contains buttons for viewing profiles and logging out.

The Chat Component displays messages with detected sentiments, considering both sent and received messages. The View button reveals the profile of the user with whom one is conversing.

The User History Component lists users we've interacted with, showing their latest messages.



## DETAILED DESIGN

![ActivityDiagram](https://github.com/GouravRahar/WebChatApplication/assets/89836038/a7700a77-5e70-4a91-a4a3-6046bfbbd6fd)




## Flow Chart for Sentiment analysis Model

![image](https://github.com/GouravRahar/WebChatApplication/assets/89836038/b342f2f8-b6e7-4e79-a385-0d5dcdbb5aaa)

