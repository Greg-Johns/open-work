(this["webpackJsonpopen-work"]=this["webpackJsonpopen-work"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var c=n(24),i=n(1),a=n(27),r=n.n(a),s=n(13),l=n(49),o=n(36),j=n(5),b=(n(89),n(90),n(91),n(17)),d=n(47),h=n(23),u=n(3),x=function(e){var t=Object(c.c)().toggleColorMode,n=Object(c.d)("dark","light"),i=Object(c.d)(h.c,h.d);return Object(u.jsx)(d.b,Object(b.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(u.jsx)(i,{}),"aria-label":"Switch to ".concat(n," mode")},e))},O=n(35),g=(n(99),n.p+"static/media/1.57278d98.jpeg"),m=n.p+"static/media/2.56e761de.jpeg",p=n.p+"static/media/1thumbnail.8e9c8e2d.jpeg",f=n.p+"static/media/2thumbnail.1dfd72e9.jpeg",v=n(50),y=n(34),w=function(e){var t=document.querySelectorAll(".thumbnails")[e],n=window.pageYOffset||document.documentElement.scrollTop,c=t.getBoundingClientRect();return{x:c.left,y:c.top+n-3,w:c.width}},S=function(e){var t=e.imgs;return Object(u.jsx)(y.Gallery,{options:{bgOpacity:.8,getThumbBoundsFn:w},children:Object(u.jsx)(l.d,{children:t.map((function(e){return Object(u.jsx)(y.Item,{original:e.image,thumbnail:e.thumbnail,width:e.imgWidth,height:e.imgHeight,children:function(t){var n=t.ref,c=t.open;return Object(u.jsx)(v.a,{ref:n,onClick:c,src:e.thumbnail,className:"thumbnails",alt:""})}})}))})})},C=n(53),k=function(e){return e>9?""+e:"0"+e},z=function(e){var t=e.value,n=e.label;return Object(u.jsxs)(l.h,{alignItems:"start",children:[Object(u.jsx)(l.g,{fontSize:20,fontWeight:500,children:t}),Object(u.jsx)(l.g,{fontSize:15,fontWeight:400,children:n})]})},F=function(e){var t=e.date;return Object(u.jsx)(C.a,{date:t,renderer:function(e){var t=e.days,n=e.hours,c=e.minutes,i=e.seconds;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(l.d,{spacing:12,mt:6,children:[Object(u.jsx)(z,{value:k(t),label:"Days"}),Object(u.jsx)(z,{value:k(n),label:"Hours"}),Object(u.jsx)(z,{value:k(c),label:"Minutes"}),Object(u.jsx)(z,{value:k(i),label:"Seconds"})]})})}})},P=n(45),B=n.n(P),M=(n(112),function(e){var t=e.input,n=e.previews,c=e.submitButton,i=e.dropzoneProps,a=e.files,r=e.extra.maxFiles;return Object(u.jsxs)("div",{children:[n,Object(u.jsx)("div",Object(b.a)(Object(b.a)({},i),{},{children:a.length<r&&t})),a.length>0&&c]})}),I=function(){return Object(u.jsxs)(l.a,{textAlign:"center",children:[Object(u.jsx)(l.g,{color:"teal",children:"Drop your meme here \ud83d\udd90\ufe0f\ud83c\udfa4"}),Object(u.jsx)(l.g,{color:"teal",children:"(JPEG, PNG, or GIF)"})]})},T=function(){return Object(u.jsx)(B.a,{getUploadParams:function(){return{url:"https://httpbin.org/post"}},LayoutComponent:M,onSubmit:function(e,t){console.log(e.map((function(e){return e.meta}))),t.forEach((function(e){return e.remove()}))},classNames:{inputLabelWithFiles:P.defaultClassNames.inputLabel},inputContent:Object(u.jsx)(I,{})})},A=n(28),E=n(4),W=["variant"];var D=function(e){var t=e.variant,n=Object(A.a)(e,W),c=Object(E.h)("Border",{variant:t});return Object(u.jsx)(l.a,Object(b.a)({__css:c},n))},H=n(51),N=["variant"],J=["variant"];function L(e){var t=e.variant,n=Object(A.a)(e,N),c=Object(E.h)("Border",{variant:t});return console.log("styles",c),Object(u.jsx)(H.a,Object(b.a)({__css:c},n))}function G(e){e.variant;var t=Object(A.a)(e,J);return Object(u.jsx)(H.d,Object(b.a)({borderBottom:0,borderTop:0},t))}var _=[{thumbnail:p,image:g,imgWidth:508,imgHeight:491},{thumbnail:f,image:m,imgWidth:2702,imgHeight:1514}],R=function(){return Object(u.jsxs)(l.a,{m:"30px 85px",children:[Object(u.jsxs)(l.c,{children:[Object(u.jsxs)(l.a,{width:"40vw",bg:"black",color:"whiteAlpha.800",p:4,alignItems:"start",justifyContent:"start",children:[Object(u.jsxs)(l.g,{children:[Object(u.jsx)("b",{children:"Title:"})," Create an original Ultra Sound Money meme."]}),Object(u.jsxs)(l.g,{children:[Object(u.jsx)("b",{children:"Posted by:"})," kylekaplan.eth"]}),Object(u.jsxs)(l.g,{children:[Object(u.jsx)("b",{children:"Start Date:"})," January 7th, 2022"]}),Object(u.jsxs)(l.g,{children:[Object(u.jsx)("b",{children:"End Date:"})," January 14th, 2022"]}),Object(u.jsxs)(l.g,{children:[Object(u.jsx)("b",{children:"Prize amount:"})," 0.01 ETH"]})]}),Object(u.jsxs)(l.a,{ml:30,children:[Object(u.jsxs)(l.h,{align:"start",spacing:5,children:[Object(u.jsx)(l.e,{fontSize:"4xl",fontWeight:"bold",fontFamily:"'Work Sans', sans-serif;",children:"Create an original Ultra Sound Money meme."}),Object(u.jsxs)(l.g,{fontSize:"md",fontFamily:"'Poppins', sans-serif",children:["By: ",Object(u.jsx)(l.g,{as:"span",color:Object(c.d)("teal.500","teal.200"),children:"kylekaplan.eth"})]})]}),Object(u.jsxs)(D,{mt:8,fontFamily:"'Poppins', sans-serif",children:[Object(u.jsxs)(l.a,{p:"20px",children:[Object(u.jsx)(l.g,{fontSize:16,children:"Challenge ends January 14, 2022 at 6:15am EST"}),Object(u.jsx)(F,{date:Date.now()+1e9})]}),Object(u.jsx)(l.b,{}),Object(u.jsxs)(l.a,{p:30,bg:Object(c.d)("gray.100","whiteAlpha.100"),borderBottomRadius:8,children:[Object(u.jsx)(l.g,{children:"Challenge Prize:"}),Object(u.jsxs)(l.d,{fontSize:"30px",children:[Object(u.jsx)(h.b,{}),Object(u.jsx)(l.g,{children:"0.01"})]}),Object(u.jsx)(d.a,{colorScheme:"teal",mt:4,children:"Submit your meme"})]})]})]})]}),Object(u.jsx)(l.a,{height:30}),Object(u.jsx)(L,{defaultIndex:[0],allowMultiple:!0,children:Object(u.jsxs)(G,{children:[Object(u.jsx)("h2",{children:Object(u.jsxs)(H.b,{children:[Object(u.jsx)(l.a,{flex:"1",fontSize:"lg",fontFamily:"'Poppins', sans-serif",children:Object(u.jsxs)(l.d,{spacing:2,children:[Object(u.jsx)(O.a,{}),Object(u.jsx)(l.g,{children:"Description"})]})}),Object(u.jsx)(H.c,{})]})}),Object(u.jsx)(H.e,{pb:4,bg:Object(c.d)("gray.100","whiteAlpha.100"),children:Object(u.jsx)(l.g,{fontSize:"lg",children:"The meme must be in favor of the Ultra Sound Money idea and ideally funny and/or educational. I plan on using the meme in an educational series that teaches crypto through memes. Acceptable file formats include all image files, if using photoshop including the .psd file would be extra appreciated by the open source community."})})]})}),Object(u.jsx)(l.a,{height:30}),Object(u.jsx)(L,{defaultIndex:[0],allowMultiple:!0,children:Object(u.jsxs)(G,{children:[Object(u.jsx)("h2",{children:Object(u.jsxs)(H.b,{children:[Object(u.jsx)(l.a,{flex:"1",fontSize:"lg",fontFamily:"'Poppins', sans-serif",children:Object(u.jsxs)(l.d,{spacing:2,children:[Object(u.jsx)(h.a,{}),Object(u.jsx)(l.g,{children:"Examples"})]})}),Object(u.jsx)(H.c,{})]})}),Object(u.jsx)(H.e,{pb:4,bg:Object(c.d)("gray.100","whiteAlpha.100"),children:Object(u.jsx)(S,{imgs:_})})]})}),Object(u.jsx)(l.a,{height:75}),Object(u.jsx)(T,{})]})},U=n(22),q=n(54),Y=n.n(q),$=(n(113),n.p+"static/media/much_wow.8624a0da.jpeg"),K=function(){return Object(i.useEffect)((function(){var e=document.getElementById("scene");new Y.a(e,{relativeInput:!0})}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{id:"scene","data-relative-input":"true",position:"absolute",top:"0",bottom:"0",right:"0",left:"0",children:Object(u.jsx)(l.a,{minH:"90vh","data-depth":"0.2",className:"background5"})}),Object(u.jsxs)(l.a,{children:[Object(u.jsxs)(l.h,{spacing:3,minH:"66vh",textAlign:"center",justifyContent:"center",children:[Object(u.jsx)(l.e,{fontSize:"6xl",fontWeight:"extrabold",className:"headerText",children:"Earn Crypto by Making Memes"}),Object(u.jsx)(l.g,{color:"gray.350",fontSize:"3xl",children:"The best meme wins. All memes are open source."}),Object(u.jsx)(l.f,{direction:"row",spacing:4,style:{marginTop:"30px"},children:Object(u.jsx)(o.b,{to:"/challenge",children:Object(u.jsx)(d.a,{rightIcon:Object(u.jsx)(U.a,{as:O.b}),colorScheme:"teal",variant:"solid",size:"lg",height:"56px",className:"ctaButton",children:"Get Started"})})}),Object(u.jsx)(v.a,{src:$,className:"dogeImg",alt:"Doge meme",width:{base:290,sm:290,md:290,lg:333,xl:333}})]}),Object(u.jsx)(l.h,{minH:{base:"35vh",sm:"35vh",md:"23vh",lg:"23vh",xl:"23vh"}})]})]})},Q=function(){return Object(u.jsx)(l.a,{children:"Page not found."})},V={Border:{variants:{thin:function(e){return{border:"1px solid",borderColor:"light"===e.colorMode?"gray.200":"whiteAlpha.300",borderRadius:"8px"}},thick:function(e){return{border:"4px solid",borderColor:"light"===e.colorMode?"gray.200":"whiteAlpha.300",borderRadius:"8px"}}},defaultProps:{variant:"thin"}}},X=Object(s.b)({config:{initialColorMode:"dark",useSystemColorMode:!1},colors:{},components:V}),Z=function(){return Object(u.jsx)(s.a,{theme:X,children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(l.a,{p:3,children:[Object(u.jsx)(l.c,{justify:"end",children:Object(u.jsx)(x,{})}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/",element:Object(u.jsx)(K,{})}),Object(u.jsx)(j.a,{path:"/challenge",element:Object(u.jsx)(R,{})}),Object(u.jsx)(j.a,{path:"*",element:Object(u.jsx)(Q,{})})]})]})})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(u.jsxs)(i.StrictMode,{children:[Object(u.jsx)(c.b,{}),Object(u.jsx)(Z,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ee()},91:function(e,t,n){},99:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.a9dbf718.chunk.js.map