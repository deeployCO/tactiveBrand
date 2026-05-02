// Marketing site components — Tactive
// Globals: React from CDN
const { useState } = React;

function Nav() {
  return (
    <nav style={{position:'sticky',top:0,zIndex:50,backdropFilter:'blur(12px)',background:'rgba(255,255,255,.85)',borderBottom:'1px solid var(--border-1)'}}>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'18px 32px',display:'flex',alignItems:'center',gap:32}}>
        <a href="#" style={{display:'flex',alignItems:'baseline',gap:0,fontFamily:'Inter',fontWeight:800,fontSize:24,letterSpacing:'-.04em',color:'var(--tac-navy-900)',textDecoration:'none'}}>
          tactive<span style={{width:8,height:8,borderRadius:999,background:'var(--tac-pink-500)',display:'inline-block',marginLeft:2,transform:'translateY(-2px)'}}></span>
        </a>
        <div style={{display:'flex',gap:24,marginLeft:24}}>
          {['Product','Pricing','Blog','About','Contact'].map(l=>(
            <a key={l} href="#" style={{fontSize:14,color:'var(--fg-2)',textDecoration:'none',fontWeight:500}}>{l}</a>
          ))}
        </div>
        <div style={{marginLeft:'auto',display:'flex',gap:10,alignItems:'center'}}>
          <a href="#" style={{fontSize:14,color:'var(--fg-1)',textDecoration:'none',fontWeight:600}}>Sign in</a>
          <button className="btn-pink">Free Brand Audit →</button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{maxWidth:1280,margin:'0 auto',padding:'88px 32px 64px',display:'grid',gridTemplateColumns:'7fr 5fr',gap:64,alignItems:'center'}}>
      <div>
        <div className="tac-eyebrow" style={{marginBottom:20,display:'flex',alignItems:'center',gap:8}}>
          <span style={{width:6,height:6,borderRadius:999,background:'var(--tac-pink-500)',animation:'pulse 1.6s infinite ease-in-out'}}></span>
          The Tactive Agent
        </div>
        <h1 style={{fontSize:'clamp(48px,5.5vw,80px)',lineHeight:1.02,letterSpacing:'-.035em',fontWeight:700,margin:'0 0 24px',color:'var(--tac-navy-900)'}}>
          One agent.<br/>Three modes.<br/>Always defending<span style={{color:'var(--tac-pink-500)'}}>.</span>
        </h1>
        <p style={{fontSize:18,lineHeight:1.55,color:'var(--fg-2)',maxWidth:540,margin:'0 0 32px'}}>
          Connect Tactive to your ad accounts, brand assets, and websites. The agent runs continuously across the platforms attackers actually use — and acts on what it finds.
        </p>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <button className="btn-pink btn-lg">Run my audit →</button>
          <button className="btn-ghost">See how it works</button>
        </div>
        <div style={{marginTop:40,display:'flex',gap:32,fontSize:13,color:'var(--fg-3)'}}>
          <span>7 days · No credit card</span>
          <span>·</span>
          <span>Used by mid-market CMOs and CISOs</span>
        </div>
      </div>
      <div style={{position:'relative'}}>
        <ProductPreview />
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <div style={{background:'var(--tac-navy-900)',borderRadius:16,padding:18,boxShadow:'0 24px 60px rgba(15,27,45,.18)',position:'relative'}}>
      <div style={{display:'flex',alignItems:'center',gap:8,paddingBottom:14,borderBottom:'1px solid rgba(255,255,255,.08)'}}>
        <span style={{width:8,height:8,borderRadius:999,background:'#FF6E92',animation:'pulse 1.6s infinite ease-in-out'}}></span>
        <span style={{color:'#fff',fontSize:13,fontWeight:600}}>Live feed</span>
        <span style={{marginLeft:'auto',fontFamily:'JetBrains Mono',fontSize:11,color:'#6B7B91'}}>24 surfaces</span>
      </div>
      {[
        {sev:'High',title:'Cloned landing page on knockoff-acme.shop',meta:'meta_ads · 2m',color:'#E91A4F',bg:'rgba(233,26,79,.12)'},
        {sev:'Defended',title:'Phishing domain auto-removed',meta:'google · 18m',color:'#1FA971',bg:'rgba(31,169,113,.14)'},
        {sev:'Review',title:'Voice deepfake variant flagged',meta:'tiktok · 41m',color:'#E89923',bg:'rgba(232,153,35,.14)'},
      ].map((t,i)=>(
        <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:'12px 4px',borderBottom:i<2?'1px solid rgba(255,255,255,.05)':'0'}}>
          <span style={{width:6,height:6,borderRadius:999,background:t.color,flex:'none'}}></span>
          <div style={{flex:1,minWidth:0}}>
            <div style={{color:'#fff',fontSize:13,fontWeight:500,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{t.title}</div>
            <div style={{fontFamily:'JetBrains Mono',fontSize:11,color:'#6B7B91',marginTop:2}}>{t.meta}</div>
          </div>
          <span style={{padding:'3px 8px',borderRadius:999,background:t.bg,color:t.color,fontSize:10,fontWeight:600}}>{t.sev}</span>
        </div>
      ))}
    </div>
  );
}

