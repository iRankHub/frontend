```sh
protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
       --proto_path=../backend/internal/grpc/proto \
       --ts_out=./src/utils \
       --js_out=import_style=commonjs,binary:./src/utils \
       --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/utils \
       ../backend/internal/grpc/proto/auth.proto
```

### windows

```sh
protoc --plugin=protoc-gen-ts="%cd%"/node_modules/.bin/protoc-gen-ts.cmd --proto_path=../backend/internal/grpc/proto --ts_out=./src/lib/grpc/proto --js_out=import_style=commonjs,binary:./src/lib/grpc/proto --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/lib/grpc/proto ../backend/internal/grpc/proto/authentication/auth.proto
```
