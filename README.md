# ⚡ Superfast and Easy QR Code Generator

![GitHub last commit](https://img.shields.io/github/last-commit/dimuzzo/qr-code-generator?style=flat-square&logo=github&label=Last%20Commit)
![GitHub repo size](https://img.shields.io/github/repo-size/dimuzzo/qr-code-generator?style=flat-square&logo=github&label=Repo%20Size)
![GitHub stars](https://img.shields.io/github/stars/dimuzzo/qr-code-generator?style=flat-square&logo=github&label=Stars)

Generate QR codes instantly with my modern Web app or Python script. 

Choose your preferred method: browser-based convenience or command-line simplicity.

---

## 🌐 Web App (Recommended)

**Try it live:** [https://dimuzzo.github.io/qr-code-generator](https://dimuzzo.github.io/qr-code-generator)

### ✨ Features
- 🎨 Modern, responsive design with lime green accents
- 📱 Works on desktop, tablet, and mobile
- ⚡ Instant QR code generation
- 💾 Direct download as PNG
- 🔒 100% client-side - your data never leaves your browser
- ✅ URL validation

### 🚀 Quick Start
1. Visit the web app
2. Enter your URL
3. Click "Generate QR Code"
4. Download your QR code

<div align="center">
  <img src="assets/example-screen.png" alt="QR Code Generator Web App" width="350">
  <p><i>Modern and intuitive interface</i></p>
</div>

---

## 🐍 Python Script

For those who prefer command-line tools or need to integrate QR generation into automated workflows.

### 📋 Prerequisites

Ensure you have Python installed. You will need to install the `qrcode` library with image support (`pillow`).

Run the following command in your terminal:

```bash
pip install "qrcode[pil]"
```

### 🚀 How to Run
1. Execute the script:
    ```bash
    python generator.py
    ```
2. Enter the URL: When prompted, paste the URL you want to convert (e.g., a YouTube link or website). 
3. Check the output: The script will generate an image file named `qr-code.png` in the project directory.

---

## 📂 Project Structure
```
qr-code-generator/           
├── index.html         # Web app (standalone, no dependencies)
├── generator.py       # Python CLI script
├── qr-code.png        # Generated QR code (created at runtime)
├── README.md          # This file
└── assets/
    └── favicon.png    # Web app's Icon
```

---

## 🛠️ Technologies

**Web App:**
- Pure HTML, CSS, and JavaScript
- QRCode.js library
- Hosted on GitHub Pages

**Python Script:**
- Python 3.x
- qrcode library
- Pillow (PIL)

---

## 📝 License

This project is open source and available for personal and commercial use.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/dimuzzo/qr-code-generator/issues).

---

> Created with passion by [dimuzzo](https://github.com/dimuzzo)