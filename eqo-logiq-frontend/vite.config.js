import path from 'node:path';
import {
  defineKiteConfig,
  kiteBadgeInjector,
} from '@appsmithorg/template-frontend/vite';

const src = path.resolve(process.cwd(), 'src');

export default defineKiteConfig(({ env }) => ({
  plugins: [kiteBadgeInjector({ disabled: false, appId: env.VITE_APP_ID })],
  build: {
    rollupOptions: {
      input: {
        main:        path.join(src, 'index.html'),
        about:       path.join(src, 'about.html'),
        shop:        path.join(src, 'shop.html'),
        product:     path.join(src, 'product.html'),
        cart:        path.join(src, 'cart.html'),
        contact:     path.join(src, 'contact.html'),
        faq:         path.join(src, 'faq.html'),
        blog:        path.join(src, 'blog.html'),
        'blog-post': path.join(src, 'blog-post.html'),
        policy:      path.join(src, 'policy.html'),
        'qrash-qourse': path.join(src, 'qrash-qourse.html'),
        login:          path.join(src, 'login.html'),
        account:        path.join(src, 'account.html'),
      },
    },
  },
}));
