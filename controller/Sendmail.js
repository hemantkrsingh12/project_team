const sendMail = async (req, res) => {
    try {

        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure:true,
            port:465,
            auth: {
                user: 'hemantsingh5367@gmail.com',
                pass: 'drpf uqfz bijr btuh'
            }
        });

        var mailOptions = {
            from: 'hemantsingh5367@gmail.com',
            to: 'nitinsaxena.2k20@gmail.com',
            subject: 'Bsdk Le Email functionality apni',
            text: 'Peetegi saale sudhrr jaa '
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        return res.status(200).send("I am sending mail");
    } catch (e) {
        return res.status(500).send(e.message);
    }
};

module.exports = {

    sendMail,

};