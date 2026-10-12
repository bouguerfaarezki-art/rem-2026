/*
 * Banque de questions du quiz REM.
 * Toutes les questions sont tirées des fiches de révision (Bruno Lenne, ACT Formation 2026).
 *
 * Pour ajouter une question :
 *   QCM      : qcm("theme", "Question ?", ["Bonne réponse", "Mauvaise 1", "Mauvaise 2", "Mauvaise 3"], "Explication")
 *              (la bonne réponse est toujours la première de la liste, l'ordre est mélangé à l'affichage)
 *   Vrai/Faux: vf("theme", "Affirmation.", true ou false, "Explication")
 * Thèmes : rem, orga, seduc, juri, stock, calc
 */

const THEMES = [
  { id: "rem",   icon: "🎓", title: "Le titre pro REM",              sub: "Niveau 6, CCP, ECF, DP, examen final" },
  { id: "orga",  icon: "🏬", title: "Marchandisage d’organisation",  sub: "Distribution, 7B, assortiment, zones, COS" },
  { id: "seduc", icon: "✨", title: "Séduction et communication",    sub: "Impulsion, TG, ambiance, 5 sens, PLV/ILV/VLV" },
  { id: "juri",  icon: "⚖️", title: "Cadre juridique du commerce",   sub: "Egalim, CDAC, garanties, concurrence, RSE" },
  { id: "stock", icon: "📦", title: "Gestion de stock",              sub: "Rotation, niveaux, commande, inventaire, marges" },
  { id: "calc",  icon: "🧮", title: "Les calculs de l’examen",       sub: "Exercices chiffrés qui changent à chaque partie" }
];

const QUESTIONS = [];
function qcm(t, q, c, e) { QUESTIONS.push({ t, type: "qcm", q, c, a: 0, e }); }
function vf(t, q, a, e) { QUESTIONS.push({ t, type: "vf", q, a, e }); }

/* ===================== 1. LE TITRE PRO REM ===================== */
qcm("rem", "Qui délivre le titre professionnel REM ?", ["L’État, au nom du ministère chargé de l’emploi", "L’université", "La CCI", "Le centre de formation"], "Le titre pro est délivré par l’État (ministère chargé de l’emploi). Ce n’est pas un diplôme d’école.");
qcm("rem", "À quel niveau est classé le titre REM ?", ["Niveau 6", "Niveau 5", "Niveau 7", "Niveau 4"], "Le titre REM est classé au niveau 6, comme la licence.");
qcm("rem", "Le niveau 6 correspond à quel niveau d’études ?", ["Bac+3 (licence)", "Bac+2 (BTS)", "Bac+5 (master)", "Bac"], "Niveau 6 = Bac+3 : licence, licence pro, BUT… et le titre pro REM.");
qcm("rem", "Quel est le numéro de la fiche RNCP du titre REM ?", ["RNCP38666", "RNCP01442", "RNCP26000", "RNCP38866"], "Fiche RNCP38666. TP-01442 est le code du titre.");
qcm("rem", "Qui tient le RNCP (Répertoire national des certifications professionnelles) ?", ["France Compétences", "La DGCCRF", "L’OPCO", "Le ministère de l’Éducation nationale"], "Le RNCP est tenu par France Compétences.");
qcm("rem", "Combien de blocs (CCP) compte le titre REM ?", ["3", "2", "4", "10"], "3 blocs : commerce, gestion, management/RH.");
qcm("rem", "Combien de compétences compte le titre REM ?", ["10", "3", "8", "12"], "10 compétences : 3 en commerce, 3 en gestion, 4 en management/RH.");
qcm("rem", "Sur quoi porte le CCP 1 ?", ["Le commerce", "La gestion", "Le management / RH", "Le e-commerce"], "CCP 1 · Commerce : « le magasin tourne bien et les clients reviennent ».");
qcm("rem", "Sur quoi porte le CCP 2 ?", ["La gestion", "Le commerce", "Le management / RH", "Le marchandisage"], "CCP 2 · Gestion : « les chiffres, les budgets et les idées pour l’enseigne ».");
qcm("rem", "Sur quoi porte le CCP 3 ?", ["Le management / RH", "Le commerce", "La gestion", "La logistique"], "CCP 3 · Management / RH : recruter, former, animer et faire avancer l’équipe.");
qcm("rem", "Combien de compétences compte le bloc management / RH ?", ["4", "3", "2", "5"], "3 compétences en commerce, 3 en gestion et 4 en management/RH.");
qcm("rem", "Que signifie CCP ?", ["Certificat de compétences professionnelles", "Contrôle continu professionnel", "Certificat de capacité professionnelle", "Cycle de compétences pratiques"], "Un CCP est un bloc du métier, capitalisable.");
qcm("rem", "Que signifie ECF ?", ["Évaluation en cours de formation", "Examen de contrôle final", "Épreuve de compétences fondamentales", "Évaluation commerciale finale"], "Les ECF : quiz Kahoot et mises en situation ; le jury en voit les résultats.");
qcm("rem", "Que signifie DP ?", ["Dossier professionnel", "Diplôme professionnel", "Dossier de présentation", "Devoir pratique"], "Le DP est votre carnet de preuves, tiré de situations réelles en entreprise.");
qcm("rem", "Que signifie REAC ?", ["Référentiel emploi activités compétences", "Référentiel d’évaluation des acquis certifiés", "Registre des emplois et activités commerciales", "Répertoire européen des certifications"], "Le REAC est le « portrait » du métier.");
qcm("rem", "Combien dure l’examen final ?", ["6 h 55", "4 h", "5 h 40", "7 h 30"], "Étude de cas 4 h + entretien technique 1 h + oraux 1 h 40 + entretien final 15 min = 6 h 55.");
qcm("rem", "Combien dure l’étude de cas sur ordinateur ?", ["4 h", "1 h", "2 h 30", "6 h 55"], "Étude de cas : 4 h, sur ordinateur, à partir d’un magasin fictif (CCP1).");
qcm("rem", "Combien de temps de préparation pour l’entretien technique ?", ["30 min", "10 min", "20 min", "1 h"], "30 min de préparation, 10 min de présentation, 20 min d’échange avec le jury.");
qcm("rem", "Combien dure l’entretien final avec le jury ?", ["15 min", "30 min", "45 min", "1 h"], "Entretien final : 15 min sur votre vision du métier, appuyé sur votre DP.");
qcm("rem", "Sur quel bloc porte le livrable 1 ?", ["CCP 2 · Gestion", "CCP 1 · Commerce", "CCP 3 · Management / RH", "Tout le titre"], "Livrable 1 = CCP2 Gestion ; livrable 2 = CCP3 Management/RH.");
qcm("rem", "Combien de mises en situation sont prises en compte pour les ECF ?", ["3", "1", "5", "Toutes"], "3 mises en situation comptent pour les ECF ; les autres servent d’entraînement.");
qcm("rem", "Quelle est la seule preuve recevable pour une absence ou un retard ?", ["Un certificat médical", "Un mot de l’employeur", "Un justificatif de transport", "Un message au formateur"], "Aucune absence ni aucun retard n’est toléré sans certificat médical.");
qcm("rem", "Qui finance la formation en apprentissage ?", ["L’OPCO", "L’apprenti", "Pôle emploi", "La région"], "L’entreprise rémunère l’apprenti, l’OPCO finance la formation.");
qcm("rem", "Lequel de ces éléments n’est PAS utilisé par le jury pour décider ?", ["Les notes du baccalauréat", "Le dossier professionnel", "Les résultats des ECF", "Un entretien avec le candidat"], "Le jury s’appuie sur 4 éléments : les épreuves, le DP, les ECF et un entretien.");
qcm("rem", "Combien d’heures minimum en entreprise doivent nourrir les livrables ?", ["350 h", "100 h", "200 h", "500 h"], "Le contenu des livrables est tiré de 350 h minimum en entreprise.");
qcm("rem", "Combien de niveaux compte le cadre européen des certifications (CEC) ?", ["8", "6", "5", "10"], "8 niveaux, alignés sur les 8 niveaux français.");
vf("rem", "Le titre professionnel REM est un diplôme d’école.", false, "Faux : il est délivré par l’État, au nom du ministère chargé de l’emploi.");
vf("rem", "En cas de validation partielle, les CCP réussis restent acquis.", true, "Vrai : on ne repasse que ce qui manque, en « session CCP ».");
vf("rem", "Le jury de l’examen est composé d’enseignants de l’université.", false, "Faux : le jury est composé de professionnels du commerce habilités par l’État.");
vf("rem", "Le titre REM est inscrit de droit au RNCP.", true, "Vrai : comme tous les diplômes et titres délivrés au nom de l’État.");

