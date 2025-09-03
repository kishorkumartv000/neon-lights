import json
from collections import defaultdict

def build_html():
    # Step 1: Read the JSON data
    with open('bookmarks.json', 'r') as f:
        bookmarks = json.load(f)

    # Step 2: Group bookmarks by category
    categories = defaultdict(list)
    for bookmark in bookmarks:
        categories[bookmark['category']].append(bookmark)

    # Step 3: Generate HTML for each category
    html_output = ""
    for category_name, bookmarks_in_category in sorted(categories.items()):

        # Start category section
        html_output += f'            <section class="category-section">\n'
        html_output += f'                <h2 class="category-title">{category_name}</h2>\n'
        html_output += f'                <div class="card-grid">\n'

        # Add cards for each bookmark in the category
        for bookmark in sorted(bookmarks_in_category, key=lambda x: x['name']):
            card_html = f"""                    <div class="card">
                        <h3>{bookmark['name']}</h3>
                        <p>{bookmark['description']}</p>
                        <a href="{bookmark['url']}" class="btn" target="_blank">Open Site</a>
                    </div>"""
            html_output += card_html + "\n"

        # End category section
        html_output += f'                </div>\n'
        html_output += f'            </section>\n'

    # Step 4: Read the template file
    with open('bookmarks.template.html', 'r') as f:
        template_content = f.read()

    # Step 5: Replace the placeholder with the generated HTML
    final_html = template_content.replace('<!-- BOOKMARKS_CONTENT_HERE -->', html_output)

    # Step 6: Write the final result to bookmarks.html
    with open('bookmarks.html', 'w') as f:
        f.write(final_html)

    print("Successfully built bookmarks.html from bookmarks.json")

if __name__ == "__main__":
    build_html()
