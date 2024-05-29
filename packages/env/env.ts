import { getRuntimeVariable } from "./getRuntimeVariables";

declare const window: {
  __ENV?: any;
};

export { getRuntimeVariable };
