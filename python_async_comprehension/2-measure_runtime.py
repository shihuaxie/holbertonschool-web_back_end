#!/usr/bin/env python3
"""
Measure runtime of 4 parallel async comprehensions
"""

import time
import asyncio


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Execute async_comprehension 4 times in parallel using asyncio.gather
    and return the total runtime.
    """
    start = time.time()

    # Run 4 coroutines concurrently
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
    )

    end = time.time()
    return end - start
