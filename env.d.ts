/// <reference types="vite/client" />

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_CLOUDINARY_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}