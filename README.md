# README

## Getting Started

Before runing the application, install the following:

```bash
ruby-3.0.1
rails 7.0.1
mysql
node
```

To run the development server:

```bash
bin/setup
bin/dev
```

## Project RoadMap

* [x] Create Authentication using devise gem
* [x] Used JWT token for Authorization
* [x] Integrate react with rails app only
* [x] Added Material for UI
* [x] User able to send invite the users
* [x] For testing mailer used is letter opener, email will open in browser
* [x] Invite user able to signup using the referral code
* [x] User able to see all the referred user who joined in the system

## Pending
* [ ] Validations
* [ ] Generic alerting component
* [ ] Mailer can be used like sendgrid, or other services
* [ ] May be retain the referral code even if user navigate to other tabs but this business call.
* [ ] Also pending invite can be stored in another table which can also shown to users, as I don't have restriction on invite this might not be required.

## Seed data
For testing some of the users added

```
email: test@example.com
password: password

```