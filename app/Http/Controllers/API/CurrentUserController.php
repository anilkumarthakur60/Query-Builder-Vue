<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\UpdateUserPasswordRequest;
use App\Http\Requests\Users\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CurrentUserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display the current user.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {

        $user = $request->user();
        $user->load('permissions');

        $this->authorize('view', $user);

        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Users\UpdateUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request)
    {
        $user = $request->user();
        $user->load('permissions');
        $this->authorize('update', $user);

        $validated = $request->validated();

        $user->update(
            $validated
        );

        return new UserResource($user);
    }

    /**
     * Update current user's password
     *
     * @param \App\Http\Requests\Users\UpdateUserPasswordRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updatePassword(UpdateUserPasswordRequest $request)
    {
        $user = $request->user();
        $user->load('permissions');
        $this->authorize('update', $user);

        $validated = $request->validated();

        $user->password = Hash::make($validated['password']);
        $user->save();

        return new UserResource($user);
    }

    /**
     * Update current user's avatar
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateAvatar(Request $request)
    {
        $user = $request->user();
        $user->load('permissions');
        $this->authorize('update', $user);

        if ($request->hasFile('avatar') && $request->file('avatar')->isValid()) {
            $file = $request->file('avatar');
            $extension = $file->extension();
            $filename = Str::slug($user->fullname);

            $user->addMediaFromRequest('avatar')
                ->usingName($user->fullname)
                ->usingFileName("$filename.$extension")
                ->toMediaCollection('avatar');
        }

        return new UserResource($user);
    }

    /**
     * Delete current user's avatar
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroyAvatar(Request $request)
    {
        $user = $request->user();
        $user->load('permissions');
        $this->authorize('update', $user);

        $user->clearMediaCollection('avatar');

        return new UserResource($user);
    }

    /**
     * Remove the user from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $user = $request->user();
        $user->load('permissions');
        $this->authorize('forceDelete', $user);

        $user->forceDelete();
        return new UserResource($user);
    }

}
