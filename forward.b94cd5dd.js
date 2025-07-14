var e=globalThis,r={},a={},o=e.parcelRequiree4f4;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var o=a[e];delete a[e];var t={id:e,exports:{}};return r[e]=t,o.call(t.exports,t,t.exports),t.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){a[e]=r},e.parcelRequiree4f4=o),(0,o.register)("krWs1",function(e,r){var a=window,o=new URLSearchParams(a.location.search).get("url");if(o){let e=new URL(o);e.search=a.location.search,e.hash=a.location.hash,a.confirm(`Open redirect notice 

This page is sending you to an other page and forwards all URL paramaters and the hash:

${e.hostname}

By clicking OK you risk that your tokens are hijacked. 
Click Cancel to stay safe.`)&&(a.location=e.href)}else console.log('Forward route expects parameter "url"')}),o("krWs1");
//# sourceMappingURL=forward.b94cd5dd.js.map
