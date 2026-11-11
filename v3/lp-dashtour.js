/* Lapis · Home dashboard: guided showcase (v4) — the pointer walks through the tool by itself */
(function () {
  var app = document.querySelector('.v2_dashsec .v2_app');
  if (!app || app.__dt) return;
  app.__dt = 1;
  var EN = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;
  function t(it, en) { return EN ? en : it; }
  var main = app.querySelector('.v2_main');
  var IMG = 'https://cdn.jsdelivr.net/gh/JasDidom/lapis-assets@e3ab270842bc777b32d42b2427f0c97914cc1369/img/';
  var CDN = 'https://cdn.prod.website-files.com/6ac0d032fb0cd97884ba849a/';
  function logo(alt, fb) { var i = document.querySelector('img[alt="' + alt + '"]'); return i ? (i.currentSrc || i.src) : (fb ? CDN + fb : ''); }
  var L = {
    google: logo('Google Ads', '6ad767111781999df83978b3_lp-d5bb243759.webp'),
    immo: logo('Immobiliare.it', '6ad76591a2f4ec5a2ae81def_lp-4b9cb48fc3.png'),
    idea: logo('idealista', '6ad7659158729a54f46b2ddd_lp-69c63ed1c0.png'),
    casa: CDN + '6ad76591cbb284699d94de73_lp-33db9b2d0a.png'
  };
  var ICO = {
    ig: '<span class="dt_ic dt_ig"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" stroke-width="2.2"><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17" cy="7" r=".9" fill="#fff" stroke="none"/></svg></span>',
    fb: '<span class="dt_ic dt_fb"><svg viewBox="0 0 24 24" width="12" height="12"><path fill="#fff" d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z"/></svg></span>',
    g: '<img class="dt_ic" src="' + L.google + '" alt="">'
  };
  function lg(k) { return '<img class="dt_ic" src="' + L[k] + '" alt="">'; }

  var css = ''
    + '.v2_dashsec .v2_app{position:relative}.v2_main{position:relative}'
    + '.v2_side>span.on{background:#EFECE8!important;color:#171717!important}.v2_side>span.lp-v2_side_span{transition:background-color .25s,color .25s}'
    + '.v2_app.dt_notpano .v2_bar{visibility:hidden}'
    + '.dt_host{position:absolute;left:16px;right:16px;bottom:18px;top:14px;background:#fff!important;border:1px solid #ECEAE6;border-radius:12px;opacity:0;visibility:hidden;transform:translateY(6px);transition:opacity .4s,transform .4s,visibility 0s .4s;overflow:hidden;z-index:60;font-size:13px;color:#171717}'
    + '.dt_host.is-on{opacity:1;visibility:visible;transform:none;transition:opacity .4s,transform .4s}'
    + '.dt_hd{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 20px;border-bottom:1px solid #F0EEEB;min-height:60px}'
    + '.dt_hd b{font-size:16px;font-weight:600;letter-spacing:-.01em}.dt_hd small{color:#8A8884;font-size:12px}'
    + '.dt_ic{width:20px;height:20px;border-radius:6px;display:inline-grid;place-items:center;flex:none;object-fit:contain}.dt_ig{background:radial-gradient(circle at 30% 110%,#FDD56A 0,#F45B3C 40%,#C232A3 70%,#6A3FD1 100%)}.dt_fb{background:#1877F2;border-radius:50%}'
    + '.dt_chips{display:flex;gap:6px}.dt_chip{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border-radius:999px;border:1px solid #E8E5E0;font-size:12.5px;color:#55524D;background:#fff;transition:all .25s;white-space:nowrap}.dt_chip .dt_ic{width:16px;height:16px;border-radius:5px}.dt_chip.on{background:#171717;border-color:#171717;color:#fff}'
    + '.dt_tb{width:100%;border-collapse:collapse}.dt_tb th{font-weight:500;color:#8A8884;font-size:11.5px;text-align:left;padding:10px 14px;border-bottom:1px solid #F0EEEB;white-space:nowrap}.dt_tb th:first-child,.dt_tb td:first-child{padding-left:20px}.dt_tb th:last-child,.dt_tb td:last-child{padding-right:20px}'
    + '.dt_tb td{padding:9px 14px;border-bottom:1px solid #F5F4F1;white-space:nowrap;transition:opacity .35s,filter .35s,background .35s}.dt_tb .r{text-align:right}'
    + '.dt_tb tr.off td{opacity:.16;filter:blur(1px)}.dt_tb tr.hl td{background:#FAF8F5}'
    + '.dt_nm{display:flex;align-items:center;gap:10px}.dt_nm p{margin:0;line-height:1.25}.dt_nm p small{display:block;color:#8A8884;font-size:11px;margin-top:2px}'
    + '.dt_tag{display:inline-block;font-size:10.5px;font-weight:600;padding:2px 7px;border-radius:999px;background:#EAF7EF;color:#1E8A4C;margin-left:6px;vertical-align:1px}.dt_tag.w{background:#FDF3E2;color:#A86A12}.dt_tag.g{background:#F1EFEC;color:#73726E}'
    + '.dt_st{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#3F3D39}.dt_st:before{content:"";width:7px;height:7px;border-radius:50%;background:#2EBD6B}.dt_st.is-p:before{background:#C9C6C0}'
    + '.dt_tot{display:flex;gap:22px;padding:12px 20px;font-size:12px;color:#8A8884}.dt_tot b{color:#171717;font-weight:600;margin-left:4px}'
    + '.dt_kw{display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding:0 20px 12px;font-size:12px;color:#8A8884;opacity:0;transform:translateY(4px);transition:opacity .35s,transform .35s}.dt_kw.on{opacity:1;transform:none}.dt_kw span{background:#EEF3FE;color:#2B55C7;border-radius:999px;padding:3px 9px;font-size:11.5px}'
    /* portals */
    + '.dt_ph{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:14px 20px}'
    + '.dt_pt{border:1px solid #EFEDE9;border-radius:12px;padding:12px 14px;background:#FCFCFB;transition:all .3s}.dt_pt.on{background:#fff;box-shadow:0 0 0 2px #171717,0 14px 28px -20px rgba(0,0,0,.45)}'
    + '.dt_pt h5{display:flex;align-items:center;gap:8px;margin:0 0 8px;font-size:14px;font-weight:600}.dt_pt h5 em{margin-left:auto;font-style:normal;font-size:11px;font-weight:600;color:#1E8A4C;background:#EAF7EF;border-radius:999px;padding:2px 8px}'
    + '.dt_pt div{display:flex;justify-content:space-between;font-size:12px;color:#8A8884}.dt_pt div b{color:#171717;font-weight:600}'
    + '.dt_ads{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:2px 20px 16px}'
    + '.dt_ad{border:1px solid #EFEDE9;border-radius:12px;overflow:hidden;background:#fff;opacity:0;transform:translateY(10px);transition:opacity .4s,transform .4s}.dt_ads.on .dt_ad{opacity:1;transform:none}'
    + '.dt_ad figure{margin:0;height:84px;background-size:cover;background-position:center;position:relative}.dt_ad figure em{position:absolute;left:8px;top:8px;font-style:normal;font-size:10.5px;font-weight:600;background:#fff;border-radius:6px;padding:2px 7px;display:inline-flex;align-items:center;gap:5px}.dt_ad figure em:before{content:"";width:6px;height:6px;border-radius:50%;background:#2EBD6B}'
    + '.dt_ad>div{padding:9px 11px}.dt_ad b{display:block;font-size:12.5px;font-weight:600}.dt_ad i{display:block;font-style:normal;font-size:13px;font-weight:700;margin-top:2px}.dt_ad small{display:flex;justify-content:space-between;color:#8A8884;font-size:11px;margin-top:5px}'
    /* landing */
    + '.dt_lp{display:grid;grid-template-columns:.95fr 1.05fr;height:calc(100% - 60px)}'
    + '.dt_lpl{border-right:1px solid #F0EEEB;padding:10px 0}'
    + '.dt_li{padding:12px 14px;margin:4px 10px;border-radius:12px;transition:background .25s,box-shadow .25s}.dt_li.on{background:#F4F2EF;box-shadow:inset 0 0 0 1px #E3DFD8}'
    + '.dt_li .a{display:flex;align-items:center;gap:12px}.dt_li figure{margin:0;width:54px;height:40px;border-radius:7px;background-size:cover;background-position:center;flex:none}'
    + '.dt_li p{margin:0;flex:1;line-height:1.3}.dt_li p b{font-weight:600}.dt_li p small{display:block;color:#8A8884;font-size:11.5px}'
    + '.dt_li .m{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px;font-size:11px;color:#8A8884}.dt_li .m b{display:block;color:#171717;font-size:13px;font-weight:600}'
    + '.dt_lpr{padding:16px 20px;display:flex;align-items:center;justify-content:center;background:#FAF9F7;position:relative}'
    + '.dt_empty{color:#B5B2AC;font-size:12.5px;display:flex;flex-direction:column;align-items:center;gap:8px;transition:opacity .3s}.dt_empty i{width:44px;height:32px;border:1.5px dashed #D6D2CB;border-radius:7px}'
    + '.dt_br{position:absolute;inset:16px 20px;margin:auto;height:max-content;max-width:420px;border-radius:12px;box-shadow:0 26px 52px -26px rgba(0,0,0,.45),0 0 0 1px #ECEAE6;overflow:hidden;opacity:0;transform:translateY(14px) scale(.96);transition:opacity .45s,transform .45s cubic-bezier(.2,.8,.2,1)}.dt_br.on{opacity:1;transform:none}'
    + '.dt_bt{display:flex;align-items:center;gap:5px;padding:7px 10px;background:#F7F6F4;border-bottom:1px solid #EEECE8;font-size:10.5px;color:#8A8884}.dt_bt i{width:7px;height:7px;border-radius:50%;background:#E0DCD5}.dt_bt span{margin-left:6px;flex:1;background:#fff;border-radius:6px;padding:3px 8px}'
    /* landing A: light editorial */
    + '.la{background:#fff;color:#171717}.la nav{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;font-size:10px;color:#55524D}.la nav b{font-size:11.5px;letter-spacing:.06em;color:#171717}'
    + '.la .hero{height:120px;background-size:cover;background-position:center}.la .tx{padding:12px 14px 4px}.la .tx small{font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:#B0573A;font-weight:700}.la .tx h4{margin:4px 0 0;font-size:16px;line-height:1.15;font-weight:600;letter-spacing:-.01em}'
    + '.la .ft{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:10px 14px}.la .ft span{background:#F6F4F1;border-radius:8px;padding:7px 6px;font-size:10px;color:#55524D;text-align:center}.la .ft span b{display:block;color:#171717;font-size:12px}'
    + '.la .gl{display:grid;grid-template-columns:2fr 1fr 1fr;gap:5px;padding:0 14px 12px}.la .gl i{height:44px;border-radius:6px;background-size:cover;background-position:center}'
    /* landing B: dark brochure */
    + '.lb{background:#1C1B19;color:#F2EFEA;display:grid;grid-template-columns:.85fr 1.15fr;gap:12px;padding:18px 16px 18px}'
    + '.lb .cv{position:relative;height:150px}.lb .cv i{position:absolute;inset:0 10px 0 0;border-radius:4px 10px 10px 4px;background-size:cover;background-position:center;box-shadow:10px 14px 24px -10px rgba(0,0,0,.7);transform:perspective(500px) rotateY(-14deg)}.lb .cv i:after{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(90deg,rgba(0,0,0,.35),rgba(0,0,0,0) 18%),linear-gradient(to top,rgba(0,0,0,.6),rgba(0,0,0,0) 55%)}'
    + '.lb .cv b{position:absolute;left:12px;bottom:10px;z-index:2;font-size:9px;letter-spacing:.18em;font-weight:700}'
    + '.lb small{font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:#E08B65;font-weight:700}.lb h4{margin:5px 0 8px;font-size:15px;line-height:1.2;font-weight:600}'
    + '.lb ul{margin:0 0 10px;padding:0;list-style:none;font-size:10.5px;color:#C9C5BE;display:grid;gap:5px}.lb li:before{content:"✓";color:#2EBD6B;margin-right:6px;font-weight:700}'
    + '.lb u{display:inline-block;text-decoration:none;background:#F2EFEA;color:#1C1B19;font-size:10.5px;font-weight:700;border-radius:999px;padding:6px 12px}'
    /* visits */
    + '.dt_vk{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:16px 20px 6px}'
    + '.dt_k{border:1px solid #EFEDE9;border-radius:12px;padding:14px;background:#FCFCFB}.dt_k small{display:block;color:#8A8884;font-size:11.5px}.dt_k b{display:block;font-size:26px;font-weight:700;letter-spacing:-.03em;margin-top:4px}.dt_k em{font-style:normal;font-size:11.5px;color:#2EBD6B;font-weight:600}'
    + '.dt_vb{display:flex;align-items:flex-end;gap:10px;height:150px;padding:12px 20px 0;margin:0 20px;border-bottom:1px solid #F0EEEB}'
    + '.dt_vb div{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:6px}.dt_vb i{display:block;width:100%;max-width:44px;border-radius:7px 7px 2px 2px;background:#E8E4DE;height:0;transition:height .8s cubic-bezier(.2,.8,.2,1),background .25s}.dt_vb div.dt_hi i{background:#171717}'
    + '.dt_host.is-on .dt_vb i{height:var(--h)}.dt_vb span{font-size:11px;color:#8A8884;font-weight:600}.dt_vl{display:flex;justify-content:space-between;padding:8px 20px 0;margin:0 20px;font-size:11px;color:#8A8884}'
    /* calendar */
    + '.dt_cal{display:grid;grid-template-columns:46px repeat(5,1fr);padding:8px 20px 16px;font-size:11.5px;color:#8A8884;position:relative}'
    + '.dt_cal .h{padding:6px 8px;color:#55524D;font-weight:600}.dt_cal .h.td{color:#B0573A}.dt_cal .t{padding-top:3px;height:62px;border-top:1px solid #F3F2EF}.dt_cal .c{position:relative;border-top:1px solid #F3F2EF;border-left:1px solid #F3F2EF;height:62px}'
    + '.dt_ev{position:absolute;left:4px;right:4px;top:5px;border-radius:8px;padding:6px 7px;font-size:11px;line-height:1.25;color:#171717;background:#EAF7EF;border-left:3px solid #2EBD6B;transition:box-shadow .25s,transform .25s,opacity .35s,filter .35s;display:flex;gap:6px;align-items:flex-start}'
    + '.dt_ev .av{width:20px;height:20px;border-radius:50%;background:#fff;display:grid;place-items:center;font-size:8.5px;font-weight:700;color:#55524D;flex:none;box-shadow:0 0 0 1px rgba(0,0,0,.06)}.dt_ev p{margin:0;min-width:0}.dt_ev p small{display:flex;align-items:center;gap:4px;color:#55524D;white-space:nowrap;overflow:hidden}.dt_ev p small .dt_ic{width:11px;height:11px;border-radius:3px}.dt_ev p small .dt_ic svg{width:7px;height:7px}'
    + '.dt_ev.call{background:#EEF3FE;border-color:#4C7BF3}.dt_ev.tbc{background:#FFF8EC;border-color:#E0A43A;border-left-style:dashed}.dt_ev.off{opacity:.15;filter:blur(.8px)}.dt_ev.dt_hi{box-shadow:0 0 0 2px #171717;transform:scale(1.03)}'
    + '.dt_pop{position:absolute;z-index:5;width:286px;background:#fff;border-radius:14px;box-shadow:0 28px 54px -24px rgba(0,0,0,.5),0 0 0 1px #ECEAE6;padding:14px 16px;opacity:0;transform:translateY(6px) scale(.98);transition:opacity .3s,transform .3s;pointer-events:none}'
    + '.dt_pop.on{opacity:1;transform:none}.dt_pop .tp{display:flex;justify-content:space-between;align-items:center}.dt_pop h6{margin:0;font-size:14px;font-weight:600;color:#171717}.dt_pop .ok{font-size:10.5px;font-weight:600;color:#1E8A4C;background:#EAF7EF;border-radius:999px;padding:2px 8px}.dt_pop>small{color:#8A8884;font-size:11.5px}'
    + '.dt_pp{display:flex;align-items:center;gap:8px;margin:10px 0 2px;padding:8px;border-radius:10px;background:#F7F6F4}.dt_pp .avs{display:flex}.dt_pp .avs span{width:26px;height:26px;border-radius:50%;display:grid;place-items:center;font-size:9.5px;font-weight:700;border:2px solid #F7F6F4}.dt_pp .avs span+span{margin-left:-8px}.dt_pp p{margin:0;font-size:11.5px;line-height:1.3;color:#55524D}.dt_pp p b{color:#171717;font-weight:600}'
    + '.dt_pop dl{margin:8px 0 0;display:grid;grid-template-columns:auto 1fr;gap:6px 12px;font-size:12px}.dt_pop dt{color:#8A8884}.dt_pop dd{margin:0;color:#171717;font-weight:500}'
    + '.dt_pop .tag{display:inline-flex;align-items:center;gap:6px}.dt_pop .tag .dt_ic{width:15px;height:15px;border-radius:5px}'
    /* progressive blur at the bottom of the app */
    + '.dt_pb{position:absolute;left:0;right:0;bottom:0;height:34%;pointer-events:none;z-index:70}.dt_pb i{position:absolute;inset:0}'
    + '.dt_pb i:nth-child(1){-webkit-backdrop-filter:blur(.6px);backdrop-filter:blur(.6px);-webkit-mask-image:linear-gradient(to bottom,transparent 0%,#000 30%);mask-image:linear-gradient(to bottom,transparent 0%,#000 30%)}'
    + '.dt_pb i:nth-child(2){-webkit-backdrop-filter:blur(1.4px);backdrop-filter:blur(1.4px);-webkit-mask-image:linear-gradient(to bottom,transparent 25%,#000 55%);mask-image:linear-gradient(to bottom,transparent 25%,#000 55%)}'
    + '.dt_pb i:nth-child(3){-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);-webkit-mask-image:linear-gradient(to bottom,transparent 50%,#000 80%);mask-image:linear-gradient(to bottom,transparent 50%,#000 80%)}'
    + '.dt_pb i:nth-child(4){-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);-webkit-mask-image:linear-gradient(to bottom,transparent 72%,#000 100%);mask-image:linear-gradient(to bottom,transparent 72%,#000 100%);background:linear-gradient(to bottom,rgba(251,250,248,0) 40%,rgba(251,250,248,.75))}'
    /* pointer */
    + '.dt_cur{position:absolute;left:0;top:0;width:30px;height:30px;z-index:90;pointer-events:none;opacity:0;transition:opacity .4s;will-change:transform}.dt_cur.is-on{opacity:1}'
    + '.dt_cur svg{display:block;filter:drop-shadow(0 4px 8px rgba(0,0,0,.3))}.dt_cur:before{content:"";position:absolute;left:-9px;top:-9px;width:30px;height:30px;border-radius:50%;background:rgba(176,87,58,.18);transform:scale(.6);transition:transform .25s}.dt_cur.dn:before{transform:scale(1.2)}.dt_cur.dn svg{transform:scale(.88);transition:transform .15s}'
    + '.dt_rip{position:absolute;width:38px;height:38px;margin:-19px 0 0 -19px;border-radius:50%;border:2px solid #B0573A;z-index:89;pointer-events:none;animation:dtrip .6s ease-out forwards}@keyframes dtrip{from{transform:scale(.3);opacity:1}to{transform:scale(1.5);opacity:0}}'
    + '@media (max-width:767px){.dt_cur{width:22px;height:22px}.dt_host{left:8px;right:8px}.dt_tb th,.dt_tb td{padding:8px}.dt_ph{grid-template-columns:repeat(3,1fr);gap:6px;padding:10px}.dt_ads{grid-template-columns:1fr 1fr}.dt_lp{grid-template-columns:1fr}.dt_lpl{display:none}.dt_chips{display:none}}'
    + '@media (prefers-reduced-motion:reduce){.dt_cur,.dt_host,.dt_br,.dt_vb i,.dt_ad{transition:none!important}}';
  var st = document.createElement('style'); st.id = 'lpdashtour'; st.textContent = css; document.head.appendChild(st);

  function hd(title, right) { return '<div class="dt_hd"><b>' + title + '</b>' + (right || '') + '</div>'; }
  function chips(list, on) { return '<div class="dt_chips">' + list.map(function (c) { return '<span class="dt_chip' + (c[0] === on ? ' on' : '') + '" data-f="' + c[0] + '">' + (c[2] || '') + c[1] + '</span>'; }).join('') + '</div>'; }

  /* ---------- Campagne ---------- */
  var CAMP = [
    ['ig', 'Instagram', 'Reels dal cantiere', t('Il costo per visita più basso', 'Lowest cost per visit'), 'ok', 1, '812 €', 118, 14, '58 €'],
    ['ig', 'Instagram', t('Storie · render trilocali', 'Stories · two-bed renders'), t('Nuove creatività da lunedì', 'New creatives from Monday'), 'g', 1, '320 €', 52, 5, '64 €'],
    ['fb', 'Facebook', t('Modulo contatto · attici', 'Lead form · penthouses'), t('Pochi contatti, molto qualificati', 'Few leads, highly qualified'), 'g', 1, '138 €', 38, 2, '69 €'],
    ['fb', 'Facebook', t('Retargeting visitatori', 'Site retargeting'), t('In pausa: costo per visita troppo alto', 'Paused: cost per visit too high'), 'w', 0, '90 €', 12, 0, '—'],
    ['g', 'Google Ads', t('Ricerca · “nuove costruzioni”', 'Search · “new builds”'), t('Parole chiave locali, alta intenzione', 'Local keywords, high intent'), 'ok', 1, '639 €', 41, 9, '71 €'],
    ['g', 'Google Ads', t('Ricerca · nome del progetto', 'Search · project name'), t('Chi cerca già il progetto', 'People already searching the project'), 'g', 1, '117 €', 22, 3, '39 €'],
    ['g', 'Google Ads', 'Performance Max', t('In apprendimento, budget limitato', 'Learning, capped budget'), 'w', 1, '420 €', 27, 4, '105 €'],
    ['g', 'Google Ads', t('YouTube · video dal drone', 'YouTube · drone video'), t('Notorietà, misurata sulle visite', 'Awareness, measured on visits'), 'g', 1, '180 €', 9, 1, '180 €']
  ];
  function vCamp() {
    var C = [['all', t('Tutte', 'All')], ['ig', 'Instagram', ICO.ig], ['fb', 'Facebook', ICO.fb], ['g', 'Google Ads', ICO.g]];
    return hd(t('Campagne', 'Campaigns'), chips(C, 'all'))
      + '<table class="dt_tb"><tr><th>' + t('Campagna', 'Campaign') + '</th><th>' + t('Stato', 'Status') + '</th><th class="r">' + t('Spesa 30 gg', 'Spend 30 d') + '</th><th class="r">' + t('Contatti', 'Leads') + '</th><th class="r">' + t('Visite', 'Visits') + '</th><th class="r">' + t('€ / visita', '€ / visit') + '</th></tr>'
      + CAMP.map(function (r) { return '<tr data-c="' + r[0] + '"><td><span class="dt_nm">' + ICO[r[0]] + '<p>' + r[2] + '<small>' + r[1] + ' · ' + r[3] + '</small></p></span></td><td><span class="dt_st' + (r[5] ? '' : ' is-p') + '">' + (r[5] ? t('Attiva', 'Live') : t('In pausa', 'Paused')) + '</span></td><td class="r">' + r[6] + '</td><td class="r">' + r[7] + '</td><td class="r"><b>' + r[8] + '</b></td><td class="r">' + r[9] + '</td></tr>'; }).join('') + '</table>'
      + '<div class="dt_kw"><b style="color:#171717;font-weight:600;margin-right:4px">' + t('Ricerche che portano visite:', 'Searches that bring visits:') + '</b><span>nuove costruzioni parma</span><span>trilocale nuovo parma</span><span>appartamenti classe A</span><span>' + t('nome del progetto', 'project name') + '</span></div>'
      + '<div class="dt_tot">' + t('Ultimi 30 giorni:', 'Last 30 days:') + '<span>' + t('Spesa', 'Spend') + '<b>2.716 €</b></span><span>' + t('Contatti', 'Leads') + '<b>319</b></span><span>' + t('Visite', 'Visits') + '<b>38</b></span></div>';
  }

  /* ---------- Portali ---------- */
  var PRICE = { gen: t('da 219.000 €', 'from €219,000'), bi: '219.000 €', tri: '289.000 €', quad: '352.000 €' };
  var ADS = {
    immo: [['photo-c.webp', t('Residenze nel verde', 'Homes in the green'), PRICE.gen, 1840, 21, t('Progetto', 'Project')], ['photo-b.webp', t('Bilocale con balcone', 'One-bed with balcony'), PRICE.bi, 960, 11], ['photo-d.webp', t('Trilocale con terrazzo', 'Two-bed with terrace'), PRICE.tri, 1320, 17], ['photo-a.webp', t('Quadrilocale con giardino', 'Three-bed with garden'), PRICE.quad, 710, 8]],
    idea: [['photo-c.webp', t('Residenze nel verde', 'Homes in the green'), PRICE.gen, 1120, 9, t('Progetto', 'Project')], ['photo-b.webp', t('Bilocale con balcone', 'One-bed with balcony'), PRICE.bi, 640, 6], ['photo-d.webp', t('Trilocale con terrazzo', 'Two-bed with terrace'), PRICE.tri, 820, 7]],
    casa: [['photo-d.webp', t('Trilocale con terrazzo', 'Two-bed with terrace'), PRICE.tri, 410, 5], ['photo-a.webp', t('Quadrilocale con giardino', 'Three-bed with garden'), PRICE.quad, 290, 4]]
  };
  function vPort() {
    var P = [['immo', 'Immobiliare.it', 57, 4], ['idea', 'idealista', 22, 2], ['casa', 'Casa.it', 9, 0]];
    return hd(t('Portali', 'Portals'), '<small>' + t('Ultimi 30 giorni', 'Last 30 days') + '</small>') + '<div class="dt_ph">' + P.map(function (p) {
      return '<div class="dt_pt" data-p="' + p[0] + '"><h5>' + lg(p[0]) + p[1] + '<em>' + ADS[p[0]].length + ' ' + t('annunci live', 'live ads') + '</em></h5><div>' + t('Contatti', 'Leads') + ' <b>' + p[2] + '</b></div><div>' + t('Visite', 'Visits') + ' <b>' + p[3] + '</b></div></div>';
    }).join('') + '</div><div class="dt_ads"></div>';
  }
  function ads(k) {
    return ADS[k].map(function (a) { return '<div class="dt_ad"><figure style="background-image:url(' + IMG + a[0] + ')"><em>' + (a[5] || 'Live') + '</em></figure><div><b>' + a[1] + '</b><i>' + a[2] + '</i><small><span>' + a[3].toLocaleString('it-IT') + ' ' + t('viste', 'views') + '</span><span>' + a[4] + ' ' + t('contatti', 'leads') + '</span></small></div></div>'; }).join('');
  }

  /* ---------- Landing ---------- */
  var LAND = [
    [t('Pagina del progetto', 'Project page'), t('Render, punti di forza, gallery', 'Renders, highlights, gallery'), 'render-photo.webp', '2.140', '96', '4,5%'],
    [t('Brochure del progetto', 'Project brochure'), t('Planimetrie e capitolato in PDF', 'Floor plans and specs as a PDF'), 'site-render-photo-v2.webp', '1.180', '85', '7,2%'],
    [t('Richiesta di contatto', 'Contact request'), t('Tre campi, ti richiamiamo', 'Three fields, we call you back'), 'photo-c.webp', '640', '39', '6,1%']
  ];
  function vLand() {
    return hd(t('Landing page', 'Landing pages'), '<small>' + t('Ultimi 30 giorni', 'Last 30 days') + '</small>') + '<div class="dt_lp"><div class="dt_lpl">' + LAND.map(function (p) {
      return '<div class="dt_li"><div class="a"><figure style="background-image:url(' + IMG + p[2] + ')"></figure><p><b>' + p[0] + '</b><small>' + p[1] + '</small></p></div><div class="m"><span>' + t('Visitatori', 'Visitors') + '<b>' + p[3] + '</b></span><span>' + t('Richieste', 'Requests') + '<b>' + p[4] + '</b></span><span>' + t('Conversione', 'Conversion') + '<b>' + p[5] + '</b></span></div></div>';
    }).join('') + '</div><div class="dt_lpr"><div class="dt_empty"><i></i>' + t('Seleziona una pagina', 'Select a page') + '</div><div class="dt_br"></div></div></div>';
  }
  function page(i) {
    var bar = '<div class="dt_bt"><i></i><i></i><i></i><span>' + t('tuoprogetto.it', 'yourproject.com') + (i ? '/brochure' : '/') + '</span></div>';
    if (i === 0) return bar + '<div class="la"><nav><b>RESIDENZE VERDI</b><span>' + t('Progetto · Case · Contatti', 'Project · Homes · Contact') + '</span></nav><div class="hero" style="background-image:url(' + IMG + 'render-photo.webp)"></div><div class="tx"><small>' + t('Nuove costruzioni · Parma', 'New builds · Parma') + '</small><h4>' + t('Case nel verde, a dieci minuti dal centro', 'Homes in the green, ten minutes from the centre') + '</h4></div><div class="ft"><span><b>A4</b>' + t('classe energetica', 'energy class') + '</span><span><b>20 m²</b>' + t('terrazzi', 'terraces') + '</span><span><b>2027</b>' + t('consegna', 'handover') + '</span></div><div class="gl"><i style="background-image:url(' + IMG + 'site-hd-int-render.webp)"></i><i style="background-image:url(' + IMG + 'photo-f.webp)"></i><i style="background-image:url(' + IMG + 'site-tp-ext-render.webp)"></i></div></div>';
    return bar + '<div class="lb"><div class="cv"><i style="background-image:url(' + IMG + 'photo-e.webp)"></i><b>BROCHURE 2027</b></div><div><small>' + t('PDF · 24 pagine', 'PDF · 24 pages') + '</small><h4>' + t('Tutto il progetto, in una brochure', 'The whole project, in one brochure') + '</h4><ul><li>' + t('Planimetrie di ogni appartamento', 'Floor plans of every home') + '</li><li>' + t('Capitolato e finiture', 'Specs and finishes') + '</li><li>' + t('Listino prezzi aggiornato', 'Up-to-date price list') + '</li></ul><u>' + t('Ricevi la brochure', 'Get the brochure') + '</u></div></div>';
  }

  /* ---------- Visite ---------- */
  function vVis() {
    var W = [[t('S1', 'W1'), 5], [t('S2', 'W2'), 8], [t('S3', 'W3'), 7], [t('S4', 'W4'), 10], [t('S5', 'W5'), 12]];
    return hd(t('Visite in ufficio vendite', 'Sales-office visits'), '<small>' + t('Questo mese', 'This month') + '</small>')
      + '<div class="dt_vk"><div class="dt_k"><small>' + t('Visite questo mese', 'Visits this month') + '</small><b>42</b><em>+75% ' + t('da gennaio', 'since January') + '</em></div><div class="dt_k"><small>' + t('Già effettuate', 'Already done') + '</small><b>33</b></div><div class="dt_k"><small>' + t('In calendario', 'Booked') + '</small><b>9</b></div></div>'
      + '<div class="dt_vb">' + W.map(function (w, i) { return '<div' + (i === 4 ? ' data-k' : '') + '><span>' + w[1] + '</span><i style="--h:' + (w[1] * 9) + 'px;transition-delay:' + (i * 90) + 'ms"></i></div>'; }).join('') + '</div><div class="dt_vl">' + W.map(function (w) { return '<span>' + w[0] + '</span>'; }).join('') + '</div>';
  }

  /* ---------- Calendario ---------- */
  function vCal() {
    var D = [t('Lun 11', 'Mon 11'), t('Mar 12', 'Tue 12'), t('Mer 13', 'Wed 13'), t('Gio 14', 'Thu 14'), t('Ven 15', 'Fri 15')], H = ['09:30', '11:00', '14:30', '16:00', '17:30'];
    var E = {
      '0-0': ['visit', 'AG', t('Visita · Anna G.', 'Visit · Anna G.'), lg('idea'), 'idealista'],
      '0-3': ['call', 'PR', t('Call · Paolo R.', 'Call · Paolo R.'), ICO.g, 'Google Meet'],
      '1-1': ['tbc', 'EM', t('Da confermare · Elena M.', 'To confirm · Elena M.'), ICO.fb, 'Facebook'],
      '1-4': ['visit', 'SP', t('Visita · Sara P.', 'Visit · Sara P.'), ICO.g, 'Google Ads'],
      '2-2': ['call', 'DT', t('Call · Davide T.', 'Call · Davide T.'), ICO.ig, 'Instagram'],
      '3-0': ['visit', 'MR', t('Visita · Marco R.', 'Visit · Marco R.'), ICO.ig, 'Reels'],
      '3-3': ['visit', 'LB', t('Visita · Luca B.', 'Visit · Luca B.'), ICO.g, 'Google Ads'],
      '4-1': ['visit', 'FC', t('Visita · Francesca C.', 'Visit · Francesca C.'), lg('immo'), 'Immobiliare.it'],
      '4-4': ['tbc', 'GN', t('Da confermare · Giorgio N.', 'To confirm · Giorgio N.'), lg('immo'), 'Immobiliare.it']
    };
    var F = [['all', t('Tutti', 'All')], ['visit', t('Visite', 'Visits')], ['call', 'Call'], ['tbc', t('Da confermare', 'To confirm')]];
    var h = '<div class="dt_cal"><span></span>' + D.map(function (d, i) { return '<span class="h' + (i === 3 ? ' td' : '') + '">' + d + '</span>'; }).join('');
    H.forEach(function (hr, r) { h += '<span class="t">' + hr + '</span>'; for (var c = 0; c < 5; c++) { var e = E[c + '-' + r]; h += '<span class="c">' + (e ? '<span class="dt_ev ' + e[0] + '" data-t="' + e[0] + '"' + (c === 3 && r === 0 ? ' data-k' : '') + '><span class="av">' + e[1] + '</span><p>' + e[2] + '<small>' + e[3] + e[4] + '</small></p></span>' : '') + '</span>'; } });
    h += '<div class="dt_pop"><div class="tp"><h6>' + t('Visita in ufficio vendite', 'Sales-office visit') + '</h6><span class="ok">' + t('Confermata', 'Confirmed') + '</span></div><small>' + t('Giovedì 14 · 10:30 – 11:15', 'Thursday 14 · 10:30 – 11:15') + '</small>'
      + '<div class="dt_pp"><span class="avs"><span style="background:#FDF1EC;color:#B0573A">MR</span><span style="background:#171717;color:#fff">GV</span></span><p><b>Marco R.</b> ' + t('incontra', 'meets') + ' <b>Giulia V.</b><br>' + t('consulente vendite', 'sales consultant') + '</p></div>'
      + '<dl><dt>' + t('Dove', 'Where') + '</dt><dd>' + t('Ufficio vendite in cantiere', 'On-site sales office') + '</dd>'
      + '<dt>' + t('Interesse', 'Interested in') + '</dt><dd>' + t('Trilocale con terrazzo', 'Two-bed with terrace') + '</dd>'
      + '<dt>Budget</dt><dd>280 – 310k €</dd>'
      + '<dt>' + t('Fonte', 'Source') + '</dt><dd><span class="tag">' + ICO.ig + 'Reels dal cantiere</span></dd>'
      + '<dt>' + t('Note', 'Notes') + '</dt><dd>' + t('Prima casa, vuole vedere l’esposizione', 'First home, wants to see the orientation') + '</dd></dl></div>';
    return hd(t('Calendario', 'Calendar'), chips(F, 'all')) + h + '</div>';
  }
  var V = { Campagne: vCamp, Portali: vPort, Landing: vLand, Visite: vVis, Calendario: vCal };

  /* ---------- DOM + pointer ---------- */
  var host = document.createElement('div'); host.className = 'dt_host'; main.appendChild(host);
  var pb = document.createElement('div'); pb.className = 'dt_pb'; pb.innerHTML = '<i></i><i></i><i></i><i></i>'; app.appendChild(pb);
  var cur = document.createElement('div'); cur.className = 'dt_cur'; cur.innerHTML = '<svg width="30" height="30" viewBox="0 0 24 24"><path d="M4 2l15 10.5-6.6 1.3 3.9 7.4-3 1.6-3.9-7.5L4 20z" fill="#171717" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>'; app.appendChild(cur);
  var IT = ['Panoramica', 'Campagne', 'Portali', 'Landing', 'Visite', 'Lead', 'Calendario', 'Budget', 'Azioni'];
  var side = [].slice.call(app.querySelectorAll('.v2_side > span')).filter(function (s) { return !/search/.test(s.className); });
  side.forEach(function (s, i) { s.__k = IT[i]; });
  function sideEl(k) { for (var i = 0; i < side.length; i++) if (side[i].__k === k) return side[i]; return null; }

  var P = { x: 0, y: 0 }, anim = null;
  function place(x, y) { P.x = x; P.y = y; cur.style.transform = 'translate3d(' + (x - 4) + 'px,' + (y - 3) + 'px,0)'; }
  function glide(x, y, ms, done) {
    if (anim) cancelAnimationFrame(anim);
    var x0 = P.x, y0 = P.y, t0 = null, dx = x - x0, dy = y - y0, cx = x0 + dx * .5 - dy * .12, cy = y0 + dy * .5 + dx * .08;
    function f(ts) {
      if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / ms), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      place((1 - e) * (1 - e) * x0 + 2 * (1 - e) * e * cx + e * e * x, (1 - e) * (1 - e) * y0 + 2 * (1 - e) * e * cy + e * e * y);
      if (k < 1) anim = requestAnimationFrame(f); else { anim = null; done && done(); }
    }
    anim = requestAnimationFrame(f);
  }
  function pt(el, fx, fy) { var a = app.getBoundingClientRect(), b = el.getBoundingClientRect(); return [b.left - a.left + b.width * (fx == null ? .3 : fx), b.top - a.top + b.height * (fy == null ? .5 : fy)]; }
  function tap(after) { cur.classList.add('dn'); var r = document.createElement('span'); r.className = 'dt_rip'; r.style.left = P.x + 'px'; r.style.top = P.y + 'px'; app.appendChild(r); setTimeout(function () { cur.classList.remove('dn'); r.remove(); }, 600); after && after(); }

  var Q = [], qi = 0, timer = null, running = false;
  function wait(ms) { Q.push(function (n) { timer = setTimeout(n, ms); }); }
  function go(getEl, fx, fy, ms) { Q.push(function (n) { var el = getEl(); if (!el) return n(); var p = pt(el, fx, fy); glide(p[0], p[1], ms || 850, n); }); }
  function click(fn) { Q.push(function (n) { tap(fn); timer = setTimeout(n, 420); }); }
  function act(fn) { Q.push(function (n) { fn(); n(); }); }
  function q(s) { return function () { return host.querySelector(s) || app.querySelector(s); }; }
  function all(s) { return [].slice.call(host.querySelectorAll(s)); }

  function show(k) {
    side.forEach(function (s) { s.classList.toggle('on', s.__k === k); });
    var pano = k === 'Panoramica'; app.classList.toggle('dt_notpano', !pano);
    host.classList.remove('is-on'); if (pano) return;
    host.innerHTML = V[k](); void host.offsetWidth; host.classList.add('is-on');
  }
  function nav(k) { go(function () { return sideEl(k); }, .32, .5, 950); click(function () { show(k); }); wait(650); }
  function chipClick(f, after, hold) {
    go(q('.dt_chip[data-f="' + f + '"]'), .5, .5, 700);
    click(function () { all('.dt_chip').forEach(function (c) { c.classList.toggle('on', c.getAttribute('data-f') === f); }); after && after(f); });
    wait(hold || 1300);
  }
  function filterCamp(f) { all('.dt_tb tr[data-c]').forEach(function (r) { r.classList.toggle('off', f !== 'all' && r.getAttribute('data-c') !== f); }); var kw = host.querySelector('.dt_kw'); kw && kw.classList.toggle('on', f === 'g'); }
  function filterCal(f) { all('.dt_ev').forEach(function (e) { e.classList.toggle('off', f !== 'all' && e.getAttribute('data-t') !== f); }); }
  function seg(i) { go(function () { return app.querySelectorAll('.d3_seg button')[i]; }, .5, .5, 700); click(function () { var b = app.querySelectorAll('.d3_seg button')[i]; b && b.click(); }); wait(500); }
  function sweep(D, from, to) {
    Q.push(function (n) {
      var h = app.querySelector('.d3_hit'); if (!h) return n();
      var a = app.getBoundingClientRect(), b = h.getBoundingClientRect(), y = b.top + b.height * .45;
      glide(b.left - a.left + b.width * from, y - a.top, 700, function () {
        var t0 = null;
        function f(ts) {
          if (!running) return; if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / D), x = b.left + b.width * (from + (to - from) * k);
          place(x - a.left, y - a.top);
          try { h.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true })); } catch (e) {}
          if (k < 1) anim = requestAnimationFrame(f); else { anim = null; n(); }
        }
        anim = requestAnimationFrame(f);
      });
    });
  }
  function leave() { act(function () { var h = app.querySelector('.d3_hit'); if (h) try { h.dispatchEvent(new PointerEvent('pointerleave', { bubbles: false })); } catch (e) {} }); }

  /* 1 · Panoramica: follow the visits left to right, switch the metric, follow the cost */
  act(function () { show('Panoramica'); });
  sweep(2800, .05, .95); wait(300);
  seg(1); sweep(1800, .95, .3); wait(300);
  seg(2); sweep(1400, .3, .8); leave(); wait(200);
  seg(0); wait(700);
  /* 2 · Campagne by channel, with 30-day spend */
  nav('Campagne'); wait(700);
  chipClick('ig', filterCamp); chipClick('fb', filterCamp); chipClick('g', filterCamp, 2400); chipClick('all', filterCamp, 900);
  /* 3 · Portali: click each portal, its ads appear below */
  nav('Portali');
  ['immo', 'idea', 'casa'].forEach(function (k, i) {
    go(q('.dt_pt[data-p="' + k + '"]'), .45, .4, 800);
    click(function () {
      all('.dt_pt').forEach(function (p) { p.classList.toggle('on', p.getAttribute('data-p') === k); });
      var box = host.querySelector('.dt_ads'); box.classList.remove('on'); box.innerHTML = ads(k);
      setTimeout(function () { box.classList.add('on'); [].forEach.call(box.children, function (c, j) { c.style.transitionDelay = (j * 80) + 'ms'; }); }, 60);
    });
    wait(i === 0 ? 2600 : 2000);
  });
  /* 4 · Landing: open two very different pages */
  nav('Landing'); wait(600);
  [0, 1].forEach(function (i) {
    go(function () { return all('.dt_li')[i]; }, .4, .35, 850);
    click(function () {
      all('.dt_li').forEach(function (x, j) { x.classList.toggle('on', j === i); });
      var br = host.querySelector('.dt_br'), em = host.querySelector('.dt_empty');
      if (em) em.style.opacity = 0; br.classList.remove('on');
      setTimeout(function () { br.innerHTML = page(i); void br.offsetWidth; br.classList.add('on'); }, i ? 320 : 40);
    });
    wait(3000);
  });
  /* 5 · Visite */
  nav('Visite'); wait(500);
  go(q('.dt_vb [data-k]'), .5, .7, 850); act(function () { var b = host.querySelector('.dt_vb [data-k]'); b && b.classList.add('dt_hi'); }); wait(1800);
  /* 6 · Calendario: filter, open one visit, see who meets whom */
  nav('Calendario'); wait(500);
  chipClick('visit', filterCal, 1200);
  go(q('.dt_ev[data-k]'), .5, .5, 850);
  click(function () {
    var e = host.querySelector('.dt_ev[data-k]'), pop = host.querySelector('.dt_pop'), cal = host.querySelector('.dt_cal'); if (!e || !pop || !cal) return;
    e.classList.add('dt_hi'); var c = cal.getBoundingClientRect(), r = e.getBoundingClientRect();
    var left = r.left - c.left - 296; if (left < 8) left = r.right - c.left + 10;
    pop.style.left = left + 'px'; pop.style.top = Math.max(4, r.top - c.top - 8) + 'px'; pop.classList.add('on');
  });
  wait(4600);
  act(function () { var p = host.querySelector('.dt_pop'); p && p.classList.remove('on'); var e = host.querySelector('.dt_ev.dt_hi'); e && e.classList.remove('dt_hi'); });
  chipClick('all', filterCal, 900);
  /* back to the start */
  nav('Panoramica'); wait(400);

  function step() { if (!running) return; var f = Q[qi]; qi = (qi + 1) % Q.length; f(step); }
  function start() { if (running) return; running = true; cur.classList.add('is-on'); if (!P.x) { var b = app.getBoundingClientRect(); place(b.width * .5, b.height * .55); } step(); }
  function stop() { running = false; clearTimeout(timer); if (anim) cancelAnimationFrame(anim); anim = null; }

  ['render-photo.webp', 'site-render-photo-v2.webp', 'photo-a.webp', 'photo-b.webp', 'photo-c.webp', 'photo-d.webp', 'photo-e.webp', 'photo-f.webp', 'site-hd-int-render.webp', 'site-tp-ext-render.webp'].forEach(function (f) { var im = new Image(); im.src = IMG + f; });
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) start(); else stop(); }); }, { threshold: .35 }).observe(app);
  } else start();
})();