/* ===================== 2. MARCHANDISAGE D'ORGANISATION ===================== */
qcm("orga", "Quel est le parcours d’un canal court ?", ["Fabricant → détaillant → consommateur", "Fabricant → consommateur", "Fabricant → grossiste → détaillant → consommateur", "Fabricant → centrale d’achat → détaillant → consommateur"], "Canal court : un seul intermédiaire (ex. producteur local en supérette).");
qcm("orga", "Quel intermédiaire caractérise le canal long intégré ?", ["La centrale d’achat", "Le grossiste", "Le transporteur", "Aucun"], "Long intégré : fabricant → centrale d’achat → détaillant → consommateur (hypers, supers).");
qcm("orga", "Quel intermédiaire caractérise le canal long traditionnel ?", ["Le grossiste", "La centrale d’achat", "Le franchiseur", "Le site e-commerce"], "Long traditionnel : fabricant → grossiste → détaillant → consommateur (commerces indépendants).");
qcm("orga", "La vente à la ferme est un exemple de canal…", ["Direct", "Court", "Long intégré", "Long traditionnel"], "Canal direct : fabricant → consommateur.");
qcm("orga", "Quelle est la surface d’une supérette ?", ["100 à 400 m²", "Moins de 100 m²", "400 à 2 499 m²", "Plus de 2 500 m²"], "Supérette : 100 à 400 m², généraliste (Franprix, G20…).");
qcm("orga", "Quelle est la surface d’un supermarché ?", ["400 à 2 499 m²", "100 à 400 m²", "Plus de 2 500 m²", "1 000 à 5 000 m²"], "Supermarché : 400 à 2 499 m² (Intermarché, Super U, Carrefour Market).");
qcm("orga", "À partir de quelle surface parle-t-on d’hypermarché ?", ["2 500 m²", "1 000 m²", "400 m²", "5 000 m²"], "Hypermarché : 2 500 m² et plus, multi-spécialiste.");
qcm("orga", "Lidl et Aldi sont des…", ["Discounters", "Supérettes", "Hypermarchés", "Grandes surfaces spécialisées"], "Discounter : 400 à 1 000 m², généraliste.");
qcm("orga", "Leroy Merlin, Darty et Decathlon sont des…", ["Grandes surfaces spécialisées", "Grands magasins", "Hypermarchés", "Discounters"], "GSS : plus de 1 000 m², spécialiste.");
qcm("orga", "Le marchandisage est né avec…", ["Le libre-service", "Internet", "Les marchés en plein air", "La télévision"], "Le marchandisage est né avec le libre-service.");
qcm("orga", "En quelle année ouvre le premier libre-service en France (Goulet-Turpin) ?", ["1948", "1852", "1963", "1991"], "1948 : 1er libre-service ; 1949 : 1er Leclerc ; 1963 : 1er hypermarché Carrefour.");
qcm("orga", "En quelle année ouvre le premier hypermarché Carrefour ?", ["1963", "1948", "1949", "1973"], "1963 : 1er hypermarché Carrefour.");
qcm("orga", "Qui est à l’origine de la règle des 5B (puis 7B) ?", ["Charles H. Kepner", "Philip Kotler", "Michael Porter", "Édouard Leclerc"], "Les 5B sont de Charles H. Kepner.");
qcm("orga", "Lequel de ces éléments ne fait PAS partie des 7B ?", ["Le bon vendeur", "Le bon produit", "Au bon moment", "La bonne information"], "7B : produit, endroit, moment, quantité, prix, information, présentation.");
qcm("orga", "Quels sont les deux B ajoutés aux 5B ?", ["La bonne information et la bonne présentation", "Le bon vendeur et le bon client", "Le bon prix et la bonne quantité", "Le bon endroit et le bon moment"], "+ la bonne information (prix au kg, allergènes…) + la bonne présentation.");
qcm("orga", "« Produit de face, étiquette prix à gauche, aucun trou » correspond à quel B ?", ["La bonne présentation", "La bonne information", "Le bon endroit", "La bonne quantité"], "La bonne présentation : produit de face, étiquette à gauche, frontales respectées, aucun trou.");
qcm("orga", "Quel mode de présentation place chaque marque sur tous les niveaux et facilite la comparaison ?", ["Verticale", "Horizontale", "En vrac", "En gerbage"], "Présentation verticale : freine le client, comparaison facile (liquides, café, DPH).");
qcm("orga", "Dans une présentation « à fenêtre »…", ["La marque leader entoure le produit moins connu", "Les produits sont en vrac dans un bac", "Une famille occupe toute la hauteur", "Les produits sont empilés sur palette"], "À fenêtre : utilisé pour les nouveautés, l’hygiène-beauté.");
qcm("orga", "Pour quels produits utilise-t-on la présentation en gerbage ?", ["Eaux, packs, promotions", "Livres et disques", "Bricolage, mercerie", "Fruits et légumes"], "Gerbage : effet volume, réassort rapide sur palette.");
qcm("orga", "La présentation concave est adaptée…", ["Aux livres, disques, cave", "Aux packs d’eau", "Au riz et aux conserves", "Aux bacs promo"], "Concave : tous les produits à la même distance du client.");
qcm("orga", "Que mesure la largeur d’un assortiment ?", ["Le nombre de lignes ou de gammes", "Le nombre de références par gamme", "Le niveau de qualité", "Le nombre de mètres linéaires"], "Largeur = nombre de lignes (marque) ou de gammes (magasin).");
qcm("orga", "Que mesure la profondeur d’un assortiment ?", ["Le nombre de références par ligne ou par gamme", "Le nombre de gammes", "Le niveau de qualité", "Le nombre de fournisseurs"], "Profondeur = nombre de références par ligne ou par gamme.");
qcm("orga", "Que mesure la hauteur d’un assortiment ?", ["Le niveau de qualité (haut de gamme, 1er prix…)", "Le nombre de niveaux du rayon", "Le nombre de références", "La surface du magasin"], "Hauteur = niveau de qualité.");
qcm("orga", "Quel assortiment propose une supérette ?", ["Étroit et peu profond", "Large et profond", "Large et peu profond", "Étroit et profond"], "Proximité, supérette : peu de gammes, peu de références.");
qcm("orga", "Quel assortiment propose un hypermarché ?", ["Large et profond", "Étroit et peu profond", "Large et peu profond", "Étroit et profond"], "Hypermarché, grand magasin : beaucoup de gammes et de références.");
qcm("orga", "Quel assortiment propose un discounter ?", ["Large et peu profond", "Large et profond", "Étroit et profond", "Étroit et peu profond"], "Discount : beaucoup de gammes, peu de références.");
qcm("orga", "Quel assortiment propose un opticien ou un bijoutier ?", ["Étroit et profond", "Large et peu profond", "Large et profond", "Étroit et peu profond"], "Opticien, bijoutier, GSS : peu de gammes, beaucoup de références.");
qcm("orga", "Quel est le rôle des MDD (marques de distributeur) ?", ["Fidéliser, renforcer l’image de l’enseigne, améliorer la marge", "Attirer grâce à leur forte notoriété", "Servir les petits budgets uniquement", "Différencier le magasin grâce au terroir"], "MDD : fidélisent, renforcent l’image de l’enseigne, améliorent la marge.");
qcm("orga", "Quel type de marque attire le client grâce à sa forte notoriété ?", ["Les marques nationales", "Les MDD", "Les premiers prix", "Les marques locales"], "Marques nationales : forte notoriété, elles attirent le client.");
qcm("orga", "Lequel n’est PAS un des 4 piliers du marchandisage ?", ["Négociation", "Organisation", "Séduction", "Gestion"], "4 piliers : organisation, séduction, communication, gestion.");
qcm("orga", "Comment calcule-t-on le COS (coefficient d’occupation du sol) ?", ["Mètres linéaires au sol ÷ surface de vente × 100", "Surface de vente ÷ mètres linéaires × 100", "Linéaire au sol × nombre de niveaux", "CA ÷ surface de vente"], "Ex. : 300 m linéaires pour 1 200 m² → COS = 25 %.");
qcm("orga", "Où place-t-on les produits prévendus (eau, lait, pain) ?", ["Au fond du magasin", "À l’entrée", "Près des caisses", "En tête de gondole"], "Au fond : ils font traverser le magasin (et les produits lourds sont près de la réserve).");
qcm("orga", "Tous les 10 m, de combien baisse la motivation du client ?", ["5 %", "10 %", "2 %", "20 %"], "Il faut relancer : tous les 10 m, la motivation baisse de 5 %.");
qcm("orga", "Dans un rayon à sens unique, que place-t-on au centre (37 %) ?", ["Les produits d’impulsion", "Les produits de destination", "Les produits complémentaires", "Les premiers prix"], "33 % complémentaires · 37 % impulsion (centre) · 30 % destination.");
qcm("orga", "Quelle hauteur de présentation est la plus vendeuse (indice 100) ?", ["1,30 m", "1,90 m", "1,00 m", "0,15 m"], "1,30 m = niveau des yeux, indice 100. 1,60 m = 70 ; 1,00 m = 85.");
qcm("orga", "Quel est l’indice de vente au niveau du sol (0,15 m) ?", ["40", "65", "20", "85"], "Sol = faible : 40 à 0,15 m. Et seulement 20 à 1,90 m.");
qcm("orga", "Par combien une tête de gondole multiplie-t-elle les ventes ?", ["6 à 10", "2", "20", "1,5"], "Une tête de gondole multiplie les ventes par 6 à 10.");
qcm("orga", "Que dit la règle des 30 cm ?", ["À 1 m/s, le client ne voit qu’une bande de 30 cm à hauteur des yeux", "Il faut 30 cm entre deux rayons", "Une allée doit faire au moins 30 cm de plus à l’entrée", "Chaque produit doit avoir 30 cm de façade"], "On y place les produits stratégiques et les nouveautés.");
qcm("orga", "Quel tracé de circulation utilisent les super et hypermarchés ?", ["En grille", "En boucle", "Libre", "En épi"], "En grille : allées parallèles, maximum de linéaire, parcours rapide.");
qcm("orga", "Quel tracé permet de voir toute l’offre (ameublement, jardinerie) ?", ["En boucle", "En grille", "En épi", "Libre"], "En boucle : allée périphérique, toute l’offre est vue.");
qcm("orga", "Quel tracé favorise la flânerie (mode, beauté) ?", ["Libre", "En grille", "En boucle", "En épi"], "Libre : mobilier dispersé, flânerie, découverte.");
qcm("orga", "Que signifie le « retailtainment » ?", ["Le commerce spectacle", "La vente en ligne", "La vente par correspondance", "La gestion par catégorie"], "Marchandisage design : créer de l’émotion face au e-commerce.");
qcm("orga", "Comment évolue la consommation selon la fiche ?", ["Du losange au sablier", "Du sablier au losange", "Du carré au triangle", "Elle ne change pas"], "Le haut et le bas de gamme dominent : l’assortiment doit couvrir les deux extrêmes.");
vf("orga", "La zone froide d’un magasin se trouve à l’entrée.", false, "Faux : la zone chaude est à l’entrée (circulation naturelle), la zone froide au fond.");
vf("orga", "Plus le COS est élevé, plus le magasin est aéré.", false, "Faux : plus le COS est élevé, moins le magasin est aéré.");
vf("orga", "Un décor trop élaboré peut faire visiter sans acheter.", true, "Vrai : c’est une des dérives du marchandisage citées dans la fiche.");

