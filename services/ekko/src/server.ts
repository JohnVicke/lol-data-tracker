import { createApp } from "./api";
import { env } from "./env/server";

const port = env.PORT;

const app = createApp();

if (require.main === module) {
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}
