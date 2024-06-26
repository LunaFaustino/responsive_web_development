
    
    // Array para armazenar os dados
    var data = [];

    // Função para coletar cliques e posição do mouse
    function trackClickAndPosition(event) {
        var clickData = {
            timestamp: new Date().toISOString(),
            xPosition: event.pageX, // Use pageX to include scroll position in X
            yPosition: event.pageY // Use pageY to include scroll position in Y
            // xPosition: event.clientX,
            // yPosition: event.clientY
        };

        // Adiciona os dados ao array
        data.push(clickData);
    }

    // Adiciona um ouvinte de eventos para o clique do mouse
    $(document).on('click', trackClickAndPosition);

    // Função para salvar os dados em CSV
    function saveDataToCSV() {
        var csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Timestamp,X Position,Y Position\n";

        data.forEach(function (click) {
            csvContent += click.timestamp + "," + click.xPosition + "," + click.yPosition + "\n";
        });

        // Usando o título do documento como base
        var fileName = document.title.replace(/[^a-z0-9]/gi, '_').toLowerCase(); // Sanitizando titulo
        fileName += "_click_data.csv"; // colocando sufixo da extensao do arquivo

        // Cria um link para download do CSV
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", fileName);
        document.body.appendChild(link);

        // Simula um clique no link para iniciar o download
        link.click();
    }

    // Adiciona um botão para salvar os dados em CSV
    $(document.body).append('<button onclick="saveDataToCSV()">Salvar em CSV</button>');

    // verifica se há informação de clicks e, se houver, faz o download antes de mudar a página
    window.onbeforeunload = function() {
        if (data.length > 0) {
            saveDataToCSV();
        }
    };