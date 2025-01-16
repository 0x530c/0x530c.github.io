# API Reference

We provide some HTTP APIs to remotely control the behavior of CatScript.

::: tip
The base URL for these APIs is http://deviceIP:5000.
:::

## Play a Script

```http
POST /api/script/demo.py/run
```

```json
{
    "error": "",
    "data": {}
}
```

## Stop a Script

```http
POST /api/script/stop
```

```json
{
    "error": "",
    "data": {}
}
```