#!/bin/bash
npm run build
rm -r /var/www/html/magic-mirror
cp -r dist /var/www/html/magic-mirror

