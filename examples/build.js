#!/usr/bin/env node
import esbuild from 'esbuild'

await esbuild
  .build({
    entryPoints: ['demo.jsx'],
    outfile: 'demo.build.js',
    bundle: true,
    define: {
      window: 'self',
      global: 'self'
    },
    sourcemap: 'inline'
  })
console.log('build success.')
