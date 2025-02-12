from flask import Blueprint,request,jsonify,json
import datetime
from connection import client
from bson.objectid import ObjectId
from bson import json_util
import json

views = Blueprint(__name__,"views")

@views.route("/")
def home():
    data = [
    {
        "content": "This is the first note",
        "last_updated": "Fri, 07 Feb 2025 20:07:59 GMT",
        "title": "first Note"
    },
    {
        "content": "Sucessfully working for the api request",
        "last_updated": "Sat, 08 Feb 2025 18:51:51 GMT",
        "title": "note from Postman"
    }
]
    return jsonify(data)

@views.route("/addNote",methods=["POST"])
def addNote():
    # getting data from form to add note
    title = request.json['title']
    content = request.json['content']

    # getting to note collection
    
    db = client.notes
    notes_collection = db.note

    #creating document to be added in collection
    new_note = {
        "title" : title,
        "content" : content,
        "last_updated" : datetime.datetime.utcnow(),
    }

    result = notes_collection.insert_one(new_note)
    document_id = result.inserted_id
    print(f'document id of the result :{document_id}')

    return f'document id of the result :{document_id}'

@views.route("/getNote/<note_id>",methods=["GET"])
def getNote(note_id):
    db = client.notes
    notes_collection = db.note
    document_to_find = {"_id":ObjectId(str(note_id))}
    note = notes_collection.find_one(document_to_find)
    return json.loads(json_util.dumps(note))
    
@views.route("/getNotes",methods=["GET"])
def getNotes():
    # get all notes for user will be used when login function is added
    db = client.notes
    notes_collection = db.note
    notes = notes_collection.find({})
    res = []
    for note in notes:
        res.append({
            "_id" : str(note["_id"]),
            **{key: note[key] for key in note if key != "_id"}
        })
    return res

@views.route("/updateNote/<note_id>",methods=["POST"])
def updateNotes(note_id):
    #getting variables to update for
    
    title = request.json['title']
    content = request.json['content']

    # connecting to the database of notes
    db = client.notes
    notes_collection = db.note

    # making variables to change in note
    updated_note = {"$set":
        {"title" : title,
        "content" : content,
        "last_updated" : datetime.datetime.utcnow(),}
    }

    # getting the document by id
    document_to_find = {"_id":ObjectId(str(note_id))}

    # getting the note by id to update
    notes_collection.update_one(document_to_find,updated_note)
    return 'Note update successfully'


@views.route("/deleteNote/<note_id>",methods=["DELETE"])
def deleteNote(note_id):
    db = client.notes
    notes_collection = db.note
    
    document_to_delete = {"_id":ObjectId(str(note_id))}
 
    notes_collection.delete_one(document_to_delete)

    return f'document id of the result :{note_id}'

