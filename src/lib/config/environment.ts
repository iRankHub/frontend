interface Environment {
  mode: 'web' | 'desktop';
  api: {
    baseUrl: string;
    grpcPort: number;
  };
  storage: {
    type: 'local' | 'remote';
    endpoint?: string;
  };
}

const webConfig: Environment = {
  mode: 'web',
  api: {
    baseUrl: 'https://backend.irankhub.debaterwanda.org',
    grpcPort: 10000
  },
  storage: {
    type: 'remote',
    endpoint: 'https://irankhub-bucket.it-mil-1.linodeobjects.com'
  }
};

const desktopConfig: Environment = {
  mode: 'desktop',
  api: {
    baseUrl: 'http://localhost',
    grpcPort: 8080
  },
  storage: {
    type: 'local'
  }
};

export const env: Environment =
  import.meta.env.VITE_APP_MODE === 'desktop' ? desktopConfig : webConfig;

export const isDesktop = () => env.mode === 'desktop';