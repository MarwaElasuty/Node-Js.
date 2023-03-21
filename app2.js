var Customer=require('./Q2');
try{
    var getString=Customer.getAge('Marwa',new Date(2000,7,13));
    console.log(getString);
}
catch(error){
    console.error(error.message)
};