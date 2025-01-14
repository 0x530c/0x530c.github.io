# device

## device.ip()

> Get the device's IP address. 

```python
device.ip() -> str
```

### Arguments

None.

### Return

| Type | Description              |
| ---- | ------------------------ |
| str  | The device's IP address. |

### Example

```python
from catscript import device, sys

if __name__ == "__main__":
    sys.toast(device.ip())
```

## device.name()

> Get the device's name. 

```python
device.name() -> str
```

### Arguments

None.

### Return

| Type | Description        |
| ---- | ------------------ |
| str  | The device's name. |

### Example

```python
from catscript import device, sys

if __name__ == "__main__":
    sys.toast(device.name())
```

## device.sn()

> Get the device's unique serial number. 

```python
device.sn() -> str
```

### Arguments

None.

### Return

| Type | Description                        |
| ---- | ---------------------------------- |
| str  | The device's unique serial number. |

### Example

```python
from catscript import device, sys

if __name__ == "__main__":
    sys.toast(device.sn())
```
