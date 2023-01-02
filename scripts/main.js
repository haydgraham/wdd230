const currentYear = new Date().getFullYear();
document.querySelector(".currentYear").textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.querySelector(".lastModified").textContent = lastModified;
