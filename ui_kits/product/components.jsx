// Product app components — Tactive
const { useState } = React;

function Sidebar({active,onPick}){
  const items = [
    {k:'feed',i:'activity',l:'Live feed',badge:3},
    {k:'threats',i:'shield-alert',l:'Threats'},
    {k:'queue',i:'gavel',l:'Takedown queue',badge:7},
    {k:'surfaces',i:'radar',l:'Surfaces'},
    {k:'reports',i:'file-text',l:'Reports'},
    {k:'settings',i:'settings',l:'Settings'},
  ];
  return (
    <aside style={{width:240,background:'#fff',borderRight:'1px solid var(--border-1)',padding:'18px 12px',display:'flex',flexDirection:'column',gap:4,height:'100vh',position:'sticky',top:0}}>
      <div style={{display:'flex',alignItems:'baseline',padding:'8px 12px 18px',fontFamily:'Inter',fontWeight:800,fontSize:22,letterSpacing:'-.04em',color:'var(--tac-navy-900)'}}>
        tactive<span style={{width:7,height:7,borderRadius:999,background:'var(--tac-pink-500)',marginLeft:2,transform:'translateY(-2px)'}}></span>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:8,padding:'8px 12px',background:'var(--tac-mist)',borderRadius:8,marginBottom:12}}>
        <span style={{width:6,height:6,borderRadius:999,background:'#1FA971',animation:'pulse 1.6s infinite'}}></span>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:12,fontWeight:600,color:'var(--tac-navy-900)'}}>Acme Inc.</div>
          <div style={{fontSize:11,color:'var(--fg-3)',fontFamily:'JetBrains Mono'}}>24 surfaces · live</div>
        </div>
      </div>
      {items.map(it=>(
        <button key={it.k} onClick={()=>onPick(it.k)} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 12px',borderRadius:8,border:0,background:active===it.k?'var(--tac-mist)':'transparent',color:active===it.k?'var(--tac-navy-900)':'var(--fg-2)',fontSize:14,fontWeight:active===it.k?600:500,cursor:'pointer',fontFamily:'inherit',textAlign:'left'}}>
          <i data-lucide={it.i} strokeWidth="1.75" style={{width:18,height:18}}></i>
          <span style={{flex:1}}>{it.l}</span>
          {it.badge && <span style={{background:'var(--tac-pink-500)',color:'#fff',fontSize:10,fontWeight:700,padding:'2px 7px',borderRadius:999,fontFamily:'JetBrains Mono'}}>{it.badge}</span>}
        </button>
      ))}
      <div style={{flex:1}}></div>
      <div style={{padding:'12px',borderTop:'1px solid var(--border-1)',display:'flex',alignItems:'center',gap:10}}>
        <div style={{width:32,height:32,borderRadius:999,background:'var(--tac-navy-900)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:600}}>SR</div>
        <div style={{flex:1,minWidth:0}}><div style={{fontSize:13,fontWeight:600}}>Sara Reyes</div><div style={{fontSize:11,color:'var(--fg-3)'}}>CMO</div></div>
      </div>
    </aside>
  );
}

function TopBar({title}){
  return (
    <div style={{display:'flex',alignItems:'center',gap:16,padding:'18px 32px',borderBottom:'1px solid var(--border-1)',background:'#fff'}}>
      <h1 style={{fontSize:20,letterSpacing:'-.01em',fontWeight:600,margin:0}}>{title}</h1>
      <div style={{flex:1}}></div>
      <div style={{display:'flex',alignItems:'center',gap:8,padding:'8px 12px',background:'var(--tac-mist)',borderRadius:8,minWidth:280}}>
        <i data-lucide="search" strokeWidth="1.75" style={{width:16,height:16,color:'var(--fg-3)'}}></i>
        <span style={{fontSize:13,color:'var(--fg-3)'}}>Search threats, surfaces, reports…</span>
      </div>
      <button style={{padding:'8px 14px',background:'var(--tac-navy-900)',color:'#fff',border:0,borderRadius:8,fontSize:13,fontWeight:600,cursor:'pointer',fontFamily:'inherit',display:'inline-flex',alignItems:'center',gap:6}}>
        <i data-lucide="plus" strokeWidth="2" style={{width:14,height:14}}></i>Add surface
      </button>
    </div>
  );
}

