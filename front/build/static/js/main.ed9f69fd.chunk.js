(this["webpackJsonpprueba-front-poke"]=this["webpackJsonpprueba-front-poke"]||[]).push([[0],{443:function(e,t,n){},444:function(e,t,n){},695:function(e,t,n){"use strict";n.r(t);var s=n(1),o=n.n(s),a=n(17),c=n.n(a),i=(n(443),n(444),n(76)),r=n(77),l=n(82),h=n(81),d=n(716),j=n(419),u=n(7),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"mt-5",style:{backgroundColor:"gray",color:"white"},children:Object(u.jsxs)(d.a,{className:"p-3",children:[Object(u.jsx)(j.a,{xs:12,md:6,children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{xs:12,md:6,style:{textAlign:"center"},children:Object(u.jsx)("h1",{children:"PokeApp"})}),Object(u.jsx)(j.a,{xs:12,md:6})]})}),Object(u.jsx)(j.a,{xs:12,md:6,children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{xs:12,md:6,style:{textAlign:"center"},children:"Prueba tecnica frontend HOUM"}),Object(u.jsx)(j.a,{xs:12,md:6,style:{textAlign:"center"},children:"Autor: Santiago Serrano A"})]})})]})})}}]),n}(s.Component),b=n(199),f=n.n(b),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={nextPage:"",count:0,items:[],allLoaded:!1},s}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/item",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({count:t.count},(function(){fetch("https://pokeapi.co/api/v2/item/?limit="+e.state.count,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.loadItemsInfo(t.results)})).catch((function(e){console.log(e)}))}))})).catch((function(e){console.log(e)}))}},{key:"loadItemsInfo",value:function(e){var t=this,n=[],s=e.map((function(e){return new Promise((function(t){fetch(e.url,{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e);var s={name:e.name,cost:e.cost,category:e.category.name,fling_power:e.fling_power,effect_entries:e.effect_entries[0].effect};n.push(s),t()})).catch((function(e){console.log(e)}))}))}));Promise.all(s).then((function(){var e=t.state.items;n=e.concat(n),t.setState({items:n})}))}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"m-5",children:Object(u.jsx)(f.a,{title:"Items List",data:this.state.items,columns:[{name:"name",label:"Name",options:{filter:!0,sort:!0}},{name:"cost",label:"Cost",options:{filter:!0,sort:!0}},{name:"category",label:"Category",options:{filter:!0,sort:!0}},{name:"fling_power",label:"Fling Power",options:{filter:!0,sort:!0}},{name:"effect_entries",label:"Effect",options:{filter:!1,sort:!1}}],options:{filterType:"dropdown",count:this.state.count,print:!1,download:!1,selectableRows:!1}})})}}]),n}(s.Component),x=n(728),O=n(727),g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(x.a,{bg:"light",children:[Object(u.jsx)(x.a.Brand,{href:"/",children:"PokeApp"}),Object(u.jsx)(x.a.Toggle,{}),Object(u.jsxs)(O.a,{className:"justify-content-center",children:[Object(u.jsx)(O.a.Link,{href:"/",children:"Pokemon"}),Object(u.jsx)(O.a.Link,{href:"/items",children:"Items"})]})]})})}}]),n}(s.Component),v=n(63),k=n(423),y=n(722),S=n(730),_=n(721),C=n(726),w=n(723),P=n(426),I=n(724),N=n(428),T=n(725),F=n(134),L=n(284),A=n(424),D=n(425),M=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={image:"front_default",info:"info",moves:[]},s.handleClose=s.handleClose.bind(Object(v.a)(s)),s}return Object(r.a)(n,[{key:"handleImageChange",value:function(e){this.setState({image:e})}},{key:"handleInfoChange",value:function(e){"moves"===e&&this.loadMovesInfo(),this.setState({info:e})}},{key:"handleClose",value:function(){this.setState({image:"front_default",info:"info"}),this.props.close()}},{key:"loadMovesInfo",value:function(e){var t=this,n=[],s=this.props.pokemon.moves.map((function(e){return new Promise((function(t){fetch(e.move.url,{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e);var s={name:e.name,pp:e.pp,accuracy:e.accuracy,damage_class:e.damage_class.name,type:e.type.name};n.push(s),t()})).catch((function(e){console.log(e)}))}))}));Promise.all(s).then((function(){console.log(n),t.setState({moves:n})}))}},{key:"renderImage",value:function(){return"front_default"===this.state.image?this.props.pokemon.sprites.front_default:"front_female"===this.state.image?this.props.pokemon.sprites.front_female:"front_shiny"===this.state.image?this.props.pokemon.sprites.front_shiny:"front_shiny_female"===this.state.image?this.props.pokemon.sprites.front_shiny_female:void 0}},{key:"renderImageButton",value:function(){var e=this,t=[];return null!==this.props.pokemon.sprites.front_default&&t.push(Object(u.jsx)(k.a,{variant:"outline-orng",onClick:function(){return e.handleImageChange("front_default")},children:"Default"},1)),null!==this.props.pokemon.sprites.front_shiny&&t.push(Object(u.jsx)(k.a,{variant:"outline-orng",onClick:function(){return e.handleImageChange("front_shiny")},children:"Shiny"},2)),null!==this.props.pokemon.sprites.front_female&&t.push(Object(u.jsx)(k.a,{variant:"outline-orng",onClick:function(){return e.handleImageChange("front_female")},children:"Female"},3)),null!==this.props.pokemon.sprites.front_shiny_female&&t.push(Object(u.jsx)(k.a,{variant:"outline-orng",onClick:function(){return e.handleImageChange("front_shiny_female")},children:"Female Shiny"},4)),o.a.createElement("div",{className:"btn-group"},t)}},{key:"renderInfo",value:function(){return"info"===this.state.info?Object(u.jsxs)("div",{children:[Object(u.jsx)(d.a,{style:{justifyContent:"center"},children:Object(u.jsx)("h3",{children:"INFO"})}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{xs:12,md:6,children:Object(u.jsxs)("h4",{children:[Object(u.jsx)(L.b,{className:"mx-4 my-2"}),"Weight: ",this.props.pokemon.weight/10," kg"]})}),Object(u.jsx)(j.a,{xs:12,md:6,children:Object(u.jsxs)("h4",{children:[Object(u.jsx)(A.a,{className:"mx-4 my-2"}),"Height: ",this.props.pokemon.height/10," m"]})})]}),Object(u.jsx)(d.a,{children:this.props.pokemon.types.map((function(e,t){return Object(u.jsx)(j.a,{xs:12,md:6,children:Object(u.jsxs)("h4",{children:[Object(u.jsx)(D.a,{className:"mx-4 my-2"}),"Type",t,": ",e.type.name]})},t)}))}),Object(u.jsx)(d.a,{style:{justifyContent:"center"},children:Object(u.jsx)("h3",{children:"STATS"})}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{xs:12,md:6,children:Object(u.jsxs)("h4",{children:[Object(u.jsx)(F.a,{className:"mx-4 my-2"}),"Hp: ",this.props.pokemon.stats[1].base_stat]})}),Object(u.jsx)(j.a,{xs:12,md:6,children:Object(u.jsxs)("h4",{children:[Object(u.jsx)(L.a,{className:"mx-4 my-2"}),"Speed: ",this.props.pokemon.stats[5].base_stat]})})]}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{xs:12,md:6,children:Object(u.jsxs)("h4",{children:[Object(u.jsx)(F.d,{className:"mx-4 my-2"}),"Atk: ",this.props.pokemon.stats[1].base_stat]})}),Object(u.jsx)(j.a,{xs:12,md:6,children:Object(u.jsxs)("h4",{children:[Object(u.jsx)(F.b,{className:"mx-4 my-2"}),"Def: ",this.props.pokemon.stats[1].base_stat]})})]}),Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{xs:12,md:6,children:Object(u.jsxs)("h4",{children:[Object(u.jsx)(F.e,{className:"mx-4 my-2"}),"SP Atk:",this.props.pokemon.stats[1].base_stat]})}),Object(u.jsx)(j.a,{xs:12,md:6,children:Object(u.jsxs)("h4",{children:[Object(u.jsx)(F.c,{className:"mx-4 my-2"}),"SP Def:",this.props.pokemon.stats[1].base_stat]})})]})]}):"moves"===this.state.info?Object(u.jsx)("div",{children:Object(u.jsx)(d.a,{children:Object(u.jsx)(j.a,{children:Object(u.jsx)(f.a,{title:"Moves",data:this.state.moves,columns:[{name:"name",label:"Name",options:{filter:!0,sort:!0}},{name:"pp",label:"PP",options:{filter:!0,sort:!0}},{name:"accuracy",label:"Accuracy",options:{filter:!0,sort:!0}},{name:"damage_class",label:"Damage Class",options:{filter:!0,sort:!1}},{name:"type",label:"Type",options:{filter:!0,sort:!1}}],options:{filterType:"dropdown",count:this.state.count,print:!1,download:!1,selectableRows:!1}})})})}):void 0}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{children:Object(u.jsxs)(T.a,{show:this.props.show,onHide:this.handleClose,dialogClassName:"my-modal",children:[Object(u.jsx)(T.a.Header,{closeButton:!0,children:Object(u.jsx)(T.a.Title,{children:this.props.pokemon.name})}),Object(u.jsx)(T.a.Body,{style:{alignContent:"center"},children:Object(u.jsxs)(d.a,{children:[Object(u.jsxs)(j.a,{xs:12,md:5,children:[Object(u.jsx)(d.a,{className:"mb-4",children:Object(u.jsx)(j.a,{style:{textAlign:"center"},children:this.renderImageButton()})}),Object(u.jsx)(d.a,{className:"mb-4",children:Object(u.jsx)(j.a,{style:{textAlign:"center"},children:Object(u.jsx)("img",{style:{borderColor:"darkgray",borderWidth:"1px",borderStyle:"solid",borderRadius:"30px"},src:this.renderImage(),alt:"",width:"60%"})})})]}),Object(u.jsxs)(j.a,{xs:12,md:7,children:[Object(u.jsx)(d.a,{className:"mb-4",children:Object(u.jsx)(j.a,{style:{textAlign:"center"},children:Object(u.jsxs)(_.a,{children:[Object(u.jsx)(k.a,{variant:"outline-orng",onClick:function(){return e.handleInfoChange("info")},children:"Info"}),Object(u.jsx)(k.a,{variant:"outline-orng",onClick:function(){return e.handleInfoChange("moves")},children:"Moves"})]})})}),this.renderInfo()]})]})})]})})}}]),n}(s.Component),E=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={totalPokemon:0,pokemonList:[],showSpinner:!0,nextPage:"",typesList:[],showLoadMoreSpinner:!1,showLoadAllSpinner:!1,showDetail:!1,pokemonDetailInfo:{abilities:[],base_experience:0,forms:[],game_indices:[],height:0,held_items:[],id:0,is_default:!0,location_area_encounters:"",moves:[],name:"",order:0,past_types:[],species:{},sprites:{front_default:""},stats:[{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0}],types:[],weight:0,searchTerm:"",showClearSearch:!1}},s.loadMore=s.loadMore.bind(Object(v.a)(s)),s.loadAll=s.loadAll.bind(Object(v.a)(s)),s.showDetail=s.showDetail.bind(Object(v.a)(s)),s.closeDetail=s.closeDetail.bind(Object(v.a)(s)),s.handleSearch=s.handleSearch.bind(Object(v.a)(s)),s.onSearchChange=s.onSearchChange.bind(Object(v.a)(s)),s.handleClearSearch=s.handleClearSearch.bind(Object(v.a)(s)),s}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({nextPage:t.next,totalPokemon:t.count}),e.loadPokemonInfo(t.results)})).catch((function(e){console.log(e)})),fetch("https://pokeapi.co/api/v2/type/?limit=100",{method:"GET"}).then((function(e){return e.json()})).then((function(t){var n=t.results,s=[];n.forEach((function(e){s.push(e.name)})),e.setState({typesList:s})})).catch((function(e){console.log(e)}))}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"loadPokemonInfo",value:function(e){var t=this,n=[],s=e.map((function(e){return new Promise((function(t){fetch(e.url,{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.push(e),t()})).catch((function(e){console.log(e)}))}))}));Promise.all(s).then((function(){var e=t.state.pokemonList;n=e.concat(n),t.setState({pokemonList:n,showSpinner:!1,showLoadMoreSpinner:!1})}))}},{key:"loadMore",value:function(){var e=this;this.setState({showLoadMoreSpinner:!0},(function(){fetch(e.state.nextPage,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({nextPage:t.next}),e.loadPokemonInfo(t.results)})).catch((function(e){console.log(e)}))}))}},{key:"loadAll",value:function(){var e=this;this.setState({showLoadAllSpinner:!0},(function(){fetch("https://pokeapi.co/api/v2/pokemon/?limit="+e.state.totalPokemon,{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({nextPage:t.next,totalPokemon:t.count}),e.loadPokemonFilterInfo(t.results)})).catch((function(e){console.log(e)}))}))}},{key:"filter",value:function(e,t){var n=this;fetch("https://pokeapi.co/api/v2/"+t+"/"+e,{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({nextPage:null});var t=[];e.pokemon.forEach((function(e){t.push({url:e.pokemon.url})})),n.loadPokemonFilterInfo(t)})).catch((function(e){console.log(e)}))}},{key:"handleSearch",value:function(e){var t=this;console.log(this.state.searchTerm),this.state.searchTerm&&(e.preventDefault(),this.setState({showLoadAllSpinner:!0},(function(){fetch("https://pokeapi.co/api/v2/pokemon/?limit="+t.state.totalPokemon,{method:"GET"}).then((function(e){return e.json()})).then((function(e){t.setState({nextPage:e.next,totalPokemon:e.count,showClearSearch:!0});var n=e.results.filter((function(e){return e.name.includes(t.state.searchTerm)}));t.loadPokemonFilterInfo(n)})).catch((function(e){console.log(e)}))})))}},{key:"loadPokemonFilterInfo",value:function(e,t){var n=this,s=[];this.setState({showSpinner:!0},(function(){var o=e.map((function(e){return new Promise((function(t){fetch(e.url,{method:"GET"}).then((function(e){return e.json()})).then((function(e){s.push(e),t()})).catch((function(e){console.log(e)}))}))}));Promise.all(o).then((function(){n.setState({pokemonList:s,showSpinner:!1,showLoadAllSpinner:!1},(function(){t&&t()}))}))}))}},{key:"showDetail",value:function(e){this.setState({showDetail:!0,pokemonDetailInfo:e})}},{key:"closeDetail",value:function(){this.setState({showDetail:!1,pokemonDetailInfo:{abilities:[],base_experience:0,forms:[],game_indices:[],height:0,held_items:[],id:0,is_default:!0,location_area_encounters:"",moves:[],name:"",order:0,past_types:[],species:{},sprites:{front_default:""},stats:[{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0},{base_stat:0}],types:[],weight:0}})}},{key:"handleClearSearch",value:function(){window.location.reload()}},{key:"renderLoadMore",value:function(){return null===this.state.nextPage?Object(u.jsx)("div",{}):this.state.showLoadMoreSpinner?Object(u.jsx)(k.a,{variant:"outline-orng",onClick:this.loadMore,children:Object(u.jsx)(y.a,{size:"sm",animation:"border",role:"status",children:Object(u.jsx)("span",{className:"sr-only",children:"Loading..."})})}):Object(u.jsx)(k.a,{variant:"outline-orng",onClick:this.loadMore,children:"See more"})}},{key:"renderLoadAll",value:function(){return null===this.state.nextPage?Object(u.jsx)("div",{}):this.state.showLoadAllSpinner?Object(u.jsx)(k.a,{variant:"outline-orng",onClick:this.loadAll,children:Object(u.jsx)(y.a,{size:"sm",animation:"border",role:"status",children:Object(u.jsx)("span",{className:"sr-only",children:"Cargando..."})})}):Object(u.jsx)(k.a,{variant:"outline-orng",onClick:this.loadAll,children:"See All"})}},{key:"renderPokemon",value:function(){var e=this;return this.state.showSpinner?Object(u.jsx)("div",{className:"spinner-container mt-5",children:Object(u.jsx)(y.a,{animation:"border",role:"status",children:Object(u.jsx)("span",{className:"sr-only",children:"Cargando..."})})}):Object(u.jsxs)("div",{children:[Object(u.jsx)(d.a,{className:"mx-5",children:this.state.pokemonList.map((function(t,n){return Object(u.jsx)(j.a,{xs:12,sm:6,md:3,xl:2,xxl:2,children:Object(u.jsxs)(S.a,{className:"my-3",children:[Object(u.jsx)(S.a.Img,{variant:"top",src:t.sprites.front_default}),Object(u.jsxs)(S.a.Body,{children:[Object(u.jsx)(S.a.Title,{children:t.name}),Object(u.jsxs)("div",{className:"p-3 mb-3",style:{border:"solid",borderWidth:"1px",borderColor:"lightgray",borderRadius:"15px"},children:[Object(u.jsx)(d.a,{className:"p-2",children:t.types.map((function(e,t){return Object(u.jsx)(j.a,{children:e.type.name},t)}))}),Object(u.jsxs)(d.a,{className:"p-2",children:[Object(u.jsxs)(j.a,{children:[t.height/10," m"]}),Object(u.jsxs)(j.a,{children:[t.weight/10," kg"]})]})]}),Object(u.jsx)(k.a,{variant:"orng",onClick:function(){return e.showDetail(t)},children:"Details"})]})]})},n)}))}),Object(u.jsx)(d.a,{className:"m-3",style:{justifyContent:"center"},children:Object(u.jsxs)(_.a,{children:[this.renderLoadMore(),this.renderLoadAll()]})})]})}},{key:"renderClearSearch",value:function(){return this.state.showClearSearch?(console.log("entra",this.state.searchTerm),Object(u.jsx)(k.a,{variant:"danger",onClick:this.handleClearSearch,children:"X"})):Object(u.jsx)("div",{})}},{key:"renderFilters",value:function(){var e=this;return Object(u.jsxs)(d.a,{className:"mt-3",children:[Object(u.jsx)(j.a,{xs:1}),Object(u.jsx)(j.a,{xs:10,children:Object(u.jsx)(C.a,{onSubmit:this.handleSearch,noValidate:!0,children:Object(u.jsxs)(w.a,{children:[Object(u.jsx)(w.a.Prepend,{children:Object(u.jsx)(k.a,{variant:"outline-orng",type:"submit",children:"Filter"})}),Object(u.jsx)(P.a,{placeholder:"Search...","aria-label":"Search",onChange:this.onSearchChange}),this.renderClearSearch(),Object(u.jsx)(I.a,{variant:"outline-orng",className:"ml-4",id:"dropdown-basic-button",title:"Type",children:this.state.typesList.map((function(t,n){return Object(u.jsx)(N.a.Item,{onClick:function(){return e.filter(t,"type")},children:t},n)}))})]})})}),Object(u.jsx)(j.a,{xs:1})]})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(M,{show:this.state.showDetail,pokemon:this.state.pokemonDetailInfo,close:this.closeDetail}),this.renderFilters(),this.renderPokemon()]})}}]),n}(s.Component),B=n(427),G=n(31);var H=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(B.a,{children:[Object(u.jsx)("style",{type:"text/css",children:"\n          .btn-orng {\n              background-color: #FF462C;\n              color: #FFF;\n          }\n          .btn-orng:hover {\n              color:#fff;\n              background-color:#DB412B;\n              border-color:#DB412B;\n          }\n          .btn-outline-orng {\n              background-color: #fff;\n              border-color: #FF462C;\n              color: #FF462C;\n          }\n          .btn-outline-orng:hover {\n              color:#fff;\n              background-color:#FF462C;\n              border-color:#FF462C\n          }\n          "}),Object(u.jsx)(g,{}),Object(u.jsxs)(G.d,{children:[Object(u.jsx)(G.b,{exact:!0,path:"/",children:Object(u.jsx)(E,{})}),Object(u.jsx)(G.b,{exact:!0,path:"/items",children:Object(u.jsx)(p,{})}),Object(u.jsx)(G.b,{path:"/",children:Object(u.jsx)(G.a,{to:"/"})})]}),Object(u.jsx)(m,{})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,732)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),o(e),a(e),c(e)}))};n(692);c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root")),R()}},[[695,1,2]]]);
//# sourceMappingURL=main.ed9f69fd.chunk.js.map