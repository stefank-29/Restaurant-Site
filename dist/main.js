!function(e){var t={};function n(d){if(t[d])return t[d].exports;var a=t[d]={i:d,l:!1,exports:{}};return e[d].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(d,a,function(t){return e[t]}.bind(null,a));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const d=(()=>{const e=document.querySelector("#page-container");function t(){this.setAttribute("src","./images/about-page/burger-hover-img.png"),this.style.transform="scale(1.2)"}function n(){this.setAttribute("src","./images/burger-logo-bg.jpg"),this.style.transform="scale(1)"}function d(){this.parentNode.removeChild(this)}function c(){const t=document.createElement("img");t.setAttribute("src",this.getAttribute("src")),"meal"===this.getAttribute("id")&&(t.style.width="42rem",t.style.height="55rem"),t.style.transform="scale(0.5)";const n=document.createElement("div");n.classList.add("show"),n.appendChild(t),n.addEventListener("click",d),e.appendChild(n)}return{render:d=>{(()=>{let t=e.lastChild;for(;t;)e.removeChild(t),t=e.lastChild})();const s=document.createElement("nav");s.setAttribute("id","main-nav");const o=document.createElement("ul"),l=document.createElement("img");l.setAttribute("src","./images/burger-logo-bg.jpg"),l.setAttribute("id","logo");const r=document.createElement("li");r.setAttribute("id","logo-li"),r.appendChild(l);const m=document.createElement("li");m.textContent="Home",m.setAttribute("id","home-li"),m.addEventListener("click",i.render);const p=document.createElement("li");p.textContent="Menu",p.setAttribute("id","menu-li"),p.addEventListener("click",(function(){a.render("burgers")}));const u=document.createElement("li");u.textContent="About",u.setAttribute("id","about-li");const C=document.createElement("li");C.textContent="Contact",C.setAttribute("id","contact-li"),o.appendChild(r),o.appendChild(m),o.appendChild(p),o.appendChild(u),o.appendChild(C),s.appendChild(o);const h=document.createElement("div");h.setAttribute("id","about-content"),d&&(h.style.animation="insertItem 0.5s linear  1  forwards");const E=document.createElement("div");E.setAttribute("id","about-img");const g=document.createElement("img");g.setAttribute("src","./images/about-page/top3.png"),g.setAttribute("id","kitchen"),g.setAttribute("alt","burger making in kitchen");const b=document.createElement("img");b.setAttribute("src","./images/about-page/burger8.jpg"),b.setAttribute("id","meal"),b.setAttribute("alt","burger image"),E.appendChild(g),E.appendChild(b);const L=document.createElement("div");L.setAttribute("id","about-text");const v=document.createElement("div");v.setAttribute("id","header");const f=document.createElement("h2");f.textContent="ABOUT US";const A=document.createElement("div");A.setAttribute("id","logo");const x=document.createElement("img");x.setAttribute("src","./images/burger-logo-bg.jpg"),x.setAttribute("alt","restauran logo"),x.addEventListener("mouseover",t),x.addEventListener("mouseleave",n),A.appendChild(x),v.appendChild(f),v.appendChild(A);const k=document.createElement("p");k.innerHTML='When we opened <strong class="name">Burger cafe</strong> in June 2017, our vision was to create an unassuming watering hole for the locals. In a town with endless options for bars and lounges, we found it challenging to find a friendly bar with a solid craft beer list, good food, and non-gaming/non-smoking. We wanted to provide friends and neighbors alike with the original form of social networking; a fun easy going bar, and a cold pint. Our staunch belief in providing exceptional quality products with friendly service in a clean and welcoming setting has helped us earn the reputation among the locals as one of the best hidden gems in Las Vegas.';const y=document.createElement("p");y.innerHTML='<strong class="name">Burger cafe</strong> is a culmination of giving our best to the community through our food, service, and atmosphere. Tucked inside one of the premier breweries in Nevada, this collaboration project allows us another opportunity to create a memorable setting for you to catch up with friends and make new ones over tasty bites and a refreshing beer.',L.appendChild(v),L.appendChild(k),L.appendChild(y),h.appendChild(L),h.appendChild(E);const S=document.createElement("footer"),B=document.createElement("div");B.innerHTML='Copyright &copy;\n        <script>document.write(new Date().getFullYear());<\/script>&nbsp;&nbsp;Created by Stefan Karaferovic\n        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>',S.appendChild(B),e.appendChild(s),e.appendChild(h),e.appendChild(S),u.classList.add("active");const j=document.querySelector("#kitchen"),R=document.querySelector("#meal");j.addEventListener("click",c),R.addEventListener("click",c)}}})(),a=(()=>{const e=document.querySelector("#page-container"),t=(c,o)=>{(()=>{let t=e.lastChild;for(;t;)e.removeChild(t),t=e.lastChild})();const l=document.createElement("nav");l.setAttribute("id","main-nav");const r=document.createElement("ul"),m=document.createElement("img");m.setAttribute("src","./images/burger-logo-bg.jpg"),m.setAttribute("id","logo");const p=document.createElement("li");p.setAttribute("id","logo-li"),p.appendChild(m);const u=document.createElement("li");u.textContent="Home",u.setAttribute("id","home-li"),u.addEventListener("click",i.render);const C=document.createElement("li");C.textContent="Menu",C.setAttribute("id","menu-li");const h=document.createElement("li");h.textContent="About",h.setAttribute("id","about-li"),h.addEventListener("click",d.render);const E=document.createElement("li");E.textContent="Contact",E.setAttribute("id","contact-li"),r.appendChild(p),r.appendChild(u),r.appendChild(C),r.appendChild(h),r.appendChild(E),l.appendChild(r);const g=document.createElement("div");g.setAttribute("id","menu-content"),o&&(g.style.animation="insertItem 0.5s linear  1  forwards");const b=document.createElement("div");b.setAttribute("id","menu");const L=document.createElement("ul"),v=document.createElement("li");v.setAttribute("id","burgers"),v.textContent="BURGERS & SANDWICHES",v.addEventListener("click",(function(){t("burgers")}));const f=document.createElement("li");f.setAttribute("id","snacks"),f.textContent="SNACKS",f.addEventListener("click",(function(){t("snacks")}));const A=document.createElement("li");A.textContent="SALADS",A.setAttribute("id","salads"),A.addEventListener("click",(function(){t("salads")}));const x=document.createElement("li");if(x.textContent="MINI ME",x.setAttribute("id","minies"),x.addEventListener("click",(function(){t("minies")})),L.appendChild(v),L.appendChild(f),L.appendChild(A),L.appendChild(x),b.appendChild(L),"burgers"===c){v.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="CRAFT BURGER";const a=document.createElement("span");a.classList.add("price"),a.textContent="9$",n.appendChild(d),n.appendChild(a);const i=document.createElement("div");i.classList.add("img-div");const c=document.createElement("img");c.setAttribute("src","./images/burgers/burger1.jpg"),i.appendChild(c);const s=document.createElement("div");s.classList.add("menu-item-description");const o=document.createElement("p");o.textContent="Lettuce, Tomato, Pickles, American, Caramelized Onion, Fry Sauce",s.appendChild(o),s.appendChild(i),t.appendChild(n),t.appendChild(s);const l=document.createElement("div");l.classList.add("menu-item");const r=document.createElement("div");r.classList.add("menu-item-header");const m=document.createElement("h2");m.classList.add("name"),m.textContent="FRIED CHICKEN SANDWICH";const p=document.createElement("span");p.classList.add("price"),p.textContent="10$",r.appendChild(m),r.appendChild(p);const u=document.createElement("img");u.setAttribute("src","./images/burgers/burger2.jpg");const C=document.createElement("div");C.classList.add("menu-item-description");const h=document.createElement("p");h.innerHTML="Lettuce, Tomato, Pickles, Kewpie Mayo <br> Choose from: Nashville Hot Spice Blend, Honey Garlic BBQ, or Buffalo",C.appendChild(h),C.appendChild(u),l.appendChild(r),l.appendChild(C);const E=document.createElement("div");E.classList.add("menu-item");const L=document.createElement("div");L.classList.add("menu-item-header");const f=document.createElement("h2");f.classList.add("name"),f.textContent="PORK BELLY BURGER";const A=document.createElement("span");A.classList.add("price"),A.textContent="11$",L.appendChild(f),L.appendChild(A);const x=document.createElement("img");x.setAttribute("src","./images/burgers/burger3.jpg");const k=document.createElement("div");k.classList.add("menu-item-description");const y=document.createElement("p");y.textContent="Hoisin Glazed Pork Belly and Burger Patty, Gochujang Aioli, Fried Shallots, Cabbage, Cilantro",k.appendChild(y),k.appendChild(x),E.appendChild(L),E.appendChild(k);const S=document.createElement("div");S.classList.add("menu-item");const B=document.createElement("div");B.classList.add("menu-item-header");const j=document.createElement("h2");j.classList.add("name"),j.textContent="VEGAN CRAFT BURGER";const R=document.createElement("span");R.classList.add("price"),R.textContent="11$",B.appendChild(j),B.appendChild(R);const H=document.createElement("img");H.setAttribute("src","./images/burgers/burger4.jpg");const T=document.createElement("div");T.classList.add("menu-item-description");const w=document.createElement("p");w.textContent="Lettuce, Tomatoes, Pickle, Cheddar, Fry Sauce",T.appendChild(w),T.appendChild(H),S.appendChild(B),S.appendChild(T);const M=document.createElement("div");M.classList.add("menu-item");const P=document.createElement("div");P.classList.add("menu-item-header");const G=document.createElement("h2");G.classList.add("name"),G.textContent="BEER BATTERED FISH PO'BOY";const I=document.createElement("span");I.classList.add("price"),I.textContent="10$",P.appendChild(G),P.appendChild(I);const $=document.createElement("img");$.setAttribute("src","./images/burgers/burger5.jpg");const O=document.createElement("div");O.classList.add("menu-item-description");const F=document.createElement("p");F.textContent="Beer Battered Cod, Lettuce, Tomato, Cajun Remoulade, Pickles",O.appendChild(F),O.appendChild($),M.appendChild(P),M.appendChild(O);const D=document.createElement("div");D.classList.add("menu-item");const N=document.createElement("div");N.classList.add("menu-item-header");const K=document.createElement("h2");K.classList.add("name"),K.textContent="BBQ CHICKEN BANH MI";const W=document.createElement("span");W.classList.add("price"),W.textContent="9$",N.appendChild(K),N.appendChild(W);const Y=document.createElement("img");Y.setAttribute("src","./images/burgers/burger6.jpg");const U=document.createElement("div");U.classList.add("menu-item-description");const q=document.createElement("p");q.textContent="Ginger Garlic Marinated Chicken Thigh, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",U.appendChild(q),U.appendChild(Y),D.appendChild(N),D.appendChild(U);const _=document.createElement("div");_.classList.add("menu-item");const J=document.createElement("div");J.classList.add("menu-item-header");const Q=document.createElement("h2");Q.classList.add("name"),Q.textContent="BBQ STEAK BANH MI";const V=document.createElement("span");V.classList.add("price"),V.textContent="10$",J.appendChild(Q),J.appendChild(V);const X=document.createElement("img");X.setAttribute("src","./images/burgers/burger7.jpg");const z=document.createElement("div");z.classList.add("menu-item-description");const Z=document.createElement("p");Z.textContent="Shallot Peppered Sirloin, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",z.appendChild(Z),z.appendChild(X),_.appendChild(J),_.appendChild(z);const ee=document.createElement("div");ee.classList.add("menu-item");const te=document.createElement("div");te.classList.add("menu-item-header");const ne=document.createElement("h2");ne.classList.add("name"),ne.textContent="PORK BELLY BANH MI";const de=document.createElement("span");de.classList.add("price"),de.textContent="11$",te.appendChild(ne),te.appendChild(de);const ae=document.createElement("img");ae.setAttribute("src","./images/burgers/burger8.jpg");const ie=document.createElement("div");ie.classList.add("menu-item-description");const ce=document.createElement("p");ce.textContent="Hoisin Sambal Glazed Belly, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",ie.appendChild(ce),ie.appendChild(ae),ee.appendChild(te),ee.appendChild(ie),e.appendChild(t),e.appendChild(l),e.appendChild(E),e.appendChild(S),e.appendChild(M),e.appendChild(D),e.appendChild(_),e.appendChild(ee),g.appendChild(b),g.appendChild(e)}if("snacks"===c){f.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="FRENCH FRIES";const a=document.createElement("span");a.classList.add("price"),a.textContent="5$",n.appendChild(d),n.appendChild(a);const i=document.createElement("img");i.setAttribute("src","./images/snacks/snack1.jpg");const c=document.createElement("div");c.classList.add("menu-item-description");const s=document.createElement("p");s.textContent="Served with Fry Sauce",c.appendChild(s),c.appendChild(i),t.appendChild(n),t.appendChild(c);const o=document.createElement("div");o.classList.add("menu-item");const l=document.createElement("div");l.classList.add("menu-item-header");const r=document.createElement("h2");r.classList.add("name"),r.textContent="BEER BRINED JUMBO WINGS (6 OR 12)";const m=document.createElement("span");m.classList.add("price"),m.textContent="12/19$",l.appendChild(r),l.appendChild(m);const p=document.createElement("img");p.setAttribute("src","./images/snacks/snack2.jpg");const u=document.createElement("div");u.classList.add("menu-item-description");const C=document.createElement("p");C.innerHTML="Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, or Gochujang Honey. Served with Celery & Buttermilk Ranch or Blue Cheese",u.appendChild(C),u.appendChild(p),o.appendChild(l),o.appendChild(u);const h=document.createElement("div");h.classList.add("menu-item");const E=document.createElement("div");E.classList.add("menu-item-header");const L=document.createElement("h2");L.classList.add("name"),L.textContent="CRISPY CAULIFLOWER";const v=document.createElement("span");v.classList.add("price"),v.textContent="9$",E.appendChild(L),E.appendChild(v);const A=document.createElement("img");A.setAttribute("src","./images/snacks/snack3.jpg");const x=document.createElement("div");x.classList.add("menu-item-description");const k=document.createElement("p");k.textContent="Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, Gochujang Honey, Buttermilk Ranch, or Blue Cheese.",x.appendChild(k),x.appendChild(A),h.appendChild(E),h.appendChild(x);const y=document.createElement("div");y.classList.add("menu-item");const S=document.createElement("div");S.classList.add("menu-item-header");const B=document.createElement("h2");B.classList.add("name"),B.textContent="ELOTE SALSA & CHIPS";const j=document.createElement("span");j.classList.add("price"),j.textContent="7$",S.appendChild(B),S.appendChild(j);const R=document.createElement("img");R.setAttribute("src","./images/snacks/snack4.jpg");const H=document.createElement("div");H.classList.add("menu-item-description");const T=document.createElement("p");T.textContent="Roasted Sweet Corn, Pico de Gallo, Cilantro Lime Crema, Tajin, Cotija Cheese",H.appendChild(T),H.appendChild(R),y.appendChild(S),y.appendChild(H);const w=document.createElement("div");w.classList.add("menu-item");const M=document.createElement("div");M.classList.add("menu-item-header");const P=document.createElement("h2");P.classList.add("name"),P.textContent="BAJA FISH TACOS";const G=document.createElement("span");G.classList.add("price"),G.textContent="7$",M.appendChild(P),M.appendChild(G);const I=document.createElement("img");I.setAttribute("src","./images/snacks/snack5.jpg");const $=document.createElement("div");$.classList.add("menu-item-description");const O=document.createElement("p");O.textContent="Beer Battered Cod, Cabbage, Pico de Gallo, Guacamole, Cilantro Lime Crema",$.appendChild(O),$.appendChild(I),w.appendChild(M),w.appendChild($);const F=document.createElement("div");F.classList.add("menu-item");const D=document.createElement("div");D.classList.add("menu-item-header");const N=document.createElement("h2");N.classList.add("name"),N.textContent="TJ DOG";const K=document.createElement("span");K.classList.add("price"),K.textContent="5$",D.appendChild(N),D.appendChild(K);const W=document.createElement("img");W.setAttribute("src","./images/snacks/snack6.jpg");const Y=document.createElement("div");Y.classList.add("menu-item-description");const U=document.createElement("p");U.textContent="Bacon Wrapped All Beef Dog, Grilled Fajitas, Cilantro Lime Crema, Cotija Cheese",Y.appendChild(U),Y.appendChild(W),F.appendChild(D),F.appendChild(Y);const q=document.createElement("div");q.classList.add("menu-item");const _=document.createElement("div");_.classList.add("menu-item-header");const J=document.createElement("h2");J.classList.add("name"),J.textContent="GARBAGE NACHOS";const Q=document.createElement("span");Q.classList.add("price"),Q.textContent="12$",_.appendChild(J),_.appendChild(Q);const V=document.createElement("img");V.setAttribute("src","./images/snacks/snack7.jpg");const X=document.createElement("div");X.classList.add("menu-item-description");const z=document.createElement("p");z.textContent="Pork Belly & Chicken with a House Cheese Blend, Pico De Gallo, Guacamole, Cilantro Lime Crema",X.appendChild(z),X.appendChild(V),q.appendChild(_),q.appendChild(X),e.appendChild(t),e.appendChild(o),e.appendChild(h),e.appendChild(y),e.appendChild(w),e.appendChild(F),e.appendChild(q),g.appendChild(b),g.appendChild(e)}if("salads"===c){A.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="MIXED GREENS";const a=document.createElement("span");a.classList.add("price"),a.textContent="9$",n.appendChild(d),n.appendChild(a);const i=document.createElement("img");i.setAttribute("src","./images/salads/salad1.jpg");const c=document.createElement("div");c.classList.add("menu-item-description");const s=document.createElement("p");s.textContent="Carrots, Tomatoes, Cucumber, Croutons & Choice of: Citrus Vinaigrette (V), Ranch, or Blue Cheese Dressing",c.appendChild(s),c.appendChild(i),t.appendChild(n),t.appendChild(c);const o=document.createElement("div");o.classList.add("menu-item");const l=document.createElement("div");l.classList.add("menu-item-header");const r=document.createElement("h2");r.classList.add("name"),r.textContent="CRAFT COBB";const m=document.createElement("span");m.classList.add("price"),m.textContent="10$",l.appendChild(r),l.appendChild(m);const p=document.createElement("img");p.setAttribute("src","./images/salads/salad2.jpg");const u=document.createElement("div");u.classList.add("menu-item-description");const C=document.createElement("p");C.innerHTML="Romaine, Carrots, Tomatoes, Cucumber, Egg, Bacon, Blue Cheese",u.appendChild(C),u.appendChild(p),o.appendChild(l),o.appendChild(u);const h=document.createElement("div");h.classList.add("menu-item");const E=document.createElement("div");E.classList.add("menu-item-header");const L=document.createElement("h2");L.classList.add("name"),L.textContent="CAESAR";const v=document.createElement("span");v.classList.add("price"),v.textContent="9$",E.appendChild(L),E.appendChild(v);const f=document.createElement("img");f.setAttribute("src","./images/salads/salad3.jpg");const x=document.createElement("div");x.classList.add("menu-item-description");const k=document.createElement("p");k.textContent="Romaine, Shaved Parmesan, Croutons",x.appendChild(k),x.appendChild(f),h.appendChild(E),h.appendChild(x);const y=document.createElement("div");y.classList.add("menu-item");const S=document.createElement("div");S.classList.add("menu-item-header");const B=document.createElement("h2");B.classList.add("name"),B.textContent="ADD PROTEIN",S.appendChild(B);const j=document.createElement("div");j.classList.add("menu-item-description");const R=document.createElement("p"),H=document.createElement("p"),T=document.createElement("p");R.textContent="Grilled Chipotle Chicken – 4$",H.textContent="Peppered Sirloin Steak – 5$",T.textContent="Pork Belly – 5$",j.appendChild(R),j.appendChild(H),j.appendChild(T),R.style.margin="1rem 0rem 0rem",H.style.margin="0rem",T.style.margin="0rem",y.appendChild(S),y.appendChild(j),e.appendChild(t),e.appendChild(o),e.appendChild(h),e.appendChild(y),g.appendChild(b),g.appendChild(e)}if("minies"===c){x.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="MINI BURGER W/ FRIES";const a=document.createElement("span");a.classList.add("price"),a.textContent="9$",n.appendChild(d),n.appendChild(a);const i=document.createElement("img");i.setAttribute("src","./images/minies/mini1.jpg");const c=document.createElement("div");c.classList.add("menu-item-description");const s=document.createElement("p");s.textContent="Meat, Cheese, Potato Roll",c.appendChild(s),c.appendChild(i),t.appendChild(n),t.appendChild(c);const o=document.createElement("div");o.classList.add("menu-item");const l=document.createElement("div");l.classList.add("menu-item-header");const r=document.createElement("h2");r.classList.add("name"),r.textContent="GRILLED CHEESE W/ FRIES";const m=document.createElement("span");m.classList.add("price"),m.textContent="8$",l.appendChild(r),l.appendChild(m);const p=document.createElement("img");p.setAttribute("src","./images/minies/mini2.jpg");const u=document.createElement("div");u.classList.add("menu-item-description");const C=document.createElement("p");C.textContent="American & Cheddar",u.appendChild(C),u.appendChild(p),o.appendChild(l),o.appendChild(u);const h=document.createElement("div");h.classList.add("menu-item");const E=document.createElement("div");E.classList.add("menu-item-header");const L=document.createElement("h2");L.classList.add("name"),L.textContent="MAC & CHEESE";const v=document.createElement("span");v.classList.add("price"),v.textContent="6$",E.appendChild(L),E.appendChild(v);const f=document.createElement("img");f.setAttribute("src","./images/minies/mini3.jpg");const A=document.createElement("div");A.classList.add("menu-item-description");const k=document.createElement("p");k.innerHTML="",A.appendChild(k),A.appendChild(f),h.appendChild(E),h.appendChild(A),e.appendChild(t),e.appendChild(o),e.appendChild(h),g.appendChild(b),g.appendChild(e)}const k=document.createElement("footer"),y=document.createElement("div");y.innerHTML='Copyright &copy;\n        <script>document.write(new Date().getFullYear());<\/script>&nbsp;&nbsp;Created by Stefan Karaferovic\n        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>',k.appendChild(y),e.appendChild(l),e.appendChild(g),e.appendChild(k),C.classList.add("active");document.querySelectorAll(".menu-item").forEach(e=>{e.addEventListener("mousemove",(function(){!function(e){let t=e.offsetWidth,d=e.offsetHeight,i=event.offsetX,c=event.offsetY;this!==event.target&&(i+=event.target.offsetLeft,c+=event.target.offsetTop);n=Math.round(i/t*1e3-500),a=Math.round(c/d*1e3-500),e.querySelector("img").style.transform=`translateX(${n/75+55}rem) translateY(${a/75-18}rem)`}(e)})),e.addEventListener("click",s)})};let n,a;function c(){this.parentNode.removeChild(this)}function s(){let t=this.querySelector("img");const n=document.createElement("img");n.setAttribute("src",t.getAttribute("src")),n.style.transform=t.style.transform+" scale(0.5)";const d=document.createElement("div");d.classList.add("show"),d.appendChild(n),d.addEventListener("click",c),e.appendChild(d)}return{render:t}})(),i=(()=>{const e=document.querySelector("#page-container");let t=document.createElement("h1");const n=document.querySelector("body");return n.addEventListener("mousemove",(function(e){let d=n.offsetWidth,a=n.offsetHeight,i=e.offsetX,c=e.offsetY;this!==e.target&&(i+=e.target.offsetLeft,c+=e.target.offsetTop);const s=i/d*30-15,o=c/a*30-15;t.style.boxShadow=`${s}px ${o}px 2px 5px rgba(0, 0, 0, 0.2)`})),{render:function(n){(()=>{let t=e.lastChild;for(;t;)e.removeChild(t),t=e.lastChild})();const i=document.createElement("nav");i.setAttribute("id","main-nav");const c=document.createElement("ul"),s=document.createElement("img");s.setAttribute("src","./images/burger-logo-bg.jpg"),s.setAttribute("id","logo");const o=document.createElement("li");o.setAttribute("id","logo-li"),o.appendChild(s);const l=document.createElement("li");l.textContent="Home",l.setAttribute("id","home-li");const r=document.createElement("li");r.textContent="Menu",r.setAttribute("id","menu-li"),r.addEventListener("click",(function(){a.render("burgers",!0)}));const m=document.createElement("li");m.textContent="About",m.setAttribute("id","about-li"),m.addEventListener("click",d.render);const p=document.createElement("li");p.textContent="Contact",p.setAttribute("id","contact-li"),c.appendChild(o),c.appendChild(l),c.appendChild(r),c.appendChild(m),c.appendChild(p),i.appendChild(c),n&&(i.style.animation="navAnimation 0.7s linear 1 forwards");const u=document.createElement("div");u.setAttribute("id","content"),t.setAttribute("id","slogan"),t.textContent="A TASTY BURGER IS WHAT YOU DESERVE",u.appendChild(t);const C=document.createElement("footer"),h=document.createElement("div");h.innerHTML='Copyright &copy;\n        <script>document.write(new Date().getFullYear());<\/script>&nbsp;&nbsp;Created by Stefan Karaferovic\n        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>',C.appendChild(h),e.appendChild(i),e.appendChild(u),e.appendChild(C),l.classList.add("active")}}})()}]);