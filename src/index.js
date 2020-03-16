const grpc = require("@grpc/grpc-js");
const { GreeterService } = require("./proto/greeting_grpc_pb");
const { HelloReply } = require("./proto/greeting_pb.js");

const server = new grpc.Server();

const greeterHandler = {
  sayHello(call, callback) {
    const reply = new HelloReply();
    reply.setMessage(`Hello ${call.request.getName()}`);
    callback(null, reply);
  }
};
// register all the handler here...
server.addService(GreeterService, greeterHandler);

let started = 0;
const onBound = error => {
  if (error) {
    console.error("error", error);
    return;
  }

  started++;
  if (started >= 2) {
    console.log("starting...");
    server.start();
  }
};
server.bindAsync(
  "unix:///tmp/test.sock",
  grpc.ServerCredentials.createInsecure(),
  onBound
);
server.bindAsync(
  "localhost:3000",
  grpc.ServerCredentials.createInsecure(),
  onBound
);
