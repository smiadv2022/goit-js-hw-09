!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,r){t[e]=r},r.parcelRequired7c6=o);var u=o("6JpON");function l(r,n){Math.random()>.3?e(u).Notify.success("✅ Fulfilled promise ".concat(r," in ").concat(n,"ms")):e(u).Notify.failure("❌ Rejected promise ".concat(r," in ").concat(n,"ms"))}document.querySelector(".form").addEventListener("submit",(function(e){var r=0,n=Number(e.currentTarget.delay.value);n=1*Number(e.currentTarget.delay.value),e.preventDefault();for(;r<e.currentTarget.amount.value;)r++,console.log("del-??/",n),console.log(r),l(r,n),n+=Number(e.currentTarget.step.value)}))}();
//# sourceMappingURL=03-promises.c5b0ea53.js.map
