(this["webpackJsonpgoit-react-hw-06-phonebook-vanilla-redux"]=this["webpackJsonpgoit-react-hw-06-phonebook-vanilla-redux"]||[]).push([[0],[,,,function(t,e,n){t.exports={form:"ContactForm_form__2cSdm",label:"ContactForm_label__fYSp4",input:"ContactForm_input__31nS9",btn:"ContactForm_btn__3oRo_"}},,,,,,,function(t,e,n){t.exports={label:"Filter_label__ueAOX",input:"Filter_input__199pm"}},function(t,e,n){t.exports={contactList:"ContactList_contactList__3Dh_I",contactItem:"ContactList_contactItem__3Crfp"}},function(t,e,n){t.exports={contact:"Contact_contact__2ixQZ",btn:"Contact_btn__Hy8Ul"}},,,,function(t,e,n){t.exports={container:"Container_container__1g0K7"}},function(t,e,n){t.exports={section:"Section_section__1zxYS",title:"Section_title__XNp8R"}},,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(6),i=n.n(o),s=n(4),u=n(14),l=n(18),b="phonebook/AddContact",m="phonebook/DeleteContact",j="phonebook/ChangeFilter",d={contacts:{items:null!==(c=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==c?c:[],filter:""}},f=Object(s.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.contacts.items,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case b:return[].concat(Object(l.a)(t),[c]);case m:return t.filter((function(t){return t.id!==c}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.contacts.filter,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;return n===j?c:t}}),p=Object(s.combineReducers)({contacts:f}),h=Object(s.createStore)(p,Object(u.composeWithDevTools)()),O=n(2),_=(n(29),n(30),n(16)),v=n.n(_),x=n(1);var C=function(t){var e=t.children;return Object(x.jsx)("div",{className:v.a.container,children:e})},g=n(17),y=n.n(g);var N=function(t){var e=t.children;return Object(x.jsx)("section",{className:y.a.section,children:e})},S=n(13),F=n(3),w=n.n(F),k=n(34);var L=Object(O.b)((function(t){return{contactsToContactForm:t.contacts.items}}),(function(t){return{onSubmitForm:function(e){var n=e.name,c=e.number;return t(function(t){var e=t.name,n=t.number;return{type:b,payload:{id:Object(k.a)(),name:e,number:n}}}({name:n,number:c}))}}}))((function(t){var e=t.contactsToContactForm,n=t.onSubmitForm,c=Object(a.useState)(""),r=Object(S.a)(c,2),o=r[0],i=r[1],s=Object(a.useState)(""),u=Object(S.a)(s,2),l=u[0],b=u[1],m=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":i(c);break;case"number":b(c);break;default:return}},j=function(){i(""),b("")};return Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=o.toLowerCase();e.some((function(t){return t.name.toLowerCase()===c}))?alert("".concat(o," is already in contacts.")):n({name:o,number:l}),j()},className:w.a.form,autoComplete:"off",children:[Object(x.jsxs)("label",{className:w.a.label,children:["Name",Object(x.jsx)("input",{name:"name",type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:m,className:w.a.input})]}),Object(x.jsxs)("label",{className:w.a.label,children:["Number",Object(x.jsx)("input",{name:"number",type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:m,className:w.a.input})]}),Object(x.jsx)("button",{type:"submit",className:w.a.btn,children:"Add contact"})]})})),T=n(10),A=n.n(T);var D=Object(O.b)((function(t){return{filterToFilter:t.contacts.filter}}),(function(t){return{onChange:function(e){return t((n=e.currentTarget.value,{type:j,payload:n}));var n}}}))((function(t){var e=t.filterToFilter,n=t.onChange;return Object(x.jsxs)("label",{className:A.a.label,children:["Find contacts by name / number",Object(x.jsx)("input",{type:"text",value:e,onChange:n,className:A.a.input})]})})),I=n(11),z=n.n(I),J=n(12),R=n.n(J);var Z=Object(O.b)(null,(function(t){return{onDeleteContact:function(e){return t(function(t){return{type:m,payload:t}}(e))}}}))((function(t){var e=t.name,n=t.number,c=t.id,a=t.onDeleteContact;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{className:R.a.contact,children:["\u2022 ",e,": ",n]}),Object(x.jsx)("button",{className:R.a.btn,onClick:function(){return a(c)},children:"Delete"})]})}));var q=function(t,e){var n=e.trim().toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(e.trim())}))},B=Object(O.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{contactsToContactList:q(n,c)}}))((function(t){var e=t.contactsToContactList;return Object(x.jsx)("ul",{className:z.a.contactList,children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(x.jsx)("li",{className:z.a.contactItem,children:Object(x.jsx)(Z,{name:n,number:c,id:e})},e)}))})}));var E=Object(O.b)((function(t){return{contactsToApp:t.contacts.items}}))((function(t){var e=t.contactsToApp;return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(e))}),[e]),Object(x.jsxs)(C,{children:[Object(x.jsxs)(N,{children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsx)(L,{})]}),Object(x.jsxs)(N,{children:[Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(D,{}),Object(x.jsx)(B,{})]})]})}));i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(O.a,{store:h,children:Object(x.jsx)(E,{})})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.40e8185d.chunk.js.map