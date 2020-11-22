function solve(inputArray) {
    let numberOfSongs = inputArray.shift()
    let wantedTypeList = inputArray.pop()

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    let songs = inputArray.map(x => {
        let songsArray = x.split('_')
        let [typeList, name, time] = songsArray

        let song = new Song(typeList, name, time)

        return song
    })

    songs.forEach(x => {
        if (x.typeList === wantedTypeList || wantedTypeList === 'all') {
            console.log(x.name);            
        }
    })
}

solve(
    [
        3,
        'favourite_DownTown_3:14',
        'favourite_Kiss_4:16',
        'favourite_Smooth Criminal_4:01',
        'favourite'
    ]
)