import os

print("Checking Metadata...")
for f in os.listdir('images'):
    if not f.endswith(('.jpg', '.webp')): continue
    try:
        with open(f"images/{f}:Zone.Identifier", "r") as r:
            print(f"--- {f} ---")
            for line in r:
                if 'Url' in line:
                    print(line.strip())
    except:
        print(f"--- {f} --- No Zone.Identifier")