function StatCards(){
  const stats = [
    {l:'Threats detected',v:'247',d:'+18 today',c:'#E91A4F'},
    {l:'Auto-defended',v:'189',d:'76% of detected',c:'#1FA971'},
    {l:'In review',v:'31',d:'awaiting approval',c:'#E89923'},
    {l:'Spend protected',v:'$24,381',d:'this month',c:'var(--tac-navy-900)'},
  ];
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:14,marginBottom:24}}>
      {stats.map(s=>(
        <div key={s.l} style={{background:'#fff',border:'1px solid var(--border-1)',borderRadius:12,padding:18,boxShadow:'0 1px 2px rgba(15,27,45,.04)'}}>
          <div style={{fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--fg-3)',fontWeight:600,marginBottom:8}}>{s.l}</div>
          <div style={{fontSize:32,fontWeight:700,letterSpacing:'-.02em',color:'var(--tac-navy-900)',fontFamily:'Inter',fontFeatureSettings:'"tnum" 1'}}>{s.v}</div>
          <div style={{fontSize:12,color:s.c,marginTop:4,fontWeight:500}}>{s.d}</div>
        </div>
      ))}
    </div>
  );
}

function ThreatFeed(){
  const [feed,setFeed] = useState([
    {sev:'High',title:'Cloned landing page on knockoff-acme.shop',meta:'meta_ads · THR-2026-04829 · 2m ago',state:'open'},
    {sev:'High',title:'Voice deepfake variant flagged in spark-ad creative',meta:'tiktok · THR-2026-04828 · 14m ago',state:'open'},
    {sev:'Defended',title:'Phishing domain auto-removed by agent',meta:'google_search · THR-2026-04812 · 18m ago',state:'done'},
    {sev:'Review',title:'Out-of-stock listing still spending $147/day',meta:'meta_ads · THR-2026-04805 · 41m ago',state:'review'},
    {sev:'Defended',title:'Counterfeit listing removed from marketplace',meta:'amazon · THR-2026-04790 · 1h ago',state:'done'},
    {sev:'High',title:'Competitor brand-bidding on "acme login"',meta:'google_search · THR-2026-04781 · 2h ago',state:'open'},
  ]);
  const colors = {High:'#E91A4F',Defended:'#1FA971',Review:'#E89923'};
  const bgs = {High:'#FFE3EC',Defended:'#E6F7EF',Review:'#FFF4E0'};
  function takedown(i){
    setFeed(f=>f.map((row,j)=>j===i?{...row,sev:'Defended',state:'done'}:row));
  }
  return (
    <div style={{background:'#fff',border:'1px solid var(--border-1)',borderRadius:12,overflow:'hidden'}}>
      <div style={{display:'flex',alignItems:'center',gap:12,padding:'16px 20px',borderBottom:'1px solid var(--border-1)'}}>
        <span style={{width:8,height:8,borderRadius:999,background:'var(--tac-pink-500)',animation:'pulse 1.6s infinite'}}></span>
        <h3 style={{fontSize:15,fontWeight:600,margin:0}}>Live feed</h3>
        <span style={{fontSize:12,color:'var(--fg-3)',fontFamily:'JetBrains Mono'}}>· streaming</span>
        <div style={{flex:1}}></div>
        <div style={{display:'flex',gap:6}}>
          {['All','High','Open','Defended'].map((f,i)=>(
            <button key={f} style={{padding:'5px 10px',borderRadius:999,border:'1px solid var(--border-1)',background:i===0?'var(--tac-navy-900)':'#fff',color:i===0?'#fff':'var(--fg-2)',fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'inherit'}}>{f}</button>
          ))}
        </div>
      </div>
      {feed.map((t,i)=>(
        <div key={i} style={{display:'flex',alignItems:'center',gap:14,padding:'14px 20px',borderTop:i?'1px solid var(--border-1)':'0'}}>
          <span style={{width:8,height:8,borderRadius:999,background:colors[t.sev],flex:'none',animation:t.state==='open'?'pulse 1.6s infinite':'none'}}></span>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:14,fontWeight:500,color:'var(--tac-navy-900)',marginBottom:2}}>{t.title}</div>
            <div style={{fontFamily:'JetBrains Mono',fontSize:11,color:'var(--fg-3)'}}>{t.meta}</div>
          </div>
          <span style={{padding:'4px 10px',borderRadius:999,background:bgs[t.sev],color:colors[t.sev],fontSize:11,fontWeight:600}}>{t.sev}</span>
          {t.state==='open' && <button onClick={()=>takedown(i)} style={{padding:'7px 12px',background:'var(--tac-navy-900)',color:'#fff',border:0,borderRadius:8,fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'inherit'}}>File takedown →</button>}
          {t.state==='review' && <button style={{padding:'7px 12px',background:'#fff',color:'var(--tac-navy-900)',border:'1px solid var(--border-1)',borderRadius:8,fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'inherit'}}>Review →</button>}
          {t.state==='done' && <span style={{fontSize:12,color:'var(--fg-3)'}}>Auto · 1.4s</span>}
        </div>
      ))}
    </div>
  );
}

