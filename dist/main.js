!function(e){var t={};function n(d){if(t[d])return t[d].exports;var a=t[d]={i:d,l:!1,exports:{}};return e[d].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(d,a,function(t){return e[t]}.bind(null,a));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const d=(()=>{const e=document.querySelector("#page-container");return{render:()=>{(()=>{let t=e.lastChild;for(;t;)e.removeChild(t),t=e.lastChild})();const t=document.createElement("nav");t.setAttribute("id","main-nav");const n=document.createElement("ul"),d=document.createElement("img");d.setAttribute("src","./images/burger-logo-bg.jpg"),d.setAttribute("id","logo");const s=document.createElement("li");s.setAttribute("id","logo-li"),s.appendChild(d);const o=document.createElement("li");o.textContent="Home",o.setAttribute("id","home-li"),o.addEventListener("click",c.render);const l=document.createElement("li");l.textContent="Menu",l.setAttribute("id","menu-li"),l.addEventListener("click",(function(){i.render("burgers")}));const r=document.createElement("li");r.textContent="About",r.setAttribute("id","about-li"),r.addEventListener("click",a.render);const m=document.createElement("li");m.textContent="Contact",m.setAttribute("id","contact-li"),n.appendChild(s),n.appendChild(o),n.appendChild(l),n.appendChild(r),n.appendChild(m),t.appendChild(n);const p=document.createElement("div");p.setAttribute("id","contact-content");const u=document.createElement("div");u.setAttribute("id","contact-info");const h=document.createElement("h2");h.textContent="CONTACT";const C=document.createElement("div");C.classList.add("contact-item");const E=document.createElement("span");E.classList.add("icon");const g=document.createElement("img");g.setAttribute("src","./images/contact-page/pin.svg"),g.setAttribute("alt","pin icon"),E.appendChild(g);const b=document.createElement("p");b.innerHTML="1510 South Main Street<br>\n         Las Vegas, NV 89104 <br>\n         Located in Able Baker Brewing",C.appendChild(E),C.appendChild(b);const L=document.createElement("div");L.classList.add("contact-item");const v=document.createElement("span");v.classList.add("icon");const A=document.createElement("img");A.setAttribute("src","./images/contact-page/clock2.svg"),A.setAttribute("alt","clock icon"),v.appendChild(A);const f=document.createElement("p");f.innerHTML='<strong class="name">Sun-Thurs:</strong> 12pm-9pm <br>\n         <strong class="name">Fri-Sat:</strong> 12pm-11pm <br>',L.appendChild(v),L.appendChild(f);const x=document.createElement("div");x.classList.add("contact-item");const k=document.createElement("span");k.classList.add("icon");const y=document.createElement("img");y.setAttribute("src","./images/contact-page/phone.svg"),y.setAttribute("alt","phone icon"),k.appendChild(y);const S=document.createElement("p");S.textContent="555.236.515",x.appendChild(k),x.appendChild(S);const B=document.createElement("div");B.classList.add("contact-item");const T=document.createElement("span");T.classList.add("icon");const j=document.createElement("img");j.setAttribute("src","./images/contact-page/mail.svg"),j.setAttribute("alt","message icon"),T.appendChild(j);const w=document.createElement("h3");w.textContent="MESSAGE US",B.appendChild(T),B.appendChild(w);const H=document.createElement("div");H.setAttribute("id","email-sender");const R=document.createElement("form");R.setAttribute("action","mailto:stefankaraferovic@gmail.com"),R.setAttribute("autocomplete","off"),R.setAttribute("method","post"),R.setAttribute("enctype","text/plain");const M=document.createElement("input");M.setAttribute("type","text"),M.setAttribute("id","name"),M.setAttribute("size","25"),M.setAttribute("placeholder","Name");const P=document.createElement("input");P.setAttribute("type","text"),P.setAttribute("id","name"),P.setAttribute("size","25"),P.setAttribute("placeholder","Phone Number");const G=document.createElement("input");G.setAttribute("type","text"),G.setAttribute("id","name"),G.setAttribute("size","25"),G.setAttribute("placeholder","Email Address");const I=document.createElement("textarea");I.setAttribute("name","message"),I.setAttribute("id","message"),I.setAttribute("cols","25"),I.setAttribute("rows","5"),I.setAttribute("placeholder","Message"),I.setAttribute("resize","none");const $=document.createElement("input");$.setAttribute("type","submit"),$.setAttribute("value","Send message"),$.setAttribute("id","send"),R.appendChild(M),R.appendChild(P),R.appendChild(M),R.appendChild(I),R.appendChild($),H.appendChild(R),u.appendChild(h),u.appendChild(C),u.appendChild(L),u.appendChild(x),u.appendChild(B),u.appendChild(H);const N=document.createElement("div");N.setAttribute("id","contact-maps");const O=document.createElement("div");O.setAttribute("id","map"),N.appendChild(O),p.appendChild(u),p.appendChild(N);const F=document.createElement("footer"),D=document.createElement("div");D.innerHTML='Copyright &copy;\n        <script>document.write(new Date().getFullYear());<\/script>&nbsp;&nbsp;Created by Stefan Karaferovic\n        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>',F.appendChild(D),e.appendChild(t),e.appendChild(p),e.appendChild(F),m.classList.add("active")}}})(),a=(()=>{const e=document.querySelector("#page-container");function t(){this.setAttribute("src","./images/about-page/burger-hover-img.png"),this.style.transform="scale(1.2)"}function n(){this.setAttribute("src","./images/burger-logo-bg.jpg"),this.style.transform="scale(1)"}function a(){this.parentNode.removeChild(this)}function s(){const t=document.createElement("img");t.setAttribute("src",this.getAttribute("src")),"meal"===this.getAttribute("id")&&(t.style.width="42rem",t.style.height="55rem"),t.style.transform="scale(0.5)";const n=document.createElement("div");n.classList.add("show"),n.appendChild(t),n.addEventListener("click",a),e.appendChild(n)}return{render:a=>{(()=>{let t=e.lastChild;for(;t;)e.removeChild(t),t=e.lastChild})();const o=document.createElement("nav");o.setAttribute("id","main-nav");const l=document.createElement("ul"),r=document.createElement("img");r.setAttribute("src","./images/burger-logo-bg.jpg"),r.setAttribute("id","logo");const m=document.createElement("li");m.setAttribute("id","logo-li"),m.appendChild(r);const p=document.createElement("li");p.textContent="Home",p.setAttribute("id","home-li"),p.addEventListener("click",c.render);const u=document.createElement("li");u.textContent="Menu",u.setAttribute("id","menu-li"),u.addEventListener("click",(function(){i.render("burgers")}));const h=document.createElement("li");h.textContent="About",h.setAttribute("id","about-li");const C=document.createElement("li");C.textContent="Contact",C.setAttribute("id","contact-li"),C.addEventListener("click",d.render),l.appendChild(m),l.appendChild(p),l.appendChild(u),l.appendChild(h),l.appendChild(C),o.appendChild(l);const E=document.createElement("div");E.setAttribute("id","about-content"),a&&(E.style.animation="insertItem 0.5s linear  1  forwards");const g=document.createElement("div");g.setAttribute("id","about-img");const b=document.createElement("img");b.setAttribute("src","./images/about-page/top3.png"),b.setAttribute("id","kitchen"),b.setAttribute("alt","burger making in kitchen");const L=document.createElement("img");L.setAttribute("src","./images/about-page/burger8.jpg"),L.setAttribute("id","meal"),L.setAttribute("alt","burger image"),g.appendChild(b),g.appendChild(L);const v=document.createElement("div");v.setAttribute("id","about-text");const A=document.createElement("div");A.setAttribute("id","header");const f=document.createElement("h2");f.textContent="ABOUT US";const x=document.createElement("div");x.setAttribute("id","logo");const k=document.createElement("img");k.setAttribute("src","./images/burger-logo-bg.jpg"),k.setAttribute("alt","restauran logo"),k.addEventListener("mouseover",t),k.addEventListener("mouseleave",n),x.appendChild(k),A.appendChild(f),A.appendChild(x);const y=document.createElement("p");y.innerHTML='When we opened <strong class="name">Burger cafe</strong> in June 2017, our vision was to create an unassuming watering hole for the locals. In a town with endless options for bars and lounges, we found it challenging to find a friendly bar with a solid craft beer list, good food, and non-gaming/non-smoking. We wanted to provide friends and neighbors alike with the original form of social networking; a fun easy going bar, and a cold pint. Our staunch belief in providing exceptional quality products with friendly service in a clean and welcoming setting has helped us earn the reputation among the locals as one of the best hidden gems in Las Vegas.';const S=document.createElement("p");S.innerHTML='<strong class="name">Burger cafe</strong> is a culmination of giving our best to the community through our food, service, and atmosphere. Tucked inside one of the premier breweries in Nevada, this collaboration project allows us another opportunity to create a memorable setting for you to catch up with friends and make new ones over tasty bites and a refreshing beer.',v.appendChild(A),v.appendChild(y),v.appendChild(S),E.appendChild(v),E.appendChild(g);const B=document.createElement("footer"),T=document.createElement("div");T.innerHTML='Copyright &copy;\n        <script>document.write(new Date().getFullYear());<\/script>&nbsp;&nbsp;Created by Stefan Karaferovic\n        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>',B.appendChild(T),e.appendChild(o),e.appendChild(E),e.appendChild(B),h.classList.add("active");const j=document.querySelector("#kitchen"),w=document.querySelector("#meal");j.addEventListener("click",s),w.addEventListener("click",s)}}})(),i=(()=>{const e=document.querySelector("#page-container"),t=(s,l)=>{(()=>{let t=e.lastChild;for(;t;)e.removeChild(t),t=e.lastChild})();const r=document.createElement("nav");r.setAttribute("id","main-nav");const m=document.createElement("ul"),p=document.createElement("img");p.setAttribute("src","./images/burger-logo-bg.jpg"),p.setAttribute("id","logo");const u=document.createElement("li");u.setAttribute("id","logo-li"),u.appendChild(p);const h=document.createElement("li");h.textContent="Home",h.setAttribute("id","home-li"),h.addEventListener("click",c.render);const C=document.createElement("li");C.textContent="Menu",C.setAttribute("id","menu-li");const E=document.createElement("li");E.textContent="About",E.setAttribute("id","about-li"),E.addEventListener("click",a.render);const g=document.createElement("li");g.textContent="Contact",g.setAttribute("id","contact-li"),g.addEventListener("click",d.render),m.appendChild(u),m.appendChild(h),m.appendChild(C),m.appendChild(E),m.appendChild(g),r.appendChild(m);const b=document.createElement("div");b.setAttribute("id","menu-content"),l&&(b.style.animation="insertItem 0.5s linear  1  forwards");const L=document.createElement("div");L.setAttribute("id","menu");const v=document.createElement("ul"),A=document.createElement("li");A.setAttribute("id","burgers"),A.textContent="BURGERS & SANDWICHES",A.addEventListener("click",(function(){t("burgers")}));const f=document.createElement("li");f.setAttribute("id","snacks"),f.textContent="SNACKS",f.addEventListener("click",(function(){t("snacks")}));const x=document.createElement("li");x.textContent="SALADS",x.setAttribute("id","salads"),x.addEventListener("click",(function(){t("salads")}));const k=document.createElement("li");if(k.textContent="MINI ME",k.setAttribute("id","minies"),k.addEventListener("click",(function(){t("minies")})),v.appendChild(A),v.appendChild(f),v.appendChild(x),v.appendChild(k),L.appendChild(v),"burgers"===s){A.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="CRAFT BURGER";const a=document.createElement("span");a.classList.add("price"),a.textContent="9$",n.appendChild(d),n.appendChild(a);const i=document.createElement("div");i.classList.add("img-div");const c=document.createElement("img");c.setAttribute("src","./images/burgers/burger1.jpg"),i.appendChild(c);const s=document.createElement("div");s.classList.add("menu-item-description");const o=document.createElement("p");o.textContent="Lettuce, Tomato, Pickles, American, Caramelized Onion, Fry Sauce",s.appendChild(o),s.appendChild(i),t.appendChild(n),t.appendChild(s);const l=document.createElement("div");l.classList.add("menu-item");const r=document.createElement("div");r.classList.add("menu-item-header");const m=document.createElement("h2");m.classList.add("name"),m.textContent="FRIED CHICKEN SANDWICH";const p=document.createElement("span");p.classList.add("price"),p.textContent="10$",r.appendChild(m),r.appendChild(p);const u=document.createElement("img");u.setAttribute("src","./images/burgers/burger2.jpg");const h=document.createElement("div");h.classList.add("menu-item-description");const C=document.createElement("p");C.innerHTML="Lettuce, Tomato, Pickles, Kewpie Mayo <br> Choose from: Nashville Hot Spice Blend, Honey Garlic BBQ, or Buffalo",h.appendChild(C),h.appendChild(u),l.appendChild(r),l.appendChild(h);const E=document.createElement("div");E.classList.add("menu-item");const g=document.createElement("div");g.classList.add("menu-item-header");const v=document.createElement("h2");v.classList.add("name"),v.textContent="PORK BELLY BURGER";const f=document.createElement("span");f.classList.add("price"),f.textContent="11$",g.appendChild(v),g.appendChild(f);const x=document.createElement("img");x.setAttribute("src","./images/burgers/burger3.jpg");const k=document.createElement("div");k.classList.add("menu-item-description");const y=document.createElement("p");y.textContent="Hoisin Glazed Pork Belly and Burger Patty, Gochujang Aioli, Fried Shallots, Cabbage, Cilantro",k.appendChild(y),k.appendChild(x),E.appendChild(g),E.appendChild(k);const S=document.createElement("div");S.classList.add("menu-item");const B=document.createElement("div");B.classList.add("menu-item-header");const T=document.createElement("h2");T.classList.add("name"),T.textContent="VEGAN CRAFT BURGER";const j=document.createElement("span");j.classList.add("price"),j.textContent="11$",B.appendChild(T),B.appendChild(j);const w=document.createElement("img");w.setAttribute("src","./images/burgers/burger4.jpg");const H=document.createElement("div");H.classList.add("menu-item-description");const R=document.createElement("p");R.textContent="Lettuce, Tomatoes, Pickle, Cheddar, Fry Sauce",H.appendChild(R),H.appendChild(w),S.appendChild(B),S.appendChild(H);const M=document.createElement("div");M.classList.add("menu-item");const P=document.createElement("div");P.classList.add("menu-item-header");const G=document.createElement("h2");G.classList.add("name"),G.textContent="BEER BATTERED FISH PO'BOY";const I=document.createElement("span");I.classList.add("price"),I.textContent="10$",P.appendChild(G),P.appendChild(I);const $=document.createElement("img");$.setAttribute("src","./images/burgers/burger5.jpg");const N=document.createElement("div");N.classList.add("menu-item-description");const O=document.createElement("p");O.textContent="Beer Battered Cod, Lettuce, Tomato, Cajun Remoulade, Pickles",N.appendChild(O),N.appendChild($),M.appendChild(P),M.appendChild(N);const F=document.createElement("div");F.classList.add("menu-item");const D=document.createElement("div");D.classList.add("menu-item-header");const K=document.createElement("h2");K.classList.add("name"),K.textContent="BBQ CHICKEN BANH MI";const Y=document.createElement("span");Y.classList.add("price"),Y.textContent="9$",D.appendChild(K),D.appendChild(Y);const U=document.createElement("img");U.setAttribute("src","./images/burgers/burger6.jpg");const W=document.createElement("div");W.classList.add("menu-item-description");const q=document.createElement("p");q.textContent="Ginger Garlic Marinated Chicken Thigh, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",W.appendChild(q),W.appendChild(U),F.appendChild(D),F.appendChild(W);const _=document.createElement("div");_.classList.add("menu-item");const z=document.createElement("div");z.classList.add("menu-item-header");const J=document.createElement("h2");J.classList.add("name"),J.textContent="BBQ STEAK BANH MI";const V=document.createElement("span");V.classList.add("price"),V.textContent="10$",z.appendChild(J),z.appendChild(V);const Q=document.createElement("img");Q.setAttribute("src","./images/burgers/burger7.jpg");const X=document.createElement("div");X.classList.add("menu-item-description");const Z=document.createElement("p");Z.textContent="Shallot Peppered Sirloin, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",X.appendChild(Z),X.appendChild(Q),_.appendChild(z),_.appendChild(X);const ee=document.createElement("div");ee.classList.add("menu-item");const te=document.createElement("div");te.classList.add("menu-item-header");const ne=document.createElement("h2");ne.classList.add("name"),ne.textContent="PORK BELLY BANH MI";const de=document.createElement("span");de.classList.add("price"),de.textContent="11$",te.appendChild(ne),te.appendChild(de);const ae=document.createElement("img");ae.setAttribute("src","./images/burgers/burger8.jpg");const ie=document.createElement("div");ie.classList.add("menu-item-description");const ce=document.createElement("p");ce.textContent="Hoisin Sambal Glazed Belly, Cucumber, Pickled Daikon, Pickled Carrots, Cilantro, Fresh Jalapeno, Kewpie Mayo",ie.appendChild(ce),ie.appendChild(ae),ee.appendChild(te),ee.appendChild(ie),e.appendChild(t),e.appendChild(l),e.appendChild(E),e.appendChild(S),e.appendChild(M),e.appendChild(F),e.appendChild(_),e.appendChild(ee),b.appendChild(L),b.appendChild(e)}if("snacks"===s){f.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="FRENCH FRIES";const a=document.createElement("span");a.classList.add("price"),a.textContent="5$",n.appendChild(d),n.appendChild(a);const i=document.createElement("img");i.setAttribute("src","./images/snacks/snack1.jpg");const c=document.createElement("div");c.classList.add("menu-item-description");const s=document.createElement("p");s.textContent="Served with Fry Sauce",c.appendChild(s),c.appendChild(i),t.appendChild(n),t.appendChild(c);const o=document.createElement("div");o.classList.add("menu-item");const l=document.createElement("div");l.classList.add("menu-item-header");const r=document.createElement("h2");r.classList.add("name"),r.textContent="BEER BRINED JUMBO WINGS (6 OR 12)";const m=document.createElement("span");m.classList.add("price"),m.textContent="12/19$",l.appendChild(r),l.appendChild(m);const p=document.createElement("img");p.setAttribute("src","./images/snacks/snack2.jpg");const u=document.createElement("div");u.classList.add("menu-item-description");const h=document.createElement("p");h.innerHTML="Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, or Gochujang Honey. Served with Celery & Buttermilk Ranch or Blue Cheese",u.appendChild(h),u.appendChild(p),o.appendChild(l),o.appendChild(u);const C=document.createElement("div");C.classList.add("menu-item");const E=document.createElement("div");E.classList.add("menu-item-header");const g=document.createElement("h2");g.classList.add("name"),g.textContent="CRISPY CAULIFLOWER";const v=document.createElement("span");v.classList.add("price"),v.textContent="9$",E.appendChild(g),E.appendChild(v);const A=document.createElement("img");A.setAttribute("src","./images/snacks/snack3.jpg");const x=document.createElement("div");x.classList.add("menu-item-description");const k=document.createElement("p");k.textContent="Choose from: Buffalo, Honey Garlic BBQ, Hoisin Sambal, Gochujang Honey, Buttermilk Ranch, or Blue Cheese.",x.appendChild(k),x.appendChild(A),C.appendChild(E),C.appendChild(x);const y=document.createElement("div");y.classList.add("menu-item");const S=document.createElement("div");S.classList.add("menu-item-header");const B=document.createElement("h2");B.classList.add("name"),B.textContent="ELOTE SALSA & CHIPS";const T=document.createElement("span");T.classList.add("price"),T.textContent="7$",S.appendChild(B),S.appendChild(T);const j=document.createElement("img");j.setAttribute("src","./images/snacks/snack4.jpg");const w=document.createElement("div");w.classList.add("menu-item-description");const H=document.createElement("p");H.textContent="Roasted Sweet Corn, Pico de Gallo, Cilantro Lime Crema, Tajin, Cotija Cheese",w.appendChild(H),w.appendChild(j),y.appendChild(S),y.appendChild(w);const R=document.createElement("div");R.classList.add("menu-item");const M=document.createElement("div");M.classList.add("menu-item-header");const P=document.createElement("h2");P.classList.add("name"),P.textContent="BAJA FISH TACOS";const G=document.createElement("span");G.classList.add("price"),G.textContent="7$",M.appendChild(P),M.appendChild(G);const I=document.createElement("img");I.setAttribute("src","./images/snacks/snack5.jpg");const $=document.createElement("div");$.classList.add("menu-item-description");const N=document.createElement("p");N.textContent="Beer Battered Cod, Cabbage, Pico de Gallo, Guacamole, Cilantro Lime Crema",$.appendChild(N),$.appendChild(I),R.appendChild(M),R.appendChild($);const O=document.createElement("div");O.classList.add("menu-item");const F=document.createElement("div");F.classList.add("menu-item-header");const D=document.createElement("h2");D.classList.add("name"),D.textContent="TJ DOG";const K=document.createElement("span");K.classList.add("price"),K.textContent="5$",F.appendChild(D),F.appendChild(K);const Y=document.createElement("img");Y.setAttribute("src","./images/snacks/snack6.jpg");const U=document.createElement("div");U.classList.add("menu-item-description");const W=document.createElement("p");W.textContent="Bacon Wrapped All Beef Dog, Grilled Fajitas, Cilantro Lime Crema, Cotija Cheese",U.appendChild(W),U.appendChild(Y),O.appendChild(F),O.appendChild(U);const q=document.createElement("div");q.classList.add("menu-item");const _=document.createElement("div");_.classList.add("menu-item-header");const z=document.createElement("h2");z.classList.add("name"),z.textContent="GARBAGE NACHOS";const J=document.createElement("span");J.classList.add("price"),J.textContent="12$",_.appendChild(z),_.appendChild(J);const V=document.createElement("img");V.setAttribute("src","./images/snacks/snack7.jpg");const Q=document.createElement("div");Q.classList.add("menu-item-description");const X=document.createElement("p");X.textContent="Pork Belly & Chicken with a House Cheese Blend, Pico De Gallo, Guacamole, Cilantro Lime Crema",Q.appendChild(X),Q.appendChild(V),q.appendChild(_),q.appendChild(Q),e.appendChild(t),e.appendChild(o),e.appendChild(C),e.appendChild(y),e.appendChild(R),e.appendChild(O),e.appendChild(q),b.appendChild(L),b.appendChild(e)}if("salads"===s){x.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="MIXED GREENS";const a=document.createElement("span");a.classList.add("price"),a.textContent="9$",n.appendChild(d),n.appendChild(a);const i=document.createElement("img");i.setAttribute("src","./images/salads/salad1.jpg");const c=document.createElement("div");c.classList.add("menu-item-description");const s=document.createElement("p");s.textContent="Carrots, Tomatoes, Cucumber, Croutons & Choice of: Citrus Vinaigrette (V), Ranch, or Blue Cheese Dressing",c.appendChild(s),c.appendChild(i),t.appendChild(n),t.appendChild(c);const o=document.createElement("div");o.classList.add("menu-item");const l=document.createElement("div");l.classList.add("menu-item-header");const r=document.createElement("h2");r.classList.add("name"),r.textContent="CRAFT COBB";const m=document.createElement("span");m.classList.add("price"),m.textContent="10$",l.appendChild(r),l.appendChild(m);const p=document.createElement("img");p.setAttribute("src","./images/salads/salad2.jpg");const u=document.createElement("div");u.classList.add("menu-item-description");const h=document.createElement("p");h.innerHTML="Romaine, Carrots, Tomatoes, Cucumber, Egg, Bacon, Blue Cheese",u.appendChild(h),u.appendChild(p),o.appendChild(l),o.appendChild(u);const C=document.createElement("div");C.classList.add("menu-item");const E=document.createElement("div");E.classList.add("menu-item-header");const g=document.createElement("h2");g.classList.add("name"),g.textContent="CAESAR";const v=document.createElement("span");v.classList.add("price"),v.textContent="9$",E.appendChild(g),E.appendChild(v);const A=document.createElement("img");A.setAttribute("src","./images/salads/salad3.jpg");const f=document.createElement("div");f.classList.add("menu-item-description");const k=document.createElement("p");k.textContent="Romaine, Shaved Parmesan, Croutons",f.appendChild(k),f.appendChild(A),C.appendChild(E),C.appendChild(f);const y=document.createElement("div");y.classList.add("menu-item");const S=document.createElement("div");S.classList.add("menu-item-header");const B=document.createElement("h2");B.classList.add("name"),B.textContent="ADD PROTEIN",S.appendChild(B);const T=document.createElement("div");T.classList.add("menu-item-description");const j=document.createElement("p"),w=document.createElement("p"),H=document.createElement("p");j.textContent="Grilled Chipotle Chicken – 4$",w.textContent="Peppered Sirloin Steak – 5$",H.textContent="Pork Belly – 5$",T.appendChild(j),T.appendChild(w),T.appendChild(H),j.style.margin="1rem 0rem 0rem",w.style.margin="0rem",H.style.margin="0rem",y.appendChild(S),y.appendChild(T),e.appendChild(t),e.appendChild(o),e.appendChild(C),e.appendChild(y),b.appendChild(L),b.appendChild(e)}if("minies"===s){k.classList.add("activeTab");const e=document.createElement("div");e.setAttribute("id","menu-items");const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("div");n.classList.add("menu-item-header");const d=document.createElement("h2");d.classList.add("name"),d.textContent="MINI BURGER W/ FRIES";const a=document.createElement("span");a.classList.add("price"),a.textContent="9$",n.appendChild(d),n.appendChild(a);const i=document.createElement("img");i.setAttribute("src","./images/minies/mini1.jpg");const c=document.createElement("div");c.classList.add("menu-item-description");const s=document.createElement("p");s.textContent="Meat, Cheese, Potato Roll",c.appendChild(s),c.appendChild(i),t.appendChild(n),t.appendChild(c);const o=document.createElement("div");o.classList.add("menu-item");const l=document.createElement("div");l.classList.add("menu-item-header");const r=document.createElement("h2");r.classList.add("name"),r.textContent="GRILLED CHEESE W/ FRIES";const m=document.createElement("span");m.classList.add("price"),m.textContent="8$",l.appendChild(r),l.appendChild(m);const p=document.createElement("img");p.setAttribute("src","./images/minies/mini2.jpg");const u=document.createElement("div");u.classList.add("menu-item-description");const h=document.createElement("p");h.textContent="American & Cheddar",u.appendChild(h),u.appendChild(p),o.appendChild(l),o.appendChild(u);const C=document.createElement("div");C.classList.add("menu-item");const E=document.createElement("div");E.classList.add("menu-item-header");const g=document.createElement("h2");g.classList.add("name"),g.textContent="MAC & CHEESE";const v=document.createElement("span");v.classList.add("price"),v.textContent="6$",E.appendChild(g),E.appendChild(v);const A=document.createElement("img");A.setAttribute("src","./images/minies/mini3.jpg");const f=document.createElement("div");f.classList.add("menu-item-description");const x=document.createElement("p");x.innerHTML="",f.appendChild(x),f.appendChild(A),C.appendChild(E),C.appendChild(f),e.appendChild(t),e.appendChild(o),e.appendChild(C),b.appendChild(L),b.appendChild(e)}const y=document.createElement("footer"),S=document.createElement("div");S.innerHTML='Copyright &copy;\n        <script>document.write(new Date().getFullYear());<\/script>&nbsp;&nbsp;Created by Stefan Karaferovic\n        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>',y.appendChild(S),e.appendChild(r),e.appendChild(b),e.appendChild(y),C.classList.add("active");document.querySelectorAll(".menu-item").forEach(e=>{e.addEventListener("mousemove",(function(){!function(e){let t=e.offsetWidth,d=e.offsetHeight,a=event.offsetX,c=event.offsetY;this!==event.target&&(a+=event.target.offsetLeft,c+=event.target.offsetTop);n=Math.round(a/t*1e3-500),i=Math.round(c/d*1e3-500),e.querySelector("img").style.transform=`translateX(${n/75+55}rem) translateY(${i/75-18}rem)`}(e)})),e.addEventListener("click",o)})};let n,i;function s(){this.parentNode.removeChild(this)}function o(){let t=this.querySelector("img");const n=document.createElement("img");n.setAttribute("src",t.getAttribute("src")),n.style.transform=t.style.transform+" scale(0.5)";const d=document.createElement("div");d.classList.add("show"),d.appendChild(n),d.addEventListener("click",s),e.appendChild(d)}return{render:t}})(),c=(()=>{const e=document.querySelector("#page-container");let t=document.createElement("h1");const n=document.querySelector("body");return n.addEventListener("mousemove",(function(e){let d=n.offsetWidth,a=n.offsetHeight,i=e.offsetX,c=e.offsetY;this!==e.target&&(i+=e.target.offsetLeft,c+=e.target.offsetTop);const s=i/d*30-15,o=c/a*30-15;t.style.boxShadow=`${s}px ${o}px 2px 5px rgba(0, 0, 0, 0.2)`})),{render:function(n){(()=>{let t=e.lastChild;for(;t;)e.removeChild(t),t=e.lastChild})();const c=document.createElement("nav");c.setAttribute("id","main-nav");const s=document.createElement("ul"),o=document.createElement("img");o.setAttribute("src","./images/burger-logo-bg.jpg"),o.setAttribute("id","logo");const l=document.createElement("li");l.setAttribute("id","logo-li"),l.appendChild(o);const r=document.createElement("li");r.textContent="Home",r.setAttribute("id","home-li");const m=document.createElement("li");m.textContent="Menu",m.setAttribute("id","menu-li"),m.addEventListener("click",(function(){i.render("burgers",!0)}));const p=document.createElement("li");p.textContent="About",p.setAttribute("id","about-li"),p.addEventListener("click",a.render);const u=document.createElement("li");u.textContent="Contact",u.setAttribute("id","contact-li"),u.addEventListener("click",d.render),s.appendChild(l),s.appendChild(r),s.appendChild(m),s.appendChild(p),s.appendChild(u),c.appendChild(s),n&&(c.style.animation="navAnimation 0.7s linear 1 forwards");const h=document.createElement("div");h.setAttribute("id","content"),t.setAttribute("id","slogan"),t.textContent="A TASTY BURGER IS WHAT YOU DESERVE",h.appendChild(t);const C=document.createElement("footer"),E=document.createElement("div");E.innerHTML='Copyright &copy;\n        <script>document.write(new Date().getFullYear());<\/script>&nbsp;&nbsp;Created by Stefan Karaferovic\n        | <i class="fab fa-github"></i> <a href="https://github.com/stefank-29" target="_blank">stefank-29</a>',C.appendChild(E),e.appendChild(c),e.appendChild(h),e.appendChild(C),r.classList.add("active")}}})();window.onload=c.render(!0)}]);