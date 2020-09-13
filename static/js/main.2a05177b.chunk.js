(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(5),c=a.n(i),s=(a(12),a(2)),o=(a(13),a(3)),l=a.n(o),u=a(6),m="def7c8667a42018923e351364064d95d";function d(e){if(!e)return"";switch(e){case"metric":return"&units=metric";case"imperial":return"&units=imperial";default:return""}}function p(){return(p=Object(u.a)(l.a.mark((function e(t,a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}throw new Error("No location provided");case 2:if("string"==typeof a){e.next=4;break}throw new Error("city must be a string");case 4:return r="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(m).concat(d(n)),e.abrupt("return",fetch(r).then((function(e){return e.json()})).then((function(e){if("404"===e.cod)throw new Error("Wrong url format or location (".concat(a,")"));return t(e)})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){if(!e)throw new Error("Empty data given");function t(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.timezone;return new Date(1e3*t+1e3*a)}try{return{location:{localDate:t(e.dt),lon:e.coord.lon,lat:e.coord.lat,city:e.name,country:e.sys.country,sunrise:t(e.sys.sunrise),sunset:t(e.sys.sunset)},condition:e.weather.map((function(t){return{name:e.weather[0].main,description:e.weather[0].description}})),wind:{speed:e.wind.speed,direction:e.wind.deg},temp:e.main.temp,feelsLike:e.main.feels_like,pressure:e.main.pressure,humidity:e.main.humidity,cloudiness:e.clouds.all,visibility:e.visibility/1e3}}catch(a){throw new Error("Illegal data format.")}}var w,E=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;function h(e,t){return"string"===typeof t&&E.test(t)?new Date(t):t}function g(){return new Date-new Date(sessionStorage.getItem("LAST_STORED_TIME"))<6e5}function y(e){return sessionStorage.getItem("LAST_STORED_UNITS")!=e}function v(e){return e!==sessionStorage.getItem("LAST_STORED_LOCATION")}var _=a(1);a(15),a(16);function S(e){var t=e.name,a=e.values,n=e.def,i=e.changeHandler;Object(_.a)(e,["name","values","def","changeHandler"]);return r.a.createElement("div",{className:"radio"},a.map((function(e){return function(e){var a;return"object"===typeof e?(e.label,a=e.value):"string"===typeof e&&(a=e),r.a.createElement("label",{className:"radio__container",key:a},r.a.createElement("input",{type:"radio",name:t,value:a,checked:a===n,onChange:i}),r.a.createElement("span",{className:"radio__button"},a))}(e)})))}function N(e){var t=e.city,a=e.country,i=e.date,c=e.locationSetter,o=e.units,l=e.unitsSetter,u=Object(_.a)(e,["city","country","date","locationSetter","units","unitsSetter"]),m=Object(n.useState)(!1),d=Object(s.a)(m,2),p=d[0],f=d[1];function w(e){"Enter"===e.key||13===e.keyCode?(c(e.target.value),f(!1)):27!==e.keyCode&&"Escape"!==e.key||f(!1)}return r.a.createElement("header",Object.assign({className:"header"},u),r.a.createElement("div",{className:"header__layout"},p?r.a.createElement("input",{autoFocus:!0,type:"text",className:"location-input",placeholder:t,onKeyUp:w,onBlur:function(e){f(!1)}}):r.a.createElement("span",{className:"header__location",onClick:function(){return f(!0)}},t,", ",a),r.a.createElement("span",{className:"header__date"},i.toLocaleString())),r.a.createElement(S,{name:"units",values:["metric","imperial"],def:o,changeHandler:function(e){l(e.target.value)}}))}a(17);function b(e){var t=e.acutalTemp,a=e.feelsLike,n=e.units;Object(_.a)(e,["acutalTemp","feelsLike","units"]);function i(){switch(n){case"metric":return"\xb0C";case"imperial":return"\xb0F";default:return"\xb0K"}}return r.a.createElement("div",{className:"temp-widget"},r.a.createElement("div",null,r.a.createElement("h1",{className:"temp-widget__view"},parseFloat(t).toFixed(0),i()),r.a.createElement("span",{className:"temp-widget__feels-like"},"Feels like:\xa0",parseFloat(a).toFixed(0),i())))}a(18);function O(e){var t=e.windSpeed,a=e.windDirection,n=e.units;Object(_.a)(e,["windSpeed","windDirection","units"]);return r.a.createElement("div",{className:"wind-widget"},r.a.createElement("div",{className:"wind-widget__gauge"},r.a.createElement("span",{className:"wind-widget__label nord"},"N"),r.a.createElement("span",{className:"wind-widget__label east"},"E"),r.a.createElement("span",{className:"wind-widget__label south"},"S"),r.a.createElement("span",{className:"wind-widget__label west"},"W"),r.a.createElement("div",{className:"arrow",style:{transform:"rotate(".concat(a,"deg)")}},r.a.createElement("div",{className:"arrow__top"}))),r.a.createElement("h3",{className:"wind-widget__speed"},t," ",function(){switch(n){case"metric":return"m/s";case"imperial":return"mph";default:return""}}()))}function T(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)("imperial"),o=Object(s.a)(c,2),l=o[0],u=o[1],m=Object(n.useState)("Odessa"),d=Object(s.a)(m,2),E=d[0],_=d[1];return Object(n.useEffect)((function(){!g()||v(E)||y(l)?function(e,t,a){return p.apply(this,arguments)}(f,E,l).then((function(e){i(e),function(e,t){sessionStorage.setItem("LAST_STORED_TIME",e.location.localDate),sessionStorage.setItem("CURRENT_WEATHER",JSON.stringify(e)),sessionStorage.setItem("LAST_STORED_LOCATION",e.location.city),sessionStorage.setItem("LAST_STORED_UNITS",t)}(e)})):i(function(){if(g()&&w)return w;var e=sessionStorage.getItem("CURRENT_WEATHER");return w=JSON.parse(e,h)}())}),[E,l]),a?r.a.createElement("div",{className:"App"},r.a.createElement("main",null,r.a.createElement(N,{country:a.location.country,city:a.location.city,date:(new Date).toLocaleString(),locationSetter:_,units:l,unitsSetter:u}),r.a.createElement("div",null,r.a.createElement("span",{className:"condition"},a.condition.map((function(e,t){return t!==a.condition.length-1?e.description+", ":e.description+"."}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"widget-layout"},r.a.createElement(b,{acutalTemp:a.temp,feelsLike:a.feelsLike,units:l}),r.a.createElement("div",{className:"weather-data"},r.a.createElement("span",{className:"label"},"Humidity: ",a.humidity,"%"),r.a.createElement("span",{className:"label"},"Pressure: ",a.pressure," hPa"),r.a.createElement("span",{className:"label"},"Visibility: ",a.visibility," km"),r.a.createElement("span",{className:"label"},"Cloudiness: ",a.cloudiness," %")),r.a.createElement(O,{windDirection:a.wind.direction,units:l,windSpeed:a.wind.speed})),r.a.createElement("hr",null)))):r.a.createElement("h1",null,"No data")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.2a05177b.chunk.js.map