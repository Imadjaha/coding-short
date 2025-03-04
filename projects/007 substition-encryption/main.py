import random
import string

all_chars = string.ascii_letters + string.digits + string.punctuation + " "
all_chars = list(all_chars)

key = all_chars.copy()
random.shuffle(key)

#! Encryption
print("---- Encryption ----")

plain_text = input("Enter Message to encrypt: ")
cipher_text = ""

for letter in plain_text:
    index = all_chars.index(letter)
    cipher_text += key[index]

print(f"Encrypted Message: {cipher_text}")

#! Decryption
print("---- Decryption ----")

cipher_text = input("Enter Cipher Text to descrypt: ")
plain_text = ""

for letter in cipher_text:
    index = key.index(letter)
    plain_text += all_chars[index]

print(f"Decrypted Message: {plain_text}")