# LibI18n

# Bump the library project version
cd projects/lib-i18n/;
npm version patch;
cd ../../;

# Build the library
npm run package;

# Sync the workspace version to the library project one
ng-version-sync-parent;

# Publish the library
npm publish ./dist/lib-i18n/stephaneeybert-lib-i18n-

# Install the dependencies in the client application
npm install @ngx-translate/core --save-dev
npm install @ngx-translate/http-loader --save-dev
npm install @stephaneeybert/lib-i18n@latest

# Serve again the client application
Ctrl+C
ng serve
