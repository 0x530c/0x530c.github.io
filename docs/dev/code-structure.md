# Code Structure

::: warning
Avoid placing functions directly in the main scope of the script file, as it may interfere with the script configuration function.
:::

::: details Click to view incorrect code structure
```python
from catscript import touch

touch.click(100, 100) # [!code error]
```
:::

The correct approach is to place your code within the main function like this:

```python
from catscript import touch

if __name__ == "__main__":
    touch.click(100, 100)
```

or

```python
from catscript import touch

def main():
    touch.click(100, 100)

if __name__ == "__main__":
    main()
```