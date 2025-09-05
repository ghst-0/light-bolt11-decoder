#!/usr/bin/env node
import esbuild from 'esbuild'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

await esbuild
  .build({
    entryPoints: ['demo.jsx'],
    outfile: 'demo.build.js',
    bundle: true,
    plugins: [NodeGlobalsPolyfillPlugin({buffer: true})],
    define: {
      window: 'self',
      global: 'self'
    },
    sourcemap: 'inline'
  })
console.log('build success.')
