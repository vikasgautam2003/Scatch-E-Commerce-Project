# 🛍️ Scatch - E-Commerce Website for Bags

Scatch is a full-stack e-commerce web application for purchasing bags. Built using **Node.js**, **Express**, and **MongoDB**, this project allows users to browse, add products to cart, and manage their orders, while admins can manage products and view users through a dedicated admin panel.

---

## 🚀 Features

### 👥 User Side
- 📝 **Sign Up / Login**: Secure authentication using email and password.
- 🛒 **Add to Cart**: Easily add and remove bags from the cart.
- 📦 **Place Orders** *(optional)*: Users can proceed to checkout and place orders. *(Add if implemented)*
- 🧑‍💼 **User Dashboard**: View profile details, orders, and cart summary.

### 🛠️ Admin Panel
- 🔐 Admin Login
- ➕ **Create Product**: Add new bags with image, price, and description.
- 🗃️ **Manage Products**: Edit or delete existing products.
- 👥 **Manage Users** *(optional)*: View registered users.

---

## 💻 Tech Stack

| Tech | Description |
|------|-------------|
| **Node.js** | JavaScript runtime for server-side logic |
| **Express.js** | Backend web framework |
| **MongoDB** | NoSQL database to store users, products, carts |
| **EJS** | Embedded JavaScript templating for rendering views |
| **Mongoose** | MongoDB ORM for schema and database interaction |

---

## 🏗️ Project Structure


