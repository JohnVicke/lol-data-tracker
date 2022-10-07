import { createApp } from "./api";
import { env } from "./env/server";
import { gracefulShutdown } from "./gracefulShutdown";

const port = env.PORT;

const app = createApp();

if (require.main === module) {
  const server = app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });

  gracefulShutdown(server);
}
