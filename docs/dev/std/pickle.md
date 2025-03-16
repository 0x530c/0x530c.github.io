# pickle

> https://docs.python.org/3.10/library/pickle.html 

```python
import pickle
from catscript import sys

if __name__ == "__main__":
    data = {
        "a": [1, 2, 3],
        "b": "string",
        "c": {None, True, False},
    }
    with open("/tmp/data.pickle", "wb") as f:
        pickle.dump(data, f)

    with open("/tmp/data.pickle", "rb") as f:
        sys.log(pickle.load(f)["b"])
```