/* ===================== 3. SÉDUCTION ET COMMUNICATION ===================== */
qcm("seduc", "Le marchandisage de séduction fait passer la part d’achats non prévus de 20 % à près de…", ["80 %", "40 %", "50 %", "100 %"], "Le caddie passe de 20 % d’achats non prévus à près de 80 %.");
qcm("seduc", "Comment appelle-t-on aussi le marchandisage de séduction ?", ["La vente passive", "La vente active", "La vente assistée", "La vente à distance"], "Il fait acheter le client sans vendeur, grâce à une présentation attractive.");
qcm("seduc", "Où place-t-on un produit d’achat prévu (destination) ?", ["Au fond ou loin de l’entrée", "Près des caisses", "En tête de gondole", "À l’entrée"], "Pour faire traverser le magasin.");
qcm("seduc", "Placer la sauce à côté des pâtes, c’est…", ["Du cross-merchandising (achat complémentaire)", "Un effet de masse", "Un mur de valeur", "Un effet d’isolement"], "Achat complémentaire : à côté du produit d’appel.");
qcm("seduc", "Le chocolat près des caisses est un achat…", ["D’impulsion", "Prévu", "Complémentaire", "De destination"], "Achat d’impulsion : déclenché par l’envie, sur place.");
qcm("seduc", "Que signifie la méthode IRS ?", ["Idées, Rêve, Solutions", "Innovation, Réassort, Service", "Image, Rotation, Stock", "Impulsion, Rayon, Signalétique"], "IRS facilite l’acte d’achat.");
qcm("seduc", "Quelle dimension de la méthode IRS est la plus souvent oubliée ?", ["Solutions", "Idées", "Rêve", "Aucune"], "Solutions : montrer comment faire (étapes, produits, résultat, outils).");
qcm("seduc", "Que signifie la règle ITC ?", ["Innovation, Théâtralisation, Communication", "Impulsion, Tête de gondole, Caisse", "Information, Tarif, Conseil", "Idées, Tendance, Couleur"], "ITC sert à animer les linéaires.");
qcm("seduc", "Dans la théâtralisation, qui est le metteur en scène ?", ["Le responsable du point de vente", "Le client", "Le fournisseur", "Le décorateur"], "Les acteurs sont les produits, les vendeurs et les clients.");
qcm("seduc", "L’effet d’isolement consiste à…", ["Mettre un seul produit en vedette", "Présenter un produit en grande quantité", "Mélanger produits prévus et non prévus", "Encadrer une partie du linéaire"], "Ex. : produit saisonnier, régional, événementiel.");
qcm("seduc", "L’effet de masse donne une impression…", ["D’abondance et de bon prix", "De luxe et de rareté", "De nouveauté", "De calme"], "Un produit en grande quantité.");
qcm("seduc", "Une tête de gondole réalise combien de fois le CA d’une même surface en rayon ?", ["7 à 10 fois", "2 fois", "20 fois", "Autant"], "La TG est l’extrémité d’un linéaire face à l’allée principale.");
qcm("seduc", "Le mur des épices est un exemple de…", ["Mur de valeur", "Étalage de masse", "Mixing", "Présentation saisonnière"], "Mur de valeur : une même fonction, plusieurs marques et prix.");
qcm("seduc", "Dentifrice + brosses + fil dentaire en TG, c’est…", ["Du mixing", "Un mur de valeur", "Un étalage de masse", "Un effet d’isolement"], "Mixing : un produit prévu avec des produits non prévus de même logique.");
qcm("seduc", "Qu’est-ce que le marchandisage en fenêtre ?", ["Une partie du linéaire encadrée comme une vitrine", "Une vitrine donnant sur la rue", "Un rayon sans façade", "Un présentoir en caisse"], "Le cadre isole, la lumière valorise, un code couleur guide.");
qcm("seduc", "Combien de facteurs d’ambiance compte la fiche ?", ["13", "5", "7", "10"], "Mobilier, éclairage, couleurs, colorblocking, 5 sens, décoration, sols-murs-plafonds, tenues, son, événements, clim, affichage numérique, vitrines.");
qcm("seduc", "Un bon éclairage peut augmenter les ventes de…", ["20 %", "5 %", "50 %", "80 %"], "Un bon éclairage : +20 % de ventes.");
qcm("seduc", "Quel effet d’éclairage convient à une clientèle hédoniste ?", ["La stimulation (forts contrastes)", "L’équilibre (contrastes doux)", "La domination (lumière homogène)", "La pénombre"], "Équilibre : traditionnelle · Stimulation : hédoniste · Domination : critique.");
qcm("seduc", "Quel IRC (indice de rendu des couleurs) pour un rayon maquillage ?", ["Supérieur à 90", "Inférieur à 80", "Exactement 50", "Peu importe"], "IRC 100 = parfait ; sous 80, les couleurs sont altérées.");
qcm("seduc", "Quelle température de couleur donne une ambiance cosy ?", ["2 500 K", "6 000 K", "10 000 K", "4 000 lm"], "De 2 500 K (cosy, orangé) à 6 000 K (dynamique, bleuté).");
qcm("seduc", "Jusqu’à quelle heure les vitrines peuvent-elles rester allumées ?", ["1 h (ou une heure après la fermeture)", "Minuit", "22 h", "Toute la nuit"], "Allumées au plus tôt à 7 h, éteintes à 1 h (ou 1 h après la fermeture).");
qcm("seduc", "Quelle couleur utilise-t-on pour les promotions et les soldes ?", ["Rouge", "Vert", "Violet", "Bleu"], "Rouge : énergie, excitation, achat d’impulsion.");
qcm("seduc", "Quelle couleur pour le bio et les fruits et légumes ?", ["Vert", "Rouge", "Noir", "Violet"], "Vert : nature, santé, calme.");
qcm("seduc", "Quelle couleur pour la parfumerie et la beauté ?", ["Violet", "Rouge", "Bleu", "Orange"], "Violet : douceur, rêve.");
qcm("seduc", "Quelle couleur pour la marée et les produits techniques ?", ["Bleu", "Rouge", "Jaune", "Violet"], "Bleu : confiance, fraîcheur.");
qcm("seduc", "Qu’est-ce que le colorblocking ?", ["Regrouper les produits par blocs de couleur", "Interdire certaines couleurs en magasin", "Peindre les murs d’une seule couleur", "Mettre des étiquettes de couleur sur les prix"], "Les blocs attirent l’œil de loin et donnent une impression d’ordre et d’abondance.");
qcm("seduc", "Quel est le sens le plus sollicité en magasin ?", ["La vue", "L’odorat", "Le toucher", "L’ouïe"], "Lumière, couleurs, formes, packaging, écrans.");
qcm("seduc", "Quel est le sens le plus émotionnel (souvenirs) ?", ["L’odorat", "La vue", "Le goût", "L’ouïe"], "L’odorat est le plus fort, mais difficile à reproduire.");
qcm("seduc", "« Un produit en main est à moitié acheté » concerne quel sens ?", ["Le toucher", "La vue", "Le goût", "L’odorat"], "Toucher : matières, textures, libre accès.");
qcm("seduc", "Quel effet a une musique douce sur le client ?", ["Elle le ralentit", "Elle accélère la rotation", "Aucun effet", "Elle le fait partir"], "Musique douce = client ralenti ; rapide = rotation.");
qcm("seduc", "Lequel n’est PAS une des cinq saveurs ?", ["Épicé", "Umami", "Amer", "Acide"], "Les 5 saveurs : sucré, salé, amer, acide, umami.");
qcm("seduc", "Quelle température recommande la fiche en saison chaude ?", ["24 à 25 °C", "18 à 19 °C", "20 à 21 °C", "27 à 28 °C"], "78 % d’intention d’achat à 25 °C contre 47 % quand il fait trop froid.");
qcm("seduc", "À qui déclare-t-on la musique diffusée en magasin ?", ["À la SACEM (droits d’auteur + SPRE)", "À la DGCCRF", "À la CNIL", "À personne"], "Toute musique diffusée dans un commerce se déclare obligatoirement.");
qcm("seduc", "Que signifie PLV ?", ["Publicité sur le lieu de vente", "Prix sur le lieu de vente", "Présentation libre en vitrine", "Promotion limitée en volume"], "La PLV pousse un produit ou une marque ; elle est surtout produite par les marques.");
qcm("seduc", "L’étiquette « 2,49 € – soit 4,98 €/kg » est de la…", ["ILV (information obligatoire)", "PLV", "VLV", "Théâtralisation"], "ILV = information sur le lieu de vente : informer, orienter, rassurer.");
qcm("seduc", "Combien de temps doit durer un contenu VLV ?", ["10 à 20 s", "1 à 2 min", "5 min", "Pas de limite"], "Court, compréhensible sans le son, renouvelé souvent.");
qcm("seduc", "Lequel est un exemple de PLV ?", ["Un stop-rayon", "Un plan du magasin", "Une étiquette prix", "Un écran de sortie de caisse"], "PLV : présentoir de sol, stop-rayon, wobbler, totem, habillage de TG.");
qcm("seduc", "Quelle est la règle d’or de la communication hors magasin ?", ["Ce qui est promis dans le catalogue existe en rayon", "Publier tous les jours", "Ne jamais afficher les prix en ligne", "Faire un catalogue par semaine"], "Une rupture sur prospectus fait perdre la confiance.");
vf("seduc", "L’effet de masse fonctionne pour tous les types de produits.", false, "Faux : la masse ne fonctionne que pour les produits d’achat non impliquant.");
vf("seduc", "Un écran éteint est pire que pas d’écran du tout.", true, "Vrai : c’est une règle de la VLV.");
vf("seduc", "Une tête de gondole qui ne change jamais devient invisible.", true, "Vrai : c’est un des pièges cités par la fiche.");

