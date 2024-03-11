/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '*.html',
      options: {
        printWidth: Infinity,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
}
