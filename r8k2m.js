(async function(){

const url =
"https://raw.githubusercontent.com/dhan-singh-developer/web-assets/main/x7c9v.json";

window.PRO = false;

try{

  const res = await fetch(url + "?t=" + Date.now());
  const data = await res.json();

  const domain =
  location.hostname.replace("www.","");

  const site = data?.[domain];

  if(site){

    const expiry =
    new Date(site.expires);

    const today =
    new Date();

    if(
      site.status === "active" &&
      site.pro === true &&
      today <= expiry
    ){
      window.PRO = true;
    }

  }

}catch(e){}

setTimeout(()=>{

  const footer =
  document.querySelector(".copyright-panel");

  if(!footer) return;

  if(!window.PRO){

    const text =
    footer.innerText.toLowerCase();

    if(!text.includes("dhan singh")){

      footer.style.opacity = "0.3";

      const d =
      document.createElement("div");

      d.innerHTML =
      "⚠ License Expired / Invalid";

      d.style =
      "position:fixed;bottom:0;left:0;right:0;background:red;color:#fff;padding:10px;z-index:999999;text-align:center;";

      document.body.appendChild(d);

    }

  }

},2500);

})();
