(()=>{"use strict";var e={403:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var r=n(6047),o=n(3011),a=n(8655),i=n(885),l=n(355),c=n(195),s=n(9914),u=n(9942),f=o.default.create({container:{justifyContent:"space-between",flexDirection:"row",alignItems:"center",marginHorizontal:20,marginBottom:40},leftContainer:{flex:1,alignItems:"flex-start"}});const d=function(){var e=(0,s.useFonts)({Billabong:n(7532)});(0,i.default)(e,1)[0];return(0,a.useEffect)((function(){}),[]),(0,u.jsx)(l.default,{style:f.container,children:(0,u.jsx)(l.default,{style:f.leftContainer,children:(0,u.jsx)(c.default,{style:{fontFamily:"Billabong",fontSize:40},children:"Enfogram"})})})};var g=n(3406),p=n(1789),h=n(5357);const m=n.p+"static/media/ProfilePicture.0c13bc618cacead66dc7.png";var b=o.default.create({containerText:{flex:1,flexDirection:"column",width:"100%",marginBottom:8},touchContainer:{alignItems:"center"},touchStyle:{backgroundColor:"#efefef",marginTop:10,alignItems:"center",padding:10,borderRadius:10,width:"90%"},imageContainer:{justifyContent:"flex-start",marginBottom:50},image:{resizeMode:"cover",width:80,height:80,marginLeft:10},bold:{fontWeight:"bold",fontSize:15,justifyContent:"flex-start",marginLeft:10},nobold:{fontSize:13,justifyContent:"flex-start",marginLeft:10},touchbold:{fontWeight:"bold"},taller:{justifyContent:"flex-start",marginLeft:10},textTaller:{fontWeight:"bold",fontSize:12.5}});const y=function(){return(0,u.jsxs)(l.default,{style:b.containerText,children:[(0,u.jsx)(l.default,{style:b.imageContainer,children:(0,u.jsx)(p.default,{source:m,style:b.image})}),(0,u.jsx)(c.default,{style:b.bold,children:"Enfoque + Telegrama"}),(0,u.jsx)(g.default,{onPress:function(){window.location.replace("https://taller5.ludic.cc/")},style:b.taller,children:(0,u.jsx)(c.default,{style:b.textTaller,children:"Taller de dise\xf1o multimedial V"})}),(0,u.jsx)(c.default,{style:b.nobold,children:"Transforma tus perspectiva en im\xe1genes cautivadoras, reflejando tus metas y mostrando tu visi\xf3n \xfanica del mundo"}),(0,u.jsx)(l.default,{style:b.touchContainer,children:(0,u.jsx)(l.default,{style:b.touchStyle,children:(0,u.jsx)(g.default,{onPress:function(){h.default.setString("https://enfogram.vercel.app/")},style:{marginTop:0},children:(0,u.jsx)(c.default,{style:b.touchbold,children:"Compartir Perfil"})})})})]})};var j=n(6459),v=n(2982),x=n(5861),w=n(4942),O=n(6356),S=n(9909),P=n(4405),D=n(1570),T=n(3628);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var I=(0,S.initializeApp)({apiKey:"AIzaSyAh7Wr4c9nv2ON-Ysnw36E_LpHucem8Wps",authDomain:"enfogramtaller5.firebaseapp.com",projectId:"enfogramtaller5",databaseURL:"https://enfogramtaller5-default-rtdb.firebaseio.com/",storageBucket:"enfogramtaller5.appspot.com",messagingSenderId:"416888291101",appId:"1:416888291101:web:8362cbddff7e9b1de6abf4",measurementId:"G-6LDJPXHE6V"});(0,D.getAnalytics)(I);console.log(I);const L=function(){var e=(0,a.useState)([]),t=(0,i.default)(e,2),n=t[0],r=t[1],o=(0,a.useState)(),c=(0,i.default)(o,2),s=c[0],f=c[1],d=function(){var e=(0,T.getFirestore)(),t=(0,T.collection)(e,"contador");(0,T.getDocs)(t).then((function(e){var t=[];e.docs.forEach((function(e){t.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,w.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.data()))})),f(t[0].num)})).catch((function(e){console.log(e.message)}))},g=function(){var e=(0,x.default)((function*(){d();for(var e=(0,P.getStorage)(I),t=1;t<s+1;t++){var n=(0,P.ref)(e,"images/"+t+"-undefined");console.log(n),console.log((0,P.getDownloadURL)(n)),yield(0,P.getDownloadURL)(n).then((function(e){r((function(t){return[e].concat((0,v.default)(t))}))}))}}));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){g()}),[s]),(0,u.jsx)(O.default,{showsVerticalScrollIndicator:!1,style:{width:"100%",height:"auto"},children:(0,u.jsx)(l.default,{style:{flex:1,backgroundColor:"white",flexWrap:"wrap",flexDirection:"column"},children:null==n?void 0:n.map((function(e){return(0,u.jsx)(l.default,{style:{height:650,marginTop:10},children:(0,u.jsx)(p.default,{source:{uri:e},style:{width:"100%",height:"100%",resizeMode:"stretch",marginLeft:-1}})},e)}))})})};var E=n(1384);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var z=(0,S.initializeApp)({apiKey:"AIzaSyAh7Wr4c9nv2ON-Ysnw36E_LpHucem8Wps",authDomain:"enfogramtaller5.firebaseapp.com",projectId:"enfogramtaller5",databaseURL:"https://enfogramtaller5-default-rtdb.firebaseio.com/",storageBucket:"enfogramtaller5.appspot.com",messagingSenderId:"416888291101",appId:"1:416888291101:web:8362cbddff7e9b1de6abf4",measurementId:"G-6LDJPXHE6V"});(0,D.getAnalytics)(z);console.log(z);const B=function(){var e=(0,a.useState)([]),t=(0,i.default)(e,2),n=t[0],r=t[1],o=(0,a.useState)(),c=(0,i.default)(o,2),s=c[0],f=c[1],d=(0,E.useNavigation)(),h=function(){var e=(0,T.getFirestore)(),t=(0,T.collection)(e,"contador"),n=(0,T.getDocs)(t).then((function(e){var t=[];return e.docs.forEach((function(e){t.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,w.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.data()))})),f(t[0].num),n})).catch((function(e){console.log(e.message)}))},m=function(){var e=(0,x.default)((function*(){var e=(0,P.getStorage)(z);h();try{for(var t=1;t<s+1;t++){var o=(0,P.ref)(e,"images/"+t+"-undefined");console.log(o),console.log((0,P.getDownloadURL)(o)),yield(0,P.getDownloadURL)(o).then((function(e){r((function(t){return[e].concat((0,v.default)(t))}))}))}return n}catch(a){console.log(a)}}));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){m()}),[s]),(0,u.jsx)(O.default,{showsVerticalScrollIndicator:!1,style:{width:"100%",height:"auto"},children:(0,u.jsx)(l.default,{style:{width:"100%",height:"auto",backgroundColor:"white",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between"},children:null==n?void 0:n.map((function(e){return(0,u.jsx)(g.default,{onPress:function(){return function(e){d.navigate("onlyimage",{image:e})}(e)},style:{width:"32%",height:200,marginTop:1,border:"none"},children:(0,u.jsx)(p.default,{source:{uri:e},style:{width:"100%",height:"100%",resizeMode:"stretch",marginLeft:-.4}})},e)}))})})};var W=n(9894),A=n(3624);var M=o.default.create({img:{marginTop:"60%"}});const R=function(){var e=(0,W.default)();return(0,u.jsx)(l.default,{style:M.img,children:(0,u.jsxs)(e.Navigator,{screenOptions:function(e){e.route;return{tabBarShowLabel:!1}},children:[(0,u.jsx)(e.Screen,{name:"POSTX3",component:B,options:{tabBarIcon:function(e){return(0,j.default)(e),(0,u.jsx)(A.default,{name:"images",color:"black",size:20})}}}),(0,u.jsx)(e.Screen,{name:"POSTX1",component:L,options:{tabBarIcon:function(e){return(0,j.default)(e),(0,u.jsx)(A.default,{name:"image",color:"black",size:20})}}})]})})};var U=o.default.create({container:{flex:1,backgroundColor:"white",marginTop:15}});const _=function(){return(0,u.jsxs)(r.default,{style:U.container,children:[(0,u.jsx)(d,{}),(0,u.jsx)(y,{}),(0,u.jsx)(R,{})]})};const F=function(e){var t=e.image;return(0,u.jsx)(l.default,{style:{height:650,marginTop:10},children:(0,u.jsx)(p.default,{source:{uri:t},style:{width:"100%",height:"100%",resizeMode:"stretch",marginLeft:-1}})},t)};function H(e){e.navigation;var t=e.route.params;return(0,u.jsx)(r.default,{children:(0,u.jsx)(F,{image:t.image})})}var N=n(1993),V=n(2210),X=(0,N.default)();const G=function(){return(0,u.jsx)(V.default,{children:(0,u.jsxs)(X.Navigator,{screenOptions:{headerShown:!1},children:[(0,u.jsx)(X.Screen,{name:"home",component:_}),(0,u.jsx)(X.Screen,{name:"onlyimage",component:H})]})})};function J(){return(0,u.jsx)(G,{})}},7532:(e,t,n)=>{e.exports=n.p+"static/media/Billabong.0e94b13a1cfb505ff271.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,c]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var u=c(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[875],(()=>n(7209)));r=n.O(r)})();
//# sourceMappingURL=main.da9bcc87.js.map