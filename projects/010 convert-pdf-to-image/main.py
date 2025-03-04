import tkinter as tk
from tkinter import filedialog, messagebox
from pdf2image import convert_from_path
import os


def select_file():
    file_path = filedialog.askopenfilename(
        filetypes=[("PDF Files", "*.pdf"), ("All Files", "*.*")]
    )
    if file_path:
        pdf_file.set(file_path)


def convert_pdf_to_images(pdf_file_path, output_folder, base_name):
    try:
        images = convert_from_path(pdf_file_path)

        for i, image in enumerate(images):
            image_path = os.path.join(output_folder, f"{base_name}_page_{i+1}.png")
            image.save(image_path, "PNG")

        messagebox.showinfo("Success", "PDF converted to images successfully!")
    except Exception as e:
        messagebox.showerror("Error", f"Conversion failed: {e}")


def start_conversion():
    pdf_path = pdf_file.get()
    output_base_name = output_name.get()
    if pdf_path:
        output_folder = filedialog.askdirectory()
        if output_folder:
            if not output_base_name:
                output_base_name = os.path.splitext(os.path.basename(pdf_path))[0]
            convert_pdf_to_images(pdf_path, output_folder, output_base_name)
        else:
            messagebox.showwarning("Input Error", "Please select an output directory.")
    else:
        messagebox.showwarning("Input Error", "Please select a PDF file.")


# Create the main window
root = tk.Tk()
root.title("PDF to Image Converter")

# PDF file selection
pdf_file = tk.StringVar()
output_name = tk.StringVar()

tk.Label(root, text="PDF File:").grid(row=0, column=0, padx=10, pady=10)
pdf_entry = tk.Entry(root, textvariable=pdf_file, width=50)
pdf_entry.grid(row=0, column=1, padx=10, pady=10)
select_button = tk.Button(root, text="Browse", command=select_file)
select_button.grid(row=0, column=2, padx=10, pady=10)

tk.Label(root, text="Output File Base Name:").grid(row=1, column=0, padx=10, pady=10)
output_entry = tk.Entry(root, textvariable=output_name, width=50)
output_entry.grid(row=1, column=1, padx=10, pady=10)

# Start conversion button
convert_button = tk.Button(root, text="Convert", command=start_conversion)
convert_button.grid(row=2, column=1, pady=10)

# Run the main event loop
root.mainloop()
