// import { defineConfig } from 'vite'

// export default defineConfig({
//   server: {
// 	host: true, // Listens on all network interfaces
//     hmr: {
//         clientPort: 8080, // Ensures Hot Module Replacement works through the proxy/port mapping
//     },
//     watch: {
//         usePolling: true // Helps file change detection in some Docker setups
//     },
//     allowedHosts: [
//         // Allows any ngrok free domain to connect
//         'unconstrued-cayden-nonrealistically.ngrok-free.dev'
//     ],
//     proxy: {
//       // Any request starting with /api will be forwarded to the backend
//       '/api': {
//         target: 'http://backend:3000',
//         changeOrigin: true,
//       },
//     }
//   }
// });


import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    hmr: {
        clientPort: 8080,
    },
    watch: {
        usePolling: true
    },
    allowedHosts: [
        'unconstrued-cayden-nonrealistically.ngrok-free.dev'
    ],
    proxy: {
      // Your existing rule for REST API calls
      '/api': {
        target: 'http://backend:3000',
        changeOrigin: true,
      },

      // --- ADD THIS NEW RULE FOR WEBSOCKETS ---
      '/ws': {
        target: 'ws://backend:3000', // Use the 'ws://' protocol
        ws: true, // IMPORTANT: This enables WebSocket proxying
      },
    }
  }
});