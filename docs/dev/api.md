# API Reference

We provide some HTTP APIs to remotely control CatScript.

::: tip
The base URL for these APIs is http://deviceIP:5000.
:::

## Get the Script List

```http
GET /api/script
```

### Parameters

None

### Responses

```json
{
  "error": "",
  "data": [
    "demo.py"
  ]
}
```

### Example

```shell
curl http://192.168.3.21:5000/api/script
```

## Get the Content of a Script

```http
GET /api/script/{name}
```

### Parameters

| Name | Description            |
| ---- | ---------------------- |
| name | The name of the script |

### Responses

```json
{
  "error": "",
  "data": "The content of the script"
}
```

### Example

```shell
curl http://192.168.3.21:5000/api/script/demo.py
```

## Update the Content of a Script

```http
PUT /api/script/{name}
```

### Parameters

| Name | Description                   |
| ---- | ----------------------------- |
| name | The name of the script        |
| body | The new content of the script |

### Responses

```json
{
  "error": "",
  "data": {}
}
```

### Example

```shell
curl -X PUT --data-binary @local.py http://192.168.3.21:5000/api/script/demo.py
```

## Delete a Script

```http
DELETE /api/script/{name}
```

### Parameters

| Name | Description            |
| ---- | ---------------------- |
| name | The name of the script |

### Responses

```json
{
    "error": "",
    "data": {}
}
```

### Example

```shell
curl -X DELETE http://192.168.3.21:5000/api/script/demo.py
```

## Play a Script

```http
POST /api/script/{name}/run
```

### Parameters

| Name | Description            |
| ---- | ---------------------- |
| name | The name of the script |

### Responses

```json
{
    "error": "",
    "data": {}
}
```

### Example

```shell
curl -X POST http://192.168.3.21:5000/api/script/demo.py/run
```

## Stop a Script

```http
POST /api/script/stop
```

### Parameters

None

### Responses

```json
{
    "error": "",
    "data": {}
}
```

### Example

```shell
curl -X POST http://192.168.3.21:5000/api/script/stop
```

## Get the Running Script

```http
GET /api/script/running
```

### Parameters

None

### Responses

```json
{
  "error": "",
  "data": "demo.py"
}
```

### Example

```shell
curl http://192.168.3.21:5000/api/script/running
```