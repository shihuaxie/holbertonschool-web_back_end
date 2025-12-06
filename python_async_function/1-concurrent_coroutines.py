#!/usr/bin/env python3
"""
Concurrent coroutines using wait_random
"""

import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with the specified max_delay.
    Return the list of all delays in ascending order,
    without using sort(), by collecting them as tasks complete.
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays: List[float] = []

    # asyncio.as_completed yields tasks in the order they finish
    for coro in asyncio.as_completed(tasks):
        delay = await coro
        delays.append(delay)
    return delays