/* ===================== 4. CADRE JURIDIQUE ===================== */
qcm("juri", "Pourquoi la loi Galland (1996) a-t-elle fait exploser les marges arrière ?", ["Le SRP était calculé sur le prix facture, donc les remises passaient hors facture", "Elle interdisait les promotions", "Elle supprimait le seuil de revente à perte", "Elle plafonnait les marges avant"], "Les remises étaient déplacées « en arrière », hors facture.");
qcm("juri", "Quelle loi de 2005 réintègre une partie des marges arrière dans le SRP ?", ["La loi Dutreil", "La loi Royer", "La loi Hamon", "La loi Pinel"], "2005 : loi Dutreil.");
qcm("juri", "Quels délais de paiement fixe la LME (2008) ?", ["60 jours date de facture ou 45 jours fin de mois", "30 jours date de facture", "90 jours fin de mois", "120 jours"], "LME : délais de paiement plafonnés.");
qcm("juri", "De combien Egalim majore-t-elle le seuil de revente à perte sur l’alimentaire ?", ["+10 %", "+5 %", "+20 %", "+34 %"], "SRP +10 % sur l’alimentaire.");
qcm("juri", "Quels sont les plafonds des promotions alimentaires (Egalim) ?", ["34 % en valeur et 25 % en volume", "25 % en valeur et 34 % en volume", "50 % en valeur et 30 % en volume", "10 % en valeur et 10 % en volume"], "34 % de réduction maximum et 25 % des volumes annuels.");
qcm("juri", "Déréférencer un fournisseur du jour au lendemain, c’est…", ["Une rupture brutale, sanctionnée", "Un droit du distributeur", "Une entente", "Une pratique autorisée sans préavis"], "Il faut un préavis écrit, raisonnable et une justification commerciale.");
qcm("juri", "Quelle loi de 1973 crée la première autorisation obligatoire pour les grandes surfaces ?", ["La loi Royer", "La loi Raffarin", "La loi Galland", "La LME"], "La loi Royer protège le commerce traditionnel.");
qcm("juri", "À combien la loi Raffarin (1996) abaisse-t-elle le seuil d’autorisation ?", ["300 m²", "1 000 m²", "100 m²", "2 500 m²"], "Seuil abaissé à 300 m² : contrôle beaucoup plus strict.");
qcm("juri", "Au-delà de quelle surface de vente l’autorisation de la CDAC est-elle obligatoire ?", ["1 000 m²", "300 m²", "2 500 m²", "400 m²"], "La LME (2008) a relevé le seuil à 1 000 m².");
qcm("juri", "Devant qui peut-on faire un recours contre une décision de la CDAC ?", ["La CNAC", "La DGCCRF", "La CNIL", "Le maire"], "CNAC : Commission nationale d’aménagement commercial.");
qcm("juri", "Un magasin passe de 900 à 1 200 m². Que faut-il ?", ["Une autorisation d’exploitation commerciale après avis de la CDAC", "Rien, c’est un agrandissement", "Uniquement un permis de construire", "L’accord de la CNIL"], "Tout projet de création ou d’extension au-delà de 1 000 m² passe devant la CDAC.");
qcm("juri", "Quelle est la durée de la garantie légale de conformité pour un bien neuf ?", ["2 ans", "6 mois", "1 an", "5 ans"], "Le défaut est présumé exister à l’achat.");
qcm("juri", "Dans quel délai agir pour un vice caché ?", ["2 ans après la découverte", "14 jours après l’achat", "6 mois après l’achat", "10 ans"], "Vice caché : défaut invisible rendant le produit impropre à l’usage.");
qcm("juri", "Quel prix appliquer en cas d’écart entre le rayon et la caisse ?", ["Le prix le plus bas", "Le prix de la caisse", "Le prix du rayon", "La moyenne des deux"], "C’est le réflexe du directeur.");
qcm("juri", "Comment fixer le prix barré d’une promotion (directive Omnibus) ?", ["Au prix le plus bas pratiqué dans les 30 jours précédant la réduction", "Au prix conseillé par le fournisseur", "Au prix le plus haut de l’année", "Au prix de la veille"], "Il faut conserver l’historique des prix pour le justifier.");
qcm("juri", "Combien y a-t-il de périodes de soldes par an ?", ["2", "1", "4", "Autant que voulu"], "Deux périodes par an, dates fixées par l’État.");
qcm("juri", "Lequel est une exception à l’interdiction de revente à perte ?", ["Les soldes", "Les promotions de rentrée", "Les nouveautés", "Les produits MDD"], "Exceptions : soldes, liquidation, fin de saison, périssables, alignement sur un concurrent local.");
qcm("juri", "Quelle sanction pour une pratique commerciale trompeuse ?", ["Jusqu’à 2 ans de prison et 300 000 € d’amende", "Un simple avertissement", "1 500 € d’amende", "10 % du CA mondial"], "Montant pouvant être porté à un % du CA.");
qcm("juri", "Gonfler un prix juste avant une promotion (899 € → « promo » 699 €), c’est…", ["Une pratique trompeuse", "Une pratique autorisée", "Une entente", "Une revente à perte"], "C’est une fausse réduction.");
qcm("juri", "Deux directeurs voisins s’accordent sur le prix du pack d’eau. C’est…", ["Une entente", "Un abus de position dominante", "Une pratique autorisée", "Une rupture brutale"], "Entente (art. L420-1) : interdite même sans dommage prouvé.");
qcm("juri", "Quelle amende maximale pour une entente ou un abus de position dominante ?", ["10 % du CA mondial", "4 % du CA mondial", "300 000 €", "1 % du CA"], "Jusqu’à 10 % du chiffre d’affaires mondial du groupe.");
qcm("juri", "Exiger d’un petit producteur une tête de gondole gratuite, c’est…", ["Un avantage sans contrepartie (infraction)", "Une négociation normale", "Une entente", "Une pratique autorisée par Egalim"], "Pratique restrictive (L442-1).");
qcm("juri", "Qui sanctionne les ententes et abus de position dominante ?", ["L’Autorité de la concurrence", "La CNIL", "La CDAC", "Le médiateur de la consommation"], "La DGCCRF enquête sur le terrain ; l’Autorité de la concurrence sanctionne.");
qcm("juri", "Quel est le rôle de la DGCCRF ?", ["Enquêtes de terrain : prix, promotions, étiquetage, relations fournisseurs", "Contrôler le RGPD", "Autoriser les surfaces commerciales", "Délivrer les titres pro"], "Elle peut prononcer des amendes administratives.");
qcm("juri", "Combien de questions centrales compte l’ISO 26000 ?", ["7", "5", "10", "3"], "Gouvernance, droits de l’Homme, travail, environnement, loyauté, consommateurs, communautés.");
qcm("juri", "Quelle question centrale de l’ISO 26000 pilote toutes les autres ?", ["La gouvernance de l’organisation", "L’environnement", "Les droits de l’Homme", "La loyauté des pratiques"], "La gouvernance est au centre.");
qcm("juri", "Quelle loi de 2019 crée la raison d’être et la société à mission ?", ["La loi PACTE", "La loi AGEC", "La loi Hamon", "La loi ELAN"], "Toute société est gérée en tenant compte des enjeux sociaux et environnementaux.");
qcm("juri", "Que peut-on faire d’invendus non alimentaires ?", ["Les donner ou les recycler", "Les détruire", "Les jeter avec les ordures", "Les revendre à perte hors soldes"], "Leur destruction est interdite (loi AGEC 2020).");
qcm("juri", "Qu’est-ce que l’écoblanchiment ?", ["Une allégation écologique non fondée", "Le tri des biodéchets", "Une certification ISO", "Le recyclage des emballages"], "Toute allégation écologique doit être fondée et précise, sinon pratique trompeuse.");
qcm("juri", "Quelle loi de 2004 impose les mentions légales sur les sites ?", ["La LCEN", "Le RGPD", "La loi Hamon", "La loi Dutreil"], "LCEN : identification de l’éditeur, information précontractuelle.");
qcm("juri", "Quelle amende maximale prévoit le RGPD ?", ["4 % du CA mondial (ou 20 M€ si plus élevé)", "10 % du CA mondial", "300 000 €", "1 M€"], "RGPD 2018.");
qcm("juri", "Qui contrôle le respect du RGPD et des cookies ?", ["La CNIL", "La DGCCRF", "L’Autorité de la concurrence", "La CDAC"], "La CNIL peut sanctionner.");
qcm("juri", "Quelle loi met fin aux cases pré-cochées en vente à distance ?", ["La loi Hamon (2014)", "La LCEN (2004)", "La loi Royer (1973)", "La loi PACTE (2019)"], "Elle fixe aussi 14 jours de rétractation et un remboursement sous 14 jours.");
qcm("juri", "Que réclame la directive DSP2 ?", ["L’authentification forte des paiements", "Le consentement aux cookies", "Les mentions légales", "La fin du plastique"], "DSP2 / Omnibus / ePrivacy (2019-2022).");
qcm("juri", "Qui règle gratuitement un litige entre un client et un commerçant ?", ["Le médiateur de la consommation", "La CNAC", "L’Autorité de la concurrence", "La SACEM"], "Le médiateur de la consommation est gratuit.");
vf("juri", "Un client a 14 jours pour se rétracter après un achat en magasin.", false, "Faux : le droit de rétractation concerne la vente à distance et hors établissement.");
vf("juri", "Être en position dominante est interdit.", false, "Faux : être dominant n’est pas interdit ; en abuser l’est.");
vf("juri", "Une entente entre concurrents est interdite même sans dommage prouvé.", true, "Vrai (art. L420-1).");
vf("juri", "Un projet peut avoir un permis de construire et être refusé par la CDAC.", true, "Vrai : permis de construire et autorisation d’exploitation commerciale sont deux choses différentes.");
vf("juri", "La garantie commerciale peut remplacer la garantie légale.", false, "Faux : facultative, elle s’ajoute aux garanties légales sans jamais les remplacer.");
vf("juri", "La norme ISO 26000 est certifiable.", false, "Faux : c’est une norme de lignes directrices, non certifiable.");

