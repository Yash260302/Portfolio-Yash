import {useState,useEffect,useRef} from 'react'
import {links,projects,card,certs,sims,demos} from './data'

function Ask({open,setOpen}){
 const [log,setLog]=useState([{r:'yash',t:'Ask about my projects, the insurance work, or cricket.'}])
 const [q,setQ]=useState(''),[busy,setBusy]=useState(false),end=useRef()
 useEffect(()=>{end.current?.scrollIntoView()},[log])
 useEffect(()=>{const k=e=>{if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();setOpen(o=>!o)}if(e.key==='Escape')setOpen(false)};addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[])
 const send=async e=>{e.preventDefault();if(!q.trim()||busy)return;const m=q;setQ('');setBusy(true);setLog(l=>[...l,{r:'you',t:m}])
  try{const r=await fetch('/api/ask',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({q:m})});const d=await r.json();setLog(l=>[...l,{r:'yash',t:d.a}])}
  catch{setLog(l=>[...l,{r:'yash',t:'Chat needs the deployed site. Email vyash0978@gmail.com meanwhile.'}])}
  setBusy(false)}
 if(!open)return <button className="askbtn" onClick={()=>setOpen(true)}>Ask Yash <kbd>Ctrl K</kbd></button>
 return <aside className="ask" role="dialog" aria-label="Ask Yash"><header><span>yash@portfolio</span><button onClick={()=>setOpen(false)} aria-label="Close">close</button></header>
  <div className="log">{log.map((m,i)=><p key={i} className={m.r}><b>{m.r==='you'?'you':'yash'}</b> {m.t}</p>)}{busy&&<p className="yash">thinking</p>}<div ref={end}/></div>
  <form onSubmit={send}><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="What has he built with LangChain?"/></form></aside>}

export default function App(){
 const [open,setOpen]=useState(false)
 return <>
 <header className="hero">
  <div className="heroText">
   <p className="hi">Yashasvi Verma, Lucknow. Graduate from VIT in July 2026.</p>
   <h1>I build AI that has to be right, then wrap it in software people can use.</h1>
   <p className="lede">AI engineer by title, full-stack by habit. Right now I turn messy insurance documents and rules into numbers a dashboard can trust. Outside work: YouTube rabbit holes and cricket, all of it.</p>
   <div className="cta"><a className="btn" href="#work">Watch the work</a><a className="btn ghost" href="/Yashasvi_Verma_Resume.pdf">Resume</a><button className="btn ghost" onClick={()=>setOpen(true)}>Ask Yash</button></div>
  </div>
  <figure className="frame"><img src="/yash.jpg" alt="Yashasvi Verma in a navy suit" /><figcaption><i/>on air</figcaption></figure>
 </header>

 <main>
 <section id="work"><h2>Work, as episodes</h2>
  <div className="grid">{projects.map((p,i)=><article className={'ep'+(i===0?' big':'')} key={p.t}>
   <div className="thumb" aria-hidden><span className="len">{p.len}</span><div className="bar"><i style={{width:(30+i*13)+'%'}}/></div><b>{p.t.split(' ').map(w=>w[0]).join('').slice(0,3)}</b></div>
   <h3>{p.t}</h3><p className="sub">{p.sub}</p><p>{p.p}</p>
   <ul className="tags">{p.tech.map(t=><li key={t}>{t}</li>)}</ul>
   {p.note&&<p className="note">{p.note}</p>}
   <p className="acts">{p.live&&<a href={p.live}>Live app</a>}{p.gh&&<a href={p.gh}>Source</a>}</p>
  </article>)}</div>
  <p className="more">Screen recordings of the demos live in <a href={demos}>this Drive folder</a>.</p>
 </section>

 <section id="job"><h2>The day job: a case study I can talk about</h2>
  <div className="case"><p>At Kazunov 1AI I work on an enterprise medical-insurance platform. I can't share client data, rules or code, so this is the shape of the work.</p>
   <ol><li><b>Ingest.</b> LangChain and LLM pipelines read PDFs, spreadsheets and messy documents, then clean, normalise and validate what comes out.</li>
   <li><b>Encode.</b> Insurance business rules become calculation logic: maternity, pre and post hospitalisation, room rent, co-pay, slabs. Fields depend on each other, users edit values, and the burn sheet has to recompute correctly every time.</li>
   <li><b>Serve.</b> A Unified Dashboard on React and Node with MongoDB, Socket.io for live updates, and Keycloak for authentication.</li></ol></div>
 </section>

 <section id="score"><h2>The scorecard</h2>
  <div className="scroll"><table><thead><tr>{card.head.map(h=><th key={h}>{h}</th>)}</tr></thead>
  <tbody>{card.rows.map(r=><tr key={r[0]}>{r.map((c,i)=>i?<td key={i}>{c}</td>:<th scope="row" key={i}>{c}</th>)}</tr>)}</tbody></table></div>
 </section>

 <section id="trophies"><h2>Trophy cabinet</h2>
  <ul className="trophies">{certs.map(c=><li key={c.n}><a href={c.u}>{c.n}</a></li>)}</ul>
  <details><summary>Also on the shelf: {sims.length} job simulations and courses</summary><p>{sims.join(', ')}.</p></details>
 </section>
 </main>

 <footer><h2>Got a role, a problem or a cricket take?</h2><p><a href="mailto:vyash0978@gmail.com">vyash0978@gmail.com</a></p></footer>
 <div className="ticker" aria-label="Social links"><div>{[...links,...links].map((l,i)=><a key={i} href={l.u}><b>{l.n}</b> {l.s}</a>)}</div></div>
 <Ask open={open} setOpen={setOpen}/>
 </>}
