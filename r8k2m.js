(async function(){

const url =
"https://raw.githubusercontent.com/dhan-singh-developer/web-assets/main/x7c9v.json";

window.PRO = false;
window.LICENSED = false;
window.CREDIT_EDIT = false;

try{

const res =
await fetch(url + "?t=" + Date.now());

const data =
await res.json();

const domain =
location.hostname
.replace("[www](http://www).","")
.toLowerCase();

const site =
data?.[domain];

if(site){

```
const expiry =
new Date(site.expires);

const today =
new Date();

if(
  site.status === "active" &&
  today <= expiry
){

  window.LICENSED = true;

  if(site.pro === true){
    window.PRO = true;
  }

  if(site.credit_edit === true){
    window.CREDIT_EDIT = true;
  }

}
```

}

}catch(e){}

function showWarning(msg){

if(
document.getElementById(
"dhan-license-warning"
)
) return;

const whatsappText =
encodeURIComponent(
"Sir, I want to use your theme. Please share your pricing and payment details."
);

const d =
document.createElement("div");

d.id =
"dhan-license-warning";

d.innerHTML =
`

  <div style="font-size:16px;font-weight:700;margin-bottom:6px;">
    ${msg}
  </div>

  <div style="font-size:13px;margin-bottom:10px;">
    Contact Theme Developer for a valid license.
  </div>

<a
href="https://wa.me/919876543210?text=${whatsappText}"
target="_blank"
style="
display:inline-block;
background:#25D366;
color:#fff;
text-decoration:none;
padding:10px 18px;
border-radius:6px;
font-weight:700;
"

>

```
Chat Now
```

  </a>
  `;

d.style =
`   position:fixed;
  bottom:0;
  left:0;
  right:0;
  background:#d32f2f;
  color:#fff;
  padding:15px;
  text-align:center;
  z-index:999999;
  box-shadow:0 -2px 10px rgba(0,0,0,.25);
  `;

document.body.appendChild(d);

}

function verify(){

const footer =
document.querySelector(
".copyright-panel"
);

if(!footer) return;

const text =
footer.innerText
.toLowerCase();

const hasCredit =
text.includes(
"dhan singh"
);

if(
!window.LICENSED
){

```
footer.style.opacity =
"0.3";

showWarning(
  "⚠ Unlicensed Theme Copy Detected"
);

return;
```

}

if(
!window.CREDIT_EDIT &&
!hasCredit
){

```
footer.style.opacity =
"0.3";

showWarning(
  "⚠ License Invalid / Credit Removed"
);
```

}

}

setTimeout(
verify,
2500
);

setTimeout(
verify,
10000
);

})();
