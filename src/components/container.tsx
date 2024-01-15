import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type TContainer = ComponentPropsWithoutRef<"div">;

const Container = ({ className, ...props }: TContainer) => {
  return <div className={clsx("max-w-screen-lg mx-auto", className)} {...props} />;
};

export default Container;
