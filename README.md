# Steve Sklair - Documentary Filmmaker Website

Portfolio website for Steve Sklair, a BAFTA-winning documentary filmmaker based in London.

## 🎬 About

Steve Sklair is an award-winning filmmaker with 30+ years of experience working with BBC, Channel 4, and other major UK broadcasters. This website showcases his portfolio of documentaries, biographical films, and corporate productions.

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript** - Vanilla JS for interactivity
- **PHP** - Form handling and email

## 📁 Structure

```
websteve/
├── index.html          # Homepage
├── films.html          # Portfolio/Films page
├── steve.html          # About page
├── testimonials.html   # Testimonials page
├── contact.html        # Contact options
├── quick-contact.html  # Quick contact form
├── brief.html          # Project brief form
├── thank-you.html      # Form confirmation
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # Main JavaScript
├── api/
│   └── submit-form.php # Form handler
└── assets/
    └── images/         # Film thumbnails and photos
```

## 🚀 Deployment

1. Upload all files to your web server
2. Ensure PHP is enabled for form handling
3. Forms will send emails to the configured address and log submissions

### Local Development

For local testing with MAMP/XAMPP:
- Forms are logged to `api/emails_local.log` instead of sending emails
- All submissions are recorded in `api/submissions.log`

## 📧 Contact Form

Forms submit to `api/submit-form.php` which:
- Sends emails to the configured recipient
- Logs all submissions to `submissions.log`
- Works without SMTP on localhost (saves to file)

## 📄 License

© 2025 Steve Sklair LTD. All rights reserved.
