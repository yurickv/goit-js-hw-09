!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector(".form");i.addEventListener("submit",(function(e){if(e.preventDefault(),Number(u.value)<0||Number(a.value)<0||Number(l.value)<=0)return void r.Notify.failure("Please choose a digit biggest > than 0 ");for(var n=Number(u.value),t=0;t<l.value;t+=1)c(t+1,n).then((function(e){r.Notify.success(e)})).catch((function(e){r.Notify.failure(e)})),n+=Number(a.value)}));var u=i.elements.delay,a=i.elements.step,l=i.elements.amount;function c(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}}();
//# sourceMappingURL=03-promises.0e6036a4.js.map