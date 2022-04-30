@extends('layouts.app')

@section('content')
<div class="hero is-primary is-fullheight">
    <div class="hero-body is-columns">
        <div class="columns">
            <div class="column is-6">
                <div class="has-text-centered">
                    <h1 class="title is-1">
                        👋 Welcome to BuefBoard
                    </h1>
                    <p class="subtitle">The best starter dashboard</p>
                </div>

            </div>
            <div class="column is-6 has-background-white has-text-dark">
                <div class="section">
                    @if(session('status'))
                        <div class="notification">
                            {{ session('status') }}
                        </div>
                    @endif

                    <h1 class="title has-text-dark">{{ __('Reset Password') }}</h1>
                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        <div class="field">
                            <label for="email" class="label">{{ __('E-Mail Address') }}</label>
                            <div class="control has-icons-left">
                                <b-icon icon="at"></b-icon>

                                <input id="email" class="input @error('email') is-danger @enderror" type="email"
                                    name="email" placeholder="platon@gmail.com"
                                    value="{{ old('email') }}" required autocomplete="email">

                            </div>
                            @error('email')
                                <p class="help is-danger">{{ $message }}</p>
                            @enderror
                        </div>

                        <div class="field">
                            <div class="control">
                                <button type="submit"
                                    class="button is-link">{{ __('Send Password Reset Link') }}</button>
                            </div>
                        </div>
                        <div>
                            <a href="{{ route('login') }}">Login</a>
                        </div>


                    </form>

                </div>
            </div>
        </div>

    </div>
</div>

@endsection
