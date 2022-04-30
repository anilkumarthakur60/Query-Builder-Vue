<p align="center" >
    <img width="400" src="/public/images/logo_buefboard.svg">
</p>

# BuefBoard - the ultimate Laravel/VueJS Dashboard
Permissions, users management, chartjs, material icons, buefy, axios, Telescope, Socialite ...

<p align="center">
    <img src="/public/images/buefboard/buefboard_users.png" >
</p>

## About BuefBoard

Buefborad is a Laravel + VueJS + Bulma SPA Dashboard, it is a great starter point for your website.

- Full users management ready to use: block, update, delete, export users easily.
- Permissions and roles ready to use: Based on [spatie package](https://github.com/spatie/laravel-permission)
- ChartJS ready to use
- Policy: Users and Roles.
- API: keep it clean with [spatie query builder package](https://github.com/spatie/laravel-query-builder) and [vue-api-query](https://github.com/robsontenorio/vue-api-query)

## Installation
```bash
composer create-project quentingab/buefboard
```

Laravel key will be automatically generated

Setup your database

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
And migrate
```bash
php artisan migrate --seed
```

```bash
npm install
```

```bash
npm run watch
```


## Packages:
- [spatie/laravel-permission](https://github.com/spatie/laravel-permission)
- [spatie/laravel-query-builder](https://github.com/spatie/laravel-query-builder)
- [spatie/laravel-medialibrary](https://github.com/spatie/laravel-medialibrary)
- [spatie/laravel-activitylog](https://github.com/spatie/laravel-activitylog)
- [robsontenorio/vue-api-query](https://github.com/robsontenorio/vue-api-query)
- [maatwebsite/excel](https://github.com/Maatwebsite/Laravel-Excel)

- [axios](https://github.com/axios/axios)
- [vue-chartjs](https://github.com/apertureless/vue-chartjs)


## License
The BuefBoard is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
