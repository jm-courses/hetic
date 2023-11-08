import Col from './Col.js';

export default {
  name: 'Card',
  components: { Col },
  props: ['img', 'title', 'description', 'pdf', 'url'],
  /*html*/
  template: `<Col>
      <div class="card" v-bind="$attrs">
        <div class="ratio ratio-16x9">
          <img :src="img" class="card-img-top object-fit-fill" alt="">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ description }}</p>
          <div class="btn-group" role="group" aria-label="Actions">
            <a v-if="pdf" download :href="pdf" class="btn btn-danger" title="Télécharger en PDF">Télécharger</a>
            <a v-if="url" :href="url" class="btn btn-primary" title="Consulter en ligne">Consulter</a>
          </div>
        </div>
      </div>
    </Col>`,
};
