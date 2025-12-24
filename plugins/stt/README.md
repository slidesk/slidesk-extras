# Speech To Text

This plugin uses WebAPI Speech Recognition. It works only on Chromium-based & Safari browsers.

You have to use the ssl connection to activate it.

SliDesk allows https when in the `.env` file this configuration is precised.

```
KEY=./server.key
CERT=./server.crt
HTTPS=true
```

To generate the two files, use this following command:

```
openssl req -new -x509 -nodes -days 365 -keyout server.key -out server.crt
```
