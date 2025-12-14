#!/usr/bin/env python3
"""
List all documents in Python
"""
from pymongo import MongoClient


def list_all(mongo_collection):
    """ List all docs in collection """
    output = []

    for v in mongo_collection.find():
        output.append(v)

    return output
