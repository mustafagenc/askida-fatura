import type { NextConfig } from 'next';

const config: NextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
                port: '',
                pathname: '/**'
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: false
    }
};

export default config;
