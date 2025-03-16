# app

Many functions in this module require the bundle identifier of the app. You can obtain the bundle identifier of installed apps under "CatScript -> Settings -> Apps."

## app.bundle_path()

> Get the bundle path of an app.

```python
app.bundle_path(id: str) -> str
```

### Arguments

| Name | Type | Default | Description                       |
| ---- | ---- | ------- | --------------------------------- |
| id   | str  |         | The bundle identifier of the app. |

### Return

| Type | Description                 |
| ---- | --------------------------- |
| str  | The bundle path of the app. |

### Example

```python
from catscript import app, sys

if __name__ == "__main__":
    sys.log(app.bundle_path(app.front()))
```

## app.data_path()

> Get the data path of an app.

```python
app.bundle_path(id: str) -> str
```

### Arguments

| Name | Type | Default | Description                       |
| ---- | ---- | ------- | --------------------------------- |
| id   | str  |         | The bundle identifier of the app. |

### Return

| Type | Description               |
| ---- | ------------------------- |
| str  | The data path of the app. |

### Example

```python
from catscript import app, sys

if __name__ == "__main__":
    sys.log(app.data_path(app.front()))
```


## app.front()

> Get the bundle identifier of the front app.

```python
app.front() -> str
```

### Arguments

None.

### Return

| Type | Description                             |
| ---- | --------------------------------------- |
| str  | The bundle identifier of the front app. |

### Example

```python
from catscript import app, sys

if __name__ == "__main__":
    sys.log(app.front())
```

## app.run()

> Launch a specified app.

```python
app.run(id: str) -> None
```

### Arguments

| Name | Type | Default | Description                       |
| ---- | ---- | ------- | --------------------------------- |
| id   | str  |         | The bundle identifier of the app. |

### Return

None.

### Example

```python
from catscript import app

if __name__ == "__main__":
    app.run("com.apple.mobilesafari")
```

## app.kill()

> Kill a specified app.

```python
app.kill(id: str) -> None
```

### Arguments


| Name | Type | Default | Description                       |
| ---- | ---- | ------- | --------------------------------- |
| id   | str  |         | The bundle identifier of the app. |

### Return

None.

### Example

```python
from catscript import app

if __name__ == "__main__":
    app.kill("com.apple.mobilesafari")
```