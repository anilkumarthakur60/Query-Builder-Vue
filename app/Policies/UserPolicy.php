<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasAnyPermission(['manage users','view users']);
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\User  $model
     * @return mixed
     */
    public function view(User $user, User $model)
    {
        if($user->hasAnyPermission(['manage users','view users'])){
            return true;
        }
        // user can see himself
        return $user->is($model);
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('manage users');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\User  $model
     * @return mixed
     */
    public function update(User $user, User $model)
    {
        //only a god can update a god
        if ($model->hasRole('god')) {
            return false;
        }

        if ($user->can('manage users')) {
            return true;
        }

        return $user->is($model);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\User  $model
     * @return mixed
     */
    public function delete(User $user, User $model)
    {
        //only a god can update a god
        if ($model->hasRole('god')) {
            return false;
        }

        if ($user->hasAnyPermission(['manage users','delete users'])) {
            return true;
        }

        return $user->is($model);
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\User  $model
     * @return mixed
     */
    public function restore(User $user, User $model)
    {
        //only a god can update a god
        if ($model->hasRole('god')) {
            return false;
        }

        if ($user->hasAnyPermission(['manage users','delete users'])) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\User  $model
     * @return mixed
     */
    public function forceDelete(User $user, User $model)
    {
        //only a god can destroy a god
        if ($model->hasRole('god')) {
            return false;
        }

        if ($user->hasAnyPermission(['manage users','destroy users'])) {
            return true;
        }

        return $user->is($model);
    }

}
