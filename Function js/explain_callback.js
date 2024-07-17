function exCallback(name,age,task)
{
    console.log('Name-',name);
    console.log('age',age);
    task();
}
function task1()
{
    console.log('jeta korlay mono rakio');
}
function task2()
{
    console.log('murgi khudi kaisot ni');
}
function task3()
{
    console.log('Manse call tuloin na offline oijain');
}
exCallback('Mendakni',11,task1);
exCallback('Murgi',21,task2);
exCallback('Chipkely',22,task3);