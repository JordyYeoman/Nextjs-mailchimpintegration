import axios from 'axios'

const { MAILCHIMP_TOKEN: secret } = process.env

export default async (req, res) => {


    const email = req.body.emailAddress
    try {
        const response = await axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': secret,
            },
            url: `https://us10.api.mailchimp.com/3.0/lists/${process.env.AUDIENCE_ID}/members`,
            data: {
                email_address: email,
                status: 'subscribed'
            }
        })

        if (response.status === 200) {
            res.statusCode = 200
            res.end()
        } else {
            res.statusCode = 400
            res.end()
        }
    } catch { }
}