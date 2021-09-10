import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import sys


model_dir = '/app/python/model'
tokenizer = AutoTokenizer.from_pretrained(model_dir, use_fast=False)
model = AutoModelForSequenceClassification.from_pretrained(model_dir)
model.eval()

text = sys.argv[1]
print(text)

encoded_text = tokenizer(text, return_tensors='pt')
with torch.no_grad():
    output = model(**encoded_text)
probs = output.logits.softmax(dim=-1)
pred = output.logits.argmax(dim=-1).item()

print(probs)
print(f' is {"acceptable" if pred == 1 else "unacceptable"}')
