(this["webpackJsonpconfusion-rest"]=this["webpackJsonpconfusion-rest"]||[]).push([[0],{148:function(e,t,s){},152:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(16),i=s.n(n),r=(s(98),s(44)),o=s(45),l=s(52),d=s(51),j=s(50),h=s(7),m=s(17),b=s(8),u=s(153),O=s(154),x=s(155),f=s(156),g=s(157),p=s(158),v=s(1);function N(e){var t=e.item,s=e.isLoading,a=e.errorMessage;return s?Object(v.jsx)(Loading,{}):a?Object(v.jsx)("h4",{children:a}):Object(v.jsxs)(u.a,{children:[Object(v.jsx)(O.a,{className:"card-picture-home",cover:!0,src:t.image,alt:t.name}),Object(v.jsxs)(x.a,{children:[Object(v.jsx)(f.a,{children:t.name}),t.designation?Object(v.jsx)(g.a,{children:t.designation}):null,Object(v.jsx)(p.a,{children:t.description})]})]})}var w=function(e){var t=e.dish,s=e.promotion,a=e.leader,c=e.dishesLoading,n=e.dishesErrorMessage;return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row align-items-start",children:[Object(v.jsx)("div",{className:"col-12 col-md m-1",children:s&&Object(v.jsx)(N,{item:s})}),Object(v.jsx)("div",{className:"col-12 col-md m-1",children:a&&Object(v.jsx)(N,{item:a})}),Object(v.jsx)("div",{className:"col-12 col-md m-1",children:t&&Object(v.jsx)(N,{item:t,isLoading:c,errorMessage:n})})]})})},y=s(159),C=s(160),k=s(161),I=function(){return Object(v.jsxs)("div",{className:"col-12 spinner",children:[Object(v.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(v.jsx)("p",{children:"Loading . . ."})]})};function F(e){var t=e.dish,s=e.onClick;return Object(v.jsx)(u.a,{onClick:function(){return s(t.id)},children:Object(v.jsxs)(h.b,{to:"/menu/".concat(t.id),children:[Object(v.jsx)(O.a,{className:"card-picture-menu",src:t.image,alt:t.name}),Object(v.jsx)(y.a,{children:Object(v.jsx)(f.a,{className:"card-title",children:t.name})})]})})}var M=function(e){var t=e.dishes.dishes.map((function(t){return Object(v.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(v.jsx)(F,{dish:t,onClick:e.onClick})},t.id)}));return e.dishes.isLoading?Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)(I,{})})}):e.dishes.errMess?Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("h4",{children:e.dishes.errMess})})})}):Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)(C.a,{children:[Object(v.jsx)(k.a,{children:Object(v.jsx)(h.b,{to:"/home",children:"Home"})}),Object(v.jsx)(k.a,{active:!0,children:"Menu"})]}),Object(v.jsxs)("div",{className:"col-12",children:[Object(v.jsx)("h3",{children:"Menu"}),Object(v.jsx)("hr",{})]})]}),Object(v.jsx)("div",{className:"row",children:t})]})},L=s(162),S=s(163),T=s(178),A=s(164),E=s(165),q=s(166),R=s(167),_=s(168),Z=function(e){var t=e.dishId,s=e.addComment,c=Object(a.useState)(!1),n=Object(j.a)(c,2),i=n[0],r=n[1];console.log(s);var o,l=function(){return r(!i)};return Object(v.jsx)("div",{className:"container mb-2",children:Object(v.jsxs)(L.a,{children:[Object(v.jsxs)(S.a,{outline:!0,color:"secondary",onClick:l,children:[Object(v.jsx)("i",{className:"fa fa-pencil",style:{marginRight:"0.5rem"}}),"Submit Comment"]}),Object(v.jsxs)(T.a,{isOpen:i,toggle:l,children:[Object(v.jsx)(A.a,{toggle:l,children:"Submit Comment"}),Object(v.jsx)(E.a,{children:Object(v.jsxs)(b.LocalForm,{onSubmit:function(e){return function(e){console.log("Current State is: "+JSON.stringify(e)),s(t,e.rating,e.userName,e.userComment)}(e)},children:[Object(v.jsxs)(q.a,{children:[Object(v.jsxs)(L.a,{className:"form-group",children:[Object(v.jsx)(R.a,{htmlFor:"userName",children:"Your name"}),Object(v.jsx)(b.Control.text,{className:"form-control",model:".userName",name:"userName",id:"userName",placeholder:"Your name",validators:{required:function(e){return e&&e.length},minLength:(o=3,function(e){return e&&e.length>=o}),maxLength:function(e){return function(t){return!t||t.length<=e}}(15)}}),Object(v.jsx)(b.Errors,{className:"text-danger",model:".username",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]}),Object(v.jsxs)(L.a,{className:"form-group",children:[Object(v.jsx)(R.a,{htmlFor:"rating",children:"Rating"}),Object(v.jsxs)(b.Control.select,{model:".rating",name:"rating",id:"rating",className:"form-control",children:[Object(v.jsx)("option",{children:"1"}),Object(v.jsx)("option",{children:"2"}),Object(v.jsx)("option",{children:"3"}),Object(v.jsx)("option",{children:"4"}),Object(v.jsx)("option",{children:"5"})]})]}),Object(v.jsxs)(L.a,{className:"mt-3 form-group",children:[Object(v.jsx)(R.a,{htmlFor:"userComment",children:"Your Comment"}),Object(v.jsx)(b.Control.textarea,{model:".userComment",id:"userComment",name:"userComment",rows:"5",className:"form-control"})]})]}),Object(v.jsx)(L.a,{children:Object(v.jsx)(_.a,{sm:2,children:Object(v.jsx)(S.a,{className:"mb-3",type:"submit",color:"primary",onClick:l,children:"Submit"})})})]})})]})]})})};function H(e){var t=e.dish;return Object(v.jsxs)(u.a,{className:"card-description",children:[Object(v.jsx)(O.a,{top:!0,className:"card-desc-picture",src:t.image,alt:t.name}),Object(v.jsxs)(x.a,{children:[Object(v.jsx)(f.a,{tag:"h5",children:t.name}),Object(v.jsx)(p.a,{children:t.description})]})]})}function D(e){return e.comments.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsxs)("blockquote",{children:[Object(v.jsx)("i",{children:e.comment}),Object(v.jsxs)("footer",{children:[Object(v.jsxs)("span",{children:[e.author,", "]}),new Date(e.date).toLocaleDateString()]})]})},e.id)}))}var z=function(e){return e.isLoading?Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)(I,{})})}):e.errorMessage?Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("h4",{children:e.errorMessage})})}):null!=e.dish?Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)(C.a,{children:[Object(v.jsx)(k.a,{children:Object(v.jsx)(h.b,{to:"/menu",children:"Menu"})}),Object(v.jsx)(k.a,{active:!0,children:e.dish.name})]}),Object(v.jsxs)("div",{className:"col-12",children:[Object(v.jsx)("h3",{children:e.dish.name}),Object(v.jsx)("hr",{})]})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-12 col-md-5 m-2",children:Object(v.jsx)(H,{dish:e.dish})}),Object(v.jsxs)("div",{className:"col-12 col-md-5 m-2",children:[Object(v.jsx)("ul",{className:"comments-list",children:Object(v.jsx)(D,{comments:e.comments})}),Object(v.jsx)(Z,{dishId:e.dish.id,addComment:e.addComment})]})]})]}):void 0},J=s(46),U=s(169),P=s(170),W=s(171),B=s(172),Y=s(173),G=s(174),K=s(175),V=s.p+"static/media/logo.23118273.png",Q=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).toggleNav=a.toggleNav.bind(Object(J.a)(a)),a.state={isNavOpen:!1},a}return Object(o.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsx)(U.a,{dark:!0,expand:"md",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(P.a,{onClick:this.toggleNav}),Object(v.jsx)(W.a,{className:"mr-auto",href:"/",children:Object(v.jsx)("img",{src:V,height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(v.jsx)(B.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(v.jsxs)(Y.a,{navbar:!0,children:[Object(v.jsx)(G.a,{children:Object(v.jsxs)(h.c,{className:"nav-link",to:"/home",children:[Object(v.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(v.jsx)(G.a,{children:Object(v.jsxs)(h.c,{className:"nav-link",to:"/aboutus",children:[Object(v.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(v.jsx)(G.a,{children:Object(v.jsxs)(h.c,{className:"nav-link",to:"/menu",children:[Object(v.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(v.jsx)(G.a,{children:Object(v.jsxs)(h.c,{className:"nav-link",to:"/contactus",children:[Object(v.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]})})]})}),Object(v.jsx)(K.a,{className:"jumbotron",style:{backgroundColor:"#9575CD"},children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row row-header",children:Object(v.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(v.jsx)("h1",{children:"Ristorante con Fusion"}),Object(v.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})})]})}}]),s}(a.Component);var $=function(e){return Object(v.jsx)("div",{className:"footer",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"row justify-content-center",children:[Object(v.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(v.jsx)("h5",{children:"Links"}),Object(v.jsxs)("ul",{className:"list-unstyled",children:[Object(v.jsx)("li",{children:Object(v.jsx)(h.b,{to:"/home",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.b,{to:"/aboutus",children:"About Us"})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.b,{to:"/menu",children:"Menu"})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(v.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(v.jsx)("h5",{children:"Our Address"}),Object(v.jsxs)("address",{children:["121, Clear Water Bay Road",Object(v.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(v.jsx)("br",{}),"HONG KONG",Object(v.jsx)("br",{}),Object(v.jsx)("i",{className:"fa fa-phone fa-lg"})," : +852 1234 5678",Object(v.jsx)("br",{}),Object(v.jsx)("i",{className:"fa fa-fax fa-lg"})," : +852 8765 4321",Object(v.jsx)("br",{}),Object(v.jsx)("i",{className:"fa fa-envelope fa-lg"})," : ",Object(v.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(v.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(v.jsxs)("div",{className:"text-center",children:[Object(v.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(v.jsx)("i",{className:"fa fa-google-plus"})}),Object(v.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(v.jsx)("i",{className:"fa fa-facebook"})}),Object(v.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(v.jsx)("i",{className:"fa fa-linkedin"})}),Object(v.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(v.jsx)("i",{className:"fa fa-twitter"})}),Object(v.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(v.jsx)("i",{className:"fa fa-youtube"})}),Object(v.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(v.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsx)("div",{className:"col-auto mt-4",children:Object(v.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})};var X=function(e){var t=function(e){return e&&e.length},s=function(e){return function(t){return!t||t.length<=e}},a=function(e){return function(t){return t&&t.length>=e}};return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)(C.a,{children:[Object(v.jsx)(k.a,{children:Object(v.jsx)(h.b,{to:"/home",children:"Home"})}),Object(v.jsx)(k.a,{active:!0,children:"Contact Us"})]}),Object(v.jsxs)("div",{className:"col-12",children:[Object(v.jsx)("h3",{children:"Contact Us"}),Object(v.jsx)("hr",{})]})]}),Object(v.jsxs)("div",{className:"row row-content",children:[Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("h3",{children:"Location Information"})}),Object(v.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(v.jsx)("h5",{children:"Our Address"}),Object(v.jsxs)("address",{children:["121, Clear Water Bay Road",Object(v.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(v.jsx)("br",{}),"HONG KONG",Object(v.jsx)("br",{}),Object(v.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(v.jsx)("br",{}),Object(v.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(v.jsx)("br",{}),Object(v.jsx)("i",{className:"fa fa-envelope"}),": ",Object(v.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(v.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(v.jsx)("h5",{children:"Map of our Location"})}),Object(v.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(v.jsxs)("div",{className:"btn-group",role:"group",children:[Object(v.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(v.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(v.jsxs)("a",{role:"button",className:"btn btn-info",children:[Object(v.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(v.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(v.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(v.jsxs)("div",{className:"row row-content",children:[Object(v.jsx)("h2",{className:"col-12",children:"Send Us Your Feedback"}),Object(v.jsxs)(b.Form,{model:"feedback",className:"col-12 mt-4",onSubmit:function(t){return function(t){console.log("Current State is: "+JSON.stringify(t)),alert("Current State is: "+JSON.stringify(t)),e.resetFeedbackForm()}(t)},children:[Object(v.jsxs)(L.a,{className:"form-group",children:[Object(v.jsx)(R.a,{htmlFor:"firstname",sm:2,children:"First name"}),Object(v.jsxs)(_.a,{sm:5,children:[Object(v.jsx)(b.Control.text,{className:"form-control",model:".firstname",name:"firstname",id:"firstname",placeholder:"First name",validators:{required:t,minLength:a(3),maxLength:s(15)}}),Object(v.jsx)(b.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(v.jsxs)(L.a,{className:"form-group",children:[Object(v.jsx)(R.a,{htmlFor:"lastname",sm:2,children:"Last name"}),Object(v.jsxs)(_.a,{sm:5,children:[Object(v.jsx)(b.Control.text,{className:"form-control",model:".lastname",name:"lastname",id:"lastname",placeholder:"Last name",validators:{required:t,minLength:a(3),maxLength:s(15)}}),Object(v.jsx)(b.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required. ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(v.jsxs)(L.a,{className:"form-group",children:[Object(v.jsx)(R.a,{htmlFor:"telnum",sm:2,children:"Contact tel."}),Object(v.jsxs)(_.a,{sm:5,children:[Object(v.jsx)(b.Control.text,{className:"form-control",model:".telnum",name:"telnum",id:"telnum",validators:{required:t,minLength:a(3),maxLength:s(15),isNumber:function(e){return!isNaN(Number(e))}}}),Object(v.jsx)(b.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(v.jsxs)(L.a,{className:"form-group",children:[Object(v.jsx)(R.a,{htmlFor:"email",sm:2,children:"Email"}),Object(v.jsxs)(_.a,{sm:5,children:[Object(v.jsx)(b.Control.text,{className:"form-control",model:".email",name:"email",id:"email",validators:{required:t,validEmail:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)}}}),Object(v.jsx)(b.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(v.jsxs)(L.a,{className:"form-group",children:[Object(v.jsx)(_.a,{sm:{size:3,offset:2},children:Object(v.jsxs)(R.a,{check:!0,children:[Object(v.jsx)(b.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"}),Object(v.jsx)("strong",{children:"May we contact you?"})]})}),Object(v.jsx)(_.a,{sm:2,children:Object(v.jsxs)(b.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(v.jsx)("option",{children:"Tel."}),Object(v.jsx)("option",{children:"Email"})]})})]}),Object(v.jsxs)(L.a,{className:"mt-3 form-group",children:[Object(v.jsx)(R.a,{htmlFor:"message",sm:2,children:"Your Feedback"}),Object(v.jsx)(_.a,{sm:5,children:Object(v.jsx)(b.Control.textarea,{model:".message",id:"message",name:"message",rows:"8",className:"form-control"})})]}),Object(v.jsx)(L.a,{className:"form-group",children:Object(v.jsx)(_.a,{sm:{size:10,offset:2},children:Object(v.jsx)(S.a,{className:"mt-3",color:"primary",children:"Send Feedback"})})})]})]})]})},ee=s(176),te=s(177);var se=function(e){var t=e.leaders.map((function(e){return Object(v.jsxs)(ee.a,{className:"mt-3",children:[Object(v.jsx)(ee.a,{left:!0,href:"#",children:Object(v.jsx)(ee.a,{object:!0,className:"leader-image",src:e.image,alt:e.name})}),Object(v.jsxs)(ee.a,{body:!0,className:"p-3",children:[Object(v.jsx)(ee.a,{heading:!0,children:e.name}),"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."]})]})}));return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)(C.a,{children:[Object(v.jsx)(k.a,{children:Object(v.jsx)(h.b,{to:"/home",children:"Home"})}),Object(v.jsx)(k.a,{active:!0,children:"About Us"})]}),Object(v.jsxs)("div",{className:"col-12",children:[Object(v.jsx)("h3",{children:"About Us"}),Object(v.jsx)("hr",{})]})]}),Object(v.jsxs)("div",{className:"row row-content",children:[Object(v.jsxs)("div",{className:"col-12 col-md-6",children:[Object(v.jsx)("h2",{children:"Our History"}),Object(v.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(v.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(v.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(v.jsx)("div",{className:"col-12 col-md-5",children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(te.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(v.jsx)(x.a,{children:Object(v.jsxs)("dl",{className:"row p-1",children:[Object(v.jsx)("dt",{className:"col-6",children:"Started"}),Object(v.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(v.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(v.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(v.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(v.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(v.jsx)("dt",{className:"col-6",children:"Employees"}),Object(v.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)(u.a,{children:Object(v.jsx)(x.a,{className:"bg-faded",children:Object(v.jsxs)("blockquote",{className:"blockquote",children:[Object(v.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(v.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(v.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(v.jsxs)("div",{className:"row row-content",children:[Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)("h2",{children:"Corporate Leadership"})}),Object(v.jsx)("div",{className:"col-12",children:Object(v.jsx)(ee.a,{list:!0,children:t})})]})]})},ae="ADD_COMMENT",ce="DISHES_LOADING",ne="DISHES_FAILED",ie="ADD_DISHES",re=[{id:0,name:"Uthappizza",image:"https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRbWKjMWlO8hkCTmqouC5lsA",category:"mains",label:"Hot",price:"4.99",description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"https://i.ytimg.com/vi/3_7i8hv9XxQ/maxresdefault.jpg",category:"appetizer",label:"",price:"1.99",description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"https://avatars.mds.yandex.net/get-zen_doc/1595469/pub_5f438eb9b6338c5376466fbc_5f438fbfb7d0fb27346cc3c5/scale_1200",category:"appetizer",label:"New",price:"1.99",description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"https://www.zastavki.com/pictures/originals/2018Food___Cakes_and_Sweet_Fresh_cheesecake_with_raspberries_on_a_plate_125252_.jpg",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],oe=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],le=[{id:0,name:"Weekend Grand Buffet",image:"https://cdn.fishki.net/upload/post/2020/02/25/3240102/982535.jpg",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}],de=[{id:0,name:"Colette",image:"https://slovnet.ru/wp-content/uploads/2018/10/3-31.jpg",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"https://i.pinimg.com/originals/69/32/d8/6932d82b3362cfafb1cc169fd59d9b66.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"https://slovnet.ru/wp-content/uploads/2018/10/4-71.jpg",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Remi",image:"https://yt3.ggpht.com/a/AATXAJwQAo_1aAtvtO7odJ8o68A5v_o5JHumRmkTUsI=s900-c-k-c0x00ffffff-no-rj",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],je=function(){return{type:ce}},he=function(e){return{type:ie,payload:e}};var me=Object(h.g)(Object(m.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{addComment:function(t,s,a,c){return e(function(e,t,s,a){return{type:ae,payload:{dishId:e,rating:t,author:s,comment:a}}}(t,s,a,c))},fetchDishes:function(){e((function(e){e(je(!0)),setTimeout((function(){e(he(re))}),2e3)}))},resetFeedbackForm:function(){e(b.actions.reset("feedback"))}}}))((function(e){var t=Object(a.useState)(""),s=Object(j.a)(t,2),c=s[0],n=s[1];return Object(a.useEffect)((function(){e.fetchDishes()}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)(Q,{}),Object(v.jsxs)(h.f,{children:[Object(v.jsx)(h.e,{path:"/home",component:function(){return Object(v.jsx)(w,{dish:e.dishes.dishes.filter((function(e){return e.id===parseInt(c)}))[0],promotion:e.promotions.filter((function(e){return e.featured}))[0],dishesLoading:e.dishes.isLoading,dishesErrorMessage:e.dishes.errMess,leader:e.leaders.filter((function(e){return e.featured}))[0]})}}),Object(v.jsx)(h.e,{path:"/aboutus",component:function(){return Object(v.jsx)(se,{leaders:e.leaders})}}),Object(v.jsx)(h.e,{exact:!0,path:"/menu",component:function(){return Object(v.jsx)(M,{dishes:e.dishes,onClick:function(e){return n(e)}})}}),Object(v.jsx)(h.e,{path:"/contactus",component:function(){return Object(v.jsx)(X,{resetFeedbackForm:e.resetFeedbackForm})}}),Object(v.jsx)(h.e,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(v.jsx)(z,{addComment:e.addComment,dish:e.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],isLoading:e.dishes.isLoading,errorMessage:e.dishes.errMess,comments:e.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)}))})}}),Object(v.jsx)(h.d,{to:"/home"})]}),Object(v.jsx)($,{})]})}))),be=s(19),ue=s(18),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return Object(be.a)(Object(be.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case ce:return Object(be.a)(Object(be.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case ne:return Object(be.a)(Object(be.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:var s=t.payload;return s.id=e.length,s.date=(new Date).toISOString(),e.concat(s);default:return e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;return t.type,e},pe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},ve=s(92),Ne=s(93),we=s.n(Ne),ye=(s(148),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=Object(ue.createStore)(Object(ue.combineReducers)(Object(be.a)({dishes:Oe,comments:xe,promotions:fe,leaders:ge},Object(b.createForms)({feedback:pe}))),Object(ue.applyMiddleware)(ve.a,we.a));return Object(v.jsx)(m.Provider,{store:e,children:Object(v.jsx)(h.a,{children:Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(me,{})})})})}}]),s}(a.Component));s(149),s(150),s(151);i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(ye,{})}),document.getElementById("root"))},98:function(e,t,s){}},[[152,1,2]]]);
//# sourceMappingURL=main.9913ff6e.chunk.js.map