/* ===================== 5. GESTION DE STOCK ===================== */
qcm("stock", "Comment calcule-t-on le stock moyen ?", ["(SI + SF) ÷ 2", "SI + SF", "SI − SF", "(SI × SF) ÷ 2"], "Le stock moyen est la base des ratios de rotation.");
qcm("stock", "Quelle est la formule du stock final ?", ["SF = SI + Entrées − Sorties", "SF = SI − Entrées + Sorties", "SF = (SI + Entrées) ÷ 2", "SF = Sorties − SI"], "Entrées = réceptions, transferts. Sorties = ventes et démarques.");
qcm("stock", "Qu’est-ce que le stock réel (SR) ?", ["Ce qu’il y a physiquement : rayon + réserve", "Ce qu’indique le système informatique", "Le stock au début de la période", "Le stock de sécurité"], "L’écart entre SR et stock théorique révèle pertes et erreurs.");
qcm("stock", "Quelle vente moyenne sert de base au stock minimal ?", ["La VMJ (vente moyenne journalière)", "La VMH (hebdomadaire)", "La VMM (mensuelle)", "La VMA (annuelle)"], "Sm = VMJ × délai de livraison.");
qcm("stock", "Comment calcule-t-on le coefficient de rotation ?", ["Quantités vendues ÷ stock moyen", "Stock moyen ÷ quantités vendues", "Période ÷ stock moyen", "SI − SF"], "Plus il est élevé, plus le stock tourne.");
qcm("stock", "Comment calcule-t-on le stock minimal (Sm) ?", ["VMJ × délai de livraison", "VMH × délai de livraison", "Sm + VMH", "SA + SS"], "Ex. : 50 × 4 = 200. On calcule toujours Sm en premier.");
qcm("stock", "Selon la fiche, comment calcule-t-on le stock de sécurité (SS) ?", ["Sm + VMH", "VMJ × délai", "Sm + SS", "SA + SS"], "Ex. : 200 + 350 = 550. Il couvre les imprévus (retard, pic).");
qcm("stock", "Quel niveau de stock déclenche la commande ?", ["Le stock d’alerte", "Le stock minimal", "Le stock moyen", "Le stock final"], "Stock d’alerte = Sm + SS.");
qcm("stock", "Que signifie UVC ?", ["Unité de vente consommateur", "Unité de valeur commerciale", "Unité de volume conditionné", "Unité vendue en caisse"], "L’article tel que le client l’achète, à l’unité.");
qcm("stock", "Que représente le PCB ?", ["Le nombre d’UVC dans un carton du fournisseur", "Le prix catalogue de base", "Le poids du colis brut", "Le nombre de cartons par palette"], "PCB = « par combien » (case pack).");
qcm("stock", "Pour calculer une commande, quel stock utilise-t-on ?", ["Le stock restant réel (rayon + réserve)", "Le stock théorique", "Le stock moyen", "Le stock initial"], "Jamais le stock théorique.");
qcm("stock", "Les réservations click & collect…", ["S’ajoutent au besoin (déjà vendues)", "Se retranchent du besoin", "Ne comptent pas", "Remplacent le stock de sécurité"], "Besoin = VMH × période + VMH × délai + SS + présentation + click & collect.");
qcm("stock", "Comment arrondir une commande ?", ["Au carton (PCB) supérieur", "Au carton inférieur", "À la dizaine", "On n’arrondit jamais"], "ARRONDI.SUP(commande ÷ PCB ; 0) × PCB.");
qcm("stock", "Dans un cadencier, comment calcule-t-on les ventes de la période ?", ["Stock précédent + livré − stock compté", "Stock compté − livré", "Livré − stock précédent", "Stock compté + livré"], "Ex. : 10 + 6 − 9 = 7.");
qcm("stock", "Quel est le piège classique du cadencier ?", ["Utiliser le stock théorique au lieu du stock compté", "Compter le stock en réserve", "Noter les livraisons", "Remplir chaque passage"], "Le cadencier fonde chaque commande sur des chiffres réels.");
qcm("stock", "Un taux d’écoulement de 100 % signifie…", ["Rupture : des ventes ont été perdues", "Le stock est parfait", "Il y a du stock mort", "Rien de particulier"], "Taux faible = risque de stock mort.");
qcm("stock", "Comment calcule-t-on l’engagement à l’achat N ?", ["Quantités prévues × PA HT", "Quantités prévues × PV TTC soldé", "Quantités vendues × PV TTC", "Quantités achetées × PA TTC"], "L’engagement à la vente TTC = quantités prévues × PV TTC soldé.");
qcm("stock", "Quels sont les trois documents à rapprocher à la réception ?", ["Bon de commande, bon de livraison, lettre de voiture", "Facture, devis, avoir", "Cadencier, planogramme, BL", "CGV, bon de commande, inventaire"], "BC, BL et LdV.");
qcm("stock", "Qu’est-ce que la lettre de voiture ?", ["Le contrat de transport entre transporteur et expéditeur", "La facture du fournisseur", "Le bon de commande", "Le permis du chauffeur"], "On y inscrit les réserves précises.");
qcm("stock", "Sous quel délai confirmer les réserves par lettre recommandée AR ?", ["3 jours (hors jours fériés)", "24 h", "14 jours", "1 mois"], "Réserves précises et motivées, puis confirmation sous 3 jours.");
qcm("stock", "Que faire face à un colis endommagé ?", ["Réserves précises sur la LdV, photos, prévenir le transporteur", "Le refuser sans rien écrire", "L’accepter et le signaler plus tard", "Le jeter"], "Ex. de réserve : « 1 colis écrasé réf. … ».");
qcm("stock", "Que faire en cas de quantité manquante ?", ["Réserve sur le BL, ne payer que le livré", "Payer la commande complète", "Refuser toute la livraison", "Ne rien faire"], "Vérifier s’il s’agit d’un reliquat ou d’une rupture.");
qcm("stock", "Que signifie Seiri dans les 5S ?", ["Éliminer (trier)", "Ranger", "Nettoyer", "Standardiser"], "Retirer l’inutile : cartons vides, PLV périmée…");
qcm("stock", "Que signifie Seiton dans les 5S ?", ["Ranger", "Éliminer", "Respecter", "Nettoyer"], "Une place pour chaque chose, chaque chose à sa place.");
qcm("stock", "Que signifie Shitsuke dans les 5S ?", ["Respecter (faire durer)", "Standardiser", "Nettoyer", "Trier"], "Rituels et mini-audits pour tenir dans le temps.");
qcm("stock", "Que signifie Kanban ?", ["Étiquette", "Rangement", "Inventaire", "Commande"], "La consommation réelle déclenche le réassort (système à deux bacs).");
qcm("stock", "FIFO correspond à…", ["PEPS : premier entré, premier sorti", "PPPS : premier périmé, premier sorti", "DEPS : dernier entré, premier sorti", "Un inventaire tournant"], "On prélève l’ancien à l’avant, on range le neuf à l’arrière.");
qcm("stock", "Quelle méthode utiliser pour les produits datés ?", ["FEFO (premier périmé, premier sorti)", "LIFO", "FIFO uniquement", "Aucune"], "FEFO = PPPS.");
qcm("stock", "Dans le zonage ABC, les produits A représentent…", ["≈ 20 % des références pour ≈ 80 % des sorties", "≈ 50 % des références pour ≈ 5 % des sorties", "≈ 30 % des références pour ≈ 15 % des sorties", "100 % des références"], "Les A vont près de la porte, à hauteur d’homme.");
qcm("stock", "Où ranger les produits C en réserve ?", ["Au fond, en hauteur", "Près de la porte", "À hauteur d’homme", "Dans l’allée"], "C ≈ 50 % des références pour ≈ 5 % des sorties.");
qcm("stock", "Quelle fréquence minimale pour l’inventaire légal ?", ["Une fois tous les 12 mois", "Une fois par mois", "Une fois tous les 2 ans", "Chaque semaine"], "Comptage valorisé pour la comptabilité.");
qcm("stock", "Qu’est-ce qu’un inventaire tournant ?", ["Un comptage par zone ou famille selon un planning sur l’année", "Un comptage de tout le magasin en un jour", "Un suivi informatique continu", "Un comptage après une anomalie"], "L’inventaire partiel, lui, est ciblé après une anomalie.");
qcm("stock", "À quel prix valorise-t-on l’inventaire ?", ["Au PA HT", "Au PV TTC", "Au PV HT", "Au prix soldé"], "Étape 5 : contrôler, recompter, saisir, valoriser au PA HT.");
qcm("stock", "Comment calcule-t-on le coefficient multiplicateur ?", ["PV TTC ÷ PA HT", "PV HT ÷ PA HT", "PA HT ÷ PV TTC", "Marge ÷ PV HT"], "Ex. : 42 ÷ 20 = 2,10. Il intègre la marge ET la TVA.");
qcm("stock", "Le taux de marque se calcule sur…", ["Le prix de vente HT", "Le prix d’achat HT", "Le prix de vente TTC", "La marge"], "(PV HT − PA HT) × 100 ÷ PV HT.");
qcm("stock", "Le taux de marge se calcule sur…", ["Le prix d’achat HT", "Le prix de vente HT", "Le prix de vente TTC", "Le CA"], "(PV HT − PA HT) × 100 ÷ PA HT.");
qcm("stock", "Quel est le taux de TVA sur l’alimentation et les livres ?", ["5,5 %", "20 %", "10 %", "2,1 %"], "Taux normal 20 % (jouets), 10 %, 5,5 %, 2,1 %.");
qcm("stock", "Quel est le taux de TVA des médicaments remboursables et de la presse ?", ["2,1 %", "5,5 %", "10 %", "0 %"], "2,1 % : médicaments remboursables, presse.");
qcm("stock", "Quel est le taux normal de TVA en Guadeloupe, Martinique et à La Réunion ?", ["8,5 %", "20 %", "5,5 %", "Non applicable"], "En Guyane et à Mayotte, la TVA n’est pas applicable.");
qcm("stock", "Depuis quand le taux normal de TVA est-il de 20 % ?", ["2014", "1954", "2000", "2020"], "La TVA a été créée en 1954 ; 20 % depuis 2014.");
qcm("stock", "Qu’est-ce que la surmarque ?", ["Une erreur d’appréciation des quantités achetées", "Une marge supplémentaire", "Un vol identifié", "Une casse"], "Le surstock sera écoulé avec des baisses de prix.");
qcm("stock", "La casse enregistrée dans le cahier de casse est une…", ["Démarque connue", "Démarque inconnue", "Surmarque", "Marge nette"], "Démarque connue : casse, vol reconnu, démarque promotionnelle.");
qcm("stock", "Qu’est-ce que la démarque inconnue ?", ["L’écart entre stock théorique et stock réel, sans cause identifiée", "La casse enregistrée", "Une baisse de prix promotionnelle", "Un retour fournisseur"], "En moyenne 1 à 1,5 % du CA.");
vf("stock", "Une rotation peut se calculer en € ÷ unités.", false, "Faux : toujours € ÷ € ou unités ÷ unités.");
vf("stock", "Le taux de marge est toujours supérieur au taux de marque.", true, "Vrai : la même marge est divisée par un prix d’achat plus petit que le prix de vente.");
vf("stock", "Un retour fournisseur remboursé par avoir est une démarque.", false, "Faux : ce n’est pas une démarque.");
vf("stock", "En réserve, on range le lourd en bas et le léger en haut.", true, "Vrai : règle de sécurité.");

