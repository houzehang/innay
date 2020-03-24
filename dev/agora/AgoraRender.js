"use strict";
import GlRenderer from './GlRender'
import SoftwareRenderer from './SoftwareRender'

class CustomRenderer {
  constructor() {
      throw new Error('You have to declare your own custom render');
  }
  bind(element) {
      throw new Error('You have to declare your own custom render');
  }
  unbind() {
      throw new Error('You have to declare your own custom render');
  }
  drawFrame(imageData) {
      throw new Error('You have to declare your own custom render');
  }
  setContentMode(mode) {
      throw new Error('You have to declare your own custom render');
  }
  refreshCanvas() {
      throw new Error('You have to declare your own custom render');
  }
}

export default {
  GlRenderer,
  CustomRenderer,
  // no use for SoftwareRender for Teacher
  SoftwareRenderer
};