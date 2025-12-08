import qrcode

url = input("Enter the URL here: ").strip()
file_path = "qr-code.png"

qr = qrcode.QRCode()
qr.add_data(url)

img = qr.make_image()
img.save(file_path)

print("QR Code generated and saved to " + file_path)