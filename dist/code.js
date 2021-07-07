!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}({0:function(t,e,n){"use strict";var r=n(3),o={name:"default",ignoreClassName:"",token:{}},a={currentIndex:0,isJSX:!1,projects:[o]},i={key:"SACSS",store:a,changeCurrent:function(t){var e=i.getAll();e.currentIndex=t,figma.clientStorage.setAsync(i.key,e)},changeJSX:function(t){var e=i.getAll();e.isJSX=t,figma.clientStorage.setAsync(i.key,e)},remove:function(t){var e=i.getAll();e.currentIndex=0,e.projects.splice(t,1),e.projects.length||e.projects.push(o),figma.clientStorage.setAsync(i.key,e)},addNewProject:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,n=void 0===e?"":e,r=t.token,o=void 0===r?{}:r,a=i.getAll();a.projects.push({name:n,ignoreClassName:"",token:o}),a.currentIndex=a.projects.length-1,figma.clientStorage.setAsync(i.key,a)},editByIndex:function(t){var e=t.data,n=t.index,r=i.getAll(),o=r.projects[n];r.projects[n]={name:e.name,ignoreClassName:e.ignoreClassName,token:e.token?e.token:o.token},figma.clientStorage.setAsync(i.key,r),figma.ui.postMessage({alertMsg:"".concat(e.name," save success")})},replaceByIndex:function(t){var e=t.data,n=t.index,r=i.getAll();r.projects[n]=e||{},figma.clientStorage.setAsync(i.key,r),figma.ui.postMessage({alertMsg:"".concat(e.name," replace success")})},appendToken:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.getCurrent(),n=e.token,r=void 0===n?{}:n;e.token=Object.assign(Object.assign({},r),t),figma.clientStorage.setAsync(i.key,i.store),figma.ui.postMessage({alertMsg:"".concat(e.name," save success")})},isJSX:function(){return!!i.store.isJSX},getAll:function(){return i.store},init:function(){return new Promise((function(t,e){figma.clientStorage.getAsync(i.key).then((function(e){e&&e.projects&&e.projects.length?i.store=e:(figma.clientStorage.setAsync(i.key,a),i.store=a),t(i.getToken())})).catch(e)}))},getCurrent:function(){var t=i.store.currentIndex;return i.store.projects[t]},getToken:function(){var t=(i.getCurrent()||{}).token,e=void 0===t?null:t;return e?JSON.parse(JSON.stringify(e)):null},getInfoById:function(t){if(!t||"string"!=typeof t)return null;var e=(figma.getStyleById(t)||{}).key,n=void 0===e?"":e;return n?(i.getToken()||{})[n]:null},getSelectionTokens:function(t){var e=i.getCurrent()||{},n=e.name,o=void 0===n?"":n,a=e.token,l=void 0===a?{}:a;if(!t)return{getSelectionInfo:{name:o}};var c={};if(r.a.isComponent(t)){var u=r.a.getMainComponent(t),s=u.key,f=u.name,g=u.type,d=l[s]||{};c[s]=Object.assign(Object.assign({},d),{name:f,type:g})}return[t.fillStyleId,t.textStyleId,t.strokeStyleId,t.effectStyleId,t.gridStyleId].forEach((function(t,e){if(!t)return"";var n=figma.getStyleById(t)||{},r=n.key,o=n.name,a=n.type;if(!r)return"";c[r]=Object.assign(Object.assign({},l[r]),{name:o,type:a})})),{getSelectionInfo:{name:o,token:c}}},getAllTokens:function(){var t=figma.root.name,e=figma.root.findAll((function(t){return"COMPONENT_SET"===t.type||"COMPONENT"===t.type&&"COMPONENT_SET"!==t.parent.type})),n={},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.forEach((function(t){n[t.id]={name:t.name,type:t.type}}))};r(e),r(figma.getLocalPaintStyles()),r(figma.getLocalTextStyles()),r(figma.getLocalEffectStyles()),r(figma.getLocalGridStyles()),figma.ui.postMessage({gotAllTokens:{name:t,ignoreClassName:"",token:n}})}};e.a=i},19:function(t,e,n){"use strict";n.r(e);var r=n(3),o={getRgbaByFill:function(t){var e=t.color,n=t.opacity;return t.visible&&0!==n?[parseInt(String(255*e.r)),parseInt(String(255*e.g)),parseInt(String(255*e.b)),String(n).indexOf(".")>-1?n.toFixed(1):n]:null}},a=n(0),i={data:{},init:function(){i.data={}},nameMap:{fs:"font-size",lh:"line-height",ls:"letter-space",ff:"font-family",pt:"padding-top",pr:"padding-right",pb:"padding-bottom",pl:"padding-left",mt:"margin-top",mr:"margin-right",mb:"margin-bottom",ml:"margin-left",h:"height",w:"width",btlr:"border-top-left-radius",btrr:"border-top-right-radius",bbrr:"border-bottom-right-radius",bblr:"border-bottom-left-radius",br:"border-radius"},getClassSelectorByName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.indexOf(".")>-1&&(t=t.replace(/\./g,"\\.")),t.indexOf(":")>-1&&(t=t.replace(/\:/g,"\\:")),t.indexOf("%")>-1&&(t=t.replace(/\%/g,"\\%")),t},getString:function(){var t=i.data;return Object.keys(t).sort().map((function(e){return".".concat(i.getClassSelectorByName(e),"{").concat(t[e],";}")})).join("\n")},add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";if(!t||!e)return"";var r=i.nameMap[t];if(!r)return"";var o=Number(e)?parseFloat(Number(e).toFixed(2)):e,a="px"===n?"":n,l="".concat(t).concat(o).concat(a);return i.data[l]="".concat(r,":").concat(o).concat(n),l},addFontFamily:function(t){if(!t)return"";var e=t.replace(/[\W]/g,"").toLowerCase(),n="ff_".concat(e);return i.data[n]='font-family:"'.concat(t,'"'),n},addColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t&&t.length)return"";var e="c_".concat(t.join(""));return i.data[e]="color:rgba(".concat(t.join(","),")"),e},addBgColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t&&t.length)return"";var e="bc_".concat(t.join(""));return i.data[e]="background-color:rgba(".concat(t.join(","),")"),e}},l=i;function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){l=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},f={getFill:function(t){var e=c(("function"==typeof t.getRangeFills?t.getRangeFills(0,1):t.fills)||[],1)[0];if(!e||"SOLID"!==e.type)return null;var n=o.getRgbaByFill(e);return n?{className:"TEXT"===t.type?l.addColor(n):l.addBgColor(n)}:null},getInfo:function(t){var e="function"==typeof t.getRangeFillStyleId?t.getRangeFillStyleId(0,1):t.fillStyleId,n=a.a.getInfoById(e)||{},r=n.textClassName,o=void 0===r?"":r,i=n.className,l=void 0===i?"":i,c=s(n,["textClassName","className"]),u="TEXT"===t.type?o:l;return u?Object.assign({className:u},c):f.getFill(t)}},g=f;function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var p={unitMap:{PERCENT:"%"},getFontNameClassByStyle:function(t){if("string"!=typeof t||!t)return"";var e={ULTRALIGHT:"fw100",THIN:"fw200",LIGHT:"fw300",REGULAR:"",MEDIUM:"fw500",SEMIBOLD:"fw600",BOLD:"fw700",BLACK:"fw900",ITALIC:"fsi",OBLIQUE:"fsi"};return t.split(" ").map((function(t){return e[t.toUpperCase()]||""})).filter((function(t){return t})).join(" ")},getPropByNode:function(t,e){var n={textCase:"getRangeTextCase",lineHeight:"getRangeLineHeight",letterSpacing:"getRangeLetterSpacing",fontSize:"getRangeFontSize",textDecoration:"getRangeTextDecoration",fontName:"getRangeFontName",fills:"getRangeFills",textStyleId:"getRangeTextStyleId"};return"symbol"===d(t[e])&&n[e]&&"function"==typeof t[n[e]]?t[n[e]](0,1):t[e]},getACSSSInfo:function(t){var e=[],n=p.getPropByNode(t,"fontSize");n>1&&e.push(l.add("fs",n));var r=p.getPropByNode(t,"lineHeight");if(null==r?void 0:r.value){var o=r.value,a=r.unit;e.push(l.add("lh",o,p.unitMap[a]))}var i=p.getPropByNode(t,"letterSpacing");if(null==i?void 0:i.value){var c=i.value,u=i.unit;e.push(l.add("ls",c,p.unitMap[u]))}var s=p.getPropByNode(t,"fontName"),f=p.getFontNameClassByStyle(s.style);f&&e.push(f),(null==s?void 0:s.family)&&e.push(l.addFontFamily(s.family));var g={LEFT:"",CENTER:"tac",RIGHT:"tar",JUSTIFIED:"taj"}[t.textAlignHorizontal];g&&e.push(g);var d={TOP:"",CENTER:"vam",BOTTOM:"vab"}[t.textAlignVertical];d&&e.push(d);var m={ORIGINAL:"",UPPER:"ttu",LOWER:"ttl",TITLE:"ttc"}[p.getPropByNode(t,"textCase")];m&&e.push(m);var y={NONE:"",UNDERLINE:"tdu",STRIKETHROUGH:"tdl"}[p.getPropByNode(t,"textDecoration")];y&&e.push(y);var v=e.join(" "),h=["fw500","fw600","fw700","fw800","fw900"].findIndex((function(t){return v.indexOf(t)>-1}))>-1;return{className:v,tagName:h?"strong":"span"}},getTextChildren:function(t){var e=t.characters,n=void 0===e?"":e,r=n.split("\n").filter((function(t){return t.trim()}));if(r.length>1){var o=t.paragraphSpacing>0?l.add("mb",t.paragraphSpacing):"";return r.map((function(t,e){return{tagName:"p",className:e===r.length-1?"":o,children:[t]}}))}return[n]},getInfo:function(t){if("TEXT"!==t.type)return null;var e=p.getPropByNode(t,"textStyleId"),n=a.a.getInfoById(e)||{},r=p.getACSSSInfo(t);return{className:n.className||r.className||"",tagName:n.tagName||r.tagName||"",ignoreClassName:n.ignoreClassName||""}}},m=p,y={getInfo:function(t){return a.a.getInfoById(t.strokeStyleId)}},v={getInfo:function(t){return a.a.getInfoById(t.gridStyleId)}},h={isFlex:function(t){return!(["TEXT"].indexOf(t.type)>-1)&&"NONE"!==(null==t?void 0:t.layoutMode)},getThisInfo:function(t){if(!h.isFlex(t))return null;var e=t.layoutMode,n=t.primaryAxisAlignItems,r=t.counterAxisAlignItems,o=t.children;if(!(void 0===o?[]:o).length)return null;var a=[];return"VERTICAL"===e?a.push({CENTER:"tac",MAX:"tar"}[r]):(a.push({CENTER:"jcc",MAX:"jcfe",SPACE_BETWEEN:"jcsb"}[n]||""),a.push({CENTER:"aic",MAX:"aife"}[r]||""),a.push("df")),{className:a.join(" ")}},getInfoFromParent:function(t){var e=t.parent;if(!e||!h.isFlex(e))return null;var n=e.layoutMode,r=e.primaryAxisAlignItems,o=e.itemSpacing;if("SPACE_BETWEEN"===r)return null;var a=[],i=[],c=(e.children.filter((function(t){return t.visible})).pop()||{}).id,u=(void 0===c?"":c)===t.id;if("VERTICAL"===n&&a.push("db"),o>0&&!u){a.push(l.add({VERTICAL:"mb",HORIZONTAL:"mr"}[n],o))}return 1===t.layoutGrow&&(a.push("f1"),i.push("w".concat(t.width))),{className:a.join(" "),ignoreClassName:i.join(" ")}},getInfo:function(t){var e=h.getThisInfo(t)||{},n=e.className,r=void 0===n?"":n,o=e.ignoreClassName,a=void 0===o?"":o,i=h.getInfoFromParent(t)||{},l=i.className,c=void 0===l?"":l,u=i.ignoreClassName,s=void 0===u?"":u;return{className:"".concat(r," ").concat(c),ignoreClassName:"".concat(a," ").concat(s)}}},S=h,N={isBlock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=["div","h1","h2","h3","h4","h5","h6","p"];return e.indexOf(t)>-1},isSelfTag:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=["img","link","meta","br","br","hr","input","col","frame","area","param","object","embed","keygen","source"];return e.indexOf(t)>-1},clearClassName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return"";var n=t.split(" "),r=[];return n.forEach((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&"null"!==t&&-1===r.indexOf(t)&&-1===e.indexOf(t)&&r.push(t)})),r.join(" ")}},b={getInfo:function(t){return a.a.getInfoById(t.effectStyleId)}};function I(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var T={gerBorderRadiusClassName:function(t){var e=t.topLeftRadius||0,n=t.topRightRadius||0,r=t.bottomRightRadius||0,o=t.bottomLeftRadius||0;if(e+n+r+o===0)return[];if(e===n&&e===r&&e===o)return[l.add("br",e)];var a=[];return e&&a.push(l.add("btlr",e)),n&&a.push(l.add("btrr",n)),r&&a.push(l.add("bbrr",r)),o&&a.push(l.add("bblr",o)),a},getPaddingClassName:function(t){return[t.paddingTop>1?l.add("pt",t.paddingTop):"",t.paddingRight>1?l.add("pr",t.paddingRight):"",t.paddingBottom>1?l.add("pb",t.paddingBottom):"",t.paddingLeft>1?l.add("pl",t.paddingLeft):""]},getInfo:function(t){var e=T.getPaddingClassName(t),n=T.gerBorderRadiusClassName(t);return{className:[].concat(I(e),I(n)).join(" ")}}},O=T;function A(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var x=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},E={extendInfo:function(t,e){if(!e)return t;var n=t.className,r=void 0===n?"":n,o=t.ignoreClassName,a=void 0===o?"":o,i=t.componentProps,l=void 0===i?"":i,c=(t.props,t.htmlProps),u=void 0===c?"":c,s=x(t,["className","ignoreClassName","componentProps","props","htmlProps"]),f=e.className,g=void 0===f?"":f,d=e.ignoreClassName,p=void 0===d?"":d,m=e.componentProps,y=void 0===m?"":m,v=(e.props,e.htmlProps),h=void 0===v?"":v,S=(e.children,x(e,["className","ignoreClassName","componentProps","props","htmlProps","children"]));return Object.assign(Object.assign({className:"".concat(r," ").concat(g).trim(),ignoreClassName:"".concat(a," ").concat(p).trim(),htmlProps:"".concat(u," ").concat(h).trim(),componentProps:"".concat(l," ").concat(y).trim()},s),S)},isStructNode:function(t){if(t.name.startsWith("#"))return!0;var e=["RECTANGLE","VECTOR","STAR","LINE","POLYGON","ELLIPSE","SLICE"];if(e.indexOf(t.type)>-1)return!0;if("TEXT"===t.type)return!1;var n=t.children,r=void 0===n?[]:n;return!r.length||!r.find((function(t){return t.visible&&-1===e.indexOf(t.type)}))},isRenderChildren:function(t){return"INSTANCE"!==t.type&&"COMPONENT"!==t.type||t.children.length,!1},getNodeInfo:function(t){if(!t.visible||t.name.startsWith("_"))return null;if(E.isRenderChildren(t))return E.getNodeInfo(t.children[0]);var e=E.isStructNode(t),n={ignoreClassName:"",className:"",children:[]};e&&(n.tagName="i");var o=r.a.getInfo(t),i=g.getInfo(t),c=m.getInfo(t),u=y.getInfo(t),s=v.getInfo(t),f=b.getInfo(t),d=O.getInfo(t),p=S.getInfo(t);n=E.extendInfo(n,i),n=E.extendInfo(n,c),n=E.extendInfo(n,u),n=E.extendInfo(n,s),n=E.extendInfo(n,f),n=E.extendInfo(n,o),n=E.extendInfo(n,p),n=E.extendInfo(n,d),(e&&"0"!==String(null==n?void 0:n.renderHeight)||"1"===String(null==n?void 0:n.renderWidth))&&(n.className+=" "+l.add("w",parseInt(String(t.width)))),(e&&"0"!==String(null==n?void 0:n.renderHeight)||"1"===String(null==n?void 0:n.renderHeight))&&(n.className+=" "+l.add("h",parseInt(String(t.height)))),n.children=function(){var r;if("TEXT"===t.type){var a=m.getTextChildren(t);return"p"===(null===(r=a[0])||void 0===r?void 0:r.tagName)&&(n.tagName="div"),a}var i=(o||{}).renderChildren,l=void 0===i?1:i;return e||"0"===String(l)?[]:"2"===String(l)?t.findAll((function(t){return"TEXT"===t.type&&t.visible})).map((function(t){return t.characters})):E.getNodesInfo(t.children)}();var h=(a.a.getCurrent()||{}).ignoreClassName,I=void 0===h?"":h;if(n.className=N.clearClassName(n.className,"".concat(n.ignoreClassName," ").concat(I)),delete n.ignoreClassName,1===n.children.length){var C=n.children[0];if(C.tagName===n.tagName&&!n.componentName&&!C.componentName)return C.className=N.clearClassName("".concat(C.className," ").concat(n.className)),C}return n},sort:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return A(t).sort((function(t,e){var n=t.y+t.height,r=e.y+e.height;return t.y===e.y?t.x-e.x:n-r}))},getNodesInfo:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[],n=E.sort(t),r=0,o=n.length;r<o;r++){var a=E.getNodeInfo(n[r]);a&&(a instanceof Array?e=[].concat(A(e),A(a)):e.push(a))}return e}},P=E,w={getPropsString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.className,n=void 0===e?"":e,r=t.props,o=void 0===r?"":r,a=[],i=n?n.split(" "):[];return i.length&&a.push('class="'.concat(i.join(" "),'"')),o&&a.push(o.trim()),a.join(" ")},getItemDom:function(t){if(!t)return"";if("string"==typeof t)return t;var e=t.children,n=void 0===e?[]:e,r=t.htmlProps,o=void 0===r?"":r,a=t.className,i=void 0===a?"":a,l=t.tagName||"div",c=w.getPropsString({props:o,className:i}),u="".concat(l).concat(c?" ".concat(c):"");return N.isSelfTag(l)?"<".concat(u,"/>"):n.length?"<".concat(u,">").concat(w.getDomByArray(n),"</").concat(l,">"):"<".concat(u,"></").concat(l,">")},getDomByArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((function(t){return w.getItemDom(t)})).join("")}},R=w,k={getPropsString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.className,n=void 0===e?"":e,r=t.props,o=void 0===r?"":r,a=[],i=n?n.split(" "):[];return i.length&&a.push('className="'.concat(i.join(" "),'"')),o&&a.push(o.trim()),a.join(" ")},getItemDom:function(t){if(!t)return"";if("string"==typeof t)return t;var e=t.children,n=void 0===e?[]:e,r=t.componentProps,o=void 0===r?"":r,a=t.className,i=void 0===a?"":a,l=t.componentName||t.tagName||"div",c=k.getPropsString({props:o,className:i}),u="".concat(l).concat(c?" ".concat(c):"");return N.isSelfTag(l)?"<".concat(u,"/>"):n.length?"<".concat(u,">").concat(k.getDomByArray(n),"</").concat(l,">"):t.componentName?"<".concat(u,"/>"):"<".concat(u,"></").concat(l,">")},getDomByArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((function(t){return k.getItemDom(t)})).join("")}},B=k,M={render:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return e?B.getDomByArray(t):R.getDomByArray(t)}};function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){l=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var H={tabIndex:0,getSelection:function(){var t=figma.currentPage.selection;return t.length?t:(figma.ui.postMessage({noSelection:!0}),null)},onTabChange:function(t){var e=H.tabIndex;if(H.tabIndex=t,0!==e&&1!==e||0!==t&&1!==t){var n=["runHome","runHome","runToken","runConfig"][t];n&&H[n]()}},run:function(){var t=["runHome","runHome","runToken",""][H.tabIndex];t&&H[t]()},runHome:function(){var t=H.getSelection();if(t){l.init();var e=P.getNodesInfo(t),n=a.a.isJSX();setTimeout((function(){figma.ui.postMessage({getHTML:M.render(e,n),getCSS:l.getString(),isJSX:n,noSelection:!1})}),16)}},runConfig:function(){setTimeout((function(){figma.ui.postMessage({getConfig:a.a.getAll()})}),10)},runToken:function(){var t=L(H.getSelection()||[],1)[0];setTimeout((function(){figma.ui.postMessage(a.a.getSelectionTokens(t))}),16)},onmessage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.type,n=void 0===e?null:e,r=t.value,o=void 0===r?null:r;if(null!==n){var i=n.split("."),l=L(i,2),c=l[0],u=l[1];if("API"===c&&u in H)H[u](o);else if("CONFIG"===c&&u in a.a){if(a.a[u](o),"changeJSX"===u)return void H.runHome();if("appendToken"===u)return void H.runToken();H.runConfig()}}}};a.a.init().then((function(){figma.showUI(__html__,{width:400,height:600}),H.run(),figma.on("selectionchange",(function(){H.run()})),figma.ui.onmessage=H.onmessage}))},3:function(t,e,n){"use strict";var r=n(0);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){l=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i={isComponent:function(t){return"INSTANCE"===t.type||"COMPONENT"===t.type},getMainComponent:function(t){return"COMPONENT_SET"===t.type||"COMPONENT"===t.type?t:t.mainComponent},getComponentId:function(t){var e=(i.getMainComponent(t)||{}).key;return void 0===e?"":e},stringToComponentName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.trim();if(!e)return"";var n=e.replace(/[\W]/g,""),r=n.charAt(0).toUpperCase();return 1===n.length?r:r+n.slice(1)},getComponentPropsByString:function(t){var e={};t&&"string"==typeof t&&t.replace(/\"/g,"").replace(/\'/g,"").split(",").forEach((function(t){var n=o(t.split("="),2),r=n[0],a=n[1],i=String(a).trim();"false"!==i&&(e[String(r).trim()]=a?i:"true")}));return e},getInfo:function(t){var e=i.getComponentId(t),n=e?r.a.getToken()[e]:"";return n?(n.props=Object.assign({},i.getComponentPropsByString(n.props||"")),"renderChildren"in n||(n.renderChildren="1"),"renderWidth"in n||(n.renderWidth="1"),"renderHeight"in n||(n.renderHeight="1"),n):null}};e.a=i}});