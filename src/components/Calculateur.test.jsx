/* eslint-env vitest */
/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculateur from './Calculateur';

test('affiche les résultats initiaux', () => {
  render(<Calculateur />);
  expect(screen.getByText(/Cigarettes évitées/i)).toBeInTheDocument();
  expect(screen.getByText(/Argent économisé/i)).toBeInTheDocument();
  expect(screen.getByText(/Temps de vie gagné/i)).toBeInTheDocument();
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('remplit le formulaire et lance le calcul (type paquet)', async () => {
  render(<Calculateur />);

  // Remplir le formulaire
  const dateInput = screen.getByLabelText(/Date d’arrêt/i);
  const nbCigInput = screen.getByLabelText(/Cigarettes \/ jour/i);
  const prixPaquetInput = screen.getByLabelText(/Prix du paquet/i);

  await userEvent.type(dateInput, '2024-01-01');
  await userEvent.type(nbCigInput, '10');
  await userEvent.type(prixPaquetInput, '12');

  // Cliquer sur le bouton Calculer
  await userEvent.click(screen.getByRole('button', { name: /calculer/i }));

  // Vérifier que les résultats ont changé
  expect(screen.getByText(/Cigarettes évitées/i)).toBeInTheDocument();
  expect(screen.queryByText('0')).not.toBeInTheDocument(); // les valeurs changent
});
