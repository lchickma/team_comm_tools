import re

'''
  num_question and get_word_TTR require the dataset WITH all punctuations as input
'''

from features.basic_features import *


## Get the number of question marks in one message (TODO)
def num_question_naive(text):
  return len([x for x in text if x in ["?"]])


## Classify whether the message contains clarification questions
NTRI_regex = "what\?+|sorry|excuse me|huh\??|who\?+|pardon\?+|say.*again\??|what'?s that|what is that"
def classify_NTRI(text):
  if re.match(NTRI_regex, text):
    return 1
  else:
    return 0
  

## Calculate the word type-to-token ratio
def get_word_TTR(text):
  # remove punctuations
  new_text = re.sub(r"[^a-zA-Z0-9 ]+", '',text)
  # calculate the number of unique words
  num_unique_words = len(set(new_text.split()))
  # calculate the word type-to-token ratio
  if count_words(new_text) == 0:
    return 0
  else:
    return num_unique_words/count_words(new_text)   


## Proportion of first person pronouns
# Get the list of first singular pronouns
first_singular_words_path = './features/lexicons/first_singular_pronouns.csv/'
first_singular_words_list = list(pd.read_csv(first_singular_words_path)['First_singular'])

def get_proportion_first_pronouns(text):
  num_first_prononouns = len([x for x in text.split() if x in first_singular_words_list])
  if count_words(text) == 0:
    return 0
  else:
    return num_first_prononouns/count_words(text)
