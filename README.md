
*URL Shortener*

A simple URL shortener backend application built with Node.js, Express.js, and PostgreSQL.

*Table of Contents*

- #features
- #api-documentation
- #contributing
- #license

*Features*

- Shorten long URLs to shorter, more memorable ones
- Store shortened URLs in a PostgreSQL database
- Retrieve original URLs from shortened ones
- Support for custom short codes


*API Documentation*

The application provides a RESTful API for shortening and retrieving URLs. The API endpoints are documented below:

*Shorten URL*

- *POST /api/shorten*
    - Request Body: `{ "originalUrl": "(link unavailable)" }`
    - Response: `{ "shortCode": "abc123" }`

*Retrieve Original URL*

- *GET /api/shorten/:shortCode*
    - Response: `{ "originalUrl": "(link unavailable)" }`

*Contributing*

Contributions to the project are welcome. To contribute, please fork the repository, make your changes, and submit a pull request.

*License*

The project is licensed under the MIT License. See LICENSE for details.

Your feedback is important.

diamondkudzai70@gmail.com
