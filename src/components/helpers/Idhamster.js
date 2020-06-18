export const fetchIdHamster = async (setHamster, hamsterId) => {

    try {

        const url = '/api/hamsters/' + hamsterId;
        const response = await fetch(url);
        const idHamster = await response.json();
        setHamster({
            age: idHamster.age,
            favFood: idHamster.favFood,
            id: idHamster.id,
            imgName: idHamster.imgName,
            wins: idHamster.wins,
            defeats: idHamster.defeats,
            games: idHamster.games,
            loves: idHamster.loves,
            name: idHamster.name
        });

    } catch (e) {

        console.log('Fetching hamster failed because ', e)

    }
}