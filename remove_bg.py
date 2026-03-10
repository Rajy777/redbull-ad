import os
from rembg import remove
from PIL import Image

input_dir = "./public/images"

files = [
    "960516123-ECOM.webp",
    "RedBullLilacPinkGrapefruit_Woodruff250ml.webp",
    "images (1).jpg",
    "download (1).jpg",
    "images.jpg"
]

for file in files:
    input_path = os.path.join(input_dir, file)
    output_path = os.path.join(input_dir, file.rsplit('.', 1)[0] + "_nobg.png")

    try:
        print(f"Processing {input_path}...")
        input_image = Image.open(input_path)
        output_image = remove(input_image)
        output_image.save(output_path)
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")
