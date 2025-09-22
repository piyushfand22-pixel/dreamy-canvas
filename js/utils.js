// Basic utilities for DOM and storage (global namespace)
(function attachUtilsGlobal() {
  function select(selector, parent = document) {
    return parent.querySelector(selector);
  }
  function selectAll(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
  }
  function readJsonFromLocalStorage(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  }
  function writeJsonToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  function formatCurrencyINR(amount) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  }
  window.Utils = { select, selectAll, readJsonFromLocalStorage, writeJsonToLocalStorage, formatCurrencyINR };
})();


