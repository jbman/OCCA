var a=window,e=new URLSearchParams(a.location.search).get("url");if(e){let o=new URL(e);o.search=a.location.search,o.hash=a.location.hash,a.confirm(`Open redirect notice 

This page is sending you to an other page and forwards all URL paramaters and the hash:

${o.hostname}

By clicking OK you risk that your tokens are hijacked. 
Click Cancel to stay safe.`)&&(a.location=o.href)}else console.log('Forward route expects parameter "url"');
//# sourceMappingURL=forward.abefa94a.js.map
