(this["webpackJsonpprueba-front-poke"]=this["webpackJsonpprueba-front-poke"]||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var s=n(1),o=n.n(s),a=n(17),c=n.n(a),i=(n(68),n(69),n(21)),r=n(22),l=n(26),h=n(24),j=n(81),d=n(59),b=n(2),u=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"mt-5",style:{backgroundColor:"gray",color:"white"},children:Object(b.jsxs)(j.a,{className:"p-3",children:[Object(b.jsx)(d.a,{xs:12,md:6,children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d.a,{xs:12,md:6,style:{textAlign:"center"},children:Object(b.jsx)("h1",{children:"PokeApp"})}),Object(b.jsx)(d.a,{xs:12,md:6})]})}),Object(b.jsx)(d.a,{xs:12,md:6,children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d.a,{xs:12,md:6,style:{textAlign:"center"},children:"Prueba tecnica frontend HOUM"}),Object(b.jsx)(d.a,{xs:12,md:6,style:{textAlign:"center"},children:"Autor: Santiago Serrano A"})]})})]})})}}]),n}(s.Component),m=n(90),x=n(89),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(m.a,{bg:"light",children:[Object(b.jsx)(m.a.Brand,{href:"#home",children:"PokeApp"}),Object(b.jsx)(m.a.Toggle,{}),Object(b.jsxs)(x.a,{className:"justify-content-center",children:[Object(b.jsx)(x.a.Link,{href:"#home",children:"Pokemon"}),Object(b.jsx)(x.a.Link,{href:"#features",children:"Locations"}),Object(b.jsx)(x.a.Link,{href:"#pricing",children:"Items"})]})]})})}}]),n}(s.Component),f=n(20),O=n(60),g=n(84),k=n(91),v=n(83),y=n(88),_=n(85),C=n(62),S=n(86),w=n(63),P=n(82),I=n(87),F=n(36),N=n(58),A=n(61),D=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={image:"front_default",info:"info"},s.handleClose=s.handleClose.bind(Object(f.a)(s)),s}return Object(r.a)(n,[{key:"handleImageChange",value:function(e){this.setState({image:e})}},{key:"handleInfoChange",value:function(e){this.setState({info:e})}},{key:"handleClose",value:function(){this.setState({image:"front_default",info:"info"}),this.props.close()}},{key:"renderImage",value:function(){return"front_default"===this.state.image?this.props.pokemon.sprites.front_default:"front_female"===this.state.image?this.props.pokemon.sprites.front_female:"front_shiny"===this.state.image?this.props.pokemon.sprites.front_shiny:"front_shiny_female"===this.state.image?this.props.pokemon.sprites.front_shiny_female:void 0}},{key:"renderImageButton",value:function(){var e=this,t=[];return null!==this.props.pokemon.sprites.front_default&&t.push(Object(b.jsx)(O.a,{variant:"outline-orng",onClick:function(){return e.handleImageChange("front_default")},children:"Default"},1)),null!==this.props.pokemon.sprites.front_shiny&&t.push(Object(b.jsx)(O.a,{variant:"outline-orng",onClick:function(){return e.handleImageChange("front_shiny")},children:"Shiny"},2)),null!==this.props.pokemon.sprites.front_female&&t.push(Object(b.jsx)(O.a,{variant:"outline-orng",onClick:function(){return e.handleImageChange("front_female")},children:"Female"},3)),null!==this.props.pokemon.sprites.front_shiny_female&&t.push(Object(b.jsx)(O.a,{variant:"outline-orng",onClick:function(){return e.handleImageChange("front_shiny_female")},children:"Female Shiny"},4)),o.a.createElement("div",{className:"btn-group"},t)}},{key:"renderInfo",value:function(){return"info"===this.state.info?Object(b.jsxs)("div",{children:[Object(b.jsx)(j.a,{style:{justifyContent:"center"},children:Object(b.jsx)("h3",{children:"INFO"})}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d.a,{xs:12,md:6,children:Object(b.jsxs)("h4",{children:[Object(b.jsx)(N.b,{className:"mx-4 my-2"}),"Weight: ",this.props.pokemon.weight/10," kg"]})}),Object(b.jsx)(d.a,{xs:12,md:6,children:Object(b.jsxs)("h4",{children:[Object(b.jsx)(A.a,{className:"mx-4 my-2"}),"Height: ",this.props.pokemon.height/10," m"]})})]}),Object(b.jsx)(j.a,{style:{justifyContent:"center"},children:Object(b.jsx)("h3",{children:"STATS"})}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d.a,{xs:12,md:6,children:Object(b.jsxs)("h4",{children:[Object(b.jsx)(F.a,{className:"mx-4 my-2"}),"Hp: ",this.props.pokemon.stats[1].base_stat]})}),Object(b.jsx)(d.a,{xs:12,md:6,children:Object(b.jsxs)("h4",{children:[Object(b.jsx)(N.a,{className:"mx-4 my-2"}),"Speed: ",this.props.pokemon.stats[5].base_stat]})})]}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d.a,{xs:12,md:6,children:Object(b.jsxs)("h4",{children:[Object(b.jsx)(F.d,{className:"mx-4 my-2"}),"Atk: ",this.props.pokemon.stats[1].base_stat]})}),Object(b.jsx)(d.a,{xs:12,md:6,children:Object(b.jsxs)("h4",{children:[Object(b.jsx)(F.b,{className:"mx-4 my-2"}),"Def: ",this.props.pokemon.stats[1].base_stat]})})]}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d.a,{xs:12,md:6,children:Object(b.jsxs)("h4",{children:[Object(b.jsx)(F.e,{className:"mx-4 my-2"}),"SP Atk:",this.props.pokemon.stats[1].base_stat]})}),Object(b.jsx)(d.a,{xs:12,md:6,children:Object(b.jsxs)("h4",{children:[Object(b.jsx)(F.c,{className:"mx-4 my-2"}),"SP Def:",this.props.pokemon.stats[1].base_stat]})})]})]}):"moves"===this.state.info?Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(d.a,{children:Object(b.jsxs)(P.a,{hover:!0,size:"sm",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"pp"}),Object(b.jsx)("th",{children:"Accuracy"}),Object(b.jsx)("th",{children:"Damage Class"}),Object(b.jsx)("th",{children:"Type"})]})}),Object(b.jsx)("tbody",{children:this.props.pokemon.moves.map((function(e,t){var n=e.move;return console.log(n),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:"Mark"}),Object(b.jsx)("td",{children:"Otto"}),Object(b.jsx)("td",{children:"@mdo"})]},t)}))})]})})})}):void 0}},{key:"render",value:function(){var e=this;return console.log(this.props),Object(b.jsx)("div",{children:Object(b.jsxs)(I.a,{show:this.props.show,onHide:this.handleClose,dialogClassName:"my-modal",children:[Object(b.jsx)(I.a.Header,{closeButton:!0,children:Object(b.jsx)(I.a.Title,{children:this.props.pokemon.name})}),Object(b.jsx)(I.a.Body,{style:{alignContent:"center"},children:Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(d.a,{xs:12,md:5,children:[Object(b.jsx)(j.a,{className:"mb-4",children:Object(b.jsx)(d.a,{style:{textAlign:"center"},children:this.renderImageButton()})}),Object(b.jsx)(j.a,{className:"mb-4",children:Object(b.jsx)(d.a,{style:{textAlign:"center"},children:Object(b.jsx)("img",{style:{borderColor:"darkgray",borderWidth:"1px",borderStyle:"solid",borderRadius:"30px"},src:this.renderImage(),alt:"",width:"60%"})})})]}),Object(b.jsxs)(d.a,{xs:12,md:7,children:[Object(b.jsx)(j.a,{className:"mb-4",children:Object(b.jsx)(d.a,{style:{textAlign:"center"},children:Object(b.jsxs)(v.a,{children:[Object(b.jsx)(O.a,{variant:"outline-orng",onClick:function(){return e.handleInfoChange("info")},children:"Info"}),Object(b.jsx)(O.a,{variant:"outline-orng",onClick:function(){return e.handleInfoChange("moves")},children:"Moves"})]})})}),this.renderInfo()]})]})})]})})}}]),n}(s.Component),L=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={totalPokemon:0,pokemonList:[],showSpinner:!0,nextPage:"",typesList:[],showLoadMoreSpinner:!1,showLoadAllSpinner:!1,showDetail:!1,pokemonDetailInfo:{abilities:[],base_experience:0,forms:[],game_indices:[],height:0,held_items:[],id:0,is_default:!0,location_area_encounters:"",moves:[],name:"",order:0,past_types:[],species:{},sprites:{front_default:""},stats:[{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0}],types:[],weight:0,searchTerm:""}},s.loadMore=s.loadMore.bind(Object(f.a)(s)),s.loadAll=s.loadAll.bind(Object(f.a)(s)),s.showDetail=s.showDetail.bind(Object(f.a)(s)),s.closeDetail=s.closeDetail.bind(Object(f.a)(s)),s}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({nextPage:t.next,totalPokemon:t.count}),e.loadPokemonInfo(t.results)})).catch((function(e){console.log(e)})),fetch("https://pokeapi.co/api/v2/type/?limit=100",{method:"GET"}).then((function(e){return e.json()})).then((function(t){var n=t.results,s=[];n.forEach((function(e){s.push(e.name)})),e.setState({typesList:s})})).catch((function(e){console.log(e)}))}},{key:"loadPokemonInfo",value:function(e){var t=this,n=[],s=e.map((function(e){return new Promise((function(t){fetch(e.url,{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.push(e),t()})).catch((function(e){console.log(e)}))}))}));Promise.all(s).then((function(){var e=t.state.pokemonList;n=e.concat(n),t.setState({pokemonList:n,showSpinner:!1,showLoadMoreSpinner:!1})}))}},{key:"loadMore",value:function(){var e=this;this.setState({showLoadMoreSpinner:!0},(function(){fetch(e.state.nextPage,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({nextPage:t.next}),e.loadPokemonInfo(t.results)})).catch((function(e){console.log(e)}))}))}},{key:"loadAll",value:function(){var e=this;this.setState({showLoadAllSpinner:!0},(function(){fetch("https://pokeapi.co/api/v2/pokemon/?limit="+e.state.totalPokemon,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({nextPage:t.next,totalPokemon:t.count}),e.loadPokemonFilterInfo(t.results)})).catch((function(e){console.log(e)}))}))}},{key:"filter",value:function(e,t){var n=this;fetch("https://pokeapi.co/api/v2/"+t+"/"+e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({nextPage:null});var t=[];e.pokemon.forEach((function(e){t.push({url:e.pokemon.url})})),n.loadPokemonFilterInfo(t)})).catch((function(e){console.log(e)}))}},{key:"loadPokemonFilterInfo",value:function(e){var t=this,n=[];this.setState({showSpinner:!0},(function(){var s=e.map((function(e){return new Promise((function(t){fetch(e.url,{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.push(e),t()})).catch((function(e){console.log(e)}))}))}));Promise.all(s).then((function(){t.setState({pokemonList:n,showSpinner:!1,showLoadAllSpinner:!1})}))}))}},{key:"showDetail",value:function(e){this.setState({showDetail:!0,pokemonDetailInfo:e})}},{key:"closeDetail",value:function(){this.setState({showDetail:!1,pokemonDetailInfo:{abilities:[],base_experience:0,forms:[],game_indices:[],height:0,held_items:[],id:0,is_default:!0,location_area_encounters:"",moves:[],name:"",order:0,past_types:[],species:{},sprites:{front_default:""},stats:[{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0}],types:[],weight:0}})}},{key:"renderLoadMore",value:function(){return null===this.state.nextPage?Object(b.jsx)("div",{}):this.state.showLoadMoreSpinner?Object(b.jsx)(O.a,{variant:"outline-orng",onClick:this.loadMore,children:Object(b.jsx)(g.a,{size:"sm",animation:"border",role:"status",children:Object(b.jsx)("span",{className:"sr-only",children:"Cargando..."})})}):Object(b.jsx)(O.a,{variant:"outline-orng",onClick:this.loadMore,children:"Cargar mas"})}},{key:"renderLoadAll",value:function(){return null===this.state.nextPage?Object(b.jsx)("div",{}):this.state.showLoadAllSpinner?Object(b.jsx)(O.a,{variant:"outline-orng",onClick:this.loadAll,children:Object(b.jsx)(g.a,{size:"sm",animation:"border",role:"status",children:Object(b.jsx)("span",{className:"sr-only",children:"Cargando..."})})}):Object(b.jsx)(O.a,{variant:"outline-orng",onClick:this.loadAll,children:"Cargar todos"})}},{key:"renderPokemon",value:function(){var e=this;return this.state.showSpinner?Object(b.jsx)("div",{className:"spinner-container",children:Object(b.jsx)(g.a,{animation:"border",role:"status",children:Object(b.jsx)("span",{className:"sr-only",children:"Cargando..."})})}):Object(b.jsxs)("div",{children:[Object(b.jsx)(j.a,{className:"mx-5",children:this.state.pokemonList.map((function(t,n){return Object(b.jsx)(d.a,{xs:12,sm:6,md:3,xl:3,xxl:2,children:Object(b.jsxs)(k.a,{className:"my-3",children:[Object(b.jsx)(k.a.Img,{variant:"top",src:t.sprites.front_default}),Object(b.jsxs)(k.a.Body,{children:[Object(b.jsx)(k.a.Title,{children:t.name}),Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(d.a,{children:[t.height/10," m"]}),Object(b.jsxs)(d.a,{children:[t.weight/10," kg"]})]}),Object(b.jsx)(j.a,{style:{justifyContent:"center"},children:"Stats:"}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d.a,{children:"ATK:"}),Object(b.jsx)(d.a,{children:"DEF:"}),Object(b.jsx)(d.a,{children:"SPEED:"})]}),Object(b.jsx)(O.a,{variant:"orng",onClick:function(){return e.showDetail(t)},children:"Ver detalles"})]})]})},n)}))}),Object(b.jsx)(j.a,{className:"m-3",style:{justifyContent:"center"},children:Object(b.jsxs)(v.a,{children:[this.renderLoadMore(),this.renderLoadAll()]})})]})}},{key:"renderFilters",value:function(){var e=this;return Object(b.jsxs)(j.a,{className:"mt-3",children:[Object(b.jsx)(d.a,{xs:1}),Object(b.jsx)(d.a,{xs:12,md:10,children:Object(b.jsx)(y.a,{children:Object(b.jsxs)(_.a,{children:[Object(b.jsx)(_.a.Prepend,{children:Object(b.jsx)(O.a,{children:"Filtrar"})}),Object(b.jsx)(C.a,{placeholder:"Buscar...","aria-label":"Search"}),Object(b.jsx)(S.a,{className:"ml-4",id:"dropdown-basic-button",title:"Type",children:this.state.typesList.map((function(t,n){return Object(b.jsx)(w.a.Item,{onClick:function(){return e.filter(t,"type")},children:t},n)}))})]})})}),Object(b.jsx)(d.a,{xs:1})]})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(D,{show:this.state.showDetail,pokemon:this.state.pokemonDetailInfo,close:this.closeDetail}),this.renderFilters(),this.renderPokemon()]})}}]),n}(s.Component);var T=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("style",{type:"text/css",children:"\n          .btn-orng {\n              background-color: #FF462C;\n              color: #FFF;\n          }\n          .btn-orng:hover {\n              color:#fff;\n              background-color:#DB412B;\n              border-color:#DB412B;\n          }\n          .btn-outline-orng {\n              background-color: #fff;\n              border-color: #FF462C;\n              color: #FF462C;\n          }\n          .btn-outline-orng:hover {\n              color:#fff;\n              background-color:#FF462C;\n              border-color:#FF462C\n          }\n          "}),Object(b.jsx)(p,{}),Object(b.jsx)(L,{}),Object(b.jsx)(u,{})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),o(e),a(e),c(e)}))};n(75);c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),M()}},[[76,1,2]]]);
//# sourceMappingURL=main.8b357027.chunk.js.map