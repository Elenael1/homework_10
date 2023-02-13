const my_biography = {
    name: "Elena",
    lastName: "Leptyuk",
    age: 17,
    location: {
        city: "Rome",
        country: "Italy",
    }

}

function hello(user) {
    const { name, lastName, age, location: { city, country } } = user;
    console.log(`Welcome,Im ${name} ${lastName} my age is ${age}, i was born in ${city}, ${country}`)
}
hello(my_biography);