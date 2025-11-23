# Images Folder

This folder is for storing local images for your travel recommendation website.

## Current Setup
The website currently uses external image URLs from Unsplash for demonstration purposes. These images are already linked in the `travel_recommendation_api.json` file.

## If You Want to Use Local Images:

1. Download images for each destination
2. Save them in this folder
3. Update the `imageUrl` fields in `travel_recommendation_api.json` to point to local files:
   ```json
   "imageUrl": "images/your-image-name.jpg"
   ```

## Recommended Image Specifications:
- Format: JPG or PNG
- Minimum resolution: 800x600 pixels
- Aspect ratio: 4:3 or 16:9
- File size: Keep under 500KB for faster loading

## Required Images:
- 4 beach images
- 4 temple images
- 6 city images (2 per country)

Total: 14 images needed
