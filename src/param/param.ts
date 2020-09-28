export const HOST = 'https://mlopezjo.numerica-academie.fr/individuel/wp-json/';
export const PATH = 'wc/v3/';
export const param  = {

    CKCS : 'consumer_key=ck_9a95f74263360201fd9d468d98b37b164b5779a2&consumer_secret=cs_553296882501dea27f0d78e8f9080d066af3d8b9',
    // Nom du LocalStore
    localStore  : 'o4mApp',

    // Programme Backend
    orders  : HOST+PATH+'orders?',
    connect     : HOST+'jwt-auth/v1/token?',
    mesVideos   : HOST+'mesVideos.php',
    listeVideos : HOST+'listeVideos.php',

    // Message application
    cnxNonOk    : "Vous n'êtes pas connecté" ,
    cnxError    : "Login et mot de passe inconnu",
    cnxOk       : "Connecté : {{prenom}} {{nom}}"
}