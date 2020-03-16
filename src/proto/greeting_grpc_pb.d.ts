// package:
// file: greeting.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as greeting_pb from "./greeting_pb";

interface IGreeterService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello
  extends grpc.MethodDefinition<
    greeting_pb.HelloRequest,
    greeting_pb.HelloReply
  > {
  path: string; // "/.Greeter/SayHello"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<greeting_pb.HelloRequest>;
  requestDeserialize: grpc.deserialize<greeting_pb.HelloRequest>;
  responseSerialize: grpc.serialize<greeting_pb.HelloReply>;
  responseDeserialize: grpc.deserialize<greeting_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
  sayHello: grpc.handleUnaryCall<
    greeting_pb.HelloRequest,
    greeting_pb.HelloReply
  >;
}

export interface IGreeterClient {
  sayHello(
    request: greeting_pb.HelloRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: greeting_pb.HelloReply
    ) => void
  ): grpc.ClientUnaryCall;
  sayHello(
    request: greeting_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: greeting_pb.HelloReply
    ) => void
  ): grpc.ClientUnaryCall;
  sayHello(
    request: greeting_pb.HelloRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: greeting_pb.HelloReply
    ) => void
  ): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: object
  );
  public sayHello(
    request: greeting_pb.HelloRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: greeting_pb.HelloReply
    ) => void
  ): grpc.ClientUnaryCall;
  public sayHello(
    request: greeting_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: greeting_pb.HelloReply
    ) => void
  ): grpc.ClientUnaryCall;
  public sayHello(
    request: greeting_pb.HelloRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: greeting_pb.HelloReply
    ) => void
  ): grpc.ClientUnaryCall;
}
