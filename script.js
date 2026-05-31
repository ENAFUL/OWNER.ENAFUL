:root { --primary-color: #00ffcc; }
body { background: #050505; color: white; display: flex; justify-content: center; align-items: center; min-height: 100vh; font-family: sans-serif; }

.brand-name { color: var(--primary-color); text-transform: uppercase; letter-spacing: 5px; margin-bottom: 20px; }

.clock-face {
    width: 350px; height: 350px; border-radius: 50%;
    border: 8px solid #222; box-shadow: 0 0 50px var(--primary-color);
    position: relative; display: flex; justify-content: center;
}

.hand { 
    position: absolute; bottom: 50%; width: 6px; background: var(--primary-color); 
    transform-origin: bottom; border-radius: 10px; 
    transition: transform 0.05s cubic-bezier(0.4, 2.3, 0.3, 1); /* স্মুথ মোশন */
}
.hour { height: 80px; }
.minute { height: 120px; width: 4px; }
.second { height: 150px; width: 2px; background: #ff0055; }

#digital-clock { font-size: 2rem; margin-top: 30px; text-shadow: 0 0 10px var(--primary-color); }
