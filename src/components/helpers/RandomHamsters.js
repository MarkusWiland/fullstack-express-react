export const fetchHamster = async (setHamster, hamster1Id) => {

    try {

        const url = '/api/hamsters/random';
        let hamsters = {};

        do {
            console.log('fetchHamster, hamster1Id', hamster1Id);
            const response = await fetch(url);
            hamsters = await response.json();
            await setHamster({
                age: hamsters.age,
                favFood: hamsters.favFood,
                id: hamsters.id,
                imgName: hamsters.imgName,
                wins: hamsters.wins,
                defeats: hamsters.defeats,
                games: hamsters.games,
                loves: hamsters.loves,
                name: hamsters.name
            });

        } while (hamster1Id === hamsters.id)

    } catch (e) {

        console.log('Fetching random hamster failed because ', e)

    }
}