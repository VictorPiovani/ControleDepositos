document.addEventListener("DOMContentLoaded", function () {
    const depositForm = document.getElementById("depositForm");
    const depositedValuesElement = document.getElementById("depositedValues");

    // Função para gerar um hash simples com os valores
    const generateHash = (values) => {
        return values.reduce((acc, value) => acc + value.toString(), "");
    };

    // Carregar valores depositados do Local Storage
    const loadDeposits = () => {
        const deposits = JSON.parse(localStorage.getItem("deposits")) || [];
        deposits.forEach(value => {
            const listItem = document.createElement("li");
            listItem.textContent = `Valor: R$${value}`;
            depositedValuesElement.appendChild(listItem);
        });
    };

    // Atualizar Local Storage e lista de depósitos
    const addDeposit = (value) => {
        let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

        if (!deposits.includes(value)) {
            deposits.push(value);
            localStorage.setItem("deposits", JSON.stringify(deposits));

            const listItem = document.createElement("li");
            listItem.textContent = `Valor: R$${value}`;
            depositedValuesElement.appendChild(listItem);

            // Gerar o hash baseado nos valores
            const hash = generateHash(deposits);
            console.log("Hash dos depósitos:", hash);

            // Enviar comprovante via WhatsApp (apenas link gerado)
            const phoneNumber = "5535998153363"; // Número do WhatsApp
            const message = `Depósito confirmado: R$${value}. Hash: ${hash}`;
            const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, '_blank');
        } else {
            alert("Este valor já foi depositado!");
        }
    };

    depositForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const depositValue = parseInt(document.getElementById("depositValue").value);
        addDeposit(depositValue);
    });

    // Carregar os depósitos já feitos ao carregar a página
    loadDeposits();
});
