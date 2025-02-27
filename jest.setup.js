/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-empty-function */

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};

import '@testing-library/jest-dom';
