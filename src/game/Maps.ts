import {GameMap} from "../types/Map";

export const difficulties = [
    'Amateur',
    'Intermediate',
    'Professional',
    'Nightmare',
    "Insanity",
    "Challenge",
    "Apocalypse 1",
    "Apocalypse 2",
    "Apocalypse 3"
]

export const Tanglewood: GameMap = {
    type: "Tanglewood",
    name: "6 Tanglewood Drive",
    size: "small",
    floors: 2,
    keys: ['Main Door Key', 'Car Key'],
    images: ['Tangle_Wood_Street_House_Map_1.1.png']
}

export const Ridgeview: GameMap = {
    type: "Ridgeview",
    name: "10 Ridgeview Court",
    size: "small",
    floors: 3,
    keys: ['Main Door Key'],
    images: ['RidgeviewRoadHouse_Map.jpg']
}

export const Willow: GameMap = {
    type: "Willow",
    name: "13 Willow Street",
    size: "small",
    floors: 2,
    keys: ['Main Door Key', 'Car Key'],
    images: ['Willow_Street_House_Map.jpg']
}

export const Edgefield: GameMap = {
    type: "Edgefield",
    name: "42 Edgefield Road",
    size: "small",
    floors: 3,
    keys: ['Main Door Key', 'Car Key'],
    images: ['Edgefield_Street_House_Map.jpg']
}

export const Bleasdale: GameMap = {
    type: "Bleasdale",
    name: "Bleasdale Farmhouse",
    size: "small",
    floors: 3,
    keys: ['Main Door Key', 'Car Key'],
    images: ['BleasdaleFarmHouseMap.jpg']
}

export const Woodwind: GameMap = {
    type: "Woodwind",
    name: "Camp Woodwind",
    size: "small",
    floors: 1,
    keys: ["Front Door Key"],
    images: ["Woodwind.webp"]
}

export const Grafton: GameMap = {
    type: "Grafton",
    name: "Grafton Farmhouse",
    size: "small",
    floors: 2,
    keys: ['Main Door Key'],
    images: ['GraftonFarmhouse_Map.jpg']
}

export const PointHope: GameMap = {
    type: "PointHope",
    name: "Point Hope",
    size: "small",
    floors: 10,
    keys: ["Main Door Key", "Lantern Cabinet Key"],
    images: ["PointHope.png"]
}

export const MapleLodge: GameMap = {
    type: "MapleLodge",
    name: "Maple Lodge Campsite",
    size: "medium",
    floors: 3,
    keys: ['Main Door Key', 'Cabin Key'],
    images: ['Maple_Lodge_Campsite_Map.png', 'Maple_Lodge_Cabin_First_Floor.png', 'Maple_Lodge_Cabin_Second_Floor.png'],
}

export const Prison: GameMap = {
    type: "Prison",
    name: "Prison",
    size: "medium",
    floors: 2,
    keys: ['Main Door Key'],
    images: ['Prison_Map.png']
}

export const SunnyMeadowsRestricted: GameMap = {
    type: "SunnyMeadowsRestricted",
    name: "Sunny Meadows Mental Institution (Restricted)",
    size: "medium",
    floors: 2,
    keys: ['Main Door Key'],
    images: ['AsylumMap.jpg']
}

export const Brownstone: GameMap = {
    type: "Brownstone",
    name: "Brownstone High School",
    size: "large",
    floors: 2,
    keys: ['Main Door Key'],
    images: ['BrownstoneHighSchool_Map.jpg']
}

export const SunnyMeadows: GameMap = {
    type: "SunnyMeadows",
    name: "Sunny Meadows Mental Institution",
    size: "large",
    floors: 2,
    keys: ['Main Door Key'],
    images: ['AsylumMap.jpg']
}

export const Maps = [
    Tanglewood,
    Ridgeview,
    Willow,
    Edgefield,
    Bleasdale,
    Woodwind,
    Grafton,
    PointHope,
    MapleLodge,
    Prison,
    SunnyMeadowsRestricted,
    Brownstone,
    SunnyMeadows
]