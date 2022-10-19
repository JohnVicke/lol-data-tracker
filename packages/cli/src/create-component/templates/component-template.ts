export const getComponentTemplate = (name: string) =>
  `import React from "react";

export type ${name}Props = {
  foo: string;
};

export const ${name} = ({ foo }: ${name}Props) => {
  return <div>{foo}</div>;
};

`;
