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

                <h1 class="title is-1 has-text-weight-bold">Register</h1>
                <p class="subtitle">Already have an Account ? <a href="/login">Login.</a></p>
                <form method="POST" action="{{ route('register') }}">
                    @csrf
                    <div class="field is-grouped">
                        <div class="field is-expanded">
                            <label for="first_name" class="label">{{ __('First Name') }}</label>
                            <div class="control">
                                <input id="first_name" class="input @error('first_name') is-danger @enderror"
                                    type="name" name="first_name" placeholder="Bill"
                                    value="{{ old('first_name') }}" required autocomplete="first_name"
                                    autofocus>
                            </div>
                            @error('name')
                                <p class="help is-danger"><strong>{{ $message }}</strong></p>
                            @enderror
                        </div>

                        <div class="field is-expanded">
                            <label for="last_name" class="label">{{ __('Last Name') }}</label>
                            <div class="control">
                                <input id="last_name" class="input @error('last_name') is-danger @enderror" type="name"
                                    name="last_name" placeholder="Gates"
                                    value="{{ old('last_name') }}" required autocomplete="last_name"
                                    autofocus>

                            </div>
                            @error('last_name')
                                <p class="help is-danger"><strong>{{ $message }}</strong></p>
                            @enderror
                        </div>
                    </div>


                    <div class="field">
                        <label for="email" class="label">{{ __('E-Mail Address') }}</label>
                        <div class="control">
                            <input id="email" class="input @error('email') is-danger @enderror" type="email"
                                name="email" placeholder="bill.gates@mail.com"
                                value="{{ old('email') }}" required autocomplete="email">

                        </div>
                        @error('email')
                            <p class="help is-danger"><strong>{{ $message }}</strong></p>
                        @enderror
                    </div>

                    <div class="field is-grouped">
                        <div class="field is-expanded">
                            <label class="label" for="password">{{ __('Password') }}</label>
                            <div class="control">
                                <input id="password" class="input @error('password') is-danger @enderror"
                                    type="password" name="password" required autocomplete="new-password">
                            </div>
                            @error('password')
                                <p class="help is-danger"><strong>{{ $message }}</strong></p>
                            @enderror
                        </div>

                        <div class="field is-expanded">
                            <label class="label"
                                for="password-confirm">{{ __('Confirm Password') }}</label>
                            <div class="control">
                                <input id="password-confirm" class="input @error('password') is-danger @enderror"
                                    type="password" name="password_confirmation"
                                    value="{{ old('email') }}" required required
                                    autocomplete="new-password">
                            </div>
                            @error('password')
                                <p class="help is-danger"><strong>{{ $message }}</strong></p>
                            @enderror
                        </div>
                    </div>



                    <div class="field is-grouped">
                        <div class="control">
                            <button type="submit"
                                class="button is-primary">{{ __('Register') }}</button>
                        </div>
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
                            Register with LinkedIn
                        </span>
                    </a>
                    <a href="{{ route('login.social','apple') }}"
                        class="button is-apple">
                        <span class="icon is-large">
                            <i class="mdi mdi-24px mdi-apple"></i>
                        </span>
                        <span>
                            Register with Apple
                        </span>
                    </a>
                    <a href="{{ route('login.social','google') }}"
                        class="button is-google">
                        <span class="icon">
                            <img src="{{ asset('/images/social/google_g.svg') }}" alt="">
                        </span>
                        <span>
                            Register with Google
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
