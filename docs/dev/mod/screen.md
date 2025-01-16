# screen

In CatScript, colors are represented in hexadecimal format (int type). For example:

| Name  | Hex     | CatScript Representation |
| ----- | ------- | ------------------------ |
| Red   | #FF0000 | 0xFF0000                 |
| Green | #00FF00 | 0x00FF00                 |
| Blue  | #0000FF | 0x0000FF                 |

## screen.size()

> Get the screen size.

```python
screen.size() -> tuple[int, int]
```

### Arguments

None.

### Return

| Type            | Description      |
| --------------- | ---------------- |
| tuple[int, int] | The screen size. |

### Example

```python
from catscript import screen, sys

if __name__ == "__main__":
    (w, h) = screen.size()
    sys.log(f"Screen size: ({w}, {h}).")
```

## screen.color()

> Get the color of a specified coordinate.

```python
screen.color(x: int, y: int) -> int
```

### Arguments

| Name | Type | Default | Description   |
| ---- | ---- | ------- | ------------- |
| x    | int  |         | Coordinate x. |
| y    | int  |         | Coordinate y. |

### Return

| Type | Description |
| ---- | ----------- |
| int  | The color.  |

### Example

```python
from catscript import screen, sys

if __name__ == "__main__":
    color = screen.color(100, 100)
    sys.log(f"The color is {color:#06x}.")
```

## screen.is_color()

> Determine if the color at the specified coordinate meets the condition.

::: tip
You can quickly generate the code for this function using the code template feature in CatScript's developer tools.
:::

```python
screen.is_color(colors: list[tuple[int, int, int]], precision: float = 1.0) -> bool
```

### Arguments

| Name      | Type                       | Default | Description                                                   |
| --------- | -------------------------- | ------- | ------------------------------------------------------------- |
| colors    | list[tuple[int, int, int]] |         | The list of coordinate colors to compare.                     |
| precision | float                      | 1.0     | The precision when comparing colors, ranging from 0.1 to 1.0. |

### Return

| Type | Description                     |
| ---- | ------------------------------- |
| bool | Whether it meets the condition. |

### Example

```python
from catscript import screen, sys

if __name__ == "__main__":
    if screen.is_color(
        [
            (378, 474, 0x4D92B1),
            (191, 357, 0x96988B),
            (397, 232, 0x21808A),
        ],
        precision=0.9,
    ):
        sys.log("Yes.")
    else:
        sys.log("No.")
```

## screen.find_color()

> Find coordinates that meet the condition.

::: tip
You can quickly generate the code for this function using the code template feature in CatScript's developer tools.
:::

```python
screen.find_color(color: int, offset: list[tuple[int, int, int]] = [], precision: float = 1.0, region: tuple[int, int, int, int] = (0, 0, -1, -1), max_miss: int = 0, all: bool = False) -> list[tuple[int, int]]
```

### Arguments

| Name      | Type                       | Default        | Description                                                                                                                                                                   |
| --------- | -------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color     | int                        |                | The color to find.                                                                                                                                                            |
| offset    | list[tuple[int, int, int]] | []             | Additional conditions added to the colors being searched.                                                                                                                     |
| precision | float                      | 1.0            | The precision when comparing colors, ranging from 0.1 to 1.0.                                                                                                                 |
| region    | tuple[int, int, int, int]  | (0, 0, -1, -1) | The search range, formatted as (top-left x, top-left y, bottom-right x, bottom-right y), where the last two values can be -1 to represent the width and height of the screen. |
| max_miss  | int                        | 0              | The maximum allowable difference in quantity when comparing the offset argument.                                                                                              |
| all       | bool                       | False          | Whether to return all coordinates that meet the conditions.                                                                                                                   |

### Return

| Type                  | Description                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| list[tuple[int, int]] | The coordinates that meet the conditions. A coordinate value of -1 indicates that it was not found. |

### Example

::: code-group

```python [Example 1]
from catscript import screen, sys

if __name__ == "__main__":
    # Find the red color on the screen.
    (x, y) = screen.find_color(0xFF0000)[0]
    if x != -1 and y != -1:
        sys.log(f"Color is at ({x}, {y}).")
    else:
        sys.log("Not found.")
```

