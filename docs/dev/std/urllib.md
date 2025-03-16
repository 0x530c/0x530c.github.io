# urllib

> https://docs.python.org/3.10/library/urllib.html

::: tip
When using HTTPS, you need to pass an additional context parameter.
:::

## GET Method

HTTP:

```python
from urllib.request import urlopen
from catscript import sys

if __name__ == "__main__":
    response = urlopen("http://httpbin.org/get")
    sys.log(response.status)
    data = response.read()
    sys.log(data)
```

HTTPS:

```python
import ssl
from urllib.request import urlopen
from catscript import sys

if __name__ == "__main__":
    response = urlopen("https://httpbin.org/get", context=ssl.SSLContext())
    sys.log(response.status)
    data = response.read()
    sys.log(data)
```

## POST Method

HTTP:

```python
import urllib.parse
from urllib.request import urlopen
from catscript import sys

if __name__ == "__main__":
    params = urllib.parse.urlencode({"name": "test"}).encode()
    response = urlopen("http://httpbin.org/post", params)
    sys.log(response.status)
    data = response.read()
    sys.log(data)
```

HTTPS:

```python
import ssl
import urllib.parse
from urllib.request import urlopen
from catscript import sys

if __name__ == "__main__":
    params = urllib.parse.urlencode({"name": "test"}).encode()
    response = urlopen("https://httpbin.org/post", params, context=ssl.SSLContext())
    sys.log(response.status)
    data = response.read()
    sys.log(data)
```