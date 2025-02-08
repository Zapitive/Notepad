from pymongo import MongoClient
import os
import datetime
from dotenv import load_dotenv

# loading config from .env file
load_dotenv()

MONGODB_URI = os.environ["MONGODB_URI"]
client = MongoClient(MONGODB_URI)

# db = client.notes

# notes_collection = db.notes

# new_note = {
#     "title" : "first Note",
#     "content" : "This is the first note",
#     "last_updated" : datetime.datetime.utcnow(),
# }

# result = notes_collection.insert_one(new_note)