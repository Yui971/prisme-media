const MODALS = {
  'a-propos': {
    title: 'À propos de Prisme',
    content: `
      <p>Prisme est un média indépendant fondé en 2025, consacré à l'analyse des fractures numériques, sociales et de genre dans la société contemporaine. Chaque article explore comment la technologie redessine nos sociétés, parfois au détriment des personnes les plus exposées.</p>
      <p>Notre démarche repose sur trois principes : des faits vérifiés, des sources citées, et des perspectives plurielles. Nous refusons la neutralité de façade face à des enjeux qui ne le sont pas.</p>
      <h3>Ligne éditoriale</h3>
      <p>Prisme traite en priorité l'intersection entre technologie et inégalités : biais algorithmiques, sous-représentation dans les industries tech, impact social des plateformes numériques. Les articles sont courts, sourcés, et conçus pour être lus en moins de cinq minutes.</p>
      <p style="margin-top:20px;font-size:13px;color:#9ca3af;">Prisme est un projet réalisé dans le cadre du BUT MMI 1, Université des Antilles, Pôle Guadeloupe — exercice R2.07 Écriture Multimédia.</p>
    `
  },
  'equipe': {
    title: "L'équipe",
    content: `
      <div style="display:flex;align-items:center;gap:20px;margin-bottom:24px;padding:20px;background:#f9fafb;border-radius:8px;">
        <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#c2185b,#880e4f);color:#fff;font-family:sans-serif;font-weight:700;font-size:22px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">CB</div>
        <div>
          <strong style="display:block;font-size:16px;color:#0d1117;margin-bottom:2px;">Chrisnaël Berdier</strong>
          <span style="font-size:13px;color:#c2185b;font-weight:600;">Rédacteur &amp; Développeur</span>
        </div>
      </div>
      <p>Étudiant en BUT MMI 1 à l'Université des Antilles, Pôle Guadeloupe. Passionné par les enjeux numériques, les biais algorithmiques et les questions de représentation dans les industries tech.</p>
      <p>Prisme est pour l'instant un média solo. Les ambitions éditoriales sont là ; les collaborateur·ices suivront.</p>
    `
  },
  'contact': {
    title: 'Contact',
    content: `
      <p>Pour toute question, proposition d'article, partenariat ou retour éditorial, écrivez directement à la rédaction.</p>
      <div style="margin:24px 0;padding:20px 24px;background:#f9fafb;border-radius:8px;border-left:3px solid #c2185b;">
        <span style="display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#9ca3af;margin-bottom:6px;">Email</span>
        <a href="mailto:berdierchrisnael@gmail.com" style="font-size:16px;color:#c2185b;font-weight:600;">berdierchrisnael@gmail.com</a>
      </div>
      <p style="font-size:13px;color:#9ca3af;">Délai de réponse habituel : 48 heures. Toutes les propositions sérieuses sont lues.</p>
    `
  },
  'mentions-legales': {
    title: 'Mentions légales',
    content: `
      <h3>Directeur de la publication</h3>
      <p>Chrisnaël Berdier, étudiant en BUT MMI 1, Université des Antilles, Pôle Guadeloupe.<br>
      Contact : <a href="mailto:berdierchrisnael@gmail.com" style="color:#c2185b;">berdierchrisnael@gmail.com</a></p>
      <h3>Hébergement</h3>
      <p>Ce site est hébergé via <strong>GitHub Pages</strong>, un service proposé par :<br>
      GitHub, Inc. — 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.<br>
      Tél. : +1 (877) 448-4820 — <a href="https://github.com" style="color:#c2185b;">github.com</a></p>
      <p>GitHub peut collecter certaines données techniques de connexion (adresse IP, user-agent) lors des visites, conformément à sa propre politique de confidentialité, indépendamment de Prisme.</p>
      <h3>Propriété intellectuelle</h3>
      <p>L'ensemble du contenu éditorial (textes, mises en page, code source) est la propriété de Chrisnaël Berdier, sauf mentions contraires. Les photographies proviennent d'Unsplash et sont utilisées sous licence Unsplash License.</p>
      <h3>Données personnelles</h3>
      <p>Ce site ne collecte aucune donnée personnelle directement identifiable en dehors du formulaire de newsletter. Un compteur de vues anonyme (CounterAPI) est utilisé pour mesurer l'audience. Consultez la politique de confidentialité pour les détails.</p>
      <h3>Responsabilité</h3>
      <p>Le contenu est fourni à titre informatif. La rédaction s'efforce de maintenir l'exactitude des informations publiées et ne saurait être tenue responsable d'une interprétation erronée des contenus.</p>
    `
  },
  'cgu': {
    title: "Conditions générales d'utilisation",
    content: `
      <p>En accédant à Prisme, publié sur GitHub Pages, vous acceptez les présentes conditions dans leur intégralité.</p>
      <h3>Accès au site</h3>
      <p>Le site est accessible librement à toute personne disposant d'un accès à Internet. La rédaction se réserve le droit de suspendre, modifier ou cesser l'accès au site sans préavis, notamment lors de mises à jour techniques.</p>
      <h3>Utilisation du contenu</h3>
      <p>Le contenu de Prisme est destiné à un usage personnel et informatif. Toute reproduction, même partielle, du contenu éditorial sans accord préalable de la rédaction est interdite. Le code source du projet, publié sur GitHub, est soumis à sa propre licence (à préciser dans le dépôt).</p>
      <h3>Responsabilité éditoriale</h3>
      <p>Les informations publiées sur Prisme sont rédigées avec soin et sourcées. Elles ne constituent toutefois pas un conseil juridique, médical ou financier. La rédaction ne saurait être tenue responsable d'une interprétation erronée des contenus.</p>
      <h3>Liens externes</h3>
      <p>Prisme peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif ; la rédaction n'est pas responsable de leur contenu ni de leur disponibilité. L'hébergement sur GitHub Pages implique également l'acceptation des <a href="https://docs.github.com/fr/site-policy/github-terms/github-terms-of-service" style="color:#c2185b;">Conditions d'utilisation de GitHub</a>.</p>
      <h3>Newsletter</h3>
      <p>En s'inscrivant à la newsletter, l'utilisateur accepte que son adresse email soit collectée et utilisée uniquement dans le but de recevoir les publications de Prisme. La désinscription est possible à tout moment. Les adresses sont gérées via Formspree et ne sont jamais transmises à des tiers à des fins commerciales.</p>
      <h3>Modifications</h3>
      <p>Ces conditions peuvent être modifiées à tout moment. Dernière mise à jour : <strong>30 avril 2025</strong>.</p>
    `
  },
  'confidentialite': {
    title: 'Politique de confidentialité',
    content: `
      <p>Prisme prend la protection de vos données au sérieux. Cette politique explique comment le site traite les informations le concernant, conformément au RGPD (UE 2016/679).</p>
      <h3>Hébergement (GitHub Pages)</h3>
      <p>Ce site est hébergé sur GitHub Pages (GitHub, Inc.). GitHub peut collecter des données techniques de base (adresses IP, user-agent, pages visitées) pour assurer la sécurité et la stabilité du service, indépendamment de Prisme. Ces données sont soumises à la politique de confidentialité de GitHub.</p>
      <h3>Newsletter</h3>
      <p>En vous inscrivant à la newsletter, votre adresse email est transmise à <strong>Formspree</strong> (formspree.io), service tiers certifié RGPD, qui la stocke de façon sécurisée. Elle est utilisée uniquement pour vous envoyer les publications de Prisme. Vous pouvez demander sa suppression à tout moment en écrivant à <a href="mailto:berdierchrisnael@gmail.com" style="color:#c2185b;">berdierchrisnael@gmail.com</a>.</p>
      <h3>Compteur de vues</h3>
      <p>Un compteur de visites anonyme (CounterAPI) est utilisé pour mesurer l'audience des articles. Seul un compteur numérique est incrémenté à chaque chargement de page : aucune donnée personnelle n'est transmise.</p>
      <h3>Stockage local (localStorage)</h3>
      <p>Le site utilise le <em>localStorage</em> de votre navigateur pour mémoriser les articles sauvegardés ("Lire plus tard") et comme mécanisme de secours pour le compteur de vues. Ces données restent sur votre appareil et ne sont jamais transmises à un tiers.</p>
      <h3>Vos droits</h3>
      <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contact : <a href="mailto:berdierchrisnael@gmail.com" style="color:#c2185b;">berdierchrisnael@gmail.com</a>. En cas de réclamation, vous pouvez saisir la CNIL (cnil.fr).</p>
    `
  },
  'cookies': {
    title: 'Politique de cookies',
    content: `
      <p>Prisme utilise un stockage local minimal. Aucun cookie publicitaire ni traceur tiers n'est déposé sur votre appareil.</p>
      <h3>Pas de traceurs tiers</h3>
      <p>Ce site n'utilise ni Google Analytics, ni Facebook Pixel, ni aucun outil de ciblage publicitaire.</p>
      <h3>Stockage fonctionnel (localStorage)</h3>
      <p>Le site utilise le <em>localStorage</em> de votre navigateur pour :</p>
      <ul style="margin:8px 0 16px 20px;color:#3d4451;font-size:0.95rem;line-height:2;">
        <li>Mémoriser les articles sauvegardés via "Lire plus tard"</li>
        <li>Conserver le compteur de vues localement en secours</li>
      </ul>
      <p>Ces données ne quittent jamais votre appareil et peuvent être supprimées via les paramètres de votre navigateur (DevTools › Application › Local Storage).</p>
      <h3>GitHub Pages</h3>
      <p>L'hébergeur GitHub peut déposer ses propres cookies techniques pour assurer la sécurité et les performances du service d'hébergement. Ces cookies échappent au contrôle de Prisme et sont régis par la politique de GitHub.</p>
    `
  },
  'genre-tech': {
    title: 'Genre & Tech',
    content: `
      <div style="text-align:center;padding:40px 0 32px;">
        <div style="font-size:56px;margin-bottom:20px;line-height:1;">⚡</div>
        <p style="font-size:1.15rem;font-weight:700;color:#0d1117;margin-bottom:12px;">Rubrique en préparation</p>
        <p style="max-width:400px;margin:0 auto 20px;">Genre &amp; Tech explorera les intersections entre technologie, genre et identité : conception des algorithmes, interfaces genrées, espaces numériques et représentation dans les équipes tech.</p>
        <p style="font-size:13px;color:#9ca3af;">Abonnez-vous à la newsletter pour être alerté·e à la publication.</p>
      </div>
    `
  },
  'enquetes': {
    title: 'Enquêtes',
    content: `
      <div style="text-align:center;padding:40px 0 32px;">
        <div style="font-size:56px;margin-bottom:20px;line-height:1;">🔍</div>
        <p style="font-size:1.15rem;font-weight:700;color:#0d1117;margin-bottom:12px;">Rubrique en préparation</p>
        <p style="max-width:400px;margin:0 auto 20px;">La rubrique Enquêtes proposera des investigations longues sur des sujets tech &amp; société : conditions de travail dans les grandes plateformes, impact environnemental du numérique, régulation des IA génératives.</p>
        <p style="font-size:13px;color:#9ca3af;">Abonnez-vous à la newsletter pour être alerté·e à la publication.</p>
      </div>
    `
  }
};

function openModal(id) {
  const m = MODALS[id];
  if (!m) return;
  document.getElementById('modal-title').textContent = m.title;
  document.getElementById('modal-body').innerHTML = m.content;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
