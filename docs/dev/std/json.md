# json

> https://docs.python.org/3.10/library/json.html

```python
import json
from catscript import sys

if __name__ == "__main__":
    value = {"a": 1, "b": 2}
    s = json.dumps(value)
    sys.log(s)
    sys.log(json.loads(s)["a"])
```