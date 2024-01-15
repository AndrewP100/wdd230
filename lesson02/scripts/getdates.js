let oLastModif = new Date(document.lastModified);
document.querySelector("#footer-date").textContent = oLastModif;

const options = {
    year: "numeric"
};
document.querySelector("#footer-year").innerHTML = new Date().toLocaleDateString("en-US", options);
