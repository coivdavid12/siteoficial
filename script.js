document.getElementById("especialidades").addEventListener("change", function() {
    var especialidade = this.value;
    var medicoSelect = document.getElementById("medico");

    // Limpa as opções anteriores
    medicoSelect.innerHTML = '<option value="">Selecione um médico</option>';

    // Define médicos baseados na especialidade escolhida
    var medicos = {
        "clinico-geral": [
            "Dr. João Silva",
            "Dra. Maria Oliveira",
            "Dr. Doulgas Lima",
            "Dr Thiago Boaventura",
            "Dra. Adriana Santana",
        ],
        "pediatra": [
            "Dr. Lucas Almeida",
            "Dra. Carla Souza",
            "Dr. Cesar Lamounier",
            "Dra. Anne Luize",
            "Dra. Cassia Lemos",
            "Dra. Alessandra Licar",
            "Dr. Pietro Chenovante",
            "Dr. Bruno Vital",
        ],
        "anestesiologista": [
            "Dr. Eduardo Pereira",
            "Dra. Silvia Costa",
            "Dra. Sandra Anamuth",
            "Dra. Charlie Souza",
            "Dr. Alex Romier",
        ],
        "endocrinologista": [
            "Dr. Pedro Santos",
            "Dra. Juliana Lima"
        ],
        "dermatologista": [
            "Dr. Fabiano Martins",
            "Dra. Camila Rocha"
        ],
        "cirurgiao-geral": [
            "Dr. Marcos Silva",
            "Dra. Luciana Gomes"
        ],
        "ortopedista": [
            "Dr. Felipe Oliveira",
            "Dra. Renata Pereira"
        ],
        "neurologista": [
            "Dr. Rodrigo Costa",
            "Dra. Luciana Ribeiro"
        ],
        "ultrassonografista": [
            "Dr. Aline Andrade",
            "Dra. Beatriz Costa"
        ],
        "cardiologista": [
            "Dr. Gabriel Almeida",
            "Dra. Vanessa Marques"
        ]
    };

    // Preenche o campo de médicos com os nomes da especialidade selecionada
    if (medicos[especialidade]) {
        medicos[especialidade].forEach(function(medico) {
            var option = document.createElement("option");
            option.value = medico.toLowerCase().replace(/\s/g, '-');
            option.textContent = medico;
            medicoSelect.appendChild(option);
        });
    }
});
document.getElementById("especialidades").addEventListener("change", function() {
    var especialidade = this.value;
    var medicoSelect = document.getElementById("medico");

    // Limpa as opções anteriores
    medicoSelect.innerHTML = '<option value="">Selecione um médico</option>';

    // Define médicos baseados na especialidade escolhida
    var medicos = {
        "clinico-geral": [
            "Dr. João Silva",
            "Dra. Maria Oliveira"
        ],
        "pediatra": [
            "Dr. Lucas Almeida",
            "Dra. Carla Souza"
        ],
        "anestesiologista": [
            "Dr. Eduardo Pereira",
            "Dra. Silvia Costa"
        ],
        "endocrinologista": [
            "Dr. Pedro Santos",
            "Dra. Juliana Lima"
        ],
        "dermatologista": [
            "Dr. Fabiano Martins",
            "Dra. Camila Rocha"
        ],
        "cirurgiao-geral": [
            "Dr. Marcos Silva",
            "Dra. Luciana Gomes",
            "Dr. Lucio Deliano",
            "Dr. Carlos Aluisio"
        ],
        "ortopedista": [
            "Dr. Felipe Oliveira",
            "Dra. Renata Pereira"
        ],
        "neurologista": [
            "Dr. Rodrigo Costa",
            "Dra. Luciana Ribeiro",
            "Dr. Thiago Freitas",
            "Dra. Sandra Boulevar"
        ],
        "ultrassonografista": [
            "Dr. Aline Andrade",
            "Dra. Beatriz Costa"
        ],
        "cardiologista": [
            "Dr. Gabriel Almeida",
            "Dra. Vanessa Marques",
            "Dra. Carmelita Suziane",
            "Dra. Ricarda Moraes"
        ],
        "urologista": [
            "Dr. Pedro Manzuart",
            "Dra. Raquele Diaz"
        ]
    };

    // Preenche o campo de médicos com os nomes da especialidade selecionada
    if (medicos[especialidade]) {
        medicos[especialidade].forEach(function(medico) {
            var option = document.createElement("option");
            option.value = medico.toLowerCase().replace(/\s/g, '-');
            option.textContent = medico;
            medicoSelect.appendChild(option);
        });
    }
});

// Função para simular o agendamento
document.getElementById("form-agendamento").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede a submissão real do formulário

    // Coletando os valores do formulário
    const especialidade = document.getElementById("especialidades").value;
    const medico = document.getElementById("medico").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    // Verificando se os campos estão preenchidos corretamente
    if (!especialidade || !medico || !data || !hora) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exibindo uma mensagem de confirmação
    alert(`Consulta agendada com sucesso!\nEspecialidade: ${especialidade}\nMédico: ${medico}\nData: ${data}\nHora: ${hora}`);

    // Limpar o formulário após o envio
    document.getElementById("form-agendamento").reset();
});

    // Abrir o pop-up de "Minhas Consultas"
document.getElementById('minhas-consultas-btn').addEventListener('click', function() {
    document.getElementById('minhas-consultas-popup').style.display = 'block';
});

// Fechar o pop-up de "Minhas Consultas"
document.getElementById('close-minhas-consultas-popup').addEventListener('click', function() {
    document.getElementById('minhas-consultas-popup').style.display = 'none';
});

// Abrir o pop-up de "Desmarcar Consultas"
document.getElementById('desmarcar-consulta-btn').addEventListener('click', function() {
    document.getElementById('desmarcar-consulta-popup').style.display = 'block';
});

// Fechar o pop-up de "Desmarcar Consultas"
document.getElementById('close-desmarcar-consulta-popup').addEventListener('click', function() {
    document.getElementById('desmarcar-consulta-popup').style.display = 'none';
});

// Cancelar Consulta
document.getElementById('cancelar-consulta-btn').addEventListener('click', function() {
    var consultaSelecionada = document.getElementById('consulta-para-cancelar').value;
    alert('A consulta selecionada foi cancelada: ' + consultaSelecionada);
    document.getElementById('desmarcar-consulta-popup').style.display = 'none';
});
