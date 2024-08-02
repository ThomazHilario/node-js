// import qrCode
import qrcode from 'qrcode'

// import inquirer
import inquirer from 'inquirer'


// Criando as perguntas para o usuário
inquirer.prompt([
    {
        message:'name your qrCode:',
        name:'name'
    },
    {
        message:'Url do qrCode:',
        name:'URL'
    }
]).then((answers) => {
    // Criando um qrCode com base no nome e url passado pelo usuário
    qrcode.toFile(`qrCodes/${answers.name}.png`,answers.URL)
}).catch(() => {
    console.log('algo aconteceu baby')
})