// To run this script just allow lesssecureapp permissions of your google account - https://myaccount.google.com/u/2/lesssecureapps?rapt=AEjHL4MriB9o8p13H0wn0egkcpExoBxnKeGWOv_0yoGT3ikf7hmPfV8t41DKcJV2LAUMLrmc57kGtYmn3pNxEtGZmVXofO75JQ&pli=1
const emailids = ['yashsv51@gmail.com', 'yash.srivastava_cs18@gla.ac.in']

for (var i = 0; i < emailids.length; i++) {
    var nodeMailer = require('nodemailer')
    var transport = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'yash162828@gmail.com',
            pass: 'Enter Your Password'
        }
    })

    var mailOptions = {
        from: 'Yash Srivastava',
        to: emailids[i],
        subject: 'test node mail',
        text: 'Hello I am node how are you?',
        html: '<h1>ok Node</h1>'
    }
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log("Email Sent Successfully", info.response)
        }
    })
}