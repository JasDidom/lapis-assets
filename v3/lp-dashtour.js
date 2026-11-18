/* Lapis · Home dashboard: self-running showcase v9.1.3 (one system: strip + KPI band + workspace; Panoramica → Campagne → Portali → Landing) (v7 · calm pass: one sweep, seamless view changes, simple visit card) — click → contatto → visita in ufficio vendite */
(function () {
  var app = document.querySelector('.v2_dashsec .v2_app');
  if (!app || app.__dt) return;
  var main = app.querySelector('.v2_main');
  if (!main) return;
  app.__dt = 1;
  var EN = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;
  function t(it, en) { return EN ? en : it; }
  var IMG = 'https://cdn.jsdelivr.net/gh/JasDidom/lapis-assets@e3ab270842bc777b32d42b2427f0c97914cc1369/img/';
  var CDN = 'https://cdn.prod.website-files.com/6ac0d032fb0cd97884ba849a/';
  function logo(alt, fb) { var i = document.querySelector('img[alt="' + alt + '"]'); return i ? (i.currentSrc || i.src) : (fb ? CDN + fb : ''); }
  var L = {
    google: logo('Google Ads', '6ad767111781999df83978b3_lp-d5bb243759.webp'),
    immo: logo('Immobiliare.it', '6ad76591a2f4ec5a2ae81def_lp-4b9cb48fc3.png'),
    idea: logo('idealista', '6ad7659158729a54f46b2ddd_lp-69c63ed1c0.png'),
    casa: CDN + '6ad76591cbb284699d94de73_lp-33db9b2d0a.png'
  };
  function lg(k) { return '<img class="dt_ic" src="' + L[k] + '" alt="">'; }
  var ICO = {
    ig: '<span class="dt_ic dt_ig"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" stroke-width="2.2"><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17" cy="7" r=".9" fill="#fff" stroke="none"/></svg></span>',
    fb: '<span class="dt_ic dt_fb"><svg viewBox="0 0 24 24" width="12" height="12"><path fill="#fff" d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z"/></svg></span>',
    gpt: '<span class="dt_ic dt_gpt"><svg viewBox="0 0 24 24" width="12" height="12"><path fill="#fff" d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z"/></svg></span>',
    g: '<img class="dt_ic" src="' + L.google + '" alt="">',
    immo: lg('immo'), idea: lg('idea'), casa: lg('casa')
  };
  var CHK = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#1E8A4C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

  /* ---------- numbers ---------- */
  function fmt(n) { var s = String(Math.round(n)), o = ''; while (s.length > 3) { o = (EN ? ',' : '.') + s.slice(-3) + o; s = s.slice(0, -3); } return s + o; }
  function eur(n) { return EN ? '€' + fmt(n) : fmt(n) + ' €'; }
  function num(n, suf, d) { return '<b class="dt_n" data-n="' + n + '"' + (suf ? ' data-s="' + suf + '"' : '') + (d ? ' data-d="' + d + '"' : '') + '>0' + (suf || '') + '</b>'; }
  function countUp(root) {
    [].forEach.call(root.querySelectorAll('.dt_n[data-n]'), function (el) {
      if (el.__c) return; el.__c = 1;
      var to = +el.getAttribute('data-n'), suf = el.getAttribute('data-s') || '', delay = +(el.getAttribute('data-d') || 0), t0 = null, D = 900;
      function f(ts) { if (!t0) t0 = ts + delay; var k = Math.max(0, Math.min(1, (ts - t0) / D)), e = 1 - Math.pow(1 - k, 3); el.textContent = fmt(to * e) + suf; if (k < 1) requestAnimationFrame(f); }
      requestAnimationFrame(f);
    });
  }

  /* ---------- styles ---------- */
  var E1 = 'cubic-bezier(.2,.8,.2,1)';
  var css = ''
    + '.v2_dashsec .v2_app{position:relative}.v2_main{position:relative}'
    + '.v2_side>span.on{background:#EFECE8!important;color:#171717!important}.v2_side>span.lp-v2_side_span{transition:background-color .25s,color .25s}.v2_side>span.dt_hv:not(.on){background:#F4F2EF}'
    + '.d3_tbl .d3_r{transition:background-color .25s}.d3_tbl .d3_r.dt_hv{background:#F6F4F1}.d3_seg button.dt_hv{color:#171717}'
    /* overlay host */
    + '.dt_host{position:absolute;left:0;top:0;right:0;bottom:0;padding:14px 16px 18px;background:#FBFAF8!important;opacity:0;visibility:hidden;transition:opacity .28s ease,visibility 0s .28s;overflow:hidden;z-index:60;font-size:13px;line-height:1.35;color:#171717;box-sizing:border-box;font-variant-numeric:tabular-nums;text-align:left}'
    + '.dt_host *{box-sizing:border-box}.dt_host b{font-weight:600}.dt_host small{font-size:inherit}.dt_host p,.dt_host h6,.dt_host figure{margin:0}'
    + '.dt_host.is-on{opacity:1;visibility:visible;transition:opacity .45s ease}'
    + '@keyframes dtin{from{opacity:0;transform:translateY(10px)}}@keyframes dtpop{from{opacity:0;transform:translateY(6px) scale(.96)}}@keyframes dtfade{from{opacity:0}}@keyframes dtdraw{to{stroke-dashoffset:0}}@keyframes dtpulse{0%{box-shadow:0 0 0 0 rgba(46,189,107,.45)}100%{box-shadow:0 0 0 6px rgba(46,189,107,0)}}'
    + '.dt_in{animation:dtin .6s ' + E1 + ' backwards;animation-delay:calc(var(--i,0)*60ms + 60ms)}'
    + '.dt_card{background:#fff;border:1px solid #ECEAE6;border-radius:12px;box-shadow:0 1px 2px rgba(23,23,23,.03)}'
    + '.dt_ic{width:20px;height:20px;border-radius:6px;display:inline-grid;place-items:center;flex:none;object-fit:contain}.dt_ig{background:radial-gradient(circle at 30% 110%,#FDD56A 0,#F45B3C 40%,#C232A3 70%,#6A3FD1 100%)}.dt_fb{background:#1877F2;border-radius:50%}.dt_gpt{background:#171717}'
    + '.dt_hd{display:flex;align-items:center;justify-content:space-between;gap:12px;height:44px;margin-bottom:12px;padding:0 4px}'
    + '.dt_hd>div:first-child b{display:block;font-size:17px;letter-spacing:-.015em;line-height:1.2;white-space:nowrap}.dt_hd>div:first-child small{display:block;font-size:12px;color:#8A8884;margin-top:2px;white-space:nowrap}'
    + '.dt_rng{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border:1px solid #ECEAE6;border-radius:8px;background:#fff;font-size:12px;color:#55524D;white-space:nowrap}'
    + '.dt_chips{display:flex;gap:6px}.dt_chip{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;border:1px solid #E8E5E0;font-size:12.5px;color:#55524D;background:#fff;transition:background-color .25s,border-color .25s,color .25s;white-space:nowrap}.dt_chip i{width:7px;height:7px;border-radius:50%;flex:none}.dt_chip.dt_hv{background:#F6F4F1}.dt_chip.on{background:#171717;border-color:#171717;color:#fff}'
    /* portali · tagli */
    + '.dt_pg{display:grid;grid-template-columns:258px 258px minmax(0,1fr);gap:14px;align-items:start}'
    + '.dt_bld{overflow:hidden}.dt_bph{height:128px;background-size:cover;background-position:center 58%;position:relative}'
    + '.dt_live{position:absolute;left:10px;top:10px;display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.95);border-radius:999px;padding:4px 10px 4px 8px;font-size:11px;font-weight:600;color:#1E8A4C;box-shadow:0 1px 3px rgba(0,0,0,.12);white-space:nowrap}.dt_live:before{content:"";width:6px;height:6px;border-radius:50%;background:#2EBD6B;animation:dtpulse 1.8s ease-out infinite}'
    + '.dt_bi{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:12px 14px}.dt_bi b{display:block;font-size:15px;letter-spacing:-.01em;white-space:nowrap}.dt_bi small{display:block;font-size:11.5px;color:#8A8884;margin-top:1px;white-space:nowrap}'
    + '.dt_lgs{display:flex;flex:none}.dt_lgs .dt_ic{width:22px;height:22px;border-radius:7px;box-shadow:0 0 0 2px #fff;background:#fff}.dt_lgs .dt_ic+.dt_ic{margin-left:-6px}'
    + '.dt_pr{display:grid;grid-template-columns:minmax(0,1fr) 40px 44px 32px;align-items:center;padding:9px 13px;font-size:12px;border-top:1px solid #F3F1EE;transition:background-color .25s}.dt_pr>span{text-align:right;white-space:nowrap}.dt_pr>span b{font-weight:600}'
    + '.dt_pr .n{display:flex;align-items:center;gap:6px;text-align:left;font-weight:500;overflow:hidden}.dt_pr .n .dt_ic{width:17px;height:17px;border-radius:5px}'
    + '.dt_pr.h{font-size:10px;color:#B5B2AC;padding:7px 14px 6px;border-top-color:#F0EEEB}.dt_pr.tot{background:#FAF9F7;color:#55524D}.dt_pr.tot .n{color:#171717;font-weight:600}.dt_pr.dt_hv{background:#FAF8F5}'
    + '.dt_note{display:flex;align-items:center;gap:8px;margin-top:10px;padding:9px 12px;font-size:11.5px;color:#55524D;border:1px dashed #E3DFD8;border-radius:10px;white-space:nowrap}.dt_note i{width:18px;height:18px;border-radius:50%;background:#EAF7EF;display:grid;place-items:center;flex:none}'
    + '.dt_lh{display:flex;justify-content:space-between;align-items:center;height:20px;padding:0 2px;font-size:12px;color:#8A8884;font-weight:500;white-space:nowrap}.dt_lh span{color:#B5B2AC}'
    + '.dt_tg{display:flex;gap:10px;align-items:center;padding:10px;margin-top:8px;background:#fff;border:1px solid #ECEAE6;border-radius:12px;transition:background-color .25s,border-color .25s,box-shadow .35s}.dt_tg.dt_hv{background:#FAF9F7;border-color:#DDD9D2}.dt_tg.on{background:#fff;border-color:#171717;box-shadow:0 0 0 1px #171717,0 12px 26px -18px rgba(23,23,23,.45)}'
    + '.dt_th{width:56px;height:50px;border-radius:8px;background:#FAF9F7;border:1px solid #F0EEEB;display:grid;place-items:center;flex:none}.dt_th svg{width:46px;height:32px;display:block}'
    + '.dt_tx{flex:1;min-width:0}.dt_tx .a{display:flex;justify-content:space-between;align-items:baseline;gap:6px;white-space:nowrap}.dt_tx .a b{font-size:13.5px;letter-spacing:-.005em}.dt_tx .a i{font-style:normal;font-size:12px;font-weight:600}'
    + '.dt_tx .b{display:block;font-size:11.5px;color:#8A8884;white-space:nowrap}.dt_tx .c{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:11px;color:#55524D;white-space:nowrap}.dt_tx .c .dt_ic{width:14px;height:14px;border-radius:4px}'
    + '.dt_det{padding:12px;min-width:0;transition:opacity .18s ease}.dt_det.sw{opacity:0}'
    + '.dt_stage{position:relative;height:214px;border-radius:9px;border:1px solid #F0EEEB;background:#FAF9F7 radial-gradient(#E7E3DD 1px,transparent 1.2px) 0 0/14px 14px;display:grid;place-items:center;overflow:hidden}.dt_stage svg{width:94%;height:92%;display:block}'
    + '.dt_stage em{position:absolute;top:8px;font-style:normal;font-size:10px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:#8A8884;background:#fff;border:1px solid #ECEAE6;border-radius:6px;padding:2px 7px;white-space:nowrap}.dt_stage em.l{left:8px}.dt_stage em.r{right:8px;letter-spacing:0;text-transform:none;color:#1E8A4C;font-size:10.5px}'
    + '.dt_plan.big .lb text{font-size:8.8px}.dt_plan .lb text{paint-order:stroke;stroke:#FFFFFF;stroke-width:3px;stroke-linejoin:round}.dt_plan .m{font-size:8px;font-weight:500;letter-spacing:0;text-transform:none;fill:#A8A49D}.dt_plan .sc text{text-anchor:start;font-size:7.5px;letter-spacing:0;text-transform:none;fill:#8A8884}'
    + '.dt_plan text{font-family:inherit;font-size:7.6px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;fill:#8A8884;text-anchor:middle}'
    + '.dt_plan.big .w{stroke-dasharray:1 1.1;stroke-dashoffset:1.05;animation:dtdraw .9s cubic-bezier(.6,0,.2,1) forwards}.dt_plan.big .dd,.dt_plan.big .fu,.dt_plan.big .te{animation:dtfade .5s ease backwards;animation-delay:.75s}.dt_plan.big .lb{animation:dtfade .5s ease backwards;animation-delay:1s}'
    + '.dt_dh{display:flex;justify-content:space-between;align-items:flex-end;gap:10px;margin:12px 2px 0;white-space:nowrap}.dt_dh b{display:block;font-size:17px;letter-spacing:-.015em;line-height:1.2}.dt_dh small{display:block;font-size:11.5px;color:#8A8884;margin-top:2px}.dt_dh .p{text-align:right}.dt_dh .p b{font-size:16px}'
    + '.dt_dk{display:grid;grid-template-columns:repeat(3,1fr);margin-top:12px;border:1px solid #F0EEEB;border-radius:10px}.dt_dk span{padding:8px 11px;font-size:10.5px;color:#8A8884;white-space:nowrap}.dt_dk span+span{border-left:1px solid #F0EEEB}.dt_dk b{display:block;font-size:16px;color:#171717;letter-spacing:-.01em;margin-top:1px}'
    + '.dt_bb{margin-top:12px}.dt_bb>small{display:block;font-size:11px;color:#8A8884;font-weight:500;margin:0 2px 4px}'
    + '.dt_br{display:grid;grid-template-columns:16px 82px minmax(0,1fr) 58px;gap:8px;align-items:center;height:26px;font-size:12px;padding:0 2px;white-space:nowrap}.dt_br .dt_ic{width:16px;height:16px;border-radius:5px}'
    + '.dt_trk{height:6px;border-radius:3px;background:#F1EFEC;overflow:hidden}.dt_trk i{display:block;height:100%;width:0;border-radius:3px;background:#D5D0C8;transition:width 1s ' + E1 + '}.dt_br.best .dt_trk i{background:#171717}'
    + '.dt_br .v{display:flex;align-items:center;justify-content:flex-end;gap:5px;font-weight:600}.dt_br .v u{text-decoration:none;font-size:9.5px;font-weight:700;letter-spacing:.03em;color:#B0573A;background:#FDF1EC;border-radius:999px;padding:1px 6px}'
    /* insight chip on Panoramica */
    + '.dt_ins{position:absolute;left:0;top:0;z-index:58;display:inline-flex;align-items:center;gap:7px;padding:5px 12px 5px 6px;border-radius:999px;background:#fff;border:1px solid #ECEAE6;box-shadow:0 10px 22px -14px rgba(23,23,23,.4);font-size:12px;line-height:1.3;color:#55524D;white-space:nowrap;opacity:0;transform:translateY(5px) scale(.97);transition:opacity .4s ease,transform .5s ' + E1 + ';pointer-events:none}.dt_ins.on{opacity:1;transform:none}.dt_ins b{color:#171717;font-weight:600}'
    + '.dt_ins i{width:18px;height:18px;border-radius:50%;background:#FDF1EC;display:grid;place-items:center;flex:none}'
    /* progressive blur: lower ~30% of the app, stronger toward the bottom */
    + '.dt_pr[data-p]{transition:background-color .25s,opacity .3s,box-shadow .25s}.dt_pr.sel{background:#F4F2EF;box-shadow:inset 3px 0 0 #171717}.dt_pr.sel .n{font-weight:600}.dt_pr.dim{opacity:.38}'
    + '.dt_tg{transition:opacity .3s,transform .3s,max-height .35s,margin .35s,padding .35s;max-height:120px}.dt_tg.hid{opacity:0;max-height:0!important;margin-top:0!important;margin-bottom:0!important;padding-top:0!important;padding-bottom:0!important;overflow:hidden;border-width:0!important}.dt_tg.pop{animation:dtpop .45s cubic-bezier(.2,.8,.2,1)}@keyframes dtpop{from{transform:translateY(6px);opacity:.3}to{transform:none;opacity:1}}'
    + '.dt_lh em.lt{font-style:normal}.dt_br.dim{opacity:.35}.dt_br.pick span{font-weight:600;color:#171717}'
    + '.dt_pb{position:absolute;left:0;right:0;bottom:0;height:24%;pointer-events:none;z-index:70;border-radius:0 0 16px 16px;overflow:hidden}.dt_pb i{position:absolute;left:0;top:0;right:0;bottom:0}'
    + '.dt_pb i:nth-child(1){-webkit-backdrop-filter:blur(.35px);backdrop-filter:blur(.35px);-webkit-mask-image:linear-gradient(to bottom,transparent 0%,#000 35%);mask-image:linear-gradient(to bottom,transparent 0%,#000 35%)}'
    + '.dt_pb i:nth-child(2){-webkit-backdrop-filter:blur(.8px);backdrop-filter:blur(.8px);-webkit-mask-image:linear-gradient(to bottom,transparent 30%,#000 60%);mask-image:linear-gradient(to bottom,transparent 30%,#000 60%)}'
    + '.dt_pb i:nth-child(3){-webkit-backdrop-filter:blur(1.6px);backdrop-filter:blur(1.6px);-webkit-mask-image:linear-gradient(to bottom,transparent 55%,#000 84%);mask-image:linear-gradient(to bottom,transparent 55%,#000 84%)}'
    + '.dt_pb i:nth-child(4){-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);-webkit-mask-image:linear-gradient(to bottom,transparent 76%,#000 100%);mask-image:linear-gradient(to bottom,transparent 76%,#000 100%);background:linear-gradient(to bottom,rgba(251,250,248,0) 50%,rgba(251,250,248,.55))}'
    /* pointer */
    + '.dt_cur{position:absolute;left:0;top:0;width:30px;height:30px;z-index:90;pointer-events:none;opacity:0;transition:opacity .4s;will-change:transform}.dt_cur.is-on{opacity:1}.v2_app.dt_sm .dt_cur,.v2_app.dt_sm .dt_rip{display:none}'
    + '.dt_cur svg{display:block;filter:drop-shadow(0 4px 8px rgba(0,0,0,.3));transition:transform .15s}.dt_cur:before{content:"";position:absolute;left:-9px;top:-9px;width:30px;height:30px;border-radius:50%;background:rgba(176,87,58,.18);transform:scale(.6);transition:transform .25s}.dt_cur.dn:before{transform:scale(1.2)}.dt_cur.dn svg{transform:scale(.88)}'
    + '.dt_rip{position:absolute;width:40px;height:40px;margin:-20px 0 0 -20px;border-radius:50%;border:2px solid #B0573A;background:rgba(176,87,58,.1);z-index:89;pointer-events:none;animation:dtrip .65s ease-out forwards}@keyframes dtrip{from{transform:scale(.25);opacity:1}to{transform:scale(1.5);opacity:0}}'
    /* small screens */
    + '@media (max-width:767px){.dt_cur{width:22px;height:22px}.dt_cur svg{width:22px;height:22px}.dt_host{padding:10px}.dt_hd{height:36px;margin-bottom:8px}.dt_hd>div:first-child b{font-size:15px}.dt_hd>div:first-child small,.dt_rng{display:none}'
    + '.dt_pg{grid-template-columns:minmax(0,1fr);gap:8px}.dt_bld,.dt_note,.dt_lh{display:none}.dt_ls{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}.dt_tg{margin-top:0;padding:6px;flex-direction:column;gap:4px;align-items:stretch}.dt_th{width:100%;height:34px}.dt_th svg{height:24px}.dt_tx .a i,.dt_tx .b,.dt_tx .c{display:none}.dt_tx .a b{font-size:11px;overflow:hidden;text-overflow:ellipsis}'
    + '.dt_det{padding:8px}.dt_stage{height:320px}.dt_dh b{font-size:14px}.dt_dh .p b{font-size:13px}.dt_dk{display:none}'
    + '.dt_kp{display:none}.dt_chip{padding:5px 8px;font-size:11px}.dt_chips{gap:4px}.dt_cal{grid-template-columns:30px repeat(5,minmax(0,1fr))}.dt_cal .h{padding:0 4px;font-size:0;gap:0}.dt_cal .h b{font-size:11px}.dt_cal .t{padding-left:3px;font-size:9px;height:84px}.dt_cal .c{height:84px}.dt_now{display:none}'
    + '.dt_ev{left:3px;right:3px;padding:0;justify-content:center;height:60px!important}.dt_ev p,.dt_ev>.dt_ic{display:none}.dt_pop{width:264px;max-width:calc(100% - 16px);padding:12px}.dt_jr,.dt_pi{display:none}.dt_ins{display:none}}'
    + '@media (prefers-reduced-motion:reduce){.dt_cur,.dt_host,.dt_in,.dt_ev,.dt_plan *{transition:none!important;animation:none!important}.dt_plan.big .w{stroke-dashoffset:0}}';
  css += ''
    /* scene change: a soft focus pull instead of a hard cut */
    + '.dt_host{filter:blur(5px);transform:translateY(6px)}.dt_host.is-on{filter:none;transform:none;transition:opacity .45s ease,filter .5s ease,transform .6s ' + E1 + '}'
    /* live states */
    + '.dt_lh span:before{content:"";display:inline-block;width:6px;height:6px;border-radius:50%;background:#2EBD6B;margin-right:6px;vertical-align:1px;animation:dtlive 2s ease-out infinite}'
    + '@keyframes dtlive{0%{box-shadow:0 0 0 0 rgba(46,189,107,.45)}70%,100%{box-shadow:0 0 0 6px rgba(46,189,107,0)}}'
    + '.dt_ins .dt_ty{font-style:normal}.dt_ty:after,.dt_caret:after{content:"";display:inline-block;width:1px;height:.95em;margin-left:1px;vertical-align:-1px;background:currentColor;animation:dtblink .55s steps(1) infinite}@keyframes dtblink{50%{opacity:0}}'
    /* seamless swap between views (host stays opaque, content cross-fades) */
    + '.dt_host>*{transition:opacity .26s ease,filter .26s ease}.dt_host.sw>*{opacity:0;filter:blur(3px)}'
    /* simple visit card */
    + '.dt_pop{width:300px;padding:16px 18px 16px}.dt_who{display:flex;align-items:center;gap:10px;margin-top:14px;padding:10px 12px;border-radius:10px;background:#F7F6F4}'
    + '.dt_who .av{width:32px;height:32px;border-radius:50%;background:#FDF1EC;color:#B0573A;display:grid;place-items:center;font-size:11px;font-weight:700;flex:none}'
    + '.dt_who p{margin:0;font-size:11.5px;color:#73726E;line-height:1.4;white-space:nowrap}.dt_who p b{display:block;font-size:13px;color:#171717}'
    + '.dt_jr{margin-top:14px}.dt_host .dt_pop .dt_with{margin:14px 0 0;padding-top:11px;border-top:1px solid #F0EEEB;font-size:11px;color:#8A8884}'
    /* google-calendar look */
    + '.dt_cal .h{flex-direction:column;justify-content:center;align-items:flex-start;gap:1px;height:50px;padding:0 10px}.dt_cal .h small{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#8A8884}.dt_cal .h b{font-size:18px;font-weight:500;line-height:1.1;color:#171717}.dt_cal .h:first-child small{font-size:9px;letter-spacing:0;text-transform:none;color:#B5B2AC}'
    + '.dt_cal .h.td small{color:#B0573A}.dt_cal .h.td b{display:inline-grid;place-items:center;width:28px;height:28px;padding:0;border-radius:50%;background:#B0573A;color:#fff;font-size:15px}'
    + '.dt_cal .t{text-align:right;padding:4px 8px 0 0;font-size:10px}'
    + '.dt_gc{width:328px;padding:8px 8px 14px 14px;border-radius:12px}.dt_gc .gc_bar{display:flex;justify-content:flex-end;gap:2px;margin-bottom:4px}.dt_gc .gc_bar>svg,.dt_gc .dt_x{width:28px;height:28px;padding:7px;border-radius:50%;color:#55524D;display:block;box-sizing:border-box}.dt_gc .dt_x svg{width:14px;height:14px;display:block}.dt_gc .dt_x{padding:7px}'
    + '.gc_r{display:grid;grid-template-columns:22px minmax(0,1fr);gap:12px;align-items:start;padding:6px 8px 6px 0}.gc_r>svg{width:18px;height:18px;color:#73726E;margin-top:1px}.gc_r b{display:block;font-size:12.5px;font-weight:500;color:#171717;line-height:1.35}.gc_r small{display:block;font-size:11.5px;color:#73726E;line-height:1.4}.gc_r small.d{font-size:12px;color:#3D3D3D}'
    + '.gc_t{align-items:center;padding-bottom:10px}.gc_sq{width:14px;height:14px;border-radius:4px;background:#2EBD6B;margin:0 4px}.gc_t h6{font-size:17px;font-weight:500;letter-spacing:-.01em;line-height:1.25;color:#171717;margin:0}.gc_t p{font-size:12px;color:#55524D;margin:3px 0 0}'
    + '.gc_p{display:flex;align-items:center;gap:9px;margin-top:8px}.gc_p>span{min-width:0}.gc_p small{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.gc_av{position:relative;width:28px;height:28px;border-radius:50%;background:#FDF1EC;color:#B0573A;font-style:normal;font-size:10px;font-weight:700;display:grid;place-items:center;flex:none}.gc_av.k{background:#171717;color:#fff}.gc_av svg{position:absolute;right:-3px;bottom:-3px;width:13px;height:13px;padding:1.5px;border-radius:50%;background:#fff;box-sizing:border-box;stroke:#1E8A4C}'
    + '.gc_rsvp{display:flex;align-items:center;gap:6px;margin:10px 8px 0 0;padding-top:12px;border-top:1px solid #F0EEEB;font-size:12px;color:#55524D}.gc_rsvp span{margin-right:auto}.gc_rsvp em{font-style:normal;padding:5px 12px;border-radius:999px;border:1px solid #E3DFD8;color:#3D3D3D;font-weight:500}.gc_rsvp em.on{background:#EAF7EF;border-color:#BFE5CD;color:#1E8A4C}'
    /* a lighter, calmer pointer */
    + '.dt_cur{width:26px;height:26px}.dt_cur svg{width:26px;height:26px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.18))}'
    + '@media (prefers-reduced-motion:reduce){.dt_lh span:before{animation:none!important;opacity:1;transform:none}.dt_host{filter:none;transform:none}}';

  /* ---------- v9 · one system for every view: strip + KPI band + workspace (same gridlines as Panoramica) ---------- */
  css += '.dt_host{top:44px;padding:12px 16px 18px}.dt_pb{transition:opacity .35s ease}.v2_app.dt_notpano .dt_pb{opacity:0}'
    + '.dx{display:flex;flex-direction:column;gap:10px;height:100%}'
    + '.dx_p{background:#fff;border:1px solid #ECEAE6;border-radius:12px;overflow:hidden;min-height:0}.dx_p1{flex:none}.dx_p2{flex:1;display:flex;flex-direction:column}'
    + '.dx_ov{display:flex;align-items:center;justify-content:space-between;gap:12px;height:40px;padding:0 12px;border-bottom:1px solid #ECEAE6;font-size:13px;white-space:nowrap}'
    + '.dx_ovl{display:flex;align-items:center;gap:7px;color:#171717;min-width:0}.dx_ovl svg{width:15px;height:14px;color:#8A8580;flex:none}.dx_ovl em{font-style:normal;color:#B5B0AA}.dt_host .dx_ovl b{font-weight:500}.dx_ovr{font-size:12px;color:#9A958F}'
    /* KPI band */
    + '.dx_k{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))}.dx_k>div{position:relative;padding:13px 16px 14px;min-width:0}.dx_k>div+div{border-left:1px solid #F1EFEC}'
    + '.dx_k small{display:block;font-size:12px;color:#8A8580;white-space:nowrap}.dx_k p{display:flex;align-items:center;gap:9px;margin-top:5px;white-space:nowrap}.dt_host .dx_k p>b{font-size:26px;font-weight:600;letter-spacing:-.03em;line-height:1.15;color:#171717}'
    + '.dx_dl{font-style:normal;font-size:11px;font-weight:600;border-radius:999px;padding:2px 7px;line-height:1.35;white-space:nowrap}.dx_dl.g{color:#16873F;background:#E9F6EE}.dx_dl.r{color:#C2410C;background:#FDEEE7}.dx_dl.n{color:#8A8580;background:#F3F1EE}'
    + '.dx_sp{position:absolute;right:16px;bottom:17px;width:68px;height:30px;overflow:visible}.dx_sp path{stroke:#B9B3A9;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;animation:dtdraw 1.1s cubic-bezier(.6,0,.2,1) .15s forwards}.dx_sp circle{fill:#B0573A;animation:dtfade .4s ease 1.1s backwards}'
    /* tables */
    + '.dx_t{display:flex;flex-direction:column;flex:none}'
    + '.dx_r{display:grid;align-items:center;height:44px;padding:0 6px;border-bottom:1px solid #F1EFEC;font-size:13px;white-space:nowrap;transition:background-color .25s,opacity .3s}.dx_t .dx_r:last-child{border-bottom:0}'
    + '.dx_r.h{height:34px;font-size:12px;color:#9A958F}.dx_r>span{min-width:0;padding:0 8px;overflow:hidden;text-overflow:ellipsis}.dx_r>span.num{text-align:right}.dx_r .i{color:#B5B0AA}'
    + '.dx_r.dt_hv{background:#FAF9F7}.dx_r.on{background:#F6F4F1}.dx_r.dim{opacity:.38}.dt_host .dx_r.tot{font-weight:600}'
    + '.dx_r .n{display:flex;align-items:center;gap:10px;font-weight:500}.dx_r .n .dt_ic{width:22px;height:22px;border-radius:7px}.dx_r .n small{font-weight:400;color:#9A958F;font-size:12px}'
    + '.dx_box{display:inline-flex;align-items:center;height:26px;padding:0 8px;border:1px solid #ECEAE6;border-radius:8px;background:#fff;font-weight:500}'
    + '.dx_a{font-style:normal;font-size:12px;display:inline-block;width:30px;text-align:left;margin-left:8px}.dx_a.g{color:#16A34A}.dx_a.r{color:#DC2626}.dx_a.z{color:#B5B0AA}'
    + '.dx_tag{display:inline-block;font-style:normal;font-size:11.5px;line-height:1.35;padding:2px 8px;border-radius:6px}.dx_tag.so{background:#FDEEE7;color:#D2562D}.dx_tag.se{background:#E7F5EC;color:#1E8A4C}.dx_tag.po{background:#E9F0FE;color:#3B6FE0}'
    + '.dx_ok{font-style:normal;display:inline-flex;align-items:center;gap:5px;font-size:12px;color:#16873F}'
    + '.dx_tc .dx_r{grid-template-columns:28px minmax(0,1fr) 104px 100px 96px 88px 116px 136px}'
    + '.dx_tp .dx_r{grid-template-columns:28px minmax(0,1fr) 116px 136px 100px 124px 88px 136px}'
    + '.dx_tt .dx_r{grid-template-columns:minmax(0,1fr) 108px 86px 82px 66px;height:50px}.dx_tt .dx_r.h{height:32px}.dx_tt{border-top:1px solid #F1EFEC}'
    /* workspace split (same 575 | rest as Panoramica) */
    + '.dx_s{flex:1;min-height:0;display:grid;grid-template-columns:575px minmax(0,1fr);border-top:1px solid #ECEAE6}.dx_s>div{min-width:0;min-height:0;display:flex;flex-direction:column}.dx_s>div+div{border-left:1px solid #ECEAE6}'
    + '.dx_sw{transition:opacity .2s ease}.dx_sw.sw{opacity:0}'
    + '.dx_th{flex:none;padding:14px 14px 12px;display:flex;justify-content:space-between;align-items:flex-start;gap:10px;white-space:nowrap}.dt_host .dx_th b{display:block;font-size:14px;font-weight:600;letter-spacing:-.005em;line-height:1.3}.dx_th small{display:block;font-size:11px;color:#9A958F;margin-top:3px}'
    + '.dx_st{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;color:#16873F;background:#E9F6EE;border-radius:999px;padding:3px 9px 3px 8px}.dx_st:before{content:"";width:6px;height:6px;border-radius:50%;background:#2EBD6B}'
    /* funnel */
    + '.dx_fn{padding:4px 14px 0;display:flex;flex-direction:column;gap:13px}'
    + '.dx_f{display:grid;grid-template-columns:116px minmax(0,1fr) 64px 54px;gap:12px;align-items:center;font-size:12.5px;white-space:nowrap}.dx_f>span:first-child{color:#55524D}'
    + '.dx_fb{display:block;height:34px;border-radius:8px;background:#F6F4F1;overflow:hidden}.dx_fb i{display:block;height:100%;width:0;border-radius:8px;transition:width 1.1s ' + E1 + '}'
    + '.dx_f:nth-child(1) .dx_fb i{background:#DDD8D0}.dx_f:nth-child(2) .dx_fb i{background:#B9B3A9}.dx_f:nth-child(3) .dx_fb i{background:#55524D}.dx_f:nth-child(4) .dx_fb i{background:#B0573A}'
    + '.dt_host .dx_f>b{text-align:right;font-size:14px}.dx_f em{font-style:normal;font-size:11px;color:#8A8580;background:#F3F1EE;border-radius:999px;padding:2px 0;text-align:center}.dx_f em.z{background:none}'
    + '.dx_s .dt_note{margin:18px 14px 0;align-self:flex-start}'
    /* ad preview */
    + '.dx_ad{flex:1;min-height:0;display:flex;gap:14px;padding:0 14px 14px}.dx_ad.v{flex-direction:column;gap:10px}'
    + '.dx_ad .pv{min-height:0;border:1px solid #F1EFEC;border-radius:10px;background:#FBFAF8;display:grid;place-items:center;padding:10px;overflow:hidden}.dx_ad.h .pv{width:146px;flex:none;padding:8px}.dx_ad.v .pv{flex:1}'
    + '.dx_fa{display:flex;flex-direction:column;flex:1;min-width:0;justify-content:center}.dx_fa span{display:flex;justify-content:space-between;align-items:center;gap:8px;height:36px;border-top:1px solid #F1EFEC;font-size:12.5px;white-space:nowrap}.dx_fa span:first-child{border-top:0}.dx_fa small{color:#8A8580}'
    + '.dx_ad.v .dx_fa{flex:none;display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,1fr);column-gap:20px}.dx_ad.v .dx_fa span:nth-child(2){border-top:0}'
    + '.dx_reel{height:100%;aspect-ratio:9/16;max-width:100%;border-radius:9px;background:#ccc center/cover no-repeat;position:relative;overflow:hidden}.dx_reel:before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.6))}'
    + '.dx_reel i{position:absolute;left:50%;top:44%;width:32px;height:32px;margin:-16px 0 0 -16px;border-radius:50%;background:rgba(255,255,255,.92);display:grid;place-items:center}.dx_reel i:after{content:"";border-left:9px solid #171717;border-top:6px solid transparent;border-bottom:6px solid transparent;margin-left:3px}'
    + '.dx_reel span{position:absolute;left:9px;right:9px;bottom:9px;color:#fff;font-size:10.5px;font-weight:500;line-height:1.25;white-space:normal}'
    + '.dx_sad{width:100%;background:#fff;border:1px solid #ECEAE6;border-radius:9px;padding:12px 14px;text-align:left;white-space:normal}.dx_sad small{display:block;font-size:10.5px;color:#55524D}.dt_host .dx_sad b{display:block;font-size:14px;color:#1A0DAB;font-weight:500;margin:4px 0}.dx_sad p{font-size:11px;color:#55524D;line-height:1.4}'
    + '.dx_car{display:flex;gap:8px;width:100%;height:100%}.dx_car span{flex:1;background:#fff center/cover no-repeat;border:1px solid #ECEAE6;border-radius:8px;display:grid;place-items:center;min-height:0}.dx_car svg{width:78%;height:auto;max-height:80%}'
    /* portali · tagli + planimetria */
    + '.dx_pt{width:46px;height:36px;border-radius:7px;background:#FBFAF8;border:1px solid #F1EFEC;display:grid;place-items:center;flex:none}.dx_pt svg{width:36px;height:26px;display:block}.dx_r.on .dx_pt{background:#fff;border-color:#DDD8D0}'
    + '.dx_r .n .dx_nm{display:flex;flex-direction:column;line-height:1.3;min-width:0}'
    + '.dx_pl{flex:1;min-height:0;padding:14px;display:flex;flex-direction:column}.dx_pl .dt_stage{flex:1;min-height:110px;height:auto}'
    + '.dx_ph{flex:none;display:flex;justify-content:space-between;align-items:flex-end;gap:10px;margin-top:12px;white-space:nowrap}.dt_host .dx_ph b{display:block;font-size:15px;letter-spacing:-.01em}.dx_ph small{display:block;font-size:11px;color:#9A958F;margin-top:2px}'
    + '.dx_bs{flex:none;margin-top:10px;padding-top:8px;border-top:1px solid #F1EFEC}.dx_b3{display:grid;grid-template-columns:18px 98px minmax(0,1fr) 26px;gap:8px;align-items:center;height:24px;font-size:12px;white-space:nowrap;transition:opacity .3s}.dx_b3 .dt_ic{width:16px;height:16px;border-radius:5px}'
    + '.dx_b3 .dx_fb,.dx_lf .dx_fb{height:6px;border-radius:3px;background:#F1EFEC}.dx_b3 .dx_fb i,.dx_lf .dx_fb i{border-radius:3px;background:#CFC9C0}.dx_b3.best .dx_fb i,.dx_col.best .dx_lf .dx_fb i{background:#171717}.dx_b3 b{text-align:right}.dx_b3.dim{opacity:.35}'
    /* landing · three versions */
    + '.dx_cols{flex:1;min-height:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}'
    + '.dx_col{display:flex;flex-direction:column;min-width:0;min-height:0;padding:0 16px 14px;transition:background-color .35s}.dx_col+.dx_col{border-left:1px solid #ECEAE6}.dx_col.dt_hv{background:#FDFCFB}.dx_col.on{background:#FAF9F7}'
    + '.dx_ch{display:flex;align-items:center;gap:10px;height:60px;flex:none;white-space:nowrap}.dt_host .dx_ch b{display:block;font-size:14px;font-weight:600;line-height:1.25}.dx_ch small{display:block;font-size:11px;color:#9A958F;margin-top:2px}'
    + '.dx_lv{width:26px;height:26px;border-radius:8px;background:#F3F1EE;display:grid;place-items:center;font-size:12px;font-weight:700;color:#55524D;flex:none;transition:background-color .3s,color .3s}.dx_col.on .dx_lv{background:#171717;color:#fff}'
    + '.dx_win{margin-left:auto;text-decoration:none;font-size:11px;font-weight:600;color:#B0573A;background:#FDF1EC;border-radius:999px;padding:3px 9px;opacity:0;transform:translateY(3px) scale(.96);transition:opacity .4s ease,transform .5s ' + E1 + '}.dx_col.win .dx_win{opacity:1;transform:none}'
    + '.dx_bw{flex:1;min-height:0;display:flex;flex-direction:column;border-radius:10px;overflow:hidden;background:#fff;box-shadow:0 0 0 1px #ECEAE6,0 10px 24px -20px rgba(23,23,23,.35);transition:box-shadow .35s,transform .45s ' + E1 + '}.dx_col.on .dx_bw{box-shadow:0 0 0 1.5px #171717,0 18px 34px -22px rgba(23,23,23,.55);transform:translateY(-2px)}'
    + '.dx_bw .br{height:24px;flex:none;display:flex;align-items:center;gap:4px;padding:0 9px;border-bottom:1px solid #F1EFEC;background:#FBFAF8}.dx_bw .br i{width:6px;height:6px;border-radius:50%;background:#DDD9D3}.dx_bw .br span{margin-left:8px;flex:1;height:14px;border-radius:5px;background:#F1EFEC;font-size:9px;line-height:14px;color:#9A958F;padding:0 7px;overflow:hidden;white-space:nowrap}'
    + '.dx_m{flex:1;min-height:0;display:flex;flex-direction:column;font-size:10px;line-height:1.3}'
    + '.dx_m.a .he{flex:1;position:relative;background:#DDD center/cover no-repeat;display:flex;flex-direction:column;justify-content:flex-end;padding:12px;min-height:0}.dx_m.a .he:before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(0,0,0,.6))}'
    + '.dt_host .dx_m.a .he b{position:relative;color:#fff;font-size:15px;line-height:1.15;letter-spacing:-.01em}.dx_m.a .he em{position:relative;align-self:flex-start;margin-top:8px;font-style:normal;font-size:9.5px;font-weight:600;color:#171717;background:#fff;border-radius:999px;padding:4px 10px}'
    + '.dx_m.a .ln{flex:none;padding:10px 12px 11px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.dx_m.a .ln span{font-size:9px;color:#8A8580;white-space:nowrap}.dt_host .dx_m.a .ln b{display:block;font-size:11.5px;color:#171717}'
    + '.dx_m.b{padding:11px 12px 12px;gap:8px}.dt_host .dx_m.b>b{font-size:12.5px;letter-spacing:-.01em}.dx_m.b>small{font-size:9.5px;color:#8A8580;margin-top:-6px}'
    + '.dx_m.b .g{flex:1;min-height:0;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:7px}.dx_m.b .g span{border:1px solid #F1EFEC;border-radius:8px;background:#FBFAF8;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;min-height:0;padding:5px;font-size:8.5px;color:#8A8580;white-space:nowrap;overflow:hidden}.dx_m.b .g svg{height:50%;width:auto;max-width:84%;flex:none}.dt_host .dx_m.b .g b{font-size:9.5px;color:#171717}'
    + '.dx_m.c{flex-direction:row}.dx_m.c figure{width:42%;background:#DDD center/cover no-repeat}.dx_m.c>div{flex:1;min-width:0;padding:12px 11px;display:flex;flex-direction:column;gap:7px}.dt_host .dx_m.c b.t{font-size:12.5px;letter-spacing:-.01em}.dx_m.c small{font-size:9px;color:#8A8580;margin-top:-5px}'
    + '.dx_m.c .d{display:flex;gap:4px}.dx_m.c .d i{flex:1;height:26px;border:1px solid #ECEAE6;border-radius:7px;display:grid;place-items:center;font-style:normal;font-size:9px;color:#55524D;line-height:1.05;text-align:center}.dx_m.c .d i.on{background:#171717;border-color:#171717;color:#fff}'
    + '.dx_m.c .f{height:26px;border:1px solid #ECEAE6;border-radius:7px;display:flex;align-items:center;padding:0 9px;font-size:9px;color:#B5B0AA}.dx_m.c .k{margin-top:auto;height:28px;border-radius:999px;background:#B0573A;color:#fff;font-size:9.5px;font-weight:600;display:grid;place-items:center}.dx_m.c .s{font-size:8.5px;color:#9A958F;text-align:center}'
    + '.dx_ml{flex:none;margin-top:12px}.dx_ml span{display:flex;align-items:center;justify-content:space-between;height:34px;border-top:1px solid #F1EFEC;font-size:12.5px;color:#8A8580;white-space:nowrap}.dx_ml span:first-child{border-top:0}.dt_host .dx_ml b{font-size:14px;color:#171717;font-weight:600}.dt_host .dx_ml .cv b{font-size:19px;letter-spacing:-.02em}'
    + '.dx_lf{flex:none;display:flex;align-items:center;gap:10px;height:26px;margin-top:2px}.dx_lf .dx_fb{flex:1}'
    /* v9.1 · the pointer reads before it clicks: quiet hover states + tooltip that stays inside its card */
    + '.dx_k>div{transition:background-color .3s}.dx_k>div.dt_hv{background:#FAF9F7}.dx_f>span:first-child,.dx_f em{transition:color .25s,background-color .25s}.dx_f.dt_hv>span:first-child{color:#171717}.dx_f.dt_hv em{background:#FDF1EC;color:#B0573A}'
    + '.dx_ml .cv{transition:color .25s}.dx_ml .cv.dt_hv{color:#171717}.dx_box{transition:border-color .25s,box-shadow .25s}.dx_r.dt_hv .dx_box,.dx_r.on .dx_box{border-color:#DDD8D0}'
    + '.dx_cmp{flex:1;min-height:0;padding:4px 14px 14px;display:flex;flex-direction:column;justify-content:center;gap:4px}.dx_cmp .dx_b3{grid-template-columns:22px minmax(0,150px) minmax(0,1fr) 46px;height:44px;font-size:12.5px;gap:10px}.dx_cmp .dx_b3 .dt_ic{width:20px;height:20px;border-radius:6px}.dx_cmp .dx_b3 .dx_fb{height:8px;border-radius:4px}.dx_cmp .dx_b3 .dx_fb i{border-radius:4px}.dx_cmp .dx_b3+.dx_b3{border-top:1px solid #F1EFEC}.dx_cmp .dx_b3>span:nth-child(2){overflow:hidden;text-overflow:ellipsis}'
    + '.d3_tip{transition:transform .3s ' + E1 + '}.d3_tip.dt_flip{transform:translateX(calc(-100% - 58px))}';

  var st = document.createElement('style'); st.id = 'lpdashtour'; st.textContent = css; document.head.appendChild(st);

  /* ---------- floor plans: real scale (1 m = 15 units, same scale for every layout), distinct layouts ---------- */
  function fr(x, y, w, h, r) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r || 0) + '"/>'; }
  function fc(x, y, r) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '"/>'; }
  function bed(x, y, w, h) { return fr(x, y, w, h, 2) + fr(x + 3, y + 3, w - 6, Math.round(h * .22), 2); }
  var PS = 15;
  /* metres: o outer, t terrace/balcony, w inner walls, g open passages, d doors [hinge→end, swing, exterior], n windows, f furniture, l labels [x, y, room, m², vertical] */
  var PLM = {
    bi: { s: 11,
      o: [[0, 0], [8.6, 0], [8.6, 7.2], [0, 7.2]], t: [[0, 7.2], [5.5, 7.2], [5.5, 8.6], [0, 8.6]],
      w: [[5, 0, 5, 7.2], [5, 4.4, 8.6, 4.4]], g: [],
      d: [[5, 2.6, 5, 3.4, 1], [5, 5.3, 5, 6.1, 1], [3.6, 0, 4.5, 0, 1, 1]],
      n: [[0.6, 0, 3.0, 0], [6.0, 0, 8.0, 0], [8.6, 0.8, 8.6, 3.4], [0, 1.2, 0, 4.6], [0.6, 7.2, 4.6, 7.2], [6.0, 7.2, 7.8, 7.2]],
      f: [['r', 4.25, 0.4, 0.6, 2.0, 1], ['c', 2.2, 2.2, 0.55], ['r', 0.8, 5.5, 2.6, 0.85, 4], ['r', 1.5, 4.3, 1.2, 0.6, 3], ['b', 6.0, 0.5, 1.7, 2.1], ['r', 8.0, 2.9, 0.45, 1.3, 1], ['r', 6.9, 4.6, 1.55, 0.75, 4], ['c', 5.6, 6.7, 0.25], ['r', 5.25, 4.6, 0.8, 0.45, 2]],
      l: [[2.5, 3.5, 'so', 36], [6.85, 3.6, 'ca', 16], [7.2, 6.2, 'ba', 10], [2.75, 8.0, 'bl', 8]] },
    tri: { s: 23,
      o: [[0, 0], [11, 0], [11, 8], [0, 8]], t: [[-1.8, 0], [0, 0], [0, 7.8], [-1.8, 7.8]],
      w: [[6, 0, 6, 8], [0, 5, 6, 5], [4.4, 5, 4.4, 8], [6, 3.6, 11, 3.6], [6, 4.6, 11, 4.6], [8.6, 4.6, 8.6, 8]],
      g: [[0.4, 5, 3.8, 5], [6, 3.7, 6, 4.5]],
      d: [[7.0, 3.6, 7.8, 3.6, -1], [6.3, 4.6, 7.1, 4.6, 1], [9.0, 4.6, 9.8, 4.6, 1], [4.6, 5, 5.4, 5, 1], [11, 3.7, 11, 4.5, -1, 1]],
      n: [[1, 0, 5, 0], [7, 0, 10, 0], [11, 0.8, 11, 2.8], [0, 0.8, 0, 4.4], [0.6, 8, 3.8, 8], [6.6, 8, 8.2, 8], [9.4, 8, 10.4, 8]],
      f: [['r', 1.2, 0.4, 3.0, 0.9, 4], ['r', 2.1, 1.8, 1.2, 0.6, 3], ['c', 4.9, 3.0, 0.6], ['r', 0.15, 5.3, 0.6, 2.5, 1], ['c', 2.5, 6.5, 0.55], ['b', 7.6, 0.5, 1.8, 2.1], ['r', 10.3, 0.6, 0.5, 2.4, 1], ['b', 6.4, 5.5, 1.0, 2.0], ['r', 7.6, 7.3, 0.9, 0.5, 1], ['r', 9.0, 6.9, 1.7, 0.8, 4], ['c', 10.4, 5.2, 0.25], ['r', 9.0, 4.85, 0.8, 0.45, 2], ['r', 4.6, 7.0, 1.2, 0.8, 1], ['c', 5.6, 5.8, 0.25]],
      l: [[3.1, 3.0, 'so', 30], [2.4, 5.85, 'cu', 13], [5.2, 6.6, 'ba', 5], [8.5, 3.0, 'ca', 18], [8.0, 6.25, 'ca', 9], [9.8, 5.9, 'ba', 8], [-0.9, 3.9, 'te', 14, 1]] },
    quad: { s: 37,
      o: [[0, 0], [12.4, 0], [12.4, 9], [0, 9]], t: [[0, 9], [6.6, 9], [6.6, 11.4], [0, 11.4]],
      w: [[6.6, 0, 6.6, 4.0], [6.6, 5.2, 6.6, 9], [0, 5.4, 5.0, 5.4], [3.4, 5.4, 3.4, 9], [5.0, 5.4, 5.0, 9], [6.6, 4.0, 12.4, 4.0], [6.6, 5.2, 12.4, 5.2], [10.2, 0, 10.2, 4.0], [10.0, 5.2, 10.0, 9]],
      g: [],
      d: [[2.0, 5.4, 2.8, 5.4, 1], [5.0, 6.2, 5.0, 7.0, -1], [7.2, 4.0, 8.0, 4.0, -1], [10.6, 4.0, 11.3, 4.0, -1], [6.6, 6.0, 6.6, 6.8, 1], [10.6, 5.2, 11.3, 5.2, 1], [12.4, 4.2, 12.4, 5.0, -1, 1]],
      n: [[0.8, 0, 5.8, 0], [7.4, 0, 9.6, 0], [10.8, 0, 11.8, 0], [0, 1, 0, 4.6], [0, 6.2, 0, 8.2], [0.8, 9, 5.8, 9], [7.2, 9, 9.4, 9], [10.6, 9, 11.8, 9], [12.4, 6, 12.4, 8.2]],
      f: [['r', 0.9, 1.0, 2.6, 0.8, 2], ['r', 4.2, 0.8, 1.6, 0.9, 3], ['r', 1.0, 3.7, 3.0, 0.9, 4], ['r', 4.5, 3.4, 0.9, 0.9, 4], ['b', 0.6, 6.85, 1.6, 2.0], ['r', 3.6, 8.0, 1.2, 0.8, 1], ['c', 4.2, 6.0, 0.25], ['b', 7.6, 0.5, 1.8, 2.1], ['r', 9.6, 0.5, 0.45, 2.2, 1], ['r', 10.4, 0.25, 0.75, 1.7, 4], ['c', 11.9, 3.3, 0.25], ['r', 11.55, 0.3, 0.6, 0.8, 2], ['b', 7.4, 6.75, 1.6, 2.0], ['r', 10.3, 7.9, 1.6, 0.6, 1], ['c', 11.1, 7.45, 0.3]],
      l: [[3.3, 2.6, 'so', 36], [1.7, 6.1, 'ca', 12], [4.2, 7.3, 'ba', 6], [8.45, 3.3, 'ca', 14], [11.4, 2.75, 'ba', 9], [8.3, 5.85, 'ca', 13], [11.2, 6.6, 'st', 9], [3.3, 10.45, 'te', 16]] },
    att: { s: 53,
      o: [[0, 0], [13.4, 0], [13.4, 9.7], [0, 9.7]], t: [[0, -1.8], [15.4, -1.8], [15.4, 9.7], [13.4, 9.7], [13.4, 0], [0, 0]],
      w: [[7.4, 0, 7.4, 9.7], [0, 6.0, 7.4, 6.0], [4.0, 6.0, 4.0, 9.7], [5.6, 6.0, 5.6, 9.7], [7.4, 4.6, 13.4, 4.6], [10.6, 4.6, 10.6, 9.7], [10.6, 7.0, 13.4, 7.0]],
      g: [[0.4, 6, 3.6, 6], [5.7, 6.0, 7.3, 6.0]],
      d: [[7.4, 2.0, 7.4, 2.8, 1], [7.4, 7.6, 7.4, 8.4, 1], [5.6, 7.0, 5.6, 7.8, -1], [11.2, 4.6, 11.9, 4.6, 1], [10.6, 7.8, 10.6, 8.6, 1], [5.9, 9.7, 6.8, 9.7, -1, 1]],
      n: [[0.8, 0, 6.6, 0], [8.2, 0, 12.6, 0], [13.4, 0.8, 13.4, 3.8], [13.4, 7.6, 13.4, 9.0], [0, 1, 0, 5], [0.6, 9.7, 3.4, 9.7], [7.9, 9.7, 10.0, 9.7]],
      f: [['r', 1.2, 3.9, 3.4, 0.95, 4], ['r', 2.2, 2.7, 1.4, 0.7, 3], ['r', 5.3, 3.5, 0.9, 0.9, 3], ['r', 1.8, 0.6, 2.4, 1.0, 3], ['r', 1.0, 7.5, 2.4, 0.85, 2], ['b', 9.4, 0.6, 1.9, 2.2], ['r', 12.6, 0.6, 0.5, 2.6, 1], ['b', 8.0, 5.4, 1.7, 2.1], ['r', 4.2, 8.7, 1.2, 0.8, 1], ['c', 4.8, 6.6, 0.25], ['r', 12.55, 4.8, 0.7, 1.7, 4], ['r', 10.8, 4.8, 0.8, 0.45, 2], ['c', 11.2, 6.5, 0.25], ['r', 11.0, 8.9, 2.2, 0.55, 1], ['r', 2.2, -1.5, 1.6, 0.6, 3], ['r', 4.2, -1.5, 1.6, 0.6, 3], ['c', 14.4, 1.2, 0.35], ['c', 14.4, 8.6, 0.35], ['c', 12.4, -0.9, 0.35]],
      l: [[5.0, 1.5, 'so', 44], [2.0, 6.85, 'cu', 15], [4.8, 7.65, 'ba', 6], [8.55, 3.9, 'ca', 28], [11.65, 5.95, 'ba', 7], [9.05, 8.75, 'ca', 16], [12.0, 8.0, 'gu', 8], [8.5, -0.75, 'te', 48]] }
  };
  var PLN = {};
  (function () {
    for (var k in PLM) {
      var p = PLM[k], xs = [], ys = [];
      p.o.concat(p.t).forEach(function (q) { xs.push(q[0]); ys.push(q[1]); });
      var mx = Math.min.apply(0, xs), my = Math.min.apply(0, ys), W = (Math.max.apply(0, xs) - mx) * PS, H = (Math.max.apply(0, ys) - my) * PS;
      var ox = (320 - W) / 2 - mx * PS, oy = (206 - H) / 2 - my * PS + 2;
      var X = function (v) { return Math.round((v * PS + ox) * 10) / 10; }, Y = function (v) { return Math.round((v * PS + oy) * 10) / 10; }, L = function (v) { return Math.round(v * PS * 10) / 10; };
      var pt = function (q) { return [X(q[0]), Y(q[1])]; }, sg = function (a) { return [X(a[0]), Y(a[1]), X(a[2]), Y(a[3])].concat(a.slice(4)); };
      PLN[k] = { s: p.s, o: p.o.map(pt), t: p.t.map(pt), w: p.w.map(sg), g: p.g.map(sg), d: p.d.map(sg), n: p.n.map(sg),
        f: p.f.map(function (a) { return a[0] === 'c' ? fc(X(a[1]), Y(a[2]), L(a[3])) : a[0] === 'b' ? bed(X(a[1]), Y(a[2]), L(a[3]), L(a[4])) : fr(X(a[1]), Y(a[2]), L(a[3]), L(a[4]), a[5]); }).join(''),
        l: p.l.map(function (a) { return [X(a[0]), Y(a[1]), a[2], a[3], a[4]]; }) };
    }
  })();
  var ROOM = { so: t('Soggiorno', 'Living'), cu: t('Cucina', 'Kitchen'), ca: t('Camera', 'Bedroom'), ba: t('Bagno', 'Bath'), te: t('Terrazzo', 'Terrace'), bl: t('Balcone', 'Balcony'), st: t('Studio', 'Study'), gu: t('Cabina', 'Closet')};
  var sd = 1;
  function rnd() { sd = (sd * 9301 + 49297) % 233280; return sd / 233280 - .5; }
  function r1(n) { return Math.round(n * 10) / 10; }
  function wob(a, b, c, d, ov) {
    var dx = c - a, dy = d - b, len = Math.sqrt(dx * dx + dy * dy) || 1, ux = dx / len, uy = dy / len;
    var x1 = a - ux * ov + rnd() * .8, y1 = b - uy * ov + rnd() * .8, x2 = c + ux * ov + rnd() * .8, y2 = d + uy * ov + rnd() * .8;
    var k = rnd() * 2.2, mx = (x1 + x2) / 2 - uy * k, my = (y1 + y2) / 2 + ux * k;
    return 'M' + r1(x1) + ' ' + r1(y1) + 'Q' + r1(mx) + ' ' + r1(my) + ' ' + r1(x2) + ' ' + r1(y2);
  }
  function poly(p) { return 'M' + p.map(function (q) { return q[0] + ' ' + q[1]; }).join('L') + 'Z'; }
  function ln(a) { return 'M' + a[0] + ' ' + a[1] + 'L' + a[2] + ' ' + a[3]; }
  function plan(k, big) {
    var p = PLN[k], ow = big ? 5 : 10, iw = big ? 3 : 6.5, n = 0, K = .5523, h;
    sd = p.s;
    function wall(a, w, ov) { return '<path class="w" pathLength="1" stroke-width="' + w + '" style="animation-delay:' + ((n++) * 45) + 'ms" d="' + wob(a[0], a[1], a[2], a[3], ov) + '"/>'; }
    h = '<svg class="dt_plan' + (big ? ' big' : '') + '" viewBox="0 0 320 210" preserveAspectRatio="xMidYMid meet" aria-hidden="true">'
      + '<path class="te" d="' + poly(p.t) + '" fill="url(#dtHatch)" stroke="#CFCAC2" stroke-width="' + (big ? 1.2 : 3) + '" stroke-linejoin="round"/>'
      + '<path d="' + poly(p.o) + '" fill="#fff"/>';
    if (big) h += '<g class="fu" fill="none" stroke="#D6D2CB" stroke-width="1">' + p.f + '</g>';
    h += '<g fill="none" stroke="#2A2826" stroke-linecap="round">';
    p.o.forEach(function (a, i) { var b = p.o[(i + 1) % p.o.length]; h += wall([a[0], a[1], b[0], b[1]], ow, big ? 2 : 0); });
    p.w.forEach(function (a) { h += wall(a, iw, 0); });
    h += '</g><g class="dd" fill="none">';
    p.g.forEach(function (a) { h += '<path d="' + ln(a) + '" stroke="#fff" stroke-width="' + (iw + 3.5) + '"/>'; });
    p.d.forEach(function (d) {
      var hx = d[0], hy = d[1], bx = d[2], by = d[3], len = Math.abs(bx - hx) + Math.abs(by - hy), px, py;
      if (hy === by) { px = hx; py = hy + d[4] * len; } else { px = hx + d[4] * len; py = hy; }
      h += '<path d="' + ln(d) + '" stroke="#fff" stroke-width="' + ((d[5] ? ow : iw) + 3.5) + '"/>';
      if (big) h += '<path d="M' + hx + ' ' + hy + 'L' + px + ' ' + py + '" stroke="#2A2826" stroke-width="1.3" stroke-linecap="round"/>'
        + '<path d="M' + px + ' ' + py + 'C' + r1(px + (bx - hx) * K) + ' ' + r1(py + (by - hy) * K) + ' ' + r1(bx + (px - hx) * K) + ' ' + r1(by + (py - hy) * K) + ' ' + bx + ' ' + by + '" stroke="#A39F98" stroke-width=".9"/>';
    });
    if (big) p.n.forEach(function (a) { h += '<path d="' + ln(a) + '" stroke="#fff" stroke-width="3"/><path d="' + ln(a) + '" stroke="#2A2826" stroke-width=".8"/>'; });
    h += '</g>';
    if (big) h += '<g class="lb">' + p.l.map(function (a) { var tr = a[4] ? ' transform="rotate(-90 ' + a[0] + ' ' + a[1] + ')"' : ''; return '<text x="' + a[0] + '" y="' + a[1] + '"' + tr + '>' + ROOM[a[2]] + '<tspan class="m" x="' + a[0] + '" dy="9.5">' + a[3] + ' m²</tspan></text>'; }).join('') + '</g>'
      + '<g class="sc"><path d="M10 203H40M10 200.5V205.5M25 201.5V204.5M40 200.5V205.5" stroke="#8A8884" stroke-width=".9" fill="none"/><text x="44" y="205.5">2 m</text></g>';
    return h + '</svg>';
  }

  /* ---------- data: one project, "Residenze Verdi" (Parma). Last month, consistent with the Panoramica (42 visits, 6 from portals) ---------- */
  var PO = [['immo', 'Immobiliare.it', 4830, 54, 4], ['idea', 'idealista', 2690, 22, 2], ['casa', 'Casa.it', 700, 9, 0]], PF = -1;
  var TG = [
    { k: 'bi', n: t('Bilocale', 'One-bed'), m: 62, p: 219000, r: t('2 locali', '1 bedroom'), s: t('2 locali · 1 bagno · balcone 8 m²', '1 bedroom · 1 bath · 8 m² balcony'), u: 6, v: 2240, c: [14, 7, 0], vi: 1 },
    { k: 'tri', n: t('Trilocale', 'Two-bed'), m: 88, p: 289000, r: t('3 locali', '2 bedrooms'), s: t('3 locali · 2 bagni · terrazzo 14 m²', '2 bedrooms · 2 baths · 14 m² terrace'), u: 8, v: 3150, c: [22, 8, 4], vi: 3 },
    { k: 'quad', n: t('Quadrilocale', 'Three-bed'), m: 112, p: 352000, r: t('4 locali', '3 bedrooms'), s: t('4 locali · 2 bagni · terrazzo 16 m²', '3 bedrooms · 2 baths · 16 m² terrace'), u: 5, v: 1780, c: [13, 0, 5], vi: 1 },
    { k: 'att', n: t('Attico', 'Penthouse'), m: 130, p: 445000, r: t('con terrazzo', 'with terrace'), s: t('3 locali · 2 bagni · terrazzo 48 m²', '2 bedrooms · 2 baths · 48 m² terrace'), u: 2, v: 1050, c: [5, 7, 0], vi: 1 }
  ];
  function sum(a) { return a.reduce(function (x, y) { return x + y; }, 0); }
  function best(c) { var b = 0; c.forEach(function (v, i) { if (v > c[b]) b = i; }); return b; }
  function from(p) { return t('da ', 'from ') + eur(p); }
  function visits(n) { return n + ' ' + (n === 1 ? t('visita', 'visit') : t('visite', 'visits')); }

  function tgLine(g) { var j = PF > -1 ? PF : best(g.c), n = PF > -1 ? g.c[PF] : sum(g.c); return lg(PO[j][0]) + n + ' ' + t('contatti', 'leads') + (PF > -1 ? ' · ' + t('su ', 'on ') + PO[PF][1] : ' · ' + visits(g.vi)); }
  function hd(title, sub, right) { return '<div class="dt_hd dt_in"><div><b>' + title + '</b><small>' + sub + '</small></div>' + (right || '') + '</div>'; }

  /* ---------- v9 · shared building blocks ---------- */
  function sico(k) { var s = sideEl(k), v = s && s.querySelector('svg'); return v ? v.outerHTML : ''; }
  function dec(v, n) { v = v.toFixed(n == null ? 1 : n); return EN ? v : v.replace('.', ','); }
  function pct(a, b, n) { return dec(a / b * 100, n) + '%'; }
  function spark(a) {
    var mn = Math.min.apply(null, a), mx = Math.max.apply(null, a), n = a.length, d = '', x = 0, y = 0;
    for (var i = 0; i < n; i++) { x = (i / (n - 1) * 62 + 3).toFixed(1); y = (26 - (a[i] - mn) / ((mx - mn) || 1) * 22).toFixed(1); d += (i ? 'L' : 'M') + x + ' ' + y; }
    return '<svg class="dx_sp" viewBox="0 0 68 30" fill="none" aria-hidden="true"><path pathLength="1" d="' + d + '"/><circle cx="' + x + '" cy="' + y + '" r="2.4"/></svg>';
  }
  function kpi(label, val, dl, cls, sp) { return '<div><small>' + label + '</small><p>' + val + (dl ? '<em class="dx_dl ' + cls + '">' + dl + '</em>' : '') + '</p>' + (sp ? spark(sp) : '') + '</div>'; }
  function shell(k, title, insight, kpis, body) {
    return '<div class="dx"><div class="dx_p dx_p1"><div class="dx_ov"><span class="dx_ovl">' + sico(k) + title + '<em>·</em><b>' + insight + '</b></span><span class="dx_ovr">' + t('Ultimo mese · variazione su maggio', 'Last month · change vs May') + '</span></div><div class="dx_k">' + kpis.join('') + '</div></div><div class="dx_p dx_p2">' + body + '</div></div>';
  }
  function arw(d) { return d ? '<i class="dx_a ' + (d[2] ? 'g' : 'r') + '">' + (d[0] === 'u' ? '↗' : '↘') + ' ' + d[1] + '</i>' : '<i class="dx_a z">–</i>'; }
  function th(title, sub, right) { return '<div class="dx_th"><div><b>' + title + '</b><small>' + sub + '</small></div>' + (right || '') + '</div>'; }

  /* ---------- Campagne (Meta 21 visite a 62 €, Google 12 a 74 €: come in Panoramica) ---------- */
  var CP = [
    { ic: 'ig', n: t('Reel dal cantiere', 'Site Reel'), ty: 'Reel', tg: 'so', pl: 'Meta', sp: 648, le: 96, vi: 12, cv: 54, d: ['d', 6, 1], im: 48200, cl: 2410 },
    { ic: 'fb', n: t('Carosello planimetrie', 'Floor-plan carousel'), ty: t('Carosello', 'Carousel'), tg: 'so', pl: 'Meta', sp: 657, le: 71, vi: 9, cv: 73, d: ['u', 3, 0], im: 39600, cl: 1580 },
    { ic: 'g', n: t('Ricerca “nuove costruzioni”', 'Search “new builds”'), ty: t('Ricerca', 'Search'), tg: 'se', pl: 'Google', sp: 544, le: 58, vi: 8, cv: 68, d: ['d', 2, 1], im: 9850, cl: 870 },
    { ic: 'g', n: 'Performance Max', ty: 'PMax', tg: 'se', pl: 'Google', sp: 344, le: 41, vi: 4, cv: 86, d: null, im: 21300, cl: 640 }
  ];
  function cpFun(i) {
    var c = i < 0 ? { n: t('Tutte le campagne', 'All campaigns'), pl: 'Meta + Google', im: sum(CP.map(function (x) { return x.im; })), cl: sum(CP.map(function (x) { return x.cl; })), le: sum(CP.map(function (x) { return x.le; })), vi: sum(CP.map(function (x) { return x.vi; })), cv: 66 } : CP[i], w2 = Math.min(72, Math.round(38 + c.cl / c.im * 330)), w3 = Math.round(w2 * (.42 + c.le / c.cl * 2.6)), w4 = Math.round(w3 * (.28 + c.vi / c.le * 1.5));
    var S = [[t('Impression', 'Impressions'), c.im, 100, ''], [t('Clic', 'Clicks'), c.cl, w2, pct(c.cl, c.im)], [t('Contatti', 'Leads'), c.le, w3, pct(c.le, c.cl)], [t('Visite in ufficio', 'Office visits'), c.vi, w4, pct(c.vi, c.le)]];
    return th(t('Dal clic alla visita', 'From click to visit'), c.n + ' · ' + c.pl)
      + '<div class="dx_fn">' + S.map(function (s, j) { return '<div class="dx_f dt_in" style="--i:' + j + '"><span>' + s[0] + '</span><span class="dx_fb"><i class="dx_w" data-w="' + s[2] + '"></i></span><b>' + fmt(s[1]) + '</b><em' + (s[3] ? '>' + s[3] : ' class="z">') + '</em></div>'; }).join('') + '</div>'
      + '<div class="dt_note dt_in" style="--i:4"><i>' + CHK + '</i>' + t('1 visita ogni ', '1 visit every ') + Math.round(c.le / c.vi) + t(' contatti · ', ' leads · ') + eur(c.cv) + t(' per visita', ' per visit') + '</div>';
  }
  function cpCmp() {
    var mx = Math.max.apply(null, CP.map(function (c) { return c.cv; })), b = 0; CP.forEach(function (c, j) { if (c.cv < CP[b].cv) b = j; });
    return th(t('Costo per visita', 'Cost per visit'), t('Per campagna · più basso è meglio', 'By campaign · lower is better'))
      + '<div class="dx_cmp">' + CP.map(function (c, j) { return '<div class="dx_b3 dt_in' + (j === b ? ' best' : '') + '" style="--i:' + (j + 1) + '">' + ICO[c.ic] + '<span>' + c.n + '</span><span class="dx_fb"><i class="dx_w" data-w="' + Math.round(c.cv / mx * 100) + '"></i></span><b>' + eur(c.cv) + '</b></div>'; }).join('') + '</div>';
  }
  function cpAd(i) {
    var c = CP[i], P, F, lay = 'v', ctr = ['CTR', pct(c.cl, c.im)], cpc = ['CPC', dec(c.sp / c.cl, 2) + ' €'];
    if (i === 0) { lay = 'h'; P = '<div class="dx_reel" style="background-image:url(' + IMG + 'site-hd-ext-render.webp)"><i></i><span>' + t('Il cantiere a 3 mesi dalla consegna', 'The site, 3 months from handover') + '</span></div>'; F = [[t('Formato', 'Format'), 'Reel 9:16'], [t('Durata', 'Length'), '0:21'], ctr, cpc, [t('Frequenza', 'Frequency'), dec(1.8)]]; }
    else if (i === 1) { P = '<div class="dx_car">' + ['bi', 'tri', 'att'].map(function (k) { return '<span>' + plan(k) + '</span>'; }).join('') + '</div>'; F = [[t('Formato', 'Format'), t('4 schede', '4 cards')], [t('Frequenza', 'Frequency'), dec(2.1)], ctr, cpc]; }
    else if (i === 2) { P = '<div class="dx_sad"><small>' + t('Sponsorizzato', 'Sponsored') + ' · residenzeverdi.it</small><b>' + t('Nuove costruzioni a Parma · Classe A', 'New builds in Parma · Class A') + '</b><p>' + t('Bilocali, trilocali e attici da 219.000 €. Prenota la visita in ufficio vendite.', 'One-beds to penthouses from €219,000. Book a sales-office visit.') + '</p></div>'; F = [[t('Parola chiave', 'Keyword'), t('nuove costruzioni parma', 'new builds parma')], [t('Posizione media', 'Avg. position'), dec(1.4)], ctr, cpc]; }
    else { P = '<div class="dx_car"><span style="background-image:url(' + IMG + 'site-hd-int-render.webp)"></span><span style="background-image:url(' + IMG + 'site-hd-ext-render.webp)"></span></div>'; F = [[t('Formato', 'Format'), t('12 asset', '12 assets')], [t('Reti', 'Networks'), 'Search · YouTube'], ctr, cpc]; }
    return th(t('Annuncio', 'Ad'), c.pl + ' · ' + c.ty, '<span class="dx_st">' + t('Attiva', 'Active') + '</span>')
      + '<div class="dx_ad ' + lay + '"><div class="pv dt_in" style="--i:1">' + P + '</div><div class="dx_fa dt_in" style="--i:2">' + F.map(function (f) { return '<span><small>' + f[0] + '</small><b>' + f[1] + '</b></span>'; }).join('') + '</div></div>';
  }
  function vCamp() {
    var body = '<div class="dx_t dx_tc dt_in" style="--i:2"><div class="dx_r h"><span>#</span><span>' + t('Campagna', 'Campaign') + '</span><span>' + t('Tipo', 'Type') + '</span><span class="num">' + t('Spesa', 'Spend') + '</span><span class="num">' + t('Contatti', 'Leads') + '</span><span class="num">' + t('Visite', 'Visits') + '</span><span class="num">' + t('Contatto → visita', 'Lead → visit') + '</span><span class="num">€/' + t('visita', 'visit') + '</span></div>'
      + CP.map(function (c, i) { return '<div class="dx_r" data-c="' + i + '"><span class="i">' + (i + 1) + '</span><span class="n">' + ICO[c.ic] + c.n + '</span><span><i class="dx_tag ' + c.tg + '">' + c.ty + '</i></span><span class="num">' + eur(c.sp) + '</span><span class="num">' + c.le + '</span><span class="num">' + c.vi + '</span><span class="num">' + pct(c.vi, c.le) + '</span><span class="num"><span class="dx_box">' + eur(c.cv) + '</span>' + arw(c.d) + '</span></div>'; }).join('') + '</div>'
      + '<div class="dx_s"><div class="dx_sw dx_cfun">' + cpFun(-1) + '</div><div class="dx_sw dx_cad">' + cpCmp() + '</div></div>';
    return shell('Campagne', t('Campagne', 'Campaigns'), t('4 campagne attive su Meta e Google', '4 campaigns live on Meta and Google'), [
      kpi(t('Spesa', 'Spend'), num(2193, ' €'), t('−3%', '−3%'), 'n', [24, 23, 25, 22, 23, 21, 22, 21]),
      kpi(t('Contatti', 'Leads'), num(266, '', 80), '+18%', 'g', [12, 14, 13, 17, 18, 21, 22, 26]),
      kpi(t('Visite in ufficio', 'Office visits'), num(33, '', 160), '+5', 'g', [18, 19, 22, 21, 25, 26, 28, 33]),
      kpi(t('Costo per visita', 'Cost per visit'), num(66, ' €', 240), t('−4 €', '−€4'), 'g', [84, 80, 79, 75, 72, 71, 70, 66])
    ], body);
  }

  /* ---------- Portali (6 visite, 84 € per visita: come in Panoramica) ---------- */
  var PA = [4, 3, 2];
  function plDet(i) {
    var g = TG[i], b = best(g.c), mx = g.c[b];
    return '<div class="dt_stage dt_in" style="--i:0"><em class="l">' + t('Planimetria', 'Floor plan') + '</em><em class="r">' + g.u + ' ' + t('disponibili', 'available') + '</em>' + plan(g.k, 1) + '</div>'
      + '<div class="dx_ph dt_in" style="--i:1"><div><b>' + g.n + ' · ' + g.m + ' m²</b><small>' + g.s + '</small></div><b>' + from(g.p) + '</b></div>'
      + '<div class="dx_bs dt_in" style="--i:2">' + PO.map(function (p, j) { return '<div class="dx_b3' + (j === b ? ' best' : '') + (PF > -1 && j !== PF ? ' dim' : '') + '">' + lg(p[0]) + '<span>' + p[1] + '</span><span class="dx_fb"><i class="dx_w" data-w="' + Math.max(g.c[j] ? 6 : 0, Math.round(g.c[j] / mx * 100)) + '"></i></span><b>' + g.c[j] + '</b></div>'; }).join('') + '</div>';
  }
  function vPort() {
    var Vw = sum(PO.map(function (p) { return p[2]; })), L = sum(PO.map(function (p) { return p[3]; })), Z = sum(PO.map(function (p) { return p[4]; }));
    var body = '<div class="dx_t dx_tp dt_in" style="--i:2"><div class="dx_r h"><span>#</span><span>' + t('Portale', 'Portal') + '</span><span class="num">' + t('Annunci live', 'Live ads') + '</span><span class="num">' + t('Visualizzazioni', 'Views') + '</span><span class="num">' + t('Contatti', 'Leads') + '</span><span class="num">' + t('Vista → contatto', 'View → lead') + '</span><span class="num">' + t('Visite', 'Visits') + '</span><span class="num">' + t('Prezzo', 'Price') + '</span></div>'
      + PO.map(function (p, j) { return '<div class="dx_r" data-p="' + p[0] + '"><span class="i">' + (j + 1) + '</span><span class="n">' + lg(p[0]) + p[1] + '</span><span class="num">' + PA[j] + '</span><span class="num">' + fmt(p[2]) + '</span><span class="num">' + p[3] + '</span><span class="num">' + pct(p[3], p[2]) + '</span><span class="num">' + p[4] + '</span><span class="num"><i class="dx_ok">' + CHK + t('Allineato', 'Aligned') + '</i></span></div>'; }).join('')
      + '<div class="dx_r tot"><span></span><span>' + t('Totale', 'Total') + '</span><span class="num">' + sum(PA) + '</span><span class="num">' + fmt(Vw) + '</span><span class="num">' + L + '</span><span class="num">' + pct(L, Vw) + '</span><span class="num">' + Z + '</span><span></span></div></div>'
      + '<div class="dx_s"><div>' + th(t('Tagli in vendita', 'Layouts on sale'), '<span class="dx_tsub">Residenze Verdi · ' + t('contatti da tutti i portali', 'leads from all portals') + '</span>', '<span class="dx_st">' + t('Live su 3 portali', 'Live on 3 portals') + '</span>')
      + '<div class="dx_t dx_tt"><div class="dx_r h"><span>' + t('Taglio', 'Layout') + '</span><span class="num">' + t('Prezzo', 'Price') + '</span><span class="num">' + t('Disponibili', 'Available') + '</span><span class="num">' + t('Contatti', 'Leads') + '</span><span class="num">' + t('Visite', 'Visits') + '</span></div>'
      + TG.map(function (g, i) { return '<div class="dx_r' + (i ? '' : ' on') + '" data-t="' + i + '"><span class="n"><span class="dx_pt">' + plan(g.k) + '</span><span class="dx_nm">' + g.n + '<small>' + g.m + ' m² · ' + g.r + '</small></span></span><span class="num">' + from(g.p) + '</span><span class="num">' + g.u + '</span><span class="num lc">' + sum(g.c) + '</span><span class="num">' + g.vi + '</span></div>'; }).join('') + '</div></div>'
      + '<div class="dx_sw dx_pl">' + plDet(0) + '</div></div>';
    return shell('Portali', t('Portali', 'Portals'), t('3 portali, 9 annunci live, stesso prezzo ovunque', '3 portals, 9 live ads, same price everywhere'), [
      kpi(t('Visualizzazioni', 'Views'), num(Vw), '+9%', 'g', [61, 64, 63, 68, 71, 74, 78, 82]),
      kpi(t('Contatti', 'Leads'), num(L, '', 80), '+6', 'g', [70, 72, 69, 75, 77, 79, 81, 85]),
      kpi(t('Visite in ufficio', 'Office visits'), num(Z, '', 160), '−1', 'r', [5, 6, 6, 7, 6, 7, 7, 6]),
      kpi(t('Costo per visita', 'Cost per visit'), num(84, ' €', 240), t('+2 €', '+€2'), 'r', [80, 79, 81, 80, 82, 81, 82, 84])
    ], body);
  }

  /* ---------- Landing · tre versioni, stesso traffico ---------- */
  var LP = [
    { n: t('Render in apertura', 'Render first'), s: t('Il progetto prima di tutto', 'The project comes first'), u: '/a', v: 1240, c: 26, r: 2.1, w: 36 },
    { n: t('Planimetrie in evidenza', 'Floor plans first'), s: t('Tagli e prezzi subito visibili', 'Layouts and prices up front'), u: '/b', v: 1310, c: 44, r: 3.4, w: 59 },
    { n: t('Visita in due clic', 'Visit in two clicks'), s: t('Calendario già nella prima schermata', 'Calendar on the first screen'), u: '/c', v: 1270, c: 74, r: 5.8, w: 100 }
  ];
  function lpMock(i) {
    if (i === 0) return '<div class="dx_m a"><div class="he" style="background-image:url(' + IMG + 'site-hd-ext-render.webp)"><b>' + t('Vivere nel verde,<br>a dieci minuti dal centro.', 'Live in the green,<br>ten minutes from the centre.') + '</b><em>' + t('Scopri il progetto', 'Discover the project') + '</em></div><div class="ln"><span><b>21</b>' + t('unità', 'units') + '</span><span><b>' + t('Classe A', 'Class A') + '</b>' + t('energetica', 'energy rating') + '</span><span><b>2027</b>' + t('consegna', 'handover') + '</span></div></div>';
    if (i === 1) return '<div class="dx_m b"><b>' + t('Scegli la tua planimetria', 'Choose your floor plan') + '</b><small>' + t('4 tagli disponibili, da 219.000 €', '4 layouts available, from €219,000') + '</small><div class="g">' + TG.map(function (g) { return '<span>' + plan(g.k) + '<b>' + g.n + '</b>' + from(g.p) + '</span>'; }).join('') + '</div></div>';
    return '<div class="dx_m c"><figure style="background-image:url(' + IMG + 'site-hd-int-render.webp)"></figure><div><b class="t">' + t('Prenota la visita', 'Book a visit') + '</b><small>' + t('Ufficio vendite · 30 min', 'Sales office · 30 min') + '</small><span class="d"><i>' + t('Ven', 'Fri') + '<br>24</i><i class="on">' + t('Sab', 'Sat') + '<br>25</i><i>' + t('Lun', 'Mon') + '<br>27</i></span><span class="d"><i>10:30</i><i class="on">11:30</i><i>15:00</i></span><span class="f">' + t('Nome e cognome', 'Full name') + '</span><span class="f">' + t('Telefono', 'Phone') + '</span><span class="k">' + t('Conferma la visita', 'Confirm the visit') + '</span><span class="s">' + t('Gratuita, senza impegno', 'Free, no commitment') + '</span></div></div>';
  }
  function vLand() {
    var Vt = sum(LP.map(function (v) { return v.v; })), Ct = sum(LP.map(function (v) { return v.c; }));
    var body = '<div class="dx_cols">' + LP.map(function (v, i) {
      var up = i ? '+' + Math.round((v.r / LP[0].r - 1) * 100) + '% ' + t('rispetto alla A', 'vs A') : t('Riferimento', 'Baseline');
      return '<div class="dx_col dt_in' + (i === 2 ? ' best' : '') + '" data-l="' + i + '" style="--i:' + (i + 2) + '"><div class="dx_ch"><span class="dx_lv">' + 'ABC'.charAt(i) + '</span><div><b>' + v.n + '</b><small>' + v.s + '</small></div>' + (i === 2 ? '<u class="dx_win">' + t('Vincitrice', 'Winner') + '</u>' : '') + '</div>'
        + '<div class="dx_bw"><div class="br"><i></i><i></i><i></i><span>residenzeverdi.it' + v.u + '</span></div>' + lpMock(i) + '</div>'
        + '<div class="dx_ml"><span>' + t('Visitatori', 'Visitors') + num(v.v, '', i * 80) + '</span><span>' + t('Contatti', 'Leads') + num(v.c, '', i * 80) + '</span><span class="cv">' + t('Conversione', 'Conversion') + '<b>' + dec(v.r) + '%</b></span></div>'
        + '<div class="dx_lf"><span class="dx_fb"><i class="dx_w" data-w="' + v.w + '"></i></span><em class="dx_dl ' + (i ? 'g' : 'n') + '">' + up + '</em></div></div>';
    }).join('') + '</div>';
    return shell('Landing', 'Landing page', t('3 versioni online, traffico diviso in parti uguali', '3 versions live, traffic split evenly'), [
      kpi(t('Visitatori', 'Visitors'), num(Vt), '+12%', 'g', [28, 30, 29, 32, 33, 35, 36, 38]),
      kpi(t('Contatti', 'Leads'), num(Ct, '', 80), '+31%', 'g', [72, 78, 85, 96, 104, 118, 131, 144]),
      kpi(t('Conversione media', 'Average conversion'), '<b>' + pct(Ct, Vt) + '</b>', t('+0,6 pt', '+0.6 pt'), 'g', [29, 30, 31, 33, 34, 35, 37, 38]),
      kpi(t('Versione migliore', 'Best version'), '<b>C</b>', dec(LP[2].r) + '% ' + t('di conversione', 'conversion'), 'g')
    ], body);
  }
  var V = { Campagne: vCamp, Portali: vPort, Landing: vLand };

  /* ---------- DOM ---------- */
  var defs = document.createElement('div'); defs.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  defs.innerHTML = '<svg width="0" height="0" aria-hidden="true"><defs><pattern id="dtHatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#FBFAF8"/><line x1="0" y1="0" x2="0" y2="6" stroke="#DDD8D0" stroke-width="1.2"/></pattern></defs></svg>';
  app.appendChild(defs);
  var host = document.createElement('div'); host.className = 'dt_host'; main.appendChild(host);
  var ins = document.createElement('div'); ins.className = 'dt_ins';
  ins.innerHTML = '<i><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#B0573A" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7l11 11M17 9v9H8"/></svg></i><span><b>Meta</b> · <em class="dt_ty"></em></span>';
  var INS_T = t('−6 € per visita su maggio', '−€6 per visit vs May');
  app.appendChild(ins);
  var pb = document.createElement('div'); pb.className = 'dt_pb'; pb.innerHTML = '<i></i><i></i><i></i><i></i>'; app.appendChild(pb);
  var cur = document.createElement('div'); cur.className = 'dt_cur'; cur.innerHTML = '<svg width="30" height="30" viewBox="0 0 24 24"><path d="M4 2l15 10.5-6.6 1.3 3.9 7.4-3 1.6-3.9-7.5L4 20z" fill="#171717" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>'; app.appendChild(cur);
  var IT = ['Panoramica', 'Campagne', 'Portali', 'Landing', 'Visite', 'Lead', 'Calendario', 'Budget', 'Azioni'];
  var side = [].slice.call(app.querySelectorAll('.v2_side > span')).filter(function (s) { return !/search/.test(s.className); });
  side.forEach(function (s, i) { s.__k = IT[i]; });
  function sideEl(k) { for (var i = 0; i < side.length; i++) if (side[i].__k === k) return side[i]; return null; }
  function small() { app.classList.toggle('dt_sm', app.clientWidth < 560); }
  small(); window.addEventListener('resize', small);

  /* ---------- streamed text (Attio-style: the UI writes itself) ---------- */
  var TY = [];
  function type(el, txt, ms, delay, done) {
    var i = 0, id = setTimeout(function f() { if (!el.isConnected) return; i++; el.textContent = txt.slice(0, i); if (i < txt.length) { id = setTimeout(f, ms + (txt.charAt(i - 1) === ' ' ? 18 : 0)); TY.push(id); } else if (done) done(); }, delay || 0);
    TY.push(id);
  }

  /* ---------- pointer engine ---------- */
  var P = { x: 0, y: 0 }, anim = null, hv = null, hn = 0;
  var HOV = '.dx_k>div,.dx_f,.dx_ml .cv,.dx_r[data-c],.dx_r[data-p],.dx_r[data-t],.dx_col,.dt_chip,.dt_ev,.dt_x,.d3_tbl .d3_r,.v2_side>span.lp-v2_side_span,.d3_seg button';
  function sc() { var w = app.offsetWidth; return w ? (app.getBoundingClientRect().width / w) || 1 : 1; }
  function hover(off) {
    var el = null;
    if (!off) { try { var a = app.getBoundingClientRect(), s = sc(); el = document.elementFromPoint(a.left + P.x * s, a.top + P.y * s); el = el && el.closest ? el.closest(HOV) : null; if (el && (!app.contains(el) || /d3_h\b|\boff\b/.test(el.className))) el = null; } catch (e) { el = null; } }
    if (el !== hv) { if (hv) hv.classList.remove('dt_hv'); if (el) el.classList.add('dt_hv'); hv = el; }
  }
  function place(x, y) { P.x = x; P.y = y; cur.style.transform = 'translate3d(' + (x - 4) + 'px,' + (y - 3) + 'px,0)'; if (!(hn++ % 3)) hover(); }
  function glide(x, y, ms, done) {
    if (anim) cancelAnimationFrame(anim);
    var x0 = P.x, y0 = P.y, t0 = null, dx = x - x0, dy = y - y0, cx = x0 + dx * .5 - dy * .12, cy = y0 + dy * .5 + dx * .08;
    function f(ts) {
      if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / ms), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      place((1 - e) * (1 - e) * x0 + 2 * (1 - e) * e * cx + e * e * x, (1 - e) * (1 - e) * y0 + 2 * (1 - e) * e * cy + e * e * y);
      if (k < 1) anim = requestAnimationFrame(f); else { anim = null; hover(); done && done(); }
    }
    anim = requestAnimationFrame(f);
  }
  function pt(el, fx, fy) { var a = app.getBoundingClientRect(), b = el.getBoundingClientRect(), s = sc(); return [(b.left - a.left + b.width * (fx == null ? .3 : fx)) / s, (b.top - a.top + b.height * (fy == null ? .5 : fy)) / s]; }
  function tap(after) { cur.classList.add('dn'); var r = document.createElement('span'); r.className = 'dt_rip'; r.style.left = P.x + 'px'; r.style.top = P.y + 'px'; app.appendChild(r); setTimeout(function () { cur.classList.remove('dn'); if (r.parentNode) r.parentNode.removeChild(r); }, 650); after && after(); }

  var Q = [], qi = 0, timer = null, running = false, LOOP = 0;
  function wait(ms) { LOOP += ms; Q.push(function (n) { timer = setTimeout(n, ms); }); }
  function go(getEl, fx, fy, ms) { LOOP += ms || 850; Q.push(function (n) { var el = getEl(); if (!el || !el.getBoundingClientRect().width) return n(); var p = pt(el, fx, fy); glide(p[0], p[1], ms || 850, n); }); }
  function click(fn) { LOOP += 420; Q.push(function (n) { tap(fn); timer = setTimeout(n, 420); }); }
  function act(fn) { Q.push(function (n) { fn(); n(); }); }
  function q(s) { return function () { return host.querySelector(s) || app.querySelector(s); }; }
  function all(s) { return [].slice.call(host.querySelectorAll(s)); }

  /* ---------- view logic ---------- */
  var swT = null;
  function fill(root) { countUp(root); setTimeout(function () { [].forEach.call(root.querySelectorAll('.dt_trk i,.dx_w'), function (b) { b.style.width = b.getAttribute('data-w') + '%'; }); }, 80); }
  function show(k) {
    side.forEach(function (s) { s.classList.toggle('on', s.__k === k); });
    var pano = k === 'Panoramica'; app.classList.toggle('dt_notpano', !pano);
    ins.classList.remove('on'); clearTimeout(swT);
    if (pano) { host.classList.remove('is-on'); return; }
    PF = -1;
    function put() { host.innerHTML = V[k](); void host.offsetWidth; host.classList.add('is-on'); fill(host); }
    if (host.classList.contains('is-on')) { host.classList.add('sw'); swT = setTimeout(function () { host.innerHTML = V[k](); void host.offsetWidth; host.classList.remove('sw'); fill(host); }, 260); } else put();
  }
  function nav(k) { go(function () { return sideEl(k); }, .32, .5, 920); click(function () { show(k); }); wait(350); }
  function swap(el, html) { if (!el) return; el.classList.add('sw'); setTimeout(function () { el.innerHTML = html; el.classList.remove('sw'); fill(el); }, 200); }
  function say(txt) { var b = host.querySelector('.dx_ovl b'); if (!b || b.textContent === txt) return; b.textContent = ''; type(b, txt, 16, 120); }
  function selTg(i, quiet) {
    all('.dx_r[data-t]').forEach(function (r) { r.classList.toggle('on', +r.getAttribute('data-t') === i); });
    swap(host.querySelector('.dx_pl'), plDet(i));
    if (!quiet) { var g = TG[i], n = PF > -1 ? g.c[PF] : sum(g.c), art = EN ? 'the ' : (/^A/.test(g.n) ? 'l’' : 'il '), x = (PF > -1 ? t('Su ', 'On ') + PO[PF][1] + ' ' + art : art) + g.n + t(' porta ', ' brings ') + n + t(' contatti', ' leads'); say(x.charAt(0).toUpperCase() + x.slice(1)); }
  }
  function selPortal(j) {
    PF = j;
    all('.dx_r[data-p]').forEach(function (r, k) { r.classList.toggle('on', k === j); r.classList.toggle('dim', j > -1 && k !== j); });
    all('.dx_r[data-t]').forEach(function (r) { var g = TG[+r.getAttribute('data-t')], n = j < 0 ? sum(g.c) : g.c[j], c = r.querySelector('.lc'); if (c) c.textContent = n; r.classList.toggle('dim', !n); });
    var sub = host.querySelector('.dx_tsub'); if (sub) sub.textContent = 'Residenze Verdi · ' + (j < 0 ? t('contatti da tutti i portali', 'leads from all portals') : t('contatti da ', 'leads from ') + PO[j][1]);
    var on = host.querySelector('.dx_r[data-t].on'), i = on ? +on.getAttribute('data-t') : 0;
    if (j > -1 && !TG[i].c[j]) for (var x = 0; x < TG.length; x++) if (TG[x].c[j] > 0) { i = x; break; }
    selTg(i, 1);
    if (j > -1) say(PO[j][1] + t(' porta ', ' brings ') + PO[j][4] + t(' visite su ', ' of ') + sum(PO.map(function (p) { return p[4]; })) + t('', ' visits'));
  }
  function portal(k, hold) { go(q('.dx_r[data-p="' + k + '"]'), .835, .5, 900); click(function () { selPortal(['immo', 'idea', 'casa'].indexOf(k)); }); wait(hold); }
  function tg(i, hold) { go(q('.dx_r[data-t="' + i + '"]'), .86, .5, 820); click(function () { selTg(i); }); wait(hold); }
  function selLp(i, win) {
    all('.dx_col').forEach(function (c) { var on = +c.getAttribute('data-l') === i; c.classList.toggle('on', on); if (on && win) c.classList.add('win'); });
    if (win) say(t('La versione C converte quasi 3 volte la A', 'Version C converts almost 3x version A'));
  }
  function lp(i, hold, win) { go(q('.dx_col[data-l="' + i + '"]'), .5, .36, 780); click(function () { selLp(i, win); }); wait(hold); }
  function selCp(i) {
    all('.dx_r[data-c]').forEach(function (r) { r.classList.toggle('on', +r.getAttribute('data-c') === i); });
    swap(host.querySelector('.dx_cfun'), cpFun(i)); swap(host.querySelector('.dx_cad'), cpAd(i));
    say(CP[i].n + t(' porta visite a ', ' brings visits at ') + eur(CP[i].cv));
  }
  function cp(i, hold) { go(q('.dx_r[data-c="' + i + '"]'), .93, .5, 820); click(function () { selCp(i); }); wait(hold); }
  function look(getEl, fx, fy, hold, ms) { go(getEl, fx, fy, ms || 820); wait(hold); }
  function pointAt(fx, hold) {
    LOOP += 700 + hold;
    Q.push(function (n) {
      var h = app.querySelector('.d3_hit'); if (!h || !h.getBoundingClientRect().width) return n();
      var a = app.getBoundingClientRect(), b = h.getBoundingClientRect(), s = sc(), x = b.left + b.width * fx, y = b.top + b.height * .45;
      glide((x - a.left) / s, (y - a.top) / s, 700, function () { try { h.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true })); } catch (e) {} timer = setTimeout(n, hold); });
    });
  }
  function insight(on) {
    if (!on) { ins.classList.remove('on'); return; }
    var sg = app.querySelector('.d3_seg'), bs = app.querySelectorAll('.d3_seg button'); if (!sg || !bs.length) return;
    var a = app.getBoundingClientRect(), c = sg.parentNode.getBoundingClientRect(), b = bs[bs.length - 1].getBoundingClientRect(), g = sg.getBoundingClientRect(), s = sc();
    var left = (c.right - a.left) / s - ins.offsetWidth - 14;
    if (left < (b.right - a.left) / s + 14) return;
    var em = ins.querySelector('.dt_ty'); em.textContent = INS_T; ins.style.left = Math.round(left) + 'px'; ins.style.top = Math.round((g.top - a.top + g.height / 2) / s - ins.offsetHeight / 2) + 'px'; em.textContent = ''; ins.classList.add('on'); type(em, INS_T, 26, 160);
  }
  function seg(i) { go(function () { return app.querySelectorAll('.d3_seg button')[i]; }, .5, .5, 560); click(function () { var b = app.querySelectorAll('.d3_seg button')[i]; b && b.click(); }); wait(450); }
  function sweep(D, from, to) {
    LOOP += D + 560;
    Q.push(function (n) {
      var h = app.querySelector('.d3_hit'); if (!h || !h.getBoundingClientRect().width) return n();
      var a = app.getBoundingClientRect(), b = h.getBoundingClientRect(), y = b.top + b.height * .45, s = sc();
      glide((b.left - a.left + b.width * from) / s, (y - a.top) / s, 560, function () {
        var t0 = null;
        function f(ts) {
          if (!running) return; if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / D), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2, x = b.left + b.width * (from + (to - from) * e);
          place((x - a.left) / s, (y - a.top) / s);
          try { h.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true })); } catch (er) {}
          if (k < 1) anim = requestAnimationFrame(f); else { anim = null; n(); }
        }
        anim = requestAnimationFrame(f);
      });
    });
  }
  function leave() { act(function () { var h = app.querySelector('.d3_hit'); if (h) try { h.dispatchEvent(new PointerEvent('pointerleave', { bubbles: false })); } catch (e) {} }); }
  function row(i) { return function () { return app.querySelectorAll('.d3_tbl .d3_r:not(.d3_h)')[i]; }; }

  /* ---------- script: every move answers the question the last screen raised ----------
     1 Panoramica · do visits grow?            follow the curve Jan → Mar → Jun; June's tooltip puts Meta first
     2 Campagne   · which campaign does that?   read the cost per visit, click the cheapest one, follow its funnel down to the office visit
     3 Portali    · and the portals?            click the portal with most visits, then the layout with most leads, look at its plan
     4 Landing    · where does the click land?  compare A, B, C; stop on the winner's conversion rate */
  act(function () { show('Panoramica'); });
  wait(400);
  pointAt(.02, 1100); pointAt(.4, 1100); pointAt(.98, 1900); leave();
  nav('Campagne'); wait(700);
  look(function () { return host.querySelectorAll('.dx_k>div')[3]; }, .3, .62, 1100);
  cp(0, 900);
  look(function () { return host.querySelectorAll('.dx_f')[3].querySelector('b'); }, .6, .7, 1900, 900);
  nav('Portali'); wait(700);
  look(function () { return host.querySelectorAll('.dx_k>div')[2]; }, .22, .62, 900);
  portal('immo', 1300); tg(1, 900);
  look(q('.dx_pl .dt_stage'), .52, .55, 1700, 900);
  nav('Landing'); wait(900);
  lp(0, 900); lp(1, 900); lp(2, 700, 1);
  look(function () { return host.querySelector('.dx_col[data-l="2"] .dx_ml .cv b'); }, .2, .7, 2400, 900);
  nav('Panoramica'); wait(300);
  app.__dtLoop = LOOP;

  function step() { if (!running) return; var f = Q[qi]; qi = (qi + 1) % Q.length; f(step); }
  function start() { if (running) return; running = true; cur.classList.add('is-on'); if (!P.x) { place(app.offsetWidth * .5, app.offsetHeight * .55); } step(); }
  function stop() { running = false; clearTimeout(timer); TY.forEach(clearTimeout); TY = []; if (anim) cancelAnimationFrame(anim); anim = null; hover(1); }

  app.__dt = { show: show, stop: stop, start: start, cp: selCp, portal: selPortal, tg: selTg, lp: selLp };
  /* keep the chart tooltip inside its card: whenever the chart moves it, flip it to the left of the line if it would overflow */
  (function () {
    var done = 0;
    function fix(tp) { var pl = tp.parentNode, l = parseFloat(tp.style.left); if (isNaN(l)) l = tp.offsetLeft; if (pl) tp.classList.toggle('dt_flip', l + tp.offsetWidth > pl.offsetWidth + 14); }
    function bind() {
      var tp = app.querySelector('.d3_tip'); if (!tp || done) return !!done; done = 1;
      if ('MutationObserver' in window) new MutationObserver(function () { fix(tp); }).observe(tp, { attributes: true, attributeFilter: ['style'] });
      fix(tp); return true;
    }
    if (!bind()) { var n = 0, iv = setInterval(function () { if (bind() || ++n > 40) clearInterval(iv); }, 250); }
  })();
  var pre = new Image(); pre.src = IMG + 'render-photo.webp';
  if (window.matchMedia && (matchMedia('(prefers-reduced-motion: reduce)').matches || matchMedia('(max-width:767px)').matches)) { show('Panoramica'); if (matchMedia('(max-width:767px)').matches) { var pin = function () { var h = app.querySelector('.d3_hit'); if (!h) return; var b = h.getBoundingClientRect(); if (!b.width) return; try { h.dispatchEvent(new PointerEvent('pointermove', { clientX: b.left + b.width * .21, clientY: b.top + b.height * .45, bubbles: true })); } catch (e) {} }; setTimeout(pin, 400); setTimeout(pin, 1600); window.addEventListener('resize', function () { setTimeout(pin, 350); }); } return; }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) start(); else stop(); }); }, { threshold: .35 }).observe(app);
  } else start();
})();
