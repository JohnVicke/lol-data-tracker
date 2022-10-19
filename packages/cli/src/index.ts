import { createComponent } from "./create-component/new-component";

const main = async () => {
  await createComponent();
};

main().catch(err => {
  console.error(err);
  process.exit(1);
});
