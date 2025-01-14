# threading

> https://docs.python.org/3.10/library/threading.html

You can use Python's threading to handle multiple tasks in parallel. In the example below, there are two tasks, each waiting in a loop for specific conditions to appear on the screen, and they perform corresponding actions when the conditions are met.

```python
import time
from threading import Thread
from catscript import key, screen, touch

def task1():
    while True:
        if screen.is_color([(434, 251, 0x036076), (500, 331, 0x11B090)]):
            touch.click(300, 300)
        time.sleep(1)

def task2():
    while True:
        if screen.is_color([(111, 169, 0x056577), (52, 226, 0xFFFFFF)]):
            key.click("Home")
        time.sleep(1)

if __name__ == "__main__":
    threads = [Thread(target=task) for task in [task1, task2]]
    for thread in threads:
        thread.start()
    for thread in threads:
        thread.join()
```