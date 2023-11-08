export default {
  name: 'AccordionItem',
  props: ['title'],

  data() {
    return {
      uuid: null,
    };
  },

  created() {
    this.uuid = `c_${crypto.randomUUID()}`;
  },

  /*html*/
  template: `
  <div class="accordion-item" ref="itemEl" v-bind="$attrs">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + uuid" aria-expanded="true" :aria-controls="uuid">
        {{ title }}
      </button>
    </h2>
    <div :id="uuid" class="accordion-collapse collapse show" >
      <div class="accordion-body">
        <div class="row">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
  `,
};
