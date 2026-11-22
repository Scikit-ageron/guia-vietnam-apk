// Generado por scripts/sw-plugin.mjs. No editar.
const VERSION = "vn-app-1795382676291"
const PRECACHE = ["./","./assets/index-3xg480OD.js","./assets/App-Ck-JWLJz.js","./assets/Billetes-CLLXH7B1.js","./assets/Checklist-CPWXTwaI.js","./assets/Contadores-C-bV6qZz.js","./assets/NuevoApp-Bg8Fo1cE.js","./assets/Resumen-DQ-mRMpA.js","./assets/SubidaFotos-Bc3S6hDB.js","./assets/Timan-BFb4FZvH.js","./assets/Trivial-CRfh3kln.js","./assets/bag-handle-outline-CLN1uFhD.js","./assets/calle-DI3aVzuL.js","./assets/cartera-BwW8OzRF.js","./assets/datos-DCzGd-dH.js","./assets/datos-Dg0EpIMo.js","./assets/diario-DlRLDjsQ.js","./assets/estado-cpSx1KkL.js","./assets/home-outline-BVDZ6e9d.js","./assets/images-outline-Bs1tlSRt.js","./assets/jsx-runtime-D3jfb0Ew.js","./assets/juegos-CIEDPwXJ.js","./assets/leaflet-BNz8SCBc.js","./assets/mapa-CBz9KpuI.js","./assets/ruta-UPq0mmUE.js","./assets/rutas-BfM-gVJW.js","./assets/sitios-C8fDZk9m.js","./assets/sitios-DtqVD0JL.js","./assets/sitios-s3gOfxTW.js","./assets/speech-BkscH83W.js","./assets/web-BeoIvxzF.js","./assets/web-Cv0rDj1j.js","./assets/web-MUAv8aQR.js","./assets/web-xzjw7jlO.js","./assets/App-B7XIAegQ.css","./assets/NuevoApp-CWMM1Lli.css","./assets/Trivial-BAg7IFrp.css","./assets/calle-Bi-db8m6.css","./assets/cartera-7bJc7-Un.css","./assets/diario-DoRHBuOE.css","./assets/dish-banh-cuon-Dp__Z52i.webp","./assets/dish-banh-da-cua-Dk87Qpj_.webp","./assets/dish-banh-mi-E74YQoGp.webp","./assets/dish-banh-mi-phuong-DOvlRF31.webp","./assets/dish-banh-tom-DYcheVH-.webp","./assets/dish-banh-trang-cuon-BwkZ9M_a.webp","./assets/dish-banh-xeo-BQ56aGri.webp","./assets/dish-be-be-Dl5YKf5n.webp","./assets/dish-bia-hoi-C9Ayv1be.webp","./assets/dish-bun-cha-c2pUM6w3.webp","./assets/dish-bun-cha-ca-B-AOp0lI.webp","./assets/dish-bun-dau-OXup4GqZ.webp","./assets/dish-bun-rieu-Dxb4Fz5R.webp","./assets/dish-bun-thang-7lT7n_zg.webp","./assets/dish-ca-phe-cot-dua-BXQ81o9G.webp","./assets/dish-ca-phe-muoi-DtO4hfC_.webp","./assets/dish-ca-phe-sua-da-BXDZMeE5.webp","./assets/dish-ca-phe-trung-hPCH892b.webp","./assets/dish-cao-lau-DrawQr0W.webp","./assets/dish-cha-ca-CPSuXX6W.webp","./assets/dish-chanh-day-CyrezURs.webp","./assets/dish-che-Bhce3kQJ.webp","./assets/dish-chom-chom-C-zAe2T5.webp","./assets/dish-com-chay-DnmL8e0y.webp","./assets/dish-com-ga-CelQIWJb.webp","./assets/dish-com-lam-DLIJ1NtX.webp","./assets/dish-de-nui-CPwkYupw.webp","./assets/dish-goi-ca-nam-o-CsM0AjJn.webp","./assets/dish-hoanh-thanh-fAgwxQ8y.webp","./assets/dish-lau-thai-BzOvtVTc.webp","./assets/dish-mang-cut-B9H9SAI-.webp","./assets/dish-mi-quang-CssBkQEQ.webp","./assets/dish-mit-DHivLnqw.webp","./assets/dish-nem-ran-DE8PW639.webp","./assets/dish-nuoc-dua-lkiIdilD.webp","./assets/dish-nuoc-mia-D2O1vwlF.webp","./assets/dish-oc-4YR6kEGm.webp","./assets/dish-pho-bo-D-3xklqP.webp","./assets/dish-pho-ga-CztZqYPy.webp","./assets/dish-ruou-ran-Bb7TcC3-.webp","./assets/dish-sau-rieng-D6jAMFWV.webp","./assets/dish-sinh-to-bo-BBwvNk2q.webp","./assets/dish-so-diep-DPIibuSX.webp","./assets/dish-thang-co-BwmsGMy8.webp","./assets/dish-thanh-long-C6FmSnHU.webp","./assets/dish-thit-trau-gac-bep-CtVQi-Dh.webp","./assets/dish-tom-hum-oMyTOSd8.webp","./assets/dish-white-rose-hMJxxWTc.webp","./assets/dish-xoi-FY1mECrH.webp","./assets/index-DgmEGJjI.css","./assets/juegos-D9aAq-RD.css","./assets/leaflet-vh-t_kPv.css","./assets/mapa-Do68vgFB.css","./assets/place-danang-BgAXnE8Z.webp","./assets/place-hagiang-_0uDdIsg.webp","./assets/place-hanoi-BZQMJ7xt.webp","./assets/place-hoian-DhHX_QM7.webp","./assets/place-lanha-DeqEFfI5.webp","./assets/place-ninhbinh-DS0tfwUL.webp","./assets/place-puluong-BHWE0SKA.webp","./assets/rutas-DPMKgp7q.css","./assets/sitios-Czvsnu6K.css","./apple-touch-icon.png","./icon-192.png","./icon-512.png","./manifest.webmanifest","./juegos/arrima.html","./juegos/chapagol.html","./juegos/patinazo.html"]
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()))
})
self.addEventListener('activate', (e) => {
  // Se queda la versión anterior (quien tenga la app abierta aún la usa) y se borran las de antes
  e.waitUntil(caches.keys().then((ks) => {
    const mias = ks.filter((k) => k.startsWith('vn-app-') && k !== VERSION).sort().reverse()
    return Promise.all(mias.slice(1).map((k) => caches.delete(k)))
  }).then(() => self.clients.claim()))
})
// Con cobertura de una raya, fetch puede tardar decenas de segundos: a los 3 s, la app guardada
const conTope = (p, ms) => Promise.race([p, new Promise((_, ko) => setTimeout(() => ko(new Error('lento')), ms))])
self.addEventListener('fetch', (e) => {
  const req = e.request
  const url = new URL(req.url)
  // Solo lo propio: Supabase, teselas del mapa y demás van directos a la red
  if (req.method !== 'GET' || url.origin !== self.location.origin) return
  if (req.mode === 'navigate') {
    // Red primero (para ver la versión nueva) y, sin red o con red lenta, la app guardada
    e.respondWith(conTope(fetch(req), 3000).catch(async () => (await caches.match('./', { ignoreSearch: true })) || fetch(req)))
    return
  }
  // Los trozos de código y los juegos: primero lo guardado (de cualquier versión), si no la red
  e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)) }
    return res
  })))
})
