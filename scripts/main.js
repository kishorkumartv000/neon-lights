document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        // This generic search function works for both commands and notes pages
        const container = document.querySelector('#commands-container, #notes-container');
        if (!container) return;

        const entries = container.querySelectorAll('.content-entry');
        const sections = container.querySelectorAll('.category-section');

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            entries.forEach(entry => {
                const text = entry.textContent.toLowerCase();
                const shouldShow = text.includes(searchTerm);
                entry.style.display = shouldShow ? '' : 'none';
            });

            // Hide category titles if all entries within them are hidden
            sections.forEach(section => {
                const visibleEntries = section.querySelectorAll('.content-entry[style*="display:"]');
                const allEntries = section.querySelectorAll('.content-entry');
                section.style.display = visibleEntries.length === allEntries.length && searchTerm !== '' ? 'none' : '';
            });
        });
    }
});
