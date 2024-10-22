document.addEventListener("DOMContentLoaded", function () {
    const depositForm = document.getElementById("depositForm");
    const depositedValuesElement = document.getElementById("depositedValues");
    const totalSumElement = document.getElementById("totalSum");
    const clearCacheButton = document.getElementById("clearCache");
    const inputHash = document.getElementById("inputHash");
    const loadFromHashButton = document.getElementById("loadFromHash");

    // Função para gerar um hash simples com os valores
    const generateHash = (values) => {
        return values.map(value => value.toString()).join("-");
    };

    // Função para decodificar o hash para valores
    const decodeHash = (hash) => {
        return hash.split("-").map(value => parseInt(value));
    };

    // Função para calcular a soma total dos valores
    const calculateTotalSum = (values) => {
        return values.reduce((acc, value) => acc + value, 0);
    };

    // Carregar valores depositados do hash fornecido
    const loadDepositsFromHash = (hash) => {
        const deposits = decodeHash(hash);
        depositedValuesElement.innerHTML = ""; // Limpar lista anterior

        deposits.forEach(value => {
            const listItem = document.createElement("li");
            listItem.textContent = `Valor: R$${value}`;
            depositedValuesElement.appendChild(listItem);
        });

        const totalSum = calculateTotalSum(deposits);
        totalSumElement.textContent = totalSum;
    };

    // Atualizar Local Storage, lista de depósitos e somatório
    const addDeposit = (value) => {
        let deposits = JSON.parse(localStorage.getItem("deposits")) || [];

        if (!deposits.includes(value)) {
            deposits.push(value);
            localStorage.setItem("deposits", JSON.stringify(deposits));

            const listItem = document.createElement("li");
            listItem.textContent = `Valor: R$${value}`;
            depositedValuesElement.appendChild(listItem);

            const totalSum = calculateTotalSum(deposits);
            totalSumElement.textContent = totalSum;

            // Gerar o hash baseado nos valores
            const hash = generateHash(deposits);
            console.log("Hash dos depósitos:", hash);

            // Pegar a data e hora atuais
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();

            // Enviar comprovante via WhatsApp (apenas link gerado)
            const phoneNumber = "5535998153363"; // Número do WhatsApp
            const message = `Depósito confirmado: R$${value} em ${formattedDate} às ${formattedTime}. Soma total: R$${totalSum}. Hash: ${hash}`;
            const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, '_blank');
        } else {
            alert("Este valor já foi depositado!");
        }
    };

    // Limpar Local Storage e reiniciar os valores depositados
    const clearCache = () => {
        if (confirm("Tem certeza que deseja limpar os depósitos?")) {
            localStorage.removeItem("deposits");
            depositedValuesElement.innerHTML = "";
            totalSumElement.textContent = "0";
        }
    };

    depositForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const depositValue = parseInt(document.getElementById("depositValue").value);
        addDeposit(depositValue);
    });

    // Adicionar evento ao botão de limpar cache
    clearCacheButton.addEventListener("click", clearCache);

    // Carregar depósitos a partir do hash informado
    loadFromHashButton.addEventListener("click", function () {
        const hash = inputHash.value.trim();
        if (hash) {
            loadDepositsFromHash(hash);
        } else {
            alert("Por favor, insira um hash válido.");
        }
    });

    // Carregar os depósitos já feitos ao carregar a página (se houver)
    const storedDeposits = JSON.parse(localStorage.getItem("deposits"));
    if (storedDeposits) {
        const totalSum = calculateTotalSum(storedDeposits);
        totalSumElement.textContent = totalSum;
        storedDeposits.forEach(value => {
            const listItem = document.createElement("li");
            listItem.textContent = `Valor: R$${value}`;
            depositedValuesElement.appendChild(listItem);
        });
    }
});
