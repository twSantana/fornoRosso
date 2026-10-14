// Replace this demo number with the verified business WhatsApp number before launch.
const DEMO_WHATSAPP_NUMBER = "5511999999999";

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeMenu() {
  if (!menuToggle || !primaryNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
  primaryNav.classList.remove("is-open");
  header?.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu de navegação" : "Fechar menu de navegação");
  primaryNav?.classList.toggle("is-open", !isOpen);
  header?.classList.toggle("menu-open", !isOpen);
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

function whatsappUrl(message) {
  return `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-message]").forEach((button) => {
  button.addEventListener("click", () => {
    const message = button.getAttribute("data-message");
    if (!message) {
      console.error("WhatsApp action is missing its contextual message.");
      return;
    }
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  });
});

document.querySelectorAll(".whatsapp-float").forEach((link) => {
  link.href = whatsappUrl("Olá! Estou visitando o site de demonstração do FORNO ROSSO. Pode me passar mais informações?");
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
