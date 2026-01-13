import BaseButton from "./components/BaseButton.vue";

const components = [BaseButton];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { BaseButton };
export default { install };
