function Car(manufacturer,model,color='yellow',size='Mid',...optional) {
    optional==''?optional='Not Provided':optional=String(optional)
    let object={
        manufacturer:manufacturer,
        model:model,
        color:color,
        size:size,
        optional_features:optional
        
}
console.log(object)};
Car('toyota','gli');
Car('toyota','gli','red','large');
Car('toyota','gli','red','large','Central locking with Keyless entry','Dual Front Airbags','ABS & EBD','Rear Defogger','Rear Parking Sensors','Day/Night IRVM','Electrically Adjustable ORVMs');