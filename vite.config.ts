import { defineConfig } from "vite";

// Замените 'repo-name' на НАЗВАНИЕ вашего репозитория на GitHub!
const repoName = "vite-test";

export default defineConfig({
  base: `/${repoName}/`,
  build: {
    outDir: "docs" // так удобно публиковать на Pages без GitHub Actions
  }
});