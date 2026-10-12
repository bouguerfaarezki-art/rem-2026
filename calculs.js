/*
 * Exercices de calcul générés au hasard : les chiffres changent à chaque partie.
 * Chaque générateur renvoie { q: énoncé, a: réponse, unit: unité affichée, d: décimales, e: correction détaillée }.
 * Formules tirées des fiches « Gestion de stock », « Marchandisage d’organisation » et « Les principaux calculs de l’examen ».
 */

function rnd(min, max, step = 1) {
  const n = Math.floor((max - min) / step + 1);
  return +(min + step * Math.floor(Math.random() * n)).toFixed(4);
}
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function r2(x) { return Math.round(x * 100) / 100; }
function f(x, d = 2) { return Number(x).toLocaleString("fr-FR", { maximumFractionDigits: d }); }

const GENERATORS = {
  tauxMarque() {
    const pa = rnd(10, 80), pv = r2(pa * rnd(1.3, 2, 0.05)), a = r2((pv - pa) * 100 / pv);
    return { q: `Un article est acheté ${f(pa)} € HT et vendu ${f(pv)} € HT. Quel est le taux de marque ?`, a, unit: "%", d: 2,
      e: `Taux de marque = (PV HT − PA HT) × 100 ÷ PV HT = (${f(pv)} − ${f(pa)}) × 100 ÷ ${f(pv)} = ${f(a)} %` };
  },
  tauxMarge() {
    const pa = rnd(10, 80), pv = r2(pa * rnd(1.3, 2, 0.05)), a = r2((pv - pa) * 100 / pa);
    return { q: `Un article est acheté ${f(pa)} € HT et vendu ${f(pv)} € HT. Quel est le taux de marge ?`, a, unit: "%", d: 2,
      e: `Taux de marge = (PV HT − PA HT) × 100 ÷ PA HT = (${f(pv)} − ${f(pa)}) × 100 ÷ ${f(pa)} = ${f(a)} %` };
  },
  pvhtDepuisMarge() {
    const pa = rnd(5, 60), t = pick([25, 40, 50, 60, 75, 80]), a = r2(pa * (1 + t / 100));
    return { q: `Prix d’achat HT : ${f(pa)} €. Taux de marge : ${t} %. Quel est le prix de vente HT ?`, a, unit: "€", d: 2,
      e: `PV HT = PA HT × (1 + taux de marge) = ${f(pa)} × ${f(1 + t / 100)} = ${f(a)} €` };
  },
  pvhtDepuisMarque() {
    const pa = rnd(5, 60), t = pick([20, 25, 30, 40, 50]), a = r2(pa / (1 - t / 100));
    return { q: `Prix d’achat HT : ${f(pa)} €. Taux de marque : ${t} %. Quel est le prix de vente HT ?`, a, unit: "€", d: 2,
      e: `PV HT = PA HT ÷ (1 − taux de marque) = ${f(pa)} ÷ ${f(1 - t / 100)} = ${f(a)} €` };
  },
  ttcDepuisHt() {
    const ht = rnd(2, 150, 0.5), tva = pick([20, 5.5]), a = r2(ht * (1 + tva / 100));
    return { q: `Un produit est vendu ${f(ht)} € HT, TVA ${f(tva)} %. Quel est le prix TTC ?`, a, unit: "€", d: 2,
      e: `PV TTC = PV HT × (1 + TVA) = ${f(ht)} × ${f(1 + tva / 100, 3)} = ${f(a)} €` };
  },
  htDepuisTtc() {
    const tva = pick([20, 5.5]), ht = rnd(2, 150, 0.5), ttc = r2(ht * (1 + tva / 100)), a = r2(ttc / (1 + tva / 100));
    return { q: `Un produit est affiché ${f(ttc)} € TTC, TVA ${f(tva)} %. Quel est le prix HT ?`, a, unit: "€", d: 2,
      e: `HT = TTC ÷ (1 + TVA) = ${f(ttc)} ÷ ${f(1 + tva / 100, 3)} = ${f(a)} €` };
  },
  coefficient() {
    const pa = rnd(10, 60), ttc = r2(pa * rnd(1.6, 2.6, 0.1)), a = r2(ttc / pa);
    return { q: `PA HT : ${f(pa)} €. PV TTC : ${f(ttc)} €. Quel est le coefficient multiplicateur ?`, a, unit: "", d: 2,
      e: `Coefficient = PV TTC ÷ PA HT = ${f(ttc)} ÷ ${f(pa)} = ${f(a)}` };
  },
  pvttcDepuisCoef() {
    const pa = rnd(5, 60), c = rnd(1.5, 2.8, 0.1), a = r2(pa * c);
    return { q: `PA HT : ${f(pa)} €. Coefficient multiplicateur : ${f(c)}. Quel est le PV TTC ?`, a, unit: "€", d: 2,
      e: `PV TTC = PA HT × coefficient = ${f(pa)} × ${f(c)} = ${f(a)} €` };
  },
  margeDepuisMarque() {
    const t = pick([20, 25, 30, 35, 40, 50]), a = r2(t / (100 - t) * 100);
    return { q: `Le taux de marque est de ${t} %. Quel est le taux de marge correspondant ?`, a, unit: "%", d: 2,
      e: `Tx marge = tx marque ÷ (1 − tx marque) = ${f(t / 100)} ÷ ${f(1 - t / 100)} = ${f(a)} %` };
  },
  marqueDepuisMarge() {
    const t = pick([25, 40, 50, 60, 75, 100]), a = r2(t / (100 + t) * 100);
    return { q: `Le taux de marge est de ${t} %. Quel est le taux de marque correspondant ?`, a, unit: "%", d: 2,
      e: `Tx marque = tx marge ÷ (1 + tx marge) = ${f(t / 100)} ÷ ${f(1 + t / 100)} = ${f(a)} %` };
  },
  cos() {
    const s = rnd(400, 2400, 100), ml = rnd(Math.round(s * 0.15 / 10) * 10, Math.round(s * 0.4 / 10) * 10, 10), a = r2(ml / s * 100);
    return { q: `Un magasin de ${f(s)} m² compte ${f(ml)} mètres linéaires au sol. Quel est son COS ?`, a, unit: "%", d: 2,
      e: `COS = mètres linéaires au sol ÷ surface de vente × 100 = ${f(ml)} ÷ ${f(s)} × 100 = ${f(a)} %` };
  },
  stockMoyen() {
    const si = rnd(200, 2000, 50), sf = rnd(100, 1800, 50), a = (si + sf) / 2;
    return { q: `Stock initial : ${f(si)} unités. Stock final : ${f(sf)} unités. Quel est le stock moyen ?`, a, unit: "unités", d: 1,
      e: `SM = (SI + SF) ÷ 2 = (${f(si)} + ${f(sf)}) ÷ 2 = ${f(a)} unités` };
  },
  rotation() {
    const si = rnd(400, 1600, 100), sf = rnd(200, 1200, 100), sm = (si + sf) / 2, qv = rnd(1000, 6000, 100), a = r2(qv / sm);
    return { q: `SI = ${f(si)} u, SF = ${f(sf)} u, quantités vendues = ${f(qv)} u. Quel est le coefficient de rotation ?`, a, unit: "", d: 2,
      e: `SM = (${f(si)} + ${f(sf)}) ÷ 2 = ${f(sm)} u. CR = QV ÷ SM = ${f(qv)} ÷ ${f(sm)} = ${f(a)}` };
  },
  couverture() {
    const v = rnd(10, 80), s = rnd(100, 1500, 10), a = r2(s / v);
    return { q: `Il reste ${f(s)} unités en stock et on vend en moyenne ${v} unités par jour. Quelle est la couverture ?`, a, unit: "jours", d: 2,
      e: `Couverture = stock ÷ ventes moyennes par jour = ${f(s)} ÷ ${v} = ${f(a)} jours` };
  },
  stockMinimal() {
    const vmj = rnd(10, 90, 5), d = rnd(2, 7), a = vmj * d;
    return { q: `VMJ = ${vmj} unités, délai de livraison = ${d} jours. Quel est le stock minimal ?`, a, unit: "unités", d: 0,
      e: `Sm = VMJ × délai = ${vmj} × ${d} = ${a} unités` };
  },
  stockAlerte() {
    const vmj = rnd(10, 60, 5), d = rnd(2, 6), vmh = vmj * 7, sm = vmj * d, ss = sm + vmh, a = sm + ss;
    return { q: `VMJ = ${vmj} u, délai = ${d} jours, VMH = ${vmh} u. Selon la méthode de la fiche, quel est le stock d’alerte ?`, a, unit: "unités", d: 0,
      e: `Sm = ${vmj} × ${d} = ${sm} ; SS = Sm + VMH = ${sm} + ${vmh} = ${ss} ; SA = Sm + SS = ${sm} + ${ss} = ${a} unités` };
  },
  commandeCartons() {
    const vmh = rnd(10, 40), per = rnd(1, 3), del = rnd(1, 2), pcb = pick([4, 6, 8, 12]), ss = pcb, pres = rnd(2, 6), cc = rnd(0, 5);
    const besoin = vmh * per + vmh * del + ss + pres + cc, rel = pick([0, pcb]), stock = rnd(3, Math.min(30, besoin - rel - 1));
    const arith = besoin - stock - rel, a = Math.ceil(arith / pcb);
    return { q: `VMH = ${vmh}, période de commande = ${per} sem., délai = ${del} sem., stock de sécurité = ${ss}, stock de présentation = ${pres}, click & collect = ${cc}, stock restant réel = ${stock}, reliquat = ${rel}, PCB = ${pcb}. Combien de cartons commander ?`, a, unit: "cartons", d: 0,
      e: `Besoin = ${vmh}×${per} + ${vmh}×${del} + ${ss} + ${pres} + ${cc} = ${besoin}. Commande arithmétique = ${besoin} − ${stock} − ${rel} = ${arith}. ${arith} ÷ ${pcb} = ${f(arith / pcb)} → arrondi au supérieur : ${a} cartons (${a * pcb} UVC).` };
  },
  cadencier() {
    const prev = rnd(5, 30), liv = pick([6, 12, 18, 24]), cpt = rnd(2, prev + liv - 1), a = prev + liv - cpt;
    return { q: `Cadencier : stock compté au passage précédent = ${prev}, livré = ${liv}, stock compté aujourd’hui = ${cpt}. Combien d’unités ont été vendues ?`, a, unit: "unités", d: 0,
      e: `Ventes = stock précédent + livré − stock compté = ${prev} + ${liv} − ${cpt} = ${a}` };
  },
  menages() {
    const h = rnd(8000, 60000, 500), t = pick([2.1, 2.2, 2.3, 2.4, 2.5]), a = Math.ceil(h / t);
    return { q: `La zone de chalandise compte ${f(h)} habitants, avec ${f(t)} habitants par ménage. Combien de ménages (arrondi supérieur) ?`, a, unit: "ménages", d: 0,
      e: `Ménages = habitants ÷ habitants par ménage = ${f(h)} ÷ ${f(t)} = ${f(h / t)} → arrondi supérieur : ${f(a)}` };
  },
  caPotentiel() {
    const dep = rnd(200000, 900000, 1000), ev = pick([15, 18, 20, 22, 25]), emp = pick([20, 25, 30, 35]);
    const reste = r2(dep * (1 - ev / 100)), conc = r2(reste * emp / 100), a = r2(reste - conc);
    return { q: `Dépenses du produit sur la zone : ${f(dep)} €. Évasion commerciale : ${ev} %. Emprise de la concurrence : ${emp} %. Quel est le CA potentiel du magasin ?`, a, unit: "€", d: 2,
      e: `Évasion = ${f(dep)} × ${ev} % = ${f(dep * ev / 100)} € ; revenu restant = ${f(reste)} € ; CA concurrence = ${f(reste)} × ${emp} % = ${f(conc)} € ; CA potentiel = ${f(reste)} − ${f(conc)} = ${f(a)} €` };
  },
  panierMoyen() {
    const p = rnd(800, 4000, 10), ca = r2(p * rnd(15, 60, 0.5)), a = r2(ca / p);
    return { q: `CA de la journée : ${f(ca)} €, pour ${f(p)} passages en caisse. Quel est le panier moyen ?`, a, unit: "€", d: 2,
      e: `Panier moyen = CA ÷ nb de passages caisse = ${f(ca)} ÷ ${f(p)} = ${f(a)} €` };
  },
  transformation() {
    const v = rnd(500, 3000, 10), ach = rnd(Math.round(v * 0.3), Math.round(v * 0.9)), a = r2(ach / v * 100);
    return { q: `${f(v)} visiteurs sont entrés et ${f(ach)} ont acheté. Quel est le taux de transformation ?`, a, unit: "%", d: 2,
      e: `Taux de transformation = acheteurs ÷ visiteurs × 100 = ${f(ach)} ÷ ${f(v)} × 100 = ${f(a)} %` };
  },
  evolution() {
    const n1 = rnd(50000, 500000, 1000), r = r2(n1 * rnd(0.8, 1.25, 0.01)), a = r2((r - n1) / n1 * 100);
    return { q: `CA N-1 : ${f(n1)} €. CA réalisé : ${f(r)} €. Quelle est l’évolution (en %) ?`, a, unit: "%", d: 2,
      e: `Évolution = (réalisé − N-1) ÷ N-1 × 100 = (${f(r)} − ${f(n1)}) ÷ ${f(n1)} × 100 = ${f(a)} %` };
  },
  indiceProgression() {
    const o = rnd(50000, 400000, 1000), r = r2(o * rnd(0.85, 1.2, 0.01)), a = r2(r / o * 100);
    return { q: `Objectif : ${f(o)} €. Réalisé : ${f(r)} €. Quel est l’indice de progression ?`, a, unit: "", d: 2,
      e: `Indice = réalisé ÷ objectif × 100 = ${f(r)} ÷ ${f(o)} × 100 = ${f(a)} (${a > 100 ? "objectif dépassé" : "objectif non atteint"})` };
  },
  isca() {
    const pca = rnd(5, 40, 0.5), pl = rnd(5, 40, 0.5), a = r2(pca / pl);
    return { q: `Une référence fait ${f(pca)} % du CA du rayon et occupe ${f(pl)} % du linéaire. Quel est son ISCA ?`, a, unit: "", d: 2,
      e: `ISCA = % CA ÷ % linéaire = ${f(pca)} ÷ ${f(pl)} = ${f(a)} (${a > 1 ? "> 1 : à l’étroit" : a < 1 ? "< 1 : trop de place" : "= 1 : équilibré"})` };
  },
  lineaireOptimal() {
    const l = rnd(2, 12, 0.5), ism = rnd(0.6, 1.5, 0.05), a = r2(l * ism);
    return { q: `Linéaire actuel : ${f(l)} m. IS moyen : ${f(ism)}. Quel est le linéaire optimal ?`, a, unit: "m", d: 2,
      e: `Linéaire optimal = linéaire actuel × ISM = ${f(l)} × ${f(ism)} = ${f(a)} m` };
  },
  lineaireDeveloppe() {
    const l = rnd(2, 20, 0.5), n = rnd(3, 7), a = r2(l * n);
    return { q: `Un rayon fait ${f(l)} m de linéaire au sol, sur ${n} niveaux. Quel est le linéaire développé ?`, a, unit: "m", d: 2,
      e: `Linéaire développé = linéaire au sol × nb de niveaux = ${f(l)} × ${n} = ${f(a)} m` };
  },
  ecoulement() {
    const ach = rnd(100, 1000, 10), v = rnd(Math.round(ach * 0.4), ach), a = r2(v / ach * 100);
    return { q: `Pour les soldes N-1, ${f(ach)} unités ont été achetées et ${f(v)} vendues. Quel est le taux d’écoulement ?`, a, unit: "%", d: 2,
      e: `Taux d’écoulement = vendu ÷ acheté × 100 = ${f(v)} ÷ ${f(ach)} × 100 = ${f(a)} %${a === 100 ? " : rupture, des ventes ont été perdues" : ""}` };
  },
  engagementAchat() {
    const q = rnd(50, 800, 10), pa = rnd(3, 40, 0.5), a = r2(q * pa);
    return { q: `Quantités prévues : ${f(q)}. PA HT unitaire : ${f(pa)} €. Quel est l’engagement à l’achat ?`, a, unit: "€", d: 2,
      e: `Engagement à l’achat = quantités prévues × PA HT = ${f(q)} × ${f(pa)} = ${f(a)} €` };
  },
  demarqueInconnue() {
    const si = rnd(10000, 30000, 500), ach = rnd(30000, 60000, 500), sf = rnd(8000, 20000, 500), coef = pick([1.6, 1.7, 1.8, 1.9]);
    const pav = si + ach - sf, th = r2(pav * coef), reel = r2(th * rnd(0.97, 0.995, 0.005)), di = r2(th - reel), a = r2(di / reel * 100);
    return { q: `Stock initial ${f(si)} €, achats ${f(ach)} €, stock final ${f(sf)} € (au PA HT). Coefficient HT : ${f(coef)}. CA HT réel : ${f(reel)} €. Quelle est la démarque inconnue en % du CA ?`, a, unit: "%", d: 2,
      e: `PA des marchandises vendues = ${f(si)} + ${f(ach)} − ${f(sf)} = ${f(pav)} € ; CA théorique = ${f(pav)} × ${f(coef)} = ${f(th)} € ; DI = ${f(th)} − ${f(reel)} = ${f(di)} € ; DI % = ${f(di)} × 100 ÷ ${f(reel)} = ${f(a)} %` };
  },
  attractivite() {
    const e = rnd(1000, 5000, 10), r = rnd(Math.round(e * 0.3), Math.round(e * 0.8)), c = rnd(Math.round(r * 0.3), Math.round(r * 0.9));
    const ip = r / e, ia = c / e, a = r2(ia / ip);
    return { q: `${f(e)} clients entrent dans le magasin, ${f(r)} passent dans le rayon et ${f(c)} achètent dans le rayon. Quel est l’indice d’attractivité du rayon ?`, a, unit: "", d: 2,
      e: `Indice de passage = ${f(r)} ÷ ${f(e)} = ${f(ip, 3)} ; indice d’achat = ${f(c)} ÷ ${f(e)} = ${f(ia, 3)} ; attractivité = achat ÷ passage = ${f(a)}` };
  },
  margeBrute() {
    const pa = rnd(5, 60, 0.5), pv = r2(pa * rnd(1.3, 2, 0.05)), q = rnd(10, 300, 10), a = r2((pv - pa) * q);
    return { q: `${f(q)} articles achetés ${f(pa)} € HT pièce et vendus ${f(pv)} € HT pièce. Quelle est la marge brute totale ?`, a, unit: "€", d: 2,
      e: `Marge unitaire = ${f(pv)} − ${f(pa)} = ${f(r2(pv - pa))} € ; MB = ${f(r2(pv - pa))} × ${f(q)} = ${f(a)} €` };
  }
};
