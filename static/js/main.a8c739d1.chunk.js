(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){},78:function(e,t,n){},81:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(13),r=n.n(c),o=(n(73),n(74),n(14)),i=n(37),s=n(23),u=n(22),l=(n(78),function(e){return e.country}),p=Object(u.a)([l],(function(e){return e.countryInfo})),j=Object(u.a)([l],(function(e){return e.countryWeather})),d=Object(u.a)([l],(function(e){return e.isCountryFetching})),b=Object(u.a)([l],(function(e){return e.isWeatherFetching})),h=n(118),O=n(122),C=n(123),g=n(126),f=n(125),x=n(124),m=n(127),E=n(87),T=n(120),y=n(4),v=Object(h.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)},justifyContent:"center",alignItems:"center",alignContent:"center"}}}));function S(){var e=v();return Object(y.jsx)("div",{className:e.root,children:Object(y.jsx)(T.a,{})})}var _=Object(h.a)({root:{maxWidth:345},media:{height:140,width:345}});var F=Object(u.b)({isFetching:d}),R=Object(s.b)(F)((function(e){var t=e.CountryName,n=e.Capital,a=e.Population,c=e.LatLong,r=e.CountryFlag,o=e.handelClick,i=e.isFetching,s=_();return i?Object(y.jsx)(S,{}):void 0!==t?Object(y.jsxs)(O.a,{className:s.root,children:[Object(y.jsxs)(C.a,{children:[Object(y.jsx)(x.a,{className:s.media,image:r,title:"Country Flag"}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)(E.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t}),Object(y.jsx)(E.a,{variant:"body2",color:"textSecondary",component:"p",children:"Capital - ".concat(n)}),Object(y.jsx)(E.a,{variant:"body2",color:"textSecondary",component:"p",children:"Population - ".concat(a)}),Object(y.jsx)(E.a,{variant:"body2",color:"textSecondary",component:"p",children:"Latitude / Longitude - ".concat(c[0],",").concat(c[1])})]})]}),Object(y.jsx)(g.a,{children:Object(y.jsx)(m.a,{size:"small",color:"primary",onClick:o,children:"See Weather"})})]}):Object(y.jsx)("div",{className:"No-Item-Container",children:"Search for a country..."})})),H=n(62),W=n(7),A=n(134),w=n(128),N=n(130),k=n(131),U=n(129),I=n(60),L=n.n(I),P={FETCH_COUNTRY_START:"FETCH_COUNTRY_START",FETCH_COUNTRY_SUCCESS:"FETCH_COUNTRY_SUCCESS",FETCH_COUNTRY_FAILURE:"FETCH_COUNTRY_FAILURE",FETCH_WEATHER_START:"FETCH_WEATHER_START",FETCH_WEATHER_SUCCESS:"FETCH_WEATHER_SUCCESS",FETCH_WEATHER_FAILURE:"FETCH_WEATHER_FAILURE"},Y=function(e){return{type:P.FETCH_WEATHER_SUCCESS,payload:e}},B=Object(h.a)({paperWidthSm:{minWidth:230,width:230}}),D={padding:"70px"},K=Object(W.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,a=e.onClose,c=Object(H.a)(e,["children","classes","onClose"]);return Object(y.jsxs)(w.a,Object(o.a)(Object(o.a)({disableTypography:!0,className:n.root},c),{},{children:[Object(y.jsx)(E.a,{variant:"h6",children:t}),a?Object(y.jsx)(U.a,{"aria-label":"close",className:n.closeButton,onClick:a,children:Object(y.jsx)(L.a,{})}):null]}))})),M=Object(W.a)((function(e){return{root:{padding:e.spacing(2)}}}))(N.a),z=Object(W.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(k.a);var V=Object(u.b)({weatherValues:j,isFetching:b}),J=Object(s.b)(V,(function(e){return{fetchWeatherStart:function(){return e({type:P.FETCH_WEATHER_START})}}}))((function(e){var t=e.open,n=e.handleClose,c=e.fetchWeatherStart,r=e.weatherValues,o=e.isFetching,i=B(),s=r.Temperature,u=r.WeatherIcons,l=r.WindSpeed,p=r.Precip;return Object(a.useEffect)((function(){c()}),[c]),Object(y.jsx)("div",{children:Object(y.jsxs)(A.a,{classes:{paperWidthSm:i.paperWidthSm},onClose:n,"aria-labelledby":"customized-dialog-title",open:t,children:[Object(y.jsx)(K,{id:"customized-dialog-title",onClose:n,children:"Current Weather"}),o?Object(y.jsx)(S,{}):Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{style:D,src:u,alt:"item"}),Object(y.jsxs)(M,{dividers:!0,children:[Object(y.jsxs)(E.a,{gutterBottom:!0,children:["Temperature - ",s]}),Object(y.jsxs)(E.a,{gutterBottom:!0,children:["WindSpeed - ",l]}),Object(y.jsxs)(E.a,{gutterBottom:!0,children:["Precip - ",p]})]})]}),Object(y.jsx)(z,{children:Object(y.jsx)(m.a,{autoFocus:!0,onClick:n,color:"primary",children:"Close"})})]})})})),q=Object(u.b)({country:p}),G=Object(s.b)(q)((function(e){var t=e.country,n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(y.jsxs)("div",{className:"landing-page-container",children:[Object(y.jsx)(R,Object(o.a)(Object(o.a)({},t),{},{handelClick:function(){s(!0)}})),!0===r?Object(y.jsx)(J,{open:r,handleClose:function(){s(!1)}}):null]})})),Q=n(27),X=n(15),Z=n(132),$=n(133),ee=n(135),te=n(47),ne=n.n(te),ae=Object(h.a)((function(e){return{toolBarStyle:{justifyContent:"space-around"},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(Q.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(Q.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(X.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(X.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(Q.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"50ch"}),sectionDesktop:Object(Q.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(Q.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function ce(e){var t=e.handelChange,n=e.value,a=e.handelSubmit,c=e.isDisabled,r=e.handelEnterPress,o=ae();return Object(y.jsx)("div",{className:o.grow,children:Object(y.jsx)(Z.a,{position:"static",children:Object(y.jsxs)($.a,{className:o.toolBarStyle,children:[Object(y.jsx)(E.a,{className:o.title,variant:"h6",noWrap:!0,children:"Weather App"}),Object(y.jsxs)("div",{className:o.search,children:[Object(y.jsx)("div",{className:o.searchIcon,children:Object(y.jsx)(ne.a,{})}),Object(y.jsx)(ee.a,{placeholder:"Search\u2026",classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"},onChange:t,value:n,onKeyPress:r})]}),Object(y.jsx)("div",{className:o.sectionDesktop,children:Object(y.jsxs)(m.a,{variant:"contained",color:"primary","aria-controls":"primary-search-account-menu",onClick:a,disabled:c,children:[Object(y.jsx)(ne.a,{}),"Search"]})}),Object(y.jsx)("div",{className:o.sectionMobile,children:Object(y.jsx)(U.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",color:"inherit",onClick:a,disabled:c,children:Object(y.jsx)(ne.a,{})})})]})})})}n(81);var re=Object(s.b)(null,(function(e){return{fetchCountryStart:function(t){return e(function(e){return{type:P.FETCH_COUNTRY_START,payload:e}}(t))}}}))((function(e){var t=e.fetchCountryStart,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(!0),u=Object(i.a)(s,2),l=u[0],p=u[1];Object(a.useEffect)((function(){p(!(r.length>0))}),[r]);var j=function(e){e.preventDefault(),t(r)};return Object(y.jsx)("div",{className:"header-container",children:Object(y.jsx)(ce,{handelChange:function(e){e.preventDefault(),o(e.target.value)},handelSubmit:j,value:r,isDisabled:l,handelEnterPress:function(e){"Enter"===e.key&&j(e)}})})}));var oe=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(re,{}),Object(y.jsx)(G,{})]})},ie=n(29),se=(n(82),n(61)),ue={countryInfo:{},countryWeather:{},isCountryFetching:!1,isWeatherFetching:!1,errorMessage:""},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.FETCH_COUNTRY_START:return Object(o.a)(Object(o.a)({},e),{},{isCountryFetching:!0});case P.FETCH_WEATHER_START:return Object(o.a)(Object(o.a)({},e),{},{isWeatherFetching:!0});case P.FETCH_COUNTRY_SUCCESS:return Object(o.a)(Object(o.a)({},e),{},{countryInfo:t.payload,isCountryFetching:!1,errorMessage:""});case P.FETCH_WEATHER_SUCCESS:return Object(o.a)(Object(o.a)({},e),{},{countryWeather:t.payload,isWeatherFetching:!1,errorMessage:""});case P.FETCH_COUNTRY_FAILURE:case P.FETCH_WEATHER_FAILURE:return Object(o.a)(Object(o.a)({},e),{},{isCountryFetching:!1,isWeatherFetching:!1,errorMessage:t.payload});default:return e}},pe=Object(ie.b)({country:le}),je=n(17),de=n.n(je),be=n(18),he=de.a.mark(me),Oe=de.a.mark(Ee),Ce=de.a.mark(Te),ge=de.a.mark(ye),fe=de.a.mark(ve);var xe=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEATHERSTACK_API_KEY;function me(e){var t,n;return de.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,console.log("In fetchCountryAsync, searching -",e.payload);case 2:return a.prev=2,a.next=5,fetch("http://restcountries.eu/rest/v2/name/".concat(e.payload)).then((function(e){return e.json()}));case 5:return t=a.sent,a.next=8,console.log(t.length);case 8:if(1!==t.length){a.next=14;break}return a.next=11,{CountryName:t[0].name,Capital:t[0].capital,Population:t[0].population,LatLong:t[0].latlng,CountryFlag:t[0].flag};case 11:n=a.sent,a.next=18;break;case 14:if(!(t.length>1)){a.next=18;break}return a.next=17,{CountryName:t[1].name,Capital:t[1].capital,Population:t[1].population,LatLong:t[1].latlng,CountryFlag:t[1].flag};case 17:n=a.sent;case 18:return a.next=20,Object(be.c)({type:P.FETCH_COUNTRY_SUCCESS,payload:n});case 20:a.next=26;break;case 22:return a.prev=22,a.t0=a.catch(2),a.next=26,Object(be.c)((c=a.t0.message,{type:P.FETCH_COUNTRY_FAILURE,payload:c}));case 26:case"end":return a.stop()}var c}),he,null,[[2,22]])}function Ee(){var e,t,n,a;return de.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,console.log("In fetchWeatherAsync - ",xe);case 2:return c.prev=2,e="0fa642cd1eb503e292950eae74246c2d",c.next=6,Object(be.d)(p);case 6:return t=c.sent,c.next=9,fetch("http://api.weatherstack.com/current?access_key=".concat(e,"&query=").concat(t.CountryName)).then((function(e){return e.json()}));case 9:return n=c.sent,a={Temperature:n.current.temperature,WeatherIcons:n.current.weather_icons,WindSpeed:n.current.wind_speed,Precip:n.current.precip},c.next=13,Object(be.c)(Y(a));case 13:c.next=19;break;case 15:return c.prev=15,c.t0=c.catch(2),c.next=19,Object(be.c)((r=c.t0.message,{type:P.FETCH_WEATHER_FAILURE,payload:r}));case 19:case"end":return c.stop()}var r}),Oe,null,[[2,15]])}function Te(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.e)(P.FETCH_COUNTRY_START,me);case 2:case"end":return e.stop()}}),Ce)}function ye(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.e)(P.FETCH_WEATHER_START,Ee);case 2:case"end":return e.stop()}}),ge)}function ve(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.a)([Object(be.b)(Te),Object(be.b)(ye)]);case 2:case"end":return e.stop()}}),fe)}var Se=de.a.mark(_e);function _e(){return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.a)([Object(be.b)(ve)]);case 2:case"end":return e.stop()}}),Se)}var Fe=Object(se.a)(),Re=[Fe];var He=Object(ie.d)(pe,ie.a.apply(void 0,Re));Fe.run(_e);var We=He;r.a.render(Object(y.jsx)(s.a,{store:We,children:Object(y.jsx)(oe,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.a8c739d1.chunk.js.map