// ============================================================
//  CONFIGURACION DEL DESPACHO - proyecto la-madriguera-cb489
//  UNICO PASO: borre la linea de abajo que dice  const firebaseConfig = null;
//  y en su lugar pegue el bloque completo copiado de Firebase
//  (Configuracion del proyecto > Tus apps > Config > boton Copiar).
// ============================================================
// ---- PEGUE AQUI ----
const firebaseConfig = {
  apiKey: "AIzaSyBzAwD0HBDhWe7u_1o1toLPJLhiduHVJyo",
  authDomain: "la-madriguera-cb489.firebaseapp.com",
  projectId: "la-madriguera-cb489",
  storageBucket: "la-madriguera-cb489.firebasestorage.app",
  messagingSenderId: "648077569073",
  appId: "1:648077569073:web:061ce3f3617276d4063910"
};;
// ---- FIN ----

window.FB_CONFIG = (typeof firebaseConfig !== 'undefined' && firebaseConfig && typeof firebaseConfig.apiKey === 'string' && firebaseConfig.apiKey.indexOf('AIza') === 0) ? firebaseConfig : null;

// Nombre de la "sala": la caja y la pantalla de despacho deben usar el mismo.
window.SALA_DESPACHO = 'budokan';
