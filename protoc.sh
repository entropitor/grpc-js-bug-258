#!/usr/bin/env bash

BASEDIR=$(dirname "$0")

NODE_PATH="./node_modules/.bin"
PROTOC_GEN_TS_PATH="$NODE_PATH/protoc-gen-ts"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="$NODE_PATH/grpc_tools_node_protoc_plugin"
GRPC_TOOLS_NODE_PROTOC="$NODE_PATH/grpc_tools_node_protoc"

for f in ./src/proto/*; do
  filename=$(basename $f)
  extension="${filename##*.}"
  base="${filename%.*}"

  # skip the non proto files
  if [ "${extension}" != "proto" ]; then
      continue
  fi

  echo $f

  dir=$(dirname $f)

  # loop over all the available proto files and compile them into respective dir
  # JavaScript code generating
  ${GRPC_TOOLS_NODE_PROTOC} \
      --js_out=import_style=commonjs,binary:"${dir}" \
      --grpc_out="${dir}" \
      --plugin=protoc-gen-grpc="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
      -I "${dir}" \
      "${f}"

  ${GRPC_TOOLS_NODE_PROTOC} \
      --plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
      --ts_out="${dir}" \
      -I "${dir}" \
      "${f}"

  sed -i "" -e '
    s/^export namespace/export declare namespace/g
    s/const csiSecret/declare const csiSecret/g
  ' "${dir}/${base}_pb.d.ts"
done

$NODE_PATH/prettier --write src/proto/**.{js,ts}
