
Project 1

https://github.com/eashanchawla/Price-Recommendation-using-Text-Mining/tree/master


### **Executive Summary**
- **Platform**: Mercari, an online marketplace with over 5 million users and monthly transactions totaling $100 million.
- **Problem**: Sellers often struggle to set appropriate prices for their items, leading to overvaluation or undervaluation.
- **Objective**: To predict optimal product prices using machine learning based on product descriptions and other related features.
- **Solution**: A Ridge Regression model that explains 45% of the price variation, with 50% of predictions within 30% of actual prices.



Project 2
https://github.com/eashanchawla/Retweet-Prediction-during-COVID-19
## Executive Summary

This project is an adaptation of the **29th ACM International Conference on Information and Knowledge Management (CIKM2020) Analytics Retweet Prediction Challenge**. The goal of this challenge is to **predict the popularity of COVID-19-related tweets** based on the number of retweets, leveraging factors such as tweet content, metadata, and user information. The original challenge can be found [here](https://www.cikm2020.org/covid-19-retweet-prediction-challenge/).

### **Objective**:
The task is to develop a model that can predict a tweet’s popularity (as measured by its retweet count) using factors such as:
- Tweet text
- User information
- Engagement data

### **Approach**:

1. **Exploratory Data Analysis (EDA)**: 
   - Performed a comprehensive exploration of the dataset, understanding the distribution of retweets, tweet content, and user behavior.

2. **Data Preprocessing**: 
   - Removed irrelevant columns that do not contribute to predicting retweet count.
   - Cleaned the text data, removing stop words, special characters, and handled duplicates to ensure high-quality inputs.
   
3. **Normalization**:
   - Applied normalization techniques on numerical columns to ensure the data is in a comparable format, which helps in improving model performance.

4. **Model Training and Testing**:
   - Trained a variety of models to predict the number of retweets.
   - Evaluated the model's performance using appropriate metrics to understand its prediction capabilities and areas for improvement.

---

This methodology provides a framework for efficiently predicting the popularity of tweets during the COVID-19 pandemic, with potential future applications in broader social media engagement predictions.


Project 3
https://github.com/eashanchawla/Sentiment-Classification

## Executive Summary

This project focuses on **sentiment analysis** using a **Stochastic Gradient Descent (SGD)** classifier and **Multi-Layer Perceptron (MLP)** model to predict emotions such as **sad, jealous, joyful,** and **terrified** based on textual data. The goal is to classify a given text (utterance) into one of these four sentiments. The data transformation and processing pipeline involves various natural language processing (NLP) techniques, along with model training, evaluation, and error analysis.

### **Steps Followed**:

1. **Data Transformation**:
   - **Dataset**:
     - **Train**: 97,968 records, **Test**: 720 records.
   - We retained only two columns: `context` and `utterance`, and filtered the data to include only the four selected sentiments (`sad`, `jealous`, `joyful`, and `terrified`).

2. **Data Preprocessing**:
   - Removed **punctuation**, converted text to **lowercase**, and applied **lemmatization**.
   - Created a **Bag of Words** (BOW) model using **CountVectorizer** which initially resulted in high dimensionality.
   - Addressed dimensionality by removing **stop words** and performed **TF-IDF vectorization** to reduce irrelevant features.

3. **Modeling and Evaluation**:
   - Used a **Stochastic Gradient Descent (SGD) classifier** to train the model on the TF-IDF feature set.
   - Achieved a **test accuracy** of **63.6%** and an **F1 score** of **0.637**.
   - Analysis using a **confusion matrix** showed that the classification of the "terrified" sentiment had the highest accuracy, while "jealous" had the lowest.

4. **Error Analysis**:
   - Conducted an analysis of misclassified examples and found that **context** played a crucial role in prediction errors. Words like "worried" in sentences labeled as "sad" were often misclassified as "terrified," demonstrating the model's difficulty in understanding nuanced contexts.

5. **Improvement Using Word2Vec**:
   - Integrated **Word2Vec embeddings** to better capture context and semantics, aiming to improve predictions.
   - Trained a **Multi-Layer Perceptron (MLP) classifier** on the Word2Vec transformed data, achieving a slightly better accuracy of **64.17%** and an F1 score of **0.642**.

6. **Challenges**:
   - The model struggles with capturing the proper **context** from text, leading to misclassification of similar sentiments.
   - **Word2Vec** embeddings partially helped address this, but further exploration of context-aware methods like **BERT** or other transformer-based models could yield better results.

---

This project highlights the importance of text preprocessing, dimensionality reduction, and the choice of appropriate embeddings in sentiment analysis tasks. Future work may involve leveraging more context-sensitive models like **transformers** to improve performance.


Project 4: Learning
https://github.com/eashanchawla/learning


# Learning Repository

This repository is designed for ad-hoc topics that I want to learn and practice. 

- I am writing all the notes myself, and using qwen2.5 or other LLMs to just format them
- I am using LLMs to generate questions/assignments for me to learn more about certain topics

This is done using aider and ollama on my macbook.

## Repository Summary

This comprehensive learning project focuses on various aspects of programming and machine learning:

1. Python Concurrency (Python/concurrency_etc):
   - Covers asyncio, multithreading, multiprocessing, and the Global Interpreter Lock (GIL)
   - Includes assignments for an asynchronous web scraper, multithreaded file processor, multiprocessing image resizer, GIL demonstration, and a comparison of asyncio vs threading

2. Machine Learning (ML):
   - Covers various machine learning algorithms and techniques
   - Subfolders include:
     a. Basics: Fundamental concepts in machine learning
     b. Clustering: Implementations of K-Means, DBSCAN, and Hierarchical Clustering
     c. Supervised Learning: Linear Regression and Decision Trees
     d. Unsupervised Learning: Principal Component Analysis (PCA)
     e. Dimensionality Reduction: t-SNE (t-Distributed Stochastic Neighbor Embedding)

The repository aims to provide hands-on learning experiences by implementing these algorithms and concepts from scratch. Each folder contains README files explaining the learning objectives and assignments. The structure encourages a progressive learning approach, starting with basics and moving to more advanced topics.

This project is designed to help learners gain a deep understanding of both concurrent programming in Python and various machine learning algorithms by implementing them manually rather than relying on existing libraries.