```python [Example 2]
from catscript import screen, sys

if __name__ == "__main__":
    # Find red color on the screen, assuming its coordinates are (x, y), with the requirement:
    # - the color at the position (x + 10, y - 10) is green
    # - the color at the position (x + 20, y + 30) is blue.
    (x, y) = screen.find_color(
        0xFF0000, offset=[(10, -10, 0x00FF00), (20, 30, 0x0000FF)]
    )[0]
    if x != -1 and y != -1:
        sys.log(f"Color is at ({x}, {y}).")
    else:
        sys.log("Not found.")
```

```python [Example 3]
from catscript import screen, sys

if __name__ == "__main__":
    # Find red color on the screen region (0, 0, 500, 500), assuming its coordinates are (x, y), with the requirement:
    # - the color at the position (x + 10, y - 10) is green.
    # - the color at the position (x + 20, y + 30) is blue.
    #
    # Additionally:
    # - The precision is 0.9 when comparing colors.
    # - Allowing one point's color to not meet the condition.
    # - Return all coordinates that meet the condition.
    coordinates = screen.find_color(
        0xFF0000,
        offset=[(10, -10, 0x00FF00), (20, 30, 0x0000FF)],
        precision=0.9,
        region=(0, 0, 500, 500),
        max_miss=1,
        all=True,
    )
    if coordinates[0][0] != -1 and coordinates[0][1] != -1:
        for index, (x, y) in coordinates:
            sys.log(f"<{index}>: (${x}, ${y}).")
    else:
        sys.log("Not found.")
```
:::

## screen.find_image()

> Find image on the screen.

```python
screen.find_image(path: str, ignore: list[int] = [], precision: float = 1.0, region: tuple[int, int, int, int] = (0, 0, -1, -1), max_miss: int = 0, all: bool = False) -> list[tuple[int, int]]
```

### Arguments

| Name      | Type                      | Default        | Description                                                                                                                                                                   |
| --------- | ------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path      | str                       |                | The path of image to find.                                                                                                                                                    |
| ignore    | list[int]                 | []             | Colors ignored when comparing images.                                                                                                                                         |
| precision | float                     | 1.0            | The precision when comparing colors, ranging from 0.1 to 1.0.                                                                                                                 |
| region    | tuple[int, int, int, int] | (0, 0, -1, -1) | The search range, formatted as (top-left x, top-left y, bottom-right x, bottom-right y), where the last two values can be -1 to represent the width and height of the screen. |
| max_miss  | int                       | 0              | The maximum allowable difference in quantity when comparing the image.                                                                                                        |
| all       | bool                      | False          | Whether to return all coordinates that meet the conditions.                                                                                                                   |

### Return

| Type                  | Description                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| list[tuple[int, int]] | The coordinates that meet the conditions. A coordinate value of -1 indicates that it was not found. |

### Example

```python
from catscript import screen, sys

if __name__ == "__main__":
    # Find the image of the path /tmp/a.png on the screen region (0, 0, 500, 500).
    #
    # Additionally:
    # - Ignore white and black color when comparing images, treating them as transparent color.
    # - The precision is 0.9 when comparing colors of image.
    # - Allowing one point's color to not meet the condition.
    # - Return all coordinates that meet the condition.
    (x, y) = screen.find_image(
        "/tmp/a.png",
        ignore=[0xFFFFFF, 0x000000],
        precision=0.9,
        region=(0, 0, 500, 500),
        max_miss=1,
        all=False,
    )[0]
    if x != -1 and y != -1:
        sys.log(f"Image is at ({x}, {y}).")
    else:
        sys.log("Not found.")
```

## screen.snapshot()

> Save the screen snapshot to a specified path.

```python
screen.snapshot(path: str, region: tuple[int, int, int, int] = (0, 0, -1, -1), scale: float = 1.0) -> None
```

### Arguments

| Name   | Type                      | Default        | Description                                                                                                                                                                   |
| ------ | ------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path   | str                       |                | The path to save the screen snapshot.                                                                                                                                         |
| region | tuple[int, int, int, int] | (0, 0, -1, -1) | The search range, formatted as (top-left x, top-left y, bottom-right x, bottom-right y), where the last two values can be -1 to represent the width and height of the screen. |
| scale  | float                     | 1.0            | Screenshot scaling ratio, ranging from 0.1 to 1.0.                                                                                                                            |

### Return

| Type                  | Description                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| list[tuple[int, int]] | The coordinates that meet the conditions. A coordinate value of -1 indicates that it was not found. |

### Example

```python
from catscript import screen

if __name__ == "__main__":
    screen.snapshot("/tmp/snapshot.png", region=(0, 0, 500, 500), scale=0.5)
```