C:.
├───.gitignore
├───config
├───controllers
├───image
├───middlewares
├───models
├───node_modules
│   ├───.bin
│   ├───@mongodb-js
│   │   └───saslprep
│   │       └───dist
│   ├───@types
│   │   ├───webidl-conversions
│   │   └───whatwg-url
│   │       └───lib
│   ├───accepts
│   ├───append-field
│   │   ├───lib
│   │   └───test
│   ├───bcrypt
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───examples
│   │   ├───prebuilds
│   │   │   ├───darwin-arm64
│   │   │   ├───darwin-x64
│   │   │   ├───linux-arm
│   │   │   ├───linux-arm64
│   │   │   ├───linux-x64
│   │   │   ├───win32-arm64
│   │   │   └───win32-x64
│   │   ├───src
│   │   └───test
│   ├───body-parser
│   │   └───lib
│   │       └───types
│   ├───bson
│   │   ├───etc
│   │   ├───lib
│   │   ├───src
│   │   │   ├───parser
│   │   │   │   └───on_demand
│   │   │   └───utils
│   │   └───vendor
│   │       ├───base64
│   │       └───text-encoding
│   │           └───lib
│   ├───buffer-equal-constant-time
│   ├───buffer-from
│   ├───busboy
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───bench
│   │   ├───lib
│   │   │   └───types
│   │   └───test
│   ├───bytes
│   ├───call-bind-apply-helpers
│   │   ├───.github
│   │   └───test
│   ├───call-bound
│   │   ├───.github
│   │   └───test
│   ├───concat-stream
│   ├───config
│   │   └───lib
│   ├───connect-flash
│   │   └───lib
│   ├───content-disposition
│   ├───content-type
│   ├───cookie
│   ├───cookie-parser
│   │   └───node_modules
│   │       └───cookie-signature
│   ├───cookie-signature
│   ├───debug
│   │   └───src
│   ├───depd
│   │   └───lib
│   │       └───browser
│   ├───dotenv
│   │   └───lib
│   ├───dunder-proto
│   │   ├───.github
│   │   └───test
│   ├───ecdsa-sig-formatter
│   │   └───src
│   ├───ee-first
│   ├───encodeurl
│   ├───es-define-property
│   │   ├───.github
│   │   └───test
│   ├───es-errors
│   │   ├───.github
│   │   └───test
│   ├───es-object-atoms
│   │   ├───.github
│   │   └───test
│   ├───escape-html
│   ├───etag
│   ├───express
│   │   └───lib
│   ├───express-session
│   │   ├───node_modules
│   │   │   ├───cookie-signature
│   │   │   ├───debug
│   │   │   │   └───src
│   │   │   └───ms
│   │   └───session
│   ├───finalhandler
│   ├───forwarded
│   ├───fresh
│   ├───function-bind
│   │   ├───.github
│   │   └───test
│   ├───get-intrinsic
│   │   ├───.github
│   │   └───test
│   ├───get-proto
│   │   ├───.github
│   │   └───test
│   ├───gitkeep
│   ├───gopd
│   │   ├───.github
│   │   └───test
│   ├───has-symbols
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───hasown
│   │   └───.github
│   ├───http-errors
│   │   └───node_modules
│   │       └───statuses
│   ├───iconv-lite
│   │   ├───.github
│   │   ├───.idea
│   │   │   ├───codeStyles
│   │   │   └───inspectionProfiles
│   │   ├───encodings
│   │   │   └───tables
│   │   └───lib
│   ├───inherits
│   ├───ipaddr.js
│   │   └───lib
│   ├───is-promise
│   ├───json5
│   │   ├───dist
│   │   └───lib
│   ├───jsonwebtoken
│   │   └───lib
│   ├───jwa
│   ├───jws
│   │   └───lib
│   ├───kareem
│   ├───lodash.includes
│   ├───lodash.isboolean
│   ├───lodash.isinteger
│   ├───lodash.isnumber
│   ├───lodash.isplainobject
│   ├───lodash.isstring
│   ├───lodash.once
│   ├───math-intrinsics
│   │   ├───.github
│   │   ├───constants
│   │   └───test
│   ├───media-typer
│   ├───memory-pager
│   ├───merge-descriptors
│   ├───mime-db
│   ├───mime-types
│   ├───minimist
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   ├───mkdirp
│   │   └───bin
│   ├───mongodb
│   │   ├───etc
│   │   ├───lib
│   │   │   ├───bulk
│   │   │   ├───client-side-encryption
│   │   │   │   └───providers
│   │   │   ├───cmap
│   │   │   │   ├───auth
│   │   │   │   │   └───mongodb_oidc
│   │   │   │   ├───handshake
│   │   │   │   └───wire_protocol
│   │   │   │       └───on_demand
│   │   │   ├───cursor
│   │   │   ├───gridfs
│   │   │   ├───operations
│   │   │   │   ├───client_bulk_write
│   │   │   │   └───search_indexes
│   │   │   └───sdam
│   │   └───src
│   │       ├───bulk
│   │       ├───client-side-encryption
│   │       │   └───providers
│   │       ├───cmap
│   │       │   ├───auth
│   │       │   │   └───mongodb_oidc
│   │       │   ├───handshake
│   │       │   └───wire_protocol
│   │       │       └───on_demand
│   │       ├───cursor
│   │       ├───gridfs
│   │       ├───operations
│   │       │   ├───client_bulk_write
│   │       │   └───search_indexes
│   │       └───sdam
│   ├───mongodb-connection-string-url
│   │   └───lib
│   ├───mongoose
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───cast
│   │   │   ├───cursor
│   │   │   ├───drivers
│   │   │   │   ├───browser
│   │   │   │   └───node-mongodb-native
│   │   │   ├───error
│   │   │   ├───helpers
│   │   │   │   ├───aggregate
│   │   │   │   ├───cursor
│   │   │   │   ├───discriminator
│   │   │   │   ├───document
│   │   │   │   ├───error
│   │   │   │   ├───indexes
│   │   │   │   ├───model
│   │   │   │   ├───path
│   │   │   │   ├───populate
│   │   │   │   ├───projection
│   │   │   │   ├───query
│   │   │   │   ├───schema
│   │   │   │   ├───schematype
│   │   │   │   ├───timestamps
│   │   │   │   ├───topology
│   │   │   │   └───update
│   │   │   ├───options
│   │   │   ├───plugins
│   │   │   ├───schema
│   │   │   │   └───operators
│   │   │   └───types
│   │   │       ├───array
│   │   │       │   └───methods
│   │   │       └───documentArray
│   │   │           └───methods
│   │   └───types
│   ├───mpath
│   │   ├───lib
│   │   └───test
│   ├───mquery
│   │   ├───.github
│   │   └───lib
│   │       └───collection
│   ├───ms
│   ├───multer
│   │   ├───lib
│   │   ├───node_modules
│   │   │   ├───media-typer
│   │   │   ├───mime-db
│   │   │   ├───mime-types
│   │   │   └───type-is
│   │   └───storage
│   ├───negotiator
│   │   └───lib
│   ├───node-addon-api
│   │   └───tools
│   ├───node-gyp-build
│   ├───object-assign
│   ├───object-inspect
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   │       └───browser
│   ├───on-finished
│   ├───on-headers
│   ├───once
│   ├───parseurl
│   ├───path-to-regexp
│   │   └───dist
│   ├───proxy-addr
│   ├───punycode
│   ├───qs
│   │   ├───.github
│   │   ├───dist
│   │   ├───lib
│   │   └───test
│   ├───random-bytes
│   ├───range-parser
│   ├───raw-body
│   ├───readable-stream
│   │   └───lib
│   │       └───internal
│   │           └───streams
│   ├───router
│   │   └───lib
│   ├───safe-buffer
│   ├───safer-buffer
│   ├───semver
│   │   ├───bin
│   │   ├───classes
│   │   ├───functions
│   │   ├───internal
│   │   └───ranges
│   ├───send
│   ├───serve-static
│   ├───setprototypeof
│   │   └───test
│   ├───side-channel
│   │   ├───.github
│   │   └───test
│   ├───side-channel-list
│   │   ├───.github
│   │   └───test
│   ├───side-channel-map
│   │   ├───.github
│   │   └───test
│   ├───side-channel-weakmap
│   │   ├───.github
│   │   └───test
│   ├───sift
│   │   ├───es
│   │   ├───es5m
│   │   ├───lib
│   │   └───src
│   ├───sparse-bitfield
│   ├───statuses
│   ├───streamsearch
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───lib
│   │   └───test
│   ├───string_decoder
│   │   └───lib
│   ├───toidentifier
│   ├───tr46
│   │   └───lib
│   ├───type-is
│   ├───typedarray
│   │   ├───example
│   │   └───test
│   │       └───server
│   ├───uid-safe
│   ├───unpipe
│   ├───util-deprecate
│   ├───vary
│   ├───webidl-conversions
│   │   └───lib
│   ├───whatwg-url
│   │   └───lib
│   ├───wrappy
│   └───xtend
├───public
│   ├───images
│   ├───javascripts
│   └───stylesheets
├───routes
├───utils
└───views
    └───partials

🙌 Contributing
Feel free to fork the project and submit a pull request. Suggestions and feedback are always welcome!

