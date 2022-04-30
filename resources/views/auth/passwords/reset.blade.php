@extends('layouts.app')

@section('content')
<div class="hero is-primary is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns">
                <div class="column is-6">
                    <div class="has-text-centered">
                        <h1 class="title is-1">
                            👋 Welcome to BuefBoard
                        </h1>
                        <p class="subtitle">The best starter dashboard</p>
                    </div>

                </div>
                <div class="column is-6">
                    <div class="box">
                        <h1>{{ __('Reset Password') }}</h1>
                        <form method="POST" action="{{ route('password.update') }}">
                            @csrf
                            <input type="hidden" name="token" value="{{ $token }}">

                            <div class="field">
                                <label for="email" class="label">{{ __('E-Mail Address') }}</label>
                                <div class="control has-icons-left">
                                    <b-icon icon="at"></b-icon>

                                    <input id="email" class="input @error('email') is-danger @enderror" type="email"
                                        name="email" placeholder="platon@gmail.com"
                                        value="{{ $email ?? old('email') }}" required
                                        autocomplete="email">
                                </div>
                                @error('email')
                                    <p class="help is-danger"><strong>{{ $message }}</strong></p>
                                @enderror
                            </div>

                            <div class="field">
                                <label class="label" for="password">{{ __('Password') }}</label>
                                <div class="control has-icons-left">
                                    <b-icon icon="form-textbox-password"></b-icon>

                                    <input id="password" class="input @error('password') is-danger @enderror"
                                        type="password" name="password" required autocomplete="new-password">

                                </div>
                                @error('password')
                                    <p class="help is-danger"><strong>{{ $message }}</strong></p>
                                @enderror
                            </div>

                            <div class="field">
                                <label class="label"
                                    for="password-confirm">{{ __('Confirm Password') }}</label>
                                <div class="control has-icons-left">
                                    <b-icon icon="form-textbox-password"></b-icon>

                                    <input id="password-confirm" class="input @error('password') is-danger @enderror"
                                        type="password" name="password_confirmation"
                                        value="{{ old('email') }}" required required
                                        autocomplete="new-password">
                                    @error('password')
                                        <p class="help is-danger"><strong>{{ $message }}</strong></p>
                                    @enderror
                                </div>
                            </div>

                            <div class="field is-grouped">
                                <div class="control">
                                    <button type="submit"
                                        class="button is-link">{{ __('Reset Password') }}</button>
                                </div>
                            </div>


                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

@endsection
