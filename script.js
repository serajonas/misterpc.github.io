// Troque pelo número real, com código do país e DDD, só dígitos (ex.: 5519999999999).
var WHATSAPP = "5519987122278";
// Troque pelo e-mail real.
var EMAIL = "contato@exemplo.com";

(function () {
  var base = "https://wa.me/" + WHATSAPP;

  document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
    a.href = base + "?text=" + encodeURIComponent("Olá! Vim pelo site do Mister PC e gostaria de um orçamento.");
    a.target = "_blank";
    a.rel = "noopener";
  });

  document.querySelectorAll("[data-email]").forEach(function (a) {
    a.href = "mailto:" + EMAIL;
    a.textContent = EMAIL;
  });

  var form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var linhas = [
        "Olá! Vim pelo site do Mister PC.",
        "Nome: " + d.get("nome"),
        d.get("empresa") ? "Empresa: " + d.get("empresa") : "",
        "Assunto: " + d.get("assunto"),
        d.get("mensagem") ? "Mensagem: " + d.get("mensagem") : ""
      ].filter(Boolean);
      window.open(base + "?text=" + encodeURIComponent(linhas.join("\n")), "_blank", "noopener");
    });
  }

  // Painel do hero: os itens aparecem em sequência, uma única vez ao carregar.
  var itens = document.querySelectorAll("#painel li");
  var reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduz) {
    itens.forEach(function (li) { li.classList.add("oculto"); });
    itens.forEach(function (li, i) {
      setTimeout(function () { li.classList.remove("oculto"); }, 350 + i * 260);
    });
  }
})();
