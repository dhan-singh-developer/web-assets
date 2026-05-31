(async function(){

const url = "https://raw.githubusercontent.com/dhan-singh-developer/web-assets/main/x7c9v.json";

window.PRO = false;

try {

  const res = await fetch(url + "?t=" + Date.now());
  const data = await res.json();

  const domain = location.hostname.replace("www.","");

  if (
    data &&
    data[domain] &&
    data[domain].status === "active" &&
    data[domain].pro === true
  ) {
    window.PRO = true;
  }

} catch(e){}

setTimeout(() => {

  const footer = document.querySelector(".copyright-panel");

  if (footer) {

    const text = footer.innerText.toLowerCase();

    if (!text.includes("dhan singh")) {
      window.PRO = false;
    }

    footer.style.opacity = window.PRO ? "1" : "0.3";
  }

  if (!window.PRO) {

    const d = document.createElement("div");

    d.innerHTML = "⚠ License Warning: Copyright modification detected";

    d.style =
      "position:fixed;" +
      "bottom:0;" +
      "left:0;" +
      "right:0;" +
      "background:red;" +
      "color:white;" +
      "padding:10px;" +
      "z-index:999999;" +
      "text-align:center;";

    document.body.appendChild(d);
  }

}, 2500);

})();
