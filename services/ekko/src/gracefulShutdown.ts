import type { Server } from "http";

const handleSignal = (server: Server, signal: string) => {
  process.on(signal, () => {
    console.log(`${signal} signal received: closing HTTP server`);

    server.close(() => {
      console.log("HTTP server closed");
    });
  });
};

export const gracefulShutdown = (server: Server) => {
  handleSignal(server, "SIGTERM");
  handleSignal(server, "SIGINT");
};
