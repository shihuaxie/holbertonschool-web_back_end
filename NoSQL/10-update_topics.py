#!/usr/bin/env python3
"""Change school topics"""
from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """Update topics in collection"""

    mongo_collection.update_many(
        { 'name': name },
        { '$set': { 'topics': topics }}
    )
