#!/usr/bin/env python3
"""Insert a document in Python"""
from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """insert a new doc in collection"""

    return mongo_collection.insert_one( kwargs ).inserted_id
