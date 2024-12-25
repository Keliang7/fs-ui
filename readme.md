packages
core npm 包入口
docs 文档

//根目录

pnpm add -Dw typescript@^5.2.2 vite@^5.1.4 vitest@^1.4.0 vue-tsc@^1.8.27 postcss-color-mix@^1.1.0 postcss-each@^1.1.0 postcss-each-variables@^0.3.0 postcss-for@^2.1.1 postcss-nested@^6.0.1 @types/node@^20.11.20 @types/lodash-es@^4.17.12 @vitejs/plugin-vue@^5.0.4 @vitejs/plugin-vue-jsx@^3.1.0 @vue/tsconfig@^0.5.1

pnpm add -w lodash-es@^4.17.21 vue@^3.4.19

"dependencies": {
"lodash-es": "^4.17.21",
"vue": "^3.4.19",
"fs-ui":"workspace:_",
"@fs-ui/components":"workspace:_",
"@fs-ui/hooks":"workspace:_",
"@fs-ui/utils":"workspace:_",
"@fs-ui/theme":"workspace:\*"
}

每一项的含义
• 依赖项名称：
• fs-ui、@fs-ui/components、@fs-ui/hooks 等是你 Monorepo 中的子项目（或包）。
• 每个子项目通常有自己的 package.json，定义了它的内容和功能。
• workspace:\*：
• 是一个特殊的版本约束，用于告诉 pnpm：
• 依赖于同一个工作区中的其他包。
• 如果当前工作区中存在这些包（比如在 packages 目录下），pnpm 会将它们链接到一起，而不是从远程（如 npm registry）下载。
• 通过这种链接机制，你可以在多个包之间共享代码，同时保持依赖一致。

//components
pnpm add -D @vue/test-utils@^2.4.5 @vitest/coverage-v8@^1.4.0 jsdom@^24.0.0 --filter @fs-ui/components
pnpm add @popperjs/core@^2.11.8 async-validator@^4.2.5 --filter @fs-ui/components

--filter @fs-ui/components
限定命令的作用范围：
• 仅为 @fs-ui/components 这个子包（在 Monorepo 中的一个子项目）安装这些依赖。
• 不会影响其他子包或根目录的 package.json。
