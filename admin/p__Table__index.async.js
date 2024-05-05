"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[311],{70370:function(e,r,n){var t=n(28484),a=n(46060),u=n(33763),o=n(95312),s=n(93236),i=n(85658),l=n(30422),c=n(62086),p=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],d=s.forwardRef((function(e,r){var n=e.fieldProps,o=e.options,s=e.radioType,i=e.layout,d=e.proFieldProps,f=e.valueEnum,h=(0,a.Z)(e,p);return(0,c.jsx)(l.Z,(0,t.Z)((0,t.Z)({valueType:"button"===s?"radioButton":"radio",ref:r,valueEnum:(0,u.h)(f,void 0)},h),{},{fieldProps:(0,t.Z)({options:o,layout:i},n),proFieldProps:d,filedConfig:{customLightMode:!0}}))})),f=s.forwardRef((function(e,r){var n=e.fieldProps,a=e.children;return(0,c.jsx)(o.ZP,(0,t.Z)((0,t.Z)({},n),{},{ref:r,children:a}))})),h=(0,i.G)(f,{valuePropName:"checked",ignoreWidth:!0});h.Group=d,h.Button=o.ZP.Button,h.displayName="ProFormComponent",r.Z=h},631:function(e,r,n){var t=n(3392),a=n(28484),u=n(46060),o=n(57804),s=n(65074),i=n(15908),l=n(71770),c=n(93236),p=n(30422),d=n(62086),f=["fieldProps","proFieldProps"],h=["fieldProps","proFieldProps"],v="text",m=function(e){var r=(0,o.Z)(e.open||!1,{value:e.open,onChange:e.onOpenChange}),n=(0,t.Z)(r,2),u=n[0],l=n[1];return(0,d.jsx)(s.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(r){var n,t=r.getFieldValue(e.name||[]);return(0,d.jsx)(i.Z,(0,a.Z)((0,a.Z)({getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},onOpenChange:function(e){return l(e)},content:(0,d.jsxs)("div",{style:{padding:"4px 0"},children:[null===(n=e.statusRender)||void 0===n?void 0:n.call(e,t),e.strengthText?(0,d.jsx)("div",{style:{marginTop:10},children:(0,d.jsx)("span",{children:e.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},e.popoverProps),{},{open:u,children:e.children}))}})},x=function(e){var r=e.fieldProps,n=e.proFieldProps,t=(0,u.Z)(e,f);return(0,d.jsx)(p.Z,(0,a.Z)({valueType:v,fieldProps:r,filedConfig:{valueType:v},proFieldProps:n},t))};x.Password=function(e){var r=e.fieldProps,n=e.proFieldProps,o=(0,u.Z)(e,h),s=(0,c.useState)(!1),i=(0,t.Z)(s,2),f=i[0],x=i[1];return null!=r&&r.statusRender&&o.name?(0,d.jsx)(m,{name:o.name,statusRender:null==r?void 0:r.statusRender,popoverProps:null==r?void 0:r.popoverProps,strengthText:null==r?void 0:r.strengthText,open:f,onOpenChange:x,children:(0,d.jsx)("div",{children:(0,d.jsx)(p.Z,(0,a.Z)({valueType:"password",fieldProps:(0,a.Z)((0,a.Z)({},(0,l.Z)(r,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(e){var n;null==r||null===(n=r.onBlur)||void 0===n||n.call(r,e),x(!1)},onClick:function(e){var n;null==r||null===(n=r.onClick)||void 0===n||n.call(r,e),x(!0)}}),proFieldProps:n,filedConfig:{valueType:v}},o))})}):(0,d.jsx)(p.Z,(0,a.Z)({valueType:"password",fieldProps:r,proFieldProps:n,filedConfig:{valueType:v}},o))},x.displayName="ProFormComponent",r.Z=x},30837:function(e,r,n){var t=n(28484),a=n(46060),u=n(93236),o=n(30422),s=n(62086),i=["fieldProps","proFieldProps"],l=function(e,r){var n=e.fieldProps,u=e.proFieldProps,l=(0,a.Z)(e,i);return(0,s.jsx)(o.Z,(0,t.Z)({ref:r,valueType:"textarea",fieldProps:n,proFieldProps:u},l))};r.Z=u.forwardRef(l)},6490:function(e,r,n){n.r(r),n.d(r,{default:function(){return z}});var t=n(48305),a=n.n(t),u=n(90228),o=n.n(u),s=n(26068),i=n.n(s),l=n(87999),c=n.n(l),p=n(96349),d=n(98451),f=n(61201),h=n(96296),v=n(4262),m=n(62834),x=n(83051),y=n(51077),Z=n(65004),P=n(93236),w=n(36552),j=n(62086),g=function(e){var r=e.modalVisible,n=e.onCancel;return(0,j.jsx)(w.Z,{destroyOnClose:!0,title:"新建",width:420,open:r,onCancel:function(){return n()},footer:null,children:e.children})},b=n(25331),C=n(631),k=n(30837),T=n(37598),F=n(70370),S=n(28484),q=n(46060),E=n(54389),R=n(30422),U=["fieldProps","proFieldProps"],I="dateTime",L=P.forwardRef((function(e,r){var n=e.fieldProps,t=e.proFieldProps,a=(0,q.Z)(e,U),u=(0,P.useContext)(E.Z);return(0,j.jsx)(R.Z,(0,S.Z)({ref:r,fieldProps:(0,S.Z)({getPopupContainer:u.getPopupContainer},n),valueType:I,proFieldProps:t,filedConfig:{valueType:I,customLightMode:!0}},a))})),N=function(e){return(0,j.jsxs)(b.L0,{stepsProps:{size:"small"},stepsFormRender:function(r,n){return(0,j.jsx)(w.Z,{width:640,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:"规则配置",open:e.updateModalVisible,footer:n,onCancel:function(){return e.onCancel()},children:r})},onFinish:e.onSubmit,children:[(0,j.jsxs)(b.L0.StepForm,{initialValues:{name:e.values.name,nickName:e.values.nickName},title:"基本信息",children:[(0,j.jsx)(C.Z,{width:"md",name:"name",label:"规则名称",rules:[{required:!0,message:"请输入规则名称！"}]}),(0,j.jsx)(k.Z,{name:"desc",width:"md",label:"规则描述",placeholder:"请输入至少五个字符",rules:[{required:!0,message:"请输入至少五个字符的规则描述！",min:5}]})]}),(0,j.jsxs)(b.L0.StepForm,{initialValues:{target:"0",template:"0"},title:"配置规则属性",children:[(0,j.jsx)(T.Z,{width:"md",name:"target",label:"监控对象",valueEnum:{0:"表一",1:"表二"}}),(0,j.jsx)(T.Z,{width:"md",name:"template",label:"规则模板",valueEnum:{0:"规则模板一",1:"规则模板二"}}),(0,j.jsx)(F.Z.Group,{name:"type",width:"md",label:"规则类型",options:[{value:"0",label:"强"},{value:"1",label:"弱"}]})]}),(0,j.jsxs)(b.L0.StepForm,{initialValues:{type:"1",frequency:"month"},title:"设定调度周期",children:[(0,j.jsx)(L,{name:"time",label:"开始时间",rules:[{required:!0,message:"请选择开始时间！"}]}),(0,j.jsx)(T.Z,{name:"frequency",label:"监控对象",width:"xs",valueEnum:{month:"月",week:"周"}})]})]})},V=p.Z.UserController,O=V.addUser,B=V.queryUserList,M=V.deleteUser,G=V.modifyUser,A=function(){var e=c()(o()().mark((function e(r){var n;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.ZP.loading("正在添加"),e.prev=1,e.next=4,O(i()({},r));case 4:return n(),m.ZP.success("添加成功"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(1),n(),m.ZP.error("添加失败请重试！"),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),D=function(){var e=c()(o()().mark((function e(r){var n;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.ZP.loading("正在配置"),e.prev=1,e.next=4,G({userId:r.id||""},{name:r.name||"",nickName:r.nickName||"",email:r.email||""});case 4:return n(),m.ZP.success("配置成功"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(1),n(),m.ZP.error("配置失败请重试！"),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),W=function(){var e=c()(o()().mark((function e(r){var n,t;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=m.ZP.loading("正在删除"),r){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,e.next=6,M({userId:(null===(t=r.find((function(e){return e.id})))||void 0===t?void 0:t.id)||""});case 6:return n(),m.ZP.success("删除成功，即将刷新"),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(3),n(),m.ZP.error("删除失败，请重试"),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(r){return e.apply(this,arguments)}}(),z=function(){var e=(0,P.useState)(!1),r=a()(e,2),n=r[0],t=r[1],u=(0,P.useState)(!1),s=a()(u,2),l=s[0],p=s[1],m=(0,P.useState)({}),w=a()(m,2),b=w[0],C=w[1],k=(0,P.useRef)(),T=(0,P.useState)(),F=a()(T,2),S=F[0],q=F[1],E=(0,P.useState)([]),R=a()(E,2),U=R[0],I=R[1],L=[{title:"名称",dataIndex:"name",tip:"名称是唯一的 key",formItemProps:{rules:[{required:!0,message:"名称为必填项"}]}},{title:"昵称",dataIndex:"nickName",valueType:"text"},{title:"性别",dataIndex:"gender",hideInForm:!0,valueEnum:{0:{text:"男",status:"MALE"},1:{text:"女",status:"FEMALE"}}},{title:"操作",dataIndex:"option",valueType:"option",render:function(e,r){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("a",{onClick:function(){p(!0),C(r)},children:"配置"}),(0,j.jsx)(x.Z,{type:"vertical"}),(0,j.jsx)("a",{href:"",children:"订阅警报"})]})}}];return(0,j.jsxs)(d._z,{header:{title:"CRUD 示例"},children:[(0,j.jsx)(f.Z,{headerTitle:"查询表格",actionRef:k,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[(0,j.jsx)(y.ZP,{type:"primary",onClick:function(){return t(!0)},children:"新建"},"1")]},request:function(){var e=c()(o()().mark((function e(r,n,t){var a,u,s;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(i()(i()({},r),{},{sorter:n,filter:t}));case 2:return a=e.sent,u=a.data,s=a.success,e.abrupt("return",{data:(null==u?void 0:u.list)||[],success:s});case 6:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}(),columns:L,rowSelection:{onChange:function(e,r){return I(r)}}}),(null==U?void 0:U.length)>0&&(0,j.jsxs)(h.S,{extra:(0,j.jsxs)("div",{children:["已选择"," ",(0,j.jsx)("a",{style:{fontWeight:600},children:U.length})," ","项  "]}),children:[(0,j.jsx)(y.ZP,{onClick:c()(o()().mark((function e(){var r,n;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(U);case 2:I([]),null===(r=k.current)||void 0===r||null===(n=r.reloadAndRest)||void 0===n||n.call(r);case 4:case"end":return e.stop()}}),e)}))),children:"批量删除"}),(0,j.jsx)(y.ZP,{type:"primary",children:"批量审批"})]}),(0,j.jsx)(g,{onCancel:function(){return t(!1)},modalVisible:n,children:(0,j.jsx)(f.Z,{onSubmit:function(){var e=c()(o()().mark((function e(r){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(r);case 2:e.sent&&(t(!1),k.current&&k.current.reload());case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),rowKey:"id",type:"form",columns:L})}),b&&Object.keys(b).length?(0,j.jsx)(N,{onSubmit:function(){var e=c()(o()().mark((function e(r){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(r);case 2:e.sent&&(p(!1),C({}),k.current&&k.current.reload());case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),onCancel:function(){p(!1),C({})},updateModalVisible:l,values:b}):null,(0,j.jsx)(Z.Z,{width:600,open:!!S,onClose:function(){q(void 0)},closable:!1,children:(null==S?void 0:S.name)&&(0,j.jsx)(v.vY,{column:2,title:null==S?void 0:S.name,request:c()(o()().mark((function e(){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{data:S||{}});case 1:case"end":return e.stop()}}),e)}))),params:{id:null==S?void 0:S.name},columns:L})})]})}},96349:function(e,r,n){n.d(r,{Z:function(){return w}});var t={};n.r(t),n.d(t,{addUser:function(){return f},deleteUser:function(){return Z},getUserDetail:function(){return v},modifyUser:function(){return x},queryUserList:function(){return p}});var a=n(90228),u=n.n(a),o=n(26068),s=n.n(o),i=n(87999),l=n.n(i),c=n(40637);function p(e,r){return d.apply(this,arguments)}function d(){return(d=l()(u()().mark((function e(r,n){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/queryUserList",s()({method:"GET",params:s()({},r)},n||{})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,r){return h.apply(this,arguments)}function h(){return(h=l()(u()().mark((function e(r,n){return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.request)("/api/v1/user",s()({method:"POST",headers:{"Content-Type":"application/json"},data:r},n||{})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,r){return m.apply(this,arguments)}function m(){return(m=l()(u()().mark((function e(r,n){var t;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.userId,e.abrupt("return",(0,c.request)("/api/v1/user/".concat(t),s()({method:"GET",params:s()({},r)},n||{})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,r,n){return y.apply(this,arguments)}function y(){return(y=l()(u()().mark((function e(r,n,t){var a;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.userId,e.abrupt("return",(0,c.request)("/api/v1/user/".concat(a),s()({method:"PUT",headers:{"Content-Type":"application/json"},params:s()({},r),data:n},t||{})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,r){return P.apply(this,arguments)}function P(){return(P=l()(u()().mark((function e(r,n){var t;return u()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.userId,e.abrupt("return",(0,c.request)("/api/v1/user/".concat(t),s()({method:"DELETE",params:s()({},r)},n||{})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w={UserController:t}}}]);