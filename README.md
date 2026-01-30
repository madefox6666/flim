
# Hostinger VPS Deployment Guide

## 1. Local Preparation
- Ensure folder structure:
  - `public/assets/hero.mp4`
  - `public/assets/philosophy.mp4`
- Run `npm run build`

## 2. Server Setup (Run these on VPS via SSH)
```bash
# Update and install Nginx
sudo apt update
sudo apt install nginx -y

# Remove default Nginx site
sudo rm /etc/nginx/sites-enabled/default

# Create site config
sudo nano /etc/nginx/sites-available/vision-studio
```

## 3. Nginx Configuration
Paste this into the editor:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Optimization for video streaming
    location ~* \.(mp4|webm)$ {
        add_header Accept-Ranges bytes;
        expires max;
        add_header Cache-Control public;
    }
}
```

## 4. Finalizing
```bash
# Enable the config
sudo ln -s /etc/nginx/sites-available/vision-studio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Install SSL (Critical for Autoplay)
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com
```
