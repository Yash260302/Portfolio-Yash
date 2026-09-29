# Yashasvi's portfolio

React + Vite. Content lives in `src/data.js`; edit text there, not in components.

## Run locally
    npm install
    npm run dev

## Put it online (free, always on)
1. Create a GitHub repo and push this folder.
2. Go to vercel.com, sign in with GitHub, Import the repo. Framework: Vite. Deploy.
3. In Vercel, Settings, Environment Variables, add `GEMINI_API_KEY` (free key from aistudio.google.com), then Redeploy. This powers "Ask Yash".
4. Put your resume PDF in `public/` named `Yashasvi_Verma_Resume.pdf`.
5. Add a domain later under Vercel, Settings, Domains.

The Ask Yash answers come from the text at the top of `api/ask.js`. Update it when your resume changes.
