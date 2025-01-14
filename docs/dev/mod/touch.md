# touch

## touch.click()

> Click the screen.

```python
touch.click(x: int, y: int, id: int = 1) -> None
```

### Arguments

| Name | Type | Default | Description   |
| ---- | ---- | ------- | ------------- |
| x    | int  |         | Coordinate x. |
| y    | int  |         | coordinate y. |
| id   | int  | 1       | Finger id.    |

### Return

None.

### Example

```python
import time
from catscript import touch

if __name__ == "__main__":
    touch.click(100, 100)
```

## touch.down()

> Press the finger on the screen.

```python
touch.down(x: int, y: int, id: int = 1) -> None
```

### Arguments

| Name | Type | Default | Description   |
| ---- | ---- | ------- | ------------- |
| x    | int  |         | Coordinate x. |
| y    | int  |         | coordinate y. |
| id   | int  | 1       | Finger id.    |

### Return

None.

### Example

```python
import time
from catscript import touch

if __name__ == "__main__":
    touch.down(100, 100)
    time.sleep(0.1)
    touch.up()
```

## touch.move()

> Move the finger on the screen.

```python
touch.move(x: int, y: int, id: int = 1) -> None
```

### Arguments

| Name | Type | Default | Description   |
| ---- | ---- | ------- | ------------- |
| x    | int  |         | Coordinate x. |
| y    | int  |         | coordinate y. |
| id   | int  | 1       | Finger id.    |

### Return

None.

### Example

```python
import time
from catscript import touch

def slide_x(start, end, step, y):
    xs = range(start + step, end, step)
    touch.down(start, y)
    time.sleep(0.01)
    for x in xs:
        touch.move(x, y)
        time.sleep(0.01)
    touch.up()

if __name__ == "__main__":
    slide_x(100, 500, 20, 500)
```

## touch.up()

> Lift the finger off the screen.

```python
touch.up(id: int = 1) -> None
```

### Arguments

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| id   | int  | 1       | Finger id.  |

### Return

None.

### Example

```python
import time
from catscript import touch

if __name__ == "__main__":
    touch.down(100, 100)
    time.sleep(0.1)
    touch.up()
```
