@extends('layouts.app')

@section('content')
<div class="hero is-fullheight">
    <div class="columns is-desktop">
        <div class="column is-6 is-flex is-centered is-vcentered is-column has-background-white">
            <div class="section">
                <a href="{{ route('home') }}">
                    <figure class="image" style="max-width:150px">
                        <img src="{{ asset("images/logo_buefboard.svg") }}" alt="">
                    </figure>
                </a>
                <h1 class="title is-1 has-text-weight-bold"> {{ __("Login") }} </h1>
                <p class="subtitle">Don't have an Account ? <a href="/register">Register.</a></p>
                @if(session('message'))
                    <div class="notification is-danger is-light">
                        {{ session('message') }}
                    </div>
                @endif
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="field">
                        <label for="email" class="label">{{ __('E-Mail Address') }}</label>
                        <div class="control has-icons-left">
                            <input id="email" class="input @error('email') is-danger @enderror" type="email"
                                name="email" placeholder="platon@gmail.com" value="{{ old('email') }}"
                                required autocomplete="email" autofocus>
                            <b-icon icon="at" size="is-small is-left"></b-icon>
                        </div>
                        @error('email')
                            <p class="help is-danger"><strong>{{ $message }}</strong></p>
                        @enderror
                    </div>

                    <div class="field">
                        <label class="label" for="password">{{ __('Password') }}</label>
                        <div class="control has-icons-left">
                            <input id="password" class="input @error('password') is-danger @enderror" type="password"
                                name="password" value="{{ old('password') }}" required
                                autocomplete="current-password">
                            <b-icon icon="form-textbox-password" size="is-small is-left"></b-icon>
                        </div>
                        @error('password')
                            <p class="help is-danger"><strong>{{ $message }}</strong></p>
                        @enderror
                    </div>

                    <div class="field">
                        <label class="b-checkbox checkbox">
                            <input type="checkbox" id="remember" name="remember"
                                {{ old('remember') ? 'checked' : '' }}>
                            <span class="check"></span>
                            <span class="control-label">
                                {{ __('Remember Me') }}
                            </span>
                        </label>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button type="submit" class="button is-primary">{{ __('Login') }}</button>
                        </div>
                    </div>

                    <div class="field">
                        @if(Route::has('password.request'))
                            <a class="" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        @endif
                    </div>

                </form>

                <hr />

                <div class="buttons">
                    <a href="{{ route('login.social','linkedin') }}"
                        class="button is-linkedin">
                        <span class="icon is-large">
                            <i class="mdi mdi-24px mdi-linkedin"></i>
                        </span>
                        <span>
                            Login with LinkedIn
                        </span>
                    </a>
                    <a href="{{ route('login.social','apple') }}"
                        class="button is-apple">
                        <span class="icon is-large">
                            <i class="mdi mdi-24px mdi-apple"></i>
                        </span>
                        <span>
                            Login with Apple
                        </span>
                    </a>
                    <a href="{{ route('login.social','google') }}"
                        class="button is-google">
                        <span class="icon">
                            <img src="{{ asset('/images/social/google_g.svg') }}" alt="">
                        </span>
                        <span>
                            Login with Google
                        </span>
                    </a>
                </div>

            </div>
        </div>
        <div class="column is-flex is-centered is-vcentered has-background-primary">
            <div class="section has-text-white has-text-centered">
                <div class="card mb-5">
                    <figure class="image">
                        <img class="" src="{{ asset('images/buefboard/buefboard_users.png') }}"
                            alt="">
                    </figure>
                </div>
                <h2 class="title is-4 has-text-white">User Management</h2>
                <p class="" style="opacity:0.7;">You can filter, sort, block, soft delete and export users</p>
            </div>


        </div>
    </div>

</div>

@endsection
