export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hub toskopado.site</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #000;
            background-image: 
                radial-gradient(circle at 50% 50%, rgba(80,80,80,0.2) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, rgba(120,120,120,0.1) 1px, transparent 1px);
            background-size: 40px 40px, 80px 80px;
            animation: moveBG 10s linear infinite;
            overflow: hidden;
            height: 100vh;
        }
        
        .link-item {
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .link-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        
        .profile-pic {
            border: 3px solid #3a3a3a;
            transition: all 0.3s ease;
        }
        
        .profile-pic:hover {
            transform: scale(1.05);
            border-color: #555;
        }
        
        .social-icon {
            transition: all 0.2s ease;
        }
        
        .social-icon:hover {
            transform: scale(1.2);
        }
        
        .theme-toggle {
            transition: all 0.3s ease;
        }
        
        .theme-toggle:hover {
            transform: rotate(30deg);
        }

        .sidebar {
            position: fixed;
            top: 0;
            left: -300px;
            width: 280px;
            height: 100vh;
            background-color: rgba(20, 20, 20, 0.95);
            backdrop-filter: blur(10px);
            border-right: 1px solid #333;
            transition: all 0.3s ease;
            z-index: 1000;
            padding: 20px;
            overflow-y: auto;
        }
        
        .sidebar.open {
            left: 0;
        }
        
        .sidebar-item {
            padding: 12px 15px;
            margin: 8px 0;
            background: rgba(50, 50, 50, 0.5);
            border-radius: 6px;
            transition: all 0.2s ease;
            border-left: 3px solid transparent;
        }
        
        .sidebar-item:hover {
            background: rgba(70, 70, 70, 0.7);
            border-left: 3px solid #4f46e5;
            transform: translateX(5px);
        }
        
        .sidebar-title {
            font-size: 1.2rem;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #333;
            color: #676669;
        }

        @keyframes moveBG {
            0% {
                background-position: 0 0, 0 0;
            }
            100% {
                background-position: 40px 40px, 80px 80px;
            }
        }

        .hacker-text {
            position: fixed;
            color: rgba(220, 220, 220, 0.7);
            pointer-events: none;
            z-index: -1;
            font-family: monospace;
            font-size: 18px;
            font-weight: bold;
            text-shadow: 0 0 5px rgba(255,255,255,0.5);
        }
        
        .hacker-text.glow {
            color: rgba(255, 255, 255, 0.9);
            text-shadow: 0 0 10px rgba(210, 210, 210, 0.8),
                         0 0 20px rgba(170, 170, 170, 0.6);
        }

        .fall-down {
            animation: fallDown linear forwards;
        }
        .fall-up {
            animation: fallUp linear forwards;
        }
        .fall-left {
            animation: fallLeft linear forwards;
        }
        .fall-right {
            animation: fallRight linear forwards;
        }

        @keyframes fallDown {
            to {
                transform: translateY(100vh);
            }
        }
        @keyframes fallUp {
            to {
                transform: translateY(-100vh);
            }
        }
        @keyframes fallLeft {
            to {
                transform: translateX(-100vw);
            }
        }
        @keyframes fallRight {
            to {
                transform: translateX(100vw);
            }
        }
    </style>
</head>
<body class="text-gray-200 flex flex-col items-center justify-center p-4">
 
    <div class="menu-btn" id="menuBtn">
        <span></span>
        <span></span>
        <span></span>
    </div>
    
    
    <div class="sidebar" id="sidebar">
        <h2 class="sidebar-title">Menu Toskopado</h2>
        
        <a href="https://www.toskopado.site/erro/404.html" class="sidebar-item">
    <i class="fas fa-tools mr-2"></i> Ferramentas Úteis
    </a>
        
    </div>

    <div class="w-full max-w-md mx-auto">
       
        <div class="flex flex-col items-center mb-8">
            <img src="https://dl.dropboxusercontent.com/scl/fi/zy78yy4aosfpctczzud08/1749569716497.jpeg?rlkey=arge6zrt04sw6qvrrx1euipg3&dl=0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                 alt="Profile" 
                 class="profile-pic w-24 h-24 rounded-full object-cover mb-4">
            <h1 class="text-2xl font-bold mb-1">@Toskopado</h1>
            <p class="text-gray-400 text-sm mb-4">vivendo e se fudendo</p>
            
         
            <div class="flex space-x-4 mb-6">
                <a href="#" class="social-icon text-gray-400 hover:text-blue-400">
                    <i class="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" class="social-icon text-gray-400 hover:text-pink-500">
                    <i class="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" class="social-icon text-gray-400 hover:text-blue-600">
                    <i class="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="#" class="social-icon text-gray-400 hover:text-red-500">
                    <i class="fab fa-youtube fa-lg"></i>
                </a>
            </div>
        </div>
        
       
        <div class="space-y-3">
            <a href="https://www.instagram.com/toskopado__?igsh=MTBwcXM0NmNtd3E2Zw==" class="link-item block bg-gray-800 hover:bg-gray-700 border border-gray-600 text-center py-3 px-4 rounded-lg font-medium">
                <span class="flex items-center justify-center">
                    <i class="fas fa-globe mr-2"></i> Instagram
                </span>
            </a>
            
            <a href="https://x.com/toskopado?s=09" class="link-item block bg-gray-800 hover:bg-gray-700 border border-gray-600 text-center py-3 px-4 rounded-lg font-medium">
                <span class="flex items-center justify-center">
                    <i class="fab fa-github mr-2"></i> X (twitter)
                </span>
            </a>
            
            <a href="https://wa.me/5567981013999?text=.menu" class="link-item block bg-gray-800 hover:bg-gray-700 border border-gray-600 text-center py-3 px-4 rounded-lg font-medium">
                <span class="flex items-center justify-center">
                    <i class="fas fa-envelope mr-2"></i> AnT Bot© (bot multifunc whatsapp)
                </span>
            </a>
        
        </div>
        
       
        <div class="mt-8 text-center text-gray-500 text-xs">
            <p>© 2025 My Links. Todos os Direitos Reservados.</p>
           
        </div>
    </div>

    <script>
        const menuBtn = document.getElementById('menuBtn');
        const sidebar = document.getElementById('sidebar');
        
        menuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            
            if (sidebar.classList.contains('open')) {
                menuBtn.querySelectorAll('span')[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                menuBtn.querySelectorAll('span')[1].style.opacity = '0';
                menuBtn.querySelectorAll('span')[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                menuBtn.querySelectorAll('span')[0].style.transform = 'none';
                menuBtn.querySelectorAll('span')[1].style.opacity = '1';
                menuBtn.querySelectorAll('span')[2].style.transform = 'none';
            }
        });
        
        document.addEventListener('click', function(event) {
            if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
                sidebar.classList.remove('open');
                menuBtn.querySelectorAll('span')[0].style.transform = 'none';
                menuBtn.querySelectorAll('span')[1].style.opacity = '1';
                menuBtn.querySelectorAll('span')[2].style.transform = 'none';
            }
        });

        const characters = '01ハッカー｡◕‿◕｡┐(´∀｀)┌ﾟ+*:;ﾟｲΣ◖⚆ᴥ⚆◗✖╰⋃╯⌐■-■';
        const directions = [
            'fall-down', 'fall-up', 
            'fall-left', 'fall-right'
        ];
        
        function createHackerText() {
            const letter = document.createElement('div');
            const useGlow = Math.random() < 0.3;
            letter.className = \`hacker-text \${directions[Math.floor(Math.random() * directions.length)]} \${useGlow ? 'glow' : ''}\`;
            letter.textContent = characters[Math.floor(Math.random() * characters.length)];
            
            letter.style.left = \`\${Math.random() * 100}vw\`;
            letter.style.top = \`\${Math.random() * 100}vh\`;
            letter.style.animationDuration = \`\${5 + Math.random() * 5}s\`;
            letter.style.opacity = \`\${0.5 + Math.random() * 0.4}\`;
            letter.style.transform = \`rotate(\${Math.random() * 360}deg)\`;
            
            document.body.appendChild(letter);
            
            setTimeout(() => {
                letter.remove();
            }, 10000);
        }
        
        setInterval(() => {
            createHackerText();
            setTimeout(createHackerText, 100);
            setTimeout(createHackerText, 200);
        }, 300);
        
        document.querySelectorAll('a').forEach(link => {
            if (link.href && !link.ariaLabel) {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });
    </script>
</body>
</html>`);
}
