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

# In the client application
npm install @stephaneeybert/lib-i18n
npm install @ngx-translate/core --save-dev
npm install @ngx-translate/http-loader --save-dev
