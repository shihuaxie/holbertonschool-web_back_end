#!/usr/bin/env python3
"""
Return an asyncio.Task for wait_random
"""

import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Regular function that returns an asyncio.Task
    wrapping the wait_random coroutine.
    """
    return asyncio.create_task(wait_random(max_delay))
