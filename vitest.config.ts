import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      clearMocks: true,
      reporters: ['default', 'json'],
      outputFile: 'results/vitest-results.json',
      sequence: {
        shuffle: true
      },
      coverage: {
        provider: 'istanbul',
        all: true,
        exclude: [...configDefaults.coverage.exclude!, 'src/main.ts', 'src/router.ts', 'src/models'],
        reporter: ['json-summary', 'text', 'html']
      }
    }
  })
);
