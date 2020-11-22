function gramophone(bandName, albumName, songName) {
    let songDuration = (albumName.length * bandName.length) * songName.length / 2
    let secondsPerRotation = 2.5
    let totalRotations = songDuration / secondsPerRotation
    console.log(`The plate was rotated ${Math.ceil(totalRotations)} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')