# device

## device.battery_level()

> Get the device's battery level. 

```python
device.battery_level() -> float
```

### Arguments

None.

### Return

| Type  | Description                                          |
| ----- | ---------------------------------------------------- |
| float | The device's battery level, ranging from 0.0 to 1.0. |

### Example

```python
from catscript import device, sys

if __name__ == "__main__":
    sys.log(device.battery_level())
```


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
    sys.log(device.ip())
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
    sys.log(device.name())
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
    sys.log(device.sn())
```
