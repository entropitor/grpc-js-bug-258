// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("@grpc/grpc-js");
var greeting_pb = require("./greeting_pb.js");

function serialize_HelloReply(arg) {
  if (!(arg instanceof greeting_pb.HelloReply)) {
    throw new Error("Expected argument of type HelloReply");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HelloReply(buffer_arg) {
  return greeting_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HelloRequest(arg) {
  if (!(arg instanceof greeting_pb.HelloRequest)) {
    throw new Error("Expected argument of type HelloRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HelloRequest(buffer_arg) {
  return greeting_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

// The greeting service definition.
var GreeterService = (exports.GreeterService = {
  // Sends a greeting
  sayHello: {
    path: "/Greeter/SayHello",
    requestStream: false,
    responseStream: false,
    requestType: greeting_pb.HelloRequest,
    responseType: greeting_pb.HelloReply,
    requestSerialize: serialize_HelloRequest,
    requestDeserialize: deserialize_HelloRequest,
    responseSerialize: serialize_HelloReply,
    responseDeserialize: deserialize_HelloReply
  }
});

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
