/* Lapis · Home dashboard: auto showcase tour (v2, simple) */
(function () {
  var app = document.querySelector('.v2_dashsec .v2_app');
  if (!app || app.__dt) return;
  app.__dt = 1;
  var EN = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;
  function t(it, en) { return EN ? en : it; }
  var main = app.querySelector('.v2_main');
  var rail = app.parentElement;
  var CDN = 'https://cdn.prod.website-files.com/6ac0d032fb0cd97884ba849a/';
  function logo(alt, fb) { var i = document.querySelector('img[alt="' + alt + '"]'); return i ? (i.currentSrc || i.src) : (fb ? CDN + fb : ''); }
  var L = {
    meta: logo('Meta'), google: logo('Google Ads', '6ad767111781999df83978b3_lp-d5bb243759.webp'),
    immo: logo('Immobiliare.it', '6ad76591a2f4ec5a2ae81def_lp-4b9cb48fc3.png'),
    idea: logo('idealista', '6ad7659158729a54f46b2ddd_lp-69c63ed1c0.png'),
    casa: CDN + '6ad76591cbb284699d94de73_lp-33db9b2d0a.png'
  };
  function ic(k) { return L[k] ? '<img class="dt_lg" src="' + L[k] + '" alt="" loading="lazy">' : '<i class="dt_lg dt_lgx"></i>'; }

  var css = ''
    + '.v2_dashsec .v2_app{position:relative}.v2_main{position:relative}'
    + '.v2_side>span.on{background:#EFECE8!important;color:#171717!important}'
    + '.v2_side>span.lp-v2_side_span{transition:background-color .25s,color .25s}'
    + '.dt_host{position:absolute;left:16px;right:16px;bottom:18px;top:14px;background:#fff!important;border:1px solid #ECEAE6;border-radius:12px;opacity:0;visibility:hidden;transform:translateY(6px);transition:opacity .4s ease,transform .4s ease,visibility 0s .4s;overflow:hidden;z-index:60;font-size:13px;color:#171717}'
    + '.dt_host.is-on{opacity:1;visibility:visible;transform:none;transition:opacity .4s ease,transform .4s ease}'
    + '.dt_hd{display:flex;align-items:center;justify-content:space-between;padding:18px 20px 14px;border-bottom:1px solid #F0EEEB}'
    + '.dt_hd b{font-size:16px;font-weight:600;letter-spacing:-.01em}.dt_hd small{color:#8A8884;font-size:12px}'
    + '.dt_tb{width:100%;border-collapse:collapse}.dt_tb th{font-weight:500;color:#8A8884;font-size:11.5px;text-align:left;padding:11px 20px;border-bottom:1px solid #F0EEEB;white-space:nowrap}'
    + '.dt_tb td{padding:13px 20px;border-bottom:1px solid #F5F4F1;white-space:nowrap}.dt_tb .r{text-align:right}'
    + '.dt_nm{display:flex;align-items:center;gap:10px}.dt_lg{width:20px;height:20px;border-radius:5px;object-fit:contain;flex:none}.dt_lgx{display:inline-block;background:#EEE}'
    + '.dt_st{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#3F3D39}.dt_st:before{content:"";width:7px;height:7px;border-radius:50%;background:#2EBD6B}.dt_st.is-p:before{background:#C9C6C0}.dt_st.is-w:before{background:#E0A43A}'
    + '.dt_grid{display:grid;gap:14px;padding:18px 20px}.dt_g3{grid-template-columns:repeat(3,1fr)}'
    + '.dt_card{border:1px solid #EFEDE9;border-radius:12px;padding:16px;background:#FCFCFB}.dt_card h5{margin:0 0 12px;font-size:14px;font-weight:600;display:flex;align-items:center;gap:8px}'
    + '.dt_kv{display:flex;justify-content:space-between;font-size:12.5px;color:#55524D;padding:5px 0}.dt_kv b{color:#171717;font-weight:600}'
    + '.dt_bar{height:6px;border-radius:6px;background:#F1EFEC;overflow:hidden;margin-top:10px}.dt_bar i{display:block;height:100%;border-radius:6px;background:#171717;width:0;transition:width 1s cubic-bezier(.2,.8,.2,1) .2s}.dt_host.is-on .dt_bar i{width:var(--w)}'
    /* landing: list + preview */
    + '.dt_lp{display:grid;grid-template-columns:1fr 1.05fr;height:calc(100% - 55px)}'
    + '.dt_lpl{border-right:1px solid #F0EEEB;padding:8px 0}'
    + '.dt_lpr{padding:14px 20px;display:flex;align-items:center;justify-content:center;background:#FAF9F7}'
    + '.dt_li{display:flex;align-items:center;gap:12px;padding:12px 20px;margin:2px 8px;border-radius:10px;transition:background .25s,box-shadow .25s}'
    + '.dt_li.on{background:#F4F2EF;box-shadow:inset 0 0 0 1px #E6E2DC}'
    + '.dt_th{width:44px;height:34px;border-radius:6px;flex:none;background:linear-gradient(135deg,var(--a),var(--b));position:relative;overflow:hidden}.dt_th:after{content:"";position:absolute;left:6px;right:14px;bottom:6px;height:4px;border-radius:2px;background:rgba(255,255,255,.75)}'
    + '.dt_li p{margin:0;flex:1;line-height:1.3}.dt_li p b{font-weight:600}.dt_li p small{display:block;color:#8A8884;font-size:11.5px}'
    + '.dt_li em{font-style:normal;font-weight:600;font-size:13px}.dt_li em small{display:block;font-weight:400;color:#8A8884;font-size:11px;text-align:right}'
    + '.dt_br{width:100%;max-width:380px;border-radius:12px;background:#fff;box-shadow:0 22px 44px -24px rgba(0,0,0,.35),0 0 0 1px #ECEAE6;overflow:hidden;opacity:0;transform:translateY(10px) scale(.98);transition:opacity .45s,transform .45s}'
    + '.dt_br.on{opacity:1;transform:none}'
    + '.dt_bt{display:flex;align-items:center;gap:6px;padding:8px 10px;border-bottom:1px solid #F0EEEB;font-size:11px;color:#8A8884}.dt_bt i{width:7px;height:7px;border-radius:50%;background:#E6E2DC}.dt_bt span{margin-left:6px;flex:1;background:#F4F2EF;border-radius:6px;padding:3px 8px}'
    + '.dt_hero{height:120px;background:linear-gradient(135deg,var(--a),var(--b));position:relative;padding:14px;color:#fff;display:flex;flex-direction:column;justify-content:flex-end}'
    + '.dt_hero b{font-size:15px;font-weight:600;letter-spacing:-.01em;text-shadow:0 1px 8px rgba(0,0,0,.25)}.dt_hero small{font-size:11px;opacity:.9}'
    + '.dt_frm{padding:12px 14px 14px;display:grid;gap:7px}.dt_frm i{display:block;height:24px;border-radius:6px;background:#F4F2EF;font-style:normal;font-size:10.5px;color:#A5A29C;padding:5px 8px}'
    + '.dt_frm u{display:block;text-decoration:none;text-align:center;height:28px;line-height:28px;border-radius:7px;background:#171717;color:#fff;font-size:11.5px;font-weight:600;transition:transform .2s}.dt_frm u.pr{transform:scale(.96);background:#2EBD6B}'
    /* calendar */
    + '.dt_cal{display:grid;grid-template-columns:48px repeat(5,1fr);padding:12px 20px 18px;font-size:11.5px;color:#8A8884}'
    + '.dt_cal .h{padding:6px 8px;color:#55524D;font-weight:600}.dt_cal .t{padding-top:3px;height:62px;border-top:1px solid #F3F2EF}.dt_cal .c{position:relative;border-top:1px solid #F3F2EF;border-left:1px solid #F3F2EF;height:62px}'
    + '.dt_ev{position:absolute;left:4px;right:4px;top:5px;border-radius:7px;padding:6px 8px;font-size:11px;line-height:1.3;color:#171717;background:#EAF7EF;border-left:3px solid #2EBD6B;opacity:0;transform:translateY(4px);transition:opacity .4s,transform .4s}.dt_ev small{display:block;color:#55524D}'
    + '.dt_host.is-on .dt_ev{opacity:1;transform:none}.dt_ev.g{background:#EEF3FE;border-color:#4C7BF3}.dt_ev.p{background:#FDF1EC;border-color:#B0573A}'
    /* focus */
    + '.dt_host.dt_focus [data-hi]:not(.dt_hi){filter:blur(1.2px);opacity:.45;transition:filter .4s,opacity .4s}'
    + '.dt_card.dt_hi{box-shadow:0 0 0 2px #171717}tr.dt_hi td{background:#FAF8F5}.dt_ev.dt_hi{box-shadow:0 0 0 2px #171717}'
    /* soft lower area + fade */
    + '.v2_main.dt_softlow .v2_row2{filter:blur(2.2px);opacity:.55;transition:filter .5s,opacity .5s}'
    + '.v2_app.dt_notpano .v2_bar{visibility:hidden}'
    + '.dt_fade{position:absolute;left:0;right:0;bottom:0;height:110px;pointer-events:none;z-index:70;background:linear-gradient(to bottom,rgba(251,250,248,0),rgba(251,250,248,.92) 75%);-webkit-backdrop-filter:blur(1.5px);backdrop-filter:blur(1.5px);-webkit-mask-image:linear-gradient(to bottom,transparent,#000 70%);mask-image:linear-gradient(to bottom,transparent,#000 70%)}'
    /* cursor */
    + '.dt_cur{position:absolute;left:0;top:0;width:26px;height:26px;z-index:90;pointer-events:none;transition:transform .9s cubic-bezier(.65,0,.25,1),opacity .3s;opacity:0;filter:drop-shadow(0 3px 6px rgba(0,0,0,.25))}.dt_cur.is-on{opacity:1}.dt_cur svg{display:block}'
    + '.dt_rip{position:absolute;width:34px;height:34px;margin:-17px 0 0 -17px;border-radius:50%;border:2px solid #B0573A;z-index:89;pointer-events:none;animation:dtrip .6s ease-out forwards}@keyframes dtrip{from{transform:scale(.3);opacity:1}to{transform:scale(1.4);opacity:0}}'
    /* stepper */
    + '.dt_stp{margin:0 auto 18px;max-width:760px;text-align:center}'
    + '.dt_tabs{display:inline-flex;gap:4px;padding:4px;border-radius:12px;background:#fff;border:1px solid #ECEAE6;box-shadow:0 10px 24px -18px rgba(0,0,0,.35)}'
    + '.dt_tab{position:relative;font-size:13px;font-weight:500;color:#73726E;padding:8px 14px;border-radius:9px;overflow:hidden;transition:color .3s,background .3s;white-space:nowrap}'
    + '.dt_tab b{font-weight:600;color:#B5B2AC;margin-right:6px;transition:color .3s}'
    + '.dt_tab.on{background:#171717;color:#fff}.dt_tab.on b{color:#E08B65}.dt_tab.done b{color:#2EBD6B}'
    + '.dt_tab i{position:absolute;left:0;bottom:0;height:2px;width:0;background:#E08B65}.dt_tab.on i{animation:dtprog var(--d) linear forwards}@keyframes dtprog{to{width:100%}}'
    + '.dt_cap{margin-top:12px;font-size:15px;color:#55524D;min-height:22px;transition:opacity .25s}.dt_cap b{color:#171717;font-weight:600}'
    + '@media (max-width:767px){.dt_tabs{display:flex;overflow-x:auto;max-width:100%;scrollbar-width:none}.dt_tabs::-webkit-scrollbar{display:none}.dt_tab{padding:7px 10px;font-size:12px}.dt_cap{font-size:13.5px;padding:0 8px}.dt_cur{display:none}.dt_host{left:8px;right:8px}.dt_tb th,.dt_tb td{padding:9px 10px}.dt_g3{grid-template-columns:1fr}.dt_lp{grid-template-columns:1fr}.dt_lpr{display:none}}'
    + '@media (prefers-reduced-motion:reduce){.dt_cur,.dt_host,.dt_bar i,.dt_br{transition:none!important}.dt_tab.on i{animation:none;width:100%}}';
  var st = document.createElement('style'); st.id = 'lpdashtour'; st.textContent = css; document.head.appendChild(st);

  function hd(title, sub) { return '<div class="dt_hd"><b>' + title + '</b><small>' + sub + '</small></div>'; }
  var demo = t('Dati di esempio', 'Sample data');
  var LP = [
    [t('Pagina del progetto', 'Project page'), '/progetto', '2.140', '4,5%', '#9DB7A6', '#5E7F6B', t('Residenze nel verde, a 10 minuti dal centro', 'Homes in the green, 10 minutes from the centre')],
    [t('Trilocali con terrazzo', 'Two-bed with terrace'), '/trilocali', '860', '4,8%', '#C9B79C', '#8C7356', t('Trilocali con terrazzo, consegna 2027', 'Two-bed homes with terrace, ready 2027')],
    [t('Attici', 'Penthouses'), '/attici', '410', '5,4%', '#A9B4C8', '#5D6B86', t('Attici con vista, ultimi disponibili', 'Penthouses with a view, last few left')],
    [t('Prenota una visita', 'Book a visit'), '/visita', '300', '6,0%', '#D6A58D', '#B0573A', t('Vieni a vedere il cantiere', 'Come and see the site')]
  ];
  var V = {
    Campagne: function () {
      var R = [['meta', 'Meta · Reels dal cantiere', 1, 118, 14, '58 €'], ['meta', t('Meta · Modulo render trilocali', 'Meta · Two-bed render form'), 1, 64, 7, '66 €'],
        ['google', t('Google · Ricerca “nuove costruzioni”', 'Google · Search “new builds”'), 1, 41, 9, '71 €'], ['google', t('Google · Nome del progetto', 'Google · Project name'), 1, 22, 3, '39 €'],
        ['meta', t('Meta · Retargeting visitatori', 'Meta · Site retargeting'), 0, 12, 1, '—']];
      return hd(t('Campagne', 'Campaigns'), demo) + '<table class="dt_tb"><tr><th>' + t('Campagna', 'Campaign') + '</th><th>' + t('Stato', 'Status') + '</th><th class="r">' + t('Contatti', 'Leads') + '</th><th class="r">' + t('Visite', 'Visits') + '</th><th class="r">' + t('Costo per visita', 'Cost per visit') + '</th></tr>'
        + R.map(function (r, i) { return '<tr data-hi' + (i === 0 ? ' data-k' : '') + '><td><span class="dt_nm">' + ic(r[0]) + r[1] + '</span></td><td><span class="dt_st' + (r[2] ? '' : ' is-p') + '">' + (r[2] ? t('Attiva', 'Live') : t('In pausa', 'Paused')) + '</span></td><td class="r">' + r[3] + '</td><td class="r"><b>' + r[4] + '</b></td><td class="r">' + r[5] + '</td></tr>'; }).join('') + '</table>';
    },
    Portali: function () {
      var P = [['immo', 'Immobiliare.it', 3, 38, 4, 62, 1], ['idea', 'idealista', 3, 19, 2, 31, 1], ['casa', 'Casa.it', 2, 9, 0, 14, 0]];
      return hd(t('Portali', 'Portals'), demo) + '<div class="dt_grid dt_g3">' + P.map(function (p, i) {
        return '<div class="dt_card" data-hi' + (i === 0 ? ' data-k' : '') + '><h5>' + ic(p[0]) + p[1] + '</h5><div class="dt_kv">' + t('Stato', 'Status') + ' <span class="dt_st' + (p[6] ? '' : ' is-w') + '">' + (p[6] ? 'Live' : t('In test', 'Testing')) + '</span></div><div class="dt_kv">' + t('Annunci attivi', 'Active listings') + ' <b>' + p[2] + '</b></div><div class="dt_kv">' + t('Contatti', 'Leads') + ' <b>' + p[3] + '</b></div><div class="dt_kv">' + t('Visite', 'Visits') + ' <b>' + p[4] + '</b></div><div class="dt_bar"><i style="--w:' + p[5] + '%"></i></div></div>';
      }).join('') + '</div>';
    },
    Landing: function () {
      return hd(t('Landing page', 'Landing pages'), demo) + '<div class="dt_lp"><div class="dt_lpl">' + LP.map(function (p, i) {
        return '<div class="dt_li" data-i="' + i + '"><span class="dt_th" style="--a:' + p[4] + ';--b:' + p[5] + '"></span><p><b>' + p[0] + '</b><small>' + p[1] + ' · ' + p[2] + ' ' + t('visitatori', 'visitors') + '</small></p><em>' + p[3] + '<small>' + t('conversione', 'conversion') + '</small></em></div>';
      }).join('') + '</div><div class="dt_lpr"><div class="dt_br"></div></div></div>';
    },
    Calendario: function () {
      var D = [t('Lun', 'Mon'), t('Mar', 'Tue'), t('Mer', 'Wed'), t('Gio', 'Thu'), t('Ven', 'Fri')], H = ['09:30', '11:00', '14:30', '16:00', '17:30'];
      var E = { '0-0': ['', 'A.G.', 'idealista'], '1-4': ['', 'S.P.', 'Google'], '3-0': ['p', 'M.R.', 'Instagram Reels'], '3-3': ['g', 'L.B.', 'Google Search'], '4-1': ['', 'F.C.', 'Immobiliare.it'], '2-2': ['g', 'Call', 'Google Meet'] };
      var h = '<div class="dt_cal"><span></span>' + D.map(function (d) { return '<span class="h">' + d + '</span>'; }).join('');
      H.forEach(function (hr, r) { h += '<span class="t">' + hr + '</span>'; for (var c = 0; c < 5; c++) { var e = E[c + '-' + r]; h += '<span class="c">' + (e ? '<span class="dt_ev ' + e[0] + '" data-hi' + (c === 3 && r === 0 ? ' data-k' : '') + ' style="transition-delay:' + (c * 70 + r * 40) + 'ms">' + (e[1] === 'Call' ? t('Call', 'Call') : t('Visita · ', 'Visit · ') + e[1]) + '<small>' + e[2] + '</small></span>' : '') + '</span>'; } });
      return hd(t('Calendario', 'Calendar'), t('Visite fissate, sincronizzate con il CRM', 'Booked visits, synced with the CRM')) + h + '</div>';
    }
  };
  function preview(i) {
    var p = LP[i];
    return '<div class="dt_bt"><i></i><i></i><i></i><span>' + t('tuoprogetto.it', 'yourproject.com') + p[1] + '</span></div><div class="dt_hero" style="--a:' + p[4] + ';--b:' + p[5] + '"><small>' + p[0] + '</small><b>' + p[6] + '</b></div><div class="dt_frm"><i>' + t('Nome', 'Name') + '</i><i>Email</i><i>' + t('Telefono', 'Phone') + '</i><u>' + t('Prenota una visita', 'Book a visit') + '</u></div>';
  }

  /* DOM */
  var host = document.createElement('div'); host.className = 'dt_host'; main.appendChild(host);
  var fade = document.createElement('div'); fade.className = 'dt_fade'; app.appendChild(fade);
  var cur = document.createElement('div'); cur.className = 'dt_cur'; cur.innerHTML = '<svg width="26" height="26" viewBox="0 0 24 24"><path d="M4 2l15 10.5-6.6 1.3 3.9 7.4-3 1.6-3.9-7.5L4 20z" fill="#171717" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>'; app.appendChild(cur);
  var IT = ['Panoramica', 'Campagne', 'Portali', 'Landing', 'Visite', 'Lead', 'Calendario', 'Budget', 'Azioni'];
  var side = [].slice.call(app.querySelectorAll('.v2_side > span')).filter(function (s) { return !/search/.test(s.className); });
  side.forEach(function (s, i) { s.__k = IT[i]; });
  function sideEl(k) { for (var i = 0; i < side.length; i++) if (side[i].__k === k) return side[i]; return null; }

  var STEPS = [
    ['Panoramica', t('Panoramica', 'Overview'), t('<b>Tutti i numeri in un colpo d’occhio:</b> visite, costo per visita e budget.', '<b>All the numbers at a glance:</b> visits, cost per visit and budget.'), 5200],
    ['Campagne', t('Campagne', 'Campaigns'), t('<b>Ogni campagna attiva</b>, con quanto costa portare una persona in visita.', '<b>Every live campaign</b>, with what it costs to bring someone to a visit.'), 4600],
    ['Portali', t('Portali', 'Portals'), t('<b>I portali su cui siamo live</b>, misurati come un canale.', '<b>The portals we are live on</b>, measured like a channel.'), 4600],
    ['Landing', t('Landing', 'Landing'), t('<b>Una pagina per ogni tipo di casa</b>, con il modulo per prenotare la visita.', '<b>One page for each type of home</b>, with the form to book a visit.'), 8600],
    ['Calendario', t('Calendario', 'Calendar'), t('<b>Le visite arrivano in calendario</b>, con la fonte di ogni contatto.', '<b>Visits land in the calendar</b>, with the source of every lead.'), 5200]
  ];
  var stp = document.createElement('div'); stp.className = 'dt_stp';
  stp.innerHTML = '<div class="dt_tabs">' + STEPS.map(function (s, i) { return '<span class="dt_tab"><b>' + (i + 1) + '</b>' + s[1] + '<i></i></span>'; }).join('') + '</div><div class="dt_cap"></div>';
  rail.insertBefore(stp, app);
  var tabs = [].slice.call(stp.querySelectorAll('.dt_tab')), cap = stp.querySelector('.dt_cap');

  function setCap(h) { cap.style.opacity = 0; setTimeout(function () { cap.innerHTML = h; cap.style.opacity = 1; }, 200); }
  function show(k) {
    side.forEach(function (s) { s.classList.toggle('on', s.__k === k); });
    var pano = k === 'Panoramica';
    app.classList.toggle('dt_notpano', !pano); main.classList.toggle('dt_softlow', pano);
    if (pano) { host.classList.remove('is-on', 'dt_focus'); return; }
    host.classList.remove('is-on', 'dt_focus'); host.innerHTML = V[k](); void host.offsetWidth; host.classList.add('is-on');
    var key = host.querySelector('[data-k]');
    if (key) timers.push(setTimeout(function () { host.classList.add('dt_focus'); key.classList.add('dt_hi'); }, 900));
  }
  function rel(el, fx) { var a = app.getBoundingClientRect(), b = el.getBoundingClientRect(); return [b.left - a.left + Math.min(b.width * (fx || .35), 60), b.top - a.top + b.height / 2]; }
  function moveTo(p) { cur.style.transform = 'translate(' + (p[0] - 3) + 'px,' + (p[1] - 3) + 'px)'; }
  function ripple(p) { var r = document.createElement('span'); r.className = 'dt_rip'; r.style.left = p[0] + 'px'; r.style.top = p[1] + 'px'; app.appendChild(r); setTimeout(function () { r.remove(); }, 650); }
  function clickOn(el, fx, after) { var p = rel(el, fx); moveTo(p); timers.push(setTimeout(function () { ripple(p); after && after(); }, 950)); }

  var timers = [], idx = 0, running = false, visible = false;
  function clear() { timers.forEach(clearTimeout); timers = []; }
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
  function landingDemo() {
    var items = host.querySelectorAll('.dt_li'), br = host.querySelector('.dt_br');
    if (!items.length || !br || window.innerWidth < 768) return;
    function open(i, at) {
      later(function () { clickOn(items[i], .3, function () {
        [].forEach.call(items, function (x) { x.classList.toggle('on', x === items[i]); });
        br.classList.remove('on'); setTimeout(function () { br.innerHTML = preview(i); br.classList.add('on'); }, 150);
      }); }, at);
    }
    open(1, 700); open(3, 3600);
    later(function () { var u = br.querySelector('u'); if (u) clickOn(u, .5, function () { u.classList.add('pr'); u.textContent = t('Visita prenotata ✓', 'Visit booked ✓'); }); }, 5900);
  }
  function run() {
    if (!running) return;
    var S = STEPS[idx];
    tabs.forEach(function (tb, i) { tb.classList.toggle('on', i === idx); tb.classList.toggle('done', i < idx); tb.style.setProperty('--d', S[3] + 'ms'); });
    var tb = tabs[idx], ii = tb.querySelector('i'); ii.style.animation = 'none'; void ii.offsetWidth; ii.style.animation = '';
    setCap(S[2]);
    var el = sideEl(S[0]);
    if (el) clickOn(el, .35, function () { show(S[0]); if (S[0] === 'Landing') landingDemo(); });
    later(function () { idx = (idx + 1) % STEPS.length; run(); }, S[3] + 950);
  }
  function start() { if (running) return; running = true; cur.classList.add('is-on'); var b = app.getBoundingClientRect(); cur.style.transition = 'none'; cur.style.transform = 'translate(' + (b.width * .55) + 'px,' + (b.height * .5) + 'px)'; void cur.offsetWidth; cur.style.transition = ''; run(); }
  function stop() { running = false; clear(); cur.classList.remove('is-on'); }

  main.classList.add('dt_softlow');
  tabs[0].classList.add('on'); cap.innerHTML = STEPS[0][2];
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { en.forEach(function (x) { visible = x.isIntersecting; if (visible) start(); else stop(); }); }, { threshold: .45 }).observe(app);
  } else start();
})();
