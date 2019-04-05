//CHALLENGE 1: ARRAY PRACTICE
//array of Marvel movies in MCU Chronological Order
let movieList = [
  "Captain America: The First Avenger",
  "Captain Marvel",
  "Iron Man",
  "The Incredible Hulk",
  "Iron Man 2",
  "Thor",
  "The Avengers",
  "Iron Man 3",
  "Thor: The Dark World",
  "Captain America: The Winter Soldier",
  "Guardians of the Galaxy",
  "Guardians of the Galaxy Vol. 2",
  "Avengers: Age of Ultron",
  "Ant-Man",
  "Captain America: Civil War",
  "Doctor Strange",
  "Black Panther",
  "Spider-Man-Homecoming",
  "Thor: Ragnarok",
  "Ant-Man and the Wasp",
  "Avengers: Infinity War",
]



//CHALLENGE 2: OBJECT PRACTICE
//object of data related to the "Iron Man" movie
let movieIronMan = {
    timelinePosition: 3,
    title: "Iron Man",
    moviePoster: "images/poster-ironman.jpg",
    releaseDate: "May 2, 2008",
    releasePosition: 1,
    description: "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
    budget: "140,000,000",
    gross: "585,174,222",
    rottonTomatoes: "93%"
  }


//CHALLENGE 3: ARRAY OF OBJECTS PRACTICE
//array of objects of all data related to MCU
let movieListDetailed = [
  {
    timelinePosition: 1,
    title: "Captain America: The First Avenger",
    moviePoster: "images/poster-captainamericafirstavenger.jpg",
    releaseDate: "July 22, 2011",
    releasePosition: 5,
    description: "Marvel's 'Captain America: The First Avenger' focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.",
    budget: "216,700,000",
    gross: "370,569,774",
    rottonTomatoes: "80%"
  },
  {
    timelinePosition: 2,
    title: "Captain Marvel",
    moviePoster: "images/poster-captainmarvel.jpg",
    releaseDate: "March 8, 2019",
    releasePosition: 21,
    description: "Unavailable",
    budget: "152,000,000",
    gross: "1,002,651,774",
    rottonTomatoes: "78%"
  },
  {
    timelinePosition: 3,
    title: "Iron Man",
    moviePoster: "images/poster-ironman.jpg",
    releaseDate: "May 2, 2008",
    releasePosition: 1,
    description: "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
    budget: "140,000,000",
    gross: "585,174,222",
    rottonTomatoes: "93%"
  },
  {
    timelinePosition: 4,
    title: "Iron Man 2",
    moviePoster: "images/poster-ironman2.jpg",
    releaseDate: "May 7, 2010",
    releasePosition: 3,
    description: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and 'Rhodey' Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy.",
    budget: "200,000,000",
    gross: "623,933,331",
    rottonTomatoes: "73%"
  },
  {
    timelinePosition: 5,
    title: "The Incredible Hulk",
    moviePoster: "images/poster-incrediblehulk.jpg",
    releaseDate: "June 13, 2008",
    releasePosition: 2,
    description: "In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power.  As all three grapple with the secrets that led to the Hulk's creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own. One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the creature he holds inside--The Incredible Hulk.",
    budget: "150,000,000",
    gross: "263,427,551",
    rottonTomatoes: "67%"
  },
  {
    timelinePosition: 6,
    title: "Thor",
    moviePoster: "images/poster-thor.jpg",
    releaseDate: "May 6, 2011",
    releasePosition: 4,
    description: "As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.",
    budget: "150,000,000",
    gross: "449,326,618",
    rottonTomatoes: "77%"
  },
  {
    timelinePosition: 7,
    title: "The Avengers",
    moviePoster: "images/poster-theavengers.jpg",
    releaseDate: "May 4, 2012",
    releasePosition: 6,
    description: "Marvel Studios presents in association with Paramount Pictures 'Marvel's The Avengers'--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
    budget: "220,000,000",
    gross: "1,518,812,988",
    rottonTomatoes: "92%"
  },
  {
    timelinePosition: 8,
    title: "Iron Man 3",
    moviePoster: "images/poster-ironman3.jpg",
    releaseDate: "May 3, 2013",
    releasePosition: 7,
    description: "Marvel's 'Iron Man 3' pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man",
    budget: "178,400,000",
    gross: "1,214,811,252",
    rottonTomatoes: "80%"
  },
  {
    timelinePosition: 9,
    title: "Thor: The Dark World",
    moviePoster: "images/poster-thordarkworld.jpg",
    releaseDate: "November 8, 2013",
    releasePosition: 8,
    description: "In the aftermath of Marvel's 'Thor' and 'Marvel's The Avengers,'' Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
    budget: "152,700,000",
    gross: "644,571,402",
    rottonTomatoes: "66%"
  },
  {
    timelinePosition: 10,
    title: "Captain America: The Winter Soldier",
    moviePoster: "images/poster-captainamericawinter.jpg",
    releaseDate: "April 4, 2014",
    releasePosition: 9,
    description: "After the cataclysmic events in New York with The Avengers, Marvel's 'Captain America: The Winter Soldier,' finds Steve Rogers, aka Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier.",
    budget: "177,000,000",
    gross: "714,264,267",
    rottonTomatoes: "90%"
  },
  {
    timelinePosition: 11,
    title: "Guardians of the Galaxy",
    moviePoster: "images/poster-gotg.jpg",
    releaseDate: "August 1, 2014",
    releasePosition: 10,
    description: "An action-packed, epic space adventure, Marvel's 'Guardians of the Galaxy,' expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy's fate in the balance.",
    budget: "195,900,000",
    gross: "773,328,629",
    rottonTomatoes: "91%"
  },
  {
    timelinePosition: 12,
    title: "Guardians of the Galaxy Vol. 2",
    moviePoster: "images/poster-gotg2.jpg",
    releaseDate: "May 5, 2017",
    releasePosition: 15,
    description: "Set to the backdrop of ‘Awesome Mixtape #2,’ Marvel’s Guardians of the Galaxy Vol. 2 continues the team’s adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill’s true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes’ aid as the Marvel cinematic universe continues to expand.",
    budget: "200,000,000",
    gross: "863,756,051",
    rottonTomatoes: "83%"
  },
  {
    timelinePosition: 13,
    title: "Avengers: Age of Ultron",
    moviePoster: "images/poster-avengersultron.jpg",
    releaseDate: "May 1, 2015",
    releasePosition: 11,
    description: "Marvel Studios presents 'Avengers: Age of Ultron,'' the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes, including Iron Man, Captain America, Thor, The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    budget: "365,500,000",
    gross: "1,405,403,694",
    rottonTomatoes: "75%"
  },
  {
    timelinePosition: 14,
    title: "Ant-Man",
    moviePoster: "images/poster-antman.jpg",
    releaseDate: "July 17, 2015",
    releasePosition: 12,
    description: "The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with Marvel Studios' 'Ant-Man.' Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
    budget: "109,300,000",
    gross: "519,311,965",
    rottonTomatoes: "82%"
  },
  {
    timelinePosition: 15,
    title: "Captain America: Civil War",
    moviePoster: "images/poster-captainamericacivilwar.jpg",
    releaseDate: "May 6, 2016",
    releasePosition: 13,
    description: "Marvel’s 'Captain America: Civil War' finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two camps—one led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark’s surprising decision to support government oversight and accountability.",
    budget: "230,000,000",
    gross: "1,153,304,495",
    rottonTomatoes: "91%"
  },
  {
    timelinePosition: 16,
    title: "Spider-Man: Homecoming",
    moviePoster: "images/poster-spidermanhomecoming.jpg",
    releaseDate: "July 7, 2017",
    releasePosition: 16,
    description: "A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine – distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man – but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.",
    budget: "175,000,000",
    gross: "880,166,924",
    rottonTomatoes: "92%"
  },
  {
    timelinePosition: 17,
    title: "Black Panther",
    moviePoster: "images/poster-blackpanther.jpg",
    releaseDate: "February 16, 2018",
    releasePosition: 18,
    description: "Marvel Studios’ 'Black Panther' follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life.",
    budget: "210,000,000",
    gross: "1,346,913,161",
    rottonTomatoes: "97%"
  },
  {
    timelinePosition: 18,
    title: "Doctor Strange",
    moviePoster: "images/poster-drstrange.jpg",
    releaseDate: "November 4, 2016",
    releasePosition: 14,
    description: "From Marvel Studios comes 'Doctor Strange,' the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope, in an unlikely place—a mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing but also the front line of a battle against unseen dark forces bent on destroying our reality. Before long Strange—armed with newly acquired magical powers—is forced to choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
    budget: "236,600,000",
    gross: "677,718,395",
    rottonTomatoes: "89%"
  },
  {
    timelinePosition: 19,
    title: "Thor: Ragnarok",
    moviePoster: "images/poster-thorragnarok.jpg",
    releaseDate: "November 3, 2017",
    releasePosition: 17,
    description: "Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to Asgard to stop Ragnarok—the destruction of his homeworld and the end of Asgardian civilization—at the hands of an all-powerful new threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger—the Incredible Hulk!",
    budget: "180,000,000",
    gross: "853,977,126",
    rottonTomatoes: "92%"
  },
  {
    timelinePosition: 20,
    title: "Ant-Man and the Wasp",
    moviePoster: "images/poster-antmanwasp.jpg",
    releaseDate: "July 6, 2018",
    releasePosition: 20,
    description: "From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: 'Ant-Man and The Wasp.' In the aftermath of 'Captain America: Civil War,' Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he’s confronted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to fight alongside The Wasp as the team works together to uncover secrets from their past.",
    budget: "162,000,000",
    gross: "622,674,139",
    rottonTomatoes: "88%"
  },
  {
    timelinePosition: 21,
    title: "Avengers: Infinity War",
    moviePoster: "images/poster-avengersinfinitywar.jpg",
    releaseDate: "April 27, 2018",
    releasePosition: 19,
    description: "An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' 'Avengers: Infinity War' brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    budget: "400,000,000",
    gross: "2,048,359,754",
    rottonTomatoes: "85%"
  }
]
