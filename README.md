# Superfast and easy QR Code Generator

![GitHub last commit](https://img.shields.io/github/last-commit/dimuzzo/qr-code-generator?style=flat-square&logo=github&label=Last%20Commit)
![GitHub repo size](https://img.shields.io/github/repo-size/dimuzzo/qr-code-generator?style=flat-square&logo=github&label=Repo%20Size)
![GitHub stars](https://img.shields.io/github/stars/dimuzzo/qr-code-generator?style=flat-square&logo=github&label=Stars)

A simple Python script that generates a QR code from a provided URL using the `qrcode` library.

---

## 📋 Prerequisites

Ensure you have Python installed. You will need to install the `qrcode` library with image support (`pillow`).

Run the following command in your terminal:

```bash
pip install "qrcode[pil]"
```

---

## 🚀 How to Run
1. Execute the script:
    ```bash
    python generator.py
    ```
2. Enter the URL: When prompted, paste the URL you want to convert (e.g., a YouTube link or website). 
3. Check the output: The script will generate an image file named qr-code.png in the project directory.

---

## 📂 Project Structure
- generator.py: Main source code. 
- qr-code.png: The generated QR code image (created at runtime).

---

> Created with passion by [dimuzzo](https://github.com/dimuzzo)