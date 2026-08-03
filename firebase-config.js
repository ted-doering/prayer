// ────────────────────────────────────────────────────────────────
// Narrative Church — Prayer List : Firebase configuration
//
// 1. Create a project at https://console.firebase.google.com
// 2. Authentication → Sign-in method → enable **Google**
// 3. Build → Realtime Database → Create Database (start in locked mode),
//    then paste the security rules from the app's Setup screen.
// 4. Project settings → Your apps → Web app → copy the config values
//    into the object below (replace every PASTE_… value). Make sure
//    databaseURL is included — the Realtime Database needs it.
// 5. Authentication → Settings → Authorized domains → add the domain
//    you deploy to (Firebase Hosting adds yours automatically).
//
// Until real values are filled in, the app shows a setup screen and
// offers a local "demo mode" so you can still try the interface.
// ────────────────────────────────────────────────────────────────
window.NC_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCy16XNUlsrasmDBr1K8gyfnv-gXTfSABQ",
  authDomain: "prayer-7ac7e.firebaseapp.com",
  // Realtime Database URL — confirm this matches the URL shown at the top of
  // your Realtime Database page in the console. If your DB was created in a
  // non-US region it will look like:
  //   https://prayer-7ac7e-default-rtdb.<region>.firebasedatabase.app
  databaseURL: "https://prayer-7ac7e-default-rtdb.firebaseio.com",
  projectId: "prayer-7ac7e",
  storageBucket: "prayer-7ac7e.firebasestorage.app",
  messagingSenderId: "801848409236",
  appId: "1:801848409236:web:e3c69cd75a66e5f05cc881",
};

// Optional: restrict access to specific staff Google accounts (lowercase
// emails). Leave the array empty to allow any signed-in Google account.
// This is a convenience check in the UI — enforce the real restriction
// in your Realtime Database security rules too.
window.NC_ALLOWED_EMAILS = [
  "ted@narrative.church",
  "matt@narrative.church",
];
