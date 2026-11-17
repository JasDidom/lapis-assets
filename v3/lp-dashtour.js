/* Lapis · Home dashboard: self-running showcase v8.5.1 (adds Landing step) (v7 · calm pass: one sweep, seamless view changes, simple visit card) — click → contatto → visita in ufficio vendite */
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
    + '.v2_app.dt_notpano .v2_bar{visibility:hidden}'
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
    /* calendario */
    + '.dt_kp{display:grid;grid-template-columns:repeat(3,1fr);height:64px;margin-bottom:12px;overflow:hidden}.dt_kp>span{padding:10px 16px;display:flex;flex-direction:column;justify-content:center;transition:background-color .35s;white-space:nowrap}.dt_kp>span+span{border-left:1px solid #F0EEEB}.dt_kp>span.hl{background:#F4FBF6}'
    + '.dt_kp small{font-size:11.5px;color:#8A8884}.dt_kp p{display:flex;align-items:baseline;gap:7px}.dt_kp p b{font-size:21px;letter-spacing:-.02em;line-height:1.2}.dt_kp p i{font-style:normal;font-size:12px;color:#8A8884}.dt_kp p em{font-style:normal;font-size:11px;font-weight:600;color:#1E8A4C;background:#EAF7EF;border-radius:999px;padding:1px 7px}'
    + '.dt_cal{position:relative;display:grid;grid-template-columns:46px repeat(5,minmax(0,1fr));overflow:hidden}'
    + '.dt_cal .h{height:34px;padding:0 10px;display:flex;align-items:center;gap:6px;font-size:11.5px;color:#73726E;font-weight:500;white-space:nowrap}.dt_cal .h+.h{border-left:1px solid #F3F1EE}.dt_cal .h b{font-size:12.5px;color:#171717}.dt_cal .h.td b{background:#B0573A;color:#fff;border-radius:6px;padding:1px 6px}.dt_cal .h.td{color:#B0573A}'
    + '.dt_cal .t{height:78px;border-top:1px solid #F3F1EE;font-size:10.5px;color:#B5B2AC;padding:6px 0 0 10px}.dt_cal .c{position:relative;height:78px;border-top:1px solid #F3F1EE;border-left:1px solid #F3F1EE}.dt_cal .c.td{background:#FEFCFA}'
    + '.dt_now{position:absolute;left:-1px;right:0;top:60px;height:1.5px;background:#B0573A;z-index:2}.dt_now:before{content:"";position:absolute;left:-3px;top:-2.75px;width:7px;height:7px;border-radius:50%;background:#B0573A}'
    + '.dt_ev{position:absolute;left:5px;right:5px;top:6px;height:52px;border-radius:8px;padding:0 7px 0 10px;display:flex;gap:7px;align-items:center;background:#EAF7EF;box-shadow:inset 3px 0 0 #2EBD6B;font-size:11.5px;line-height:1.25;z-index:1;transition:opacity .45s ease,filter .45s ease,box-shadow .25s,transform .25s;animation:dtpop .5s ' + E1 + ' backwards;animation-delay:calc(var(--i,0)*40ms + 280ms)}'
    + '.dt_ev.call{background:#EEF3FE;box-shadow:inset 3px 0 0 #4C7BF3;height:44px}.dt_ev.tbc{background:#FFF9EE;box-shadow:none;border:1px dashed #E3B45C;height:48px;padding-left:8px}'
    + '.dt_ev.dt_hv{transform:translateY(-1px);box-shadow:inset 3px 0 0 #2EBD6B,0 8px 16px -10px rgba(23,23,23,.35)}.dt_ev.off{opacity:.16;filter:blur(1.2px)}.dt_ev.sel{transform:none;box-shadow:0 0 0 2px #171717,0 12px 24px -14px rgba(23,23,23,.5)}'
    + '.dt_av{width:22px;height:22px;border-radius:50%;background:#fff;display:grid;place-items:center;font-size:8.5px;font-weight:700;color:#55524D;flex:none;box-shadow:0 0 0 1px rgba(23,23,23,.06)}'
    + '.dt_ev p{flex:1;min-width:0}.dt_ev p b{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dt_ev p small{display:block;font-size:10.5px;color:#55524D;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
    + '.dt_ev>.dt_ic{width:16px;height:16px;border-radius:5px}.dt_ev>.dt_ic svg{width:10px;height:10px}'
    /* popover */
    + '.dt_pop{position:absolute;z-index:5;left:0;top:0;width:304px;background:#fff;border-radius:14px;box-shadow:0 30px 60px -28px rgba(23,23,23,.55),0 8px 20px -14px rgba(23,23,23,.25),0 0 0 1px #ECEAE6;padding:14px 16px 16px;opacity:0;visibility:hidden;transform:translateY(8px) scale(.97);transform-origin:100% 20%;transition:opacity .25s,transform .3s,visibility 0s .3s;pointer-events:none}'
    + '.dt_pop.on{opacity:1;visibility:visible;transform:none;transition:opacity .3s,transform .45s ' + E1 + '}'
    + '.dt_pop>*{opacity:0;transform:translateY(5px);transition:opacity .2s,transform .2s}.dt_pop.on>*{opacity:1;transform:none;transition:opacity .4s ease,transform .5s ' + E1 + ';transition-delay:calc(var(--i,0)*55ms + 90ms)}'
    + '.dt_pt{display:flex;justify-content:space-between;align-items:center;gap:8px}.dt_pt h6{font-size:14.5px;font-weight:600;letter-spacing:-.01em;color:#171717;white-space:nowrap;line-height:1.3}'
    + '.dt_x{width:22px;height:22px;border-radius:7px;display:grid;place-items:center;color:#8A8884;flex:none;transition:background-color .2s,color .2s}.dt_x.dt_hv{background:#F1EFEC;color:#171717}'
    + '.dt_pw{display:flex;justify-content:space-between;align-items:center;margin-top:3px;font-size:11.5px;color:#8A8884;white-space:nowrap}.dt_ok{display:inline-flex;align-items:center;gap:4px;font-size:10.5px;font-weight:600;color:#1E8A4C;background:#EAF7EF;border-radius:999px;padding:2px 8px 2px 6px}.dt_ok svg{width:10px;height:10px}'
    + '.dt_pp{display:flex;align-items:center;gap:10px;margin-top:12px;padding:9px 10px;border-radius:10px;background:#F7F6F4}.dt_pp .avs{display:flex;flex:none}.dt_pp .avs span{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-size:10px;font-weight:700;border:2px solid #F7F6F4}.dt_pp .avs span+span{margin-left:-9px}.dt_pp p{font-size:11.5px;line-height:1.35;color:#73726E;white-space:nowrap}.dt_pp p b{color:#171717}'
    + '.dt_pi{display:flex;align-items:center;gap:10px;margin-top:8px;padding:8px 10px;border:1px solid #F0EEEB;border-radius:10px}.dt_pi .dt_th{width:48px;height:40px}.dt_pi .dt_th svg{width:40px;height:27px}.dt_pi p{font-size:11px;color:#8A8884;line-height:1.35;white-space:nowrap}.dt_pi p b{display:block;font-size:12.5px;color:#171717}'
    + '.dt_dl{display:grid;grid-template-columns:auto minmax(0,1fr);gap:7px 14px;margin-top:11px;font-size:12px}.dt_dl span{color:#8A8884;white-space:nowrap}.dt_dl b{font-weight:500;color:#171717;display:flex;align-items:center;gap:6px;min-width:0}.dt_dl b .dt_ic{width:15px;height:15px;border-radius:5px}.dt_dl b .dt_ic svg{width:9px;height:9px}'
    + '.dt_jr{display:grid;grid-template-columns:repeat(3,1fr);margin-top:13px;padding-top:12px;border-top:1px solid #F0EEEB;position:relative}.dt_jr:before{content:"";position:absolute;left:4px;right:33%;top:15px;height:1px;background:#E3DFD8}'
    + '.dt_jr span{position:relative;font-size:10.5px;color:#8A8884;line-height:1.3;padding-top:12px;white-space:nowrap}.dt_jr span:before{content:"";position:absolute;left:0;top:0;width:7px;height:7px;border-radius:50%;background:#fff;box-shadow:inset 0 0 0 1.5px #B5B2AC}.dt_jr span b{display:block;color:#171717;font-size:11px}.dt_jr span.k:before{background:#2EBD6B;box-shadow:0 0 0 3px #EAF7EF}'
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

  /* ---------- Landing · A/B/C (v8.5) ---------- */
  css += '.dt_lp{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}'
    + '.dt_lc{padding:12px;transition:border-color .3s,box-shadow .3s,background-color .25s}.dt_lc.dt_hv:not(.on){background:#FDFCFB}.dt_lc.on{border-color:#171717;box-shadow:0 12px 28px -20px rgba(23,23,23,.5)}'
    + '.dt_lh2{display:flex;align-items:center;gap:8px;margin-bottom:10px;white-space:nowrap}.dt_lh2 b{font-size:13px;overflow:hidden;text-overflow:ellipsis}'
    + '.dt_lv{width:20px;height:20px;border-radius:6px;background:#F1EFEC;display:grid;place-items:center;font-size:11px;font-weight:700;color:#55524D;flex:none;transition:background-color .3s,color .3s}.dt_lc.on .dt_lv{background:#171717;color:#fff}'
    + '.dt_lh2 u{margin-left:auto;text-decoration:none;font-size:9.5px;font-weight:700;letter-spacing:.03em;color:#B0573A;background:#FDF1EC;border-radius:999px;padding:2px 7px}'
    + '.dt_lt{height:128px;border:1px solid #F0EEEB;border-radius:9px;overflow:hidden;background:#FAF9F7;display:flex;flex-direction:column}'
    + '.dt_lt .br{height:16px;display:flex;align-items:center;gap:3px;padding:0 7px;border-bottom:1px solid #F0EEEB;background:#fff;flex:none}.dt_lt .br i{width:4px;height:4px;border-radius:50%;background:#DDD9D3}.dt_lt .br span{margin-left:5px;height:7px;flex:1;border-radius:4px;background:#F3F1EE}'
    + '.dt_lt .pa{flex:1;position:relative;background:#E9E6E1 center/cover no-repeat}.dt_lt .pa b{position:absolute;left:9px;bottom:24px;color:#fff;font-size:12px;text-shadow:0 1px 6px rgba(0,0,0,.45)}.dt_lt .pa em{position:absolute;left:9px;bottom:8px;font-style:normal;font-size:8.5px;background:#fff;border-radius:999px;padding:2px 7px;color:#171717}'
    + '.dt_lt .pb{flex:1;display:grid;grid-template-columns:1fr 1fr;gap:5px;padding:6px}.dt_lt .pb span{background:#fff;border:1px solid #F0EEEB;border-radius:6px;display:grid;place-items:center;overflow:hidden;min-height:0}.dt_lt .pb svg{height:34px;width:auto;max-width:90%}'
    + '.dt_lt .pc{flex:1;display:flex;min-height:0}.dt_lt .pc figure{width:44%;background:#E9E6E1 center/cover no-repeat}.dt_lt .pc div{flex:1;padding:7px;display:flex;flex-direction:column;gap:5px;background:#fff}.dt_lt .pc b{font-size:10px}'
    + '.dt_lt .pc .d{display:flex;gap:3px}.dt_lt .pc .d i{flex:1;height:17px;border:1px solid #ECEAE6;border-radius:5px;display:grid;place-items:center;font-style:normal;font-size:8px;color:#55524D;line-height:1}.dt_lt .pc .d i.on{background:#171717;border-color:#171717;color:#fff}.dt_lt .pc .k{margin-top:auto;height:15px;border-radius:999px;background:#B0573A}'
    + '.dt_lk{display:grid;grid-template-columns:repeat(3,1fr);margin-top:10px;border:1px solid #F0EEEB;border-radius:10px}.dt_lk span{padding:7px 9px;font-size:10.5px;color:#8A8884;white-space:nowrap}.dt_lk span+span{border-left:1px solid #F0EEEB}.dt_lk b{display:block;font-size:15px;color:#171717;letter-spacing:-.01em;margin-top:1px}'
    + '.dt_lc .dt_trk{display:block;height:6px;width:auto;margin-top:10px}.dt_lc.best .dt_trk i{background:#171717}'
    + '.dt_lw{opacity:0;transform:translateY(4px);transition:opacity .4s ease,transform .5s ' + E1 + '}.dt_lw.on{opacity:1;transform:none}'
    + '@media (max-width:767px){.dt_lp{gap:6px}.dt_lc{padding:7px}.dt_lt{height:84px}.dt_lk span{padding:5px}.dt_lk span:not(:last-child){display:none}.dt_lh2 b{font-size:11px}}';
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

  /* ---------- Portali · Tagli ---------- */
  function detail(i) {
    var g = TG[i], b = best(g.c), mx = g.c[b];
    return '<div class="dt_stage dt_in" style="--i:0"><em class="l">' + t('Planimetria', 'Floor plan') + '</em><em class="r">' + g.u + ' ' + t('disponibili', 'available') + '</em>' + plan(g.k, 1) + '</div>'
      + '<div class="dt_dh dt_in" style="--i:1"><div><b>' + g.n + '</b><small>' + g.s + '</small></div><div class="p"><b>' + from(g.p) + '</b><small>' + g.m + ' m²</small></div></div>'
      + '<div class="dt_dk dt_in" style="--i:2"><span>' + t('Visualizzazioni', 'Views') + num(g.v) + '</span><span>' + t('Contatti', 'Leads') + num(sum(g.c)) + '</span><span>' + t('Visite in ufficio', 'Office visits') + num(g.vi) + '</span></div>'
      + '<div class="dt_bb dt_in" style="--i:3"><small>' + t('Contatti per portale', 'Leads by portal') + '</small>'
      + PO.map(function (p, j) { return '<div class="dt_br' + (j === b ? ' best' : '') + (PF > -1 && j !== PF ? ' dim' : '') + (j === PF ? ' pick' : '') + '">' + lg(p[0]) + '<span>' + p[1] + '</span><span class="dt_trk"><i data-w="' + Math.max(4, Math.round(g.c[j] / mx * 100)) + '"></i></span><span class="v">' + (j === b ? '<u>TOP</u>' : '') + g.c[j] + '</span></div>'; }).join('')
      + '</div>';
  }
  function vPort() {
    var h = hd(t('Portali', 'Portals'), 'Residenze Verdi · ' + t('4 tagli in vendita, stesso edificio', '4 layouts on sale, same building'), '<span class="dt_rng">' + t('Ultimo mese', 'Last month') + '</span>') + '<div class="dt_pg">';
    /* building */
    h += '<div><div class="dt_card dt_bld dt_in" style="--i:1"><figure class="dt_bph" style="background-image:url(' + IMG + 'render-photo.webp)"><span class="dt_live">' + t('Live su 3 portali', 'Live on 3 portals') + '</span></figure>'
      + '<div class="dt_bi"><div><b>Residenze Verdi</b><small>' + t('Parma · consegna 2027', 'Parma · handover 2027') + '</small></div><span class="dt_lgs">' + lg('immo') + lg('idea') + lg('casa') + '</span></div>'
      + '<div class="dt_pr h"><span class="n">' + t('Portale', 'Portal') + '</span><span>' + t('Viste', 'Views') + '</span><span>' + t('Contatti', 'Leads') + '</span><span>' + t('Visite', 'Visits') + '</span></div>'
      + PO.map(function (p, j) { return '<div class="dt_pr" data-p="' + p[0] + '"><span class="n">' + lg(p[0]) + p[1] + '</span><span>' + num(p[2], '', j * 80) + '</span><span>' + num(p[3], '', j * 80) + '</span><span>' + num(p[4], '', j * 80) + '</span></div>'; }).join('')
      + '<div class="dt_pr tot"><span class="n">' + t('Totale', 'Total') + '</span><span>' + num(sum(PO.map(function (p) { return p[2]; })), '', 240) + '</span><span>' + num(sum(PO.map(function (p) { return p[3]; })), '', 240) + '</span><span>' + num(sum(PO.map(function (p) { return p[4]; })), '', 240) + '</span></div></div>'
      + '<div class="dt_note dt_in" style="--i:3"><i>' + CHK + '</i>' + t('Stesso prezzo su tutti i portali', 'Same price on every portal') + '</div></div>';
    /* tagli */
    h += '<div class="dt_ls"><div class="dt_lh dt_in" style="--i:2"><em class="lt">' + t('Tagli in vendita', 'Layouts on sale') + '</em><span>' + sum(TG.map(function (g) { return g.u; })) + ' ' + t('unità', 'units') + '</span></div>'
      + TG.map(function (g, i) {
        return '<div class="dt_tg dt_in' + (i ? '' : ' on') + '" data-t="' + i + '" style="--i:' + (i + 3) + '"><span class="dt_th">' + plan(g.k) + '</span><div class="dt_tx"><div class="a"><b>' + g.n + '</b><i>' + from(g.p) + '</i></div><small class="b">' + g.m + ' m² · ' + g.r + '</small><div class="c">' + tgLine(g) + '</div></div></div>';
      }).join('') + '</div>';
    /* detail */
    h += '<div class="dt_card dt_det dt_in" style="--i:4">' + detail(0) + '</div></div>';
    return h;
  }

  /* ---------- Calendario · Visite ---------- */
  var EVS = {
    '0-0': ['visit', 'AG', 'Anna G.', 'ig'], '0-2': ['call', 'PR', 'Paolo R.', 'g'], '0-4': ['visit', 'SB', 'Stefano B.', 'g'],
    '1-1': ['tbc', 'EM', 'Elena M.', 'fb'], '1-3': ['visit', 'SP', 'Sara P.', 'g'],
    '2-0': ['visit', 'LB', 'Luca B.', 'ig'], '2-2': ['visit', 'CF', 'Chiara F.', 'immo'], '2-4': ['call', 'DT', 'Davide T.', 'idea'],
    '3-1': ['visit', 'MR', 'Marco R.', 'ig'], '3-3': ['visit', 'FC', 'Francesca C.', 'fb'], '3-5': ['tbc', 'GN', 'Giorgio N.', 'immo'],
    '4-0': ['visit', 'AL', 'Andrea L.', 'g'], '4-2': ['visit', 'VM', 'Valentina M.', 'gpt']
  };
  function vCal() {
    var D = [[9, t('Lun', 'Mon')], [10, t('Mar', 'Tue')], [11, t('Mer', 'Wed')], [12, t('Gio', 'Thu')], [13, t('Ven', 'Fri')]], H = ['09:00', '10:30', '12:00', '14:30', '16:00', '17:30'];
    var TY = { visit: t('Visita', 'Visit'), call: 'Call', tbc: t('Da confermare', 'To confirm') };
    var F = [['all', t('Tutti', 'All'), ''], ['visit', t('Visite', 'Visits'), '#2EBD6B'], ['call', 'Call', '#4C7BF3'], ['tbc', t('Da confermare', 'To confirm'), '#E0A43A']];
    var nv = 0, nt = 0, ne = 0, k, n = 0;
    for (k in EVS) { ne++; if (EVS[k][0] === 'visit') nv++; if (EVS[k][0] === 'tbc') nt++; }
    var h = hd(t('Calendario', 'Calendar'), 'Residenze Verdi · ' + t('ufficio vendite, settimana 9 – 13', 'sales office, week 9 – 13'),
      '<div class="dt_chips">' + F.map(function (c) { return '<span class="dt_chip' + (c[0] === 'all' ? ' on' : '') + '" data-f="' + c[0] + '">' + (c[2] ? '<i style="background:' + c[2] + '"></i>' : '') + c[1] + '</span>'; }).join('') + '</div>');
    h += '<div class="dt_card dt_kp dt_in" style="--i:1"><span data-kp="visit"><small>' + t('Visite questa settimana', 'Visits this week') + '</small><p>' + num(nv) + '<em>+2</em></p></span>'
      + '<span><small>' + t('Appuntamenti confermati', 'Confirmed appointments') + '</small><p>' + num(ne - nt, '', 80) + '<i>/ ' + ne + '</i></p></span>'
      + '<span><small>' + t('Tasso contatto → visita', 'Lead → visit rate') + '</small><p>' + num(12, '%', 160) + '<em>+3 pt</em></p></span></div>';
    h += '<div class="dt_card dt_cal dt_in" style="--i:2"><span class="h"><small>GMT+1</small></span>' + D.map(function (d, i) { return '<span class="h' + (i === 3 ? ' td' : '') + '"><small>' + d[1] + '</small><b>' + d[0] + '</b></span>'; }).join('');
    H.forEach(function (hr, r) {
      h += '<span class="t">' + hr + '</span>';
      for (var c = 0; c < 5; c++) {
        var e = EVS[c + '-' + r];
        h += '<span class="c' + (c === 3 ? ' td' : '') + '">' + (c === 3 && r === 0 ? '<i class="dt_now"></i>' : '')
          + (e ? '<span class="dt_ev ' + e[0] + '" data-t="' + e[0] + '"' + (c === 3 && r === 1 ? ' data-k="1"' : '') + ' style="--i:' + (n++) + '"><span class="dt_av">' + e[1] + '</span><p><b>' + e[2] + '</b><small>' + TY[e[0]] + (e[0] === 'tbc' ? '' : ' · ' + hr) + '</small></p>' + ICO[e[3]] + '</span>' : '') + '</span>';
      }
    });
    h += '</div>';
    /* detail popover */
    var tri = TG[1];
    var I = function (d) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>'; };
    h += '<div class="dt_pop dt_gc">'
      + '<div class="gc_bar" style="--i:0">' + I('<path d="M4 20h4L19 9l-4-4L4 16z"/>') + I('<path d="M5 7h14M10 7V5h4v2M7 7l1 12h8l1-12"/>') + I('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>') + I('<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>') + '<span class="dt_x">' + I('<path d="M6 6l12 12M18 6L6 18"/>') + '</span></div>'
      + '<div class="gc_r gc_t" style="--i:1"><i class="gc_sq"></i><div><h6>' + t('Visita in ufficio vendite · Marco R.', 'Sales-office visit · Marco R.') + '</h6><p>' + t('Giovedì 12 novembre · 10:30 – 11:15', 'Thursday 12 November · 10:30 – 11:15') + '</p></div></div>'
      + '<div class="gc_r" style="--i:2">' + I('<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>') + '<div><b>' + t('Ufficio vendite Residenze Verdi', 'Residenze Verdi sales office') + '</b><small>Parma</small></div></div>'
      + '<div class="gc_r" style="--i:3">' + I('<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.5a3.2 3.2 0 0 1 0 6.2M18 14c2 .7 3 2.8 3 6"/>') + '<div><b>' + t('2 invitati', '2 guests') + '</b><small>' + t('2 sì', '2 yes') + '</small>'
      + '<span class="gc_p"><i class="gc_av">MR' + CHK + '</i><span><b>Marco R.</b><small>' + t('Trilocale', '2-bed') + ' · ' + tri.m + ' m² · ' + t('budget 280–310k €', 'budget €280–310k') + '</small></span></span>'
      + '<span class="gc_p"><i class="gc_av k">GV' + CHK + '</i><span><b>Giulia V.</b><small>' + t('Organizzatore · consulente vendite', 'Organiser · sales consultant') + '</small></span></span></div></div>'
      + '<div class="gc_r" style="--i:4">' + I('<path d="M5 6h14M5 12h14M5 18h9"/>') + '<div><b>' + t('Da dove arriva', 'Where they came from') + '</b><small>' + t('Reel dal cantiere → contatto 8 giorni fa → visita oggi', 'Site Reel → lead 8 days ago → visit today') + '</small></div></div>'
      + '<div class="gc_r" style="--i:5">' + I('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0"/>') + '<div><small class="d">' + t('30 minuti prima', '30 minutes before') + '</small></div></div>'
      + '<div class="gc_rsvp" style="--i:6"><span>' + t('Parteciperà?', 'Going?') + '</span><em class="on">' + t('Sì', 'Yes') + '</em><em>No</em><em>' + t('Forse', 'Maybe') + '</em></div></div>';
    return h;
  }

  /* ---------- Landing · tre versioni, stesso budget ---------- */
  var LP = [
    ['A', t('Render in apertura', 'Render first'), 1240, 26, t('2,1%', '2.1%'), 36],
    ['B', t('Planimetrie in evidenza', 'Floor plans first'), 1310, 44, t('3,4%', '3.4%'), 59],
    ['C', t('Visita in due clic', 'Visit in two clicks'), 1270, 74, t('5,8%', '5.8%'), 100]
  ];
  function lpThumb(i) {
    var h = '<div class="dt_lt"><div class="br"><i></i><i></i><i></i><span></span></div>';
    if (i === 0) h += '<div class="pa" style="background-image:url(' + IMG + 'site-hd-ext-render.webp)"><b>Residenze Verdi</b><em>' + t('Scopri il progetto', 'Discover the project') + '</em></div>';
    else if (i === 1) h += '<div class="pb">' + ['bi', 'tri', 'quad', 'att'].map(function (k) { return '<span>' + plan(k) + '</span>'; }).join('') + '</div>';
    else h += '<div class="pc"><figure style="background-image:url(' + IMG + 'site-hd-int-render.webp)"></figure><div><b>' + t('Prenota la visita', 'Book a visit') + '</b><span class="d"><i>24</i><i class="on">25</i><i>27</i></span><span class="d"><i>10:30</i><i class="on">11:30</i><i>15:00</i></span><span class="k"></span></div></div>';
    return h + '</div>';
  }
  function vLand() {
    var h = hd(t('Landing page', 'Landing pages'), 'Residenze Verdi · ' + t('3 versioni, traffico diviso in parti uguali', '3 versions, traffic split evenly'), '<span class="dt_rng">' + t('Ultimo mese', 'Last month') + '</span>') + '<div class="dt_lp">';
    h += LP.map(function (v, i) {
      return '<div class="dt_card dt_lc dt_in' + (i === 2 ? ' best' : '') + '" data-l="' + i + '" style="--i:' + (i + 1) + '">'
        + '<div class="dt_lh2"><span class="dt_lv">' + v[0] + '</span><b>' + v[1] + '</b>' + (i === 2 ? '<u>TOP</u>' : '') + '</div>'
        + lpThumb(i)
        + '<div class="dt_lk"><span>' + t('Visitatori', 'Visitors') + num(v[2], '', i * 80) + '</span><span>' + t('Contatti', 'Leads') + num(v[3], '', i * 80) + '</span><span>' + t('Conversione', 'Conversion') + '<b>' + v[4] + '</b></span></div>'
        + '<span class="dt_trk"><i data-w="' + v[5] + '"></i></span></div>';
    }).join('') + '</div>';
    h += '<div class="dt_note dt_lw"><i>' + CHK + '</i>' + t('Il budget passa alla versione C: quasi 3 volte i contatti della A, stesso traffico', 'Budget moves to version C: almost 3x the leads of A, same traffic') + '</div>';
    return h;
  }
  var V = { Portali: vPort, Landing: vLand, Calendario: vCal };

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
  var HOV = '.dt_tg,.dt_pr[data-p],.dt_chip,.dt_ev,.dt_x,.d3_tbl .d3_r,.v2_side>span.lp-v2_side_span,.d3_seg button';
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
  function fill(root) { countUp(root); setTimeout(function () { [].forEach.call(root.querySelectorAll('.dt_trk i'), function (b) { b.style.width = b.getAttribute('data-w') + '%'; }); }, 80); }
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
  function selTg(i) {
    var det = host.querySelector('.dt_det'); if (!det) return;
    all('.dt_tg').forEach(function (r) { r.classList.toggle('on', +r.getAttribute('data-t') === i); });
    det.classList.add('sw');
    setTimeout(function () { det.innerHTML = detail(i); det.classList.remove('sw'); fill(det); }, 190);
  }
  function selPortal(j) {
    PF = j;
    all('.dt_pr[data-p]').forEach(function (r, k) { r.classList.toggle('sel', k === j); r.classList.toggle('dim', j > -1 && k !== j); });
    var lh = host.querySelector('.dt_lh'), shown = 0;
    all('.dt_tg').forEach(function (r) {
      var g = TG[+r.getAttribute('data-t')], on = j < 0 || g.c[j] > 0; if (on) shown++;
      r.classList.toggle('hid', !on); var c = r.querySelector('.c'); if (c) c.innerHTML = tgLine(g);
      r.classList.remove('pop'); if (on) { void r.offsetWidth; r.classList.add('pop'); }
    });
    if (lh) { lh.querySelector('.lt').textContent = j < 0 ? t('Tagli in vendita', 'Layouts on sale') : t('Annunci su ', 'Ads on ') + PO[j][1]; lh.querySelector('span').textContent = shown + ' ' + t('annunci live', 'live ads'); }
    var on = host.querySelector('.dt_tg.on'), i = on ? +on.getAttribute('data-t') : 0;
    if (j > -1 && !TG[i].c[j]) for (var x = 0; x < TG.length; x++) if (TG[x].c[j] > 0) { i = x; break; }
    selTg(i);
  }
  function portal(k, hold) { go(q('.dt_pr[data-p="' + k + '"]'), .4, .5, 800); click(function () { selPortal(['immo', 'idea', 'casa'].indexOf(k)); }); wait(hold); }
  function tg(i, hold) { go(q('.dt_tg[data-t="' + i + '"]'), .62, .55, 760); click(function () { selTg(i); }); wait(hold); }
  function filterCal(f) {
    all('.dt_chip').forEach(function (c) { c.classList.toggle('on', c.getAttribute('data-f') === f); });
    all('.dt_ev').forEach(function (e) { e.classList.toggle('off', f !== 'all' && e.getAttribute('data-t') !== f); });
    var kp = host.querySelector('[data-kp="visit"]'); if (kp) kp.classList.toggle('hl', f === 'visit');
  }
  function selLp(i, win) {
    all('.dt_lc').forEach(function (c) { c.classList.toggle('on', +c.getAttribute('data-l') === i); });
    if (win) { var n = host.querySelector('.dt_lw'); if (n) n.classList.add('on'); }
  }
  function lp(i, hold, win) { go(q('.dt_lc[data-l="' + i + '"]'), .5, .42, 780); click(function () { selLp(i, win); }); wait(hold); }
  function chipClick(f, hold) { go(q('.dt_chip[data-f="' + f + '"]'), .5, .5, 700); click(function () { filterCal(f); }); wait(hold); }
  function openPop() {
    var e = host.querySelector('.dt_ev[data-k]'), pop = host.querySelector('.dt_pop'); if (!e || !pop) return;
    e.classList.add('sel');
    var h = host.getBoundingClientRect(), r = e.getBoundingClientRect(), s = sc(), W = pop.offsetWidth, HH = pop.offsetHeight;
    var left = (r.left - h.left) / s - W - 12, top = (r.top - h.top) / s - 72, mx = host.clientHeight - HH - 8;
    if (left < 8) left = Math.min((r.right - h.left) / s + 12, host.clientWidth - W - 8);
    if (left < 8) left = 8;
    if (top > mx) top = mx; if (top < 8) top = 8;
    pop.style.left = Math.round(left) + 'px'; pop.style.top = Math.round(top) + 'px'; pop.classList.add('on');
  }
  function closePop() { var p = host.querySelector('.dt_pop'); if (p) p.classList.remove('on'); var e = host.querySelector('.dt_ev.sel'); if (e) e.classList.remove('sel'); }
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

  /* ---------- script ---------- */
  /* 1 · Panoramica: follow the visits, then the cost per channel */
  act(function () { show('Panoramica'); });
  wait(250);
  sweep(2200, .05, .95); wait(900); leave();
  /* 2 · Portali: pick a portal → only its ads; pick a layout → its floor plan */
  nav('Portali'); wait(500);
  portal('immo', 900); tg(1, 1900);
  portal('idea', 900); tg(3, 1900);
  /* 3 · Landing: three versions, same budget → the winner gets it */
  nav('Landing'); wait(700);
  lp(0, 900); lp(1, 900); lp(2, 2600, 1);
  /* 3 · Calendario: where it lands — the visit at the sales office */
  nav('Calendario'); wait(450);
  chipClick('visit', 800);
  go(q('.dt_ev[data-k]'), .46, .56, 820); click(openPop); wait(3400);
  go(q('.dt_pop .dt_x'), .5, .5, 640); click(closePop); wait(200);
  /* back to the start */
  nav('Panoramica'); wait(300);
  app.__dtLoop = LOOP;

  function step() { if (!running) return; var f = Q[qi]; qi = (qi + 1) % Q.length; f(step); }
  function start() { if (running) return; running = true; cur.classList.add('is-on'); if (!P.x) { place(app.offsetWidth * .5, app.offsetHeight * .55); } step(); }
  function stop() { running = false; clearTimeout(timer); TY.forEach(clearTimeout); TY = []; if (anim) cancelAnimationFrame(anim); anim = null; hover(1); }

  var pre = new Image(); pre.src = IMG + 'render-photo.webp';
  if (window.matchMedia && (matchMedia('(prefers-reduced-motion: reduce)').matches || matchMedia('(max-width:767px)').matches)) { show('Panoramica'); if (matchMedia('(max-width:767px)').matches) { var pin = function () { var h = app.querySelector('.d3_hit'); if (!h) return; var b = h.getBoundingClientRect(); if (!b.width) return; try { h.dispatchEvent(new PointerEvent('pointermove', { clientX: b.left + b.width * .21, clientY: b.top + b.height * .45, bubbles: true })); } catch (e) {} }; setTimeout(pin, 400); setTimeout(pin, 1600); window.addEventListener('resize', function () { setTimeout(pin, 350); }); } return; }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) start(); else stop(); }); }, { threshold: .35 }).observe(app);
  } else start();
})();
