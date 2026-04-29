# Refactoring — EcoTrip Calculator
**Groupe :** [Phong, Arthur C, Valentin]

---

## Principe SOLID appliqué : [nom du principe]

**Problème identifié :**
[Décrivez ce qui était violé dans le code original — localisez avec fichier + ligne]

**Transformation réalisée :**
[Ce que vous avez fait — créé une interface ? extrait une classe ? inversé une dépendance ?]

**Avant :**
```[langage]
// extrait du code original
```

**Après :**
```[langage]
// extrait du code refactoré
```

**Bénéfice concret :**
[Ce que ça change en pratique : "on peut maintenant ajouter un mode de transport sans toucher à..."]

---

## Pattern GOF appliqué : Strategy

**Problème résolu :**
[Quel problème de conception ce pattern adresse-t-il dans ce contexte ?]
Les méthodes de haut niveau qui dépendent des méthodes de bas niveau

**Structure mise en place :**
[Décrivez les classes/interfaces créées et leur rôle]
Il faut créer une interface calculate et créer des sous classes calculateCar et calculateTrain

**Bénéfice concret :**
[Ce que ça change en pratique]

---

## Object Calisthenics appliquées

### Règle #[N] — [nom de la règle]

**Violation originale :** `[fichier:ligne]`
[Extrait + explication de la violation]

**Transformation :**
[Ce que vous avez fait]

**Bénéfice :**
[En une phrase]

### Règle #[N] — [nom de la règle]

[idem]

---

## Ce qu'on ferait ensuite
[Si vous aviez 15 minutes de plus : quelle serait la prochaine transformation prioritaire et pourquoi ?]