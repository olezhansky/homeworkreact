(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports={ProductItem:"ProductItem_ProductItem__FQ6yQ",ProductItemImg:"ProductItem_ProductItemImg__32a8p",Content:"ProductItem_Content__27PKJ",ProductItemName:"ProductItem_ProductItemName__3s2Me",ProductItemColor:"ProductItem_ProductItemColor__2NiiX",Blue:"ProductItem_Blue__33w_1",Red:"ProductItem_Red__1trun",Black:"ProductItem_Black__1iHB9",StarContainer:"ProductItem_StarContainer__3fWwF",Star:"ProductItem_Star__3w1Ml",ProductItemCode:"ProductItem_ProductItemCode__1fxN9",ProductItemBottom:"ProductItem_ProductItemBottom__iv_14",ProductItemPrice:"ProductItem_ProductItemPrice__33zMJ"}},102:function(e,t,a){},11:function(e,t,a){e.exports={CartWrapper:"Cart_CartWrapper__1VzVJ",Header:"Cart_Header__26Ny1",Text:"Cart_Text__3mKwG",Main:"Cart_Main__3lAkB",MainContentProducts:"Cart_MainContentProducts__2biqA",MainHeader:"Cart_MainHeader__2ztdh",CartContent:"Cart_CartContent__iHGZv",CartContentTitle:"Cart_CartContentTitle__3I_AV",CartContentColor:"Cart_CartContentColor__3xeu-",CartContentPrice:"Cart_CartContentPrice__39QYO",CartForm:"Cart_CartForm__2c_nb",Products:"Cart_Products__3WtGd",Total:"Cart_Total__3v84B",TotalSum:"Cart_TotalSum__kIaBX"}},15:function(e,t,a){e.exports={FavoriteItem:"FavoriteProduct_FavoriteItem__2uUuw",FavoriteItemImg:"FavoriteProduct_FavoriteItemImg__LVGFh",Content:"FavoriteProduct_Content__arHF4",ProductItemName:"FavoriteProduct_ProductItemName__1NbBU",FavoriteItemColor:"FavoriteProduct_FavoriteItemColor__3Ank_",Blue:"FavoriteProduct_Blue__2ta_T",Red:"FavoriteProduct_Red___jBfc",Black:"FavoriteProduct_Black__2s2Kn",Star:"FavoriteProduct_Star__25D3R",FavoriteItemCode:"FavoriteProduct_FavoriteItemCode__2SRBj",FavoriteItemBottom:"FavoriteProduct_FavoriteItemBottom__1QjF_",FavoriteItemPrice:"FavoriteProduct_FavoriteItemPrice__H3x8I",Button:"FavoriteProduct_Button__3QJrs"}},17:function(e,t,a){e.exports={Cart:"CartProduct_Cart__2hnLb",CartImgName:"CartProduct_CartImgName__1QWws",CartImg:"CartProduct_CartImg__3gCCV",CartName:"CartProduct_CartName__Ytlgm",CartPrice:"CartProduct_CartPrice__fyZXn",CartButtonClose:"CartProduct_CartButtonClose__NWX1_",Blue:"CartProduct_Blue__I2ogV",Red:"CartProduct_Red__1jviO",Black:"CartProduct_Black__1VFMm"}},18:function(e,t,a){e.exports={Header:"Header_Header__1tF-U",MenuList:"Header_MenuList__2R2WF",active:"Header_active__2LOHq",CounterFavorite:"Header_CounterFavorite__23iMO",CounterCart:"Header_CounterCart__27F6P"}},206:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),o=a(43),n=a.n(o),s=(a(102),a(5)),i=a(85),d=a.n(i),l=a(86),u=a.n(l),j=a(0),O=function(e){var t=e.children,a=e.onClick;return Object(j.jsx)("button",{className:u.a.Button,onClick:a,children:t})},b=a(9),m=a.n(b),C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAg0lEQVQ4jb2VSwrAIAxEpdfsRT1bN1Nc2IW+aGpshYBJZp74AZOkLOmUlIJRGLlOriD0YXQFELthJTcbK7AWiIJBoJYMKPRqSDw0THom0DJSzQ1sAa7z7QoQFeS6rCPtHrTKV1smANX+fzZDw9uHbQohULsKMz0RGHqjsA5akn1fgJRve0KswcUQgYkAAAAASUVORK5CYII=",h=a(87),p=a.n(h),v=function(e){var t=e.onClick;return Object(j.jsx)("div",{className:p.a.Backdrop,onClick:t})},f=function(e){var t=e.header,a=e.dataForModalCard,r=e.closeButton,c=e.actions,o=e.onClick;if(!a)return null;var n="";return n="Red"===a.color?m.a.Red:"Blue"===a.color?m.a.Blue:m.a.Black,Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:m.a.Modal,children:Object(j.jsxs)("div",{className:m.a.ModalBody,children:[Object(j.jsxs)("div",{className:m.a.ModalTop,children:[Object(j.jsx)("h1",{className:m.a.Title,children:t}),0!==Object.keys(a).length&&Object(j.jsx)("div",{className:m.a.Close,onClick:r,children:Object(j.jsx)("img",{src:C,alt:"closeImg"})})]}),Object(j.jsx)("div",{className:m.a.ModalMain,children:0!==Object.keys(a).length&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{src:"db/"+a.img,alt:""}),Object(j.jsxs)("div",{className:m.a.ModalMainContent,children:[Object(j.jsx)("p",{className:m.a.ModalMainText,children:a.name}),Object(j.jsxs)("ul",{className:m.a.ModalCardData,children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"Color:"}),Object(j.jsx)("span",{className:n,children:a.color})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"Code:"}),a.code]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"Price:"}),a.price,"$"]})]})]})]})}),Object(j.jsx)("div",{className:m.a.Button,children:c})]})}),Object(j.jsx)(v,{onClick:o})]})},x=a(88),N=a.n(x),_=a(28),P=a(10),F=a.n(P),g=a(3),A=function(){return fetch("db/db.json").then((function(e){return e.json()}))},I="SET_PRODUCTS",B="OPEN_MODAL_FOR_ADD_PRODUCT_TO_CART",M="ADD_PRODUCT_TO_FAVORITE",T="OPEN_MODAL_FOR_ADD_FAVORITE_PRODUCT_TO_CART",y="DELETE_PRODUCT_FROM_FAVORITE",E="ADD_PRODUCT_TO_CART",D="DELETE_PRODUCT_FROM_CART",R="CLOSE_MODAL_FOR_ADD_TO_CART",w="CLOSE_MODAL_FOR_DELETE_PRODUCT_FROM_CART",S="OPEN_MODAL_FOR_DELETE_PRODUCT_FROM_CART",k="FAVORITE_FROM_LOCAL_STORAGE",J="CART_FROM_LOCAL_STORAGE",H="TOTAL_SUM",K="SET_USER_DATA",W="SET_ORDER_DATA",L="CLOSE_MODAL_FINISH_USER_APPLICATION",U="CONSOLE_LOG",Q=function(e){var t=e.product,a=e.favoriteProducts,c=Object(r.useState)(!1),o=Object(_.a)(c,2),n=o[0],s=o[1],i=Object(g.b)();Object(r.useEffect)((function(){a.forEach((function(e){e.id===t.id&&s(!0)}))}),[a,t.id]);var d="";return d="Red"===t.color?F.a.Red:"Blue"===t.color?F.a.Blue:F.a.Black,Object(j.jsxs)("li",{className:F.a.ProductItem,children:[Object(j.jsx)("div",{className:F.a.ProductItemImg,children:Object(j.jsx)("img",{src:"db/"+t.img,alt:t.name})}),Object(j.jsxs)("div",{className:F.a.Content,children:[Object(j.jsx)("div",{className:F.a.ProductItemName,children:t.name}),Object(j.jsxs)("div",{className:F.a.ProductItemColor,children:["Color: ",Object(j.jsx)("span",{className:d,children:t.color})]}),Object(j.jsx)("div",{className:F.a.StarContainer,children:Object(j.jsx)("div",{className:F.a.Star,onClick:function(){i(function(e){return{type:M,payload:e}}(t)),s(!n)},children:n?Object(j.jsx)("i",{className:"fas fa-star",style:{cursor:"pointer",color:"purple"}}):Object(j.jsx)("i",{className:"far fa-star",style:{cursor:"pointer",color:"purple"}})})}),Object(j.jsxs)("div",{className:F.a.ProductItemCode,children:["Code: ",t.code]}),Object(j.jsxs)("div",{className:F.a.ProductItemBottom,children:[Object(j.jsxs)("div",{className:F.a.ProductItemPrice,children:["Price: ",t.price,"$"]}),Object(j.jsxs)(O,{onClick:function(){var e;i((e=t.id,{type:B,payload:e}))},children:["Add to cart \xa0",Object(j.jsx)("i",{className:"fas fa-shopping-cart"})]})]})]})]})},V=function(){var e=Object(g.c)((function(e){return e.products})),t=Object(g.c)((function(e){return e.favoriteProducts}));return Object(j.jsx)("ul",{className:N.a.Products,children:e.map((function(e){return Object(j.jsx)(Q,{favoriteProducts:t,product:e},e.id)}))})},X=a(18),Z=a.n(X),G=a(25),z=function(){var e=Object(g.c)((function(e){return e.favoriteProducts})),t=Object(g.c)((function(e){return e.cartProducts}));return Object(j.jsx)("div",{className:Z.a.Header,children:Object(j.jsx)("nav",{className:Z.a.Menu,children:Object(j.jsxs)("ul",{className:Z.a.MenuList,children:[Object(j.jsx)("li",{children:Object(j.jsx)(G.b,{activeClassName:Z.a.active,to:"/homeworkreact",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(G.b,{activeClassName:Z.a.active,to:"/products",children:"Products"})}),Object(j.jsxs)("li",{children:[Object(j.jsx)(G.b,{activeClassName:Z.a.active,to:"/favorites",children:"Favorites"}),"\xa0",Object(j.jsx)("i",{className:"far fa-grin-stars"}),"\xa0",Object(j.jsx)("span",{className:Z.a.CounterFavorite,children:0!==e.length&&e.length})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)(G.b,{activeClassName:Z.a.active,to:"/cart",children:"Cart"}),"\xa0",Object(j.jsx)("i",{className:"fas fa-shopping-cart"}),"\xa0",Object(j.jsx)("span",{className:Z.a.CounterCart,children:0!==t.length&&t.length})]})]})})})},q=a(48),Y=a.n(q),$=a(15),ee=a.n($),te=function(e){var t=e.product,a=Object(g.b)(),r="";return r="Red"===t.color?ee.a.Red:"Blue"===t.color?ee.a.Blue:ee.a.Black,Object(j.jsxs)("li",{className:ee.a.FavoriteItem,children:[Object(j.jsx)("div",{className:ee.a.FavoriteItemImg,children:Object(j.jsx)("img",{src:"db/"+t.img,alt:t.name})}),Object(j.jsxs)("div",{className:ee.a.Content,children:[Object(j.jsx)("div",{className:ee.a.ProductItemName,children:t.name}),Object(j.jsxs)("div",{className:ee.a.FavoriteItemColor,children:["Color: ",Object(j.jsx)("span",{className:r,children:t.color})]}),Object(j.jsx)("div",{className:ee.a.Star,children:Object(j.jsx)("div",{onClick:function(){var e;a((e=t.id,{type:y,payload:e}))},children:Object(j.jsx)("i",{className:"fas fa-star",style:{cursor:"pointer",color:"purple"}})})}),Object(j.jsxs)("div",{className:ee.a.FavoriteItemCode,children:["Code: ",t.code]}),Object(j.jsxs)("div",{className:ee.a.FavoriteItemBottom,children:[Object(j.jsxs)("div",{className:ee.a.FavoriteItemPrice,children:["Price: ",t.price,"$"]}),Object(j.jsxs)(O,{onClick:function(){var e;a((e=t.id,{type:T,payload:e}))},children:["Add to cart \xa0",Object(j.jsx)("i",{className:"fas fa-shopping-cart"})]})]})]})]})},ae=function(){var e=Object(g.c)((function(e){return e.favoriteProducts}));return Object(j.jsxs)("div",{className:Y.a.FavoriteWrapper,children:[!e.length&&Object(j.jsx)("h2",{className:Y.a.Title,children:"Favorites empty!"}),Object(j.jsx)("ul",{className:Y.a.Favorite,children:e.map((function(e){return Object(j.jsx)(te,{product:e},e.id)}))})]})},re=a(11),ce=a.n(re),oe=a(17),ne=a.n(oe),se=function(e){var t=e.product,a=Object(g.b)(),r="";return r="Red"===t.color?ne.a.Red:"Blue"===t.color?ne.a.Blue:ne.a.Black,Object(j.jsxs)("li",{className:ne.a.Cart,children:[Object(j.jsxs)("div",{className:ne.a.CartImgName,children:[Object(j.jsx)("div",{className:ne.a.CartImg,children:Object(j.jsx)("img",{src:"db/"+t.img,alt:t.name})}),Object(j.jsx)("div",{className:ne.a.CartName,children:t.name})]}),Object(j.jsx)("div",{className:ne.a.CartColor,children:Object(j.jsx)("span",{className:r,children:t.color})}),Object(j.jsxs)("div",{className:ne.a.CartPrice,children:[t.price,"$"]}),Object(j.jsx)("div",{className:ne.a.CartButtonClose,children:Object(j.jsx)("img",{src:C,alt:"closeImg",onClick:function(){a(function(e){return{type:S,payload:e}}(t))}})})]})},ie=a(29),de=a.n(ie),le=a(97),ue=a(30),je=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.totalSum})),a=ue.b().shape({name:ue.c().typeError("Should be string").required("Required"),lastName:ue.c().typeError("Should be string").required("Required"),age:ue.a().typeError("Should be number").required("Required"),address:ue.c().typeError("Should be number").required("Required"),phone:ue.a().typeError("")});return Object(j.jsx)(le.a,{initialValues:{name:"",lastName:"",age:"",address:"",phone:""},validateOnBlur:!0,onSubmit:function(a,r){var c;r.setSubmitting;e((c={name:a.name,lastName:a.lastName,age:a.age,address:a.address,phone:a.phone},{type:K,payload:c})),e(function(e){return{type:W,payload:e}}({totalSum:t})),e({type:U})},validationSchema:a,children:function(e){var t=e.values,a=e.errors,r=e.touched,c=e.isSubmitting,o=e.handleChange,n=e.handleBlur,s=e.handleSubmit;return Object(j.jsxs)("form",{className:de.a.CartForm,onSubmit:s,children:[Object(j.jsx)("h3",{children:"Order summary"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{name:"name",id:"name",type:"text",onChange:o,onBlur:n,value:t.name}),r.name&&a.name&&Object(j.jsx)("p",{className:de.a.Error,children:a.name})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"lastName",children:"Last name"}),Object(j.jsx)("input",{name:"lastName",id:"lastName",type:"text",onChange:o,onBlur:n,value:t.lastName}),r.lastName&&a.lastName&&Object(j.jsx)("p",{className:de.a.Error,children:a.lastName})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"age",children:"Age"}),Object(j.jsx)("input",{name:"age",id:"age",type:"text",onChange:o,onBlur:n,value:t.age}),r.age&&a.age&&Object(j.jsx)("p",{className:de.a.Error,children:a.age})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"address",children:"Delivery address "}),Object(j.jsx)("input",{name:"address",id:"address",type:"text",onChange:o,onBlur:n,value:t.address}),r.address&&a.address&&Object(j.jsx)("p",{className:de.a.Error,children:a.address})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(j.jsx)("input",{name:"phone",id:"phone",type:"text",onChange:o,onBlur:n,value:t.phone}),r.phone&&a.phone&&Object(j.jsx)("p",{className:de.a.Error,children:a.phone})]}),Object(j.jsx)("button",{type:"submit",disabled:c,children:"Checkout"})]})}})},Oe=function(e){var t=e.onClick,a=Object(g.c)((function(e){return e})),c=Object(g.b)();return Object(r.useEffect)((function(){c({type:H})}),[a.cartProducts,c]),Object(j.jsxs)("div",{className:ce.a.CartWrapper,children:[!a.cartProducts.length&&Object(j.jsxs)("div",{className:ce.a.Header,children:[Object(j.jsx)("p",{className:ce.a.Text,children:"Cart empty!"}),Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"img"})]}),0!==a.cartProducts.length&&Object(j.jsxs)("div",{className:ce.a.Main,children:[Object(j.jsxs)("div",{className:ce.a.MainContentProducts,children:[Object(j.jsxs)("div",{className:ce.a.MainHeader,children:[Object(j.jsx)("h3",{children:"Shopping Cart"}),Object(j.jsxs)("p",{children:[a.cartProducts.length," ",1===a.cartProducts.length?"Item":"Items"]})]}),Object(j.jsxs)("div",{className:ce.a.CartContent,children:[Object(j.jsx)("div",{className:ce.a.CartContentTitle,children:"Product"}),Object(j.jsx)("div",{className:ce.a.CartContentColor,children:"Color"}),Object(j.jsx)("div",{className:ce.a.CartContentPrice,children:"Price"})]}),Object(j.jsx)("ul",{className:ce.a.Products,children:a.cartProducts.map((function(e,a){return Object(j.jsx)(se,{product:e,onClick:t},a)}))}),Object(j.jsxs)("div",{className:ce.a.Total,children:["Total cost: ",Object(j.jsx)("span",{className:ce.a.TotalSum,children:a.totalSum})," $"]})]}),Object(j.jsx)(je,{})]})]})},be=a(94),me=a.n(be),Ce=function(){return Object(j.jsx)("div",{className:me.a.Home})},he=a(95),pe=a.n(he),ve=function(){return Object(j.jsx)("div",{className:pe.a.FooterWrapper,children:"Footer"})},fe=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.isLoadingProducts})),a=Object(g.c)((function(e){return e.isOpenModalForAddToCart})),c=Object(g.c)((function(e){return e.dataForModalAddProductToCart})),o=Object(g.c)((function(e){return e.isOpenModalForDeleteProductWithCart})),n=Object(g.c)((function(e){return e.productForModalDeleteWithCart})),i=Object(g.c)((function(e){return e.isOpenModalFinishUserApplication})),l=Object(g.c)((function(e){return e.dataModalFinishUserApplication})),u=Object(g.c)((function(e){return e.userData}));Object(r.useEffect)((function(){e((function(e){A().then((function(t){e({type:I,payload:{products:t}})}))}))}),[e]),Object(r.useEffect)((function(){var t=localStorage.getItem("favoriteProducts"),a=localStorage.getItem("cartProducts");t&&e(function(e){return{type:k,payload:JSON.parse(e)}}(t)),a&&e(function(e){return{type:J,payload:JSON.parse(e)}}(a))}),[e]);var b=function(){e({type:R})},m=function(){e({type:w})},C=function(){e({type:"CLOSE_MODAL_FINISH_USER_APPLICATION"})};return Object(j.jsxs)("div",{className:d.a.App,children:[Object(j.jsx)(z,{}),a&&Object(j.jsx)(f,{onClick:b,header:"Confirm adding to cart this product",closeButton:b,dataForModalCard:c[0],actions:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(O,{onClick:function(){e(function(e){return{type:E,payload:e}}(c[0])),b()},children:["Add to cart \xa0",Object(j.jsx)("i",{className:"fas fa-shopping-cart"})]})})}),o&&Object(j.jsx)(f,{onClick:m,header:"Confirm delete",closeButton:m,dataForModalCard:n[0],actions:Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(O,{onClick:function(){e(function(e){return{type:D,payload:e}}(n[0]))},children:"Delete product"})})}),i&&Object(j.jsx)(f,{onClick:C,header:"Thanks, ".concat(u.name,", for your application"),closeButton:C,dataForModalCard:l,actions:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(O,{onClick:C,children:["Ok \xa0",Object(j.jsx)("i",{class:"fas fa-smile-wink"})]})})}),Object(j.jsxs)(s.d,{children:[Object(j.jsx)(s.b,{path:"/homeworkreact",children:Object(j.jsx)(Ce,{})}),Object(j.jsx)(s.b,{path:"/products",children:!t&&Object(j.jsx)(V,{})}),Object(j.jsx)(s.b,{path:"/favorites",children:Object(j.jsx)(ae,{})}),Object(j.jsx)(s.b,{path:"/cart",children:Object(j.jsx)(Oe,{})}),Object(j.jsx)(s.a,{to:"/home"})]}),Object(j.jsx)(ve,{})]})},xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,207)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),r(e),c(e),o(e),n(e)}))},Ne=a(8),_e=a(2),Pe={products:[],isLoadingProducts:!0,isOpenModalForAddToCart:!1,dataForModalAddProductToCart:[],cartProducts:[],isOpenModalForDeleteProductWithCart:!1,productForModalDeleteWithCart:[],favoriteProducts:[],totalSum:0,userData:{name:"",lastName:"",age:"",address:"",phone:""},isOpenModalFinishUserApplication:!1,dataModalFinishUserApplication:{},orderData:[]},Fe=a(96),ge=a(49),Ae=window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e},Ie=Object(ge.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(_e.a)(Object(_e.a)({},e),{},{products:t.payload.products,isLoadingProducts:!1});case B:var a=e.products.filter((function(e){return e.id===t.payload}));return Object(_e.a)(Object(_e.a)({},e),{},{isOpenModalForAddToCart:!0,dataForModalAddProductToCart:a});case T:var r=e.products.filter((function(e){return e.id===t.payload}));return Object(_e.a)(Object(_e.a)({},e),{},{isOpenModalForAddToCart:!0,dataForModalAddProductToCart:r});case R:return Object(_e.a)(Object(_e.a)({},e),{},{isOpenModalForAddToCart:!1});case w:return Object(_e.a)(Object(_e.a)({},e),{},{isOpenModalForDeleteProductWithCart:!1});case E:return Object(_e.a)(Object(_e.a)({},e),{},{cartProducts:[].concat(Object(Ne.a)(e.cartProducts),[t.payload])});case k:return Object(_e.a)(Object(_e.a)({},e),{},{favoriteProducts:t.payload});case J:return Object(_e.a)(Object(_e.a)({},e),{},{cartProducts:t.payload});case S:return Object(_e.a)(Object(_e.a)({},e),{},{isOpenModalForDeleteProductWithCart:!0,productForModalDeleteWithCart:e.cartProducts.filter((function(e){return e.id===t.payload.id}))});case D:return Object(_e.a)(Object(_e.a)({},e),{},{cartProducts:e.cartProducts.filter((function(e){return e.id!==t.payload.id})),isOpenModalForDeleteProductWithCart:!1});case M:var c=e.favoriteProducts.some((function(e){return e.id===t.payload.id}));return c?Object(_e.a)(Object(_e.a)({},e),{},{favoriteProducts:e.favoriteProducts.filter((function(e){return e.id!==t.payload.id}))}):Object(_e.a)(Object(_e.a)({},e),{},{favoriteProducts:[].concat(Object(Ne.a)(e.favoriteProducts),[t.payload])});case y:return Object(_e.a)(Object(_e.a)({},e),{},{favoriteProducts:e.favoriteProducts.filter((function(e){return e.id!==t.payload}))});case H:var o=e.cartProducts.reduce((function(e,t){return e+ +t.price}),0);return Object(_e.a)(Object(_e.a)({},e),{},{totalSum:o});case K:return Object(_e.a)(Object(_e.a)({},e),{},{userData:Object(_e.a)({},t.payload),isOpenModalFinishUserApplication:!0});case W:return Object(_e.a)(Object(_e.a)({},e),{},{orderData:Object(_e.a)(Object(_e.a)(Object(_e.a)({},e.userData),e.cartProducts),t.payload)});case L:return Object(_e.a)(Object(_e.a)({},e),{},{isOpenModalFinishUserApplication:!1});case U:return console.log(e.orderData),localStorage.removeItem("cartProducts"),Object(_e.a)(Object(_e.a)({},e),{},{cartProducts:[],orderData:[]});default:return e}}),Object(ge.b)(Object(ge.a)(Fe.a,(function(e){var t=e.getState;return function(e){return function(a){var r=e(a);if(a.type===E||a.type===D){var c=t().cartProducts;localStorage.setItem("cartProducts",JSON.stringify(c))}if(a.type===M||a.type===y){var o=t().favoriteProducts;localStorage.setItem("favoriteProducts",JSON.stringify(o))}return r}}})),Ae));n.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(G.a,{children:Object(j.jsx)(g.a,{store:Ie,children:Object(j.jsx)(fe,{})})})}),document.getElementById("root")),xe()},29:function(e,t,a){e.exports={CartForm:"CartForm_CartForm__1okjK",Error:"CartForm_Error__3FACL"}},48:function(e,t,a){e.exports={FavoriteWrapper:"Favorite_FavoriteWrapper__27kms",Title:"Favorite_Title__2NJeC",Favorite:"Favorite_Favorite__2snm6"}},85:function(e,t,a){e.exports={buttonWrapper:"App_buttonWrapper__10NYm"}},86:function(e,t,a){e.exports={Button:"Button_Button__Ql7M8"}},87:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3ZF7P"}},88:function(e,t,a){e.exports={Products:"Products_Products__1Wgi9"}},9:function(e,t,a){e.exports={Modal:"Modal_Modal__1y1RO",ModalBody:"Modal_ModalBody__mvaAA",ModalTop:"Modal_ModalTop___QSNM",Title:"Modal_Title__1BcLL",Close:"Modal_Close__28yCa",ModalMain:"Modal_ModalMain__1bERJ",ModalMainText:"Modal_ModalMainText__2r_x9",ModalCardData:"Modal_ModalCardData__3MrB1",Button:"Modal_Button__3mZya",Blue:"Modal_Blue__1zMxV",Red:"Modal_Red__2mgRC",Black:"Modal_Black__3xGmo"}},94:function(e,t,a){e.exports={Home:"Home_Home__30r8n"}},95:function(e,t,a){e.exports={FooterWrapper:"Footer_FooterWrapper__jQFIz"}}},[[206,1,2]]]);
//# sourceMappingURL=main.b668d26d.chunk.js.map