function describe_city(city_name: string, country_name = "Pakistan") {
  console.log(`${city_name} is in ${country_name}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Dehli", "India");
