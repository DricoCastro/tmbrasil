import * as React from "react";
import { SVGProps } from "react";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 16.95 16.95"
    {...props}
  >
    <path
      className="a"
      d="M11.716 0h-6.48A5.242 5.242 0 0 0 0 5.236v6.48a5.242 5.242 0 0 0 5.236 5.238h6.48a5.244 5.244 0 0 0 5.238-5.238v-6.48A5.242 5.242 0 0 0 11.716 0Zm3.348 11.716a3.352 3.352 0 0 1-3.348 3.348h-6.48a3.35 3.35 0 0 1-3.346-3.348v-6.48A3.35 3.35 0 0 1 5.236 1.89h6.48a3.35 3.35 0 0 1 3.348 3.346Z"
    />
    <path
      className="a"
      d="M8.476 4.142a4.333 4.333 0 1 0 4.34 4.33 4.333 4.333 0 0 0-4.34-4.33Zm0 6.965a2.632 2.632 0 1 1 2.632-2.635 2.632 2.632 0 0 1-2.632 2.632ZM13.027 3.159a.732.732 0 1 0 .732.732.732.732 0 0 0-.732-.732Z"
    />
  </svg>
);

export default InstagramIcon;
