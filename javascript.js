async function theOfficeCharacters() {
    try {
        const cardImages = [
            'michael.jpg',
            'pam.jpg',
            'dwight.jpg'
        ]
        const characters = await Promise.all([
            fetch('https://theofficeapi.dev/api/character/55'),
            fetch('https://theofficeapi.dev/api/character/62'),
            fetch('https://theofficeapi.dev/api/character/18')
        ]);

        const parsedCharacters = await Promise.all(characters.map(character => character.json()));
        const characterCards = document.querySelectorAll('.card');

        characterCards.forEach((card, index) => {
            const character = parsedCharacters[index];
            const imageUrl = cardImages[index];
            card.innerHTML = `
                <img src="${imageUrl}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>Gender: ${character.gender}</p>
                <p>Job: ${character.job[0]}</p>
                <p>Actor: ${character.actor}</p>
            `;
        });
        console.log(parsedCharacters)

    } catch (err) {
        console.log(err.message, 'error');
    }
}

theOfficeCharacters();
