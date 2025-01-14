# Introduction

## What is CatScript?

CatScript is an automation framework designed for the iOS platform. It is built on Python 3.10 and provides a wide range of modules to create customized automation scripts efficiently.

## Basic Logic

The essential modules for script development in CatScript are the screen module and the touch module. The screen module facilitates screen data inspection, while the touch module enables tapping on specific locations, similar to human interactions. The script's logic replicates human operations: it detects specific screen conditions and triggers corresponding actions.

## Script Directory

The default script directory for CatScript is */var/mobile/Media/CatScript*.

## Example

Here is a simple script example using CatScript:

```python
from catscript import screen, touch

if __name__ == "__main__":
    if screen.is_color([(100, 100, 0x00FF00), (200, 200, 0x0000FF)]):
        touch.click(500, 500)
```

In this script, if the color at screen coordinates (100, 100) is #00FF00 and at (200, 200) is #0000FF, a click action is triggered at coordinates (500, 500).