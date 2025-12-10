const urlInput = document.getElementById('urlInput');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrOutput = document.getElementById('qrOutput');
const qrcodeDiv = document.getElementById('qrcode');

let qrCodeInstance = null;

generateBtn.addEventListener('click', generateQRCode);
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateQRCode();
    }
});

function generateQRCode() {
    const url = urlInput.value.trim();

    if (!url) {
        alert('Please enter a URL');
        return;
    }

    if (!isValidURL(url)) {
        alert('Please enter a valid URL (e.g., https://example.com)');
        return;
    }

    // Pulisce il QR code precedente se presente
    qrcodeDiv.innerHTML = '';

    qrCodeInstance = new QRCode(qrcodeDiv, {
        text: url,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    qrOutput.classList.add('active');
}

downloadBtn.addEventListener('click', () => {
    const canvas = qrcodeDiv.querySelector('canvas');
    if (canvas) {
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = url;
        link.click();
    }
});

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}