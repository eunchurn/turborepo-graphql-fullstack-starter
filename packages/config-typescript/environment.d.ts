declare global {
  namespace NodeJS {
    /* Extending the NodeJS.ProcessEnv interface with the new properties. */
    export interface ProcessEnv extends NodeJS.ProcessEnv {
      /**
       * `PORT`: App port number
       */
      PORT?: string;
      /**
       * `NODE_ENV`: NodeJS environment (`production`, `development`, `test`) Node 실행 환경을 의미합니다.
       */
      NODE_ENV?: string;
      /**
       * API Key
       */
      API_SECRET: string;
      /**
       * Client domain
       */
      CLIENT_DOMAIN: string;
      /**
       * API domain
       */
      API_DOMAIN: string;
      /**
       * Auth domain
       */
      AUTH_DOMAIN: string;
    }
  }
}

export {};
