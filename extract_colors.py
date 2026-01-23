import re
import colorsys

def hsl_to_hex(h, s, l):
    # CSS HSL is: H (0-360), S (0-100%), L (0-100%)
    # colorsys uses: H (0-1), L (0-1), S (0-1)
    
    # Handle "deg" in hue if present (though usually just numbers in tailwind css vars)
    h = float(h.replace('deg', ''))
    s = float(s.replace('%', ''))
    l = float(l.replace('%', ''))
    
    r, g, b = colorsys.hls_to_rgb(h / 360.0, l / 100.0, s / 100.0)
    return "#{:02x}{:02x}{:02x}".format(int(r * 255), int(g * 255), int(b * 255))

with open('app/globals.css', 'r') as f:
    content = f.read()

# Extract :root block
root_match = re.search(r':root\s*{([^}]+)}', content)
if root_match:
    print("## Light Mode Colors")
    lines = root_match.group(1).strip().split('\n')
    for line in lines:
        line = line.strip()
        if line.startswith('--'):
            name, value = line.split(':', 1)
            value = value.strip().rstrip(';')
            # Value is likely space separated HSL like "0 0% 100%" or "222.2 84% 4.9%"
            # remove slash if present (sometimes formatted "h s% l% / a")
            parts = value.split()
            if len(parts) >= 3:
                try:
                    hex_code = hsl_to_hex(parts[0], parts[1], parts[2])
                    print(f"- **{name.strip()}**:  ({value})")
                except ValueError:
                    print(f"- **{name.strip()}**: {value}")

# Extract .dark block
dark_match = re.search(r'\.dark\s*{([^}]+)}', content)
if dark_match:
    print("\n## Dark Mode Colors")
    lines = dark_match.group(1).strip().split('\n')
    for line in lines:
        line = line.strip()
        if line.startswith('--'):
            name, value = line.split(':', 1)
            value = value.strip().rstrip(';')
            parts = value.split()
            if len(parts) >= 3:
                try:
                    hex_code = hsl_to_hex(parts[0], parts[1], parts[2])
                    print(f"- **{name.strip()}**:  ({value})")
                except ValueError:
                    print(f"- **{name.strip()}**: {value}")
