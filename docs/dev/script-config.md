# Script Config

This feature enables you to create a configuration interface with predefined syntax for your script, allowing users to set configurations before executing it.

During script execution, you can retrieve user input values using the config() function provided by the script module.

## Example

```python
from catscript import script, sys

config = [
    {
        "type": "text",
        "label": "Text",
        "value": "Some text here",
    },
    {
        "id": "name",
        "label": "Name:",
        "type": "input",
    },
    {
        "id": "age",
        "type": "input",
        "label": "Age:",
        "value": "18",
    },
    {
        "id": "gender",
        "label": "Male:",
        "type": "switch",
        "value": True,
    },
    {
        "id": "color",
        "label": "Favorite color:",
        "type": "select",
        "options": ["Red", "Green", "Blue"],
    },
]

if __name__ == "__main__":
    sys.log(script.config())
```

The corresponding configuration interface is illustrated below:

![](/dev/config.png)