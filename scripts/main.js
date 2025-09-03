document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        // This generic search function now works for bookmarks, commands, and notes pages
        const container = document.querySelector('#bookmarks-container, #commands-container, #notes-container');
        if (!container) return;

        // Handle different content structures
        const entries = container.querySelectorAll('.card, .content-entry');
        const sections = container.querySelectorAll('.category-section');

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            entries.forEach(entry => {
                const text = entry.textContent.toLowerCase();
                const shouldShow = text.includes(searchTerm);
                entry.style.display = shouldShow ? '' : 'none';
            });

            // This part only applies to pages with categories
            if (sections.length > 0) {
                sections.forEach(section => {
                    // Check if any entries within this section (.card or .content-entry) are visible
                    const visibleEntries = Array.from(section.querySelectorAll('.card, .content-entry')).some(
                        entry => entry.style.display !== 'none'
                    );

                    // Hide the section if no entries are visible
                    section.style.display = visibleEntries ? '' : 'none';
                });
            }
        });
    }

    // Copy to clipboard functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contentEntry = button.closest('.content-entry');
            const codeBlock = contentEntry.querySelector('pre code');
            if (codeBlock) {
                navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            }
        });
    });
});
