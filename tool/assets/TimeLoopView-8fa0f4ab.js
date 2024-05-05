import{d as z,n as B,m as L,e as $,t as O,f as D,g as W,h as I,i as M,j as q,k as N,a as o,l as H,p as F,q as U,s as J,u as K,v as T,r as C,o as Q,c as X,w as g,x as G,y as x,z as S,A as V,F as Y,B as Z,C as ee,_ as te}from"./index-ca29440d.js";import{u as ae}from"./time-336663ad.js";const[oe,P]=z("circle");let se=0;const j=e=>Math.min(Math.max(+e,0),100);function ne(e,_){const p=e?1:0;return`M ${_/2} ${_/2} m 0, -500 a 500, 500 0 1, ${p} 0, 1000 a 500, 500 0 1, ${p} 0, -1000`}const le={text:String,size:B,fill:L("none"),rate:$(100),speed:$(0),color:[String,Object],clockwise:O,layerColor:String,currentRate:D(0),strokeWidth:$(40),strokeLinecap:String,startPosition:L("top")};var re=W({name:oe,props:le,emits:["update:currentRate"],setup(e,{emit:_,slots:p}){const l=`van-circle-${se++}`,r=I(()=>+e.strokeWidth+1e3),R=I(()=>ne(e.clockwise,r.value)),b=I(()=>{const t={top:0,right:90,bottom:180,left:270}[e.startPosition];if(t)return{transform:`rotate(${t}deg)`}});M(()=>e.rate,a=>{let t;const i=Date.now(),s=e.currentRate,u=j(a),f=Math.abs((s-u)*1e3/+e.speed),n=()=>{const v=Date.now(),d=Math.min((v-i)/f,1)*(u-s)+s;_("update:currentRate",j(parseFloat(d.toFixed(1)))),(u>s?d<u:d>u)&&(t=N(n))};e.speed?(t&&q(t),t=N(n)):_("update:currentRate",u)},{immediate:!0});const c=()=>{const{strokeWidth:t,currentRate:i,strokeLinecap:s}=e,u=3140*i/100,f=F(e.color)?`url(#${l})`:e.color,n={stroke:f,strokeWidth:`${+t+1}px`,strokeLinecap:s,strokeDasharray:`${u}px 3140px`};return o("path",{d:R.value,style:n,class:P("hover"),stroke:f},null)},E=()=>{const a={fill:e.fill,stroke:e.layerColor,strokeWidth:`${e.strokeWidth}px`};return o("path",{class:P("layer"),style:a,d:R.value},null)},k=()=>{const{color:a}=e;if(!F(a))return;const t=Object.keys(a).sort((i,s)=>parseFloat(i)-parseFloat(s)).map((i,s)=>o("stop",{key:s,offset:i,"stop-color":a[i]},null));return o("defs",null,[o("linearGradient",{id:l,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[t])])},m=()=>{if(p.default)return p.default();if(e.text)return o("div",{class:P("text")},[e.text])};return()=>o("div",{class:P(),style:H(e.size)},[o("svg",{viewBox:`0 0 ${r.value} ${r.value}`,style:b.value},[k(),E(),c()]),m()])}});const ce=U(re),ie=e=>(Z("data-v-30282a23"),e=e(),ee(),e),ue=ie(()=>x("div",{class:"title"},null,-1)),ve={class:"text-center p-4"},de=W({__name:"TimeLoopView",setup(e){const _=ae(),{src:p,controls:l}=J(K()),r=I(()=>_.loopSets.find(n=>n.selected)),R={"0%":"#3fecff","100%":"#6149f6"},b=T(1),c=T(0),E=()=>{switch(c.value){case 0:c.value=1;break;case 1:c.value=2;break;case 2:c.value=1;break}};let k=0,m=T(1);const a=T(0),t=T(!1),i=()=>{clearInterval(k),m.value=0,a.value=0,t.value=!1},s=()=>{clearInterval(k);const n=r.value[t.value?"loopGapTime":"loopTime"],v=100,y=100/(n*1e3/v);console.log("intervalRate",y),k=window.setInterval(()=>{const d=a.value+y;if(d>=100){const w=!t.value,h=m.value+1;if(h>r.value.loopTimes){console.log("newTimes",h),c.value=2;return}t.value=w,m.value=w?m.value:m.value+1,a.value=0,s();return}a.value=d},v)},u=()=>{clearInterval(k)};let f=0;return M([c],()=>{var n;switch(c.value){case 0:i(),f=0,l.value.playing=!1,l.value.currentTime=0;break;case 1:p.value=((n=r.value.audio)==null?void 0:n.path)||"",console.log("src.value",p.value),t.value||(l.value.currentTime=f,l.value.playing=!0),s();break;case 2:f=l.value.currentTime||0,l.value.playing=!1,u();break}}),M([t],()=>{l.value.playing=!t.value}),(n,v)=>{var h;const y=C("van-row"),d=C("van-button"),w=C("van-col");return Q(),X(Y,null,[ue,o(y,{justify:"center"},{default:g(()=>[o(G(ce),{class:"cursor-pointer",onClick:E,"current-rate":b.value,"onUpdate:currentRate":v[0]||(v[0]=A=>b.value=A),rate:a.value,color:t.value?"#07c160":R,"layer-color":"#ebedf0","stroke-width":60,size:"200",text:t.value?"间隙":"运行"},null,8,["current-rate","rate","color","text"])]),_:1}),x("div",ve,[x("div",null,"标题："+S(r.value.title),1),x("div",null,"次数："+S(G(m))+"/"+S(r.value.loopTimes),1),x("div",null,"音乐："+S((h=r.value.audio)==null?void 0:h.name),1)]),o(y,{justify:"space-around",class:"box-warp"},{default:g(()=>[o(w,{span:"8"},{default:g(()=>[o(d,{block:"",type:"warning",onClick:v[1]||(v[1]=A=>c.value=0)},{default:g(()=>[V("重置")]),_:1})]),_:1}),o(w,{span:"8"},{default:g(()=>[o(d,{block:"",type:"primary",to:"/time/loop/set"},{default:g(()=>[V("修改设置")]),_:1})]),_:1})]),_:1})],64)}}});const fe=te(de,[["__scopeId","data-v-30282a23"]]);export{fe as default};