/* ===================== 6. CALCULS : questions fixes ===================== */
qcm("calc", "Quel taux utilise-t-on en magasin (sur la vente) ?", ["Le taux de marque", "Le taux de marge", "Le taux de TVA", "Le coefficient"], "Taux de marque en magasin ; taux de marge à l’achat, en négociation fournisseur.");
qcm("calc", "Comment passer d’un taux de marque à un taux de marge ?", ["Tx marge = tx marque ÷ (1 − tx marque)", "Tx marge = tx marque × (1 + tx marque)", "Tx marge = 1 − tx marque", "Tx marge = tx marque ÷ (1 + tx marque)"], "Et tx marque = tx marge ÷ (1 + tx marge).");
qcm("calc", "Quelle fonction Excel arrondit au supérieur (ménages, colis) ?", ["ARRONDI.SUP", "ARRONDI", "SOMME", "MOYENNE"], "ARRONDI.SUP(x;0) = ROUNDUP.");
qcm("calc", "À quoi sert la touche F4 dans Excel ?", ["Figer une référence : A1 → $A$1", "Modifier la cellule", "Faire une somme automatique", "Enregistrer"], "F2 modifie la cellule ; Alt + = fait la somme automatique.");
qcm("calc", "Que signifie un IS moyen (ISM) supérieur à 1 ?", ["Le produit est à l’étroit", "Le produit a trop de place", "Le produit est parfait", "Le produit doit être retiré"], "ISM > 1 à l’étroit · < 1 trop de place.");
qcm("calc", "Comment calcule-t-on l’ISCA ?", ["% CA ÷ % linéaire", "% linéaire ÷ % CA", "CA ÷ linéaire", "% CA × % linéaire"], "Même logique pour l’ISMB (% marge) et l’ISV (% ventes).");
qcm("calc", "Dans un tri Pareto / ABC, jusqu’où vont les produits B ?", ["Jusqu’à 95 % du CA cumulé", "Jusqu’à 80 %", "Jusqu’à 50 %", "Jusqu’à 100 %"], "A jusqu’à ≈ 80 %, B jusqu’à 95 %, C le reste.");
qcm("calc", "Combien mesure une unité de passage (1 UP) ?", ["0,90 m", "1,40 m", "0,60 m", "1,20 m"], "1 UP = 0,90 m ; 2 UP = 1,40 m.");
qcm("calc", "Comment calcule-t-on le taux de transformation ?", ["Nb d’acheteurs ÷ nb de visiteurs × 100", "CA ÷ nb de passages caisse", "Nb d’articles ÷ nb de passages", "Entrées rayon ÷ entrées magasin"], "CA ÷ passages caisse = panier moyen.");
qcm("calc", "Comment calcule-t-on le linéaire développé ?", ["Linéaire au sol × nombre de niveaux", "Linéaire au sol ÷ nombre de niveaux", "Facings × profondeur", "Linéaire actuel × ISM"], "Linéaire optimal = linéaire actuel × ISM.");
qcm("calc", "Quelle est la démarche de rédaction attendue (10-15 lignes) ?", ["Constat chiffré → analyse (causes) → actions concrètes", "Actions → constat → conclusion", "Introduction → développement → conclusion", "Calculs uniquement"], "Actions concrètes, datées, mesurables.");
qcm("calc", "Quelle est la formule de la commande de base ?", ["C = (VMH × PAC) − SF", "C = VMH + SF", "C = SF ÷ VMH", "C = VMJ × délai"], "PAC = période à couvrir.");
