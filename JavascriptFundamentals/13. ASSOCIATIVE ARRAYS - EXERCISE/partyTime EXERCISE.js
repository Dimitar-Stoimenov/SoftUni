function solve(input) {

    let partyIndex = input.indexOf("PARTY");
    let guestList = input.slice(0, partyIndex);
    let commingGuests = input.slice(partyIndex + 1);

    let reservationList = generateGuestList(guestList);


    commingGuests.forEach((guest) => {
        let status = checkForVIP(guest);
        let correctList = status ? "vip" : 'regular';

        let currentGuest = reservationList[correctList].find((o) => o.guest === guest);

        if (status && currentGuest) {
            currentGuest.isHere = true;
        } else if (!status && currentGuest) {
            currentGuest.isHere = true;
        }
    });

    let vipGuests = reservationList.vip.filter((o) => o.isHere === false)
    let regularGuests = reservationList.regular.filter((o) => o.isHere === false)

    console.log(vipGuests.length + regularGuests.length);

    vipGuests.concat(regularGuests).forEach((guest) => console.log(guest.guest))

    function generateGuestList(guests) {
        let obj = {
            vip: [],
            regular: []
        };

        guests.forEach((guest) => {
            let guestObj = { guest, isHere: false }

            if (checkForVIP(guest)) {
                obj.vip.push(guestObj);
            } else {
                obj.regular.push(guestObj);
            }
        });

        return obj;
    }

    function checkForVIP(guest) {
        return !isNaN(Number(guest[0]));
    }

}

solve(
    ['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
)