import React from 'react';
import LeftSidebar from '../components/LeftSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faMicrochip, faDesktop, faChartBar, faBook } from '@fortawesome/free-solid-svg-icons';

export const Etude = () => {
  const activeChild = 'Etudes';

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/6 flex-shrink-0">
        <LeftSidebar activeChild={activeChild}>
          <div href="/" name="Accueil" icon={<FontAwesomeIcon icon={faHome} />} />
          <div href="/Circuit" name="Circuit" icon={<FontAwesomeIcon icon={faCogs} />} />
          <div href="/Stm" name="STM32" icon={<FontAwesomeIcon icon={faMicrochip} />} />
          <div href="/Ihm" name="IHM" icon={<FontAwesomeIcon icon={faDesktop} />} />
          <div href="/Etude" name="Etudes" icon={<FontAwesomeIcon icon={faChartBar} />} />
          <div href="/Biblio" name="Bibliographie" icon={<FontAwesomeIcon icon={faBook} />} />
        </LeftSidebar>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Introduction</h1>
        <p>
          L'étude et la mesure des déformations d'une poutre(la lame) à l'aide de jauges de déformation. 
          L'objectif est de prédire et de mesurer la déformation en fonction du poids appliqué et de sa position sur la poutre.
        </p>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800">Base Théorique</h2>

          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Loi de Hooke</h3>
            <p>
              Dans le domaine élastique, la relation entre contrainte et déformation est donnée par :
              <br />
              <br />
              <code className="bg-gray-200 p-1 rounded">σ = E·ε ⟹ ε = σ/E</code>
              <br />
              <br />
              où :
              <ul className="list-disc ml-6 text-gray-700">
                <li>σ est la contrainte de traction/compression</li>
                <li>E est le module d'Young du matériau</li>
                <li>ε est la déformation unitaire</li>
              </ul>
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg font-semibold text-gray-700">Théorie de la Flexion Pure</h3>
            <p>
              L'équation différentielle de la déformée selon le théorème de Bernoulli s'écrit :
              <br />
              <br />
              <code className="bg-gray-200 p-1 rounded">d²v(y)/dy² = M(y)/(EI)</code>
              <br />
              <br />
              avec :
              <ul className="list-disc ml-6 text-gray-700">
                <li>v(y) : flèche de la poutre</li>
                <li>M(y) : moment fléchissant</li>
                <li>E : module d'Young</li>
                <li>I : moment quadratique de la section</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800">Analyse Mécanique</h2>

          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Configuration du Système</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Poutre encastrée en A</li>
              <li>Force P appliquée en B ou en point C</li>
              <li>Longueur totale : L</li>
              <li>Position de la jauge : (x₀, y₀, z₀)</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Calcul des Efforts</h3>
            <p>
              Torseurs d'actions mécaniques :
              <ul className="list-disc ml-6 text-gray-700">
                <li>Liaison en A (encastrement) : τₐ = [X, M, N]</li>
                <li>Charge appliquée : τᵦ = [0, 0, -P]</li>
              </ul>
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-lg font-semibold text-gray-700">Détermination du Moment Fléchissant M(y)</h3>
            <p>
              Méthode de calcul :
              <ul className="list-decimal ml-6 text-gray-700">
                <li>Expression du torseur au point A : τₐ = [X, M, N]</li>
                <li>Expression du torseur de la force appliquée : τᵦ = [0, 0, -P]</li>
                <li>
                  Transport du torseur en un point K (section de la poutre) : 
                  τ_ck = [N, M(y), T(y)]
                </li>
                <li>
                  Calcul du moment en K par le principe de superposition :
                  <ul className="list-disc ml-6 text-gray-600">
                    <li>M<sub>K</sub> = M<sub>A</sub> + KA ∧ R⃗</li>
                    <li>
                      Pour une section située à une distance y de l'origine :
                      M(y) = P(L-y)
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>

          <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Instrumentation et Traitement des Données</h2>
            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Équation de mesure de la jauge</h3>
                <code className="bg-gray-200 p-1 rounded">V<sub>o</sub> = -GF·ε·V<sub>ex</sub> + offset·10<sup>-3</sup></code>
                <br /><br />
                où :
                <ul className="list-disc ml-6 text-gray-700">
                  <li>V<sub>o</sub> : tension de sortie mesurée (V)</li>
                  <li>GF : facteur de jauge</li>
                  <li>ε : déformation</li>
                  <li>V<sub>ex</sub> : tension d'alimentation (5V)</li>
                  <li>offset : tension en sortie à vide (mV)</li>
                </ul>
            </div>

            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Détermination de la Masse </h3>
              En combinant l'équation de la jauge avec l'expression de la déformation obtenue précédemment, on peut déterminer la masse appliquée :
              <br/>
              <ul className="list-decimal ml-6 text-gray-700 mt-2">
                <li>
                  Expression de la déformation en fonction de la tension :
                  <br />
                  <code className="bg-gray-200 p-1 rounded">
                    ε = -(V<sub>o</sub> - offset·10<sup>-3</sup>)/(GF·V<sub>ex</sub>)
                  </code>
                </li>
                <br />
                <li>
                  Expression de la déformation en fonction de la masse :
                  <br />
                  <code className="bg-gray-200 p-1 rounded">
                    ε = m·g·(L-y)·z/(EI)
                  </code>
                </li>
                <br />
                <li>
                  Expression finale de la masse :
                  <br />
                  <code className="bg-gray-200 p-1 rounded">
                    m = -(V<sub>o</sub> - offset·10<sup>-3</sup>)·EI/(GF·V<sub>ex</sub>·g·(L-y)·z)
                  </code>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800">Analyse des Cas d'Étude</h2>
            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-700">Cas 1 : Masse Variable (Position Fixe)</h3>
              <ul className="list-decimal ml-6 text-gray-700 mt-2">
                <li>Force <code>P</code> appliquée en bout de poutre (point B)</li>
                <li>Position de la charge constante (<code>y = L</code>)</li>
                <li>Expression de la déformation :</li> <br />
              <code className="bg-gray-200 p-1 rounded">ε = P(L-y)·z/(EI)</code>
              </ul>
              <br />
              <p>La déformation varie linéairement avec la charge appliquée <code>P</code>.</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-700">Cas 2 : Position Variable (Masse Fixe)</h3>
              <ul className="list-decimal ml-6 text-gray-700 mt-2">
                <li>Force <code>P</code> constante</li>
                <li>Point d'application <code>C</code> mobile tel que <code>AC = l ≤ L</code></li>
                <li>Expression de la déformation : </li><br />
              <code className="bg-gray-200 p-1 rounded">ε = P(l-y)·z/(EI) pour y ≤ l</code>
              <br /><br />
              <code className="bg-gray-200 p-1 rounded">ε = 0 pour y {'>'} l</code>
              </ul>
              <br />
              <p>La déformation varie linéairement avec la distance <code>(l-y)</code>.</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800">Conclusions</h2>

            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-700">Influence de la Masse (Cas 1)</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Relation linéaire entre la déformation et la charge appliquée</li>
                <li>Pente constante déterminée par la géométrie de la poutre et la position de la jauge</li>
                <li>Point d'application fixe en <code>B</code></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-700">Influence de la Position (Cas 2)</h3>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Relation linéaire entre la déformation et la distance au point d'application</li>
                <li>Discontinuité de la déformation au point d'application de la charge</li>
                <li>Déformation nulle au-delà du point d'application</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-lg font-semibold text-gray-700">Recommandations pour les Mesures</h3>
              <ul className="list-decimal ml-6 text-gray-700">
                <li>Vérifier la linéarité de la réponse dans les deux cas</li>
                <li>Calibrer les jauges en utilisant des charges connues</li>
                <li>Tenir compte de la position exacte des jauges pour la comparaison avec la théorie</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
