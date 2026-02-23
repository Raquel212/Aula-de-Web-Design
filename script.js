        const data = new Date();
        const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        document.getElementById("date-display").innerText = `Hoje é ${dias[data.getDay()]}`;

        function startApp() {
            const nameInput = document.getElementById('user-name-input');
            const ageInput = document.getElementById('user-age-input');
            
            if(!ageInput.value || !nameInput.value) {
                nameInput.style.borderColor = !nameInput.value ? 'red' : '#ddd';
                ageInput.style.borderColor = !ageInput.value ? 'red' : '#ddd';
                return;
            }
            
            document.getElementById('welcome-modal').style.display = 'none';
            document.getElementById('user-greeting').innerText = `Bem-vindo, ${nameInput.value}! 👋`;
        }

        function toggleInfo() {
            const infoDiv = document.getElementById("info");
            const isVisible = infoDiv.style.display === "block";
            infoDiv.style.display = isVisible ? "none" : "block";
        }

        function mudarTexto() {
            const p = document.getElementById("js-demo-text");
            if (p.innerText.includes("Clique")) {
                p.innerText = "O JavaScript alterou o conteúdo do HTML dinamicamente!";
            } else {
                p.innerText = "Clique nos botões abaixo para interagir com este texto 👇";
            }
        }

        function mudarCor() {
            const cores = ['#4f46e5', '#ef4444', '#10b981', '#f59e0b', '#333', '#8b5cf6'];
            const randomColor = cores[Math.floor(Math.random() * cores.length)];
            document.getElementById("js-demo-text").style.color = randomColor;
        }

        const rainContainer = document.querySelector('.code-rain');
        const symbols = ['<html>', '{ }', 'CSS', 'JS', '</>', '=>', ';', 'const', 'if()', '<div>'];

        function createCodeDrop() {
            const span = document.createElement('span');
            span.className = 'code';
            span.innerText = symbols[Math.floor(Math.random() * symbols.length)];
            span.style.left = Math.random() * 100 + 'vw';
            const duration = Math.random() * 3 + 4;
            span.style.animationDuration = duration + 's';
            span.style.fontSize = (Math.random() * 10 + 10) + 'px';
            rainContainer.appendChild(span);
            setTimeout(() => { span.remove(); }, duration * 1000);
        }

        setInterval(createCodeDrop, 300);