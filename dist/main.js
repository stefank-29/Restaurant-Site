!function(e){var t={};function n(d){if(t[d])return t[d].exports;var a=t[d]={i:d,l:!1,exports:{}};return e[d].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(d,a,function(t){return e[t]}.bind(null,a));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const d=(()=>{const e=document.querySelector("#page-container"),t=(c,s)=>{(()=>{let t=e.lastChild;for(;t;)e.removeChild(t),t=e.lastChild})();const o=document.createElement("nav");o.setAttribute("id","main-nav");const l=document.createElement("ul"),m=document.createElement("img");m.setAttribute("src","/images/burger-logo2.jpg"),m.setAttribute("id","logo");const r=document.createElement("li");r.setAttribute("id","logo-li"),r.appendChild(m);const p=document.createElement("li");p.textContent="Home",p.setAttribute("id","home-li"),p.addEventListener("click",a.render);const u=document.createElement("li");u.textContent="Menu",u.setAttribute("id","menu-li");const C=document.createElement("li");C.textContent="About",C.setAttribute("id","about-li");const h=document.createElement("li");h.textContent="Contact",h.setAttribute("id","contact-li"),l.appendChild(r),l.appendChild(p),l.appendChild(u),l.appendChild(C),l.appendChild(h),o.appendChild(l);const E=document.createElement("div");E.setAttribute("id","menu-content"),s&&(E.style.animation="insertItem 0.5s linear  1  forwards");const L=document.createElement("div");L.setAttribute("id","menu");const g=document.createElement("ul"),b=document.createElement("li");b.setAttribute("id","burgers"),b.textContent="BURGERS & SANDWICHES",b.addEventListener("click",(function(){t("burgers")}));const v=document.createElement("li");v.setAttribute("id","snacks"),v.textContent="SNACKS",v.addEventListener("click",(function(){t("snacks")}));const f=document.createElement("li");f.textContent="SALADS",f.setAttribute("id","salads"),f.addEventListener("click",(function(){t("salads")}));const A=document.createElement("li");if(A.textContent="MINI ME",A.setAttribute("id","minies"),A.addEventListener("click",(function(){t("minies")})),g.appendChild(b),g.appendChild(v),g.appendChild(f),g.appendChild(A),L.appendChild(g),"burgers"===c){b.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="CRAFT BURGER";const a=document.createElement("span");a.classList.add("price"),a.textContent="9$",n.appendChild(d),n.appendChild(a);const c=document.createElement("div");c.classList.add("img-div");const i=document.createElement("img");i.setAttribute("src","../images/burgers/burger1.jpg"),c.appendChild(i);const s=document.createElement("div");s.classList.add("menu-item-description");const o=document.createElement("p");o.textContent="Lettuce, Tomato, Pickles, American, Caramelized Onion, Fry Sauce",s.appendChild(o),s.appendChild(c),t.appendChild(n),t.appendChild(s);const l=document.createElement("div");l.classList.add("menu-item");const m=document.createElement("div");m.classList.add("menu-item-header");const r=document.createElement("h2");r.classList.add("name"),r.textContent="FRIED CHICKEN SANDWICH";const p=document.createElement("span");p.classList.add("price"),p.textContent="10$",m.appendChild(r),m.appendChild(p);const u=document.createElement("img");u.setAttribute("src","../images/burgers/burger2.jpg");const C=document.createElement("div");C.classList.add("menu-item-description");const h=document.createElement("p");h.innerHTML="Lettuce, Tomato, Pickles, Kewpie Mayo <br> Choose from: Nashville Hot Spice Blend, Honey Garlic BBQ, or Buffalo",C.appendChild(h),C.appendChild(u),l.appendChild(m),l.appendChild(C);const g=document.createElement("div");g.classList.add("menu-item");const v=document.createElement("div");v.classList.add("menu-item-header");const f=document.createElement("h2");f.classList.add("name"),f.textContent="PORK BELLY BURGER";const A=document.createElement("span");A.classList.add("price"),A.textContent="11$",v.appendChild(f),v.appendChild(A);const x=document.createElement("img");x.setAttribute("src","../images/burgers/burger3.jpg");const S=document.createElement("div");S.classList.add("menu-item-description");const B=document.createElement("p");B.textContent="Hoisin Glazed Pork Belly and Burger Patty, Gochujang Aioli, Fried Shallots, Cabbage, Cilantro",S.appendChild(B),S.appendChild(x),g.appendChild(v),g.appendChild(S);const k=document.createElement("div");k.classList.add("menu-item");const y=document.createElement("div");y.classList.add("menu-item-header");const R=document.createElement("h2");R.classList.add("name"),R.textContent="VEGAN CRAFT BURGER";const j=document.createElement("span");j.classList.add("price"),j.textContent="11$",y.appendChild(R),y.appendChild(j);const H=document.createElement("img");H.setAttribute("src","../images/burgers/burger4.jpg");const T=document.createElement("div");T.classList.add("menu-item-description");const P=document.createElement("p");P.textContent="Lettuce, Tomatoes, Pickle, Cheddar, Fry Sauce",T.appendChild(P),T.appendChild(H),k.appendChild(y),k.appendChild(T);const G=document.createElement("div");G.classList.add("menu-item");const M=document.createElement("div");M.classList.add("menu-item-header");const $=document.createElement("h2");$.classList.add("name"),$.textContent="BEER BATTERED FISH PO'BOY";const I=document.createElement("span");I.classList.add("price"),I.textContent="10$",M.appendChild($),M.appendChild(I);const O=document.createElement("img");O.setAttribute("src","../images/burgers/burger5.jpg");const F=document.createElement("div");F.classList.add("menu-item-description");const D=document.createElement("p");D.textContent="Beer Battered Cod, Lettuce, Tomato, Cajun Remoulade, Pickles",F.appendChild(D),F.appendChild(O),G.appendChild(M),G.appendChild(F);const N=document.createElement("div");N.classList.add("menu-item");const w=document.createElement("div");w.classList.add("menu-item-header");const K=document.createElement("h2");K.classList.add("name"),K.textContent="BBQ CHICKEN BANH MI";const W=document.createElement("span");W.classList.add("price"),W.textContent="9$",w.appendChild(K),w.appendChild(W);const Y=document.createElement("img");Y.setAttribute("src","../images/burgers/burger6.jpg");const U=document.createElement("div");U.classList.add("menu-item-description");const _=document.createElement("p");_.textContent="Ginger Garlic Marinated Chicken Thigh, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",U.appendChild(_),U.appendChild(Y),N.appendChild(w),N.appendChild(U);const q=document.createElement("div");q.classList.add("menu-item");const J=document.createElement("div");J.classList.add("menu-item-header");const Q=document.createElement("h2");Q.classList.add("name"),Q.textContent="BBQ STEAK BANH MI";const V=document.createElement("span");V.classList.add("price"),V.textContent="10$",J.appendChild(Q),J.appendChild(V);const X=document.createElement("img");X.setAttribute("src","../images/burgers/burger7.jpg");const z=document.createElement("div");z.classList.add("menu-item-description");const Z=document.createElement("p");Z.textContent="Shallot Peppered Sirloin, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",z.appendChild(Z),z.appendChild(X),q.appendChild(J),q.appendChild(z);const ee=document.createElement("div");ee.classList.add("menu-item");const te=document.createElement("div");te.classList.add("menu-item-header");const ne=document.createElement("h2");ne.classList.add("name"),ne.textContent="PORK BELLY BANH MI";const de=document.createElement("span");de.classList.add("price"),de.textContent="11$",te.appendChild(ne),te.appendChild(de);const ae=document.createElement("img");ae.setAttribute("src","../images/burgers/burger8.jpg");const ce=document.createElement("div");ce.classList.add("menu-item-description");const ie=document.createElement("p");ie.textContent="Hoisin Sambal Glazed Belly, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",ce.appendChild(ie),ce.appendChild(ae),ee.appendChild(te),ee.appendChild(ce),e.appendChild(t),e.appendChild(l),e.appendChild(g),e.appendChild(k),e.appendChild(G),e.appendChild(N),e.appendChild(q),e.appendChild(ee),E.appendChild(L),E.appendChild(e)}if("snacks"===c){v.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="FRENCH FRIES";const a=document.createElement("span");a.classList.add("price"),a.textContent="5$",n.appendChild(d),n.appendChild(a);const c=document.createElement("img");c.setAttribute("src","../images/snacks/snack1.jpg");const i=document.createElement("div");i.classList.add("menu-item-description");const s=document.createElement("p");s.textContent="Served with Fry Sauce",i.appendChild(s),i.appendChild(c),t.appendChild(n),t.appendChild(i);const o=document.createElement("div");o.classList.add("menu-item");const l=document.createElement("div");l.classList.add("menu-item-header");const m=document.createElement("h2");m.classList.add("name"),m.textContent="BEER BRINED JUMBO WINGS (6 OR 12)";const r=document.createElement("span");r.classList.add("price"),r.textContent="12/19$",l.appendChild(m),l.appendChild(r);const p=document.createElement("img");p.setAttribute("src","../images/snacks/snack2.jpg");const u=document.createElement("div");u.classList.add("menu-item-description");const C=document.createElement("p");C.innerHTML="Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, or Gochujang Honey. Served with Celery & Buttermilk Ranch or Blue Cheese",u.appendChild(C),u.appendChild(p),o.appendChild(l),o.appendChild(u);const h=document.createElement("div");h.classList.add("menu-item");const g=document.createElement("div");g.classList.add("menu-item-header");const b=document.createElement("h2");b.classList.add("name"),b.textContent="CRISPY CAULIFLOWER";const f=document.createElement("span");f.classList.add("price"),f.textContent="9$",g.appendChild(b),g.appendChild(f);const A=document.createElement("img");A.setAttribute("src","../images/snacks/snack3.jpg");const x=document.createElement("div");x.classList.add("menu-item-description");const S=document.createElement("p");S.textContent="Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, Gochujang Honey, Buttermilk Ranch, or Blue Cheese.",x.appendChild(S),x.appendChild(A),h.appendChild(g),h.appendChild(x);const B=document.createElement("div");B.classList.add("menu-item");const k=document.createElement("div");k.classList.add("menu-item-header");const y=document.createElement("h2");y.classList.add("name"),y.textContent="ELOTE SALSA & CHIPS";const R=document.createElement("span");R.classList.add("price"),R.textContent="7$",k.appendChild(y),k.appendChild(R);const j=document.createElement("img");j.setAttribute("src","../images/snacks/snack4.jpg");const H=document.createElement("div");H.classList.add("menu-item-description");const T=document.createElement("p");T.textContent="Roasted Sweet Corn, Pico de Gallo, Cilantro Lime Crema, Tajin, Cotija Cheese",H.appendChild(T),H.appendChild(j),B.appendChild(k),B.appendChild(H);const P=document.createElement("div");P.classList.add("menu-item");const G=document.createElement("div");G.classList.add("menu-item-header");const M=document.createElement("h2");M.classList.add("name"),M.textContent="BAJA FISH TACOS";const $=document.createElement("span");$.classList.add("price"),$.textContent="7$",G.appendChild(M),G.appendChild($);const I=document.createElement("img");I.setAttribute("src","../images/snacks/snack5.jpg");const O=document.createElement("div");O.classList.add("menu-item-description");const F=document.createElement("p");F.textContent="Beer Battered Cod, Cabbage, Pico de Gallo, Guacamole, Cilantro Lime Crema",O.appendChild(F),O.appendChild(I),P.appendChild(G),P.appendChild(O);const D=document.createElement("div");D.classList.add("menu-item");const N=document.createElement("div");N.classList.add("menu-item-header");const w=document.createElement("h2");w.classList.add("name"),w.textContent="TJ DOG";const K=document.createElement("span");K.classList.add("price"),K.textContent="5$",N.appendChild(w),N.appendChild(K);const W=document.createElement("img");W.setAttribute("src","../images/snacks/snack6.jpg");const Y=document.createElement("div");Y.classList.add("menu-item-description");const U=document.createElement("p");U.textContent="Bacon Wrapped All Beef Dog, Grilled Fajitas, Cilantro Lime Crema, Cotija Cheese",Y.appendChild(U),Y.appendChild(W),D.appendChild(N),D.appendChild(Y);const _=document.createElement("div");_.classList.add("menu-item");const q=document.createElement("div");q.classList.add("menu-item-header");const J=document.createElement("h2");J.classList.add("name"),J.textContent="GARBAGE NACHOS";const Q=document.createElement("span");Q.classList.add("price"),Q.textContent="12$",q.appendChild(J),q.appendChild(Q);const V=document.createElement("img");V.setAttribute("src","../images/snacks/snack7.jpg");const X=document.createElement("div");X.classList.add("menu-item-description");const z=document.createElement("p");z.textContent="Pork Belly & Chicken with a House Cheese Blend, Pico De Gallo, Guacamole, Cilantro Lime Crema",X.appendChild(z),X.appendChild(V),_.appendChild(q),_.appendChild(X),e.appendChild(t),e.appendChild(o),e.appendChild(h),e.appendChild(B),e.appendChild(P),e.appendChild(D),e.appendChild(_),E.appendChild(L),E.appendChild(e)}if("salads"===c){f.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="MIXED GREENS";const a=document.createElement("span");a.classList.add("price"),a.textContent="9$",n.appendChild(d),n.appendChild(a);const c=document.createElement("img");c.setAttribute("src","../images/salads/salad1.jpg");const i=document.createElement("div");i.classList.add("menu-item-description");const s=document.createElement("p");s.textContent="Carrots, Tomatoes, Cucumber, Croutons & Choice of: Citrus Vinaigrette (V), Ranch, or Blue Cheese Dressing",i.appendChild(s),i.appendChild(c),t.appendChild(n),t.appendChild(i);const o=document.createElement("div");o.classList.add("menu-item");const l=document.createElement("div");l.classList.add("menu-item-header");const m=document.createElement("h2");m.classList.add("name"),m.textContent="CRAFT COBB";const r=document.createElement("span");r.classList.add("price"),r.textContent="10$",l.appendChild(m),l.appendChild(r);const p=document.createElement("img");p.setAttribute("src","../images/salads/salad2.jpg");const u=document.createElement("div");u.classList.add("menu-item-description");const C=document.createElement("p");C.innerHTML="Romaine, Carrots, Tomatoes, Cucumber, Egg, Bacon, Blue Cheese",u.appendChild(C),u.appendChild(p),o.appendChild(l),o.appendChild(u);const h=document.createElement("div");h.classList.add("menu-item");const g=document.createElement("div");g.classList.add("menu-item-header");const b=document.createElement("h2");b.classList.add("name"),b.textContent="CAESAR";const v=document.createElement("span");v.classList.add("price"),v.textContent="9$",g.appendChild(b),g.appendChild(v);const A=document.createElement("img");A.setAttribute("src","../images/salads/salad3.jpg");const x=document.createElement("div");x.classList.add("menu-item-description");const S=document.createElement("p");S.textContent="Romaine, Shaved Parmesan, Croutons",x.appendChild(S),x.appendChild(A),h.appendChild(g),h.appendChild(x);const B=document.createElement("div");B.classList.add("menu-item");const k=document.createElement("div");k.classList.add("menu-item-header");const y=document.createElement("h2");y.classList.add("name"),y.textContent="ADD PROTEIN",k.appendChild(y);const R=document.createElement("div");R.classList.add("menu-item-description");const j=document.createElement("p"),H=document.createElement("p"),T=document.createElement("p");j.textContent="Grilled Chipotle Chicken – 4$",H.textContent="Peppered Sirloin Steak – 5$",T.textContent="Pork Belly – 5$",R.appendChild(j),R.appendChild(H),R.appendChild(T),j.style.margin="1rem 0rem 0rem",H.style.margin="0rem",T.style.margin="0rem",B.appendChild(k),B.appendChild(R),e.appendChild(t),e.appendChild(o),e.appendChild(h),e.appendChild(B),E.appendChild(L),E.appendChild(e)}if("minies"===c){A.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="MINI BURGER W/ FRIES";const a=document.createElement("span");a.classList.add("price"),a.textContent="9$",n.appendChild(d),n.appendChild(a);const c=document.createElement("img");c.setAttribute("src","../images/minies/mini1.jpg");const i=document.createElement("div");i.classList.add("menu-item-description");const s=document.createElement("p");s.textContent="Meat, Cheese, Potato Roll",i.appendChild(s),i.appendChild(c),t.appendChild(n),t.appendChild(i);const o=document.createElement("div");o.classList.add("menu-item");const l=document.createElement("div");l.classList.add("menu-item-header");const m=document.createElement("h2");m.classList.add("name"),m.textContent="GRILLED CHEESE W/ FRIES";const r=document.createElement("span");r.classList.add("price"),r.textContent="8$",l.appendChild(m),l.appendChild(r);const p=document.createElement("img");p.setAttribute("src","../images/minies/mini2.jpg");const u=document.createElement("div");u.classList.add("menu-item-description");const C=document.createElement("p");C.textContent="American & Cheddar",u.appendChild(C),u.appendChild(p),o.appendChild(l),o.appendChild(u);const h=document.createElement("div");h.classList.add("menu-item");const g=document.createElement("div");g.classList.add("menu-item-header");const b=document.createElement("h2");b.classList.add("name"),b.textContent="MAC & CHEESE";const v=document.createElement("span");v.classList.add("price"),v.textContent="6$",g.appendChild(b),g.appendChild(v);const f=document.createElement("img");f.setAttribute("src","../images/minies/mini3.jpg");const x=document.createElement("div");x.classList.add("menu-item-description");const S=document.createElement("p");S.innerHTML="",x.appendChild(S),x.appendChild(f),h.appendChild(g),h.appendChild(x),e.appendChild(t),e.appendChild(o),e.appendChild(h),E.appendChild(L),E.appendChild(e)}const x=document.createElement("footer"),S=document.createElement("div");S.innerHTML='Copyright &copy;\n        <script>document.write(new Date().getFullYear());<\/script>&nbsp;&nbsp;Created by Stefan Karaferovic\n        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>',x.appendChild(S),e.appendChild(o),e.appendChild(E),e.appendChild(x),u.classList.add("active");document.querySelectorAll(".menu-item").forEach(e=>{e.addEventListener("mousemove",(function(){!function(e){let t=e.offsetWidth,a=e.offsetHeight,c=event.offsetX,i=event.offsetY;this!==event.target&&(c+=event.target.offsetLeft,i+=event.target.offsetTop);n=Math.round(c/t*1e3-500),d=Math.round(i/a*1e3-500),e.querySelector("img").style.transform=`translateX(${n/75+55}rem) translateY(${d/75-18}rem)`}(e)})),e.addEventListener("click",i)})};let n,d;function c(){this.parentNode.removeChild(this),WebAuthnAssertion}function i(){let t=this.querySelector("img");console.log(t.style.transform);const n=document.createElement("img");n.setAttribute("src",t.getAttribute("src")),n.style.transform=t.style.transform+" scale(0.5)";const d=document.createElement("div");d.classList.add("show"),d.appendChild(n),d.addEventListener("click",c),e.appendChild(d)}return{render:t}})(),a=(()=>{const e=document.querySelector("#page-container");let t;const n=document.querySelector("body");return n.addEventListener("mousemove",(function(e){let d=n.offsetWidth,a=n.offsetHeight,c=e.offsetX,i=e.offsetY;this!==e.target&&(c+=e.target.offsetLeft,i+=e.target.offsetTop);const s=c/d*30-15,o=i/a*30-15;t.style.boxShadow=`${s}px ${o}px 2px 5px rgba(0, 0, 0, 0.2)`})),{render:function(n){(()=>{let t=e.lastChild;for(;t;)e.removeChild(t),t=e.lastChild})();const a=document.createElement("nav");a.setAttribute("id","main-nav");const c=document.createElement("ul"),i=document.createElement("img");i.setAttribute("src","/images/burger-logo2.jpg"),i.setAttribute("id","logo");const s=document.createElement("li");s.setAttribute("id","logo-li"),s.appendChild(i);const o=document.createElement("li");o.textContent="Home",o.setAttribute("id","home-li");const l=document.createElement("li");l.textContent="Menu",l.setAttribute("id","menu-li"),l.addEventListener("click",(function(){d.render("burgers",!0)}));const m=document.createElement("li");m.textContent="About",m.setAttribute("id","about-li");const r=document.createElement("li");r.textContent="Contact",r.setAttribute("id","contact-li"),c.appendChild(s),c.appendChild(o),c.appendChild(l),c.appendChild(m),c.appendChild(r),a.appendChild(c);const p=document.createElement("div");p.setAttribute("id","content"),t=document.createElement("h1"),t.setAttribute("id","slogan"),t.textContent="A TASTY BURGER IS WHAT YOU DESERVE",p.appendChild(t);const u=document.createElement("footer"),C=document.createElement("div");C.innerHTML='Copyright &copy;\n        <script>document.write(new Date().getFullYear());<\/script>&nbsp;&nbsp;Created by Stefan Karaferovic\n        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>',u.appendChild(C),e.appendChild(a),e.appendChild(p),e.appendChild(u),o.classList.add("active")}}})();window.onload=a.render()}]);