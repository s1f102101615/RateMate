(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9178)}])},1292:function(e,s,i){"use strict";i.d(s,{v:function(){return h}});var a=i(5893),n=i(1664),t=i.n(n),r=i(7294);let d=e=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:e.fill,children:(0,a.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"})});var l=i(7251),c=i(2038),o=i.n(c);let h=e=>{let{user:s}=e,[i,n]=(0,r.useState)(!1),c=()=>{n(!0)},h=()=>{n(!1)},u=async()=>{confirm("ログアウトしますか？")&&await (0,l.k)()};return(0,a.jsx)("div",{className:o().container,children:(0,a.jsxs)("div",{className:o().main,children:[(0,a.jsx)(t(),{href:"http://localhost:3000/",children:(0,a.jsx)("div",{className:o().maintitle,children:"Gamers"})}),(0,a.jsxs)("div",{className:o().users,children:[s?(0,a.jsxs)("div",{className:o().userBtn,onMouseEnter:c,onMouseLeave:h,style:{marginTop:i?"76px":"0"},onClick:()=>{n(!i)},children:[(null==s?void 0:s.photoURL)!==void 0?(0,a.jsx)("img",{className:o().userIcon,src:s.photoURL,height:24,alt:s.displayName}):(0,a.jsx)(d,{size:18,fill:"#555"}),(0,a.jsx)("span",{className:o().userName,children:null==s?void 0:s.displayName}),(0,a.jsx)("span",{className:o().dropdownIcon,children:i?"▲":"▼"})]}):(0,a.jsx)(t(),{href:"/login",children:(0,a.jsxs)("div",{className:o().userBtn,children:[(0,a.jsx)(d,{size:18,fill:"#555"}),(0,a.jsx)("span",{className:o().userName,children:"ログイン/新規作成"})]})}),i&&(0,a.jsxs)("div",{className:o().dropdown,onMouseEnter:c,onMouseLeave:h,children:[(0,a.jsx)(t(),{href:"/mypage",children:(0,a.jsx)("div",{className:o().dropdownItem,children:"マイページ"})}),(0,a.jsx)("div",{className:o().dropdownItem,onClick:u,children:"ログアウト"})]})]})]})})}},9178:function(e,s,i){"use strict";i.r(s);var a=i(5893),n=i(8583),t=i(7294),r=i(1292),d=i(5371),l=i(2729),c=i.n(l);s.default=()=>{let[e]=(0,n.KO)(d.L),[s,i]=(0,t.useState)("");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.v,{user:e}),(0,a.jsx)("div",{className:c().head,children:(0,a.jsxs)("div",{className:c().title,style:{},children:["熱中した過去に",(0,a.jsx)("br",{}),"無駄な時間なんてない",(0,a.jsx)("br",{}),"俺はゲーム以外でも戦える"]})}),(0,a.jsxs)("div",{className:c().detail,children:[(0,a.jsx)("div",{style:{fontSize:30,fontWeight:"bold"},children:"登録できるゲーム"}),(0,a.jsxs)("div",{style:{flexDirection:"row",display:"flex",gap:30,marginTop:30},children:[(0,a.jsx)("div",{style:{width:120,height:120,backgroundColor:"black"}}),(0,a.jsx)("div",{style:{width:120,height:120,backgroundColor:"black"}}),(0,a.jsx)("div",{style:{width:120,height:120,backgroundColor:"black"}}),(0,a.jsx)("div",{style:{width:120,height:120,backgroundColor:"black"}})]}),(0,a.jsxs)("div",{style:{flexDirection:"row",display:"flex",gap:30,marginTop:30},children:[(0,a.jsx)("div",{style:{width:120,height:120,backgroundColor:"black"}}),(0,a.jsx)("div",{style:{width:120,height:120,backgroundColor:"black"}}),(0,a.jsx)("div",{style:{width:120,height:120,backgroundColor:"black"}}),(0,a.jsx)("div",{style:{width:120,height:120,backgroundColor:"black"}})]})]}),(0,a.jsx)("div",{className:c().submitarea,children:(0,a.jsx)("div",{style:{fontSize:30,fontWeight:30},children:"無料登録はこちら"})})]})}},7251:function(e,s,i){"use strict";i.d(s,{_:function(){return r},k:function(){return d}});var a=i(4857),n=i(328),t=i(3377);let r=async()=>{let e=new a.GH;e.addScope("read:user"),await (0,a.rh)((0,n.l)(),e).catch(t.F)},d=async()=>{await (0,n.l)().signOut()}},2038:function(e){e.exports={container:"BasicHeader_container__ASIaK",main:"BasicHeader_main__Vqufr",maintitle:"BasicHeader_maintitle__lyQkx",users:"BasicHeader_users__lGfKJ",userBtn:"BasicHeader_userBtn__wlK48",userIcon:"BasicHeader_userIcon__UecGa",userName:"BasicHeader_userName__KiR1h",dropdownIcon:"BasicHeader_dropdownIcon__CEuaf",dropdown:"BasicHeader_dropdown__H_eKc",dropdownItem:"BasicHeader_dropdownItem__7uCuz"}},2729:function(e){e.exports={title:"index_title__k0g7D",tasks:"index_tasks__ExTXY",deleteBtn:"index_deleteBtn__wZo2L",head:"index_head__TZvBt",detail:"index_detail__lfPMm",submitarea:"index_submitarea__0wu7H"}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);