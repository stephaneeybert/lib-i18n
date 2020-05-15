# LibI18n

# Bump the version
cd projects/lib-i18n/;
npm version patch;
cd ../../;

# Build the library
npm run package;

# Publish the library
npm publish ./dist/lib-i18n/stephaneeybert-lib-i18n-
ng-version-sync-parent

# In the client application
npm install @stephaneeybert/lib-i18n
npm install @ngx-translate/core --save-dev
npm install @ngx-translate/http-loader --save-dev
