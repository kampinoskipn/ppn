// Cache selektorów DOM
const elements = {
    degPlace: document.getElementById('degree'),
    warning: document.getElementById('warning'),
    aDate: document.getElementById('date'),
    ico: document.querySelector('#zagrozenie-pozarowe svg rect')
};

// Mapa kolorów dla różnych poziomów zagrożenia
const colorMap = {
    0: { color: 'blue', removeWarning: true },
    1: { color: 'green', removeWarning: true },
    2: { color: 'orange', removeWarning: true },
    3: { color: 'red', removeWarning: false },
    default: { color: 'darkgrey', fontSize: 'small', removeWarning: true }
};

// Funkcja usuwania loadingu
function removeLoadingSpinners() {
    elements.degPlace.classList.remove('loadingspinner');
    elements.aDate.classList.remove('loadingspinner');
}

// Funkcja fallback UI
function showFallbackUI() {
    removeLoadingSpinners();
    elements.degPlace.innerHTML = '<i>/brak danych/</i>';
    elements.aDate.innerHTML = '<i>/brak danych/</i>';
    colorize(null); // Użyj domyślnego stylu
}

// Poprawiona funkcja kolorowania
function colorize(degree) {
    const config = colorMap[degree] || colorMap.default;
    
    // Ustaw kolor tekstu
    elements.degPlace.style.color = config.color;
    
    // Ustaw rozmiar czcionki jeśli określony
    if (config.fontSize) {
        elements.degPlace.style.fontSize = config.fontSize;
    }
    
    // Ustaw kolor ikony jeśli istnieje
    if (elements.ico) {
        elements.ico.setAttribute('fill', config.color);
    }
    
    // Usuń ostrzeżenie jeśli wymagane i element istnieje
    if (config.removeWarning && elements.warning) {
        elements.warning.remove();
    }
}

// Funkcja walidacji danych
function validateData(data) {
    return data && 
           typeof data === 'object' && 
           !data.error &&
           data.degree !== undefined &&
           data.date !== undefined;
}

// Funkcja aktualizacji UI
function updateUI(data) {
    removeLoadingSpinners();
    
    if (data.degree !== null) {
        elements.degPlace.innerHTML = data.degree;
    }
    
    if (data.date !== null) {
        elements.aDate.innerHTML = data.date;
    }
    
    colorize(data.degree);
}

// Główna funkcja pobierania danych z timeout
async function fetchFireRiskData() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
    
    try {
        const response = await fetch('https://api.kampinoski-pn.gov.pl/api/ppoz', {
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!validateData(data)) {
            console.warn('Nieprawidłowe dane:', data.message || 'Nieznany błąd');
            showFallbackUI();
            return;
        }
        
        updateUI(data);
        
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            console.error('Timeout zapytania');
        } else {
            console.error('Błąd zapytania:', error);
        }
        
        showFallbackUI();
    }
}

// Uruchom pobieranie danych
fetchFireRiskData();