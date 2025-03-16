# CatScript Modules

Apart from Python's standard library, CatScript provides several automation modules:

| Module | Features                      |
| ------ | ----------------------------- |
| app    | App-related functions.        |
| device | Device information retrieval. |
| key    | Keyboard event sending.       |
| screen | Screen-related functions.     |
| script | Script-related functions.     |
| sys    | System-related functions.     |
| touch  | Touch event sending.          |

You can import all modules at once:

 ```python
 from catscript import *
 ```

or selectively import as needed:

```python
from catscript import screen, touch
```
