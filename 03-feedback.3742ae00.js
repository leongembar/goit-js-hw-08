function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var r,i,o,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,u=setTimeout(j,t),l?b(e):a}function x(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function j(){var e=m();if(x(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?p(n,o-(e-c)):n}(e))}function O(e){return u=void 0,v&&r?b(e):(r=i=void 0,a)}function T(){var e=m(),n=x(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},T.flush=function(){return void 0===u?a:O(m())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const b={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};let S;S=JSON.parse(localStorage.getItem("feedback-form-state"))||{},b.input.value=S.email||"",b.textarea.value=S.message||"",b.form.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),console.log(S),S={},e.currentTarget.reset()})),b.input.addEventListener("input",e(t)((function(e){const t=e.target.value;S.email=t,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),b.textarea.addEventListener("input",e(t)((function(e){const t=e.target.value;S.message=t,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500));
//# sourceMappingURL=03-feedback.3742ae00.js.map