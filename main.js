!function(e){var t={};function n(d){if(t[d])return t[d].exports;var a=t[d]={i:d,l:!1,exports:{}};return e[d].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(d,a,function(t){return e[t]}.bind(null,a));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const d=(()=>{const e=document.querySelector("#page-container"),t=n=>{(()=>{let t=e.lastChild;for(;t;)e.removeChild(t),t=e.lastChild})();const c=document.createElement("nav");c.setAttribute("id","main-nav");const i=document.createElement("ul"),o=document.createElement("img");o.setAttribute("src","/images/burger-logo2.jpg"),o.setAttribute("id","logo");const s=document.createElement("li");s.setAttribute("id","logo-li"),s.appendChild(o);const l=document.createElement("li");l.textContent="Home",l.setAttribute("id","home-li"),l.addEventListener("click",a.render);const m=document.createElement("li");m.textContent="Menu",m.setAttribute("id","menu-li"),m.addEventListener("click",(function(){d("burgers")}));const r=document.createElement("li");r.textContent="About",r.setAttribute("id","about-li");const p=document.createElement("li");p.textContent="Contact",p.setAttribute("id","contact-li"),i.appendChild(s),i.appendChild(l),i.appendChild(m),i.appendChild(r),i.appendChild(p),c.appendChild(i);const u=document.createElement("div");u.setAttribute("id","menu-content");const C=document.createElement("div");C.setAttribute("id","menu");const h=document.createElement("ul"),E=document.createElement("li");E.setAttribute("id","burgers"),E.textContent="BURGERS & SANDWICHES",E.addEventListener("click",(function(){t("burgers")}));const L=document.createElement("li");L.setAttribute("id","snacks"),L.textContent="SNACKS",L.addEventListener("click",(function(){t("snacks")}));const v=document.createElement("li");v.textContent="SALADS",v.setAttribute("id","salads");const b=document.createElement("li");if(b.textContent="DESSERTS",b.setAttribute("id","desserts"),h.appendChild(E),h.appendChild(L),h.appendChild(v),h.appendChild(b),C.appendChild(h),"burgers"===n){const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="CRAFT BURGER";const a=document.createElement("span");a.classList.add("price"),a.textContent="9$",n.appendChild(d),n.appendChild(a);const c=document.createElement("div");c.classList.add("menu-item-description");const i=document.createElement("p");i.textContent="Lettuce, Tomato, Pickles, American, Caramelized Onion, Fry Sauce",c.appendChild(i),t.appendChild(n),t.appendChild(c);const o=document.createElement("div");o.classList.add("menu-item");const s=document.createElement("div");s.classList.add("menu-item-header");const l=document.createElement("h2");l.classList.add("name"),l.textContent="FRIED CHICKEN SANDWICH";const m=document.createElement("span");m.classList.add("price"),m.textContent="10$",s.appendChild(l),s.appendChild(m);const r=document.createElement("div");r.classList.add("menu-item-description");const p=document.createElement("p");p.innerHTML="Lettuce, Tomato, Pickles, Kewpie Mayo <br> Choose from: Nashville Hot Spice Blend, Honey Garlic BBQ, or Buffalo",r.appendChild(p),o.appendChild(s),o.appendChild(r);const h=document.createElement("div");h.classList.add("menu-item");const E=document.createElement("div");E.classList.add("menu-item-header");const L=document.createElement("h2");L.classList.add("name"),L.textContent="PORK BELLY BURGER";const v=document.createElement("span");v.classList.add("price"),v.textContent="11$",E.appendChild(L),E.appendChild(v);const b=document.createElement("div");b.classList.add("menu-item-description");const f=document.createElement("p");f.textContent="Hoisin Glazed Pork Belly and Burger Patty, Gochujang Aioli, Fried Shallots, Cabbage, Cilantro",b.appendChild(f),h.appendChild(E),h.appendChild(b);const x=document.createElement("div");x.classList.add("menu-item");const A=document.createElement("div");A.classList.add("menu-item-header");const g=document.createElement("h2");g.classList.add("name"),g.textContent="VEGAN CRAFT BURGER";const S=document.createElement("span");S.classList.add("price"),S.textContent="11$",A.appendChild(g),A.appendChild(S);const B=document.createElement("div");B.classList.add("menu-item-description");const y=document.createElement("p");y.textContent="Lettuce, Tomatoes, Pickle, Cheddar, Fry Sauce",B.appendChild(y),x.appendChild(A),x.appendChild(B);const k=document.createElement("div");k.classList.add("menu-item");const H=document.createElement("div");H.classList.add("menu-item-header");const R=document.createElement("h2");R.classList.add("name"),R.textContent="BEER BATTERED FISH PO'BOY";const P=document.createElement("span");P.classList.add("price"),P.textContent="10$",H.appendChild(R),H.appendChild(P);const G=document.createElement("div");G.classList.add("menu-item-description");const T=document.createElement("p");T.textContent="Beer Battered Cod, Lettuce, Tomato, Cajun Remoulade, Pickles",G.appendChild(T),k.appendChild(H),k.appendChild(G);const O=document.createElement("div");O.classList.add("menu-item");const M=document.createElement("div");M.classList.add("menu-item-header");const F=document.createElement("h2");F.classList.add("name"),F.textContent="BBQ CHICKEN BANH MI";const j=document.createElement("span");j.classList.add("price"),j.textContent="9$",M.appendChild(F),M.appendChild(j);const I=document.createElement("div");I.classList.add("menu-item-description");const $=document.createElement("p");$.textContent="Ginger Garlic Marinated Chicken Thigh, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",I.appendChild($),O.appendChild(M),O.appendChild(I);const w=document.createElement("div");w.classList.add("menu-item");const D=document.createElement("div");D.classList.add("menu-item-header");const N=document.createElement("h2");N.classList.add("name"),N.textContent="BBQ STEAK BANH MI";const K=document.createElement("span");K.classList.add("price"),K.textContent="10$",D.appendChild(N),D.appendChild(K);const Y=document.createElement("div");Y.classList.add("menu-item-description");const U=document.createElement("p");U.textContent="Shallot Peppered Sirloin, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",Y.appendChild(U),w.appendChild(D),w.appendChild(Y);const _=document.createElement("div");_.classList.add("menu-item");const W=document.createElement("div");W.classList.add("menu-item-header");const J=document.createElement("h2");J.classList.add("name"),J.textContent="PORK BELLY BANH MI";const q=document.createElement("span");q.classList.add("price"),q.textContent="11$",W.appendChild(J),W.appendChild(q);const Q=document.createElement("div");Q.classList.add("menu-item-description");const z=document.createElement("p");z.textContent="Hoisin Sambal Glazed Belly, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",Q.appendChild(z),_.appendChild(W),_.appendChild(Q),e.appendChild(t),e.appendChild(o),e.appendChild(h),e.appendChild(x),e.appendChild(k),e.appendChild(O),e.appendChild(w),e.appendChild(_),u.appendChild(C),u.appendChild(e)}if("snacks"===n){const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="FRENCH FRIES";const a=document.createElement("span");a.classList.add("price"),a.textContent="5$",n.appendChild(d),n.appendChild(a);const c=document.createElement("div");c.classList.add("menu-item-description");const i=document.createElement("p");i.textContent="Served with Fry Sauce",c.appendChild(i),t.appendChild(n),t.appendChild(c);const o=document.createElement("div");o.classList.add("menu-item");const s=document.createElement("div");s.classList.add("menu-item-header");const l=document.createElement("h2");l.classList.add("name"),l.textContent="BEER BRINED JUMBO WINGS (6 OR 12)";const m=document.createElement("span");m.classList.add("price"),m.textContent="12/19$",s.appendChild(l),s.appendChild(m);const r=document.createElement("div");r.classList.add("menu-item-description");const p=document.createElement("p");p.innerHTML="Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, or Gochujang Honey. Served with Celery & Buttermilk Ranch or Blue Cheese",r.appendChild(p),o.appendChild(s),o.appendChild(r);const h=document.createElement("div");h.classList.add("menu-item");const E=document.createElement("div");E.classList.add("menu-item-header");const L=document.createElement("h2");L.classList.add("name"),L.textContent="CRISPY CAULIFLOWER";const v=document.createElement("span");v.classList.add("price"),v.textContent="9$",E.appendChild(L),E.appendChild(v);const b=document.createElement("div");b.classList.add("menu-item-description");const f=document.createElement("p");f.textContent="Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, Gochujang Honey, Buttermilk Ranch, or Blue Cheese.",b.appendChild(f),h.appendChild(E),h.appendChild(b);const x=document.createElement("div");x.classList.add("menu-item");const A=document.createElement("div");A.classList.add("menu-item-header");const g=document.createElement("h2");g.classList.add("name"),g.textContent="ELOTE SALSA & CHIPS";const S=document.createElement("span");S.classList.add("price"),S.textContent="7$",A.appendChild(g),A.appendChild(S);const B=document.createElement("div");B.classList.add("menu-item-description");const y=document.createElement("p");y.textContent="Roasted Sweet Corn, Pico de Gallo, Cilantro Lime Crema, Tajin, Cotija Cheese",B.appendChild(y),x.appendChild(A),x.appendChild(B);const k=document.createElement("div");k.classList.add("menu-item");const H=document.createElement("div");H.classList.add("menu-item-header");const R=document.createElement("h2");R.classList.add("name"),R.textContent="BAJA FISH TACOS";const P=document.createElement("span");P.classList.add("price"),P.textContent="7$",H.appendChild(R),H.appendChild(P);const G=document.createElement("div");G.classList.add("menu-item-description");const T=document.createElement("p");T.textContent="Beer Battered Cod, Cabbage, Pico de Gallo, Guacamole, Cilantro Lime Crema",G.appendChild(T),k.appendChild(H),k.appendChild(G);const O=document.createElement("div");O.classList.add("menu-item");const M=document.createElement("div");M.classList.add("menu-item-header");const F=document.createElement("h2");F.classList.add("name"),F.textContent="TJ DOG";const j=document.createElement("span");j.classList.add("price"),j.textContent="5$",M.appendChild(F),M.appendChild(j);const I=document.createElement("div");I.classList.add("menu-item-description");const $=document.createElement("p");$.textContent="Bacon Wrapped All Beef Dog, Grilled Fajitas, Cilantro Lime Crema, Cotija Cheese",I.appendChild($),O.appendChild(M),O.appendChild(I);const w=document.createElement("div");w.classList.add("menu-item");const D=document.createElement("div");D.classList.add("menu-item-header");const N=document.createElement("h2");N.classList.add("name"),N.textContent="GARBAGE NACHOS";const K=document.createElement("span");K.classList.add("price"),K.textContent="12$",D.appendChild(N),D.appendChild(K);const Y=document.createElement("div");Y.classList.add("menu-item-description");const U=document.createElement("p");U.textContent="Pork Belly & Chicken with a House Cheese Blend, Pico De Gallo, Guacamole, Cilantro Lime Crema",Y.appendChild(U),w.appendChild(D),w.appendChild(Y),e.appendChild(t),e.appendChild(o),e.appendChild(h),e.appendChild(x),e.appendChild(k),e.appendChild(O),e.appendChild(w),u.appendChild(C),u.appendChild(e)}const f=document.createElement("footer"),x=document.createElement("div");x.innerHTML='Copyright &copy;\n        <script>document.write(new Date().getFullYear());<\/script>&nbsp;&nbsp;Created by Stefan Karaferovic\n        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>',f.appendChild(x),e.appendChild(c),e.appendChild(u),e.appendChild(f)};return{render:t}})(),a=(()=>{const e=document.querySelector("#page-container");let t;const n=document.querySelector("body");return n.addEventListener("mousemove",(function(e){let d=n.offsetWidth,a=n.offsetHeight,c=e.offsetX,i=e.offsetY;this!==e.target&&(c+=e.target.offsetLeft,i+=e.target.offsetTop);const o=c/d*30-15,s=i/a*30-15;t.style.boxShadow=`${o}px ${s}px 2px 5px rgba(0, 0, 0, 0.2)`})),{render:()=>{(()=>{let t=e.lastChild;for(;t;)e.removeChild(t),t=e.lastChild})();const n=document.createElement("nav");n.setAttribute("id","main-nav");const c=document.createElement("ul"),i=document.createElement("img");i.setAttribute("src","/images/burger-logo2.jpg"),i.setAttribute("id","logo");const o=document.createElement("li");o.setAttribute("id","logo-li"),o.appendChild(i);const s=document.createElement("li");s.textContent="Home",s.setAttribute("id","home-li"),s.addEventListener("click",a.render);const l=document.createElement("li");l.textContent="Menu",l.setAttribute("id","menu-li"),l.addEventListener("click",(function(){d.render("burgers")}));const m=document.createElement("li");m.textContent="About",m.setAttribute("id","about-li");const r=document.createElement("li");r.textContent="Contact",r.setAttribute("id","contact-li"),c.appendChild(o),c.appendChild(s),c.appendChild(l),c.appendChild(m),c.appendChild(r),n.appendChild(c);const p=document.createElement("div");p.setAttribute("id","content"),t=document.createElement("h1"),t.setAttribute("id","slogan"),t.textContent="A TASTY BURGER IS WHAT YOU DESERVE",p.appendChild(t);const u=document.createElement("footer"),C=document.createElement("div");C.innerHTML='Copyright &copy;\n        <script>document.write(new Date().getFullYear());<\/script>&nbsp;&nbsp;Created by Stefan Karaferovic\n        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>',u.appendChild(C),e.appendChild(n),e.appendChild(p),e.appendChild(u)}}})();window.onload=a.render();document.querySelector("#home-li").addEventListener("click",a.render);document.querySelector("#menu-li").addEventListener("click",(function(){d.render("burgers")}))}]);