import React, { useState } from "react";
import styles from "../styles/CalculateurStyle.module.css";

export default function CalculTabac() {
  const [data, setData] = useState({
    dateArret: "",
    typeConso: "paquet",
    nbCigarettes: "",
    prixPaquet: "",
    prixMensuelTabac: "",
  });

  const [res, setRes] = useState({
    jours: 0,
    cigarettesEvit: 0,
    argent: "0.00",
    temps: "0h 0min",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const calculer = (e) => {
    e.preventDefault();

    const now = new Date();
    const start = new Date(data.dateArret);
    const jours = Math.max(
      0,
      Math.floor((now - start) / (1000 * 60 * 60 * 24))
    );

    let argent = 0;
    const cigarettesEvit = jours * Number(data.nbCigarettes);

    if (data.typeConso === "paquet") {
      argent = cigarettesEvit * (Number(data.prixPaquet) / 20);
    } else {
      argent = jours * (Number(data.prixMensuelTabac) / 30);
    }

    const minutesGagnes = cigarettesEvit * 11;
    const joursTemps = Math.floor(minutesGagnes / 1440);
    const heuresTemps = Math.floor((minutesGagnes % 1440) / 60);
    const minutesRestantes = minutesGagnes % 60;
    const temps =
      joursTemps > 0
        ? `${joursTemps}j ${heuresTemps}h`
        : `${heuresTemps}h ${minutesRestantes}min`;

    setRes({
      jours,
      cigarettesEvit,
      argent: argent.toFixed(2),
      temps,
    });
  };

  return (
    <div className={styles.container}>
      <h2>Calculateur de la honte</h2>

      <section className={styles.resultsSection}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.smoke}></div>
            <h3>Cigarettes évitées</h3>
            <p>{res.cigarettesEvit}</p>
          </div>
          <div className={styles.card}>
            <div className={styles.smoke}></div>
            <h3>Argent économisé</h3>
            <p>{res.argent} €</p>
          </div>
          <div className={styles.card}>
            <div className={styles.smoke}></div>
            <h3>Temps de vie gagné</h3>
            <p>{res.temps}</p>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <form onSubmit={calculer} className={styles.form}>
          <label>
            Date d’arrêt
            <input
              type="date"
              name="dateArret"
              value={data.dateArret}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Type de consommation
            <select
              name="typeConso"
              value={data.typeConso}
              onChange={handleChange}
            >
              <option value="paquet">Paquet</option>
              <option value="tabac">Tabac à rouler / tubes</option>
            </select>
          </label>

          <label>
            Cigarettes / jour
            <input
              type="number"
              name="nbCigarettes"
              value={data.nbCigarettes}
              onChange={handleChange}
              required
            />
          </label>

          {data.typeConso === "paquet" ? (
            <label>
              Prix du paquet (€)
              <input
                type="number"
                step="0.01"
                name="prixPaquet"
                value={data.prixPaquet}
                onChange={handleChange}
                required
              />
            </label>
          ) : (
            <label>
              Dépense mensuelle (€)
              <input
                type="number"
                step="0.01"
                name="prixMensuelTabac"
                value={data.prixMensuelTabac}
                onChange={handleChange}
                required
              />
            </label>
          )}

          <button type="submit">Calculer</button>
        </form>
      </section>
    </div>
  );
}
