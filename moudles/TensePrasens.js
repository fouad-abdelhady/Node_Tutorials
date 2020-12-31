module.exports = {
    getPransensForms:getPresene
} // OR
module.exports.getPransensForms = getPresene;
function getPresene(verb){
    let verbConj = {
        ich:"form1",
        du:"form2",
        er:"form3",
        sie:"form4",
        ihr:"form5",
        wir:"form6"
    }
    return verbConj;
}
//