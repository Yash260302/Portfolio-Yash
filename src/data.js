export const links=[
 {n:'GitHub',u:'https://github.com/Yash260302',s:'code'},
 {n:'LinkedIn',u:'https://www.linkedin.com/in/yashasviverma02',s:'work'},
 {n:'X',u:'https://x.com/vyash0978',s:'thoughts'},
 {n:'Kaggle',u:'https://www.kaggle.com/yashasvi260302',s:'notebooks'},
 {n:'Email',u:'mailto:vyash0978@gmail.com',s:'say hi'}]
export const demos='https://drive.google.com/drive/folders/1mg4PXJ7-mrjLxd9fuEB6rryUMkPGn_ti?usp=sharing'
export const projects=[
 {t:'NeuroAid',len:'5:10',sub:'Medical diagnosis assistant',
  p:'The first chatbot answers were long, generic and sometimes invented. I grounded Gemini with FAISS retrieval over medical text and tightened the prompts, so answers stay short and tied to a source. Around it sit a symptom-to-disease model and a doctor and patient sign-up flow.',
  tech:['Python','Gemini','FAISS','Flask','NLP'],gh:'https://github.com/Yash260302/NeuroAid-Medical-Diagnosis-Assistance',note:'I did not benchmark the improvement, so I will not put a number on it.'},
 {t:'FeTA',len:'3:45',sub:'Face, emotion and trait analyser',
  p:'Detection, recognition, emotion and trait analysis, all on live video without a slideshow frame rate. I reworked the frame pipeline around InsightFace and OpenCV with lightweight models where they were good enough.',
  tech:['OpenCV','InsightFace','TensorFlow','Streamlit'],gh:'https://github.com/Yash260302/FeTA-Face-emotion-and-Trait-Analyser',note:'The plugin has 2,000+ downloads.'},
 {t:'House Price Prediction',len:'4:20',sub:'Built at the HCL hackathon',
  p:'Fitting XGBoost was the easy part. Getting honest predictions took missing-value handling, feature work and cross-validation. I caught data leakage in my own tuning setup and fixed the evaluation. Ships as a Streamlit app in Docker.',
  tech:['XGBoost','scikit-learn','Streamlit','Docker'],gh:'https://github.com/Yash260302/House-Price-Prediction-using-XGBoost',live:'https://teamonyx.streamlit.app/'},
 {t:'Customer Support Agent',len:'2:30',sub:'Agentic AI',
  p:'An agent that handles support conversations. Open the repo for the details.',tech:['Python','LLM agents'],gh:'https://github.com/Yash260302/Customer-Support-Agent'},
 {t:'Restaurant Reservation',len:'3:15',sub:'MERN, deployed end to end',
  p:'React frontend, Express and Node backend, MongoDB Atlas. The work was keeping booking data in sync across all three and getting Vercel and Render to agree on deployment.',tech:['React','Node','MongoDB','Vercel','Render']}]
export const card={
 head:['Skill','Role in the team','Where I used it'],
 rows:[['Python','Opening batter','Every project I have shipped'],
 ['LLMs, RAG, LangChain','Strike bowler','Insurance document pipelines, NeuroAid'],
 ['React, Node, MongoDB','Anchor at number 3','Unified Dashboard, reservation system'],
 ['ML and deep learning','All-rounder','XGBoost, TensorFlow, OpenCV'],
 ['Docker, Vercel, Render','Wicketkeeper','Keeps the rest from falling over'],
 ['Agentic AI','Rising talent','Customer Support Agent']]}
export const certs=[
 {n:'Oracle Generative AI Professional',u:'https://drive.google.com/file/d/1aAO4agb2VHYKlM_WOr-RyDj_QAhTBRh8/view?usp=drive_link'},
 {n:'Oracle AI Vector Search Professional',u:'https://drive.google.com/file/d/1l0MUDeMVVKqT9ax4A7rQ2lW-JbeanYJ6/view?usp=sharing'},
 {n:'Oracle AI Foundations Associate',u:'https://drive.google.com/file/d/1UgIa6vHisfPsy_xhuoI0SOYmr34J5zVb/view?usp=sharing'},
 {n:'Oracle Cloud Foundations Associate',u:'https://drive.google.com/file/d/14VlKYRboUhFdT5lLHnzGX1HFSGmt40PS/view?usp=sharing'}]
export const sims=['Wells Fargo Software Development','Accenture Software Engineering','Deloitte Data Analytics','Deloitte Technology','TATA GenAI Data Analytics','AWS Solution Architecture','Datacom Cloud','Datacom Software Development','McKinsey Forward Program','GFG Python','GFG Core CS']
