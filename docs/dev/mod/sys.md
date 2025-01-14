# sys

## sys.alert()

> Display a dialog box.

```python
sys.alert(text: str) -> str
```

### Arguments

| Name | Type | Default | Description          |
| ---- | ---- | ------- | -------------------- |
| text | str  |         | The message to show. |

### Return

| Type | Description                                  |
| ---- | -------------------------------------------- |
| str  | The name of the button selected by the user. |

### Example

```python
from catscript import sys

if __name__ == "__main__":
    sys.toast(sys.alert("Test"))
```

## sys.execute()

> Execute a shell command and get its output.

```python
sys.execute(command: str) -> str
```

### Arguments

| Name    | Type | Default | Description             |
| ------- | ---- | ------- | ----------------------- |
| command | str  |         | The command to execute. |

### Return

| Type | Description            |
| ---- | ---------------------- |
| str  | The output of command. |

### Example

```python
from catscript import sys

if __name__ == "__main__":
    sys.toast(sys.execute("whoami").strip())
```

## sys.paste()

> Paste text into the input box.

::: tip
In the latest iOS system, when pasting, there will be a dialog box asking for permission. You can use the functions in the touch module to click the "Allow Paste" button.
:::

```python
sys.paste(text: str) -> None
```

### Arguments

| Name | Type | Default | Description        |
| ---- | ---- | ------- | ------------------ |
| text | str  |         | The text to paste. |

### Return

None.

### Example

```python
from catscript import device, sys

if __name__ == "__main__":
  sys.paste(device.ip())
```

## sys.toast()

> Display a toast.

```python
sys.toast(text: str, ms: int) -> None
```

### Arguments

| Name | Type | Default | Description                          |
| ---- | ---- | ------- | ------------------------------------ |
| text | str  |         | The message to show.                 |
| ms   | int  | 1000    | The displayed time, in milliseconds. |

### Return

None.

### Example

```python
from catscript import sys

if __name__ == "__main__":
    sys.toast("Test", 3000) 
```

