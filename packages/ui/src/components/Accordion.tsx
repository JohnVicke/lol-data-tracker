import React from "react";

type AccordionHeaderProps = React.PropsWithChildren;
type AccordionDetailsProps = React.PropsWithChildren;

export const AccordionHeader = ({ children }: AccordionHeaderProps) => <>{children}</>;

export const AccordionDetails = ({ children }: AccordionDetailsProps) => <>{children}</>;

type AccordionBlocks = {
  ["AccordionHeader"]?: () => ReturnType<typeof AccordionHeader>;
  ["AccordionDetails"]?: () => ReturnType<typeof AccordionDetails>;
};

const getAccordionBlocks = (children: JSX.Element[]) =>
  [AccordionHeader, AccordionDetails].reduce((prev, type) => {
    const child = children.find(child => child.type === type);
    return { ...prev, [type.name]: () => child };
  }, {} as AccordionBlocks);

export type AccordionProps = {
  children: JSX.Element[] | JSX.Element;
};

export const Accordion = ({ children }: AccordionProps) => {
  if (!Array.isArray(children)) {
    return <>{children}</>;
  }

  const { AccordionHeader, AccordionDetails } = getAccordionBlocks(children);

  return (
    <div>
      {AccordionHeader && <AccordionHeader />}
      {AccordionDetails && <AccordionDetails />}
    </div>
  );
};
