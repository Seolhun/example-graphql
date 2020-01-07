import React, { Ref, useEffect } from "react";

type ButtonProps = React.HTMLProps<HTMLButtonElement>;

interface LogComponentProps {
  forwardedRef: Ref<any>;
}

function withLog(Component: any) {
  const LogProps = ({ forwardedRef, ...rest }: LogComponentProps) => {
    useEffect(() => {
      console.log("Hello");
    }, []);
    return <Component ref={forwardedRef} {...rest} />;
  };

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

const FancyButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  )
);

export default withLog(FancyButton);
