# script

## script.config()

> Get the user's custom config of this script.

::: tip
Users can configure scripts by selecting "Configure" in the script's action sheet.
:::

```python
script.config() -> dict
```

### Arguments

None.

### Return

| Type | Description                                           |
| ---- | ----------------------------------------------------- |
| dict | The config value dict, key is the id field in config. |

### Example

```python
from catscript import script, sys

config = [
    {
        "id": "name",
        "type": "input",
        "label": "Name:",
        "value": "",
    }
]

if __name__ == "__main__":
    sys.log(script.config()["name"])
```
