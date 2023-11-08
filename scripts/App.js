import AccordionItem from './components/AccordionItem.js';
import Card from './components/Card.js';
import Col from './components/Col.js';

export default {
  name: 'App',
  components: { AccordionItem, Card, Col },

  /*html*/
  template: `<h1 class="mt-4">HETIC - Développement Front - HTML/CSS - Jean-Marie CLERY</h1>
    <hr>

    <div class="accordion">
      <AccordionItem title="Jour 1 - Introduction HTML">
        <Card
          title="Présentation"
          description="Présentation personnelle et du déroulement des cours"
          img="thumbs/presentation.png"
          pdf="pdfs/Présentation JM Cours.pdf"
        />

        <Card
          title="HTML Introduction"
          description="Introduction au fonctionnement du Web et au langage HTML"
          img="thumbs/intro-html.png"
          pdf="pdfs/HTML - Introduction.pdf"
          url="html/intro.html"
        />

        <Col>
          <h2>Devoirs</h2>
          <p>Lire les articles suivant et pratiquer :</p>
          <ol>
            <li><a href="https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/Getting_started" target="_blank">Commencer avec le HTML</a></li>
            <li><a href="https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML" target="_blank">Qu'avez-vous dans la tête ? Métadonnées en HTML</a></li>
            <li><a href="https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals" target="_blank">Fondamentaux du texte HTML</a></li>
            <li><a href="https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks" target="_blank">Création d'hyperliens</a></li>
          </ol>
        </Col>
      </AccordionItem>
    </div>`,
};
