const baseUrl = window.location.origin;

const input = document.getElementById("input");
const button = document.getElementById("button");

const responseAPI = async (e) => {
    e.preventDefault()
    const res = await fetch(`${baseUrl}/message`, { // URL relativa ao domínio atual
        method: 'GET'
    })
    const data = await res.json();
    input.value = data.message;
};

button.addEventListener("click", responseAPI);