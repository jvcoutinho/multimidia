// Loading songs.
var bg_sound = new Howl({
    src: ['./music/timebomb.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.2
});
var id = bg_sound.play();
bg_sound.seek(55, id);

var maximumCharge = new Howl({
    src: ['./music/maximumChargeZarya.ogg'],
    autoplay: false,
    volume: 1
});

var foodEat = new Howl({
    src: ['./music/eatfood.mp3'],
    autoplay: false,
    volume: 0.5
});

var deadSound = new Howl({
    src: ['./music/mazd.mp3'],
    autoplay: false,
    loop: true,
    volume: 0.1
});