function ThreeModes() {
  const [active,setActive] = useState(0);
  const modes = [
    {n:'01',title:'Brand Defense',blurb:'Watches every surface where attackers can use your brand against you.',bullets:['Unauthorized brand use across paid surfaces','Deepfake video, audio, and image content','Phishing landing pages mimicking your domain','Fake storefronts and counterfeit listings','Cloned mobile apps','Vibe-jacking — voice, tone, and visual style cloning'],buyer:'CMO, brand director, legal counsel'},
    {n:'02',title:'Campaign Defense',blurb:'The silent budget killers — broken pages, drift, and ghost spend — caught in real time.',bullets:['Ad creative performance drift','Broken or 404 landing pages','Out-of-stock listings still spending','Disapproved ads still serving','Tracking pixel failures','Wasted spend pattern detection'],buyer:'Performance marketing lead'},
    {n:'03',title:'Competitive Defense',blurb:'Move with the market — see what competitors are shipping the day they ship it.',bullets:['Competitor ad activity & creative','Search positioning shifts','Campaign overlap & cannibalization','Bidding pattern changes','New product launches detected from ads','Competitor messaging evolution'],buyer:'Growth lead, brand strategy'},
  ];
  return (
    <section style={{background:'var(--tac-navy-900)',padding:'96px 0',color:'#fff'}}>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'0 32px'}}>
        <div className="tac-eyebrow" style={{color:'#FF6E92',marginBottom:16}}>Same agent · Three modes</div>
        <h2 style={{fontSize:48,letterSpacing:'-.025em',fontWeight:700,margin:'0 0 56px',color:'#fff',lineHeight:1.1,maxWidth:780}}>Activate the lens that matches your biggest risk<span style={{color:'var(--tac-pink-500)'}}>.</span></h2>
        <div style={{display:'flex',gap:8,marginBottom:32}}>
          {modes.map((m,i)=>(
            <button key={i} onClick={()=>setActive(i)} style={{padding:'10px 18px',borderRadius:999,border:`1px solid ${active===i?'#fff':'rgba(255,255,255,.18)'}`,background:active===i?'#fff':'transparent',color:active===i?'var(--tac-navy-900)':'#fff',fontSize:13,fontWeight:600,cursor:'pointer',fontFamily:'inherit'}}>
              Mode {m.n} · {m.title}
            </button>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'5fr 7fr',gap:48,padding:'40px 0',borderTop:'1px solid rgba(255,255,255,.1)'}}>
          <div>
            <div style={{fontFamily:'JetBrains Mono',fontSize:11,letterSpacing:'.14em',color:'#FF6E92',marginBottom:12}}>MODE {modes[active].n}</div>
            <h3 style={{fontSize:36,letterSpacing:'-.02em',fontWeight:700,color:'#fff',margin:'0 0 16px'}}>{modes[active].title}</h3>
            <p style={{fontSize:17,lineHeight:1.55,color:'#C9D0DA',margin:'0 0 24px'}}>{modes[active].blurb}</p>
            <div style={{paddingTop:16,borderTop:'1px solid rgba(255,255,255,.08)',fontSize:13,color:'#6B7B91'}}><span style={{color:'#fff',fontWeight:600}}>Who buys it:</span> {modes[active].buyer}</div>
          </div>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px 24px'}}>
            {modes[active].bullets.map((b,i)=>(
              <li key={i} style={{display:'flex',gap:12,fontSize:15,color:'#E6EAF0',lineHeight:1.5}}>
                <span style={{width:5,height:5,borderRadius:999,background:'var(--tac-pink-500)',flex:'none',marginTop:9}}></span>{b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const surfaces = [
    {i:'instagram',n:'Meta Ads',d:'Facebook, Instagram, Audience Network'},
    {i:'search',n:'Google',d:'Search, Display, Shopping, YouTube'},
    {i:'music',n:'TikTok',d:'Ads Manager, Spark Ads, organic'},
    {i:'play-circle',n:'YouTube',d:'Pre-roll, in-stream, Shorts, channel'},
    {i:'globe',n:'Open web',d:'SERPs, news sites, forums, social'},
    {i:'smartphone',n:'App stores',d:'iOS App Store, Google Play, alt stores'},
    {i:'shopping-cart',n:'Marketplaces',d:'Amazon, eBay, Shopify clones'},
    {i:'message-circle',n:'Messaging',d:'WhatsApp, Telegram, Discord scans'},
  ];
  return (
    <section style={{maxWidth:1280,margin:'0 auto',padding:'96px 32px'}}>
      <div className="tac-eyebrow" style={{marginBottom:16}}>Coverage</div>
      <h2 style={{fontSize:48,letterSpacing:'-.025em',fontWeight:700,margin:'0 0 12px',lineHeight:1.1,maxWidth:760}}>The surfaces we watch<span style={{color:'var(--tac-pink-500)'}}>.</span></h2>
      <p style={{fontSize:18,color:'var(--fg-2)',margin:'0 0 48px',maxWidth:560}}>Every place an attacker can reach your audience — already wired up.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:14}}>
        {surfaces.map(s=>(
          <div key={s.n} style={{padding:24,border:'1px solid var(--border-1)',borderRadius:12,background:'#fff'}}>
            <i data-lucide={s.i} strokeWidth="1.75" style={{color:'var(--tac-navy-900)'}}></i>
            <div style={{fontSize:16,fontWeight:600,marginTop:14,marginBottom:4}}>{s.n}</div>
            <div style={{fontSize:13,color:'var(--fg-3)',lineHeight:1.5}}>{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CompareSection() {
  const rows = [
    ['Marketing tools','bolt monitoring on. We start there.'],
    ['Enterprise DRP vendors','price at $50k+. We start at $199.'],
    ['Generic DLP','watches data leaks. We watch brand leaks.'],
    ['Manual SOC analysts','need staffing. The agent doesn\'t sleep.'],
  ];
  return (
    <section style={{background:'var(--tac-mist)',padding:'96px 0'}}>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'0 32px'}}>
        <div className="tac-eyebrow" style={{marginBottom:16}}>Why Tactive vs. the alternatives</div>
        <h2 style={{fontSize:48,letterSpacing:'-.025em',fontWeight:700,margin:'0 0 48px',lineHeight:1.1,maxWidth:760}}>The mid-market gap, finally filled<span style={{color:'var(--tac-pink-500)'}}>.</span></h2>
        <div style={{background:'#fff',borderRadius:16,border:'1px solid var(--border-1)',overflow:'hidden'}}>
          {rows.map((r,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'260px 1fr',gap:32,padding:'24px 32px',borderTop:i?'1px solid var(--border-1)':'0',alignItems:'center'}}>
              <div style={{fontWeight:700,fontSize:18,color:'var(--tac-navy-900)'}}>{r[0]}</div>
              <div style={{fontSize:17,color:'var(--fg-2)',lineHeight:1.5}}>{r[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{maxWidth:1280,margin:'0 auto',padding:'96px 32px'}}>
      <div style={{background:'var(--tac-navy-900)',borderRadius:24,padding:'80px 64px',color:'#fff',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'-40%',right:'-10%',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(233,26,79,.18) 0%,transparent 60%)'}}></div>
        <div style={{position:'relative'}}>
          <div className="tac-eyebrow" style={{color:'#FF6E92',marginBottom:16}}>Free brand audit · 7 days · No credit card</div>
          <h2 style={{fontSize:56,letterSpacing:'-.025em',fontWeight:700,margin:'0 0 24px',lineHeight:1.05,maxWidth:820,color:'#fff'}}>See what the agent finds. It's already running on someone else's brand<span style={{color:'var(--tac-pink-500)'}}>.</span></h2>
          <p style={{fontSize:18,color:'#C9D0DA',maxWidth:640,margin:'0 0 32px'}}>Point Tactive at your brand for a week. Get a full report on every impersonation, fake page, and brand misuse detected. Yours to keep.</p>
          <div style={{display:'flex',gap:12}}>
            <button className="btn-pink btn-lg">Run my audit →</button>
            <button style={{padding:'14px 24px',borderRadius:8,fontSize:16,fontWeight:600,background:'transparent',color:'#fff',border:'1px solid rgba(255,255,255,.2)',cursor:'pointer',fontFamily:'inherit'}}>See pricing</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{borderTop:'1px solid var(--border-1)',padding:'56px 32px 40px'}}>
      <div style={{maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:48}}>
        <div>
          <div style={{display:'flex',alignItems:'baseline',fontFamily:'Inter',fontWeight:800,fontSize:24,letterSpacing:'-.04em',color:'var(--tac-navy-900)'}}>tactive<span style={{width:8,height:8,borderRadius:999,background:'var(--tac-pink-500)',marginLeft:2,transform:'translateY(-2px)'}}></span></div>
          <p style={{fontSize:14,color:'var(--fg-3)',marginTop:14,maxWidth:320,lineHeight:1.5}}>Your brand's autonomous defense layer. Built for the AI-era threat surface — and the CMO + CISO buying it.</p>
        </div>
        {[['Product',['How it works','Three modes','Pricing','Free audit']],['Company',['About','Blog','Contact','Careers']],['Resources',['Vibe-jacking guide','Impersonation playbook','CMO + CISO brief','Threat Index']]].map(([h,items])=>(
          <div key={h}>
            <div style={{fontSize:13,fontWeight:700,color:'var(--tac-navy-900)',marginBottom:14}}>{h}</div>
            {items.map(it=>(<a key={it} href="#" style={{display:'block',fontSize:13,color:'var(--fg-3)',textDecoration:'none',marginBottom:8}}>{it}</a>))}
          </div>
        ))}
      </div>
      <div style={{maxWidth:1280,margin:'48px auto 0',paddingTop:24,borderTop:'1px solid var(--border-1)',display:'flex',justifyContent:'space-between',fontSize:12,color:'var(--fg-3)'}}>
        <span>© 2026 Tactive. All rights reserved.</span>
        <span>Burlington, ON · Canada</span>
      </div>
    </footer>
  );
}

Object.assign(window,{Nav,Hero,ThreeModes,Coverage,CompareSection,CTA,Footer});
