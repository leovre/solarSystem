const solarSystem = [
    { name: "Mercury", ringSystem: false, moons: [] },
    { name: "Venus", ringSystem: false, moons: [] },
    { name: "Earth", ringSystem: false, moons: ["The Moon"] },
    { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
    { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
    { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
    { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// EXAMPLE Prompt 
//console.log(solarSystem[0].ringSystem);

//prompt 1
//console.log(solarSystem[4]);

//prompt 2 
solarSystem[7].moons = ['Nereid'];
//console.log(solarSystem[7]);

//prompt 3
solarSystem[1].moons = ['Endor']
//console.log(solarSystem[1]);

//prompt 4 
solarSystem.push({ name: "Pluto", ringSystem: false, moons: ["Charon"] });


//prompt 5
solarSystem[2].diameter = ["7,917 Miles"];
//console.log(solarSystem[2]);

//prompt 6 
solarSystem[0].ringSystem = true;
//console.log(solarSystem[0]);

//prompt 7
solarSystem[6].moons[3] = "Oberon";
//console.log(solarSystem[6].moons);

//prompt 8
for (let i = 0; i < solarSystem.length; i++) {
    if (solarSystem[i].ringSystem == true) console.log(solarSystem[i]);
    else console.log(`${solarSystem[i].name} has no ringsystem`);
}