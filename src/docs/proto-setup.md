# Step-by-Step Guide for Setting Up Protocol Buffers

## 1. Install Protocol Buffers Compiler (`protoc`)

Download the latest `protoc` binaries for your OS from the [Protocol Buffers GitHub Releases](https://github.com/protocolbuffers/protobuf/releases).

1. Extract the downloaded zip file.
2. Add the `bin` directory to your system PATH.

```sh
    # on linux
    sudo apt install protobuf-compiler
```

## 2. Install Go Protocol Buffers Plugins

Open a terminal and navigate to your Go backend project directory.

### If `protoc-gen-go` is already installed, run:

```sh
go mod tidy
```

If you need to install protoc-gen-go, run:

```sh
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

### 3. Install protoc Packages Globally
Run the following commands to install the required protoc packages globally:

```sh
npm install -g protoc-gen-ts
npm install -g protoc-gen-js
npm install -g protoc-gen-grpc-web
```

### 4. Setup for Windows
Run the following command, adjusting <proto-files-location> to the actual location of your .proto files:

```sh
protoc --plugin=protoc-gen-ts="%cd%"/node_modules/.bin/protoc-gen-ts.cmd --proto_path=../backend/internal/grpc/proto --ts_out=./src/lib/grpc/proto --js_out=import_style=commonjs,binary:./src/lib/grpc/proto --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/lib/grpc/proto ../backend/internal/grpc/proto/<proto-files-location>

```

### Notes
Ensure all paths and file locations are correct and adjusted according to your project structure.
Double-check your system PATH to verify that the protoc binary is accessible globally.
For more detailed instructions, refer to the official documentation for each tool and plugin used in this setup.