function SurfaceStrip(){
  const surfaces = [
    {i:'instagram',n:'Meta',c:42,s:'green'},
    {i:'search',n:'Google',c:38,s:'green'},
    {i:'music',n:'TikTok',c:7,s:'red'},
    {i:'play-circle',n:'YouTube',c:12,s:'green'},
    {i:'globe',n:'Open web',c:103,s:'amber'},
    {i:'smartphone',n:'App stores',c:5,s:'green'},
    {i:'shopping-cart',n:'Markets',c:31,s:'amber'},
    {i:'message-circle',n:'Messaging',c:9,s:'green'},
  ];
  const dot = {green:'#1FA971',red:'#E91A4F',amber:'#E89923'};
  return (
    <div style={{background:'#fff',border:'1px solid var(--border-1)',borderRadius:12,padding:'18px 20px',marginBottom:24}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
        <h3 style={{fontSize:15,fontWeight:600,margin:0}}>Surfaces watched</h3>
        <a href="#" style={{fontSize:12,color:'var(--tac-pink-500)',fontWeight:600,textDecoration:'none'}}>Manage all →</a>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(8,1fr)',gap:8}}>
        {surfaces.map(s=>(
          <div key={s.n} style={{padding:'12px',border:'1px solid var(--border-1)',borderRadius:10,display:'flex',alignItems:'center',gap:10}}>
            <i data-lucide={s.i} strokeWidth="1.75" style={{width:18,height:18,color:'var(--tac-navy-900)'}}></i>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:12,fontWeight:600}}>{s.n}</div>
              <div style={{fontSize:10,color:'var(--fg-3)',fontFamily:'JetBrains Mono',display:'flex',alignItems:'center',gap:4}}>
                <span style={{width:5,height:5,borderRadius:999,background:dot[s.s]}}></span>{s.c}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThreatDetailModal({open,onClose}){
  if(!open) return null;
  return (
    <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(15,27,45,.5)',zIndex:100,display:'flex',alignItems:'center',justifyContent:'center',padding:32}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,maxWidth:640,width:'100%',padding:32,boxShadow:'0 24px 60px rgba(15,27,45,.18)'}}>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
          <span style={{padding:'4px 10px',borderRadius:999,background:'#FFE3EC',color:'#E91A4F',fontSize:11,fontWeight:600}}>High severity</span>
          <span style={{fontFamily:'JetBrains Mono',fontSize:11,color:'var(--fg-3)'}}>THR-2026-04829</span>
        </div>
        <h2 style={{fontSize:24,fontWeight:700,letterSpacing:'-.02em',margin:'0 0 6px'}}>Cloned landing page on knockoff-acme.shop</h2>
        <p style={{fontSize:14,color:'var(--fg-2)',margin:'0 0 20px'}}>Detected from a Meta Ad creative pointing to a near-pixel-perfect clone of acme.com/checkout. Confidence: 94%.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginBottom:20}}>
          {[['Surface','meta_ads'],['Detected','2m ago'],['Likely intent','Phishing'],['Affected campaign','Q2 Retargeting']].map(([k,v])=>(
            <div key={k} style={{padding:'10px 12px',background:'var(--tac-mist)',borderRadius:8}}>
              <div style={{fontSize:10,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--fg-3)',fontWeight:600,marginBottom:2}}>{k}</div>
              <div style={{fontSize:13,fontWeight:500}}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{display:'flex',gap:10,paddingTop:16,borderTop:'1px solid var(--border-1)'}}>
          <button className="btn-pink" style={{display:'inline-flex',alignItems:'center',gap:6}}>File takedown →</button>
          <button style={{padding:'10px 18px',background:'#fff',color:'var(--tac-navy-900)',border:'1px solid var(--border-1)',borderRadius:8,fontSize:14,fontWeight:600,cursor:'pointer',fontFamily:'inherit'}}>Mark as false positive</button>
          <div style={{flex:1}}></div>
          <button onClick={onClose} style={{padding:'10px 14px',background:'transparent',border:0,color:'var(--fg-3)',fontSize:14,fontWeight:500,cursor:'pointer',fontFamily:'inherit'}}>Close</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window,{Sidebar,TopBar,StatCards,ThreatFeed,SurfaceStrip,ThreatDetailModal});
