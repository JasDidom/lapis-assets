/* Lapis · Home dashboard: guided showcase (v3) — the pointer walks through the tool by itself */
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
    + '.v2_main.dt_softlow .v2_row2{filter:blur(2.2px);opacity:.55;transition:filter .5s,opacity .5s}'
    + '.dt_host{position:absolute;left:16px;right:16px;bottom:18px;top:14px;background:#fff!important;border:1px solid #ECEAE6;border-radius:12px;opacity:0;visibility:hidden;transform:translateY(6px);transition:opacity .4s,transform .4s,visibility 0s .4s;overflow:hidden;z-index:60;font-size:13px;color:#171717}'
    + '.dt_host.is-on{opacity:1;visibility:visible;transform:none;transition:opacity .4s,transform .4s}'
    + '.dt_hd{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 20px 14px;border-bottom:1px solid #F0EEEB;min-height:62px}'
    + '.dt_hd b{font-size:16px;font-weight:600;letter-spacing:-.01em}.dt_hd small{color:#8A8884;font-size:12px}'
    + '.dt_ic{width:20px;height:20px;border-radius:6px;display:inline-grid;place-items:center;flex:none;object-fit:contain}.dt_ig{background:radial-gradient(circle at 30% 110%,#FDD56A 0,#F45B3C 40%,#C232A3 70%,#6A3FD1 100%)}.dt_fb{background:#1877F2;border-radius:50%}'
    + '.dt_chips{display:flex;gap:6px}.dt_chip{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border-radius:999px;border:1px solid #E8E5E0;font-size:12.5px;color:#55524D;background:#fff;transition:all .25s}.dt_chip .dt_ic{width:16px;height:16px;border-radius:5px}.dt_chip.on{background:#171717;border-color:#171717;color:#fff}'
    + '.dt_tb{width:100%;border-collapse:collapse}.dt_tb th{font-weight:500;color:#8A8884;font-size:11.5px;text-align:left;padding:11px 20px;border-bottom:1px solid #F0EEEB;white-space:nowrap}'
    + '.dt_tb td{padding:12px 20px;border-bottom:1px solid #F5F4F1;white-space:nowrap;transition:opacity .35s,filter .35s}.dt_tb .r{text-align:right}'
    + '.dt_tb tr.off td{opacity:.18;filter:blur(1px)}'
    + '.dt_nm{display:flex;align-items:center;gap:10px}'
    + '.dt_st{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#3F3D39}.dt_st:before{content:"";width:7px;height:7px;border-radius:50%;background:#2EBD6B}.dt_st.is-p:before{background:#C9C6C0}'
    /* portals */
    + '.dt_pg{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;padding:16px 20px}'
    + '.dt_pc h5{display:flex;align-items:center;gap:8px;margin:0 0 10px;font-size:14px;font-weight:600}.dt_pc h5 span{margin-left:auto;font-size:11.5px;font-weight:500;color:#2EBD6B}'
    + '.dt_ls{border:1px solid #EFEDE9;border-radius:12px;overflow:hidden;background:#fff;margin-bottom:10px;transition:transform .3s,box-shadow .3s}'
    + '.dt_ls.dt_hi{transform:translateY(-3px);box-shadow:0 14px 28px -18px rgba(0,0,0,.45),0 0 0 2px #171717}'
    + '.dt_ls figure{margin:0;height:86px;background-size:cover;background-position:center;position:relative}.dt_ls figure em{position:absolute;left:8px;top:8px;font-style:normal;font-size:10.5px;font-weight:600;background:#fff;border-radius:6px;padding:2px 7px;display:inline-flex;align-items:center;gap:5px}.dt_ls figure em:before{content:"";width:6px;height:6px;border-radius:50%;background:#2EBD6B}'
    + '.dt_ls div{padding:9px 11px}.dt_ls b{display:block;font-size:12.5px;font-weight:600}.dt_ls small{display:flex;justify-content:space-between;color:#8A8884;font-size:11.5px;margin-top:3px}.dt_ls small i{font-style:normal;color:#171717;font-weight:600}'
    /* landing */
    + '.dt_lp{display:grid;grid-template-columns:.9fr 1.1fr;height:calc(100% - 62px)}'
    + '.dt_lpl{border-right:1px solid #F0EEEB;padding:10px 0}'
    + '.dt_li{display:flex;align-items:center;gap:12px;padding:12px 14px;margin:4px 10px;border-radius:10px;transition:background .25s,box-shadow .25s}.dt_li.on{background:#F4F2EF;box-shadow:inset 0 0 0 1px #E3DFD8}'
    + '.dt_li figure{margin:0;width:52px;height:38px;border-radius:7px;background-size:cover;background-position:center;flex:none}'
    + '.dt_li p{margin:0;flex:1;line-height:1.3}.dt_li p b{font-weight:600}.dt_li p small{display:block;color:#8A8884;font-size:11.5px}'
    + '.dt_li em{font-style:normal;font-weight:600}.dt_li em small{display:block;font-weight:400;color:#8A8884;font-size:11px;text-align:right}'
    + '.dt_lpr{padding:16px 20px;display:flex;align-items:center;justify-content:center;background:#FAF9F7}'
    + '.dt_br{width:100%;max-width:400px;border-radius:12px;background:#fff;box-shadow:0 24px 48px -26px rgba(0,0,0,.4),0 0 0 1px #ECEAE6;overflow:hidden;transition:opacity .35s,transform .35s}.dt_br.sw{opacity:0;transform:translateY(8px) scale(.98)}'
    + '.dt_bt{display:flex;align-items:center;gap:5px;padding:8px 10px;border-bottom:1px solid #F0EEEB;font-size:10.5px;color:#8A8884}.dt_bt i{width:7px;height:7px;border-radius:50%;background:#E6E2DC}.dt_bt span{margin-left:6px;flex:1;background:#F4F2EF;border-radius:6px;padding:3px 8px}'
    + '.dt_hero{height:150px;background-size:cover;background-position:center;position:relative;display:flex;flex-direction:column;justify-content:flex-end;padding:14px;color:#fff}.dt_hero:before{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55),rgba(0,0,0,0) 65%)}'
    + '.dt_hero *{position:relative}.dt_hero small{font-size:10.5px;opacity:.9;letter-spacing:.04em;text-transform:uppercase}.dt_hero b{font-size:16px;font-weight:600;letter-spacing:-.01em}'
    + '.dt_bd{padding:12px 14px 14px;display:grid;gap:8px}.dt_gal{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.dt_gal i{height:44px;border-radius:6px;background-size:cover;background-position:center}'
    + '.dt_f{display:block;height:26px;border-radius:7px;background:#F4F2EF;font-style:normal;font-size:10.5px;color:#A5A29C;padding:6px 9px}'
    + '.dt_cta{display:block;height:30px;line-height:30px;text-align:center;border-radius:8px;background:#171717;color:#fff;font-size:11.5px;font-weight:600;transition:background .25s,transform .2s}.dt_cta.ok{background:#2EBD6B;transform:scale(.98)}'
    + '.dt_bro{display:flex;gap:12px;align-items:center}.dt_bro figure{margin:0;width:70px;height:92px;border-radius:4px 8px 8px 4px;background-size:cover;background-position:center;box-shadow:4px 6px 14px -6px rgba(0,0,0,.45);position:relative;flex:none}.dt_bro figure:after{content:"BROCHURE";position:absolute;left:0;right:0;bottom:6px;text-align:center;font-size:7px;letter-spacing:.14em;color:#fff;font-weight:700}'
    + '.dt_bro p{margin:0;font-size:12px;line-height:1.4;color:#55524D}.dt_bro p b{display:block;color:#171717;font-size:13px}'
    /* visits */
    + '.dt_vk{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:16px 20px 6px}'
    + '.dt_k{border:1px solid #EFEDE9;border-radius:12px;padding:14px;background:#FCFCFB}.dt_k small{display:block;color:#8A8884;font-size:11.5px}.dt_k b{display:block;font-size:26px;font-weight:700;letter-spacing:-.03em;margin-top:4px}.dt_k em{font-style:normal;font-size:11.5px;color:#2EBD6B;font-weight:600}'
    + '.dt_vb{display:flex;align-items:flex-end;gap:10px;height:150px;padding:12px 20px 0;margin:0 20px;border-bottom:1px solid #F0EEEB}'
    + '.dt_vb div{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:6px}.dt_vb i{display:block;width:100%;max-width:44px;border-radius:7px 7px 2px 2px;background:#E8E4DE;height:0;transition:height .8s cubic-bezier(.2,.8,.2,1),background .25s}.dt_vb div.dt_hi i{background:#171717}'
    + '.dt_host.is-on .dt_vb i{height:var(--h)}.dt_vb span{font-size:11px;color:#8A8884;font-weight:600}.dt_vl{display:flex;justify-content:space-between;padding:8px 20px 0;margin:0 20px;font-size:11px;color:#8A8884}'
    /* calendar */
    + '.dt_cal{display:grid;grid-template-columns:46px repeat(5,1fr);padding:10px 20px 16px;font-size:11.5px;color:#8A8884;position:relative}'
    + '.dt_cal .h{padding:6px 8px;color:#55524D;font-weight:600}.dt_cal .t{padding-top:3px;height:60px;border-top:1px solid #F3F2EF}.dt_cal .c{position:relative;border-top:1px solid #F3F2EF;border-left:1px solid #F3F2EF;height:60px}'
    + '.dt_ev{position:absolute;left:4px;right:4px;top:5px;border-radius:7px;padding:6px 8px;font-size:11px;line-height:1.3;color:#171717;background:#EAF7EF;border-left:3px solid #2EBD6B;transition:box-shadow .25s,transform .25s}.dt_ev small{display:block;color:#55524D}'
    + '.dt_ev.g{background:#EEF3FE;border-color:#4C7BF3}.dt_ev.p{background:#FDF1EC;border-color:#B0573A}.dt_ev.dt_hi{box-shadow:0 0 0 2px #171717;transform:scale(1.03)}'
    + '.dt_pop{position:absolute;z-index:5;width:270px;background:#fff;border-radius:14px;box-shadow:0 26px 50px -24px rgba(0,0,0,.5),0 0 0 1px #ECEAE6;padding:14px 16px;opacity:0;transform:translateY(6px) scale(.98);transition:opacity .3s,transform .3s;pointer-events:none}'
    + '.dt_pop.on{opacity:1;transform:none}.dt_pop h6{margin:0 0 2px;font-size:14px;font-weight:600;color:#171717}.dt_pop>small{color:#8A8884;font-size:11.5px}'
    + '.dt_pop dl{margin:10px 0 0;display:grid;grid-template-columns:auto 1fr;gap:6px 12px;font-size:12px}.dt_pop dt{color:#8A8884}.dt_pop dd{margin:0;color:#171717;font-weight:500}'
    + '.dt_pop .tag{display:inline-flex;align-items:center;gap:6px}.dt_pop .tag .dt_ic{width:15px;height:15px;border-radius:5px}'
    /* fade + cursor */
    + '.dt_fade{position:absolute;left:0;right:0;bottom:0;height:100px;pointer-events:none;z-index:70;background:linear-gradient(to bottom,rgba(251,250,248,0),rgba(251,250,248,.9) 78%);-webkit-mask-image:linear-gradient(to bottom,transparent,#000 70%);mask-image:linear-gradient(to bottom,transparent,#000 70%)}'
    + '.dt_cur{position:absolute;left:0;top:0;width:30px;height:30px;z-index:90;pointer-events:none;opacity:0;transition:opacity .4s;will-change:transform}.dt_cur.is-on{opacity:1}'
    + '.dt_cur svg{display:block;filter:drop-shadow(0 4px 8px rgba(0,0,0,.3))}.dt_cur:before{content:"";position:absolute;left:-9px;top:-9px;width:30px;height:30px;border-radius:50%;background:rgba(176,87,58,.18);transform:scale(.6);transition:transform .25s}.dt_cur.dn:before{transform:scale(1.2)}.dt_cur.dn svg{transform:scale(.88);transition:transform .15s}'
    + '.dt_rip{position:absolute;width:38px;height:38px;margin:-19px 0 0 -19px;border-radius:50%;border:2px solid #B0573A;z-index:89;pointer-events:none;animation:dtrip .6s ease-out forwards}@keyframes dtrip{from{transform:scale(.3);opacity:1}to{transform:scale(1.5);opacity:0}}'
    + '@media (max-width:767px){.dt_cur{width:22px;height:22px}.dt_host{left:8px;right:8px}.dt_tb th,.dt_tb td{padding:9px 10px}.dt_pg{grid-template-columns:1fr 1fr}.dt_pg>div:nth-child(3){display:none}.dt_lp{grid-template-columns:1fr}.dt_lpl{display:none}.dt_chips{display:none}}'
    + '@media (prefers-reduced-motion:reduce){.dt_cur,.dt_host,.dt_br,.dt_vb i{transition:none!important}}';
  var st = document.createElement('style'); st.id = 'lpdashtour'; st.textContent = css; document.head.appendChild(st);

  function hd(title, right) { return '<div class="dt_hd"><b>' + title + '</b>' + (right || '') + '</div>'; }

  /* ---------- data ---------- */
  var CAMP = [
    ['ig', 'Instagram', 'Reels dal cantiere', 1, 118, 14, '58 €'],
    ['ig', 'Instagram', t('Storie · render trilocali', 'Stories · two-bed renders'), 1, 52, 5, '64 €'],
    ['fb', 'Facebook', t('Modulo contatto · attici', 'Lead form · penthouses'), 1, 38, 2, '69 €'],
    ['fb', 'Facebook', t('Retargeting visitatori', 'Site retargeting'), 0, 12, 0, '—'],
    ['g', 'Google Ads', t('Ricerca “nuove costruzioni”', 'Search “new builds”'), 1, 41, 9, '71 €'],
    ['g', 'Google Ads', t('Nome del progetto', 'Project name'), 1, 22, 3, '39 €']
  ];
  var LAND = [
    { k: t('Pagina del progetto', 'Project page'), s: t('Classica: render, gallery, visita', 'Classic: renders, gallery, visit'), u: '/', c: '4,5%', img: 'render-photo.webp' },
    { k: t('Scarica la brochure', 'Download the brochure'), s: t('Solo brochure in cambio dell’email', 'Brochure in exchange for an email'), u: '/brochure', c: '7,2%', img: 'site-render-photo-v2.webp' },
    { k: t('Lascia il contatto', 'Leave your details'), s: t('Tre campi, ti richiamiamo', 'Three fields, we call you back'), u: '/contatto', c: '6,1%', img: 'photo-c.webp' }
  ];
  function landing(i) {
    var p = LAND[i], h = '<div class="dt_bt"><i></i><i></i><i></i><span>' + t('tuoprogetto.it', 'yourproject.com') + p.u + '</span></div>';
    if (i === 0) return h + '<div class="dt_hero" style="background-image:url(' + IMG + p.img + ')"><small>' + t('Nuove residenze', 'New homes') + '</small><b>' + t('Residenze nel verde, a 10 minuti dal centro', 'Homes in the green, 10 minutes from the centre') + '</b></div><div class="dt_bd"><div class="dt_gal"><i style="background-image:url(' + IMG + 'site-hd-int-render.webp)"></i><i style="background-image:url(' + IMG + 'photo-f.webp)"></i><i style="background-image:url(' + IMG + 'site-tp-ext-render.webp)"></i></div><span class="dt_cta">' + t('Prenota una visita', 'Book a visit') + '</span></div>';
    if (i === 1) return h + '<div class="dt_hero" style="height:96px;background-image:url(' + IMG + p.img + ')"><b>' + t('La brochure del progetto', 'The project brochure') + '</b></div><div class="dt_bd"><div class="dt_bro"><figure style="background-image:url(' + IMG + 'photo-e.webp)"></figure><p><b>' + t('24 pagine, PDF', '24 pages, PDF') + '</b>' + t('Planimetrie, capitolato e prezzi. Te la inviamo subito.', 'Floor plans, specs and prices. Sent straight away.') + '</p></div><i class="dt_f">Email</i><span class="dt_cta">' + t('Scarica la brochure', 'Download the brochure') + '</span></div>';
    return h + '<div class="dt_hero" style="height:110px;background-image:url(' + IMG + p.img + ')"><b>' + t('Parliamone: ti richiamiamo noi', 'Let’s talk: we’ll call you back') + '</b></div><div class="dt_bd"><i class="dt_f">' + t('Nome', 'Name') + '</i><i class="dt_f">' + t('Telefono', 'Phone') + '</i><i class="dt_f">Email</i><span class="dt_cta">' + t('Richiamami', 'Call me back') + '</span></div>';
  }
  var V = {
    Campagne: function () {
      var chips = [['all', t('Tutte', 'All'), ''], ['ig', 'Instagram', ICO.ig], ['fb', 'Facebook', ICO.fb], ['g', 'Google Ads', ICO.g]];
      return hd(t('Campagne', 'Campaigns'), '<div class="dt_chips">' + chips.map(function (c, i) { return '<span class="dt_chip' + (i === 0 ? ' on' : '') + '" data-f="' + c[0] + '">' + c[2] + c[1] + '</span>'; }).join('') + '</div>')
        + '<table class="dt_tb"><tr><th>' + t('Campagna', 'Campaign') + '</th><th>' + t('Canale', 'Channel') + '</th><th>' + t('Stato', 'Status') + '</th><th class="r">' + t('Contatti', 'Leads') + '</th><th class="r">' + t('Visite', 'Visits') + '</th><th class="r">' + t('Costo per visita', 'Cost per visit') + '</th></tr>'
        + CAMP.map(function (r) { return '<tr data-c="' + r[0] + '"><td><span class="dt_nm">' + ICO[r[0]] + r[2] + '</span></td><td>' + r[1] + '</td><td><span class="dt_st' + (r[3] ? '' : ' is-p') + '">' + (r[3] ? t('Attiva', 'Live') : t('In pausa', 'Paused')) + '</span></td><td class="r">' + r[4] + '</td><td class="r"><b>' + r[5] + '</b></td><td class="r">' + r[6] + '</td></tr>'; }).join('') + '</table>';
    },
    Portali: function () {
      var P = [['immo', 'Immobiliare.it', [['photo-c.webp', t('Trilocale con terrazzo', 'Two-bed with terrace'), '289.000 €', 21], ['photo-d.webp', t('Attico con vista', 'Penthouse with a view'), '445.000 €', 17]]],
        ['idea', 'idealista', [['photo-b.webp', t('Bilocale, piano alto', 'One-bed, top floor'), '219.000 €', 11], ['site-tp-ext-render.webp', t('Villa a schiera', 'Townhouse'), '398.000 €', 8]]],
        ['casa', 'Casa.it', [['photo-a.webp', t('Quadrilocale con giardino', 'Three-bed with garden'), '352.000 €', 9]]]];
      return hd(t('Portali', 'Portals'), '<small>' + t('Annunci live', 'Live listings') + '</small>') + '<div class="dt_pg">' + P.map(function (p) {
        return '<div class="dt_pc"><h5>' + lg(p[0]) + p[1] + '<span>' + p[2].length + ' live</span></h5>' + p[2].map(function (l) { return '<div class="dt_ls"><figure style="background-image:url(' + IMG + l[0] + ')"><em>Live</em></figure><div><b>' + l[1] + '</b><small>' + l[2] + '<i>' + l[3] + ' ' + t('contatti', 'leads') + '</i></small></div></div>'; }).join('') + '</div>';
      }).join('') + '</div>';
    },
    Landing: function () {
      return hd(t('Landing page', 'Landing pages'), '<small>' + t('3 pagine attive', '3 live pages') + '</small>') + '<div class="dt_lp"><div class="dt_lpl">' + LAND.map(function (p, i) {
        return '<div class="dt_li' + (i === 0 ? ' on' : '') + '"><figure style="background-image:url(' + IMG + p.img + ')"></figure><p><b>' + p.k + '</b><small>' + p.s + '</small></p><em>' + p.c + '<small>' + t('conversione', 'conversion') + '</small></em></div>';
      }).join('') + '</div><div class="dt_lpr"><div class="dt_br">' + landing(0) + '</div></div></div>';
    },
    Visite: function () {
      var W = [[t('S1', 'W1'), 5], [t('S2', 'W2'), 8], [t('S3', 'W3'), 7], [t('S4', 'W4'), 10], [t('S5', 'W5'), 12]];
      return hd(t('Visite in ufficio vendite', 'Sales-office visits'), '<small>' + t('Questo mese', 'This month') + '</small>')
        + '<div class="dt_vk"><div class="dt_k"><small>' + t('Visite questo mese', 'Visits this month') + '</small><b>42</b><em>+75% ' + t('da gennaio', 'since January') + '</em></div><div class="dt_k"><small>' + t('Già effettuate', 'Already done') + '</small><b>33</b></div><div class="dt_k"><small>' + t('In calendario', 'Booked') + '</small><b>9</b></div></div>'
        + '<div class="dt_vb">' + W.map(function (w, i) { return '<div' + (i === 4 ? ' data-k' : '') + '><span>' + w[1] + '</span><i style="--h:' + (w[1] * 9) + 'px;transition-delay:' + (i * 90) + 'ms"></i></div>'; }).join('') + '</div><div class="dt_vl">' + W.map(function (w) { return '<span>' + w[0] + '</span>'; }).join('') + '</div>';
    },
    Calendario: function () {
      var D = [t('Lun 11', 'Mon 11'), t('Mar 12', 'Tue 12'), t('Mer 13', 'Wed 13'), t('Gio 14', 'Thu 14'), t('Ven 15', 'Fri 15')], H = ['09:30', '11:00', '14:30', '16:00', '17:30'];
      var E = { '0-0': ['', 'A.G.', 'idealista'], '1-4': ['', 'S.P.', 'Google Ads'], '3-0': ['p', 'M.R.', 'Instagram'], '3-3': ['g', 'L.B.', 'Google Ads'], '4-1': ['', 'F.C.', 'Immobiliare.it'], '2-2': ['', 'E.M.', 'Facebook'] };
      var h = '<div class="dt_cal"><span></span>' + D.map(function (d) { return '<span class="h">' + d + '</span>'; }).join('');
      H.forEach(function (hr, r) { h += '<span class="t">' + hr + '</span>'; for (var c = 0; c < 5; c++) { var e = E[c + '-' + r]; h += '<span class="c">' + (e ? '<span class="dt_ev ' + e[0] + '"' + (c === 3 && r === 0 ? ' data-k' : '') + '>' + t('Visita · ', 'Visit · ') + e[1] + '<small>' + e[2] + '</small></span>' : '') + '</span>'; } });
      h += '<div class="dt_pop"><h6>' + t('Visita in ufficio vendite', 'Sales-office visit') + '</h6><small>' + t('Giovedì 14, 10:30 – 11:15', 'Thursday 14, 10:30 – 11:15') + '</small><dl>'
        + '<dt>' + t('Cliente', 'Client') + '</dt><dd>Marco R.</dd>'
        + '<dt>' + t('Dove', 'Where') + '</dt><dd>' + t('Ufficio vendite in cantiere', 'On-site sales office') + '</dd>'
        + '<dt>' + t('Interesse', 'Interested in') + '</dt><dd>' + t('Trilocale con terrazzo', 'Two-bed with terrace') + '</dd>'
        + '<dt>' + t('Budget', 'Budget') + '</dt><dd>280 – 310k €</dd>'
        + '<dt>' + t('Fonte', 'Source') + '</dt><dd><span class="tag">' + ICO.ig + 'Reels dal cantiere</span></dd>'
        + '<dt>' + t('Note', 'Notes') + '</dt><dd>' + t('Prima casa, vuole vedere l’esposizione', 'First home, wants to see the orientation') + '</dd></dl></div>';
      return hd(t('Calendario', 'Calendar'), '<small>' + t('Sincronizzato con il CRM', 'Synced with the CRM') + '</small>') + h + '</div>';
    }
  };

  /* ---------- DOM + pointer ---------- */
  var host = document.createElement('div'); host.className = 'dt_host'; main.appendChild(host);
  var fade = document.createElement('div'); fade.className = 'dt_fade'; app.appendChild(fade);
  var cur = document.createElement('div'); cur.className = 'dt_cur'; cur.innerHTML = '<svg width="30" height="30" viewBox="0 0 24 24"><path d="M4 2l15 10.5-6.6 1.3 3.9 7.4-3 1.6-3.9-7.5L4 20z" fill="#171717" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>'; app.appendChild(cur);
  var IT = ['Panoramica', 'Campagne', 'Portali', 'Landing', 'Visite', 'Lead', 'Calendario', 'Budget', 'Azioni'];
  var side = [].slice.call(app.querySelectorAll('.v2_side > span')).filter(function (s) { return !/search/.test(s.className); });
  side.forEach(function (s, i) { s.__k = IT[i]; });
  function sideEl(k) { for (var i = 0; i < side.length; i++) if (side[i].__k === k) return side[i]; return null; }

  var P = { x: 0, y: 0 }, anim = null;
  function place(x, y) { P.x = x; P.y = y; cur.style.transform = 'translate3d(' + (x - 4) + 'px,' + (y - 3) + 'px,0)'; }
  function glide(x, y, ms, done) {
    if (anim) cancelAnimationFrame(anim);
    var x0 = P.x, y0 = P.y, t0 = null, dx = x - x0, dy = y - y0;
    var cx = x0 + dx * .5 - dy * .12, cy = y0 + dy * .5 + dx * .08; /* slight arc, feels human */
    function f(ts) {
      if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / ms), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      var ix = (1 - e) * (1 - e) * x0 + 2 * (1 - e) * e * cx + e * e * x, iy = (1 - e) * (1 - e) * y0 + 2 * (1 - e) * e * cy + e * e * y;
      place(ix, iy); if (k < 1) anim = requestAnimationFrame(f); else { anim = null; done && done(); }
    }
    anim = requestAnimationFrame(f);
  }
  function pt(el, fx, fy) { var a = app.getBoundingClientRect(), b = el.getBoundingClientRect(); return [b.left - a.left + b.width * (fx == null ? .3 : fx), b.top - a.top + b.height * (fy == null ? .5 : fy)]; }
  function tap(after) {
    cur.classList.add('dn'); var r = document.createElement('span'); r.className = 'dt_rip'; r.style.left = P.x + 'px'; r.style.top = P.y + 'px'; app.appendChild(r);
    setTimeout(function () { cur.classList.remove('dn'); r.remove(); }, 600); after && after();
  }

  /* ---------- script of the tour ---------- */
  var Q = [], qi = 0, timer = null, running = false;
  function wait(ms) { Q.push(function (n) { timer = setTimeout(n, ms); }); }
  function go(getEl, fx, fy, ms) { Q.push(function (n) { var el = getEl(); if (!el) return n(); var p = pt(el, fx, fy); glide(p[0], p[1], ms || 900, n); }); }
  function click(fn) { Q.push(function (n) { tap(fn); timer = setTimeout(n, 450); }); }
  function act(fn) { Q.push(function (n) { fn(); n(); }); }
  function $(s) { return function () { return host.querySelector(s) || app.querySelector(s); }; }

  function show(k) {
    side.forEach(function (s) { s.classList.toggle('on', s.__k === k); });
    var pano = k === 'Panoramica';
    app.classList.toggle('dt_notpano', !pano); main.classList.toggle('dt_softlow', pano);
    host.classList.remove('is-on');
    if (pano) return;
    host.innerHTML = V[k](); void host.offsetWidth; host.classList.add('is-on');
  }
  function nav(k) { go(function () { return sideEl(k); }, .32, .5, 1000); click(function () { show(k); }); wait(700); }
  function filter(f) {
    go($('.dt_chip[data-f="' + f + '"]'), .5, .5, 750);
    click(function () {
      [].forEach.call(host.querySelectorAll('.dt_chip'), function (c) { c.classList.toggle('on', c.getAttribute('data-f') === f); });
      [].forEach.call(host.querySelectorAll('.dt_tb tr[data-c]'), function (r) { r.classList.toggle('off', f !== 'all' && r.getAttribute('data-c') !== f); });
    });
    wait(1300);
  }
  function openLanding(i) {
    go(function () { return host.querySelectorAll('.dt_li')[i]; }, .45, .5, 800);
    click(function () {
      var its = host.querySelectorAll('.dt_li'), br = host.querySelector('.dt_br');
      [].forEach.call(its, function (x, j) { x.classList.toggle('on', j === i); });
      br.classList.add('sw'); setTimeout(function () { br.innerHTML = landing(i); br.classList.remove('sw'); }, 300);
    });
    wait(1700);
  }
  function sweepChart() {
    Q.push(function (n) {
      var h = app.querySelector('.d3_hit'); if (!h) return n();
      var a = app.getBoundingClientRect(), b = h.getBoundingClientRect(), y = b.top + b.height * .45;
      glide(b.left - a.left + b.width * .05, y - a.top, 900, function () {
        var t0 = null, D = 3200;
        function f(ts) {
          if (!running) return; if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / D), x = b.left + b.width * (.05 + .9 * k);
          place(x - a.left, y - a.top);
          try { h.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true })); } catch (e) {}
          if (k < 1) anim = requestAnimationFrame(f); else { anim = null; n(); }
        }
        anim = requestAnimationFrame(f);
      });
    });
  }
  function leaveChart() { act(function () { var h = app.querySelector('.d3_hit'); if (h) try { h.dispatchEvent(new PointerEvent('pointerleave', { bubbles: false })); } catch (e) {} }); }

  /* 1 Panoramica: the pointer follows the visits from left to right */
  act(function () { show('Panoramica'); });
  sweepChart(); wait(600); leaveChart();
  go($('.v2_tbl'), .5, .55, 900); wait(1200);
  /* 2 Campagne, split by channel, with filters */
  nav('Campagne'); wait(800);
  filter('ig'); filter('fb'); filter('g'); filter('all'); wait(400);
  /* 3 Portali, live listings */
  nav('Portali');
  go(function () { return host.querySelectorAll('.dt_ls')[0]; }, .5, .45, 800); act(function () { var l = host.querySelectorAll('.dt_ls'); l[0] && l[0].classList.add('dt_hi'); }); wait(1300);
  go(function () { return host.querySelectorAll('.dt_ls')[2]; }, .5, .45, 800); act(function () { var l = host.querySelectorAll('.dt_ls'); l[0] && l[0].classList.remove('dt_hi'); l[2] && l[2].classList.add('dt_hi'); }); wait(1300);
  go(function () { return host.querySelectorAll('.dt_ls')[4]; }, .5, .45, 800); act(function () { var l = host.querySelectorAll('.dt_ls'); l[2] && l[2].classList.remove('dt_hi'); l[4] && l[4].classList.add('dt_hi'); }); wait(1300);
  /* 4 Landing pages: classic, brochure, contact */
  nav('Landing'); wait(1000);
  openLanding(1); openLanding(2);
  go($('.dt_br .dt_cta'), .5, .5, 800); click(function () { var c = host.querySelector('.dt_br .dt_cta'); if (c) { c.classList.add('ok'); c.textContent = t('Richiesta inviata ✓', 'Request sent ✓'); } }); wait(1500);
  /* 5 Visite */
  nav('Visite'); wait(600);
  go($('.dt_vb [data-k]'), .5, .7, 900); act(function () { var b = host.querySelector('.dt_vb [data-k]'); b && b.classList.add('dt_hi'); }); wait(1800);
  /* 6 Calendario, open one visit */
  nav('Calendario'); wait(600);
  go($('.dt_ev[data-k]'), .5, .5, 900);
  click(function () {
    var e = host.querySelector('.dt_ev[data-k]'), pop = host.querySelector('.dt_pop'), cal = host.querySelector('.dt_cal'); if (!e || !pop || !cal) return;
    e.classList.add('dt_hi'); var c = cal.getBoundingClientRect(), r = e.getBoundingClientRect();
    var left = r.left - c.left - 280; if (left < 10) left = r.right - c.left + 10;
    pop.style.left = left + 'px'; pop.style.top = Math.max(6, r.top - c.top - 6) + 'px'; pop.classList.add('on');
  });
  wait(4200);
  act(function () { var p = host.querySelector('.dt_pop'); p && p.classList.remove('on'); });
  /* back to the start */
  nav('Panoramica'); wait(500);

  function step() { if (!running) return; var f = Q[qi]; qi = (qi + 1) % Q.length; f(step); }
  function start() {
    if (running) return; running = true; cur.classList.add('is-on');
    if (!P.x) { var b = app.getBoundingClientRect(); place(b.width * .5, b.height * .55); }
    step();
  }
  function stop() { running = false; clearTimeout(timer); if (anim) cancelAnimationFrame(anim); anim = null; }

  main.classList.add('dt_softlow');
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) start(); else stop(); }); }, { threshold: .35 }).observe(app);
  } else start();
})();
