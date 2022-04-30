@extends('layouts.app')

@section('content')

<nav class="navbar">
    <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="{{ asset('images/logo_buefboard.svg') }}" alt="Logo">
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <a class="navbar-item" href="{{ route('login') }}">
                    Login
                </a>
                <a class="navbar-item" href="{{ route('register') }}">
                    Register
                </a>
                <span class="navbar-item">
                    <a type="button" href="https://github.com/QuentinGab/BuefBoard" target="_blank" class="button"><span
                            class="icon is-small"><i class="mdi mdi-github"></i>
                        </span>
                        <span>
                            github
                        </span> </a>
                </span>
            </div>
        </div>
    </div>
</nav>
<section class="hero is-fullheight-with-navbar">
    <div class="section">
        <div class="has-text-centered">
            <h1 class="title is-1">
                BuefBoard
            </h1>
            <p class="subtitle">
                The Elegant <mark class="is-danger">Laravel</mark> Boilerplate using <mark class="is-success">VueJS</mark> & <mark>Bulma</mark>
            </p>
            <div class="buttons is-centered">
                <a href="/admin" class="button is-primary">
                    Demo
                </a>
                <a href="https://github.com/QuentinGab/BuefBoard" class="button">
                    <span class="icon is-small">
                        <i class="mdi mdi-github"></i>
                    </span>
                    <span>
                        github
                    </span> </a>
            </div>
        </div>
    </div>

    <div class="columns is-centered is-marginless">
        <div class="column is-12-tablet is-9-fullhd is-10-desktop">
            <div class="card">
                <figure class="image">
                    <img src="{{ asset("images/buefboard/buefboard_users.png") }}" alt="" srcset="">
                </figure>
            </div>
        </div>
    </div>
</section>

@endsection
