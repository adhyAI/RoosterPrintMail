# Demo Request Notification System

## How to Monitor Demo Requests

### 1. Admin Dashboard
- Visit `/admin` in your browser to see all demo requests
- Updates automatically every 30 seconds
- Search and filter requests by name, email, or company
- Click email addresses to open your email client
- Click phone numbers to initiate calls

### 2. Console Notifications
When a demo request is submitted, you'll see detailed information in your server console:

```
🎯 NEW DEMO REQUEST RECEIVED:
Name: John Smith
Email: john@company.com
Company: ABC Corp
Phone: (555) 123-4567
Message: Interested in kiosk for our office
Time: 1/31/2025, 4:27:43 PM
==================================================
```

### 3. Real-time Monitoring
The admin dashboard automatically refreshes every 30 seconds to show new requests. You can also manually refresh using the "Refresh" button.

### 4. Statistics Overview
The dashboard shows:
- Total number of demo requests
- Requests received today
- Number of unique companies

### 5. Quick Actions
From each request card, you can:
- Click "Email" to compose a response
- Click "Call" to dial the phone number (if provided)
- View full request details including custom messages

## Access Methods

1. **Direct URL**: Go to `your-domain.com/admin`
2. **Footer Link**: Click "Admin Dashboard" in the website footer
3. **Bookmark**: Save the admin URL for quick access

### Security
- The admin dashboard is password protected
- **Default password**: `rooster2025`
- Authentication persists in browser until logout
- Only you should have access to this password

**Important**: Change the password in `/client/src/components/admin-auth.tsx` for production use.

## Best Practices

1. Check the admin dashboard at least twice daily
2. Respond to demo requests within 24 hours
3. Use the console logs for immediate notifications during active hours
4. Keep the admin page open in a browser tab for real-time updates

## Technical Details

- Demo requests are stored in memory (will persist until server restart)
- All data is validated before storage
- Email addresses and phone numbers are clickable for easy contact
- The system handles timezone display automatically