# Hipnosis España

Portal independiente de hipnosis para Maria Cabo.

## Development

You need Node.js and npm.

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy on Vercel

This project is configured for Vercel with TanStack Start and Nitro.

- Build command: `npm run build`
- Domain: `hipnosisespaña.es`
- ASCII domain: `xn--hipnosisespaa-tkb.es`
- Apex DNS record: `A @ 76.76.21.21`
- Optional `www` record: `CNAME www cname.vercel-dns-0.com`

Add `hipnosisespaña.es` to the Vercel project domains, then verify the DNS records in Vercel.
