import os

def split_markdown_file(input_file, output_dir):
    with open(input_file, 'r') as file:
        lines = file.readlines()

    current_file = None
    current_filename = None

    for line in lines:
        if line.startswith('# '):  # Check for level 1 headers
            if current_file:
                current_file.close()

            # Create a new file for each level 1 header
            header_text = line[2:].strip()
            header_number = header_text.split(' ')[0]
            header_title = '-'.join(header_text.split(' ')[1:]).replace('&', 'and').replace(',', '').replace(' ', '-').lower()
            current_filename = f"{header_number}-{header_title}.md"
            current_file = open(os.path.join(output_dir, current_filename), 'w')

        if current_file:
            current_file.write(line)

    if current_file:
        current_file.close()

# Usage
input_file = './src/data/sb_markdown/_0001_complete.md'
output_dir = './src/data/sb_markdown/split_files'
os.makedirs(output_dir, exist_ok=True)
split_markdown_file(input_file, output_dir)