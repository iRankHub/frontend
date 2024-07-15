protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
       --proto_path=../backend/internal/grpc/proto \
       --ts_out=./src/utils \
       --js_out=import_style=commonjs,binary:./src/utils \
       --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/utils \
       ../backend/internal/grpc/proto/auth.proto