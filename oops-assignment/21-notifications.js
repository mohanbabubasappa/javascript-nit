class Notification { send() { console.log("Notification sent") } }
class EmailNotification extends Notification { send() { console.log("Email sent") } }
class SmsNotification extends Notification { send() { console.log("SMS sent") } }
class PushNotification extends Notification { send() { console.log("Push notification sent") } }
for (const notification of [new EmailNotification(), new SmsNotification(), new PushNotification()]) notification.send()
