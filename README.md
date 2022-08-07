# Discord Sentry Integration Example
Send Sentry errors to discord channel

## How to Install
Clone the project using git and install the dependencies using npm

```bash
git clone https://github.com/devardha/discord-sentry-integration.git
cd discord-sentry-integration
npm install
```

## Setup Discord Webhook
1. Open server settings and go to the "Integrations" tab
2. Click the "Create Webhook" button to create a new webhook
3. Copy and paste you discord webhook to `.env.local` file

## How to Run the Development Server
Run the application using Vercel
```bash
npm i -g vercel
vercel dev
```

## Setup Sentry Integration
Add your API endpoint to Sentry
1. Deploy your api
2. Open Sentry project settings and go to the "Integrations" tab
3. Choose the Webhooks integration and click "Add to project" button
4. On the integration configuration, paste your api endpont to the "Callback URLs" input
5. Click "Save changes" then click "Test plugin" to test the integration