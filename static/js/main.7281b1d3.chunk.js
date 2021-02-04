(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{93:function(n,t,e){"use strict";e.r(t);var r=e(3),c=e(1),i=e.n(c),o=e(25),a=e.n(o),A=e(59),u=e(9),s=e(48),d=e(13),b=e(12),l=e(50),f=e(35),j=e(61),p=e(51),g=e.n(p),x=e(60),h=e(17),w={comicsSelecteds:[]},m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMIC_SELECTED":return Object(h.a)(Object(h.a)({},n),{},{comicSelected:t.payload});case"ADD_COMIC":var e=function(t){return n.comicsSelecteds.find((function(n){return n.id===t}))};return e(t.payload.id)?Object(h.a)({},n):Object(h.a)(Object(h.a)({},n),{},{comicsSelecteds:[].concat(Object(x.a)(n.comicsSelecteds),[t.payload])});case"REMOVE_COMIC":var r=n.comicsSelecteds.filter((function(n){return n.id!==t.payload}));return Object(h.a)(Object(h.a)({},n),{},{comicsSelecteds:r});default:return n}},O={open:!1},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_MODAL":return{open:!n.open};default:return n}},B=Object(b.combineReducers)({comic:m,modal:v}),C=e(22),D=e.n(C),y=e(62),Q=D.a.mark(z);function z(){return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(y.a)([]);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),Q)}var L=Object(j.a)(),P=[L],k=Object(b.createStore)(Object(f.a)({key:"marvel-react",storage:g.a,whitelist:["auth"]},B),Object(l.composeWithDevTools)(b.applyMiddleware.apply(void 0,P))),F=Object(f.b)(k);L.run(z);var H=e(6),I=e(7);function M(){var n=Object(H.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n  }\n\n  html, body, #root{\n    height: 100%;\n    &::-webkit-scrollbar {\n    height: 10px;\n    width: 10px;\n    border: none;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: #e62429;\n    border-radius: 10px;\n  }\n\n  }\n\n  body {\n    background-color: #202020;\n    color: #FFF;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font-family: 'Roboto', serif;\n    font-size: 16px;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 500;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n"]);return M=function(){return n},n}var G=Object(I.a)(M()),T=e(55),E=e(14),V=e(58);function S(){var n=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n  img {\n    max-width: 270px;\n    height: 345px;\n    position: relative;\n    margin-bottom: 20px;\n    display: inline-block;\n    animation-duration: 0.5s;\n    animation-name: ",";\n    animation-fill-mode: both;\n  }\n\n  &:hover {\n    img {\n      animation-duration: 0.5s;\n      animation-name: ",";\n      animation-fill-mode: both;\n    }\n\n    strong {\n      color: #e62429;\n    }\n  }\n\n  strong {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  span {\n    color: #e62429;\n  }\n\n  cursor: pointer;\n\n  margin-bottom: 50px;\n"]);return S=function(){return n},n}function X(){var n=Object(H.a)(["\n   from {\n    top: 0;\n  }\n  to {\n    top: -10px\n  }\n"]);return X=function(){return n},n}function K(){var n=Object(H.a)(["\n   from {\n    top: -10px;\n  }\n  to {\n    top: 0;\n  }\n"]);return K=function(){return n},n}var J=Object(I.d)(K()),q=Object(I.d)(X()),R=I.c.div(S(),J,q),Y=function(n){var t=n.data,e=Object(d.c)((function(n){return n.comic.comicsSelecteds})),i=Object(d.b)(),o=Object(c.useCallback)((function(){i(function(n){return{type:"COMIC_SELECTED",payload:n}}(t)),i({type:"TOGGLE_MODAL"})}),[t,i]);return Object(r.jsxs)(R,{onClick:o,children:[Object(r.jsx)("img",{src:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),alt:t.title}),Object(r.jsx)("strong",{children:t.title}),Object(r.jsx)("span",{children:e.find((function(n){return n.id===t.id}))?"Selected":""})]})};function U(){var n=Object(H.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return U=function(){return n},n}function Z(){var n=Object(H.a)(["\n  height: 400px;\n  width: 230px;\n\n  @media (max-width: 560px) {\n    height: 100%;\n    width: 100%;\n  } ;\n"]);return Z=function(){return n},n}function N(){var n=Object(H.a)(["\n  min-height: 50vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return N=function(){return n},n}function W(){var n=Object(H.a)(["\n  min-height: 1000px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-auto-flow: row;\n  grid-gap: 30px;\n\n  @media (max-width: 1400px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media (max-width: 1050px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (max-width: 830px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (max-width: 560px) {\n    grid-template-columns: repeat(1, 1fr);\n  } ;\n"]);return W=function(){return n},n}function _(){var n=Object(H.a)(["\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 20px 50px 50px 50px;\n"]);return _=function(){return n},n}var $=I.c.div(_()),nn=I.c.div(W()),tn=I.c.div(N()),en=I.c.div(Z()),rn=I.c.div(U()),cn=e(56),on=e.n(cn).a.create({baseURL:"https://gateway.marvel.com/v1/public"}),an=e(28),An=e(36);function un(){var n=Object(H.a)(["\n      opacity: 0.5;\n      cursor: default;\n    "]);return un=function(){return n},n}function sn(){var n=Object(H.a)(["\n          &:hover {\n            background-color: ",";\n          }\n        "]);return sn=function(){return n},n}function dn(){var n=Object(H.a)(["\n          background: ",";\n          &:hover {\n            background-color: ",";\n          }\n        "]);return dn=function(){return n},n}function bn(){var n=Object(H.a)(["\n  background: #e62429;\n  height: 50px;\n  border-radius: 10px;\n  border: 0;\n  padding: 0 16px;\n  color: #fff;\n  width: 100%;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n\n  ","\n\n  ","\n\n  svg {\n    position: relative;\n    right: 45%;\n  }\n  transition: background 0.2s;\n"]);return bn=function(){return n},n}var ln=I.c.button(bn(),(function(n){return n.color?Object(I.b)(dn(),n.color,Object(An.a)(.1,n.color)):Object(I.b)(sn(),Object(An.a)(.1,"#e62429"))}),(function(n){return n.disabled&&Object(I.b)(un())})),fn=function(n){var t=n.children,e=Object(an.a)(n,["children"]);return Object(r.jsx)(ln,Object(h.a)(Object(h.a)({type:"button"},e),{},{children:t}))},jn=e(32);function pn(){var n=Object(H.a)(["\n  width: 300px;\n  margin: auto;\n\n  button {\n    height: 30px;\n    width: 100px;\n    margin: 3px auto;\n  }\n"]);return pn=function(){return n},n}function gn(){var n=Object(H.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"]);return gn=function(){return n},n}function xn(){var n=Object(H.a)(["\n  background: #fff;\n  position: relative;\n  top: -13px;\n  height: 40px;\n  border-radius: 10px;\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  span {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]);return xn=function(){return n},n}function hn(){var n=Object(H.a)(["\n  position: relative;\n  width: 230px;\n  height: 300px;\n  border-radius: 10px;\n  margin: 15px;\n\n  img {\n    width: 215px;\n    height: 90%;\n    /* border-radius: 8px; */\n  }\n\n  .circle {\n    cursor: pointer;\n    position: absolute;\n    top: -10px;\n    left: 205px;\n    display: none;\n    background: #e62429;\n    border-radius: 50%;\n  }\n\n  &:hover {\n    .circle {\n      display: flex;\n    }\n  }\n"]);return hn=function(){return n},n}function wn(){var n=Object(H.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 400px;\n  overflow: auto;\n  white-space: nowrap;\n\n  overflow-y: auto;\n  position: relative;\n  &::-webkit-scrollbar {\n    height: 10px;\n    border: none;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: #e62429;\n    border-radius: 10px;\n  }\n"]);return wn=function(){return n},n}function mn(){var n=Object(H.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n"]);return mn=function(){return n},n}function On(){var n=Object(H.a)(["\n  border-top: 0.5px solid #ffff;\n  width: 100%;\n"]);return On=function(){return n},n}function vn(){var n=Object(H.a)(["\n          display: flex;\n        "]);return vn=function(){return n},n}function Bn(){var n=Object(H.a)(["\n          display: none;\n        "]);return Bn=function(){return n},n}function Cn(){var n=Object(H.a)(["\n  background-color: #000;\n  padding: 0 10%;\n  color: #6d6466;\n  height: 520px;\n\n  display: flex;\n  flex-direction: column;\n\n  ","\n"]);return Cn=function(){return n},n}var Dn=I.c.div(Cn(),(function(n){return n.open?Object(I.b)(vn()):Object(I.b)(Bn())})),yn=I.c.div(On()),Qn=I.c.div(mn()),zn=I.c.div(wn()),Ln=I.c.div(hn()),Pn=I.c.div(xn()),kn=I.c.div(gn()),Fn=I.c.div(pn());function Hn(){var n=Object(H.a)(["\n      color: #e62429;\n      border-color: #e62429;\n    "]);return Hn=function(){return n},n}function In(){var n=Object(H.a)(["\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  border: 2px solid #232129;\n  padding: 10px;\n  width: 100%;\n  color: #fff;\n  display: flex;\n  align-items: center;\n\n  & + div {\n    margin-top: 8px;\n  }\n\n  ","\n\n  input {\n    flex: 1;\n    background: transparent;\n    border: 0;\n    color: #fff;\n    &::placeholder {\n      color: rgba(255, 255, 255, 0.2);\n    }\n  }\n\n  svg {\n    margin-right: 16px;\n  }\n"]);return In=function(){return n},n}var Mn=I.c.div(In(),(function(n){return n.isFocused&&Object(I.b)(Hn())})),Gn=function(n){var t=n.icon,e=Object(an.a)(n,["icon"]),i=Object(c.useState)(!1),o=Object(E.a)(i,2),a=o[0],A=o[1];return Object(r.jsxs)(Mn,{isFocused:a,children:[t&&Object(r.jsx)(t,{size:20}),Object(r.jsx)("input",Object(h.a)({onFocus:function(){return A(!0)},onBlur:function(){return A(!1)}},e))]})},Tn=function(n){var t=n.open,e=n.close,i=Object(d.c)((function(n){return n.comic.comicsSelecteds})),o=Object(d.b)(),a=Object(c.useState)([]),A=Object(E.a)(a,2),u=A[0],s=A[1],b=Object(c.useState)(""),l=Object(E.a)(b,2),f=l[0],j=l[1];Object(c.useEffect)((function(){s(i),0===i.length&&e(!1)}),[i]);var p=Object(c.useCallback)((function(n){o(function(n){return{type:"REMOVE_COMIC",payload:n}}(n))}),[o]),g=Object(c.useCallback)((function(){var n=i.map((function(n){return"\n Title: ".concat(n.title," \n Image: ").concat(n.thumbnail.path,".").concat(n.thumbnail.extension," \n Description: ").concat(n.description," \n")}));window.open("mailto:".concat(f,"?subject=Comics&body=").concat(n.map((function(n){return encodeURIComponent(n)}))))}),[i,f]);return Object(r.jsxs)(Dn,{open:t,children:[Object(r.jsxs)(yn,{children:[Object(r.jsx)(Qn,{children:Object(r.jsx)("strong",{children:"Selected comics"})}),Object(r.jsx)(zn,{children:u.map((function(n){return Object(r.jsx)(Ln,{children:Object(r.jsxs)(kn,{children:[Object(r.jsx)("div",{className:"circle",children:Object(r.jsx)(jn.a,{color:"#fff",size:30,onClick:function(){return p(n.id)}})}),Object(r.jsx)("img",{src:"".concat(n.thumbnail.path,".").concat(n.thumbnail.extension),alt:n.title}),Object(r.jsx)(Pn,{children:Object(r.jsx)("span",{children:n.title})})]})},n.id)}))})]}),Object(r.jsxs)(Fn,{children:[Object(r.jsx)(Gn,{name:"email",placeholder:"Type your email",onChange:function(n){return j(n.target.value)},icon:jn.b}),Object(r.jsx)(fn,{type:"button",onClick:g,disabled:0===f.length,children:"Send"})]})]})},En=e(24);function Vn(){var n=Object(H.a)(["\n      svg {\n        transform: rotate(180deg);\n        transition: transform 0.2s linear;\n      }\n    "]);return Vn=function(){return n},n}function Sn(){var n=Object(H.a)(["\n      svg {\n        transform: rotate(0);\n        transition: transform 0.2s linear;\n      }\n    "]);return Sn=function(){return n},n}function Xn(){var n=Object(H.a)(["\n  width: 80px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  svg {\n    transition: color 0.2s;\n    cursor: pointer;\n    &:hover {\n      color: #e62429;\n    }\n  }\n\n  ","\n\n  ","\n"]);return Xn=function(){return n},n}function Kn(){var n=Object(H.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 0 5%;\n  height: 40px;\n"]);return Kn=function(){return n},n}function Jn(){var n=Object(H.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n\n  img {\n    width: 130px;\n    height: 60px;\n  }\n"]);return Jn=function(){return n},n}function qn(){var n=Object(H.a)(["\n  width: 100%;\n  background-color: #000;\n  padding: 0 30px;\n  height: 80px;\n"]);return qn=function(){return n},n}var Rn=I.c.div(qn()),Yn=I.c.div(Jn()),Un=I.c.div(Kn()),Zn=I.c.div(Xn(),(function(n){return!n.open&&Object(I.b)(Sn())}),(function(n){return n.open&&Object(I.b)(Vn())})),Nn=function(){var n=Object(c.useState)(!1),t=Object(E.a)(n,2),e=t[0],i=t[1],o=Object(d.c)((function(n){return n.comic.comicsSelecteds}));return Object(c.useEffect)((function(){o.length>0&&i(!0)}),[o]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Rn,{children:Object(r.jsx)(Yn,{children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:""})})}),Object(r.jsx)(Tn,{open:e,close:function(n){return i(n)}}),Object(r.jsx)(Un,{children:o.length>0&&Object(r.jsx)(Zn,{onClick:function(){return i((function(n){return!n}))},open:e,children:Object(r.jsx)(En.b,{size:30})})})]})},Wn=e(57);function _n(){var n=Object(H.a)(["\n  height: 95%;\n  width: 100%;\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  h1 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  p {\n    display: -webkit-box;\n    -webkit-line-clamp: 9;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  button {\n    width: 140px;\n    margin: 0 auto;\n  }\n\n  @media (max-width: 975px) {\n    flex-direction: column;\n    width: auto;\n    justify-content: space-between;\n\n    h1 {\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    p {\n      display: -webkit-box;\n      -webkit-line-clamp: 4;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    h1 {\n      font-size: 20px;\n    }\n\n    button {\n      margin-top: 5px;\n      width: 100%;\n    }\n  } ;\n"]);return _n=function(){return n},n}function $n(){var n=Object(H.a)(["\n  width: 100%;\n  height: 95%;\n  display: flex;\n\n  img {\n    width: 337px;\n    height: 470px;\n  }\n\n  @media (max-width: 975px) {\n    flex-direction: column;\n\n    img {\n      width: 200px;\n      height: 300px;\n      margin: 0 auto 15px auto;\n    }\n  } ;\n"]);return $n=function(){return n},n}function nt(){var n=Object(H.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n\n  svg {\n    cursor: pointer;\n  }\n"]);return nt=function(){return n},n}function tt(){var n=Object(H.a)(["\n  width: 70%;\n  height: 60%;\n  background-color: #2d2d2d;\n  border-radius: 10px;\n\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: 600px) {\n    width: 80%;\n    height: 80%;\n  }\n"]);return tt=function(){return n},n}function et(){var n=Object(H.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return et=function(){return n},n}var rt=I.c.div(et()),ct=I.c.div(tt()),it=I.c.div(nt()),ot=I.c.div($n()),at=I.c.div(_n()),At=function(){var n=Object(d.b)(),t=Object(d.c)((function(n){return n.modal.open})),e=Object(d.c)((function(n){return n.comic})),c=e.comicSelected,i=e.comicsSelecteds;return Object(r.jsx)(r.Fragment,{children:t&&Object(r.jsx)(rt,{children:Object(r.jsxs)(ct,{children:[Object(r.jsx)(it,{children:Object(r.jsx)(Wn.a,{size:20,onClick:function(){return n({type:"TOGGLE_MODAL"})}})}),c&&Object(r.jsxs)(ot,{children:[Object(r.jsx)("img",{src:"".concat(c.thumbnail.path,".").concat(c.thumbnail.extension),alt:c.title}),Object(r.jsxs)(at,{children:[Object(r.jsx)("h1",{children:c.title}),c.description&&Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Description:"}),Object(r.jsx)("p",{children:c.description})]}),i.find((function(n){return n.id===c.id}))?"":Object(r.jsx)(fn,{type:"button",onClick:function(){n({type:"ADD_COMIC",payload:c}),n({type:"TOGGLE_MODAL"})},children:"Select"})]})]})]})})})};function ut(){var n=Object(H.a)(["\n  width: 45%;\n  display: flex;\n"]);return ut=function(){return n},n}function st(){var n=Object(H.a)(["\n  width: 100%;\n  margin: 0 auto;\n  height: 50px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  svg {\n    cursor: pointer;\n\n    &:hover {\n      transition: color 0.2s;\n\n      &:hover {\n        color: #e62429;\n      }\n    }\n  }\n"]);return st=function(){return n},n}var dt=I.c.div(st()),bt=I.c.div(ut()),lt=function(n){var t=n.size,e=n.page,c=n.changePage;return Object(r.jsxs)(dt,{children:[Object(r.jsx)(bt,{style:{flexDirection:"row-reverse"},children:e>1&&Object(r.jsx)(En.a,{size:30,onClick:function(){return c(e-1)}})}),Object(r.jsx)("span",{children:e}),Object(r.jsx)(bt,{children:e<t&&Object(r.jsx)(En.c,{size:30,onClick:function(){return c(e+1)}})})]})};function ft(){var n=Object(H.a)(["\n  animation: "," 1s linear infinite;\n  transform: translateZ(0);\n\n  border-top: 6px solid #e62429;\n  border-right: 6px solid #e62429;\n  border-bottom: 6px solid #e62429;\n  border-left: 5px solid black;\n  background: transparent;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n"]);return ft=function(){return n},n}function jt(){var n=Object(H.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return jt=function(){return n},n}var pt=Object(I.d)(jt()),gt=I.c.div(ft(),pt),xt=function(){var n=Object(c.useState)([]),t=Object(E.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)([]),a=Object(E.a)(o,2),A=a[0],u=a[1],s=Object(c.useState)(0),d=Object(E.a)(s,2),b=d[0],l=d[1],f=Object(c.useState)(0),j=Object(E.a)(f,2),p=j[0],g=j[1],x=Object(c.useState)(!1),h=Object(E.a)(x,2),w=h[0],m=h[1],O=Object(c.useState)(""),v=Object(E.a)(O,2),B=v[0],C=v[1];return Object(c.useEffect)((function(){m(!0),function(){var n=Object(T.a)(D.a.mark((function n(){return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,on.get("comics?ts=1611941633&apikey=4869b727d93758781625a424b37aab46&hash=029f7d986894f2d0f70c573085c0487a&offset=".concat(b)).then((function(n){i(n.data.data.results),u(n.data.data.results),g(n.data.data.total/10),m(!1)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[b]),Object(c.useEffect)((function(){if(B.length){var n=e.filter((function(n){return n.title.toLowerCase().includes(B.toLowerCase())}));i(n)}else i(A)}),[B]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Nn,{}),Object(r.jsxs)($,{children:[Object(r.jsx)("div",{style:{height:"85px"},children:Object(r.jsx)(Gn,{name:"search",placeholder:"Comic name",icon:V.a,onChange:function(n){return C(n.target.value)},value:B})}),e.length?Object(r.jsx)(nn,{children:e.map((function(n){return Object(r.jsx)(en,{children:Object(r.jsx)(Y,{data:n})},n.id)}))}):!w&&Object(r.jsx)(tn,{children:Object(r.jsx)("span",{children:"Not found"})}),!w&&Object(r.jsx)(lt,{size:p,page:b+1,changePage:function(n){l(n-1),C("")}})]}),w&&Object(r.jsx)(rn,{children:Object(r.jsx)(gt,{})})]})},ht=function(){return Object(r.jsx)(d.a,{store:k,children:Object(r.jsx)(s.a,{persistor:F,children:Object(r.jsxs)(A.a,{basename:"/",children:[Object(r.jsx)(u.c,{children:Object(r.jsx)(u.a,{exact:!0,path:"/",component:xt})}),Object(r.jsx)(G,{}),Object(r.jsx)(At,{})]})})})};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(ht,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.7281b1d3.chunk.js.map