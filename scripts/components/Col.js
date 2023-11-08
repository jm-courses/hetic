export default {
  name:  'Col',

  /*html*/
  template:
  `<div class="col" v-bind="$attrs">
    <slot></slot>
  </div>`
}