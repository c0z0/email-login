# [email-login](https://email-login.demos.cserdean.me/)

Simple login strategy demo by sending an email with a verification link.

### Get started:
```
$ git clone https://github.com/c0z0/email-login.git
$ cd email-login

$ yarn install
$ yarn dev
  or
$ npm install
$ npm run dev
```

Mailgun api key present in `MAILGUN_KEY` env variable required for sending mails. If not provided the app will print the verification links to the console.

Inspired from Slack's magic link login.
