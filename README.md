# Running the server

```bash
rm /tmp/test.sock && node src/index.js
```

## Testing over HTTP

```bash
grpcurl -d '{"name": "test"}' -import-path ./src/proto -proto greeting.proto -plaintext localhost:3000 Greeter/SayHello
```

This works

## Testing over UNIX sockets

```bash
grpcurl -d '{"name": "test"}' -import-path ./src/proto -proto greeting.proto -plaintext -unix /tmp/test.sock Greeter/SayHello
```

This errors with

ERROR:
Code: Internal
Message: stream terminated by RST_STREAM with error code: PROTOCOL_ERROR
