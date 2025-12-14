#!/usr/bin/env python3
""" Nameless module"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Return a tuple (start_index, end_index) for pagination.
    Page numbers are 1-indexed.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
