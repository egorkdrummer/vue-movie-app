(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],p=0,f=[];p<r.length;p++)a=r[p],o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-movie-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b80":function(t,e,n){"use strict";var i=n("b9e5"),o=n.n(i);o.a},"177a":function(t,e,n){},"363c":function(t,e,n){},"45b2":function(t,e,n){},"4b6f":function(t,e,n){"use strict";var i=n("7ffd"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":!0,opacity:1},on:{"update:active":function(e){t.isLoading=e}}}),n("app-header"),n("div",{staticClass:"container"},[n("router-view",{key:"$route.fullPath"})],1)],1)},s=[],a=n("be94"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"container d-flex justify-content-between align-items-center"},[n("logo",{attrs:{to:"/"}}),n("search")],1)])},c=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-link",{staticClass:"logo",attrs:{to:t.to}},[i("img",{staticClass:"logo__img",attrs:{src:n("9b19")}}),i("span",{staticClass:"logo__text"},[t._v("OnlyMovies")])])},u=[],p={name:"logo",props:["to"]},f=p,d=(n("4b6f"),n("2877")),m=Object(d["a"])(f,l,u,!1,null,"3a5b7bab",null);m.options.__file="Logo.vue";var h=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],ref:"customSearch",attrs:{placeholder:"Enter film name"},domProps:{value:t.inputText},on:{input:[function(e){e.target.composing||(t.inputText=e.target.value)},t.search],keyup:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),e.stopPropagation(),t.submit(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?(e.preventDefault(),e.stopPropagation(),t.selectUp(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?(e.preventDefault(),e.stopPropagation(),t.selectDown(e)):null}]}}),n("transition",{attrs:{name:"fade"}},[n("ul",{staticClass:"list"},t._l(t.options,function(e,i){return n("li",{class:["item",{selected:t.selected==i?"selected":""}],on:{click:t.submit}},[t._v(t._s(e.title))])}),0)])],1)},_=[],g={data:function(){return{selected:0,inputText:"",options:[],result:[]}},methods:{submit:function(){this.$router.push({name:"movie",path:"/movie/",params:{id:this.options[this.selected].id}}),this.selected=0,this.options=[],this.result=[],this.inputText=""},search:function(){var t=this;this.$http.get("/search/movie",{params:{query:escape(this.inputText)}}).then(function(e){t.options=e.data.results}).catch(function(t){return console.log(t)})},selectUp:function(t){0!==this.selected&&(this.selected-=1,this.showSelected())},selectDown:function(){this.selected!==this.optionsLength-1&&(this.selected+=1,this.showSelected())},showSelected:function(){this.inputText=this.options[this.selected].title}},computed:{optionsLength:function(){return this.options.length}}},b=g,w=(n("584a"),Object(d["a"])(b,v,_,!1,null,"19417e60",null));w.options.__file="Search.vue";var O=w.exports,x={components:{Logo:h,Search:O},data:function(){return{expanded:!1}}},y=x,C=(n("7b0e"),Object(d["a"])(y,r,c,!1,null,null,null));C.options.__file="AppHeader.vue";var S=C.exports,k=n("9062"),L=n.n(k),$=(n("e40d"),n("2f62")),j={components:{AppHeader:S,Loading:L.a},computed:Object(a["a"])({},Object($["b"])(["isLoading"])),mounted:function(){var t,e=document.body;window.addEventListener("scroll",function(){clearTimeout(t),e.classList.contains("disable-hover")||e.classList.add("disable-hover"),t=setTimeout(function(){e.classList.remove("disable-hover")},500)},!1)}},P=j,z=(n("5c0b"),Object(d["a"])(P,o,s,!1,null,null,null));z.options.__file="App.vue";var E=z.exports,T=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ul",{staticClass:"popular row m-0"},[n("li",{staticClass:"col-12"},[t._v("Sort")]),t._l(t.popular,function(t,e){return n("li",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3 p-0"},[n("popular",{key:t.id,attrs:{item:t}})],1)})],2),n("button",{on:{click:t.nextPage}},[t._v("load more")])])},I=[],M=n("2909"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("router-link",{staticClass:"popular-item__title",attrs:{to:{name:"movie",path:"/movie/",params:{id:t.item.id}}}},[n("poster",{attrs:{src:t.item.poster_path,size:"sm"}},[n("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.item.title))])])],1),n("div",{staticClass:"vote"},[n("span",[t._v(t._s(t.item.vote_average))])])],1)},A=[],G=n("e4bb"),U={name:"popular",props:["item"],components:{Poster:G["a"]}},H=U,F=(n("0b80"),Object(d["a"])(H,N,A,!1,null,"6d361171",null));F.options.__file="Popular.vue";var J=F.exports,q={name:"home",components:{Popular:J},data:function(){return{configuration:{},current_page:1,popular:[],total_pages:null,page:1,lockScroll:!1,size:20}},methods:{scroll:function(){var t=this;window.addEventListener("scroll",function(){var e=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;e&&t.nextPage()})},getConfiguration:function(){var t=this;this.$http.get("/configuration").then(function(e){t.$store.dispatch("imgSettings",e.data)}).catch(function(t){return console.log(t)})},getPopular:function(){var t=this;this.$http.get("movie/popular").then(function(e){var n=e.data,i=n.results,o=n.page,s=n.total_pages;t.popular=i,t.page=o,t.total_pages=s}).then(function(){t.$store.dispatch("offLoading")}).catch(function(t){return console.log(t)})},nextPage:function(){var t=this,e=this;this.$http.get("movie/popular",{params:{page:++e.current_page}}).then(function(e){return t.lockScroll=!0,e}).then(function(e){t.popular=[].concat(Object(M["a"])(t.popular),Object(M["a"])(e.data.results))}).then(function(){return e.lockScroll=!1}).catch(function(t){return console.log(t)})}},created:function(){this.getConfiguration(),this.getPopular()},mounted:function(){this.scroll()}},B=q,R=(n("cccb"),Object(d["a"])(B,D,I,!1,null,null,null));R.options.__file="Home.vue";var K=R.exports,Q=n("def6");i["a"].use(T["a"]);var V=new T["a"]({mode:"history",scrollBehavior:function(){return{y:0}},base:"/vue-movie-app/",routes:[{path:"*",component:Q["default"]},{path:"/",name:"home",component:K},{path:"/movie/:id",name:"movie",component:function(){return Promise.resolve().then(n.bind(null,"def6"))},props:!0}]});i["a"].use($["a"]);var W=new $["a"].Store({state:{base_url:null,poster_size:null,thumb_size:null,logo_size:null,isLoading:!1},mutations:{IMG_SETTINGS:function(t,e){var n=e.images,i=n.base_url,o=n.poster_sizes,s=n.backdrop_sizes,a=n.logo_sizes;t.base_url=i,t.poster_size=s[3],t.thumb_size=o[3],t.logo_size=a[1]},ON_LOADING:function(t){t.isLoading=!0},OFF_LOADING:function(t){setTimeout(function(){t.isLoading=!1},1200)}},actions:{imgSettings:function(t,e){var n=t.commit;n("IMG_SETTINGS",e)},onLoading:function(t){var e=t.commit;e("ON_LOADING")},offLoading:function(t){var e=t.commit;e("OFF_LOADING")}},getters:{base_url:function(t){return t.base_url},isLoading:function(t){return t.isLoading}}}),X=n("bc3a"),Y=n.n(X),Z=n("5bdc"),tt=n.n(Z);n("f9e3"),n("77ed"),n("2cab");i["a"].config.productionTip=!1;var et=Y.a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"af9c62f06479e409fbc8b1ee21126a96",language:"en-US"}});i["a"].prototype.$http=et,i["a"].use(tt.a),new i["a"]({router:V,store:W,render:function(t){return t(E)}}).$mount("#app")},"584a":function(t,e,n){"use strict";var i=n("af0c"),o=n.n(i);o.a},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),o=n.n(i);o.a},"5e27":function(t,e,n){},"7b0e":function(t,e,n){"use strict";var i=n("177a"),o=n.n(i);o.a},"7ffd":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.107f857d.svg"},"9ecc":function(t,e,n){"use strict";var i=n("45b2"),o=n.n(i);o.a},af0c:function(t,e,n){},b006:function(t,e,n){"use strict";var i=n("bb37"),o=n.n(i);o.a},b9e5:function(t,e,n){},bb37:function(t,e,n){},c273:function(t,e,n){},cccb:function(t,e,n){"use strict";var i=n("d563"),o=n.n(i);o.a},d563:function(t,e,n){},def6:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movie"},[n("movie-details",{attrs:{id:t.id}})],1)},o=[],s=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details"},[n("h2",[t._v(t._s(t.details.title))]),n("poster",{attrs:{src:t.details.backdrop_path}}),n("div",[t._v(t._s(t.details.overview)+"\t")]),n("ul",{staticClass:"production-list"},[t._m(0),t._l(t.details.production_companies,function(e){return n("li",[n("div",{staticClass:"name"},[t._v(t._s(e.name))])])})],2),n("hr"),n("div",{staticClass:"genres-list"},[t._m(1),t._l(t.details.genres,function(e){return n("li",[t._v(t._s(e.name))])})],2),n("hr"),n("similar")],1)}),a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"title"},[n("b",[t._v("Production companies:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("b",[t._v("Genres:")])])}],r=n("e4bb"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.similar_list&&t.similar_list.length>0?n("div",{staticClass:"movie-similar"},[n("carousel",{attrs:{"per-page":4,"mouse-drag":!1}},t._l(t.similar_list,function(e,i){return n("slide",[n("router-link",{staticClass:"popular-item__title",attrs:{to:{name:"movie",path:"/movie/",params:{id:e.id}}}},[n("poster",{attrs:{src:e.poster_path,size:"sm"}}),n("div",[t._v(t._s(e.title))])],1)],1)}),1)],1):t._e()},l=[],u=n("0a63"),p={name:"similar",props:["id"],components:{Poster:r["a"],Carousel:u["Carousel"],Slide:u["Slide"]},data:function(){return{similar_list:null}},watch:{$route:function(){}},methods:{getSimilar:function(t){var e=this;this.$http.get("movie/".concat(t,"/similar")).then(function(t){e.similar_list=t.data.results}).catch(function(t){return console.log(t)})}},mounted:function(){this.getSimilar(this.id)}},f=p,d=(n("b006"),n("2877")),m=Object(d["a"])(f,c,l,!1,null,null,null);m.options.__file="Similar.vue";var h=m.exports,v={props:["id"],components:{Poster:r["a"],Similar:h},watch:{id:function(){this.getDetails(this.id)}},data:function(){return{details:{}}},methods:{getDetails:function(t){var e=this;this.$http.get("movie/".concat(t)).then(function(t){e.details=t.data}).catch(function(t){return console.log(t)})}},created:function(){this.getDetails(this.id)}},_=v,g=(n("ef49"),Object(d["a"])(_,s,a,!1,null,null,null));g.options.__file="MovieDetails.vue";var b=g.exports,w={props:["id"],components:{MovieDetails:b},data:function(){return{details:null}},methods:{getConfiguration:function(){var t=this;this.$http.get("/configuration").then(function(e){t.$store.dispatch("imgSettings",e.data)}).catch(function(t){return console.log(t)})}},created:function(){this.getConfiguration()}},O=w,x=(n("f2cc"),Object(d["a"])(O,i,o,!1,null,null,null));x.options.__file="Movie.vue";e["default"]=x.exports},e4bb:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"poster"},[t._t("title"),void 0==t.src||null==t.src?void 0:[n("img",{directives:[{name:"show",rawName:"v-show",value:t.showImg,expression:"showImg"}],staticClass:"poster__img",attrs:{src:t.base_url+t.img_size+t.src},on:{load:t.imgLoaded}})]],2)])},o=[],s=n("be94"),a=n("2f62"),r={props:["src","size"],data:function(){return{showImg:!1}},computed:Object(s["a"])({},Object(a["b"])(["base_url"]),Object(a["c"])(["poster_size","thumb_size","logo_size"]),{img_size:function(){var t="";switch(this.size){case"sm":t=this.thumb_size;break;case"xs":t=this.logo_size;break;default:t=this.poster_size}return t}}),methods:{imgLoaded:function(){this.showImg=!0}}},c=r,l=(n("9ecc"),n("2877")),u=Object(l["a"])(c,i,o,!1,null,null,null);u.options.__file="Poster.vue";e["a"]=u.exports},ef49:function(t,e,n){"use strict";var i=n("c273"),o=n.n(i);o.a},f2cc:function(t,e,n){"use strict";var i=n("363c"),o=n.n(i);o.a}});
//# sourceMappingURL=app.4cf8130f.js.map