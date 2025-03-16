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
    button = sys.alert("Test message.")
    sys.log(f"You pressed {button}.")
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
    sys.log(sys.execute("whoami").strip())
```

## sys.log()

> Output any object to logs, logs can be viewed in the VS Code extension and also in "CatScript -> Settings -> Logs".

```python
sys.log(object: object) -> None
```

### Arguments

| Name   | Type   | Default | Description        |
| ------ | ------ | ------- | ------------------ |
| object | object |         | The object to log. |

### Return

None

### Example

```python
from catscript import sys

if __name__ == "__main__":
    sys.log(device.ip())
```

## sys.open_url()

> Open the resource at the specified URL.

::: tip
You can obtain a list of supported settings URLs [here](https://github.com/FifiTheBulldog/ios-settings-urls/blob/master/settings-urls.md).
:::

```python
sys.open_url(url: str) -> None
```

### Arguments

| Name | Type | Default | Description      |
| ---- | ---- | ------- | ---------------- |
| url  | str  |         | The URL to open. |

### Return

None

### Example

```python
from catscript import sys

if __name__ == "__main__":
    sys.open_url("https://catscript.app")
    sys.open_url("sms://12345")
    sys.open_url("prefs:root=WIFI")
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

## sys.play_sound()

> Plays a system sound.

::: tip
You can obtain a list of system sound ids [here](https://github.com/TUNER88/iOSSystemSoundsLibrary).
:::

```python
sys.play_sound(id: int) -> None
```

### Arguments

| Name | Type | Default | Description             |
| ---- | ---- | ------- | ----------------------- |
| id   | int  |         | The id of system sound. |

### Return

None

### Example

```python
from catscript import sys

if __name__ == "__main__":
    sys.play_sound(1005)
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

