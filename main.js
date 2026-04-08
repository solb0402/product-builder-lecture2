document.addEventListener('DOMContentLoaded', () => {
    const travelStyles = document.getElementById('travel-styles');
    const countrySelection = document.getElementById('country-selection');
    const countryButtons = document.getElementById('country-buttons');
    const recommendationDetails = document.getElementById('recommendation-details');
    const detailsContent = document.getElementById('details-content');

    const travelData = {
        adventure: {
            'New Zealand': { food: 'Hāngī', attractions: 'Milford Sound' },
            'Iceland': { food: 'Hákarl', attractions: 'Blue Lagoon' },
            'Switzerland': { food: 'Cheese Fondue', attractions: 'Jungfraujoch' }
        },
        relax: {
            'Maldives': { food: 'Garudhiya', attractions: 'Baa Atoll' },
            'French Polynesia': { food: 'Poisson Cru', attractions: 'Bora Bora' },
            'Bali (Indonesia)': { food: 'Nasi Goreng', attractions: 'Ubud' }
        },
        culture: {
            'Italy': { food: 'Pasta', attractions: 'Colosseum' },
            'Egypt': { food: 'Koshary', attractions: 'Pyramids' },
            'Greece': { food: 'Moussaka', attractions: 'Acropolis' }
        },
        foodie: {
            'Japan': { food: 'Sushi', attractions: 'Tsukiji Market' },
            'Thailand': { food: 'Pad Thai', attractions: 'Grand Palace' },
            'France': { food: 'Croissant', attractions: 'Eiffel Tower' }
        }
    };

    let selectedStyle = null;

    // Phase 1: Style Selection
    travelStyles.addEventListener('click', (event) => {
        const button = event.target.closest('.style-btn');
        if (!button) return;

        selectedStyle = button.dataset.style;
        const countries = travelData[selectedStyle];

        if (countries) {
            countryButtons.innerHTML = '';
            Object.keys(countries).forEach(countryName => {
                const btn = document.createElement('button');
                btn.className = 'country-btn';
                btn.textContent = countryName;
                btn.dataset.country = countryName;
                countryButtons.appendChild(btn);
            });

            // 화면 표시 전환
            countrySelection.style.display = 'block';
            recommendationDetails.style.display = 'none';
        }
    });

    // Phase 2: Country Selection
    countryButtons.addEventListener('click', (event) => {
        const button = event.target.closest('.country-btn');
        if (!button) return;

        const countryName = button.dataset.country;
        const info = travelData[selectedStyle][countryName];

        if (info) {
            detailsContent.innerHTML = `
                <h3>${countryName}</h3>
                <p><strong>Famous Food:</strong> ${info.food}</p>
                <p><strong>Main Attractions:</strong> ${info.attractions}</p>
            `;
            // 상세 정보 표시
            recommendationDetails.style.display = 'block';
        }
    });
});
