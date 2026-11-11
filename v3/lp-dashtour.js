/* Lapis · Home dashboard: guided tour + explore mode (v1) */
(function () {
  var app = document.querySelector('.v2_dashsec .v2_app');
  if (!app || app.__dt) return;
  app.__dt = 1;
  var EN = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;
  function t(it, en) { return EN ? en : it; }
  var main = app.querySelector('.v2_main');
  var rail = app.parentElement;
  var CDN = 'https://cdn.prod.website-files.com/6ac0d032fb0cd97884ba849a/';
  function logo(alt, fb) {
    var i = document.querySelector('img[alt="' + alt + '"]');
    return i ? (i.currentSrc || i.src) : (fb ? CDN + fb : '');
  }
  var L = {
    meta: logo('Meta'), google: logo('Google Ads', '6ad767111781999df83978b3_lp-d5bb243759.webp'),
    immo: logo('Immobiliare.it', '6ad76591a2f4ec5a2ae81def_lp-4b9cb48fc3.png'),
    idea: logo('idealista', '6ad7659158729a54f46b2ddd_lp-69c63ed1c0.png'),
    casa: CDN + '6ad76591cbb284699d94de73_lp-33db9b2d0a.png', gpt: logo('ChatGPT')
  };
  function ic(k) { return L[k] ? '<img class="dt_lg" src="' + L[k] + '" alt="" loading="lazy">' : '<i class="dt_lg dt_lgx"></i>'; }

  /* ---------- styles ---------- */
  var css = ''
    + '.v2_dashsec .v2_app{position:relative}'
    + '.v2_main{position:relative}'
    + '.v2_side>span.lp-v2_side_span{cursor:pointer;transition:background-color .2s,color .2s}'
    + '.v2_side>span.lp-v2_side_span:not(.on):hover{background:#F3F1EE;color:#171717}'
    + '.v2_side>span.on{background:#EFECE8!important;color:#171717!important}'
    + '.dt_host{position:absolute;left:16px;right:16px;bottom:18px;top:56px;background:#fff;border:1px solid #ECEAE6;border-radius:12px;opacity:0;visibility:hidden;transform:translateY(6px);transition:opacity .35s ease,transform .35s ease,visibility 0s .35s;overflow:hidden;z-index:3;font-size:13px;color:#171717}'
    + '.dt_host.is-on{opacity:1;visibility:visible;transform:none;transition:opacity .35s ease,transform .35s ease}'
    + '.dt_hd{display:flex;align-items:center;justify-content:space-between;padding:16px 18px 12px;border-bottom:1px solid #F0EEEB}'
    + '.dt_hd b{font-size:15px;font-weight:600;letter-spacing:-.01em}.dt_hd small{color:#8A8884;font-size:12px}'
    + '.dt_tb{width:100%;border-collapse:collapse}.dt_tb th{font-weight:500;color:#8A8884;font-size:11.5px;text-align:left;padding:10px 18px;border-bottom:1px solid #F0EEEB;white-space:nowrap}'
    + '.dt_tb td{padding:12px 18px;border-bottom:1px solid #F5F4F1;white-space:nowrap}.dt_tb td.r,.dt_tb th.r{text-align:right}'
    + '.dt_nm{display:flex;align-items:center;gap:10px}.dt_lg{width:20px;height:20px;border-radius:5px;object-fit:contain;flex:none}.dt_lgx{display:inline-block;background:#EEE}'
    + '.dt_st{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#3F3D39}.dt_st:before{content:"";width:7px;height:7px;border-radius:50%;background:#2EBD6B}.dt_st.is-p:before{background:#C9C6C0}.dt_st.is-w:before{background:#E0A43A}'
    + '.dt_pills{display:flex;gap:6px}.dt_pill{font-size:11.5px;padding:3px 8px;border-radius:999px;background:#F4F2EF;color:#55524D}'
    + '.dt_grid{display:grid;gap:12px;padding:16px 18px}.dt_g3{grid-template-columns:repeat(3,1fr)}.dt_g4{grid-template-columns:repeat(4,1fr)}'
    + '.dt_card{border:1px solid #EFEDE9;border-radius:12px;padding:14px;background:#FCFCFB}.dt_card h5{margin:0 0 10px;font-size:13.5px;font-weight:600;display:flex;align-items:center;gap:8px}'
    + '.dt_kv{display:flex;justify-content:space-between;font-size:12.5px;color:#55524D;padding:5px 0}.dt_kv b{color:#171717;font-weight:600}'
    + '.dt_bar{height:6px;border-radius:6px;background:#F1EFEC;overflow:hidden;margin-top:8px}.dt_bar i{display:block;height:100%;border-radius:6px;background:#171717;width:0;transition:width .9s cubic-bezier(.2,.8,.2,1)}'
    + '.dt_host.is-on .dt_bar i{width:var(--w)}'
    + '.dt_col h6{margin:0 0 10px;font-size:12px;font-weight:600;color:#55524D;display:flex;justify-content:space-between}.dt_col h6 span{color:#8A8884;font-weight:500}'
    + '.dt_lead{border:1px solid #EFEDE9;border-radius:10px;padding:10px;margin-bottom:8px;background:#fff;display:flex;align-items:center;gap:10px}'
    + '.dt_av{width:28px;height:28px;border-radius:50%;background:#F1EEEA;display:grid;place-items:center;font-size:11px;font-weight:600;color:#55524D;flex:none}'
    + '.dt_lead p{margin:0;font-size:12.5px;line-height:1.3}.dt_lead p small{display:block;color:#8A8884;font-size:11.5px}'
    + '.dt_cal{display:grid;grid-template-columns:44px repeat(5,1fr);padding:10px 18px 16px;font-size:11.5px;color:#8A8884}'
    + '.dt_cal .h{padding:6px 8px;color:#55524D;font-weight:600}.dt_cal .t{padding-top:2px;height:52px;border-top:1px solid #F3F2EF}.dt_cal .c{position:relative;border-top:1px solid #F3F2EF;border-left:1px solid #F3F2EF;height:52px}'
    + '.dt_ev{position:absolute;left:4px;right:4px;top:4px;border-radius:7px;padding:5px 7px;font-size:11px;line-height:1.25;color:#171717;background:#EAF7EF;border-left:3px solid #2EBD6B}.dt_ev small{display:block;color:#55524D}'
    + '.dt_ev.g{background:#EEF3FE;border-color:#4C7BF3}.dt_ev.p{background:#FDF1EC;border-color:#B0573A}'
    + '.dt_act{display:flex;gap:12px;align-items:flex-start;padding:14px 18px;border-bottom:1px solid #F5F4F1}.dt_act i{width:26px;height:26px;border-radius:8px;background:#F4F2EF;display:grid;place-items:center;font-style:normal;flex:none}.dt_act p{margin:0;line-height:1.4}.dt_act p small{color:#8A8884;display:block}'
    /* focus / blur */
    + '.dt_host.dt_focus [data-hi]:not(.dt_hi),.dt_host.dt_focus .dt_card:not(.dt_hi){filter:blur(1.4px);opacity:.5;transition:filter .4s,opacity .4s}'
    + '.dt_hi{position:relative;transition:box-shadow .4s}.dt_card.dt_hi,.dt_lead.dt_hi{box-shadow:0 0 0 2px #171717}tr.dt_hi td{background:#FAF8F5}'
    + '.v2_main.dt_softlow .v2_row2{filter:blur(2.2px);opacity:.55;transition:filter .5s,opacity .5s}'
    + '.v2_main.dt_softlow .v2_row2:hover{filter:none;opacity:1}'
    + '.dt_fade{position:absolute;left:0;right:0;bottom:0;height:110px;pointer-events:none;z-index:4;background:linear-gradient(to bottom,rgba(251,250,248,0),rgba(251,250,248,.92) 75%);-webkit-backdrop-filter:blur(1.5px);backdrop-filter:blur(1.5px);-webkit-mask-image:linear-gradient(to bottom,transparent,#000 70%);mask-image:linear-gradient(to bottom,transparent,#000 70%);transition:opacity .4s}'
    + '.v2_app.dt_explore .dt_fade{opacity:0}'
    /* cursor */
    + '.dt_cur{position:absolute;left:0;top:0;width:22px;height:22px;z-index:9;pointer-events:none;transition:transform .9s cubic-bezier(.65,0,.25,1),opacity .3s;opacity:0;filter:drop-shadow(0 3px 6px rgba(0,0,0,.25))}'
    + '.dt_cur.is-on{opacity:1}.dt_cur svg{display:block}'
    + '.dt_rip{position:absolute;width:34px;height:34px;margin:-17px 0 0 -17px;border-radius:50%;border:2px solid #B0573A;z-index:8;pointer-events:none;animation:dtrip .6s ease-out forwards}'
    + '@keyframes dtrip{from{transform:scale(.3);opacity:1}to{transform:scale(1.4);opacity:0}}'
    /* control bar */
    + '.dt_ctl{display:flex;align-items:center;justify-content:space-between;gap:14px;margin:0 auto 16px;padding:8px 8px 8px 16px;background:#171717;color:#fff;border-radius:14px;box-shadow:0 14px 30px -16px rgba(0,0,0,.45);max-width:860px;font-size:14px;position:relative;z-index:6}'
    + '.dt_ctl .dt_l{display:flex;align-items:center;gap:12px;min-width:0;flex:1}'
    + '.dt_live{display:inline-flex;align-items:center;gap:7px;font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:#BDBAB4;white-space:nowrap}.dt_live:before{content:"";width:7px;height:7px;border-radius:50%;background:#2EBD6B;box-shadow:0 0 0 0 rgba(46,189,107,.6);animation:dtpulse 1.8s infinite}'
    + '@keyframes dtpulse{70%{box-shadow:0 0 0 7px rgba(46,189,107,0)}100%{box-shadow:0 0 0 0 rgba(46,189,107,0)}}'
    + '.dt_cap{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:opacity .25s}.dt_cap b{font-weight:600}'
    + '.dt_dots{display:flex;gap:4px;margin-left:4px}.dt_dots i{width:5px;height:5px;border-radius:50%;background:#55524D;transition:background .3s,width .3s}.dt_dots i.on{background:#fff;width:14px;border-radius:4px}'
    + '.dt_r{display:flex;gap:6px;flex:none}'
    + '.dt_btn{appearance:none;border:0;cursor:pointer;font:inherit;font-size:13px;font-weight:600;border-radius:9px;padding:9px 14px;display:inline-flex;align-items:center;gap:7px;transition:background .2s,color .2s}'
    + '.dt_btn.a{background:#fff;color:#171717}.dt_btn.a:hover{background:#EFECE8}.dt_btn.b{background:#2A2927;color:#fff}.dt_btn.b:hover{background:#3A3936}'
    + '.dt_hint{position:absolute;z-index:7;left:8px;top:0;transform:translateY(-50%);background:#B0573A;color:#fff;font-size:11.5px;font-weight:600;padding:5px 9px;border-radius:8px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .3s}'
    + '.v2_app.dt_explore .dt_hint{opacity:1;animation:dtnudge 1.6s ease-in-out infinite}'
    + '@keyframes dtnudge{50%{transform:translate(5px,-50%)}}'
    + '@media (max-width:767px){.dt_ctl{flex-wrap:wrap;padding:10px 12px;border-radius:12px;font-size:13px}.dt_ctl .dt_l{flex-basis:100%}.dt_cap{white-space:normal}.dt_r{width:100%}.dt_r .dt_btn{flex:1;justify-content:center}.dt_cur,.dt_hint{display:none}.dt_host{left:8px;right:8px;top:48px}.dt_tb th,.dt_tb td{padding:9px 10px}.dt_g3,.dt_g4{grid-template-columns:1fr 1fr}.dt_hide-m{display:none}}'
    + '@media (prefers-reduced-motion:reduce){.dt_cur,.dt_host,.dt_bar i{transition:none!important}.dt_live:before,.dt_hint{animation:none!important}}';
  var st = document.createElement('style'); st.id = 'lpdashtour'; st.textContent = css; document.head.appendChild(st);

  /* ---------- views ---------- */
  function hd(title, sub) { return '<div class="dt_hd"><b>' + title + '</b><small>' + sub + '</small></div>'; }
  var demo = t('Dati di esempio', 'Sample data');
  var V = {
    Campagne: function () {
      var R = [
        ['meta', 'Meta · Reels dal cantiere', 1, 118, 14, '58 €'],
        ['meta', t('Meta · Modulo render trilocali', 'Meta · Two-bed render form'), 1, 64, 7, '66 €'],
        ['google', t('Google · Ricerca “nuove costruzioni”', 'Google · Search “new builds”'), 1, 41, 9, '71 €'],
        ['google', t('Google · Nome del progetto', 'Google · Project name'), 1, 22, 3, '39 €'],
        ['meta', t('Meta · Retargeting visitatori', 'Meta · Site retargeting'), 0, 12, 1, '—']
      ];
      return hd(t('Campagne attive', 'Live campaigns'), demo) + '<table class="dt_tb"><tr><th>' + t('Campagna', 'Campaign') + '</th><th>' + t('Stato', 'Status') + '</th><th class="r">' + t('Contatti', 'Leads') + '</th><th class="r">' + t('Visite', 'Visits') + '</th><th class="r">' + t('Costo per visita', 'Cost per visit') + '</th></tr>'
        + R.map(function (r, i) { return '<tr data-hi' + (i === 0 ? ' data-k="1"' : '') + '><td><span class="dt_nm">' + ic(r[0]) + r[1] + '</span></td><td><span class="dt_st' + (r[2] ? '' : ' is-p') + '">' + (r[2] ? t('Attiva', 'Live') : t('In pausa', 'Paused')) + '</span></td><td class="r">' + r[3] + '</td><td class="r"><b>' + r[4] + '</b></td><td class="r">' + r[5] + '</td></tr>'; }).join('') + '</table>';
    },
    Portali: function () {
      var P = [['immo', 'Immobiliare.it', 3, 38, 4, 62, 1], ['idea', 'idealista', 3, 19, 2, 31, 1], ['casa', 'Casa.it', 2, 9, 0, 14, 0]];
      return hd(t('Portali su cui siamo live', 'Portals we are live on'), demo) + '<div class="dt_grid dt_g3">' + P.map(function (p, i) {
        return '<div class="dt_card"' + (i === 0 ? ' data-k="1"' : '') + '><h5>' + ic(p[0]) + p[1] + '</h5><div class="dt_kv">' + t('Stato', 'Status') + ' <span class="dt_st' + (p[6] ? '' : ' is-w') + '">' + (p[6] ? 'Live' : t('In test', 'Testing')) + '</span></div><div class="dt_kv">' + t('Annunci attivi', 'Active listings') + ' <b>' + p[2] + '</b></div><div class="dt_kv">' + t('Contatti', 'Leads') + ' <b>' + p[3] + '</b></div><div class="dt_kv">' + t('Visite', 'Visits') + ' <b>' + p[4] + '</b></div><div class="dt_bar"><i style="--w:' + p[5] + '%"></i></div></div>';
      }).join('') + '</div>';
    },
    Landing: function () {
      var P = [[t('Pagina del progetto', 'Project page'), '/progetto', '2.140', 96, '4,5%', 45], [t('Trilocali', 'Two-bedroom'), '/trilocali', '860', 41, '4,8%', 48], [t('Attici', 'Penthouses'), '/attici', '410', 22, '5,4%', 54], [t('Prenota una visita', 'Book a visit'), '/visita', '300', 18, '6,0%', 60]];
      return hd(t('Landing page', 'Landing pages'), demo) + '<table class="dt_tb"><tr><th>' + t('Pagina', 'Page') + '</th><th class="r">' + t('Visitatori', 'Visitors') + '</th><th class="r">' + t('Richieste', 'Requests') + '</th><th class="r">' + t('Conversione', 'Conversion') + '</th><th class="dt_hide-m" style="width:28%"></th></tr>'
        + P.map(function (p, i) { return '<tr data-hi' + (i === 0 ? ' data-k="1"' : '') + '><td><b>' + p[0] + '</b> <small style="color:#8A8884">' + p[1] + '</small></td><td class="r">' + p[2] + '</td><td class="r">' + p[3] + '</td><td class="r"><b>' + p[4] + '</b></td><td class="dt_hide-m"><div class="dt_bar" style="margin:0"><i style="--w:' + p[5] + '%"></i></div></td></tr>'; }).join('') + '</table>';
    },
    Visite: function () {
      var R = [[t('Gio', 'Thu') + ' 10:30', 'M.R.', 'meta', 'Instagram Reels', 1], [t('Gio', 'Thu') + ' 16:00', 'L.B.', 'google', 'Google Search', 1], [t('Ven', 'Fri') + ' 11:00', 'F.C.', 'immo', 'Immobiliare.it', 2], [t('Mar', 'Tue') + ' 17:30', 'S.P.', 'gpt', 'ChatGPT', 3], [t('Lun', 'Mon') + ' 09:30', 'A.G.', 'idea', 'idealista', 3]];
      var S = { 1: ['', t('Confermata', 'Confirmed')], 2: [' is-w', t('Da confermare', 'To confirm')], 3: [' is-p', t('Effettuata', 'Done')] };
      return hd(t('Visite in ufficio vendite', 'Sales-office visits'), demo) + '<table class="dt_tb"><tr><th>' + t('Quando', 'When') + '</th><th>' + t('Cliente', 'Client') + '</th><th>' + t('Arriva da', 'Came from') + '</th><th>' + t('Stato', 'Status') + '</th></tr>'
        + R.map(function (r, i) { return '<tr data-hi' + (i === 0 ? ' data-k="1"' : '') + '><td>' + r[0] + '</td><td><span class="dt_nm"><span class="dt_av">' + r[1] + '</span></span></td><td><span class="dt_nm">' + ic(r[2]) + r[3] + '</span></td><td><span class="dt_st' + S[r[4]][0] + '">' + S[r[4]][1] + '</span></td></tr>'; }).join('') + '</table>';
    },
    Lead: function () {
      var C = [[t('Nuovi', 'New'), 8, [['G.T.', 'meta', 'Reels', t('2 ore fa', '2 h ago')], ['E.M.', 'immo', 'Immobiliare.it', t('ieri', 'yesterday')]]],
        [t('Contattati', 'Contacted'), 5, [['L.B.', 'google', 'Google Search', t('ieri', 'yesterday')], ['C.D.', 'idea', 'idealista', t('2 giorni', '2 days')]]],
        [t('Visita fissata', 'Visit booked'), 3, [['M.R.', 'meta', 'Reels', t('gio 10:30', 'Thu 10:30')], ['F.C.', 'immo', 'Immobiliare.it', t('ven 11:00', 'Fri 11:00')]]],
        [t('Proposta', 'Offer'), 1, [['S.P.', 'gpt', 'ChatGPT', t('trilocale B4', 'apartment B4')]]]];
      return hd(t('Lead, dalla richiesta alla proposta', 'Leads, from request to offer'), demo) + '<div class="dt_grid dt_g4">' + C.map(function (c, ci) {
        return '<div class="dt_col"><h6>' + c[0] + ' <span>' + c[1] + '</span></h6>' + c[2].map(function (l, li) { return '<div class="dt_lead" data-hi' + (ci === 2 && li === 0 ? ' data-k="1"' : '') + '><span class="dt_av">' + l[0] + '</span><p>' + ic(l[1]).replace('dt_lg', 'dt_lg" style="width:14px;height:14px;display:inline-block;vertical-align:-2px;margin-right:4px') + l[2] + '<small>' + l[3] + '</small></p></div>'; }).join('') + '</div>';
      }).join('') + '</div>';
    },
    Calendario: function () {
      var D = [t('Lun', 'Mon'), t('Mar', 'Tue'), t('Mer', 'Wed'), t('Gio', 'Thu'), t('Ven', 'Fri')], H = ['09:00', '11:00', '14:00', '16:00', '17:30'];
      var E = { '0-0': ['', 'A.G.', 'idealista'], '1-4': ['', 'S.P.', 'ChatGPT'], '3-0': ['p', 'M.R.', 'Reels'], '3-3': ['g', 'L.B.', 'Google'], '4-1': ['', 'F.C.', 'Immobiliare'], '2-2': ['g', t('Call', 'Call'), 'Google Meet'] };
      var h = '<div class="dt_cal"><span></span>' + D.map(function (d) { return '<span class="h">' + d + '</span>'; }).join('');
      H.forEach(function (hr, r) { h += '<span class="t">' + hr + '</span>'; for (var c = 0; c < 5; c++) { var e = E[c + '-' + r]; h += '<span class="c">' + (e ? '<span class="dt_ev ' + e[0] + '"' + (c === 3 && r === 0 ? ' data-k="1"' : '') + '>' + (e[1] === 'Call' ? '' : t('Visita · ', 'Visit · ')) + e[1] + '<small>' + e[2] + '</small></span>' : '') + '</span>'; } });
      return hd(t('Calendario appuntamenti', 'Appointments calendar'), t('Sincronizzato con il CRM', 'Synced with the CRM')) + h + '</div>';
    },
    Budget: function () {
      var B = [['meta', 'Meta', 55], ['google', 'Google', 28], ['immo', t('Portali', 'Portals'), 12], ['gpt', t('Altro', 'Other'), 5]];
      return hd(t('Budget per canale', 'Budget by channel'), t('Questo mese', 'This month')) + '<div class="dt_grid dt_g4">' + B.map(function (b) { return '<div class="dt_card"><h5>' + ic(b[0]) + b[1] + '</h5><div class="dt_kv">' + t('Quota', 'Share') + ' <b>' + b[2] + '%</b></div><div class="dt_bar"><i style="--w:' + b[2] + '%"></i></div></div>'; }).join('') + '</div>';
    },
    Azioni: function () {
      var A = [['↗', t('Sposta budget dal retargeting ai Reels dal cantiere', 'Move budget from retargeting to site Reels'), t('Costo per visita più basso della settimana', 'Lowest cost per visit this week')], ['✎', t('Nuovo render per l’annuncio dei trilocali', 'New render for the two-bed listing'), t('Il click sull’annuncio cala da 10 giorni', 'Listing clicks down for 10 days')], ['☎', t('Richiama 3 contatti senza risposta', 'Call back 3 unanswered leads'), t('Arrivati da Immobiliare.it', 'From Immobiliare.it')]];
      return hd(t('Azioni consigliate', 'Recommended actions'), t('Aggiornate ogni lunedì', 'Updated every Monday')) + A.map(function (a) { return '<div class="dt_act"><i>' + a[0] + '</i><p>' + a[1] + '<small>' + a[2] + '</small></p></div>'; }).join('');
    }
  };

  /* ---------- DOM ---------- */
  var host = document.createElement('div'); host.className = 'dt_host'; host.setAttribute('aria-live', 'polite'); main.appendChild(host);
  var fade = document.createElement('div'); fade.className = 'dt_fade'; app.appendChild(fade);
  var cur = document.createElement('div'); cur.className = 'dt_cur'; cur.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M4 2l15 10.5-6.6 1.3 3.9 7.4-3 1.6-3.9-7.5L4 20z" fill="#171717" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>'; app.appendChild(cur);
  var side = [].slice.call(app.querySelectorAll('.v2_side > span')).filter(function (s) { return !/search/.test(s.className); });
  function nm(s) { return (s.__n || (s.__n = s.textContent.replace(/\s+/g, ' ').trim())); }
  var IT = ['Panoramica', 'Campagne', 'Portali', 'Landing', 'Visite', 'Lead', 'Calendario', 'Budget', 'Azioni'];
  side.forEach(function (s, i) { s.__k = IT[i] || nm(s); s.setAttribute('role', 'button'); s.tabIndex = 0; });
  var hint = document.createElement('span'); hint.className = 'dt_hint'; hint.textContent = t('← Clicca qui', '← Click here');
  var ctl = document.createElement('div'); ctl.className = 'dt_ctl';
  ctl.innerHTML = '<div class="dt_l"><span class="dt_live">' + t('Demo', 'Demo') + '</span><span class="dt_cap"></span><span class="dt_dots"></span></div><div class="dt_r"><button type="button" class="dt_btn a" data-a="tour"></button><button type="button" class="dt_btn b" data-a="free">' + t('Esplora tu', 'Explore yourself') + '</button></div>';
  var caseHdr = rail.querySelector('.dc_case');
  rail.insertBefore(ctl, app);
  var cap = ctl.querySelector('.dt_cap'), dots = ctl.querySelector('.dt_dots'), bTour = ctl.querySelector('[data-a="tour"]'), bFree = ctl.querySelector('[data-a="free"]');

  var STEPS = [
    ['Panoramica', t('<b>Panoramica</b> · visite, costo per visita e budget in un colpo d’occhio', '<b>Overview</b> · visits, cost per visit and budget at a glance')],
    ['Campagne', t('<b>Campagne</b> · ogni campagna attiva, con il suo costo per visita', '<b>Campaigns</b> · every live campaign, with its cost per visit')],
    ['Portali', t('<b>Portali</b> · Immobiliare.it e idealista misurati come un canale', '<b>Portals</b> · Immobiliare.it and idealista measured like a channel')],
    ['Landing', t('<b>Landing</b> · le pagine di progetto e quante richieste portano', '<b>Landing</b> · project pages and how many requests they bring')],
    ['Visite', t('<b>Visite</b> · chi viene in ufficio vendite e da quale annuncio arriva', '<b>Visits</b> · who comes to the sales office and from which ad')],
    ['Lead', t('<b>Lead</b> · ogni contatto seguito, dalla richiesta alla proposta', '<b>Leads</b> · every contact followed from request to offer')],
    ['Calendario', t('<b>Calendario</b> · gli appuntamenti, sincronizzati con il CRM', '<b>Calendar</b> · appointments, synced with the CRM')],
    ['Panoramica', t('<b>Tutto in un’unica dashboard.</b> Ora prova tu: clicca le voci a sinistra', '<b>All in one dashboard.</b> Your turn: click the items on the left')]
  ];
  dots.innerHTML = STEPS.slice(0, 7).map(function () { return '<i></i>'; }).join('');
  var D = [].slice.call(dots.children);

  function setCap(html) { cap.style.opacity = 0; setTimeout(function () { cap.innerHTML = html; cap.style.opacity = 1; }, 180); }
  function show(k, focus) {
    side.forEach(function (s) { s.classList.toggle('on', s.__k === k); });
    var idx = IT.indexOf(k); D.forEach(function (d, i) { d.classList.toggle('on', i === Math.min(idx, 6) && idx < 7); });
    if (k === 'Panoramica' || !V[k]) { host.classList.remove('is-on', 'dt_focus'); main.classList.add('dt_softlow'); return; }
    main.classList.remove('dt_softlow');
    host.classList.remove('is-on'); host.innerHTML = V[k](); void host.offsetWidth; host.classList.add('is-on');
    if (focus) {
      var key = host.querySelector('[data-k]');
      if (key) { host.classList.add('dt_focus'); key.classList.add('dt_hi'); setTimeout(function () { host.classList.remove('dt_focus'); key.classList.remove('dt_hi'); }, 2600); }
    }
  }
  function pos(el) { var a = app.getBoundingClientRect(), b = el.getBoundingClientRect(); return [b.left - a.left + Math.min(b.width * .35, 46), b.top - a.top + b.height / 2]; }
  function moveTo(el) { var p = pos(el); cur.style.transform = 'translate(' + (p[0] - 3) + 'px,' + (p[1] - 3) + 'px)'; return p; }
  function ripple(p) { var r = document.createElement('span'); r.className = 'dt_rip'; r.style.left = p[0] + 'px'; r.style.top = p[1] + 'px'; app.appendChild(r); setTimeout(function () { r.remove(); }, 650); }

  var mode = 'idle', timers = [], step = 0;
  function clear() { timers.forEach(clearTimeout); timers = []; }
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
  function setMode(m) {
    mode = m; app.classList.toggle('dt_explore', m === 'free'); app.classList.toggle('dt_touring', m === 'tour');
    bTour.innerHTML = m === 'tour' ? '❚❚ ' + t('Pausa', 'Pause') : '▶ ' + (step > 0 ? t('Riguarda il tour', 'Replay the tour') : t('Guarda il tour', 'Watch the tour'));
    bFree.style.display = m === 'free' ? 'none' : '';
    cur.classList.toggle('is-on', m === 'tour');
  }
  function runStep() {
    if (mode !== 'tour') return;
    if (step >= STEPS.length) { endTour(); return; }
    var S = STEPS[step], el = side[IT.indexOf(S[0])];
    var p = moveTo(el);
    later(function () { ripple(p); show(S[0], true); setCap(S[1]); }, 950);
    later(function () { step++; runStep(); }, step === STEPS.length - 1 ? 2600 : 3600);
  }
  function startTour() {
    clear(); step = 0; setMode('tour');
    var a = side[0].getBoundingClientRect(), b = app.getBoundingClientRect();
    cur.style.transition = 'none'; cur.style.transform = 'translate(' + (b.width * .55) + 'px,' + (b.height * .55) + 'px)'; void cur.offsetWidth; cur.style.transition = '';
    later(runStep, 300);
  }
  function endTour() { clear(); explore(); }
  function explore(silent) {
    clear(); setMode('free');
    if (!silent) setCap(t('<b>Prova tu:</b> clicca le voci a sinistra per aprire ogni sezione', '<b>Your turn:</b> click the items on the left to open each section'));
    var c = side[1]; if (c) { c.style.position = 'relative'; if (hint.parentNode !== c) c.appendChild(hint); hint.style.left = (c.offsetWidth + 6) + 'px'; hint.style.top = '50%'; }
  }
  bTour.addEventListener('click', function () { if (mode === 'tour') { explore(); } else startTour(); });
  bFree.addEventListener('click', function () { explore(); show('Panoramica'); });
  side.forEach(function (s) {
    function go(e) { if (mode === 'tour') explore(true); if (hint.parentNode) hint.remove(); show(s.__k, false); var i = IT.indexOf(s.__k); if (i > -1 && STEPS[i]) setCap(STEPS[i][1]); }
    s.addEventListener('click', go);
    s.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(e); } });
  });
  app.addEventListener('pointerdown', function (e) { if (mode === 'tour' && e.isTrusted && !e.target.closest('.v2_side > span')) explore(); });

  /* initial */
  main.classList.add('dt_softlow');
  setCap(t('<b>La dashboard che ricevi ogni settimana.</b> Guarda il tour o esplorala tu', '<b>The dashboard you get every week.</b> Watch the tour or explore it yourself'));
  setMode('idle');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting && mode === 'idle') { io.disconnect(); setTimeout(function () { if (mode === 'idle') startTour(); }, 700); } }); }, { threshold: .55 });
    io.observe(app);
  }
})();
