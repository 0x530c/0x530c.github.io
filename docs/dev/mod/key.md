# key

The supported key codes are:

- Backspace
- Enter
- Home

## key.click()

> Click a key.

```python
key.click(code: str) -> None
```

### Arguments

| Name | Type | Default | Description   |
| ---- | ---- | ------- | ------------- |
| code | str  |         | The key code. |

### Return

None.

### Example

```python
import time
from catscript import key

if __name__ == "__main__":
    key.click("Home")
```

## key.down()

> Press down a key.

```python
key.down(code: str) -> None
```

### Arguments

| Name | Type | Default | Description   |
| ---- | ---- | ------- | ------------- |
| code | str  |         | The key code. |

### Return

None.

### Example

```python
import time
from catscript import key

if __name__ == "__main__":
    key.down("Home")
    time.sleep(0.1)
    key.up("Home")
```

## key.up()

> Release a key.

```python
key.up(code: str) -> None
```

### Arguments

| Name | Type | Default | Description   |
| ---- | ---- | ------- | ------------- |
| code | str  |         | The key code. |

### Return

None.

### Example

```python
import time
from catscript import key

if __name__ == "__main__":
    key.down("Home")
    time.sleep(0.1)
    key.up("Home")
```
