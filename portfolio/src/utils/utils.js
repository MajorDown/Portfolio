export function calculAge(dateNaissance) {
  // DEFINIR LA DATE ACTUELLE
  const dateActuelle = new Date();
  const anneeActuelle = dateActuelle.getFullYear();
  const moisActuel = dateActuelle.getMonth() + 1;
  const jourActuel = dateActuelle.getDate();
  // DEFINIR LA DATE DE NAISSANCE
  const anneeNaissance = parseInt(dateNaissance.substring(0, 4));
  const moisNaissance = parseInt(dateNaissance.substring(5, 7));
  const jourNaissance = parseInt(dateNaissance.substring(8, 10));
  // CALCULER L'AGE
  let age = anneeActuelle - anneeNaissance;
  if (
    moisActuel < moisNaissance ||
    (moisActuel === moisNaissance && jourActuel < jourNaissance)
  ) {
    age--;
  }
  return age;
}
