document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');
    const eventNameInput = document.getElementById('eventName');
    const eventDateInput = document.getElementById('eventDate');
    const eventCategorySelect = document.getElementById('eventCategory');
    const eventDescription = document.getElementById('eventDescription');
    const cardContainer = document.getElementById('cardContainer');
    const clearEventsBtn = document.getElementById('clearEvents');
    const addSampleBtn = document.getElementById('addSampleEvents');
    const demoPara = document.getElementById('dom-para');

    // Loading events from localStorage on page load
    let events = JSON.parse(localStorage.getItem('smartEvents')) || [];

    function renderEvents() {
        cardContainer.innerHTML = ''; 

        if (events.length === 0) {
            cardContainer.innerHTML = '<p class="no-events">No events added yet.</p>';
            return;
        }

        events.forEach((event, index) => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <h3>${escapeHTML(event.name)}</h3>
                <div class="event-meta">
                    <span class="event-date">${formatDate(event.date)}</span>
                    <span class="event-category ${event.category.toLowerCase()}">${event.category}</span>
                </div>
                <p class="event-desc">${escapeHTML(event.description)}</p>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            cardContainer.appendChild(card);
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.dataset.index);
                deleteEvent(index);
            });
        });
    }

    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newEvent = {
            name: eventNameInput.value.trim(),
            date: eventDateInput.value,
            category: eventCategorySelect.value,
            description: eventDescription.value.trim(),
            created: new Date().toISOString()
        };

        if (!newEvent.name || !newEvent.date || !newEvent.category) {
            alert('Please fill in all required fields');
            return;
        }

        events.push(newEvent);
        saveEvents();
        renderEvents();

        eventForm.reset();
    });

    function deleteEvent(index) {
        if (confirm('Delete this event?')) {
            events.splice(index, 1);
            saveEvents();
            renderEvents();
        }
    }

    clearEventsBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete ALL events?')) {
            events = [];
            saveEvents();
            renderEvents();
        }
    });

    addSampleBtn.addEventListener('click', () => {
        const samples = [
            {
                name: "React Advanced Patterns",
                date: "2025-03-15",
                category: "Workshop",
                description: "Deep dive into compound components, render props, hooks patterns and custom hooks architecture.",
                created: new Date().toISOString()
            },
            {
                name: "AI in Frontend Development",
                date: "2025-04-02",
                category: "Webinar",
                description: "How AI tools are changing the way we write, debug and design frontend applications in 2025.",
                created: new Date().toISOString()
            },
            {
                name: "Next.js Conf 2025 Meetup",
                date: "2025-05-20",
                category: "Meetup",
                description: "Local community meetup after Next.js Conf – let's discuss App Router vs Pages Router in production.",
                created: new Date().toISOString()
            }
        ];

        events.push(...samples);
        saveEvents();
        renderEvents();
    });

    function saveEvents() {
        localStorage.setItem('smartEvents', JSON.stringify(events));
    }

    function formatDate(isoDate) {
        if (!isoDate) return 'No date';
        const date = new Date(isoDate);
        return date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }

    function escapeHTML(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // adding event listener to demoPara to change its text on listening any user event like click, mouseover, mouseout, etc.
    document.addEventListener('click', (e) => {
        demoPara.textContent = `You clicked at (${e.target.tagName})!`;
    })
    document.addEventListener('mouseover', (e) => {
        demoPara.textContent = `You hovered over the "${e.target.tagName}" element!`;
    })
    document.addEventListener('mouseout', (e) => {
        demoPara.textContent = `You moved out of the "${e.target.tagName}" element!`;
    })
    document.addEventListener('mousemove', (e) => {
        demoPara.textContent = `You moved the mouse at (${e.target.tagName})!`;
    })
    document.addEventListener('dblclick', (e) => {
        demoPara.textContent = `You double clicked at (${e.target.tagName})!`;
    })
    document.addEventListener('keydown', (e) => {
        demoPara.textContent = `You pressed the "${e.key}" key!`;
    })
    document.addEventListener('keyup', (e) => {
        demoPara.textContent = `You released the "${e.key}" key!`;
    })

    renderEvents();
});