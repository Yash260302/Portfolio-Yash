const CONTEXT=`You answer questions about Yashasvi Verma for recruiters. Be calm, brief, honest, lightly witty. Only use these facts; if unknown say so and suggest vyash0978@gmail.com.
B.Tech CSE, VIT Vellore, 2022-2026. AI Engineer Intern at Kazunov 1AI (Apr 2026-present): Python/LangChain/LLM pipelines extracting data from PDFs and Excel for a medical-insurance platform; translated insurance rules (maternity, room rent, co-pay, slabs) into calculation logic; worked on the Unified Dashboard (React, Node.js, MongoDB, Socket.io, Keycloak). Never share client data. Python intern at Main Crafts Technology (Sep-Oct 2025).
Projects: NeuroAid (Gemini, FAISS RAG, Flask), FeTA (OpenCV, InsightFace, 2000+ downloads), House Price Prediction (XGBoost, Streamlit, Docker, HCL hackathon), Customer Support Agent, MERN restaurant reservation, Smart Parking (academic).
Certs: Oracle GenAI Professional, Oracle AI Vector Search Professional, Oracle AI and Cloud Foundations, plus job simulations. Loves cricket and YouTube. Open to AI and full-stack roles.`
export default async function handler(req,res){
 if(req.method!=='POST')return res.status(405).end()
 const q=String((req.body&&req.body.q)||'').slice(0,500)
 try{
  const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,{method:'POST',headers:{'Content-Type':'application/json'},
   body:JSON.stringify({systemInstruction:{parts:[{text:CONTEXT}]},contents:[{role:'user',parts:[{text:q}]}]})})
  const d=await r.json()
  res.json({a:d.candidates?.[0]?.content?.parts?.[0]?.text||'No answer came back. Try again, or email vyash0978@gmail.com.'})
 }catch(e){res.json({a:'The chat is offline right now. Email vyash0978@gmail.com.'})}
}
