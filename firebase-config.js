// ============================================================
//  CONFIGURACIÓN DEL DESPACHO — proyecto la-madriguera-cb489
//  Solo falta reemplazar PEGAR_AQUI_LA_APIKEY por el valor de "apiKey"
//  (Firebase → ⚙️ Configuración del proyecto → Tus apps → madriguera-pos → Config).
//  Deje las comillas.
// ============================================================
window.FB_CONFIG = {
  apiKey: "// Despacho del stand (caja del celular + pantalla de despacho)
    match /lm_despacho/{sala}/pedidos/{id} {
      allow read, write: if request.auth != null;
    }",
  authDomain: "la-madriguera-cb489.firebaseapp.com",
  projectId: "la-madriguera-cb489",
  storageBucket: "la-madriguera-cb489.firebasestorage.app",
  messagingSenderId: "648077569073",
  appId: "1:648077569073:web:061ce3f3617276d4063910"
};
if (window.FB_CONFIG.apiKey.indexOf('PEGAR') === 0) window.FB_CONFIG = null; // aún sin apiKey: la caja funciona sin despacho

// Nombre de la "sala": la caja y la pantalla de despacho deben usar el mismo.
window.SALA_DESPACHO = 'budokan';
